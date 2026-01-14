// src/pages/NewsPage/NewsPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import Container from '../../components/common/Container/Container';
import { newsItems } from '../../data/news';
import styles from '../HomePage/HomePage.module.css';
import newsStyles from './NewsPage.module.css';

const ARTICLES_PER_PAGE = 12;

const NewsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Sort news by date (newest first)
  const sortedNews = [...newsItems].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Calculate pagination
  const totalPages = Math.ceil(sortedNews.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = sortedNews.slice(startIndex, endIndex);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of news section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

      // Always show last page
      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className={styles.homePage}>
      <main className={styles.mainContent}>
        <HeroSection
          title="News & Updates"
          subtitle="Latest news from Cornell Climate Smart Farming"
        />

        <Container>
          <section className={newsStyles.newsSection}>

            {/* Results info */}
            <div className={newsStyles.resultsInfo}>
              Showing {startIndex + 1}-{Math.min(endIndex, sortedNews.length)} of {sortedNews.length} articles
            </div>

            <div className={newsStyles.newsGrid}>
              {currentArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/news/${article.id}`}
                  className={newsStyles.newsCard}
                >
                  {article.image && (
                    <div className={newsStyles.imageWrapper}>
                      <img
                        src={article.image}
                        alt={article.title}
                        className={newsStyles.newsImage}
                      />
                    </div>
                  )}

                  <div className={newsStyles.newsContent}>
                    {article.category && (
                      <span className={newsStyles.category}>{article.category}</span>
                    )}

                    <h2 className={newsStyles.newsTitle}>{article.title}</h2>

                    <p className={newsStyles.newsDate}>
                      {formatDate(article.date)}
                      {article.author && ` • By ${article.author}`}
                    </p>

                    <p className={newsStyles.newsExcerpt}>{article.excerpt}</p>

                    <span className={newsStyles.readMore}>Read More →</span>
                  </div>
                </Link>
              ))}
            </div>

            {sortedNews.length === 0 && (
              <div className={newsStyles.noNews}>
                <p>No news articles available at this time.</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className={newsStyles.pagination}>
                <button
                  className={`${newsStyles.pageButton} ${newsStyles.navButton}`}
                  onClick={handlePrevious}
                  disabled={currentPage === 1}
                >
                  ← Previous
                </button>

                <div className={newsStyles.pageNumbers}>
                  {getPageNumbers().map((page, index) => (
                    typeof page === 'number' ? (
                      <button
                        key={index}
                        className={`${newsStyles.pageButton} ${currentPage === page ? newsStyles.activePage : ''}`}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </button>
                    ) : (
                      <span key={index} className={newsStyles.ellipsis}>{page}</span>
                    )
                  ))}
                </div>

                <button
                  className={`${newsStyles.pageButton} ${newsStyles.navButton}`}
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                >
                  Next →
                </button>
              </div>
            )}

          </section>
        </Container>
      </main>
    </div>
  );
};

export default NewsPage;