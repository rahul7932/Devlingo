import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/ProgressTile.module.css';
import { FaCheck, FaExclamationTriangle, FaLock } from 'react-icons/fa';

const ProgressTile = ({ section, progress, description, state, courseId, sectionId }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/courses/${courseId}/${sectionId}`);
  };

  let Icon;
  let colorStyle;
  if (state === "complete") {
    Icon = FaCheck;
    colorStyle = "checkStyle";
  } else if (state === "in_progress") {
    Icon = FaExclamationTriangle;
    colorStyle = "warningStyle";
  } else {
    Icon = FaLock;
    colorStyle = "lockStyle";
  }

  const iconClass = `${styles.iconStyle} ${styles[colorStyle]}`;

  return (
    <div className={styles.box} onClick={handleClick}>
      <h2>
        <Icon className={iconClass} /> {section}
      </h2>
      <span>{progress}% Complete</span>
      <p>{description}</p>
    </div>
  );
};

export default ProgressTile;
