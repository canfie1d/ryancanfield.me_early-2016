'use strict';

let React             = require('react');
let RouterStateMixin  = require('react-router').State;
let FluxMixin         = require('fluxxor').FluxMixin(React);
let IntlMixin         = require('s19n');
let FormattedDate     = IntlMixin.FormattedDate;
let FormattedMessage  = IntlMixin.FormattedMessage;
let FormattedNumber   = IntlMixin.FormattedNumber;
let FormattedTime     = IntlMixin.FormattedTime;
let FormattedRelative = IntlMixin.FormattedRelative;

module.exports = React.createClass({

    displayName : 'Formatting',

    mixins : [
        IntlMixin,
        RouterStateMixin,
        FluxMixin
    ],

    render()
    {
        let bigNumber = 1234567;
        let price     = 33.57;
        let someDay   = new Date();
        let longAgo   = new Date('2015-01-01');

        return (
            <div className='formatting'>
                <h3>{this.t('fmt.Date')}</h3>
                <FormattedDate value={someDay} />
                <hr/>
                <h3>{this.t('fmt.Time')}</h3>
                <FormattedTime value={someDay} hour="numeric" minute="numeric" />
                <hr/>
                <h3>{this.t('fmt.Relative Time')}</h3>
                <FormattedRelative value={longAgo} />
                <hr/>
                <h3>{this.t('fmt.Number')}</h3>
                <FormattedNumber value={bigNumber} />
                <hr />
                <h3>{this.t('fmt.Currency')}</h3>
                <FormattedNumber value={price} style="currency" currency="JPY" />
                <hr />
                <h3>{this.t('fmt.Formatted Message')}</h3>
                <FormattedMessage
                    message={this.t('fmt.messages')}
                    name="Ted"
                    numMessages={3}
                />
            </div>
        );
    }

});
