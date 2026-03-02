import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkBreaks from "remark-breaks";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkWikiLink from "remark-wiki-link";
import Link from "next/link";
import TikZWrapper from "./TikZWrapper";
import "katex/dist/katex.min.css";

interface Props {
  content: string;
  slugMap: Record<string, string>; // Maps note titles to slugs
}

export default function MarkdownRenderer({ content, slugMap }: Props) {
  // Pre-process content safely
  const processedContent = content
    // 1. Fix: Ensure content after </iframe> is on a new line so markdown can parse it
    .replace(/<\/iframe>/g, "</iframe>\n\n")
    // 2. Convert ![[image.png]] to HTML <img>
    .replace(/!\[\[(.*?)\]\]/g, (match, link) => {
      const parts = link.split("|");
      const imageName = parts[0];
      const encodedName = encodeURIComponent(imageName);
      return `<img src="/attachments/${encodedName}" alt="${imageName}" class="obsidian-embed" />\n\n`;
    })
    // 3. Surgical fix for standard links if they are still failing to parse in some contexts
    .replace(/\[([^\]\n]+)\]\((https?:\/\/[^\)\n\s]+)\)/g, (match, text, url) => {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="external-link font-bold text-sky-400">${text}</a>`;
    });

  return (
    <div className="prose prose-invert prose-slate max-w-none font-sans">
      <ReactMarkdown
        remarkPlugins={[
          [remarkWikiLink, { 
            hrefTemplate: (target: string) => `/notes/${slugMap[target] || target}`,
            pageResolver: (name: string) => [name],
          }],
          remarkGfm,
          remarkMath,
          remarkBreaks,
          remarkUnwrapImages,
        ]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        components={{
          a: ({ node, ...props }) => {
            const href = props.href || "";
            const isExternal = href.startsWith("http");
            if (!isExternal) {
              return <Link href={href} className="text-teal-400 no-underline hover:underline font-bold" {...props} />;
            }
            return (
              <a 
                {...props} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-400 no-underline hover:underline font-bold"
              />
            );
          },
          code: ({ node, inline, className, children, ...props }: any) => {
            const match = /language-(\w+)/.exec(className || "");
            const language = match ? match[1] : "";
            if (!inline && language === "tikz") {
              return <TikZWrapper code={String(children).replace(/\n$/, "")} />;
            }
            return <code className={className} {...props}>{children}</code>;
          },
          img: ({ node, ...props }) => {
            let src = props.src || "";
            if (src.startsWith("attachments/")) src = `/${src}`;
            return (
              <img 
                {...props} 
                src={src} 
                className="rounded-lg shadow-2xl mx-auto border border-slate-800 my-8 block max-w-full" 
                alt={props.alt || "Image"} 
              />
            );
          },
          iframe: ({ node, ...props }) => {
            return (
              <div className="flex justify-center my-8 aspect-video">
                <iframe {...props} className="rounded-lg border border-slate-800 shadow-2xl w-full h-full" />
              </div>
            );
          }
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
}
