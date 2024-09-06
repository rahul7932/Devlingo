import React, { useState } from 'react';
import styles from '../styles/MultipleChoiceQuestion.module.css'; // Assuming you're using CSS Modules

const MultipleChoiceQuestion = ({ questionText, options }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option.id);
    if (option.isCorrect) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect, try again.');
    }
  };

  return (
    <div className={styles['question-container']}>
      <p>{questionText}</p>
      <div className={styles['options-grid']}>
        {options.map((option) => (
          <button
            key={option.id}
            className={`${styles['option-button']} ${selectedAnswer === option.id ? styles.selected : ''}`}
            onClick={() => handleAnswerSelect(option)}
          >
            {option.text}
          </button>
        ))}
      </div>
      {/* Add the 'show' class when feedback is present */}
      <p className={`${styles.feedback} ${feedback ? styles.show : ''}`}>
        {feedback}
      </p>
    </div>
  );
};

export default MultipleChoiceQuestion;
