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
};

export const speakerData: Speaker[] = Object.values(speakers);
