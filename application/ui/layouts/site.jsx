import React from 'react';

const site = React.createClass({

  displayName: 'SiteLayout',

  propTypes: {
    children: React.PropTypes.any,
  },

  render() {
    return (
      <div className="l--app-wrapper">
        {this.props.children}
      </div>
    );
  },

});

export default site;
