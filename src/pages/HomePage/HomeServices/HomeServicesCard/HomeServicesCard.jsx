import { Button } from '../../../../components/Button';

import './HomeServicesCard.scss';

export const HomeServicesCard = ({
  id,
  title,
  content,
}) => (
  <li 
    key={id}
    className="home-services-card"
  >
    <div className="home-services-card-container">
      <h1 className="home-services-card--title">
        {title}
      </h1>

      <p className="home-services-card--text">
        {content}
      </p>
    </div>

    <div className="home-services-card__button">
      <Button
        content={'Детальніше'}
        color={'primary'}
      />
    </div>
  </li>
);
