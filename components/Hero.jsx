import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
// import 'swiper/css/effect-slide';
import Image from 'next/image';
import '../styles/Hero.module.css';

const Hero = () => {
  return (
    <>
      <div className="bg-biru-terang-pondok text-white p-20 flex select-none">
        <div className="absolute z-1">
          <Image
            src={'/assets/images/Ellipse.png'}
            width={170}
            height={170}
            alt="ellipse"
            className="absolute hidden pointer-events-none"
          />
          <Image
            src={'/assets/images/Intersect.png'}
            width={384}
            height={263}
            alt="ellipse"
            className="absolute hidden pointer-events-none"
          />
          <Image
            src={'/assets/images/Intersect2.png'}
            width={493}
            height={329}
            alt="ellipse"
            className="absolute hidden pointer-events-none"
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
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay, Navigation]}
          cardsEffect={{
            rotate: false,
          }}
          autoplay={{
            pauseOnMouseEnter: true,
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="w-60 h-96"
        >
          <SwiperSlide className="bg-biru-pondok flex justify-center items-center rounded-3xl">
            <Image
              src={'https://picsum.photos/seed/fork/400'}
              layout="fill"
              className="rounded-3xl"
              alt="1"
            />
          </SwiperSlide>
          <SwiperSlide className="bg-biru-pondok flex justify-center items-center rounded-3xl">
            <Image
              src={'https://picsum.photos/seed/coding/400'}
              layout="fill"
              className="rounded-3xl"
              alt="2"
            />
          </SwiperSlide>
          <SwiperSlide className="bg-biru-pondok flex justify-center items-center rounded-3xl">
            <Image
              src={'https://picsum.photos/seed/design/400'}
              layout="fill"
              className="rounded-3xl"
              alt="3"
            />
          </SwiperSlide>
          <SwiperSlide className="bg-biru-pondok flex justify-center items-center rounded-3xl">
            <Image
              src={'https://picsum.photos/seed/water/400'}
              layout="fill"
              className="rounded-3xl"
              alt="4"
            />
          </SwiperSlide>
          <button className="swiper-button-next"></button>
          <button className="swiper-button-prev"></button>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
