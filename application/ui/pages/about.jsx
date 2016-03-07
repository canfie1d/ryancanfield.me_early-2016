import React              from 'react';
import { Button }         from 'synfrastructure';
import { browserHistory } from 'react-router';

const AboutPage = React.createClass({

    displayName: 'AboutPage',

    onMenuClick() {
        browserHistory.push('/');
    },

    render() {
        return (
            <div key='about-page' className='about-page__content'>
                <Button className='back-button' element='a' color='tertiary' onClick={this.onMenuClick}>
                    Back
                </Button>
            </div>
        );
    },

});

export default AboutPage;
