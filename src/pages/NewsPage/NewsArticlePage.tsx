import React from "react";
import { useParams, Link } from "react-router-dom";
import { newsItems } from "../../data/news"; // your news data file
import styles from "./NewsArticlePage.module.css";


const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};


const NewsArticlePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = newsItems.find((item) => item.id === id);

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <article className={styles.article}>
      <Link to="/news" className={styles.backLink}>&laquo; Back to News</Link>
      <h1 className={styles.title}>{article.title}</h1>
      <time className={styles.date}>{formatDate(article.date)}</time>
        
      {/* Main image */}
      {article.image && (
        <div className={styles.imageContainer}>
          <img src={article.image} alt={article.title} className={styles.image} />
        </div>
      )}

      {/* Render HTML content safely */}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
};

export default NewsArticlePage;