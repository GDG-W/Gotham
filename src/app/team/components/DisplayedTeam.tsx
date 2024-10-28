'use client';
import styles from '../styles/DisplayedTeam.module.scss';
import TeamCard from './TeamCard';

const DisplayedTeam = () => {
  return (
    <section className={styles.TeamWrapper}>
      <TeamCard />
      <TeamCard />
      <TeamCard />
    </section>
  );
};
export default DisplayedTeam;
