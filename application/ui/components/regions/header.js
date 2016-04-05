import React       from 'react';
import classNames  from 'classnames';
import Icon        from '../../components/icon/icon';
import { connect } from 'react-redux';

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
        marginTop : React.PropTypes.bool,
        fixW      : React.PropTypes.bool,
    },

    render() {
        let classes = [
            'page__header',
            this.props.fixW ? 'page__header--fixW' : null,
            this.props.marginTop ? 'page__header--margin-top' : null
        ];

        let iconSize = this.props.browser.greaterThan.small ? 'x-large' : 'large';

        return (
            <header>
                <div className={classNames(classes)}>
                    <Icon className='page__header__icon' icon={this.props.icon} size={iconSize} colorTheme='white' />
                    <h1 className='page__header__title'>{this.props.title}</h1>
                </div>
            </header>
        );
    },

}));

export default Header;
