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
    { section: 'Course 1', progress: 50, description: `Welcome to "Introduction to Go Programming," a comprehensive course designed for those new to the Go programming language. Developed at Google, Go is known for its efficiency and ease of use in building web applications and data pipelines.

This course covers the basics, from syntax and fundamental concepts to more complex features like concurrency with goroutines and channels. You'll engage in hands-on exercises and projects to solidify your understanding and skills.

By the end of this course, you will be able to:

Master Go’s syntax and control structures.
Build simple command-line applications.
Use concurrency effectively in your projects.
Employ Go best practices to write efficient and maintainable code.
Jumpstart your programming journey with Go and enhance your developer toolkit!`, state: "locked" },
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

