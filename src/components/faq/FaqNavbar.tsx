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

const FaqNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`faq ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className='faq__logo'>
        <Link href='/'>
          <Image
            src={'/images/svg/faq-devfest-logo.svg'}
            alt='DevFest Logo'
            width={137}
            height={49}
          />
        </Link>
      </div>

      <div className='faq__menu-icon' onClick={toggleMenu}>
        <Image
          src={isMenuOpen ? '/images/icons/close-icon.svg' : '/images/icons/faq-menu-icon.svg'}
          alt={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          width={30}
          height={30}
        />
      </div>

      <div className='faq__links'>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className={isActive(link.href) ? 'active' : ''}>
            {link.label}
          </Link>
        ))}
      </div>

      <div className='faq__tickets-btn'>
        <Link href='https://tickets.devfestlagos.com' target='__blank'>
          Get Tickets
        </Link>
        <Image
          className='faq__tickets-btn__icon'
          src={'/images/icons/ticket.svg'}
          alt='Ticket'
          width={24}
          height={24}
        />
      </div>
    </nav>
  );
};

export default FaqNavbar;
