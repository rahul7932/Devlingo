import React from 'react';
import styles from '../styles/CourseTile.module.css';
import { useRouter } from 'next/router';

const CourseTile = ({ title, progress, description, courseId }) => {

  const router = useRouter();
    
  console.log(courseId);

  const handleClick = () => {
    router.push(`/courses/${courseId.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className={styles.box}  onClick={handleClick}>
      <h2>{title}</h2>
      <span>{progress}% Complete</span>
      <p>{description}</p>
    </div>
  );
};

export default CourseTile;
