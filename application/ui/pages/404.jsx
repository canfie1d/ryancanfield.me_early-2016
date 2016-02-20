import React from 'react';

const Page404 = React.createClass({

  displayName: '404',

  render() {
    const style1 = {
      textAlign: 'center',
      marginTop: '200px',
      fontSize: '180px',
      fontWeight: 'bold',
    };

    const style2 = {
      textAlign: 'center',
      fontSize: '20px',
    };

    return (
      <div>
        <h1 style={style1}>{'404'}</h1>
        <h2 style={style2}>{'Site Not Found'}</h2>
      </div>
    );
  },

});

export default Page404;
