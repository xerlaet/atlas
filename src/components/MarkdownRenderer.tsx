import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkBreaks from "remark-breaks";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import Link from "next/link";
import { useMemo } from "react";
import SvgImage from "./SvgImage";
import { 
  Info, 
  AlertCircle, 
  CheckCircle2, 
  HelpCircle, 
  Zap, 
  StickyNote,
  AlertTriangle,
  Flame,
  ClipboardList,
  Sparkles,
  Layers,
  MessageSquareQuote,
  type LucideIcon
} from "lucide-react";
import "katex/dist/katex.min.css";
import "highlight.js/styles/tokyo-night-dark.css";

interface Props {
  content: string;
  validSlugs: string[]; // List of existing slugs
}

const calloutConfig: Record<string, { icon: LucideIcon, color: string, label: string }> = {
  info: { icon: Info, color: "text-blue-400 border-blue-500/30 bg-blue-500/5", label: "Info" },
  note: { icon: StickyNote, color: "text-slate-400 border-slate-500/30 bg-slate-500/5", label: "Note" },
  default: { icon: Layers, color: "text-teal-400 border-teal-500/30 bg-teal-500/5", label: "Note" },
  example: { icon: ClipboardList, color: "text-purple-400 border-purple-500/30 bg-purple-500/5", label: "Example" },
  abstract: { icon: ClipboardList, color: "text-teal-400 border-teal-500/30 bg-teal-500/5", label: "Abstract" },
  summary: { icon: ClipboardList, color: "text-teal-400 border-teal-500/30 bg-teal-500/5", label: "Summary" },
  tldr: { icon: ClipboardList, color: "text-teal-400 border-teal-500/30 bg-teal-500/5", label: "TL;DR" },
  todo: { icon: CheckCircle2, color: "text-teal-400 border-teal-500/30 bg-teal-500/5", label: "Todo" },
  tip: { icon: Zap, color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/5", label: "Tip" },
  hint: { icon: Zap, color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/5", label: "Hint" },
  important: { icon: AlertCircle, color: "text-orange-400 border-orange-500/30 bg-orange-500/5", label: "Important" },
  success: { icon: CheckCircle2, color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5", label: "Success" },
  check: { icon: CheckCircle2, color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5", label: "Check" },
  done: { icon: CheckCircle2, color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5", label: "Done" },
  question: { icon: HelpCircle, color: "text-sky-400 border-sky-500/30 bg-sky-500/5", label: "Question" },
  help: { icon: HelpCircle, color: "text-sky-400 border-sky-500/30 bg-sky-500/5", label: "Help" },
  faq: { icon: HelpCircle, color: "text-sky-400 border-sky-500/30 bg-sky-500/5", label: "FAQ" },
  warning: { icon: AlertTriangle, color: "text-amber-400 border-amber-500/30 bg-amber-500/5", label: "Warning" },
  caution: { icon: AlertTriangle, color: "text-amber-400 border-amber-500/30 bg-amber-500/5", label: "Caution" },
  attention: { icon: AlertTriangle, color: "text-amber-400 border-amber-500/30 bg-amber-500/5", label: "Attention" },
  failure: { icon: AlertCircle, color: "text-red-400 border-red-500/30 bg-red-500/5", label: "Failure" },
  fail: { icon: AlertCircle, color: "text-red-400 border-red-500/30 bg-red-500/5", label: "Fail" },
  missing: { icon: AlertCircle, color: "text-red-400 border-red-500/30 bg-red-500/5", label: "Missing" },
  danger: { icon: Flame, color: "text-red-500 border-red-600/30 bg-red-600/5", label: "Danger" },
  error: { icon: Flame, color: "text-red-500 border-red-600/30 bg-red-600/5", label: "Error" },
  bug: { icon: AlertCircle, color: "text-rose-400 border-rose-500/30 bg-rose-500/5", label: "Bug" },
  quote: { icon: MessageSquareQuote, color: "text-slate-300 border-slate-400/30 bg-slate-400/5", label: "Quote" },
  ai: { icon: Sparkles, color: "text-fuchsia-400 border-fuchsia-500/30 bg-fuchsia-500/5", label: "AI" },
};

export default function MarkdownRenderer({ content, validSlugs }: Props) {
  // Memoize the slug set for O(1) lookups
  const slugSet = useMemo(() => new Set(validSlugs || []), [validSlugs]);

  // Pre-process content safely
  const processedContent = content
    // Fix: Ensure content after </iframe> is on a new line so markdown can parse it
    .replace(/<\/iframe>/g, "</iframe>\n\n")
    // Fix: Math block normalization — only wrap standalone $$ blocks in newlines,
    // leave inline $$ in table cells untouched to preserve table formatting
    .replace(/\$\$([\s\S]*?)\$\$/g, (match, inner, offset, str) => {
      const before = offset > 0 ? str[offset - 1] : "";
      const after = offset + match.length < str.length ? str[offset + match.length] : "";
      const isBlock = (!before || before === "\n") && (!after || after === "\n" || after === "\r");
      if (!isBlock) return match;

      const cleanedInner = inner
        .replace(/\\begin\s*?\{(align|equation|alignat)\*?\}\s*?(\{[0-9]+\})?/g, "\\begin{aligned}")
        .replace(/\\end\s*?\{(align|equation|alignat)\*?\}/g, "\\end{aligned}");
      return `\n\n$$\n${cleanedInner.trim()}\n$$\n\n`;
    });

  return (
    <div className="prose prose-invert prose-slate max-w-none font-sans">
      <ReactMarkdown
        remarkPlugins={[
          remarkGfm,
          remarkMath,
          remarkBreaks,
          remarkUnwrapImages,
        ]}
        rehypePlugins={[
          rehypeRaw, 
          [rehypeKatex, { 
            trust: true,
            strict: false,
            macros: {
              "\\begin{align}": "\\begin{aligned}",
              "\\end{align}": "\\end{aligned}",
              "\\begin{equation}": "\\begin{aligned}",
              "\\end{equation}": "\\end{aligned}"
            }
          }],
          [rehypeHighlight, { 
            ignoreMissing: true,
            subset: false, // Include all languages
          }]
        ]}
        components={{
          a: ({ href, children }) => {
            const hrefStr = href || "";
            const isExternal = hrefStr.startsWith("http") || hrefStr.startsWith("mailto:");
            
            if (!isExternal) {
              const slug = hrefStr.replace(/^\/notes\//, "").split("#")[0];
              const isValid = slugSet.has(slug);
              
              if (!isValid) {
                return (
                  <span className="text-slate-500/60 font-bold border-b border-dashed border-slate-500/30 cursor-help transition-colors hover:text-slate-400" title="This note hasn't been created yet">
                    {children}
                  </span>
                );
              }
              
              return <Link href={hrefStr} className="text-teal-400 no-underline hover:underline font-bold">{children}</Link>;
            }
            return (
              <a 
                href={hrefStr}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-400 no-underline hover:underline font-bold"
              >
                {children}
              </a>
            );
          },
          img: ({ src, alt, className }) => {
            const srcStr = typeof src === "string"
              ? (src.startsWith("attachments/") ? `/${src}` : src)
              : "";
            
            const isTikz = alt === "TikZ Diagram";
            const isSvg = typeof srcStr === "string" && srcStr.endsWith(".svg");
            const standardClasses = "rounded-lg shadow-2xl mx-auto border border-[var(--color8)] my-8 block max-w-full";

            if (isTikz || isSvg) {
              return (
                <SvgImage 
                  src={srcStr}
                  alt={alt || "Diagram"}
                  className={className || "tikz-diagram-auto mx-auto block my-12 transition-all duration-300"}
                />
              );
            }

            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                src={srcStr} 
                className={className || standardClasses} 
                alt={alt || "Image"} 
              />
            );
          },
          iframe: ({ ...props }) => {
            return (
              <div className="flex justify-center my-8 aspect-video">
                <iframe {...props} className="rounded-lg border border-slate-800 shadow-2xl w-full h-full" />
              </div>
            );
          },
          blockquote: ({ children }) => {
            const childrenArray = Array.isArray(children) ? children : [children];
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const firstChild = childrenArray[0] as any;
            const pChildren = firstChild?.props?.children;
            const pChildrenArray = Array.isArray(pChildren) ? pChildren : [pChildren];
            const firstText = pChildrenArray[0];

            if (typeof firstText === "string" && firstText.trim().startsWith("[!")) {
              const match = firstText.match(/\[!(\w+)\]\s*(.*)/);
              if (match) {
                const type = match[1].toLowerCase();
                const title = match[2];
                const config = calloutConfig[type] || calloutConfig.default;
                const Icon = config.icon;
                const updatedChildren = [...childrenArray];
                const remainingPChildren = pChildrenArray.slice(1);
                updatedChildren[0] = {
                  ...firstChild,
                  props: {
                    ...firstChild.props,
                    children: remainingPChildren.length > 0 ? remainingPChildren : []
                  }
                };
                if (updatedChildren[0].props.children.length === 0) {
                  updatedChildren.shift();
                }
                return (
                  <div className={`my-6 border rounded-xl overflow-hidden ${config.color}`}>
                    <div className="flex items-center gap-2.5 px-4 py-3 border-b border-inherit/10 font-bold tracking-tight">
                      <Icon size={18} strokeWidth={2.5} />
                      <span>{title || config.label}</span>
                    </div>
                    <div className="px-4 py-2 italic opacity-90 prose-p:my-2 prose-li:my-1">
                      {updatedChildren}
                    </div>
                  </div>
                );
              }
            }
            return <blockquote className="border-l-4 border-teal-500/30 bg-teal-500/5 pl-6 py-1 my-8 italic">{children}</blockquote>;
          }
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
}
