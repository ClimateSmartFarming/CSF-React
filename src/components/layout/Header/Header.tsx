// src/components/layout/Header/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../common/Container/Container';
import MobileMenu from './MobileMenu';
import styles from './Header.module.css';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavigationItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'CSF Tools',
    dropdown: [
      { label: 'CSF Decision Tools', href: '/tools/decision' },
      { label: 'CSF Climate Tools', href: '/tools/climate' },
    ]
  },
  {
    label: 'Extension Materials',
    dropdown: [
      { label: 'Explore Our Network', href: '/network' },
      { label: 'Programs', href: '/programs' },
      { label: 'Videos and Webinars', href: '/videos' },
    ]
  },
  {
    label: 'Additional Resources',
    dropdown: [
      { label: 'External Resources', href: '/resources/external' },
      { label: 'Videos', href: '/videos' },
    ]
  },
  {
    label: 'About',
    dropdown: [
      { label: 'About Us', href: '/about' },
      { label: 'Climate Impacts', href: '/climate-impacts' },
      { label: 'Meet Our Collaborators', href: '/collaborators' },
      { label: 'News & Updates', href: '/news' },
    ]
  },
  {
    label: 'Contact',
    dropdown: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Find Your Extension Associate', href: '/network' },
    ]
  },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [logoError, setLogoError] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleLogoError = () => {
    setLogoError(true);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerContent}>
          <Link to="/" className={styles.logoLink}>
            <div className={styles.logoArea}>
              {!logoError ? (
                <img
                  src="/csf-logo.png"
                  alt="Climate Smart Farming Logo"
                  className={styles.logo}
                  onError={handleLogoError}
                />
              ) : (
                <div className={styles.logoText}>
                  <span className={styles.logoMain}>Climate Smart Farming</span>
                  <span className={styles.logoSub}>Cornell University</span>
                </div>
              )}
            </div>
          </Link>

          <nav className={styles.navigation}>
            {navigationItems.map((item) => (
              <div
                key={item.label}
                className={styles.navItemWrapper}
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  <Link to={item.href} className={styles.navItem}>
                    {item.label}
                  </Link>
                ) : (
                  <button className={styles.navItem}>
                    {item.label}
                    <span className={styles.dropdownArrow}>▼</span>
                  </button>
                )}

                {item.dropdown && activeDropdown === item.label && (
                  <div className={styles.dropdownMenu}>
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.href}
                        className={styles.dropdownItem}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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