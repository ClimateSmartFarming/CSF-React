// src/pages/ClimateToolsPage/ClimateToolsPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import { climateTools } from '../../data/climateTools';
import styles from './ClimateToolsPage.module.css';
import pageStyles from '../HomePage/HomePage.module.css';

const ClimateToolsPage: React.FC = () => {
  // Group tools by category
  const categories = Array.from(new Set(climateTools.map(tool => tool.category || 'Other')));

  return (
    <div className={pageStyles.homePage}>
      <main className={pageStyles.mainContent}>
        <HeroSection
          title="CSF Climate Tools"
          subtitle="Monitor weather conditions, track climate trends, and access historical climate data for your region"
        />

        <section className={styles.toolsSection}>
          <div className={styles.container}>
            <p className={styles.intro}>
              These climate monitoring tools provide access to real-time weather data, historical climate information,
              and future climate projections. Use these tools to track growing degree days, monitor drought conditions,
              understand climate trends, and plan for long-term climate variability.
            </p>

            {categories.map((category) => {
              const categoryTools = climateTools.filter(
                tool => (tool.category || 'Other') === category
              );

              return (
                <div key={category} className={styles.categorySection}>
                  <h2 className={styles.categoryTitle}>{category}</h2>
                  <div className={styles.toolsGrid}>
                    {categoryTools.map((tool) => (
                      <a
                        key={tool.id}
                        href={tool.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.toolCard}
                      >
                        <div className={styles.toolIcon}>{tool.icon}</div>
                        <h3 className={styles.toolTitle}>{tool.title}</h3>
                        <p className={styles.toolDescription}>{tool.description}</p>
                        <span className={styles.externalLink}>
                          Open Tool →
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className={styles.backSection}>
              <Link to="/" className={styles.backLink}>
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClimateToolsPage;