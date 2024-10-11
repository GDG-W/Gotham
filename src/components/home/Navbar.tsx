'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: '/speakers', label: 'Speakers' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/team', label: 'Team' },
  { href: '/faqs', label: 'FAQs' },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const isActive = (path: string): boolean => pathname === path;
  const notHomePage: boolean = navLinks.some((link) => link.href === pathname);

  const getNavbarClass = (): string => {
    const baseClass = 'navbar';
    const pageSpecificClass = navLinks.find((link) => link.href === pathname)?.label.toLowerCase();
    return pageSpecificClass ? `${baseClass} navbar-links ${pageSpecificClass}-link` : baseClass;
  };

  const logoSrc: string = notHomePage
    ? '/images/svg/devfest-logo.svg'
    : '/images/svg/devfest--logo.svg';
  const menuIcon: string = notHomePage
    ? '/images/icons/faq-menu-icon.svg'
    : '/images/icons/menu.svg';
  const closeIcon: string = notHomePage
    ? '/images/icons/close-icon.png'
    : '/images/icons/close-icon.svg';

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`${getNavbarClass()} ${isMenuOpen ? 'menu-open' : ''}`}>
      <Link href='/' className='navbar__logo'>
        <Image src={logoSrc} alt='DevFest Logo' width={137} height={49} />
      </Link>

      <div className='navbar__menu-icon' onClick={toggleMenu}>
        <Image
          src={isMenuOpen ? closeIcon : menuIcon}
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
          src='/images/icons/ticket.svg'
          alt='Ticket'
          width={24}
          height={24}
        />
      </div>
    </nav>
  );
};

export default Navbar;
