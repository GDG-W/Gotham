import FAQs from '@/components/shared/FAQS';
import Hero from './components/Hero';
import Subscribe from '@/components/shared/Subscribe';
import Speakers from './components/Speakers';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';

const SpeakersPage = () => {
  return (
    <>
      <Navbar />
      <main className='speakers-main'>
        <Hero />
        <Speakers />
        <FAQs />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};
export default SpeakersPage;
