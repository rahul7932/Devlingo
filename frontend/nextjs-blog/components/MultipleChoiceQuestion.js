import React from 'react';
import styles from '../styles/MultipleChoiceQuestion.module.css'; // Make sure path is correct

const MultipleChoiceQuestion = ({ question, answers, onAnswerClick }) => {
    return (
        <div className={styles.questionContainer}>
            <h1 className={styles.question}>{question}</h1>
            <div className={styles.answersContainer}>
                {answers.map((answer, index) => (
                    <button
                        key={index}
                        className={styles.button}
                        onClick={() => onAnswerClick(answer)}
                    >
                        {answer}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MultipleChoiceQuestion;
