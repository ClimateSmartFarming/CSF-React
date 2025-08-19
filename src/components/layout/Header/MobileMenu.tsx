import React, { useEffect } from 'react';
import styles from './MobileMenu.module.css';

interface NavigationItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navigationItems }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.mobileMenu}>
        <div className={styles.menuHeader}>
          <span className={styles.menuTitle}>Menu</span>
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        
        <nav className={styles.mobileNavigation}>
          {navigationItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className={styles.mobileNavItem}
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;