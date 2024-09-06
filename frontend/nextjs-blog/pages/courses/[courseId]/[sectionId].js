import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../../styles/QuestionPage.module.css';
import MultipleChoiceQuestion from '../../../components/MultipleChoiceQuestion';

const QuestionPage = ({ sections }) => {
  const router = useRouter();
  const { courseId, sectionId } = router.query;

  // Sample list of questions
  const questions = [
    {
      text: 'What is the capital of France?',
      options: [
        { id: 1, text: 'Berlin', isCorrect: false },
        { id: 2, text: 'Madrid', isCorrect: false },
        { id: 3, text: 'Paris', isCorrect: true },
        { id: 4, text: 'Rome', isCorrect: false },
      ],
    },
    {
      text: 'Which planet is known as the Red Planet?',
      options: [
        { id: 1, text: 'Earth', isCorrect: false },
        { id: 2, text: 'Mars', isCorrect: true },
        { id: 3, text: 'Jupiter', isCorrect: false },
        { id: 4, text: 'Saturn', isCorrect: false },
      ],
    },
    {
      text: 'What is the largest ocean on Earth?',
      options: [
        { id: 1, text: 'Indian Ocean', isCorrect: false },
        { id: 2, text: 'Atlantic Ocean', isCorrect: false },
        { id: 3, text: 'Arctic Ocean', isCorrect: false },
        { id: 4, text: 'Pacific Ocean', isCorrect: true },
      ],
    },
  ];

  // State to track the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Handle moving to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Show a loading state until courseId and sectionId are available
  if (!courseId && !sectionId) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {/* Display the current question based on the index */}
      <MultipleChoiceQuestion
        questionText={questions[currentQuestionIndex].text}
        options={questions[currentQuestionIndex].options}
      />
      <div className={styles.buttonContainer}>
        {/* Next button, disabled on the last question */}
        <button
          className={styles.nextButton}
          onClick={handleNextQuestion}
          disabled={currentQuestionIndex >= questions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;
