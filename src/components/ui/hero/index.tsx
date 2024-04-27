import Image from 'next/image';
import s from './hero.module.css';
import poster from '@/assets/image_poster.png';
import logo from '@/assets/logo.svg';
type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <section className={s.hero_container}>
        <div className={s.hero_content}>
          <h2>ДЕЛАЕМ ВСЕ ПО УМНОМУ</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing ну и калл elit. Unde blanditiis vel facilis sit nihil deleniti,пиздец блять perferendis aperiam at ullam pariatur omnis libero similique
            officia voluptate ipsa
          </p>
        </div>
        <div className={s.hero_img}>
          <div>
            <Image placeholder="blur" loading="lazy" className={s.hero_poster} src={poster} alt="background" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
