import React from 'react';
import Container from '../../common/Container/Container';
import styles from './Footer.module.css';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Tools & Resources',
    links: [
      { label: 'Weather Tools', href: '/tools/weather' },
      { label: 'Crop Planning', href: '/tools/crop-planning' },
      { label: 'Soil Health', href: '/tools/soil-health' },
      { label: 'Climate Data', href: '/tools/climate-data' }
    ]
  },
  {
    title: 'Research & Education',
    links: [
      { label: 'Research Projects', href: '/research' },
      { label: 'Publications', href: '/publications' },
      { label: 'Educational Materials', href: '/education' },
      { label: 'Webinars', href: '/webinars' }
    ]
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Newsletter', href: '/newsletter' },
      { label: 'Twitter', href: 'https://twitter.com/CornellCSF' }
    ]
  }
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.brandColumn}>
            <div className={styles.footerLogo}>
              <span className={styles.logoText}>Cornell Climate Smart Farming</span>
            </div>
            <div className={styles.footerDescription}>
              <p>
                Supporting New York farmers with research-based tools and resources 
                for climate adaptation and sustainable agriculture.
              </p>
              <p className={styles.affiliation}>
                Cornell University • College of Agriculture and Life Sciences
              </p>
            </div>
          </div>
          
          {footerSections.map((section) => (
            <div key={section.title} className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>
                {section.title}
              </h4>
              <ul className={styles.footerLinks}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className={styles.footerLink}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>© {currentYear} Cornell University. All rights reserved.</p>
          </div>
          <div className={styles.bottomLinks}>
            <a href="/privacy" className={styles.bottomLink}>Privacy Policy</a>
            <a href="/accessibility" className={styles.bottomLink}>Accessibility</a>
            <a href="/terms" className={styles.bottomLink}>Terms of Use</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;