import React              from 'react';
import { browserHistory } from 'react-router';
import { connect }        from 'react-redux';
import Button             from '../components/buttons/button';
import BackButton         from '../components/buttons/back-button';
import Icon               from '../components/icon/icon.jsx';
import Header             from '../components/regions/header';
import Footer             from '../components/regions/footer';
import AboutContent       from '../content/about-content';

let getPropsFromApplicationState = (state) => {
    return {
        currentMenuItem : state.menu.currentMenuItem
    };
};

const AboutPage = connect(getPropsFromApplicationState)(React.createClass({

    displayName: 'AboutPage',

    onBackClick() {
        browserHistory.push('/');
    },

    render() {
        return (
            <div key='about-page' className='page__content-container'>
                <Header
                    title = 'About Me'
                    icon  = 'About'
                    smallWidth
                />
                <AboutContent />
                <Footer
                    childArray={[
                        <Button className='download-button' element='a' target='_blank' href='https://s3-us-west-2.amazonaws.com/ryancanfield.me-docs/R_Canfield_Resume_2016.pdf' colorTheme='white'>
                            View Résumé PDF
                        </Button>,
                        <BackButton onClick={this.onBackClick} staySmall />
                    ]}
                />
            </div>
        );
    },

}));

export default AboutPage;
