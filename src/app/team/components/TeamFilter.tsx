'use client';
import { Dispatch, useState } from 'react';
import styles from '../styles/TeamFilter.module.scss';

import AllIcon from '../assets/all-icon.svg';
import BlueArrow from '../assets/blue-arrow.svg';
import GreenHash from '../assets/green-hash.svg';
import GreenCursor from '../assets/content-badge.svg';
import RedCross from '../assets/red-cross.svg';
import PinkBrackets from '../assets/pink-brackets.svg';

const categories = [
  { title: 'all', icon: AllIcon },
  { title: 'organisers', icon: RedCross },
  { title: 'leads', icon: GreenHash },
  { title: 'devs', icon: PinkBrackets },
  { title: 'designers', icon: BlueArrow },
  { title: 'content', icon: GreenCursor },
];

const CategoryBtn = ({
  category,
  selectedFilter,
  setSelectedFilter,
}: {
  category: { title: string; icon: React.FC<React.SVGProps<SVGSVGElement>> };
  selectedFilter: string;
  setSelectedFilter: Dispatch<string>;
}) => {
  return (
    <button
      className={`${styles.categoryBtn} ${selectedFilter === category.title ? styles.active : ''}`}
      onClick={() => setSelectedFilter(category.title)}
    >
      {selectedFilter === category.title && <category.icon />}
      <p>{category.title}</p>
    </button>
  );
};

const TeamFilter = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <section className={styles.TeamFilterWrapper}>
      <div className={styles.heading}>
        <h3>These Heroes Crafted an Excellent Experience for you.</h3>
        <p> We do magic, and we are proud to share all of it with you!</p>
      </div>
      <div className={styles.categoriesContainer}>
        <div className={styles.categoriesFilter}>
          {categories.map((category) => {
            return (
              <CategoryBtn
                category={category}
                key={category.title}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default TeamFilter;
