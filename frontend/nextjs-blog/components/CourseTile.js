import React from 'react';
import styles from '../styles/CourseTile.module.css'; // Adjust the path as needed

const CourseTile = ({ courses }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Courses</h1>
      <div className={styles.grid}>
        {courses.map((course, index) => (
          <div key={index} className={styles.box}>
            <h2>{course.title}</h2>
            <span>{course.progress}% Complete</span>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseTile;
