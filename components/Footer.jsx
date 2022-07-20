import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/images/logo1.png';

const Footer = () => {
  const handleClick = () => {
    console.log('clicked!');
  };
  return (
    <div className="flex flex-col px-14 py-14 border-t border-t-gray-400">
      <div className="flex justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            className="hover:cursor-pointer"
            onClick={handleClick}
            z
          />
        </Link>
        <div className="flex">
          <div className="mx-1">
            <h1 className="text-biru-pondok text-3xl font-semibold">
              Portofolio
            </h1>
            <ul>
              <li className="text-biru-pondok text-2xl font-medium">
                <Link href={'/design'}>
                  <a>Design</a>
                </Link>
              </li>
              <li className="text-biru-pondok text-2xl font-medium">
                <Link href={'/website'}>Website</Link>
              </li>
              <li className="text-biru-pondok text-2xl font-medium">
                <Link href={'/'}>Videography</Link>
              </li>
            </ul>
          </div>
          <div className="mx-10">
            <h1 className="text-biru-pondok text-3xl font-semibold">Contact</h1>
            <ul>
              <li className="text-biru-pondok text-2xl font-medium">
                Jl. Abdullah Daeng Sirua
              </li>
              <li className="text-biru-pondok text-2xl font-medium">
                0411 xxx xxx
              </li>
              <li className="text-biru-pondok text-2xl font-medium">
                pondokinformatikaid@gmail.com
              </li>
            </ul>
          </div>
          <div className="mx-5">
            <h1 className="text-biru-pondok text-3xl font-semibold">
              Social Media
            </h1>
          </div>
        </div>
      </div>
      <div className="my-10 flex justify-center flex-col items-center">
        <p className="text-gray-100 font-normal text-base">
          © Copyright 2022 Pondok Informatika
        </p>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
