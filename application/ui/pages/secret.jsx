import React              from 'react';
import { Button }         from 'synfrastructure';
import { browserHistory } from 'react-router';
import secretSound        from '../../media/The_Legend_of_Zelda_Ocarina_of_Time_-_Secret_Sound.mp3';

const SecretPage = React.createClass({

    displayName: 'SecretPage',

    render() {

        return (
            <div key='process-page' className='page__content-container'>
                <div className='l--max-width'>
                    <main className='page__content'>
                        <audio src={secretSound} autoPlay="autoplay" />
                    </main>
                </div>
            </div>
        );
    },

});

export default SecretPage;
