import React from 'react';
import type { newsItem } from '../../../data/news';
import styles from './NewsCard.module.css';
import {Link} from "react-router-dom";

interface NewsCardProps {
  news: NewsItem;
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
  <article className={styles.newsHeader}>

    <div className={styles.newsHeader}>
        <div className={styles.publishDate}>
          {formatDate(news.date)}
        </div>
    </div>
    <div className={styles.newsContent}>

      <h3 className={styles.newsTitle}>
        {news.title}
      </h3>
    </div>
    <p className={styles.content}>{news.content}</p>
    <Link to={`/news/${news.id}`} className={styles.readMore}>
      Read full article &raquo;
    </Link>
  </article>
);

export default NewsCard;