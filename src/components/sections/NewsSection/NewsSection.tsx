import React from 'react';
import Container from '../../common/Container/Container';
import { newsItems } from '../../../data/news';
import styles from './NewsSection.module.css';
import NewsCard from "./NewsCard.tsx";

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
            <NewsCard
                news={news}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default NewsSection;