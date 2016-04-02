import React              from 'react';
import { Button }         from 'synfrastructure';
import { browserHistory } from 'react-router';
import { connect }        from 'react-redux';
import BackButton         from '../components/buttons/back-button';
import Display            from '../components/display/display';
import List               from '../components/list/list';

const CLIENTS = [
    {
        title : 'eBay Enterprise'
    },
    {
        title : 'Hotelogical'
    },
    {
        title : 'TruTankless'
    },
    {
        title : 'Blue Cross Blue Shield'
    },
    {
        title : 'BodeTree'
    },
    {
        title : 'Arizona State University'
    },
    {
        title : 'University of Arizona'
    },
    {
        title : 'Northern Arizona University'
    },
    {
        title : 'Beacon ID'
    }
];

const PROJECTS = [
    {
        title  : 'Hotelogical',
        id     : 1,
        images : [
            {
                url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Hotelogical/home.png'
            },
            {
                url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Hotelogical/results.png'
            },
            {
                url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Hotelogical/map.png'
            },
            {
                url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Hotelogical/details.png'
            }
        ],
    },
    {
        title  : 'Synapse Studios',
        id     : 2,
        images : [
            {
                url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Synapse+Studios/home.png'
            },
            {
                url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Synapse+Studios/home2.png'
            },
            {
                url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Synapse+Studios/who.png'
            },
            {
                url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/Synapse+Studios/benefits.png'
            }
        ],
    },
    {
        title  : 'USMexPat',
        id     : 3,
        images : [
            {
                url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/USMexPat/home.png'
            },
            {
                url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/USMexPat/menu.png'
            },
            {
                url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/USMexPat/gdp.png'
            },
            {
                url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/USMexPat/form.png'
            }
        ]
    },
    {
        title  : 'TruTankless',
        id     : 4,
        images : [
            {
                url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/TruTankless/login.png'
            },
            {
                url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/TruTankless/home.png'
            },
            {
                url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/TruTankless/dashboard.png'
            },
            {
                url:'https://s3-us-west-2.amazonaws.com/ryancanfield.me-images/TruTankless/form.png'
            }
        ]
    }
];

let getPropsFromApplicationState = (state) => {
    return {
        browser : state.browser
    };
};

const WorkPage = connect(getPropsFromApplicationState)(React.createClass({

    displayName: 'WorkPage',

    onBackClick() {
        browserHistory.push('/');
    },

    renderContent() {
        if (this.props.browser.greaterThan.small) {
            return [
                <h1 key='title1' className='page__title page__title--fixW'>Work</h1>,
                <Display key='component1' projects={PROJECTS} />,
                <h1 key='title2' className='page__title l--m-top-200'>Clients</h1>,
                <List key='component2' listItems={CLIENTS} />
            ];
        }

        return [
            <h1 className='page__title'>Clients</h1>,
            <List listItems={CLIENTS} />
        ];
    },

    render() {

        return (
            <div key='work-page' className='page__content-container'>
                <BackButton onClick={this.onBackClick} />
                <div className='l--max-width'>
                    {this.renderContent()}
                </div>
            </div>
        );
    },

}));

export default WorkPage;
