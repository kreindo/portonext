import Image from 'next/image';
import Logo from '../../public/assets/images/logo1.png';

export const header = () => {
  const menus = ['Design', 'Website', 'Profil Santri'];
  const handleClick = () => {
    console.log('hello');
  };
  return (
    <div className="flex flex-1 my-14">
      <Image
        src={Logo}
        alt="Logo"
        width={307}
        height={64}
        className="hover:cursor-pointer"
        onClick={handleClick}
        z
      />

      <div>
        {menus.map((menu) => {
          return (
            <li key={menu}>
              <a href="">{menu}</a>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default header;
