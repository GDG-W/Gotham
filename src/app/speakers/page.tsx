import FAQs from '@/components/shared/FAQS';
import DaysAndFilter from './components/DaysAndFilter';
import Hero from './components/Hero';
import SpeakersList from './components/SpeakersList';
import Subscribe from '@/components/shared/Subscribe';

const SpeakersPage = () => {
  return (
    <main className='speakers-main'>
      <Hero />
      <DaysAndFilter />
      <SpeakersList />
      <FAQs />
      <Subscribe />
    </main>
  );
};
export default SpeakersPage;
