import { Button } from '../../components/Button';
import './Counter.scss';
import CounterContent from './CounterContent/CounterContent.json';

export const Counter = () => (
  <div className="counter container">
    <div className="counter__head">
      <h4>
        <span className="primary-text">
          Гарантуємо успіх
        </span>
        за допомогою нашого сайту
      </h4>

      <div className="counter__head-container">
        Cтарт після оплати
      </div>
    </div>

    <div className="counter__achievement">
      {CounterContent.map(item => (
        <div
          className="counter__achievement--item"
          key={item.title}  
        >
          <h4 className="counter__achievement--title">
            {item.title}
          </h4>

          <span className="counter__achievement--number">
            {item.number}
          </span>
        </div>
      ))}
    </div>

    <div className="counter__help">
      <p>
        Як ми можемо вам допомогти?
      </p>

      <div className="counter__help--button">
        <Button 
          content={'На консультацію'}
          color={'black'}
        />
      </div>
    </div>
  </div>
);