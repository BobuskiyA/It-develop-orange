import { Benefits } from './Benefits';
import heroImage from '../../../images/home/hero-secondary.png';
import './Hero.scss';

export const Hero = () => (
  <div className="hero">
    <div className="hero__content container">
      <div className="hero__arrows" />

      <div className="hero__text">
        <h1 className="hero--title">
          IT Develop
        </h1>

        <h2 className="primary-text">
          Ваш наставник в світі технологій 
        </h2>

          <div className="hero__main-content">
            <p className="hero__main-content--text">
              Перетворимо ваші ідеї на цифрову реальність з надійною командою розробників
            </p>
            
            <p className="hero__main-content--text">
              Відтворюємо ваші побачання завдяки безкінечних можливостей
            </p>
          </div>

          <div className="hero__benefits">
            <Benefits />
          </div>
        </div>

        <div className="hero__images">
          <img
            src={heroImage}
            alt="hero-list"
            className="hero__images--item"
          />
          <img
            src={heroImage}
            alt="hero-list"
            className="hero__images--item"
          />
          <img
            src={heroImage}
            alt="hero-list"
            className="hero__images--item"
          />
        </div>
      </div>
  </div>
);
