// components/Sidebar.js
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';
import { useState } from 'react';
import { FaSearch, FaHome, FaChartBar, FaBell, FaUser } from 'react-icons/fa';

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="https://traceai.org/img/removed_white.png" alt="Logo" className={styles.logoImage} />
        <div>
          <h3>Devlingo</h3>
          <p>Rahul Kumar</p>
        </div>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link href="/">
            <FaHome className={styles.icon} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/revenue">
            <FaChartBar className={styles.icon} />
            <span>Lessons</span>
          </Link>
        </li>
        <li>
          <Link href="/analytics">
            <FaUser className={styles.icon} />
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
