'use client';
import styles from '../styles/TeamCard.module.scss';
import Image from 'next/image';

import YoutubeMusicIcon from '../assets/youtubemusic.svg';

// badges
// import DesignerBadge from '../assets/designer-badge.svg';
// import LeadsBadge from '../assets/leads-badge.svg';
// import ContentBadge from '../assets/content-badge.svg';
import OrganisersBadge from '../assets/organiser-badge.svg';
// import DevsBadge from '../assets/dev-badge.svg';

// icons
// import DesignerIcon from '../assets/blue-arrow.png';
import LeadsIcon from '../assets/green-hash.svg';
// import ContentIcon from '../assets/green-cursor.svg';
// import OrganisersIcon from '../assets/red-cross.svg';
// import DevsIcon from '../assets/pink-brackets.png';

import TwitterIcon from '../assets/X.svg';
import FacebookIcon from '../assets/Facebook.svg';
import LinkedinIcon from '../assets/Linkedin.svg';
import InstagramIcon from '../assets/instagram.svg';
import { useState } from 'react';

const TeamCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={styles.CardWrapper}>
      <div className={styles.flipCard}>
        <div
          className={`${styles.flipInner} ${isFlipped ? styles.isFlipped : ''}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className={styles.flipFront}>
            <div className={styles.lockedIn}>
              <p>My #Locked-in Vibe</p>
              <div className={styles.vibe}>
                <YoutubeMusicIcon />
                <p>Uhh Yeah - Asake</p>
              </div>
            </div>
            <div className={styles.memberBio}>
              <Image
                src={'/images/png/testImage.png'}
                height={480}
                width={437}
                className={styles.memberImage}
                alt="sodiq akinjobi's image"
              />
              <div className={styles.categoryIcon}>
                <OrganisersBadge />
              </div>
              <div className={styles.socials}>
                <a href='#'>
                  <TwitterIcon />
                </a>
                <a href='#'>
                  <LinkedinIcon />
                </a>
                <a href='#'>
                  <InstagramIcon />
                </a>
                <a href='#'>
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.flipBack}>
            <div className={styles.flipBackInner}>
              <div className={styles.memberQuotes}>
                <div>
                  <p className={styles.textHeader}>Fun Fact</p>
                  <p className={styles.textContent}>
                    &#34;I learnt the art of 1 arm pushups at NYSC camp&#34;
                  </p>
                </div>
                <div>
                  <p className={styles.textHeader}>Words to live by</p>
                  <p className={styles.textContent}>&#34;Always be kind, Regardless&#34;</p>
                </div>
              </div>
              <div className={styles.extraIcons}>
                <Image
                  src={'/images/png/testImage.png'}
                  alt="sodiq's image"
                  height={64}
                  width={64}
                  className={styles.flipBackImage}
                />
                <LeadsIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardDetails}>
        <p className={styles.name}>sodiq akinjobi</p>
        <p className={styles.category}>organizer</p>
        <p className={styles.quote}>
          &#34;Being a president doesn&#39;t stop me from serving another country&#34;
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
