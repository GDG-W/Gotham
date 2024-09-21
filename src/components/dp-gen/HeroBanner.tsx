import { Button } from '../shared';
import BlueXImg from '../../../public/images/png/blue-x.png';
import RedRectImg from '../../../public/images/png/red-rect.png';
import YellowHashImg from '../../../public/images/png/yellow-hash.png';
import BlueAngleImg from '../../../public/images/png/blue-angle.png';
import RedCircleImg from '../../../public/images/png/red-circles.png';
import YellowRectImg from '../../../public/images/png/yellow-rectangles.png';
import GreenRectImg from '../../../public/images/png/green-rect.png';
import Image from 'next/image';

const colorTiles = [
  {
    backgroundColor: '#F8D8D8',
    borderColor: '#00000012',
    width: '40%',
  },
  {
    backgroundColor: '#CCF6C5',
    borderColor: '#00000012',
    width: '60%',
  },
  {
    backgroundColor: '#FDE293',
    borderColor: '#00000012',
    width: '10%',
  },
  {
    backgroundColor: '#CCF6C5',
    borderColor: '#00000012',
    width: '10%',
  },
  {
    backgroundColor: '#FFE7A5',
    borderColor: '#00000012',
    width: '60%',
  },
  {
    backgroundColor: '#C3ECF6',
    borderColor: '#00000012',
    width: '10%',
  },
  {
    backgroundColor: '#F8D8D8',
    borderColor: '#00000012',
    width: '10%',
  },
  {
    backgroundColor: '#C3ECF6',
    borderColor: '#00000012',
    width: '15%',
  },
  {
    backgroundColor: '#F28B82',
    borderColor: '#00000012',
    width: '70%',
  },
  {
    backgroundColor: '#CCF6C5',
    borderColor: '#00000012',
    width: '15%',
  },
];

export const Banner = () => {
  const scrollToSection = () => {
    const element = document.getElementById('input_section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className='color-tiles-banner'>
        <div className='row-1 row'>
          {colorTiles.slice(0, 2).map((style, id) => (
            <div key={id} className='tile' style={style}></div>
          ))}
        </div>
        <div className='row-2 row'>
          {colorTiles.slice(2, 7).map((style, id) => (
            <div key={id} className='tile' style={style}></div>
          ))}
        </div>
        <div className='row-3 row'>
          {colorTiles.slice(7, 10).map((style, id) => (
            <div key={id} className='tile' style={style}></div>
          ))}
        </div>
      </div>

      <div className='shapes-wrapper'>
        <div className='shape-1'>
          <Image src={BlueXImg} alt='Blue x' fill />
        </div>
        <div className='shape-2'>
          <Image src={RedRectImg} alt='Red rectangle' fill />
        </div>
        <div className='shape-3'>
          <Image src={YellowHashImg} alt='Yellow hash' fill />
        </div>
        <div className='shape-4'>
          <Image src={BlueAngleImg} alt='Blue angle' fill />
        </div>
        <div className='shape-5'>
          <Image src={RedCircleImg} alt='Red circle' fill />
        </div>
        <div className='shape-6'>
          <Image src={YellowRectImg} alt='Yellow rectangle' fill />
        </div>
        <div className='shape-7'>
          <Image src={GreenRectImg} alt='Green rectangle' fill />
        </div>
      </div>

      <div className='container'>
        <div className='text-section'>
          <p className='sub'>Spread the word, you’ll be there!</p>
          <h5 className='title'>Customise your Devfest DP</h5>
          <Button fullWidth label="LET'S COOK" size='lg' animate onClick={scrollToSection} />
        </div>
      </div>
    </header>
  );
};
