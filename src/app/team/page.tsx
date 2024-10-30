import Hero from './components/Hero';
import Team from './components/Team';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

const TeamPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Team />
      </main>
      <Footer />
    </>
  );
};
export default TeamPage;
