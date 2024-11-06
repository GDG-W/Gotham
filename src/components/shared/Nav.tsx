import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className='nav-container'>
      <div className='container'>
        <div className='notify-block'>
          <div>
            <Image
              src='/images/svg/devfest-logo.svg'
              alt='DevFest Lagos Logo'
              height={50}
              width={167}
            />
          </div>
          <a href={'/dp-generator'}>DP Generator</a>
        </div>
      </div>
    </nav>
  );
};
