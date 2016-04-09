import React      from 'react';
import _          from 'lodash';
import classNames from 'classnames';
import Icon       from '../../components/icon/icon';

const Footer = React.createClass({

    displayName: 'Footer',

    propTypes : {
        childArray : React.PropTypes.array
    },

    renderChildren() {
        if(this.props.childArray) {
            return _.map(this.props.childArray, (child, index) => {
                return (
                    <div key={index} className='footer__column'>{child}</div>
                );
            });
        }

        return <div className='footer__column'>{this.props.children}</div>;
    },

    render() {
        return (
            <footer>
                <div className='footer'>
                    {this.renderChildren()}
                </div>
            </footer>
        );
    },

});

export default Footer;
