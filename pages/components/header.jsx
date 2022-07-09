import Image from 'next/image';
import { useState, useEffect } from 'react';
import Logo from '../../public/assets/images/logo1.png';
import Link from 'next/link';

const Header = () => {
  // const [menu, setMenu] = useState('menu');
  const menus = ['design', 'website', 'profile'];
  const handleClick = () => {
    console.log('clicked!');
  };
  // useEffect(() => setMenu(menu), []);

  return (
    <div className="px-14 py-14 shadow-xl">
      <div className="flex flex-1 justify-between mx-16">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            className="hover:cursor-pointer"
            onClick={handleClick}
            z
          />
        </Link>
        <div className="text-4xl font-normal">
          <ul className="flex">
            {menus.map((menu) => {
              return (
                <li key={menu} className="mx-10">
                  <Link href={`/${menu}`}>
                    <a>{menu}</a>
                  </Link>
                </li>
              );
            })}
            {/* <li className="mx-10">
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
            </li> */}
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
