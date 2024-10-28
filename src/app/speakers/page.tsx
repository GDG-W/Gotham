import FAQs from '@/components/shared/FAQS';
import Hero from './components/Hero';
import Subscribe from '@/components/shared/Subscribe';
import Speakers from './components/Speakers';

const SpeakersPage = () => {
  return (
    <main className='speakers-main'>
      <Hero />
      <Speakers />
      <FAQs />
      <Subscribe />
    </main>
  );
};
export default SpeakersPage;
