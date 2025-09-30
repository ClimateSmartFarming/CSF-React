import React from 'react';
import type { newsItem } from '../../../data/news';
import styles from './NewsSection.module.css';
import {Link} from "react-router-dom";
import { convert } from "html-to-text";

interface SummaryProps {
  rawHtml: string;
  maxLength?: number;
}

// Truncate plain text preserving words and add ellipsis if needed
function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  return truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
}

// Simple React component that generates a truncated summary from raw HTML
export const HtmlSummary: React.FC<SummaryProps> = ({ rawHtml, maxLength = 250 }) => {
  // Convert HTML to plain text
  const plainText = convert(rawHtml, { wordwrap: false, selectors: [] });
  // Truncate the plain text to maxLength preserving words
  const summaryText = truncateText(plainText, maxLength);

  return <p>{summaryText}</p>;
};

interface NewsCardProps {
  news: newsItem;
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const NewsCard: React.FC<NewsCardProps> = ({ news }) => (
    <article key={news.id} className={styles.newsCard}>
      {news.image && (
        <div className={styles.newsImageWrap}>
          <img
            src={news.image}
            alt={news.title}
            className={styles.newsImage}
          />
        </div>
      )}
      <div className={styles.cardContent}>
        <time className={styles.newsDate}>{formatDate(news.date)}</time>
        <h3 className={styles.newsTitle}>{news.title}</h3>
        <p className={styles.newsExcerpt}>
          <HtmlSummary rawHtml={news.content} maxLength={250} />
        </p>
        <Link to={`/news/${news.id}`} className={styles.readMore}>
          Read more &raquo;
        </Link>
      </div>
    </article>
);

export default NewsCard;