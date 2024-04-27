'use client';
import s from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/../public/assets/logo.svg';
import { useState } from 'react';
import MobileNavBar from './mobile/mobile_bar';
import { page_links } from '@/mock/links';

type Props = {};

const Navbar = (props: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      {openMenu && <div className={s.backdrop} onClick={toggleMenu} />}
      <MobileNavBar isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className={s.nav_wrapper}>
        <div className={s.nav_content}>
          <Link href={'/'}>
            <Image className={s.logo} src={logo} alt="logo" width={40} height={40} />
          </Link>
          <ul>
            {page_links?.map((link) => (
              <li key={link.id}>
                <Link href={link.url} className={s.list_item}>
                  {link.title}
                </Link>
              </li>
            ))}

            <button className={s.contact_btn} onClick={() => alert('Hire me')}>
              Связаться
            </button>
          </ul>
          <button className={s.burger_menu} onClick={toggleMenu}>
            <div className={s.hamburger_lines}>
              <div className={s.line} />
              <div className={s.line} />
              <div className={s.line} />
            </div>
            {/* {openMenu ? 'close' : 'menu'} */}
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
