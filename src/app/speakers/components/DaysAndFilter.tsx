'use client';
import styles from '../styles/DaysAndFilter.module.scss';
import { categories } from '../mockData/mock';
import { useState } from 'react';

const DaysAndFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['All']);
  const [selectedDay, setSelectedDay] = useState('friday');

  const handleFilter = (key: string) => {
    if (key === 'All') {
      setSelectedFilters([key]);
    } else {
      setSelectedFilters((prevFilters) => {
        if (prevFilters.includes(key)) {
          return prevFilters.length !== 1
            ? prevFilters.filter((filter) => filter !== key)
            : ['All'];
        }
        return [...prevFilters.filter((filter) => filter !== 'All'), key];
      });
    }
  };

  const handleDays = (day: string) => {
    setSelectedDay(day);
  };

  return (
    <section className={styles.DayFilterWrapper}>
      <div className={styles.DayBtnsContainer}>
        <button
          onClick={() => handleDays('friday')}
          className={`${styles.dayBtn} ${selectedDay === 'friday' ? styles.activeDayBtn : ''}`}
        >
          <p>Day 1 - Friday, Nov 15</p>
        </button>
        <button
          onClick={() => handleDays('saturday')}
          className={`${styles.dayBtn} ${selectedDay === 'saturday' ? styles.activeDayBtn : ''}`}
        >
          <p>Day 2 - Saturday, Nov 16</p>
        </button>
      </div>
      <div className={styles.FilterBtnsContainer}>
        <div className={styles.FilterBtnsFlex}>
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className={`${styles.filterBtn} ${selectedFilters.includes(category) ? styles.activeFilterBtn : ''}`}
                onClick={() => handleFilter(category)}
              >
                <p>{category}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default DaysAndFilter;
