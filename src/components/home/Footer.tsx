import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      link: '/schedule',
      title: 'Schedule',
    },
    {
      link: '/speakers',
      title: 'Speakers',
    },
    {
      link: '/faqs',
      title: 'FAQs',
    },
    {
      link: '/dp-generator',
      title: 'DP Generator',
    },
  ];

  const footerLinks2 = [
    {
      href: '/venue-info',
      title: 'Venue Information',
    },
    {
      href: '/view-ticket',
      title: 'View Ticket',
    },
    {
      href: '/play-trivia',
      title: 'Play Trivia',
    },
    {
      href: 'https://gdg.community.dev/gdg-lagos/',
      title: 'Join the Community',
    },
  ];

  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__about'>
          <h5 className='text-base'>About DevFest Lagos</h5>
          <p className='text-base'>
            DevFest Lagos is an annual conference for tech enthusiasts from novices to industry
            leaders organized by the Google Developer Group Lagos (GDG Lagos). The event features
            sessions on various topics, including Mental Health, Mobile Development, Design, Web
            Development, Cloud Computing, DevOps, Machine Learning, AR/VR, and more.{' '}
          </p>
          <p className='text-base'>
            DevFest Lagos will take place this year on November 15th and 16th, 2024, at the Landmark
            Events Center in Lagos. Sessions will run simultaneously so be sure to register for
            those that match your interests or areas you want to learn about.
          </p>
        </div>
      </div>

      <div className='footer__links'>
        <div className='footer__link text-base'>
          {footerLinks.map((link, index) => (
            <Link key={index} href={link.link}>
              {link.title}
            </Link>
          ))}
        </div>

        <div className='footer__link text-base'>
          {footerLinks2.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.title}
            </Link>
          ))}
        </div>

        <div className='footer__link footer__link-socials text-base'>
          <p>Contact Us</p>
          <p>Follow Us:</p>
          <div className='footer__socials'>
            <div className='footer__icon'>
              <Link href='https://x.com/gdglagos'>
                <Image
                  className='footer__img'
                  src='/images/icons/twitter-icon.svg'
                  alt='Twitter Icon'
                  width={40}
                  height={40}
                />
              </Link>
            </div>

            <div className='footer__icon'>
              <Link href='https://www.instagram.com/gdglagos'>
                <Image
                  className='footer__img'
                  src='/images/icons/instagram-icon.svg'
                  alt='Instagram Icon'
                  width={40}
                  height={40}
                />
              </Link>
            </div>

            <div className='footer__icon'>
              <Link href='https://m.facebook.com/100075612535619'>
                <Image
                  className='footer__img'
                  src='/images/icons/facebook-icon.svg'
                  alt='Facebook Icon'
                  width={40}
                  height={40}
                />
              </Link>
            </div>

            <div className='footer__icon'>
              <Link href='https://www.youtube.com/@GDGLagos'>
                <Image
                  className='footer__img'
                  src='/images/icons/youtube-icon.svg'
                  alt='Youtube Icon'
                  width={40}
                  height={40}
                />
              </Link>
            </div>

            <div className='footer__icon'>
              <Link href='https://www.linkedin.com/company/gdg-lagos'>
                <Image
                  className='footer__img'
                  src='/images/icons/linkedin-icon.svg'
                  alt='LinkedIn Icon'
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className='footer__link footer__link-policy text-base'>
          <Link href='https://policies.google.com/privacy'>Privacy Policy</Link>
          <Link href='https://developers.google.com/community-guidelines'>
            Community Guidelines
          </Link>
        </div>

        <div className='footer__logo'>
          <div>
            <Image
              src='/images/svg/footer-logo.svg'
              alt='DevFest Logo'
              width={223}
              height={133}
              className='footer__logo-img'
            />
          </div>
          <div>
            <p>{`DevFest Lagos ${currentYear}`}</p>
          </div>
        </div>

        <div className='footer__copyright'>
          <p>© {`${currentYear} DevFestLagos. All Rights Reserved.`}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
