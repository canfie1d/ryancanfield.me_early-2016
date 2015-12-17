'use strict';

import React from 'react';

let site = React.createClass({

    displayName : 'SiteLayout',

    render()
    {
        return (
            <div className='l--app-wrapper'>
                {this.props.children}
            </div>
        );
    }

});

export default site;
