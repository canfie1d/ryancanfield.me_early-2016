import React              from 'react';
import { Button }         from 'synfrastructure';
import { browserHistory } from 'react-router';
import { connect }        from 'react-redux';
import BackButton         from '../components/buttons/back-button';
import Icon               from '../components/icon/icon.jsx';
import Header             from '../components/regions/header';
import Footer             from '../components/regions/footer';

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
                <main className='page__content page__content--p-width'>
                    <p className='page__p'>
                        My name is Ryan Canfield and I specialize in UI/UX design & front-end development. Upon completing my bachelors of fine arts in graphic design in 2012 I began work in-house as a designer for the Arizona State Fair. In October of 2013, I began working as a UI Engineer at <a target='_blank' href='http://www.synapsestudios.com' className='page__inline-a'>Synapse Studios</a>.
                    </p>
                    <p className='page__p'>
                        In addition to my traditional graphic design education, I'm extremely comfortable with html, css(SCSS) & javascript. I am well versed in <a target='_blank' href='http://oocss.org' className='page__inline-a'>OOCSS</a>, <a target='_blank' href='http://en.bem.info' className='page__inline-a'>BEM</a> and <a target='_blank' href='http://smacss.com' className='page__inline-a'>SMACSS</a>. Since beginning my position at Synapse Studios, I've learned to write object oriented javascript including ES2015 and <a target='_blank' href='http://facebook.github.io/react' className='page__inline-a'>React.js</a>. I've also colaborrated with my coworkers to create a bespoke <a target='_blank' href='https://github.com/synapsestudios/frontend-template' className='page__inline-a'>React project template</a>, <a target='_blank' href='https://github.com/synapsestudios/synfrastructure' className='page__inline-a'>mixin/component library</a> and implement rigid coding standards and code reviews.
                    </p>
                    <p className='page__p'>
                        I use an assortment of tools such as Sketch &amp; InVision to wireframe, mock, and prototype designs in order to qualify design direction and workflows before moving to code.
                    </p>
                    <p className='page__p'>
                        I am very accustomed to using agile development methodology including daily stand-up, sprint based cadences, iterative and incremental development. I am comfortable with complex git workflows as well as kanban style issue tracking services.
                    </p>
                </main>
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
