// src/components/common/MarkdownRenderer/MarkdownRenderer.tsx
import React from 'react';
import styles from './MarkdownRenderer.module.css';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

/**
 * Simple Markdown renderer that handles common markdown syntax
 * For more complex needs, consider using react-markdown or marked
 */
const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className }) => {
  const renderMarkdown = (text: string): JSX.Element[] => {
    const lines = text.split('\n');
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listType: 'ul' | 'ol' | null = null;
    let inCodeBlock = false;
    let codeContent: string[] = [];
    let paragraphContent: string[] = [];

    const flushParagraph = () => {
      if (paragraphContent.length > 0) {
        const text = paragraphContent.join(' ').trim();
        if (text) {
          elements.push(
            <p key={elements.length} className={styles.paragraph}>
              {renderInlineMarkdown(text)}
            </p>
          );
        }
        paragraphContent = [];
      }
    };

    const flushList = () => {
      if (currentList.length > 0 && listType) {
        const ListTag = listType;
        elements.push(
          <ListTag key={elements.length} className={styles[listType]}>
            {currentList.map((item, i) => (
              <li key={i}>{renderInlineMarkdown(item)}</li>
            ))}
          </ListTag>
        );
        currentList = [];
        listType = null;
      }
    };

    lines.forEach((line, index) => {
      // Code blocks
      if (line.trim().startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={elements.length} className={styles.codeBlock}>
              <code>{codeContent.join('\n')}</code>
            </pre>
          );
          codeContent = [];
          inCodeBlock = false;
        } else {
          flushParagraph();
          flushList();
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeContent.push(line);
        return;
      }

      // Headers
      const h3Match = line.match(/^### (.+)$/);
      if (h3Match) {
        flushParagraph();
        flushList();
        elements.push(
          <h3 key={elements.length} className={styles.h3}>
            {renderInlineMarkdown(h3Match[1])}
          </h3>
        );
        return;
      }

      const h2Match = line.match(/^## (.+)$/);
      if (h2Match) {
        flushParagraph();
        flushList();
        elements.push(
          <h2 key={elements.length} className={styles.h2}>
            {renderInlineMarkdown(h2Match[1])}
          </h2>
        );
        return;
      }

      const h1Match = line.match(/^# (.+)$/);
      if (h1Match) {
        flushParagraph();
        flushList();
        elements.push(
          <h1 key={elements.length} className={styles.h1}>
            {renderInlineMarkdown(h1Match[1])}
          </h1>
        );
        return;
      }

      // Unordered list items
      const ulMatch = line.match(/^[-*] (.+)$/);
      if (ulMatch) {
        flushParagraph();
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        currentList.push(ulMatch[1]);
        return;
      }

      // Ordered list items
      const olMatch = line.match(/^\d+\. (.+)$/);
      if (olMatch) {
        flushParagraph();
        if (listType !== 'ol') {
          flushList();
          listType = 'ol';
        }
        currentList.push(olMatch[1]);
        return;
      }

      // Empty line - end paragraph/list
      if (line.trim() === '') {
        flushParagraph();
        flushList();
        return;
      }

      // Regular text - add to paragraph
      flushList();
      paragraphContent.push(line);
    });

    // Flush remaining content
    flushParagraph();
    flushList();

    return elements;
  };

  const renderInlineMarkdown = (text: string): React.ReactNode => {
    // Process inline markdown: bold, italic, code, links
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      // Bold: **text**
      const boldMatch = remaining.match(/^(.*?)\*\*(.+?)\*\*(.*)/s);
      if (boldMatch) {
        if (boldMatch[1]) parts.push(renderInlineMarkdown(boldMatch[1]));
        parts.push(<strong key={key++}>{boldMatch[2]}</strong>);
        remaining = boldMatch[3];
        continue;
      }

      // Italic: *text*
      const italicMatch = remaining.match(/^(.*?)\*(.+?)\*(.*)/s);
      if (italicMatch) {
        if (italicMatch[1]) parts.push(renderInlineMarkdown(italicMatch[1]));
        parts.push(<em key={key++}>{italicMatch[2]}</em>);
        remaining = italicMatch[3];
        continue;
      }

      // Inline code: `code`
      const codeMatch = remaining.match(/^(.*?)`(.+?)`(.*)/s);
      if (codeMatch) {
        if (codeMatch[1]) parts.push(codeMatch[1]);
        parts.push(<code key={key++} className={styles.inlineCode}>{codeMatch[2]}</code>);
        remaining = codeMatch[3];
        continue;
      }

      // Links: [text](url)
      const linkMatch = remaining.match(/^(.*?)\[(.+?)\]\((.+?)\)(.*)/s);
      if (linkMatch) {
        if (linkMatch[1]) parts.push(linkMatch[1]);
        parts.push(
          <a
            key={key++}
            href={linkMatch[3]}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {linkMatch[2]}
          </a>
        );
        remaining = linkMatch[4];
        continue;
      }

      // No more matches, add remaining text
      parts.push(remaining);
      break;
    }

    return parts.length === 1 ? parts[0] : <>{parts}</>;
  };

  return (
    <div className={`${styles.markdown} ${className || ''}`}>
      {renderMarkdown(content)}
    </div>
  );
};

export default MarkdownRenderer;