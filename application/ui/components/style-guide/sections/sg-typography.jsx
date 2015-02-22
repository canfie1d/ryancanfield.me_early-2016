/* jshint globalstrict: true */
'use strict';

var React     = require('react');
var ReactIntl = require('react-intl');
var IntlMixin = ReactIntl.IntlMixin;

module.exports = React.createClass({

    displayName : 'Typography',

    mixins: [ IntlMixin ],

    render : function()
    {
        return (
            <div className='sg-page'>
                <h1 className='sg-h1'>{this.getIntlMessage('sg.section.Typography')}</h1>
                <h2 className='sg-h2'>{this.getIntlMessage('sg.typography.headers')}</h2>

                <h1 className='h1'>{this.getIntlMessage('sg.typography.h1')}</h1>
                <h2 className='h2'>{this.getIntlMessage('sg.typography.h2')}</h2>
                <h3 className='h3'>{this.getIntlMessage('sg.typography.h3')}</h3>
                <h4 className='h4'>{this.getIntlMessage('sg.typography.h4')}</h4>
                <h5 className='h5'>{this.getIntlMessage('sg.typography.h5')}</h5>
                <h6 className='h6'>{this.getIntlMessage('sg.typography.h6')}</h6>

                <hr className='sg-hr' />

                <h2 className='sg-h2'>{this.getIntlMessage('sg.typography.grouping')}</h2>
                <p className='p'><strong className='strong'>{this.getIntlMessage('sg.typography.p')}</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta vehicula mi, vel placerat sem viverra in. Vivamus convallis semper est nec placerat. Phasellus laoreet nibh nec ligula dapibus rutrum id vel purus. Mauris eget fermentum felis. Morbi iaculis sapien et libero accumsan, sagittis maximus erat laoreet. Curabitur vitae orci commodo libero convallis molestie. Fusce tincidunt urna varius nulla egestas aliquet. Donec porttitor, mi fermentum commodo hendrerit, velit nisl venenatis lorem, quis porttitor risus elit quis orci.</p>

                <blockquote className='blockquote'>
                    <strong className='strong'>{this.getIntlMessage('sg.typography.blockquote')}</strong> Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur sapien ut diam gravida, at faucibus justo tristique. Ut sed tempor ex, sit amet cursus ante. Nulla venenatis tincidunt arcu, non interdum nibh ultrices id. Nulla pellentesque mi ut nibh posuere sollicitudin.
                </blockquote>

                <hr className='sg-hr' />

                <h2 className='sg-h2'>{this.getIntlMessage('sg.typography.inline-elements')}</h2>
                <p className='p'>
                    <a className='a'>{this.getIntlMessage('sg.typography.a')}</a>
                    <strong className='strong'> {this.getIntlMessage('sg.typography.strong')}</strong>,
                    <b className='b'> {this.getIntlMessage('sg.typography.b')}</b>,
                    <em className='em'> {this.getIntlMessage('sg.typography.em')}</em>,
                    <i className='i'> {this.getIntlMessage('sg.typography.i')}</i>,
                    <sub className='sub'> {this.getIntlMessage('sg.typography.sub')}</sub>,
                    <sup className='sup'> {this.getIntlMessage('sg.typography.sup')}</sup>,
                    <dfn className='dfn'> {this.getIntlMessage('sg.typography.dfn')}</dfn>
                </p>
            </div>
        );
    }

});
