import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Community = () => {
  return (
    <div className='community'>
      <div className='gdg-activities'>
        <h5 className='text-base'>GDG Lagos</h5>

        <div className='community-header'>
          <h1>Stay updated on GDG Lagos activities</h1>

          <p>
            Get updated on all our activities, events, webinars. Be the first to know what the GDG
            Lagos community is up to{' '}
          </p>
        </div>
        <div className='button'>
          <Link className='link' href='/community'>
            Let`&aspos;`s go
          </Link>
          <Image src='/images/icons/arrow.svg' alt='Arrow Icon' width={24} height={24} />
        </div>
      </div>
      <div className='community-img'>
        <Image src='/images/svg/community.svg' alt='Community' width={350} height={350} />
      </div>
    </div>
  );
};

export default Community;
