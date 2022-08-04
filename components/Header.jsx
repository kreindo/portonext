import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/images/logo1.png';

const Header = () => {
  return (
    <div className="py-5 md:px-14 md:py-14 shadow-lg">
      <div className="flex flex-1 justify-between ">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            className="hover:cursor-pointer w-16 md:w-32 lg:w-48"
          />
        </Link>
        <div className="hidden md:block xl:text-[36px] font-normal">
          <ul className="flex">
            <li className="mx-10">
              <Link href="/design">
                <a>Design</a>
              </Link>
            </li>
            <li className="mx-10">
              <Link href="/website">
                <a>Website</a>
              </Link>
            </li>
            <li className="mx-10">
              <Link href="/profile">
                <a>Profil Santri</a>
              </Link>
            </li>
          </ul>
          {/* {menus.map((menu) => {
            return (
              <li key={menu}>
                <a href="">{menu}</a>
              </li>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Header;
