import React, { useState } from 'react';
import Container from '../../common/Container/Container';
import MobileMenu from './MobileMenu';
import styles from './Header.module.css';

interface NavigationItem {
  label: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { label: 'Tools', href: '/tools' },
  { label: 'Resources', href: '/resources' },
  { label: 'Climate', href: '/climate' },
  { label: 'Team', href: '/team' },
  { label: 'Programs', href: '/programs' },
  { label: 'Videos', href: '/videos' }
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <div className={styles.logoArea}>
            <span className={styles.logoText}>Cornell CSF</span>
          </div>
          
          <nav className={styles.navigation}>
            {navigationItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className={styles.navItem}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </Container>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
      />
    </header>
  );
};

export default Header;