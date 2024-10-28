import speakers from './speakers.json';

export type Speaker = {
  name: string;
  title: string;
  bio: string;
  image_url: string;
  links: {
    github?: string;
    linkedin?: string;
    twitter: string;
  };
  day?: number;
  track: string;
  session_title: string;
};

export const speakerData: Speaker[] = Object.values(speakers);
