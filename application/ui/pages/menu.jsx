import React    from 'react';
import { Link } from 'react-router';

const MenuPage = React.createClass({

  displayName: 'MenuPage',

  render() {

    return (
      <div key='menu-page' className='menu-page__content'>
        <nav className='nav' aria-role='navigation'>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to='welcome' className="nav__link">Welcome</Link>
            </li>
            <li className="nav__item">
              <Link to='work' className="nav__link">Selected Work</Link>
            </li>
            <li className="nav__item">
              <Link to='about' className="nav__link">About Me</Link>
            </li>
            <li className="nav__item">
              <Link to='elsewhere' className="nav__link">Elsewhere</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  },

});

export default MenuPage;
