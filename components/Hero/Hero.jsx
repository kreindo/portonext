import Image from 'next/image';
import '../../styles/Hero.module.css';
import { useState } from 'react';

const Hero = () => {
  // const [slides, setSlides] = useState([
  //   <Image key={} src="https://picsum.photos/800/300/?random" alt="1" />,
  //   <Image key={index} src="https://picsum.photos/800/301/?random" alt="2" />,
  //   <Image key={index} src="https://picsum.photos/800/302/?random" alt="3" />,
  //   <Image key={index} src="https://picsum.photos/800/303/?random" alt="4" />,
  // ]);
  return (
    <>
      <div className="bg-biru-terang-pondok text-white p-20 flex select-none">
        <div className="absolute z-1">
          <Image
            src={'/assets/images/Ellipse.png'}
            width={170}
            height={170}
            alt="ellipse"
            className="absolute top-5 pointer-events-none"
          />
          <Image
            src={'/assets/images/Intersect.png'}
            width={384}
            height={263}
            alt="ellipse"
            className="absolute pointer-events-none"
          />
          <Image
            src={'/assets/images/Intersect2.png'}
            width={493}
            height={329}
            alt="ellipse"
            className="absolute pointer-events-none"
          />
        </div>
        <div className="mt-10 z-0">
          <h1 className="text-6xl font-bold leading-tight">
            Portofolio
            <br />
            Karya-karya
            <br />
            Terbaik
          </h1>
          <p className="text-2xl font-semibold leading-tight mt-3 select-none">
            Dari Santri Pondok Informatika
          </p>
        </div>

        {/* <Carousel slides={slides} /> */}
        <button className="swiper-button-next"></button>
        <button className="swiper-button-prev"></button>
      </div>
    </>
  );
};

export default Hero;
