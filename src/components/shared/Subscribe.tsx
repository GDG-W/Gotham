import Image from 'next/image';

const Subscribe = () => {
  return (
    <section className='subscribe-wrapper text-sm'>
      <div className='subscribe-content'>
        <div className='subscribe-gdg-tag'>GDG LAGOS</div>
        <h3 className='subscribe-title'>Stay updated on GDG Lagos activities</h3>
        <p className='subscribe-text'>
          Get updated on all our activities, events, webinars. Be the first to know what the GDG
          Lagos community is up to.
        </p>
        <button className='subscribe-btn'>
          <p>Let{"'"}s go</p>
          <Image src='/images/svg/arrow-right.svg' alt='Right Arrow' width={17} height={17} />
        </button>
      </div>
      <Image
        src='/images/png/subscribe-selfie.png'
        alt='Some of our hosts taking a selfie at a previous event'
        className='subscribe-image'
        height={304}
        width={312}
      />
    </section>
  );
};
export default Subscribe;
