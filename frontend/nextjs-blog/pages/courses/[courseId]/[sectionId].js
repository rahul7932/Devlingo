import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../../styles/SectionPage.module.css';
import MultipleChoiceQuestion from '../../../components/MultipleChoiceQuestion';

const SectionPage = ({ sections }) => {
  const router = useRouter();
  const { courseId, sectionId } = router.query;

  // hit an api to get all the data for the courseId
    
  if (!courseId && !sectionId) {
    return <div>Loading...</div>;
  }

  const answers = [
   'anwer 1 anwer 1 anwer 1 anwer 1 anwer 1','test','anwer 1 anwer 1 anwer 1 anwer 1 anwer 1 anwer 1 anwer 1 anwer 1 anwer 1 anwer 1',,,'4'
  ]

  function useless() {
    return
  }

  return (
    <div className={styles.container}>
      <MultipleChoiceQuestion question="What each of these uses correct syntax?" answers={answers} onAnswerClick={useless} ></MultipleChoiceQuestion>
    </div>
  );
};

export default SectionPage;

