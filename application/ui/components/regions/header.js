import React              from 'react';
import classNames         from 'classnames';
import Icon               from '../../components/icon/icon';
import { connect }        from 'react-redux';
import BackButton         from '../../components/buttons/back-button';
import { browserHistory } from 'react-router';

let getPropsFromApplicationState = (state) => {
    return {
        browser : state.browser
    };
};

const Header = connect(getPropsFromApplicationState)(React.createClass({

    displayName: 'Header',

    propTypes : {
        title     : React.PropTypes.string,
        icon      : React.PropTypes.string,
        marginTop : React.PropTypes.bool
    },

    onBackClick() {
        browserHistory.push('/');
    },

    renderIcon() {
        if (this.props.browser.greaterThan.small) {
            let iconSize = this.props.browser.greaterThan.small ? 'x-large' : 'large';

            return (
                <Icon className='page__header__icon' icon={this.props.icon} size={iconSize} colorTheme='white' />
            );
        }
    },

    render() {
        return (
            <header className='header'>
                <BackButton onClick={this.onBackClick} />
                <div className='page__header'>
                    {this.renderIcon()}
                    <h1 className='page__header__title'>{this.props.title}</h1>
                </div>
            </header>
        );
    },

}));

export default Header;
