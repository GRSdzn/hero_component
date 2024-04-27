import s from './hero.module.css';
import ImageSlider from '@/features/hero_slider';

const Hero = () => {
  return (
    <>
      <section className={s.hero_container}>
        <div className={s.hero_content}>
          <h2>ПРОФИЛЬ ХУДОЖНИЦЫ</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde blanditiis vel facilis sit nihil deleniti, perferendis aperiam at ullam pariatur omnis libero similique officia voluptate
            ipsa.
          </p>
        </div>
        <ImageSlider />
      </section>
    </>
  );
};

export default Hero;
