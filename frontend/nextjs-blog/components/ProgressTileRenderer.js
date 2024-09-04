import React from 'react';
import styles from '../styles/ProgressTileRenderer.module.css';
import ProgressTile from './ProgressTile';

const ProgressTileRenderer = ({ title, sections }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.grid}>
        {sections.map((section, index) => (
            <ProgressTile
                key={index}
                section={section.section}
                progress={section.progress}
                description={section.description}
                state={section.state}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressTileRenderer;
