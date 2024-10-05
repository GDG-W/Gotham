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
  const isFaqPage = pathname === '/faqs';

  const navbarClass = isFaqPage ? 'navbar navbar-faq faq-links' : 'navbar';

  const logoSrc = isFaqPage ? '/images/svg/devfest-logo.svg' : '/images/svg/devfest--logo.svg';

  const closeIcon = isFaqPage ? '/images/icons/close-icon.png' : '/images/icons/close-icon.svg';
  const Menu = isFaqPage ? '/images/icons/faq-menu-icon.svg' : '/images/icons/menu.svg';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`${navbarClass} navbar ${isMenuOpen ? 'menu-open' : ''}`}>
      <Link href='/' className='navbar__logo'>
        <Image src={logoSrc} alt='DevFest Logo' width={137} height={49} />
      </Link>

      <div className='navbar__menu-icon' onClick={toggleMenu}>
        <Image
          src={isMenuOpen ? `${closeIcon}` : `${Menu}`}
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
