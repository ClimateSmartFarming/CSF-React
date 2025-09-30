import React from 'react';
import styles from '../HomePage/HomePage.module.css';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import NewsSection from "../../components/sections/NewsSection/NewsSection.tsx";

const NewsPage: React.FC = () => {
  return (
    <div className={styles.homePage}>

      <main className={styles.mainContent}>
          <HeroSection
            title="News"
          />

          <NewsSection
            maxResources={12}
          />
      </main>

    </div>
  );
};

export default NewsPage;