import fs from "fs";
import path from "path";
import crypto from "crypto";
import { execSync } from "child_process";

const CONTENT_DIR = "content";
const ASSETS_DIR = "public/tikz-assets";
const TEMP_DIR = "scripts/.temp_tikz";

// Ensure directories exist
if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR, { recursive: true });
if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR, { recursive: true });

function getAllMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllMarkdownFiles(filePath, fileList);
    } else if (file.endsWith(".md")) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

function getHash(text) {
  return crypto.createHash("md5").update(text).digest("hex");
}

function processTikz(code, hash) {
  const svgPath = path.resolve(ASSETS_DIR, `${hash}.svg`);
  if (fs.existsSync(svgPath)) {
    return;
  }

  console.log(`- Generating ${hash}...`);

  const texFile = path.resolve(TEMP_DIR, `${hash}.tex`);
  const dviFile = path.resolve(TEMP_DIR, `${hash}.dvi`);
  
  // Separate preamble commands from the body
  const lines = code.split("\n");
  const preambleLines = [];
  const bodyLines = [];
  
  const preambleKeywords = [
    "\\usepackage",
    "\\usetikzlibrary",
    "\\pgfplotsset",
    "\\tikzset",
    "\\definecolor"
  ];

  lines.forEach(line => {
    const trimmed = line.trim();
    if (preambleKeywords.some(kw => trimmed.startsWith(kw))) {
      preambleLines.push(line);
    } else {
      bodyLines.push(line);
    }
  });

  let body = bodyLines.join("\n").trim();
  // Ensure it's wrapped in tikzpicture or axis if needed
  if (!body.includes("\\begin{tikzpicture}") && !body.includes("\\begin{axis}")) {
     body = `\\begin{tikzpicture}\n${body}\n\\end{tikzpicture}`;
  }

  const texContent = `
\\documentclass[tikz]{standalone}
\\usepackage{amsmath}
\\usepackage{amsfonts}
\\usepackage{amssymb}
\\usepackage{pgfplots}
\\pgfplotsset{compat=1.16}
\\usetikzlibrary{positioning,arrows,arrows.meta,calc,shapes,decorations.pathmorphing,backgrounds,fit,petri}
${preambleLines.join("\n")}
\\begin{document}
${body}
\\end{document}
  `.trim();

  fs.writeFileSync(texFile, texContent);

  try {
    // 1. Run latex to generate DVI
    const cmd1 = `latex -interaction=nonstopmode -output-directory=${TEMP_DIR} ${texFile}`;
    try {
      execSync(cmd1, { stdio: "pipe" });
    } catch (err) {
      // If DVI exists, we ignore the error (often just standalone warnings)
      if (!fs.existsSync(dviFile)) {
         throw err;
      }
    }
    
    // 2. Convert DVI to SVG using dvisvgm
    const cmd2 = `dvisvgm --no-fonts --exact-bbox ${dviFile} -o ${svgPath}`;
    execSync(cmd2, { stdio: "pipe" });
    
    console.log(`  ✓ Success: ${hash}.svg`);
  } catch (err) {
    console.error(`  ✗ Error generating ${hash}:`);
    const logFile = path.resolve(TEMP_DIR, `${hash}.log`);
    if (fs.existsSync(logFile)) {
      const log = fs.readFileSync(logFile, "utf-8");
      console.error(log.split("\n").slice(-15).join("\n"));
    } else {
      console.error(err.message);
    }
  } finally {
    // Cleanup temporary files
    [".tex", ".dvi", ".log", ".aux"].forEach(ext => {
      const f = path.resolve(TEMP_DIR, `${hash}${ext}`);
      if (fs.existsSync(f)) fs.unlinkSync(f);
    });
  }
}

console.log("🚀 Scanning for TikZ diagrams...");
const files = getAllMarkdownFiles(CONTENT_DIR);
let count = 0;
let generated = 0;

files.forEach(file => {
  const content = fs.readFileSync(file, "utf-8");
  const tikzRegex = /```tikz\n([\s\S]*?)```/g;
  let match;

  while ((match = tikzRegex.exec(content)) !== null) {
    const code = match[1].trim();
    const hash = getHash(code);
    const svgPath = path.resolve(ASSETS_DIR, `${hash}.svg`);
    if (!fs.existsSync(svgPath)) {
      processTikz(code, hash);
      generated++;
    }
    count++;
  }
});

console.log(`✨ Finished! Found ${count} TikZ diagrams, generated ${generated} new SVGs.`);
// Clean up temp dir
if (fs.existsSync(TEMP_DIR)) fs.rmSync(TEMP_DIR, { recursive: true, force: true });
