import Image from 'next/image';
const SlideImg = () => {
  return (
    <>
      <Image
        src={'https://picsum.photos/seed/fork/400'}
        layout="fill"
        className="rounded-3xl"
        alt="1"
      />
      <Image
        src={'https://picsum.photos/seed/coding/400'}
        layout="fill"
        className="rounded-3xl "
        alt="2"
      />
      <Image
        src={'https://picsum.photos/seed/design/400'}
        layout="fill"
        className="rounded-3xl"
        alt="3"
      />
      <Image
        src={'https://picsum.photos/seed/water/400'}
        layout="fill"
        className="rounded-3xl"
        alt="4"
      />
    </>
  );
};

export default SlideImg;
