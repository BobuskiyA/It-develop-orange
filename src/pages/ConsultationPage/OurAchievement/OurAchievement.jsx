import OurAchievementContent from './OurAchievementContent/OurAchievementContent.json';

import './OurAchievement.scss';

export const OurAchievement = () => (
  <div className="our-achievement our-achievement-container">
    <span className="primary-text">
      <h1 className="our-achievement--title">
        Наші досягнення
      </h1>
    </span>

    <ul className="our-achievement__list">
      {Object.entries(OurAchievementContent).map(([title, text]) => (
        <li
          key={title}
          className="our-achievement__item"
        >
          <h1 className="our-achievement__item--title">
            {title}
          </h1>
          <p className="our-achievement__item--text">
            {text}
          </p>
        </li>
      ))}
    </ul>
  </div>
);
