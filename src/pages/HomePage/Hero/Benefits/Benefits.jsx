import BenefitsContent from './BenefitsContent/BenefitsContent.json';
import resultContent from '../../../../images/home/benefits/result-content.png';
import consultationContent from '../../../../images/home/benefits/consultation-content.png';
import workContent from '../../../../images/home/benefits/work-content.png';

import './Benefits.scss';

const getImage = (item) => {
  switch(item) {
    case 'consultation':
      return consultationContent;
    
    case 'work':
      return workContent;

    default:
      return resultContent;
  }
};

export const Benefits = () => (
  <ul className="benefits">
    {BenefitsContent.map(item => (
      <li 
        key={item.image}
        className="benefits__item"
      >
        <img
          src={getImage(item.image)}
          alt={item.image}
          className="benefits__item--image"
        />
        {item.text}
      </li>
    ))}
  </ul>
);
