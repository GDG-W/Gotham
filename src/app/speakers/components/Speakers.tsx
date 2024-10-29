'use client';
import { useEffect, useState } from 'react';
import SpeakersList from './SpeakersList';
import DaysAndFilter from './DaysAndFilter';
import { Speaker, speakerData } from '../data/speakerData';

const sortedSpeakerData = speakerData.sort((a, b) => a.name.localeCompare(b.name));

const Speakers = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    day: 1,
    category: 'All',
  });
  const [displayedData, setDisplayedData] = useState<Array<Speaker>>([]);

  useEffect(() => {
    let filteredData = sortedSpeakerData.filter((item) => item.day === selectedFilters.day);

    if (selectedFilters.category !== 'All') {
      filteredData = filteredData.filter((item) => item.track === selectedFilters.category);
    }

    setDisplayedData(filteredData);
  }, [selectedFilters]);

  return (
    <>
      <DaysAndFilter selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
      <SpeakersList speakerData={displayedData} />
    </>
  );
};
export default Speakers;
