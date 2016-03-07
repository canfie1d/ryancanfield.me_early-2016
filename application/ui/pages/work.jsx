import React              from 'react';
import { Button }         from 'synfrastructure';
import { browserHistory } from 'react-router';

const WorkPage = React.createClass({

    displayName: 'WorkPage',

    onMenuClick() {
        browserHistory.push('/');
    },

    render() {

        return (
            <div key='work-page' className='work-page__content'>
                <Button className='back-button' element='a' color='tertiary' onClick={this.onMenuClick}>
                    Back
                </Button>
            </div>
        );
    },

});

export default WorkPage;
