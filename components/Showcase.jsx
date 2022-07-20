import Image from 'next/image';
import { useState } from 'react';

const Showcase = () => {
  const [title, setTitle] = useState();

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-biru-pondok my-16">Design</h1>
        <div className="container">
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-10">
            <Image
              src={'https://picsum.photos/seed/asd/400'}
              width={400}
              height={400}
              alt=""
            />
            <Image
              src={'https://picsum.photos/seed/asf/400'}
              width={400}
              height={400}
              alt=""
            />
            <Image
              src={'https://picsum.photos/seed/asg/400'}
              width={400}
              height={400}
              alt=""
            />
            <Image
              src={'https://picsum.photos/seed/aso/400'}
              width={400}
              height={400}
              alt=""
            />
            <Image
              src={'https://picsum.photos/seed/asi/400'}
              width={400}
              height={400}
              alt=""
            />
            <Image
              src={'https://picsum.photos/seed/aug/400'}
              width={400}
              height={400}
              alt=""
            />
            <Image
              src={'https://picsum.photos/seed/a5d/400'}
              width={400}
              height={400}
              alt=""
            />
            <Image
              src={'https://picsum.photos/seed/a1f/400'}
              width={400}
              height={400}
              alt=""
            />
            <Image
              src={'https://picsum.photos/seed/2sg/400'}
              width={400}
              height={400}
              alt=""
            />
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Showcase;
