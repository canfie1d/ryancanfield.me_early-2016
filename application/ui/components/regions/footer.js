import React      from 'react';
import classNames from 'classnames';
import Icon       from '../../components/icon/icon';

const Footer = React.createClass({

    displayName: 'Footer',

    propTypes : {
        pWidth : React.PropTypes.bool
    },

    render() {
        let classes = [
            'footer',
            this.props.pWidth ? 'footer--p-width' : null
        ];

        return (
            <footer>
                <div className={classNames(classes)}>
                    {this.props.children}
                </div>
            </footer>
        );
    },

});

export default Footer;
