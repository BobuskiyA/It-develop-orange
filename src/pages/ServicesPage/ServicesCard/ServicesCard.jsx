import { Button } from '../../../components/Button';
import designImage from '../../../images/services/design-card.png';
import developImage from '../../../images/services/develop-card.png'
import analyticsImage from '../../../images/services/analytics-card.png'

import './ServicesCard.scss';

const getPhotoLink = (linkImage) => {
  switch(linkImage) {
    case 'design':
      return designImage;

    case 'develop':
      return developImage;

    case 'analytics':
      return analyticsImage;

    default:
      break;
  }
};

export const ServicesCard = ({
  id,
  photo_link,
  title,
  content,
  price
}) => (
  <div className="services-card">
    <li 
      key={id}
      className="services-card__item"
      style={{
        background: `url(${getPhotoLink(photo_link)}) center no-repeat`
      }}
    >
      <div className="services-card__item-container">
        <h1 className="services-card__item--title">
          {title}
        </h1>

        <p className="services-card__item--text">
          {content}
        </p>

      {price && (
        <h4 className="services-card__item--price">
          {`Від ${price}`}
        </h4>
      )}
      </div>

      <div className="services-card--button">
        <Button 
          content={'Детальніше'}
          color={'primary'}  
        />
      </div>
    </li>
  </div>
);
