/* jshint globalstrict: true */
'use strict';

var React           = require('react');
var TextInput       = require('../../form/inputs/text');
var TextareaInput   = require('../../form/inputs/textarea');
var SelectInput     = require('../../form/inputs/select');
var RadioInput      = require('../../form/inputs/radio');
var RadioInputGroup = require('../../form/inputs/radio-group');
var CheckboxInput   = require('../../form/inputs/checkbox');
var CheckboxGroup   = require('../../form/inputs/checkbox-group');
var ReactIntl       = require('react-intl');
var IntlMixin       = ReactIntl.IntlMixin;

module.exports = React.createClass({

    displayName : 'Form Elements',

    mixins: [ IntlMixin ],

    render : function()
    {
        var mockValidationObj1,
            mockValidationObj2,
            mockValidationObj3,
            mockSelectInputData,
            mockRadioGroupData,
            mockCheckboxGroupData,
            mockRadioGroupData2,
            mockCheckboxGroupData2;

        mockValidationObj1 = {
          status   : 'warning',
          messages : [this.getIntlMessage('sg.form-elements.validation-warning')]
        };

        mockValidationObj2 = {
          status   : 'error',
          messages : [this.getIntlMessage('sg.form-elements.validation-error')]
        };

        mockValidationObj3 = {
          status   : 'success',
          messages : [this.getIntlMessage('sg.form-elements.validation-success')]
        };

        mockSelectInputData = [
            {
                text  : this.getIntlMessage('sg.form-elements.option-1'),
                value : 'option-1'
            },
            {
                text  : this.getIntlMessage('sg.form-elements.option-2'),
                value : 'option-2'
            },
            {
                text  : this.getIntlMessage('sg.form-elements.option-3'),
                value : 'option-3'
            },
            {
                text  : this.getIntlMessage('sg.form-elements.option-4'),
                value : 'option-4'
            }
        ];

        mockRadioGroupData = [
            {
                text    : this.getIntlMessage('sg.form-elements.radio-option-1'),
                value   : 'radio-option-1',
                checked : true
            },
            {
                text    : this.getIntlMessage('sg.form-elements.radio-option-2'),
                value   : 'radio-option-2',
                checked : false
            },
            {
                text    : this.getIntlMessage('sg.form-elements.radio-option-3'),
                value   : 'radio-option-3',
                checked : false
            }
        ];

        mockCheckboxGroupData = [
            {
                text    : this.getIntlMessage('sg.form-elements.checkbox-option-1'),
                value   : 'checkbox-option-1',
                checked : true
            },
            {
                text    : this.getIntlMessage('sg.form-elements.checkbox-option-2'),
                value   : 'checkbox-option-2',
                checked : false
            },
            {
                text    : this.getIntlMessage('sg.form-elements.checkbox-option-3'),
                value   : 'checkbox-option-3',
                checked : false
            }
        ];

        mockRadioGroupData2 = [
            {
                text    : this.getIntlMessage('sg.form-elements.radio-option-1-2'),
                value   : 'radio-option-1-2',
                checked : true
            },
            {
                text    : this.getIntlMessage('sg.form-elements.radio-option-2-2'),
                value   : 'radio-option-2-2',
                checked : false
            },
            {
                text    : this.getIntlMessage('sg.form-elements.radio-option-3-2'),
                value   : 'radio-option-3-2',
                checked : false
            }
        ];

        mockCheckboxGroupData2 = [
            {
                text    : this.getIntlMessage('sg.form-elements.checkbox-option-1-2'),
                value   : 'checkbox-option-1-2',
                checked : true
            },
            {
                text    : this.getIntlMessage('sg.form-elements.checkbox-option-2-2'),
                value   : 'checkbox-option-2-2',
                checked : false
            },
            {
                text    : this.getIntlMessage('sg.form-elements.checkbox-option-3-2'),
                value   : 'checkbox-option-3-2',
                checked : false
            }
        ];

        return (
            <div className='sg-page'>
                <h1 className='sg-h1'>{this.getIntlMessage('sg.section.Form Elements')}</h1>
                <h2 className='sg-h2'>{this.getIntlMessage('sg.form-elements.input-types')}</h2>
                <div className='row'>
                    <div className='medium-6 columns'>
                        <TextInput
                            label       = {this.getIntlMessage('sg.form-elements.basic-label')}
                            id          = 'text-input'
                            type        = 'text'
                            placeholder = {this.getIntlMessage('sg.form-elements.basic-placeholder')} />
                        <TextInput
                            label       = {this.getIntlMessage('sg.form-elements.email-label')}
                            id          = 'email-text-input'
                            type        = 'email'
                            placeholder = {this.getIntlMessage('sg.form-elements.email-placeholder')} />
                        <TextInput
                            label       = {this.getIntlMessage('sg.form-elements.pwd-label')}
                            id          = 'pwd-text-input'
                            type        = 'password'
                            placeholder = {this.getIntlMessage('sg.form-elements.pwd-placeholder')} />
                        <TextInput
                            label       = {this.getIntlMessage('sg.form-elements.search-label')}
                            id          = 'search-text-input'
                            type        = 'search'
                            placeholder = {this.getIntlMessage('sg.form-elements.search-placeholder')} />
                        <TextInput
                            label       = {this.getIntlMessage('sg.form-elements.url-label')}
                            id          = 'url-text-input'
                            type        = 'url'
                            placeholder = {this.getIntlMessage('sg.form-elements.url-placeholder')} />
                        <TextInput
                            label       = {this.getIntlMessage('sg.form-elements.phone-label')}
                            id          = 'phone-text-input'
                            type        = 'tel'
                            placeholder = {this.getIntlMessage('sg.form-elements.phone-placeholder')} />
                        <TextInput
                            label       = {this.getIntlMessage('sg.form-elements.number-label')}
                            id          = 'number-text-input'
                            type        = 'number'
                            placeholder = {this.getIntlMessage('sg.form-elements.number-placeholder')} />
                        <TextareaInput
                            label       = {this.getIntlMessage('sg.form-elements.textarea-label')}
                            id          = 'textarea-input'
                            rows        = {10}
                            placeholder = {this.getIntlMessage('sg.form-elements.textarea-placeholder')} />
                    </div>
                    <div className='medium-6 columns'>
                        <TextInput
                            label       = {this.getIntlMessage('sg.form-elements.date-label')}
                            id          = 'date-text-input'
                            type        = 'date'
                            placeholder = {this.getIntlMessage('sg.form-elements.date-placeholder')} />
                        <TextInput
                            label       = {this.getIntlMessage('sg.form-elements.datetime-label')}
                            id          = 'datetime-text-input'
                            type        = 'datetime'
                            placeholder = {this.getIntlMessage('sg.form-elements.datetime-placeholder')} />
                        <TextInput
                            label       = {this.getIntlMessage('sg.form-elements.datetime-local-label')}
                            id          = 'datetime-local-text-input'
                            type        = 'datetime-local'
                            placeholder = {this.getIntlMessage('sg.form-elements.datetime-local-placeholder')} />
                        <TextInput
                            label       = {this.getIntlMessage('sg.form-elements.month-label')}
                            id          = 'month-text-input'
                            type        = 'month'
                            placeholder = {this.getIntlMessage('sg.form-elements.month-placeholder')} />
                        <TextInput
                            label       = {this.getIntlMessage('sg.form-elements.week-label')}
                            id          = 'week-text-input'
                            type        = 'week'
                            placeholder = {this.getIntlMessage('sg.form-elements.week-placeholder')} />
                        <TextInput
                            label       = {this.getIntlMessage('sg.form-elements.day-label')}
                            id          = 'day-text-input'
                            type        = 'day'
                            placeholder = {this.getIntlMessage('sg.form-elements.day-placeholder')} />
                        <SelectInput
                            label   = {this.getIntlMessage('sg.form-elements.select-label')}
                            id      = 'select-input'
                            options = {mockSelectInputData} />
                        <div className='row'>
                            <div className='medium-6 columns'>
                                <RadioInput
                                    id      = 'radio-1-input'
                                    name    = 'radio-input'
                                    checked = {true}
                                    value   = 'option 1'
                                    label   = {this.getIntlMessage('sg.form-elements.radio-label')} />
                                <RadioInputGroup
                                    label   = {this.getIntlMessage('sg.form-elements.radio-group-label')}
                                    name    = 'radio-group-1'
                                    options = {mockRadioGroupData} />
                            </div>
                            <div className='medium-6 columns'>
                                <CheckboxInput
                                    id      = 'checkbox-single-1-input'
                                    checked = {true}
                                    value   = 'option 1'
                                    label   = {this.getIntlMessage('sg.form-elements.checkbox-label')} />
                                <CheckboxGroup
                                    label   = {this.getIntlMessage('sg.form-elements.checkbox-group-label')}
                                    name    = 'checkbox-group-1'
                                    options = {mockCheckboxGroupData} />
                            </div>
                        </div>
                        <RadioInputGroup
                            label   = {this.getIntlMessage('sg.form-elements.radio-group-inline-label')}
                            name    = 'radio-group-3'
                            inline  = {true}
                            options = {mockRadioGroupData2} />
                        <CheckboxGroup
                            label   = {this.getIntlMessage('sg.form-elements.checkbox-group-inline-label')}
                            name    = 'checkbox-group-3'
                            inline  = {true}
                            options = {mockCheckboxGroupData2} />
                    </div>
                </div>

                <h2 className='sg-h2'>{this.getIntlMessage('sg.form-elements.validation')}</h2>
                <div className='row'>
                    <div className='medium-6 columns'>
                        <TextInput
                            label             = {this.getIntlMessage('sg.form-elements.input-validation-warning-label')}
                            id                = 'warning-validation-input'
                            type              = 'email'
                            placeholder       = {this.getIntlMessage('sg.form-elements.input-validation-warning-placeholder')}
                            validationDisplay = 'default'
                            value             = 'anybody#anywhere.com'
                            validation        = {mockValidationObj1} />
                        <TextInput
                            label             = {this.getIntlMessage('sg.form-elements.input-validation-error-label')}
                            id                = 'error-validation-input'
                            type              = 'text'
                            placeholder       = {this.getIntlMessage('sg.form-elements.input-validation-error-placeholder')}
                            validationDisplay = 'default'
                            value             = 'horse'
                            validation        = {mockValidationObj2} />
                        <TextInput
                            label             = {this.getIntlMessage('sg.form-elements.input-validation-success-label')}
                            id                = 'success-validation-input'
                            type              = 'text'
                            placeholder       = {this.getIntlMessage('sg.form-elements.input-validation-success-placeholder')}
                            validationDisplay = 'default'
                            value             = 'anybody@anywhere.com'
                            validation        = {mockValidationObj3} />
                    </div>
                    <div className='medium-6 columns'>
                        <TextInput
                            label             = {this.getIntlMessage('sg.form-elements.input-validation-warning-pos-label')}
                            id                = 'warning-validation-input'
                            type              = 'email'
                            placeholder       = {this.getIntlMessage('sg.form-elements.input-validation-warning-pos-placeholder')}
                            validationDisplay = 'positioned'
                            value             = 'anybody#anywhere.com'
                            validation        = {mockValidationObj1} />
                        <TextInput
                            label             = {this.getIntlMessage('sg.form-elements.input-validation-error-pos-label')}
                            id                = 'warning-validation-input'
                            type              = 'email'
                            placeholder       = {this.getIntlMessage('sg.form-elements.input-validation-error-pos-placeholder')}
                            validationDisplay = 'positioned'
                            value             = 'anybody#anywhere.com'
                            validation        = {mockValidationObj2} />
                        <TextInput
                            label             = {this.getIntlMessage('sg.form-elements.input-validation-success-pos-label')}
                            id                = 'warning-validation-input'
                            type              = 'email'
                            placeholder       = {this.getIntlMessage('sg.form-elements.input-validation-success-pos-placeholder')}
                            validationDisplay = 'positioned'
                            value             = 'anybody#anywhere.com'
                            validation        = {mockValidationObj3} />
                    </div>
                </div>

            </div>
        );
    }

});
