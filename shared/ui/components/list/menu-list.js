import React              from 'react';
import ReactDOM           from 'react-dom';
import { findIndex }      from 'lodash';
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

    componentDidMount() {
        var component = ReactDOM.findDOMNode(this);

        component.style.opacity = 0;
        window.requestAnimationFrame(() => {
            component.style.transition = 'opacity 2500ms';
            component.style.opacity = 1;
        });
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
        let icons = [];

        for (let i = 0; i < this.props.menuItems; i++) {
            if (this.props.menuItems[i].icon) {
                icons.push(
                    <Icon
                        key       = {i}
                        className = 'menu__icon'
                        icon      = {this.props.menuItems[i].icon}
                        size      = 'x-large'
                    />
                );
            }

            return null;
        }

        return icons;
    },

    renderItems() {
        let items = [];

        for (let i = 0; i < this.props.menuItems; i++) {
            let link = () => {
                if (this.props.menuItems[i].external) {
                    items.push(
                        <a
                            key         = {i}
                            href        = {this.props.menuItems[i].url}
                            target      = {this.props.menuItems[i].url !== 'mailto:ryancanfield@me.com' ? '_blank' : '_self'}
                            className   = 'menu__link'
                            onMouseOver = {this.activeMenuItem.bind(null, this.props.menuItems[i].title)}
                            onMouseOut  = {this.inactiveMenuItem}
                            onClick     = {this.inactiveMenuItem}
                            onTouchEnd  = {this.inactiveMenuItem}
                            onFocus     = {this.activeMenuItem.bind(null, this.props.menuItems[i].title)}
                            onBlur      = {this.inactiveMenuItem}
                        >
                            {this.props.menuItems[i].title}
                        </a>
                    );
                }

                items.push(
                    <Link
                        key          = {i}
                        to           = {'/' + this.props.menuItems[i].url}
                        className    = 'menu__link'
                        onFocus      = {this.activeMenuItem.bind(null, this.props.menuItems[i].url)}
                        onBlur       = {this.inactiveMenuItem}
                        onMouseOver  = {this.activeMenuItem.bind(null, this.props.menuItems[i].url)}
                        onMouseOut   = {this.inactiveMenuItem}
                        onMouseDown  = {this.inactiveMenuItem}
                        onTouchStart = {this.inactiveMenuItem}
                        >
                        {this.props.menuItems[i].title}
                    </Link>
                );
            };

            return (
                <li key={index} className='menu__item'>
                    {link()}
                </li>
            );
        }

        return items;
    },

    renderIconList() {
        if(findIndex(this.props.menuItems, 'icon') === 0) {
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
