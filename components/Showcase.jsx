import Image from 'next/image';{
  ('');
}

const Showcase = (props) => {
  const { fetchedDatas } = props;
  const images = []; // i want the url to be pushed here, and then displayed on the grid showcase
  console.log(fetchedDatas);

  // function imageHandler() {
  //   // images.push(someImage from URL)
  //   for (let img of images) {
  //     return <Image id={img.id} src={img.imgURL} alt={img.alt} />;
  //   }
  // }

  // function handleClick() {
  //   imageHandler();
  // }

  return (
    <div className="flex justify-start">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-biru-pondok my-16">Design</h1>
        <div className="container">
          <div className="flex flex-1 justify-center">
            <button className="rounded-full mx-1 my-1">Dummy Button</button>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-10">
            <Image
              // src={images[0], ...images}
              src={'https://picsum.photos/seed/asd/400'}
              width={400}
              height={400}
              alt="1"
            />
            <Image
              src={'https://picsum.photos/seed/asf/400'}
              width={400}
              height={400}
              alt="2"
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

export async function getStaticProps() {
  //from api fetch image
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const fetchedDatas = await res.json();
  return {
    props: {
      fetchedDatas,
    },
  };
}
