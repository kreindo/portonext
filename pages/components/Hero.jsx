import { Swiper, SwiperSlide } from 'swiper/react';import { EffectSlide, Autoplay } from 'swiper';
import 'swiper/css';
// import 'swiper/css/effect-slide';
import Image from 'next/image';
import '../../styles/Hero.module.css';

const Hero = () => {
  return (
    <>
      <div className="bg-biru-terang-pondok text-white p-20 flex select-none">
        <div className="relative">
          <Image
            src={'/assets/images/Ellipse.png'}
            layout="fill"
            alt="ellipse"
            className="absolute hidden pointer-events-none"
          />
          <Image
            src={'/assets/images/Intersect.png'}
            layout="fill"
            alt="ellipse"
            className="absolute hidden pointer-events-none"
          />
          <Image
            src={'/assets/images/Intersect2.png'}
            layout="fill"
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
          effect={'slide'}
          grabCursor={true}
          modules={[Autoplay]}
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="w-60 h-96"
        >
          <SwiperSlide className="bg-biru-pondok flex justify-center items-center rounded-3xl">
            <Image
              src={'https://picsum.photos/seed/asd/400'}
              layout="fill"
              className="rounded-3xl"
              alt="1"
            />
          </SwiperSlide>
          <SwiperSlide className="bg-biru-pondok flex justify-center items-center rounded-3xl">
            <Image
              src={'https://picsum.photos/seed/asf/400'}
              layout="fill"
              className="rounded-3xl"
              alt="2"
            />
          </SwiperSlide>
          <SwiperSlide className="bg-biru-pondok flex justify-center items-center rounded-3xl">
            <Image
              src={'https://picsum.photos/seed/asc/400'}
              layout="fill"
              className="rounded-3xl"
              alt="3"
            />
          </SwiperSlide>
          <SwiperSlide className="bg-biru-pondok flex justify-center items-center rounded-3xl">
            <Image
              src={'https://picsum.photos/seed/ase/400'}
              layout="fill"
              className="rounded-3xl"
              alt="4"
            />
          </SwiperSlide>
          <div>
            <button>right</button>
            <button>left</button>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
