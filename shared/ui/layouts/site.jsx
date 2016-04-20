import React                   from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const site = React.createClass({

    displayName: 'SiteLayout',

    getInitialState() {
        return {
            hideFocusOutline : true
        };
    },

    componentDidMount() {
        // calculate the responsive state after the component has been mounted
        window.addEventListener('keydown', this.showFocusOutline);
        window.addEventListener('mousemove', this.hideFocusOutline);
    },

    componentWillUnmount() {
        window.removeEventListener('keydown', this.showFocusOutline);
        window.removeEventListener('mousemove', this.hideFocusOutline);
    },

    showFocusOutline(event) {
        if (this.state.hideFocusOutline && event.keyCode === 9) {
            this.setState ({
                hideFocusOutline : false
            });
        }
    },

    hideFocusOutline() {
        if (!this.state.hideFocusOutline) {
            this.setState ({
                hideFocusOutline : true
            });
        }
    },

    render() {

        let currentPage = window.location.pathname,
            page = '';

        switch (currentPage) {
            case '/':
                page = 'menu';
                break;
            case '/concepts':
                page = 'concepts';
                break;
            case '/projects':
                page = 'projects';
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
            this.state.hideFocusOutline ? 'focus-outline--hidden' : null,
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
