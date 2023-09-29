import { AboutUsLinks } from '../../../components/AboutUsLinks';
import { NavLink } from 'react-router-dom';

import './HeaderNavigation.scss';
import classNames from 'classnames';
import { Button } from '../../../components/Button';

const getNavClass = ({ isActive }) => classNames(
  'header-navigatiion--item', {
    'header-navigatiion--item-active': isActive,
  },
);

export const HeaderNavigation = () => (
  <nav className="header-navigatiion">
    <ul className="header-navigatiion__list">
      {Object.entries(AboutUsLinks).map(([label, containerName]) => (
        <li
          key={containerName}
          className="header-navigatiion--item"
        >
          <NavLink
            to={containerName}
            className={getNavClass}  
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>

    {/* <Link className='header-navigatiion--button' to="/form">Замовити</Link> */}
    <div className='header-navigatiion--button'>
      <Button
        content={'Замовити'}
        to={'/form'}
      />
    </div>
    
  </nav>
  );
