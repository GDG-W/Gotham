'use client';
import styles from '../styles/SpeakersList.module.scss';
import SpeakerCard from './SpeakerCard';
import { Speaker } from '../data/speakerData';

const SpeakersList = ({ speakerData }: { speakerData: Speaker[] }) => {
  return (
    <section className={styles.speakersListWrapper}>
      <ul className={styles.speakersList}>
        {speakerData.map((speaker) => {
          return <SpeakerCard speaker={speaker} key={speaker.name} />;
        })}
      </ul>
      {/* <button className={styles.loadBtn}>
        <p>Load More</p>
      </button> */}
    </section>
  );
};
export default SpeakersList;
