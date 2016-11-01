import React              from 'react';
import { browserHistory } from 'react-router';
import Button             from '../components/buttons/button';
import secretSound        from '../../media/The_Legend_of_Zelda_Ocarina_of_Time_-_Secret_Sound.mp3';

const SecretPage = React.createClass({

    displayName: 'SecretPage',

    render() {

        return (
            <div key='secret-page' className='page__content-container'>
                <main className='page__content'>
                    <audio src={secretSound} autoPlay="autoplay" />
                </main>
            </div>
        );
    },

});

export default SecretPage;
