'use client';
import React from 'react';
import styles from '../styles/DisplayedTeam.module.scss';
import TeamCard from './TeamCard';
import { TransformedItem } from '../data/parsedTeamData';

const DisplayedTeam = ({ teamData }: { teamData: TransformedItem[] }) => {
  return (
    <section className={styles.TeamWrapper}>
      {teamData.map((member, index) => {
        return <TeamCard key={index} member={member} />;
      })}
    </section>
  );
};
export default DisplayedTeam;
