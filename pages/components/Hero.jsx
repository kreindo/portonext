import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';
import '../../styles/Hero.module.css';

const Hero = () => {
  return (
    <>
      <div className="bg-biru-terang-pondok text-white p-20 flex select-none">
        {/* <div className="bg-[url('../../public/assets/images/Ellipse 12.png')]"></div> */}
        <div className="relative">
          <Image
            src={'/assets/images/Ellipse.png'}
            width={170}
            height={170}
            alt="ellipse"
            className="absolute hidden pointer-events-none"
          />
        </div>
        <div className="mt-10">
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
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="w-60 h-96"
        >
          <SwiperSlide className="bg-red-200 flex justify-center items-center rounded-3xl">
            img 1
          </SwiperSlide>
          <SwiperSlide className="bg-red-400 flex justify-center items-center rounded-3xl">
            img 2
          </SwiperSlide>
          <SwiperSlide className="bg-red-600 flex justify-center items-center rounded-3xl">
            img 3
          </SwiperSlide>
          <SwiperSlide className="bg-red-800 flex justify-center items-center rounded-3xl">
            img 4
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
