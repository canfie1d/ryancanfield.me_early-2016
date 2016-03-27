import _           from 'lodash';
import React       from 'react';
import DisplayMenu from './display-menu';
import classNames  from 'classnames';
import Icon        from '../../components/icon/icon';

const Display = React.createClass({

    displayName: 'Display',

    propTypes: {
        projects : React.PropTypes.array
    },

    getInitialState() {
        return {
            menuActive    : true,
            activeProject : 'usmexpat',
            activeImage   : 1
        };
    },

    toggleMenu() {
        this.setState({
            menuActive : ! this.state.menuActive
        });
    },

    onNextClick() {
        if (this.state.activeImage < this.props.projects.length) {
            this.setState({
                activeImage : this.state.activeImage + 1
            });
        }
    },

    onPreviousClick() {
        if (this.state.activeImage > 1) {
            this.setState({
                activeImage : this.state.activeImage - 1
            });
        }
    },

    renderImages(project) {
        return _.map(project.images, (image, index) => {
            let activeImageClass = () => {
                    if(this.state.activeImage === index + 1) {
                        return 'project__image--active';
                    }
                },
                classes = [
                    'project__image',
                    activeImageClass(),
                    'project__image--' + (index + 1)
                ];

            return <img key={index} className={classNames(classes)} src={image.url} />;
        });
    },

    renderProjects() {
        return _.map(this.props.projects, (project, index) => {
            let classes = [
                'project__list',
                'project__list--' + this.state.activeProject + '-active'
            ];
            return (
                <ul key={index} className={classNames(classes)}>
                    {this.renderImages(project)}
                </ul>
            );
        });
    },

    onMenuItemClick(project) {
        this.setState({
            activeMenu : project
        });

        this.toggleMenu();
    },

    renderMenuItems() {
        return _.map(this.props.projects, (project, index) => {
            return (
                <li key={index} className='display__menu__item' onClick={_.partial(this.onMenuItemClick, project.title)}>
                    {project.title}
                </li>
            );
        });
    },

    render() {
        return (
            <div className='display__body'>
                <div className='display__inner-bezel'>
                    <DisplayMenu
                        projects        = {this.props.projects}
                        activeProject   = {this.state.activeProject}
                        onMenuItemClick = {this.onMenuItemClick}
                        toggleMenu      = {this.toggleMenu}
                        menuActive      = {this.state.menuActive}
                    />
                    <div className='display'>
                        {this.renderProjects()}
                        <div className='display__previous-button' onClick={this.onNextClick}>
                            <Icon icon='Caret' rotate={90} colorTheme='white' className='display__previous-button__icon' />
                        </div>
                        <div className='display__next-button'>
                            <Icon icon='Caret' rotate={90} colorTheme='white' className='display__next-button__icon'/>
                        </div>
                    </div>
                </div>
                <div className='display__button' />
                <div className='display__base' />
            </div>
        );
    },

});

export default Display;
