// src/components/sections/MissionStatement/MissionStatement.tsx
import React from 'react';
import styles from './MissionStatement.module.css';

interface MissionStatementProps {
  title?: string;
  mission: string;
  subtitle?: string;
  features?: {
    icon?: string;
    title: string;
    description: string;
  }[];
}

const MissionStatement: React.FC<MissionStatementProps> = ({
  title = "Our Mission",
  mission,
  subtitle,
  features
}) => {
  return (
    <section className={styles.missionSection}>
      <div className={styles.container}>
        {/* Mission Statement */}
        <div className={styles.missionBlock}>
          <h2 className={styles.missionTitle}>{title}</h2>
          <blockquote className={styles.missionQuote}>
            {mission}
          </blockquote>
        </div>

        {/* Subtitle/Why Section */}
        {subtitle && (
          <div className={styles.subtitleBlock}>
            <h3 className={styles.subtitle}>{subtitle}</h3>
          </div>
        )}

        {/* Feature Cards */}
        {features && features.length > 0 && (
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                {feature.icon && (
                  <div className={styles.featureIcon}>{feature.icon}</div>
                )}
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MissionStatement;