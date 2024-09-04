import React from 'react';
import styles from '../styles/CourseTile.module.css'; // Adjust the path as needed

const CourseTile = ({ title, progress, description }) => {
  return (
    <div className={styles.box}>
      <h2>{title}</h2>
      <span>{progress}% Complete</span>
      <p>{description}</p>
    </div>
  );
};

export default CourseTile;
