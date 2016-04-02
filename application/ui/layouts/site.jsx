import React                   from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const site = React.createClass({

    displayName: 'SiteLayout',

    render() {

        let currentPage = window.location.pathname,
            page = '';

        switch (currentPage) {
            case '/':
                page = 'menu';
                break;
            case '/process':
                page = 'process';
                break;
            case '/work':
                page = 'work';
                break;
            case '/about':
                page = 'about';
                break;
            case '/elsewhere':
                page = 'elsewhere';
                break;
            case '/secret':
                page = 'secret';
                break;
        };

        const pageClass = page + '-page';

        const classes = [
            'l--site-wrapper',
            pageClass
        ].join(' ').trim();

        return (
            <ReactCSSTransitionGroup
                component='div'
                transitionName={page}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
                <div key={page} className={classes}>
                    {this.props.children}
                </div>
            </ReactCSSTransitionGroup>
        );
    },

});

export default site;
