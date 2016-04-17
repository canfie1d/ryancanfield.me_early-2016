import React              from 'react';
import _                  from 'lodash';
import { Button }         from 'synfrastructure';
import { browserHistory } from 'react-router';
import { connect }        from 'react-redux';
import BackButton         from '../components/buttons/back-button';
import Icon               from '../components/icon/icon';
import Header             from '../components/regions/header';
import Footer             from '../components/regions/footer';
import CardLink          from '../components/cards/card-link';

let getPropsFromApplicationState = (state) => {
    return {
        currentMenuItem : state.menu.currentMenuItem
    };
};

const CARD_LINKS = [
    {
        title       : 'Process & Method',
        description : 'An adaptation from the speech I gave at Phoenix Design Week’s Pecha Kucha talks.',
        imageUrl    : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Link+Images/icons.png',
        url         : 'https://medium.com/@Canfie1d/process-method-bddef9f5e47f',
        length      : '6 min read'
    },
    {
        title       : 'Embedded SVG icon sets and Reactjs',
        description : 'How we implement icons at Synapse Studios',
        imageUrl    : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Link+Images/sketch.png',
        url         : 'https://medium.com/@Canfie1d/reactjs-and-embedded-svg-icons-1e6eed0dc16a',
        length      : '4 min read'
    },
    {
        title       : 'SMACSS/BEM edge case naming convention',
        description : 'What do you do in cases where BEM methodology fails? What does the fallback naming convention look like?',
        imageUrl    : 'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Link+Images/code.png',
        url         : 'https://medium.com/@Canfie1d/smacss-bem-edge-case-naming-convention-73be902b1d30',
        length      : '3 min read'
    },
];

const ConceptsPage = connect(getPropsFromApplicationState)(React.createClass({

    displayName: 'ConceptsPage',

    onBackClick() {
        browserHistory.push('/');
    },

    renderCardLinks() {
        return _.map(CARD_LINKS, (card, index) => {
            return (
                <CardLink
                    key         = {index}
                    title       = {card.title}
                    description = {card.description}
                    imageUrl    = {card.imageUrl}
                    url         = {card.url}
                    length      = {card.length}
                />
            );
        });
    },

    render() {
        return (
            <main key='concepts-page' className='page__content-container'>
                <div className='l--max-width'>
                    <Header
                        title = 'Concepts'
                        icon  = 'Concepts'
                    />
                    <main className='page__content'>
                        {this.renderCardLinks()}
                    </main>
                    <Footer>
                        <BackButton onClick={this.onBackClick} staySmall />
                    </Footer>
                </div>
            </main>
        );
    },

}));

export default ConceptsPage;
