import React       from 'react';
import _           from 'lodash';
import { Link }    from 'react-router';
import { navMenu } from '../../../redux/menu/menu-actions';

const Navigation = React.createClass({

    displayName: 'Navigation',

    propTypes: {
        navItems : React.PropTypes.array.isRequired
    },

    hoverNavItem(title) {
        this.props.dispatch(navMenu(title));
    },

    renderItems() {
        return _.map(this.props.navItems, (item, index) => {
            return (
                <li key={index} className="nav__item">
                    <Link
                        to          ={item.url}
                        className   ="nav__link"
                        onMouseOver ={_.partial(this.hoverNavItem, item.title)}
                    >
                        {item.title}
                    </Link>
                </li>
            );
        });
    },

    render() {

        return (
            <nav className='nav' aria-role='navigation'>
                <ul className="nav__list">
                    {this.renderItems()}
                </ul>
            </nav>
        );
    },

});

export default Navigation;
