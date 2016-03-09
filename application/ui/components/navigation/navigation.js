import React             from 'react';
import _                 from 'lodash';
import { Link }          from 'react-router';
import { toggleNavItem } from '../../../redux/menu/menu-actions';
import { connect }       from 'react-redux';

const Navigation = connect()(React.createClass({

    displayName: 'Navigation',

    propTypes: {
        navItems : React.PropTypes.array.isRequired
    },

    componentWillUnmount() {
        this.props.dispatch(toggleNavItem(''));
    },

    mouseEnterNavItem(title) {
        this.props.dispatch(toggleNavItem(title));
    },

    mouseLeaveNavItem() {
        this.props.dispatch(toggleNavItem(''));
    },

    onFocusNavItem(title) {
        this.props.dispatch(toggleNavItem(title));
    },

    onBlurNavItem() {
        this.props.dispatch(toggleNavItem(''));
    },

    renderItems() {
        return _.map(this.props.navItems, (item, index) => {
            return (
                <li key={index} className="nav__item">
                    <Link
                        to           = {'/' + item.url}
                        className    = 'nav__link'
                        onMouseEnter = {_.partial(this.mouseEnterNavItem, item.url)}
                        onMouseLeave = {this.mouseLeaveNavItem}
                        onFocus      = {_.partial(this.onFocusNavItem, item.url)}
                        onBlur       = {this.onBlurNavItem}
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

}));

export default Navigation;
