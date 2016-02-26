import React                   from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const site = React.createClass({

  displayName: 'SiteLayout',

  render() {

    let currentPage = window.location.pathname,
      pageTransition = '';

    switch (currentPage) {
      case '/':
        pageTransition = 'menu';
        break;
      case '/welcome':
        pageTransition = 'welcome';
        break;
      case '/work':
        pageTransition = 'work';
        break;
      case '/about':
        pageTransition = 'about';
        break;
      case '/elsewhere':
        pageTransition = 'elsewhere';
        break;
    };

    const pageClass = pageTransition + '-page';

    const classes = [
      'l--site-wrapper',
      pageClass
    ].join(' ').trim();

    return (
      <ReactCSSTransitionGroup
        component='div'
        transitionName={pageTransition}
        transitionAppear={true}
        transitionEnterTimeout={300}
        transitionAppearTimeout={300}
        transitionLeaveTimeout={300}
      >
        <div key={pageTransition} className={classes}>
          {this.props.children}
        </div>
      </ReactCSSTransitionGroup>
    );
  },

});

export default site;
