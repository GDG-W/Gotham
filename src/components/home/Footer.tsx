import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/components/home/footer-links';
import { footerLinks2 } from '@/components/home/footer-links';
import { socialLinks } from '@/components/home/footer-links';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className='footer__content'>
        <div className='footer__about'>
          <div className='footer__header'>
            <h5 className='text-base'>About DevFest Lagos</h5>
          </div>
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
            <Link key={index} href={link.link} target='__blank'>
              {link.title}
            </Link>
          ))}
        </div>

        <div className='footer__link text-base'>
          {footerLinks2.map((link, index) => (
            <Link key={index} href={link.href} target='__blank'>
              {link.title}
            </Link>
          ))}
        </div>

        <div className='footer__link footer__link-socials text-base'>
          <p>Contact Us</p>
          <p>Follow Us:</p>
          <div className='footer__socials'>
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.href} className='footer__icon' target='__blank'>
                <Image
                  src={`/images/icons/${social.icon}`}
                  alt={`${social.icon.split('-')[0]} Icon`}
                  width={40}
                  height={40}
                  className='footer__img'
                />
              </Link>
            ))}
          </div>
        </div>

        <div className='footer__link footer__link-policy text-base'>
          <Link href='https://policies.google.com/privacy' target='__blank'>
            Privacy Policy
          </Link>
          <Link href='https://developers.google.com/community-guidelines' target='__blank'>
            Community Guidelines
          </Link>
        </div>

        <div className='footer__logo'>
          <div>
            <Image
              src='/images/svg/footer-logo.svg'
              alt='DevFest Logo'
              width={200}
              height={100}
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
