
import './AboutOurWork.scss';

export const AboutOurWork = () => (
  <div className="about-our-work container">
    <div className="about-our-work__content">
      <h1 className="about-our-work--title">
        Наші умови
      </h1>

      <p className="about-our-work--text">
        Наша команда складається з досвідченних, 
        висококваліфікованих спеціалістів, готових 
        вирішувати найскладніші завдання у сфері IT
      </p>
    </div>
    
    <div className="about-our-work__content">
      <h1 className="about-our-work--title">
        Висока якість
      </h1>

      <p className="about-our-work--text">
        Ми надаємо комплексний спектр послуг також пропонуємо лояльні ціни за найвищу якість
      </p>

      <p className="about-our-work--text">
        Наша ціль - 
        <span className="about-our-work--our-goal">
          реалізувати ваші бажання та презентувати сміливі рішення.
        </span> 
      </p>
    </div>
  </div>
);
