import Link from 'next/link';
import s from './mobile_bar.module.css';
import logo from '@/assets/logo.svg';
import Image from 'next/image';
import { page_links } from '@/mock/links';
type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const MobileNavBar = ({ isOpen, toggleMenu }: Props) => {
  return (
    <>
      <div className={`${s.mobile_menu} ${isOpen ? s.active : ''}`} onClick={toggleMenu}>
        <div className={s.mobile_list_container}>
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
          </ul>

          <button className={s.contact_btn} onClick={() => {}}>
            Связаться
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNavBar;
