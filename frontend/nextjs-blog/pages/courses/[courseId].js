import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/CoursePage.module.css';

const CoursePage = () => {
  const router = useRouter();
  const { courseId } = router.query;

  // hit an api to get all the data for the courseId
    
  if (!courseId) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Introduction to Go Programming</h1>
      <p>Description</p>
      <h1>Progress</h1>
    </div>
  );
};

export default CoursePage;

