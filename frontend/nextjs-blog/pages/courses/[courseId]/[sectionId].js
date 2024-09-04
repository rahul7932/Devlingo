import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../../styles/SectionPage.module.css';

const SectionPage = ({ sections }) => {
  const router = useRouter();
  const { courseId, sectionId } = router.query;

  // hit an api to get all the data for the courseId
    
  if (!courseId && !sectionId) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <p>test</p>
    </div>
  );
};

export default SectionPage;

