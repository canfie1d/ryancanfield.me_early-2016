import React       from 'react';
import _           from 'lodash';
import classNames from 'classnames';

const Display = React.createClass({

    displayName: 'Display',

    propTypes: {
        projects        : React.PropTypes.array,
        activeProject   : React.PropTypes.oneOfType([
            React.PropTypes.string,
            null
        ]),
        toggleMenu      : React.PropTypes.func,
        onMenuItemClick : React.PropTypes.func,
        menuActive      : React.PropTypes.bool
    },

    renderMenuItems() {
        return _.map(this.props.projects, (project, index) => {
            return (
                <li key={index} tabIndex='1' className='display__menu__item' onClick={_.partial(this.props.onMenuItemClick, index)}>
                    {project.title}
                </li>
            );
        });
    },

    render() {
        let classes = classNames({
            'display__menu'         : true,
            'display__menu--active' : this.props.menuActive
        });

        return (
            <div className='display__menu__wrapper'>
                <div className={classes}>
                    <ul className='display__menu__list'>
                        {this.renderMenuItems()}
                    </ul>
                </div>
                <div className='display__menu__button' onClick={this.props.toggleMenu}>
                    MENU
                </div>
            </div>
        );
    },

});

export default Display;
