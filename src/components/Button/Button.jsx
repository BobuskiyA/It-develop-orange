import classNames from 'classnames';
import "./Button.scss";
import { Link } from 'react-router-dom';

export const Button = ({ 
  content, 
  color = 'primary',
  to = '/form',
  ...restProps
}) => {
  const buttonClasses = classNames('button', {
    'button--primary': color === 'primary',
    'button--secondary': color === 'secondary',
    'button--black': color === 'black',
  });

  return (
    <Link 
      className={buttonClasses}
      to={to}
      {...restProps}
    >
      {content}
    </Link>
  );
};
