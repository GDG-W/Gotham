import Image from 'next/image';
import { Button } from './Button';

type TFooterProps = {
  type?: 'ComingSoon' | 'DpGen';
};

const currentYear = new Date().getFullYear();

const socials = [
  { link: 'https://x.com/gdglagos', title: 'twitter' },
  {
    link: 'https://m.facebook.com/100075612535619',
    title: 'facebook',
  },
  { link: 'https://www.instagram.com/gdglagos', title: 'instagram' },
  { link: 'https://www.linkedin.com/company/gdg-lagos', title: 'linkedin' },
  { link: 'https://www.youtube.com/@GDGLagos', title: 'youtube' },
];

const footerLinks = [
  {
    link: '',
    title: 'Claim Ticket',
  },
  {
    link: 'https://gdg.community.dev/gdg-lagos/',
    title: 'Join the Community',
  },
  {
    link: 'https://policies.google.com/privacy',
    title: 'Privacy Policy',
  },
  {
    link: '',
    title: 'Upgrade Ticket',
  },
  {
    link: 'https://developers.google.com/community-guidelines',
    title: 'Community Guidelines',
  },
  {
    link: 'mailto:team@gdglagos.com',
    title: 'Contact Us',
  },
  {
    link: '',
    title: 'Ticket FAQ',
  },
];

export const Footer = ({ type = 'ComingSoon' }: TFooterProps) => {
  const bgStyle = {
    backgroundColor: type === 'ComingSoon' ? '#c3ecf6' : '#FFFAEB',
  };

  return (
    <footer className='footer-wrapper' style={bgStyle}>
      <div className='container'>
        <div className='footer-main'>
          <div>
            <div className='about-pill text-lg'>
              <p>About the event</p>
            </div>
            <p className='text-base'>
              DevFest Lagos is an annual conference for tech enthusiasts from novices to industry
              leaders organized by the Google Developer Group Lagos (GDG Lagos). The event features
              sessions on various topics, including Mental Health, Mobile Development, Design, Web
              Development, Cloud Computing, DevOps, Machine Learning, AR/VR, and more.{' '}
            </p>
            <p className='text-base'>
              DevFest Lagos will take place this year on November 15th and 16th, 2024, at the
              Landmark Events Center in Lagos. Sessions will run simultaneously so be sure to
              register for those that match your interests or areas you want to learn about.
            </p>
            <div className='socials'>
              <p>Follow us on:</p>
              <div>
                {socials.map((social, key) => (
                  <a
                    href={social.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    key={key}
                    aria-label={`Follow us on ${social.title}`}
                  >
                    <Image
                      src={`/images/icons/${social.title}-icon.svg`}
                      alt={`${social.title}`}
                      width={30}
                      height={20}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className='footer-logo'>
              <Image
                src={'/images/svg/devfest-logo.svg'}
                alt='DevFest Lagos Logo'
                width={300}
                height={94}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            {type === 'ComingSoon' && (
              <a href={'/apply-to-speak/'}>
                <Button label='Apply To Speak' size='lg' animate={false} />
              </a>
            )}

            {type === 'DpGen' && (
              <a href={'/'}>
                <Button label='Get Early Bird Tickets' size='lg' animate={false} />
              </a>
            )}

            <div className='footer-links'>
              <ul>
                {footerLinks.slice(0, 2).map(({ link, title }, key) => (
                  <li className='text-sm' key={key}>
                    <a href={link} target='_blank' rel='noopener noreferrer' aria-label={title}>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
              <ul>
                {footerLinks.slice(2, 4).map(({ link, title }, key) => (
                  <li className='text-sm' key={key}>
                    <a href={link} target='_blank' rel='noopener noreferrer' aria-label={title}>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
              <ul>
                {footerLinks.slice(4, 6).map(({ link, title }, key) => (
                  <li className='text-sm' key={key}>
                    <a href={link} target='_blank' rel='noopener noreferrer' aria-label={title}>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
              <ul>
                {footerLinks.slice(6, 10).map(({ link, title }, key) => (
                  <li className='text-sm' key={key}>
                    <a href={link} target='_blank' rel='noopener noreferrer' aria-label={title}>
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className='footer-copyright'>© {currentYear} Devfest Lagos. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
