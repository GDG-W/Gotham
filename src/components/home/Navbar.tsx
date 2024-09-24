'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/speakers', label: 'Speakers' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/team', label: 'Team' },
  { href: '/faqs', label: 'FAQs' },
];

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className='navbar'>
      <div className='navbar__background-boxes'>
        {[...Array(20)].map((_, index) => (
          <div key={index} className='navbar__background-box' />
        ))}
      </div>

      <div className='navbar__logo'>
        <Image src={'/images/svg/devfest-logo.svg'} alt='DevFest Logo' width={137} height={49} />
      </div>

      <div className='navbar__links'>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={isActive(link.href) ? 'navbar__register-btn' : ''}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className='navbar__tickets-btn'>
        <Link href='/get-tickets'>Get Tickets</Link>
        <Image src={'/images/icons/ticket.svg'} alt='Ticket' width={24} height={24} />
      </div>
    </nav>
  );
};

export default Navbar;
