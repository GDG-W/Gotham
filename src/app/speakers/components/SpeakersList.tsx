'use client';
import { useState } from 'react';
import styles from '../styles/SpeakersList.module.scss';
import { fullSpeakerData, Speaker } from '../mockData/SpeakerData';
import Image from 'next/image';

const SpeakerItem = ({ speaker }: { speaker: Speaker }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <li>
      <div className={`${styles.flipInner}  ${isFlipped ? styles.isFlipped : ''}`}>
        <div className={styles.flipFront}>
          <div className={styles.frontHead}>
            <p>{speaker.name.slice(0, 1)}</p>
            <div className={styles.speakerImageWrap} style={{ position: 'relative' }}>
              <Image src={speaker.image} fill alt={speaker.name + "'s Image"} />
            </div>
          </div>
          <div className={styles.frontContent}>
            <p className={styles.speakerName}>{speaker.name}</p>
            <p className={styles.topic}>{speaker.topic}</p>
            <p className={styles.date}>{speaker.date}</p>
          </div>
          <button className={styles.flipBtn} onClick={() => setIsFlipped(true)}>
            <p>View Bio</p>
          </button>
        </div>
        <div className={styles.flipBack}>
          <button className={styles.cancelBtn} onClick={() => setIsFlipped(false)}>
            <Image src={'/images/svg/Cancel-icon.svg'} alt='cancel icon' height={36} width={36} />
          </button>
          <div className={styles.content}>
            <div className={styles.speakerName}>{speaker.name}</div>
            <div className={styles.career}>{speaker.career}</div>
            <div className={styles.bio}>{speaker.bio}</div>
          </div>
          <div className={styles.socialsWrapper}>
            <p>SPEAKERS SOCIALS</p>
            <div className={styles.socialLinksContainer}>
              {speaker.socials.twitter && (
                <a href={speaker.socials.twitter}>
                  <Image src={'/images/svg/X-icon.svg'} alt='x icon' width={24} height={24} />
                </a>
              )}
              {speaker.socials.linkdin && (
                <a href={speaker.socials.linkdin}>
                  <Image
                    src={'/images/svg/Linkedin-icon.svg'}
                    alt='linkdin icon'
                    width={24}
                    height={24}
                  />
                </a>
              )}
              {speaker.socials.instagram && (
                <a href={speaker.socials.instagram}>
                  <Image
                    src={'/images/svg/instagram-icon.svg'}
                    alt='instagram icon'
                    width={24}
                    height={24}
                  />
                </a>
              )}
              {speaker.socials.facebook && (
                <a href={speaker.socials.facebook}>
                  <Image
                    src={'/images/svg/Facebook-icon.svg'}
                    alt='facebook icon'
                    width={24}
                    height={24}
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const SpeakersList = () => {
  return (
    <section className={styles.speakersListWrapper}>
      <ul className={styles.speakersList}>
        {fullSpeakerData.map((speaker) => {
          return <SpeakerItem speaker={speaker} key={speaker.name} />;
        })}
      </ul>
      <button className={styles.loadBtn}>
        <p>Load More</p>
      </button>
    </section>
  );
};
export default SpeakersList;
