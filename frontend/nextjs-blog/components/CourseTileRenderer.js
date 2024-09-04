import React from 'react';
import styles from '../styles/CourseTileRenderer.module.css';
import CourseTile from './CourseTile';

const CourseTileRenderer = ({ title, courses }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.grid}>
        {courses.map((course, index) => (
          <CourseTile
            key={index}
            title={course.title}
            progress={course.progress}
            description={course.description}
            courseId={course.courseId}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseTileRenderer;
