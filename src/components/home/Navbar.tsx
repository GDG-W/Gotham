'use client';

import React, { useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navbarClass = pathname === '/faqs' ? 'navbar navbar-faq' : 'navbar';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`${navbarClass} navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className='navbar__logo'>
        <Image src={'/images/svg/devfest--logo.svg'} alt='DevFest Logo' width={137} height={49} />
      </div>

      <div className='navbar__menu-icon' onClick={toggleMenu}>
        <Image
          src={isMenuOpen ? '/images/icons/close-icon.svg' : '/images/icons/menu.svg'}
          alt={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          width={30}
          height={30}
        />
      </div>

      <div className='navbar__links'>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={isActive(link.href) ? 'active' : ''}>
            {link.label}
          </Link>
        ))}
      </div>

      <div className='navbar__tickets-btn'>
        <Link href='https://tickets.devfestlagos.com' target='__blank'>
          Get Tickets
        </Link>
        <Image
          className='navbar__tickets-btn__icon'
          src={'/images/icons/ticket.svg'}
          alt='Ticket'
          width={24}
          height={24}
        />
      </div>
    </nav>
  );
};

export default Navbar;
