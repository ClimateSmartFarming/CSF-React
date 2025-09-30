import React from 'react';
import Container from '../../common/Container/Container';
import { newsItems } from '../../../data/news';
import styles from './NewsSection.module.css';
import NewsCard from "./NewsCard.tsx";
import {Link} from "react-router-dom";

interface NewsSectionProps {
  maxNews?: number;
}


const NewsSection: React.FC<NewsSectionProps> = ({
  maxNews = 12
}) => {
  const allNews = newsItems.slice(0, maxNews);

  return (
    <section className={styles.newsSection}>
      <Container>
        <div className={styles.newsGrid}>
          {allNews.map((news) => (
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
                <time className={styles.newsDate}>{news.date}</time>
                <h3 className={styles.newsTitle}>{news.title}</h3>
                <p className={styles.newsExcerpt}>{news.excerpt}</p>
                <Link to={`/news/${news.id}`} className={styles.readMore}>
                  Read more &raquo;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NewsSection;