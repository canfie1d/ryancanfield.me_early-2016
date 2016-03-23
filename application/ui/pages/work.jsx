import React              from 'react';
import { Button }         from 'synfrastructure';
import { browserHistory } from 'react-router';
import { connect }        from 'react-redux';
import BackButton         from '../components/buttons/back-button';

let getPropsFromApplicationState = (state) => {
    return {
        currentMenuItem : state.menu.currentMenuItem
    };
};

const WorkPage = connect(getPropsFromApplicationState)(React.createClass({

    displayName: 'WorkPage',

    onBackClick() {
        browserHistory.push('/');
    },

    render() {

        return (
            <div key='work-page' className='page__content-container'>
                <BackButton onClick={this.onBackClick} />
                <div className='monitor'>
                    <div className='inner-bezel'>
                        
                    </div>
                </div>
            </div>
        );
    },

}));

export default WorkPage;
