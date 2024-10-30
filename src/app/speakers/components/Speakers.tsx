'use client';
import { useEffect, useState } from 'react';
import SpeakersList from './SpeakersList';
import DaysAndFilter from './DaysAndFilter';
import { Speaker, speakerData } from '../data/speakerData';

const sortedSpeakerData = speakerData.sort((a, b) => a.name.localeCompare(b.name));

const Speakers = () => {
  const [selectedFilters, setSelectedFilters] = useState<{
    day: string | number;
    category: string;
  }>({
    day: 'All',
    category: 'All',
  });
  const [displayedData, setDisplayedData] = useState<Array<Speaker>>([]);

  useEffect(() => {
    let filteredData =
      selectedFilters.day === 'All'
        ? sortedSpeakerData
        : sortedSpeakerData.filter((item) => item.day === selectedFilters.day);

    if (selectedFilters.category !== 'All') {
      filteredData = filteredData.filter((item) => item.track === selectedFilters.category);
    }

    if (filteredData.length === 0) setSelectedFilters({ ...selectedFilters, category: 'All' });
    else setDisplayedData(filteredData);
  }, [selectedFilters]);

  return (
    <>
      <DaysAndFilter
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        speakerData={
          selectedFilters.day === 'All'
            ? sortedSpeakerData
            : sortedSpeakerData.filter((item) => item.day === selectedFilters.day)
        }
      />
      <SpeakersList speakerData={displayedData} />
    </>
  );
};
export default Speakers;
