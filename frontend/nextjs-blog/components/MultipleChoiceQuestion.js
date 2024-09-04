import React from 'react';

const MultipleChoiceQuestion = ({ question, answers, onAnswerClick }) => {
    return (
        <div style={{ margin: '20px' }}>
            <h1>{question}</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {answers.map((answer, index) => (
                    <button
                        key={index}
                        style={{
                            padding: '10px 20px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            borderRadius: '5px',
                            backgroundColor: '#f0f0f0',
                            border: '2px solid #ccc',
                            ':hover': {
                                backgroundColor: '#e2e2e2'
                            }
                        }}
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
