import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.css';

interface DropdownItem {
  label: string;
  href: string;
}

interface NavigationItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navigationItems }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setExpandedItem(null); // Reset expanded items when menu closes
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

  const toggleDropdown = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

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
            <div key={item.label}>
              {item.href ? (
                // Simple link (Home)
                <Link
                  to={item.href}
                  className={styles.mobileNavItem}
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              ) : (
                // Dropdown item
                <>
                  <button
                    className={`${styles.mobileNavItem} ${styles.mobileNavDropdown}`}
                    onClick={() => toggleDropdown(item.label)}
                  >
                    <span>{item.label}</span>
                    <span className={`${styles.mobileDropdownArrow} ${expandedItem === item.label ? styles.expanded : ''}`}>
                      ▼
                    </span>
                  </button>

                  {item.dropdown && expandedItem === item.label && (
                    <div className={styles.mobileDropdownContent}>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          className={styles.mobileDropdownItem}
                          onClick={onClose}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;