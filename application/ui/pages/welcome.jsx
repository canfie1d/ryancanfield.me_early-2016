import React              from 'react';
import { Button }         from 'synfrastructure';
import { browserHistory } from 'react-router';

const WelcomePage = React.createClass({

    displayName: 'WelcomePage',

    onMenuClick() {
        browserHistory.push('/');
    },

    render() {

        return (
            <div key='welcome-page' className='welcome-page__content'>
                <Button className='back-button' element='a' color='tertiary' onClick={this.onMenuClick}>
                    Back
                </Button>
            </div>
        );
    },

});

export default WelcomePage;
