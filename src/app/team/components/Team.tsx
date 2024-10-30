'use client';
import React, { useEffect, useState } from 'react';
import TeamFilter from './TeamFilter';
import DisplayedTeam from './DisplayedTeam';
import { transformedData, TransformedItem } from '../data/parsedTeamData';

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [teamData, setTeamData] = useState<Array<TransformedItem>>([]);

  useEffect(() => {
    let filteredData = transformedData;

    if (selectedCategory !== 'all') {
      filteredData = transformedData.filter((item) => item.category === selectedCategory);
    }

    const sortedData = filteredData.sort((a, b) => a.name.localeCompare(b.name));
    setTeamData(sortedData);
  }, [selectedCategory]);

  return (
    <>
      <TeamFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <DisplayedTeam teamData={teamData} />
    </>
  );
};
export default Team;
