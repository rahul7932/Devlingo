import React from 'react';
import styles from '../styles/ProgressTile.module.css';

const ProgressTile = ({ section, progress, description, state }) => {

  const handleClick = () => {
  };

  return (
    <div className={styles.box}  onClick={handleClick}>
      <h2>{section}</h2>
      <span>{progress}% Complete</span>
      <p>{description}</p>
    </div>
  );
};

export default ProgressTile;
