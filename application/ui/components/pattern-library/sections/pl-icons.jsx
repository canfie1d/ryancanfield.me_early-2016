'use strict';

import _ from 'lodash';
import React from 'react';
import Icon  from '../../icon/icon';

let ICONS = [
    'back',
    'cancel',
    'caret',
    'group',
    'heart',
    'save',
    'search',
    'trash'
];

let Icons = React.createClass({

    displayName : 'Icons',

    renderIcons()
    {
        return _.map(ICONS, (icon, index) => {
            return (
                <span className='pl-icon small-4 medium-3' key={'icon-' + index}>
                    <Icon icon={icon} />
                    <span className='pl-icon__name'>
                        <strong className='strong'>Icon: </strong>
                        {icon}
                    </span>
                </span>
            );
        });
    },

    render()
    {
        return (
            <div className='pl-page'>
                <h1 className='pl-h1'>{'Icons'}</h1>
                <div className='pl-icons row'>
                    {this.renderIcons()}
                </div>
                <hr className='pl-hr' />
                <div className='row'>
                    <div className='medium-4'>
                        <h2 className='pl-h2'>{'Icon sizes'}</h2>
                        <Icon icon='caret' size='x-small' /> Extra Small
                        <br />
                        <br />
                        <Icon icon='caret' size='small' /> Small
                        <br />
                        <br />
                        <Icon icon='caret' /> Default
                        <br />
                        <br />
                        <Icon icon='caret' size='large' /> Large
                        <br />
                        <br />
                        <Icon icon='caret' size='x-large' /> Extra Large
                        <br />
                        <br />
                    </div>
                    <div className='medium-4'>
                        <h2 className='pl-h2'>{'Icon rotation'}</h2>
                        <Icon icon='caret' size='small' rotate={0} /> 0deg Rotation
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={45} /> 45deg Rotation
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={90} /> 90deg Rotation
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={180} /> 180deg Rotation
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={270} /> 270deg Rotation
                        <br />
                        <br />
                    </div>
                    <div className='medium-4'>
                        <h2 className='pl-h2'>{'Icon colors'}</h2>
                        <Icon icon='caret' size='small' colorTheme='black' /> Black fill
                        <br />
                        <br />
                        <Icon icon='caret' size='small' colorTheme='white' /> White fill
                        <br />
                        <br />
                        <Icon icon='caret' size='small' colorTheme='primary' /> Primary fill
                        <br />
                        <br />
                        <Icon icon='caret' size='small' colorTheme='secondary' /> Secondary fill
                        <br />
                        <br />
                        <Icon icon='caret' size='small' colorTheme='tertiary' /> Tertiary fill
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        );
    }

});

export default Icons;
