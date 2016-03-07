import React              from 'react';
import { Button }         from 'synfrastructure';
import { browserHistory } from 'react-router';

const ElsewherePage = React.createClass({

    displayName: 'ElsewherePage',

    onMenuClick() {
        browserHistory.push('/');
    },

    render() {

        return (
            <div key='elsewhere-page' className='elsewhere-page__content'>
                <Button className='back-button' element='a' color='tertiary' onClick={this.onMenuClick}>
                    Back
                </Button>
            </div>
        );
    },

});

export default ElsewherePage;
