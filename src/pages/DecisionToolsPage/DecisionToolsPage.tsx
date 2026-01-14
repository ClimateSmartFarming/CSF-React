// src/pages/DecisionToolsPage/DecisionToolsPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import { decisionTools } from '../../data/decisionTools';
import styles from './DecisionToolsPage.module.css';
import pageStyles from '../HomePage/HomePage.module.css';

const DecisionToolsPage: React.FC = () => {
  // Group tools by category
  const categories = Array.from(new Set(decisionTools.map(tool => tool.category || 'Other')));

  return (
    <div className={pageStyles.homePage}>
      <main className={pageStyles.mainContent}>
        <HeroSection
          title="CSF Decision Tools"
          subtitle="Make informed decisions about production systems based on location-specific climate data, weather forecasts, and future outlooks"
        />

        <section className={styles.toolsSection}>
          <div className={styles.container}>
            <p className={styles.intro}>
              These decision support tools help farmers optimize planting dates, manage water resources,
              protect crops from frost, and make data-driven management decisions. All CSF tools allow
              for selection of multiple locations, at the field level, to receive the most local and relevant data.
            </p>

            {categories.map((category) => {
              const categoryTools = decisionTools.filter(
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

export default DecisionToolsPage;