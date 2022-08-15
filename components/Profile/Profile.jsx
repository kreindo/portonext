import React from 'react';import Image from 'next/image';
import Link from 'next/link';
export default function Profile(props) {
  const { link, disabled } = props;
  return (
    <div className="my-16">
      <h1 className="font-bold text-6xl text-center text-biru-pondok">
        Profil Santri
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[40px] my-16">
        <Image
          // src={images[0], ...images}
          className="rounded-full"
          src={'https://picsum.photos/seed/asd3/800'}
          width={400}
          height={400}
          alt="1"
        />
        <Image
          className="rounded-full"
          src={'https://picsum.photos/seed/asf3/800'}
          width={400}
          height={400}
          alt="2"
        />
        <Image
          className="rounded-full"
          src={'https://picsum.photos/seed/asg3/800'}
          width={400}
          height={400}
          alt=""
        />
        <Image
          className="rounded-full"
          src={'https://picsum.photos/seed/aso3/800'}
          width={400}
          height={400}
          alt=""
        />
        <Image
          className="rounded-full"
          src={'https://picsum.photos/seed/asi3/800'}
          width={400}
          height={400}
          alt=""
        />
        <Image
          className="rounded-full"
          src={'https://picsum.photos/seed/aug3/800'}
          width={400}
          height={400}
          alt=""
        />
        <Image
          className="rounded-full"
          src={'https://picsum.photos/seed/a5d3/800'}
          width={400}
          height={400}
          alt=""
        />
        <Image
          className="rounded-full"
          src={'https://picsum.photos/seed/a1f3/800'}
          width={400}
          height={400}
          alt=""
        />
      </div>
      <div className="mt-[90px] flex flex-1 justify-center">
        <Link href={`/${link}`}>
          {!disabled ? (
            <button className=" text-biru-terang-pondok py-2 px-[345px] hover:bg-gray-200 border-biru-terang-pondok border-solid border-2 rounded-none mx-5 my-5">
              Lihat Semua
            </button>
          ) : (
            ''
          )}
        </Link>
      </div>
    </div>
  );
}
