import React from 'react';

let brandingImage = require('../../media/images/raster/branding.png');

const HomePage = React.createClass({

  displayName: 'HomePage',

  render() {
    const style1 = {
      maxWidth: '400px',
      marginTop: '180px',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
    };

    const style2 = {
      textAlign: 'center',
      marginTop: '40px',
      fontSize: '80px',
      fontWeight: 'bold',
    };

    const style3 = {
      textAlign: 'center',
      fontSize: '20px',
    };

    // There seems to be an issue resolving image urls correctly between the app and client
    if (!brandingImage.match(/^\//)) {
      brandingImage = `/${brandingImage}`;
    }

    return (
      <div className="typography">
        <img style={style1} src={brandingImage} alt="Synapse Logo"/>
        <h1 style={style2}>{'Title2'}</h1>
        <h2 style={style3}>{'Content'}</h2>
      </div>
    );
  },

});

export default HomePage;
