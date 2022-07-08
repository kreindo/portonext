import Image from 'next/image';
import { useState, useEffect } from 'react';
import Logo from '../../public/assets/images/logo1.png';
import Link from 'next/link';

const Header = () => {
  // const [menu, setMenu] = useState('menu');
  // const menus = ['Design', 'Website', 'Profil Santri'];
  const handleClick = () => {
    console.log('hello');
  };
  // useEffect(() => setMenu(menu), []);

  return (
    <div className="flex flex-1 my-14 mx-16">
      <Image
        src={Logo}
        alt="Logo"
        className="hover:cursor-pointer"
        onClick={handleClick}
        z
      />
      <div>
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
  );
};

export default Header;
