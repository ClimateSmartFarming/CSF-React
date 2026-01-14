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

interface Partner {
  name: string;
  logo: string;
  url: string;
  scale?: number; // Custom scale multiplier
}

const partners: Partner[] = [
  {
    name: 'AI-LEAF',
    logo: '/logos/ai-leaf-logo.jpeg',
    url: 'https://ai-leaf.org',
    scale: 1.25 // 25% larger
  },
  {
    name: 'Cornell University',
    logo: '/logos/cornell-logo.png',
    url: 'https://cornell.edu',
    scale: 1.5 // 50% larger
  },
  {
    name: 'Northeast Regional Climate Center',
    logo: '/logos/nrcc-logo.png',
    url: 'http://www.nrcc.cornell.edu/',
    scale: 1 // Base size
  },
  {
    name: 'USDA Northeast Climate Hub',
    logo: '/logos/usda-climate-hub-logo.jpg',
    url: 'https://www.climatehubs.usda.gov/hubs/northeast',
    scale: 1.5 // 50% larger
  }
];

const footerSections: FooterSection[] = [
  {
    title: 'Tools & Resources',
    links: [
      { label: 'CSF Decision Tools', href: '/tools/decision' },
      { label: 'CSF Climate Tools', href: '/tools/climate' },
      { label: 'Extension Programs', href: '/programs' },
      { label: 'News and Updates', href: '/news' }
    ]
  }
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const baseLogoHeight = 90; // Base height in pixels

  return (
    <footer className={styles.footer}>
      {/* Partners Section */}
      <div className={styles.partnersSection}>
        <Container>
          <h3 className={styles.partnersTitle}>Our Collaborators</h3>
          <div className={styles.partnersGrid}>
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                className={styles.partnerCard}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className={styles.partnerLogo}
                  style={{
                    height: `${baseLogoHeight * (partner.scale || 1)}px`
                  }}
                />
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
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