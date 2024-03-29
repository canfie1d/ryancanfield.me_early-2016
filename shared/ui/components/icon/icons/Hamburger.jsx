import React from 'react';

const Hamburger = React.createClass({

    displayName: 'Hamburger',

    render() {
        /* eslint-disable max-len */
        return (
            <svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 19.708v2.084c0 .282-.103.526-.31.732-.205.206-.45.31-.732.31H1.042c-.282 0-.527-.104-.733-.31-.207-.206-.31-.45-.31-.732v-2.084c0-.282.103-.526.31-.732.205-.206.45-.31.732-.31h22.916c.282 0 .527.104.733.31.207.206.31.45.31.732zm0-8.333v2.083c0 .282-.103.527-.31.733-.205.207-.45.31-.732.31H1.042c-.282 0-.527-.103-.733-.31-.207-.205-.31-.45-.31-.732v-2.083c0-.282.103-.526.31-.732.205-.207.45-.31.732-.31h22.916c.282 0 .527.103.733.31.207.206.31.45.31.732zm0-8.333v2.083c0 .282-.103.526-.31.732-.205.207-.45.31-.732.31H1.042c-.282 0-.527-.103-.733-.31C.102 5.65 0 5.407 0 5.125V3.042c0-.282.103-.527.31-.733C.514 2.102.76 2 1.04 2h22.916c.282 0 .527.103.733.31.207.205.31.45.31.732z"/>
            </svg>
        );
        /* eslint-enable */
    },

});

export default Hamburger;
