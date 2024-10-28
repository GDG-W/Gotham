import DisplayedTeam from './components/DisplayedTeam';
import Hero from './components/Hero';
import TeamFilter from './components/TeamFilter';

const TeamPage = () => {
  return (
    <main>
      <Hero />
      <TeamFilter />
      <DisplayedTeam />
    </main>
  );
};
export default TeamPage;
