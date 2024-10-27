'use client';
import styles from '../styles/TeamCard.module.scss';
import Image from 'next/image';
import { TransformedItem } from '../data/parsedTeamData';

import YoutubeMusicIcon from '../assets/youtubemusic.svg';

// badges
import DesignerBadge from '../assets/designer-badge.svg';
import LeadsBadge from '../assets/leads-badge.svg';
import ContentBadge from '../assets/content-badge.svg';
import OrganisersBadge from '../assets/organiser-badge.svg';
import DevsBadge from '../assets/dev-badge.svg';

// icons
import DesignerIcon from '../assets/blue-arrow.svg';
import LeadsIcon from '../assets/green-hash.svg';
import ContentIcon from '../assets/green-cursor.svg';
import OrganisersIcon from '../assets/red-cross.svg';
import DevsIcon from '../assets/pink-brackets.svg';

import TwitterIcon from '../assets/X.svg';
import LinkedinIcon from '../assets/Linkedin.svg';
import InstagramIcon from '../assets/instagram.svg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const sortMember = (member: TransformedItem, type: string) => {
  switch (true) {
    case member.category === 'Developer':
      return type === 'badge' ? <DevsBadge /> : <DevsIcon />;
    case member.category === 'Designer':
      return type === 'badge' ? <DesignerBadge /> : <DesignerIcon />;
    case member.category === 'Content':
      return type === 'badge' ? <ContentBadge /> : <ContentIcon />;
    case member.category === 'GDG Organizer':
      return type === 'badge' ? <OrganisersBadge /> : <OrganisersIcon />;
    case member.category === 'Product':
      return type === 'badge' ? <LeadsBadge /> : <LeadsIcon />;

    default:
      return type === 'badge' ? <LeadsBadge /> : <LeadsIcon />;
  }
};

const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_KEY;

interface SongDetails {
  songTitle: string;
  artist: string;
}

const fetchSongDetails = async (videoId: string): Promise<SongDetails | null> => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`,
    );
    const title = response.data.items[0].snippet.title;
    // console.log(response.data.items[0].snippet);
    const songTitle = title.split('-')[0].trim();
    const artist = response.data.items[0].snippet.tags[0];
    return { songTitle, artist };
  } catch (error) {
    console.error('Error fetching song details:', error);
    return null;
  }
};

const TeamCard = ({ member }: { member: TransformedItem }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [songDetails, setSongDetails] = useState<SongDetails | null>(null);

  useEffect(() => {
    try {
      const videoId = new URL(member.song).searchParams.get('v');
      if (videoId) {
        fetchSongDetails(videoId).then((details) => {
          setSongDetails(details);
        });
      }
    } catch (error) {
      console.error('Invalid URL:', error);
    }
  }, [member.song]);

  return (
    <div className={styles.CardWrapper}>
      <div className={styles.flipCard}>
        <div
          className={`${styles.flipInner} ${isFlipped ? styles.isFlipped : ''}`}
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        >
          <div className={styles.flipFront}>
            <a href={member.song} target='_blank' rel='noreferrer' className={styles.lockedIn}>
              <p>My #Locked-in Vibe</p>
              <div className={styles.vibe}>
                <YoutubeMusicIcon />
                <p>
                  {songDetails?.songTitle} - {songDetails?.artist}
                </p>
              </div>
            </a>
            <div className={styles.memberBio}>
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className={styles.memberImage}
                style={{
                  background: `${isHovered ? `url(${member.image})` : `linear-gradient(0deg, #EBE2CC, #EBE2CC), url(${member.image})`}`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className={styles.categoryIcon}>{sortMember(member, 'badge')}</div>
              <div className={styles.socials}>
                {member.twitter && (
                  <a href={member.twitter} target='_blank' rel='noreferrer'>
                    <TwitterIcon />
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target='_blank' rel='noreferrer'>
                    <LinkedinIcon />
                  </a>
                )}
                {member.instagram && (
                  <a href={member.instagram} target='_blank' rel='noreferrer'>
                    <InstagramIcon />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className={styles.flipBack}>
            <div className={styles.flipBackInner} onClick={() => setIsFlipped(!isFlipped)}>
              <div className={styles.memberQuotes}>
                <div>
                  <p className={styles.textHeader}>Fun Fact</p>
                  <p className={styles.textContent}>&#34;{member.fact}&#34;</p>
                </div>
                {member.note && (
                  <div>
                    <p className={styles.textHeader}>Notes From Team Member</p>
                    <p className={styles.textContent}>&#34;{member.note}&#34;</p>
                  </div>
                )}
              </div>
              <div className={styles.extraIcons}>
                <Image
                  src={member.image}
                  alt={member.name + "'s image"}
                  height={64}
                  width={64}
                  className={styles.flipBackImage}
                />
                {sortMember(member, 'icon')}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardDetails}>
        <p className={styles.name}>{member.name}</p>
        <p className={styles.category}>{member.category}</p>
        <p className={styles.quote}>&#34;{member.quote}&#34;</p>
      </div>
    </div>
  );
};

export default TeamCard;
