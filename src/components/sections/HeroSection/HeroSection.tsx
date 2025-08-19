import React from 'react';
import Container from '../../common/Container/Container';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "Climate Smart Farming",
  subtitle = "Empowering farmers with data-driven tools and resources for sustainable agriculture in a changing climate"
}) => {
  return (
    <section className={styles.heroSection}>
      <Container>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {title}
          </h1>
          <p className={styles.heroSubtitle}>
            {subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;