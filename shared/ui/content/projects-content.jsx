import React       from 'react';
import ReactDOM    from 'react-dom';
import { connect } from 'react-redux';
import Display     from '../components/display/display';
import List        from '../components/list/list';

let getPropsFromApplicationState = (state) => {
    return {
        browser : state.browser
    };
};

const CLIENTS = [
    {
        title : 'eBay Enterprise'
    },
    {
        title : 'Blue Cross Blue Shield'
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
        title : 'Hotelogical'
    },
    {
        title : 'TruTankless'
    },
    {
        title : 'BodeTree'
    },
    {
        title : 'Beacon ID'
    },
    {
        title : 'Puppies.com'
    },
    {
        title : 'High Above'
    },
    {
        title : 'Synapse Studios'
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

const ProjectsContent = connect(getPropsFromApplicationState)(React.createClass({

    displayName: 'ProjectsContent',

    componentDidMount() {
        var component = ReactDOM.findDOMNode(this);

        component.style.opacity = 0;
        window.requestAnimationFrame(() => {
            component.style.transition = 'opacity 2500ms';
            component.style.opacity = 1;
        });
    },

    renderDisplay() {
        if (this.props.browser.greaterThan.mediumSmall) {
            return (
                <Display projects={PROJECTS} />
            );
        }
    },

    renderSubtitle() {
        if(this.props.browser.greaterThan.mediumSmall) {
            return (
                <h2 className='page__subtitle'>Clients</h2>
            );
        }
    },

    render() {
        return (
            <main className='page__content'>
                {this.renderDisplay()}
                {this.renderSubtitle()}
                <List key='list' listItems={CLIENTS} />
            </main>
        );
    },

}));

export default ProjectsContent;
