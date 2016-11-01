import React              from 'react';
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
        let items = [];

        for (let i = 0; i < this.props.listItems.length; i++) {
            items.push(
                <li key={i} className='menu__item'>
                    <span className='menu__link'>{this.props.listItems[i].title}</span>
                </li>
            );
        }

        return items;
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
