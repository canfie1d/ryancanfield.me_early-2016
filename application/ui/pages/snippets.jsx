import React              from 'react';
import { Button }         from 'synfrastructure';
import { browserHistory } from 'react-router';

const SnippetsPage = React.createClass({

    displayName: 'SnippetsPage',

    onMenuClick() {
        browserHistory.push('/');
    },

    render() {

        return (
            <div key='snippets-page' className='snippets-page__content'>
                <Button className='back-button' element='a' color='tertiary' onClick={this.onMenuClick}>
                    Back
                </Button>
            </div>
        );
    },

});

export default SnippetsPage;
