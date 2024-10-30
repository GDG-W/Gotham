'use client';
import { Speaker } from '../data/speakerData';
import styles from '../styles/DaysAndFilter.module.scss';
import { Dispatch } from 'react';

const DaysAndFilter = ({
  selectedFilters,
  setSelectedFilters,
  speakerData,
}: {
  selectedFilters: { day: number; category: string };
  speakerData: Speaker[];
  setSelectedFilters: Dispatch<{ day: number; category: string }>;
}) => {
  const categories = speakerData.reduce(
    (acc: string[], speaker) => {
      if (!acc.includes(speaker.track)) {
        acc.push(speaker.track);
      }
      return acc;
    },
    ['All'],
  );

  const handleFilter = (key: string) => {
    setSelectedFilters({ ...selectedFilters, category: key });
  };

  const handleDays = (day: number) => {
    setSelectedFilters({ ...selectedFilters, day });
  };

  return (
    <section className={styles.DayFilterWrapper}>
      <div className={styles.DayBtnsContainer}>
        <button
          onClick={() => handleDays(1)}
          className={`${styles.dayBtn} ${selectedFilters.day === 1 ? styles.activeDayBtn : ''}`}
        >
          <p>Day 1 - Friday</p>
        </button>
        <button
          onClick={() => handleDays(2)}
          className={`${styles.dayBtn} ${selectedFilters.day === 2 ? styles.activeDayBtn : ''}`}
        >
          <p>Day 2 - Saturday</p>
        </button>
      </div>
      <div className={styles.FilterBtnsContainer}>
        <div className={styles.FilterBtnsFlex}>
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className={`${styles.filterBtn} ${selectedFilters.category === category ? styles.activeFilterBtn : ''}`}
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
