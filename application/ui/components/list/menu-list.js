import React              from 'react';
import _                  from 'lodash';
import { Link }           from 'react-router';
import { toggleMenuItem } from '../../../redux/menu/menu-actions';
import { connect }        from 'react-redux';
import Icon               from '../icon/icon';
import classNames         from 'classnames';

let getPropsFromApplicationState = (state) => {
    return {
        currentMenuItem : state.menu.currentMenuItem
    };
};

const MenuList = connect(getPropsFromApplicationState)(React.createClass({

    displayName: 'MenuList',

    propTypes: {
        menuItems : React.PropTypes.array.isRequired
    },

    componentWillUnmount() {
        this.props.dispatch(toggleMenuItem(''));
    },

    activeMenuItem(title) {
        this.props.dispatch(toggleMenuItem(title));
    },

    inactiveMenuItem() {
        this.props.dispatch(toggleMenuItem(''));
    },

    renderIcons() {
        return _.map(this.props.menuItems, (icon, index) => {

            if (icon.icon) {
                return (
                    <Icon
                        key       = {index}
                        className = 'menu__icon'
                        icon      = {icon.icon}
                        size      = 'x-large'
                    />
                );
            }

            return null;
        });
    },

    renderItems() {
        return _.map(this.props.menuItems, (item, index) => {

            let link = () => {
                if (item.external) {
                    return (
                        <a
                            key         = {index}
                            href        = {item.url}
                            target      = {item.url !== 'mailto:ryancanfield@me.com' ? '_blank' : '_self'}
                            className   = 'menu__link'
                            onMouseOver = {_.partial(this.activeMenuItem, item.title)}
                            onMouseOut  = {this.inactiveMenuItem}
                            onClick     = {this.inactiveMenuItem}
                            onTouchEnd  = {this.inactiveMenuItem}
                            onFocus     = {_.partial(this.activeMenuItem, item.title)}
                            onBlur      = {this.inactiveMenuItem}
                        >
                            {item.title}
                        </a>
                    );
                }

                return (
                    <Link
                        key          = {index}
                        to           = {'/' + item.url}
                        className    = 'menu__link'
                        onFocus      = {_.partial(this.activeMenuItem, item.url)}
                        onBlur       = {this.inactiveMenuItem}
                        onMouseOver  = {_.partial(this.activeMenuItem, item.url)}
                        onMouseOut   = {this.inactiveMenuItem}
                        onMouseDown  = {this.inactiveMenuItem}
                        onTouchStart = {this.inactiveMenuItem}
                        >
                        {item.title}
                    </Link>
                );
            };

            return (
                <li key={index} className="menu__item">
                    {link()}
                </li>
            );
        });
    },

    renderIconList() {
        if(_.findIndex(this.props.menuItems, 'icon') === 0) {
            let iconClasses = classNames({
                'menu__icon-list'         : true,
                'menu__icon-list--hidden' : this.props.currentMenuItem !== ''
            });

            return (
                <ul className={iconClasses}>
                    {this.renderIcons()}
                </ul>
            );
        }
    },

    render() {
        return (
            <nav className='menu' aria-role='navigation'>
                {this.renderIconList()}
                <ul className='menu__list'>
                    {this.renderItems()}
                </ul>
            </nav>
        );
    },

}));

export default MenuList;
