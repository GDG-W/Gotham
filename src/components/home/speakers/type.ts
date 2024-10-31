import speakersData from '@/app/speakers/data/speakers.json';

export type SpeakerDataType = (typeof speakersData)[keyof typeof speakersData] & {
  links: {
    github?: string;
    twitter: string;
    linkedin?: string;
  };
};
