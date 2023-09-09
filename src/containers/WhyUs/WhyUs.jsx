import './WhyUs.scss';
import WhyUsImage from '../../images/why-us.png';

export const WhyUs = () => (
  <div className="container" id="why-us">
    <div className="why-us">
      <h1 className="why-us--title">
        Чому варто обрати
        <span className="blue-text">
          &nbsp;
          нас?
        </span>
      </h1>

      <div className="why-us__content">
        <div className="why-us__text">
          <p>
            Наша команда складається з досвідченних, висококваліфікованих спеціалістів, готових вирішувати найскладніші завдання у сфері IT
          </p>

          <h3>
            Високий стандарт якості
          </h3>

          <p>
            Ми надаємо комплексний спектр послуг також пропонуємо лояльні ціни за найвищу якість
          </p>

          <p>
            Наша ціль - реалізувати ваші бажання та презентувати сміливі рішення. 
          </p>
        </div>

        <div className="why-us__image">
          <img
            src={WhyUsImage}
            alt="Analizing"
          />
        </div>
      </div>
    </div>
  </div>
);
