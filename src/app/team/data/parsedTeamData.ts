import teamData from './teamData.json';

type DataItem = {
  'What’s your full name?': string;
  'Select your sub-team?': string;
  'YouTube Song': string;
  'What words do you live by? (Give us a quote)': string;
  'Fun Fact': string;
  'Please share a link to your headshot.': string;
  'LinkedIn Profile URL': string;
  'Instagram Profile URL': string;
  'Twitter Profile URL': string;
  'What was your experience working with the team like?': string;
  'Notes from a team member': string;
};

export type TransformedItem = {
  name: string;
  category: string;
  song: string;
  quote: string;
  fact: string;
  image: string;
  linkedin: string;
  instagram: string;
  twitter: string;
  experience: string;
  note: string;
};

const keyMap: { [key: string]: keyof TransformedItem } = {
  'What’s your full name?': 'name',
  'Select your sub-team?': 'category',
  'YouTube Song': 'song',
  'What words do you live by? (Give us a quote)': 'quote',
  'Fun Fact': 'fact',
  'Please share a link to your headshot.': 'image',
  'LinkedIn Profile URL': 'linkedin',
  'Instagram Profile URL': 'instagram',
  'Twitter Profile URL': 'twitter',
  'What was your experience working with the team like?': 'experience',
  'Notes from a team member': 'note',
};

export const transformedData = teamData.map((item) => {
  const newItem: Partial<TransformedItem> = {};
  (Object.keys(item) as Array<keyof DataItem>).forEach((key) => {
    const newKey = keyMap[key];
    if (newKey) {
      newItem[newKey] = item[key];
    }
  });
  return newItem as TransformedItem;
});
