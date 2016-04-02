import React              from 'react';
import _                  from 'lodash';
import { Link }           from 'react-router';
import { toggleMenuItem } from '../../../redux/menu/menu-actions';
import { connect }        from 'react-redux';
import Icon               from '../icon/icon';
import classNames         from 'classnames';

let getPropsFromApplicationState = (state) => {
    return {
        browser : state.browser
    };
};

const List = connect(getPropsFromApplicationState)(React.createClass({

    displayName: 'List',

    propTypes: {
        listItems : React.PropTypes.array.isRequired
    },

    renderItems() {
        return _.map(this.props.listItems, (item, index) => {

            return (
                <li key={index} className='menu__item'>
                    <span className='menu__link'>{item.title}</span>
                </li>
            );
        });
    },

    render() {
        return (
            <ul className='menu__list list'>
                {this.renderItems()}
            </ul>
        );
    },

}));

export default List;
