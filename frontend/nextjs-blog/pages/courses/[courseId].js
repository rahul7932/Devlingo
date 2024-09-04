import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/CoursePage.module.css';
import ProgressTileRenderer from '../../components/ProgressTileRenderer';

const CoursePage = () => {
  const router = useRouter();
  const { courseId } = router.query;

  // hit an api to get all the data for the courseId
    
  if (!courseId) {
    return <div>Loading...</div>;
  }

  const sections = [
    { section: 'Course 1', progress: 50, description: "testtest", state: "locked" },
    { section: 'Course 2', progress: 50, description: "testtest", state: "locked" },
    { section: 'Course 2', progress: 50, description: "testtest", state: "locked" },
    { section: 'Course 2', progress: 50, description: "testtest", state: "locked" },
    // Add more courses as needed
  ];

  return (
    <div className={styles.container}>
      <h1>Introduction to Go Programming</h1>
      <p>Description</p>
      <h1>Progress</h1>
      <ProgressTileRenderer sections={sections} />
    </div>
  );
};

export default CoursePage;

