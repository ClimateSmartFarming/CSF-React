import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { featuredTools } from '../../data/tools';
import styles from './ToolPage.module.css';

const ToolPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tool = featuredTools.find(t => t.id === id);

  if (!tool) {
    return <div>Tool not found.</div>;
  }

  return (
    <article className={styles.toolPage}>
      <Link to="/tools" className={styles.backLink}>&laquo; Back to Tools</Link>

      <h1 className={styles.title}>{tool.title}</h1>
      {/*  Placeholder for a future image */}
      {/*{tool.icon && (*/}
      {/*  <div className={styles.imageWrapper}>*/}
      {/*    <img src={tool.icon} alt={tool.title} className={styles.image} />*/}
      {/*  </div>*/}
      {/*)}*/}

      <p className={styles.description}>{tool.description}</p>
        <p><b>Tools Pages Coming Soon</b></p>

      {/*<div*/}
      {/*  className={styles.content}*/}
      {/*  dangerouslySetInnerHTML={{ __html: tool.content }}*/}
      {/*/>*/}
    </article>
  );
};

export default ToolPage;