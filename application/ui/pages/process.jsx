import React              from 'react';
import { Button }         from 'synfrastructure';
import { browserHistory } from 'react-router';
import { connect }        from 'react-redux';
import BackButton         from '../components/buttons/back-button';
import Icon               from '../components/icon/icon';
import Header             from '../components/regions/header';
import Footer             from '../components/regions/footer';

let getPropsFromApplicationState = (state) => {
    return {
        currentMenuItem : state.menu.currentMenuItem
    };
};

const ProcessPage = connect(getPropsFromApplicationState)(React.createClass({

    displayName: 'ProcessPage',

    onBackClick() {
        browserHistory.push('/');
    },

    render() {

        return (
            <main key='process-page' className='page__content-container'>
                <Header
                    title = 'Process'
                    icon  = 'Process'
                />
                <main className='page__content'>
                    <p className='page__p'>
                        
                    </p>
                    <p className='page__p'>
                    </p>
                </main>
                <Footer>
                    <BackButton onClick={this.onBackClick} staySmall />
                </Footer>
            </main>
        );
    },

}));

export default ProcessPage;
