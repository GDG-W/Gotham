'use client';
import React, { Dispatch } from 'react';
import styles from '../styles/TeamFilter.module.scss';

import AllIcon from '../assets/all-icon.svg';
import BlueArrow from '../assets/blue-arrow.svg';
import GreenHash from '../assets/green-hash.svg';
import GreenCursor from '../assets/content-badge.svg';
import RedCross from '../assets/red-cross.svg';
import PinkBrackets from '../assets/pink-brackets.svg';

const categories = [
  { title: 'all', icon: AllIcon, filter: 'all' },
  { title: 'Organisers', icon: RedCross, filter: 'GDG Organiser' },
  { title: 'Product', icon: GreenHash, filter: 'Product' },
  { title: 'Devs', icon: PinkBrackets, filter: 'Developer' },
  { title: 'Designers', icon: BlueArrow, filter: 'Designer' },
  { title: 'Content', icon: GreenCursor, filter: 'Content' },
];

const CategoryBtn = ({
  category,
  selectedFilter,
  setSelectedFilter,
}: {
  category: { title: string; icon: React.FC<React.SVGProps<SVGSVGElement>>; filter: string };
  selectedFilter: string;
  setSelectedFilter: Dispatch<string>;
}) => {
  return (
    <button
      className={`${styles.categoryBtn} ${selectedFilter === category.filter ? styles.active : ''}`}
      onClick={() => setSelectedFilter(category.filter)}
    >
      {selectedFilter === category.filter && <category.icon />}
      <p>{category.title}</p>
    </button>
  );
};

const TeamFilter = ({
  selectedCategory,
  setSelectedCategory,
}: {
  selectedCategory: string;
  setSelectedCategory: Dispatch<string>;
}) => {
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
                selectedFilter={selectedCategory}
                setSelectedFilter={setSelectedCategory}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default TeamFilter;
