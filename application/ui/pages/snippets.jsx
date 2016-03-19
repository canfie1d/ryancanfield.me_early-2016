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

const SnippetsPage = connect(getPropsFromApplicationState)(React.createClass({

    displayName: 'SnippetsPage',

    onBackClick() {
        browserHistory.push('/');
    },

    render() {

        return (
            <div key='snippets-page' className='page__content-container'>
                <BackButton onClick={this.onBackClick} />
            </div>
        );
    },

}));

export default SnippetsPage;
