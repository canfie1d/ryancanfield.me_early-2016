import React from 'react';

const Page = React.createClass({

    displayName: 'Page',

    render() {
        return (
            <div className='page'>
                {this.props.children}
            </div>
        );
    },

});

export default Page;
