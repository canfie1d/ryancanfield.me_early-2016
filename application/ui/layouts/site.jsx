'use strict';

import React from 'react';
import {FluxMixin} from 'fluxxor';

let site = React.createClass({

    displayName : 'SiteLayout',

    mixins : [new FluxMixin(React)],

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
