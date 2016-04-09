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
            activeProject : this.props.projects[0],
            activeImage   : 1
        };
    },

    toggleMenu() {
        if (!this.state.menuActive) {
            this.setState({
                menuActive    : true,
                activeProject : this.props.projects[0]
            });
        } else {
            this.setState({
                menuActive : false
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

    onNextClick() {
        if (this.state.activeImage < this.state.activeProject.images.length) {
            this.setState({
                activeImage : this.state.activeImage + 1
            });
        }
    },

    renderImages(project) {
        return _.map(project.images, (image, index) => {
            let classes = [
                'project__image',
                'project__image--' + this.state.activeImage + '-active'
            ];

            return <img key={index} className={classNames(classes)} src={image.url} />;
        });
    },

    renderProjects() {
        return _.map(this.props.projects, (project, index) => {
            let classes = [
                'project__list',
                'project__list--' + this.state.activeProject.id + '-active'
            ];
            return (
                <ul key={index} className={classNames(classes)}>
                    {this.renderImages(project)}
                </ul>
            );
        });
    },

    onMenuItemClick(index) {
        let currentProject = this.props.projects[index];

        this.setState({
            activeProject : currentProject,
            activeImage   : 1
        });

        this.toggleMenu();
    },

    renderMenuItems() {
        return _.map(this.props.projects, (project, index) => {
            return (
                <li key={index} className='display__menu__item' onClick={this.onMenuItemClick}>
                    {project.title}
                </li>
            );
        });
    },

    renderProjectButtons() {
        let buttonDisabledClass = () => {
                if(this.state.activeImage === this.state.activeProject.images.length) {
                    return 'display__project-button--previous--disabled';
                } else if (this.state.activeImage === 1) {
                    return 'display__project-button--next--disabled';
                }

                return null;
            },
            buttonsActiveClass = this.state.menuActive ? null : 'display__project-button--active',
            classes = [
                'display__project-button',
                buttonsActiveClass
            ];

        return [
            <div key='prev-button' className={classNames(classes, 'display__project-button--previous', buttonDisabledClass())} onClick={this.onPreviousClick}>
                <Icon icon='Caret' colorTheme='white' className='display__project-button__icon' />
            </div>,
            <div key='next-button' className={classNames(classes, 'display__project-button--next', buttonDisabledClass())} onClick={this.onNextClick}>
                <Icon icon='Caret' colorTheme='white' className='display__project-button__icon' />
            </div>
        ];
    },

    render() {
        let menuButtonClasses = [
            'display__menu__button',
            this.state.menuActive ? 'display__menu__button--active' : null
        ];

        return (
            <div className='display__body'>
                <div className={classNames(menuButtonClasses)} onClick={this.toggleMenu}>
                    MENU
                </div>
                <div className='display__inner-bezel'>
                    <DisplayMenu
                        projects        = {this.props.projects}
                        activeProject   = {this.state.activeProject}
                        onMenuItemClick = {this.onMenuItemClick}
                        menuActive      = {this.state.menuActive}
                    />
                    <div className='display'>
                        {this.renderProjects()}
                    </div>
                </div>
                <div className='display__button' />
                <div className='display__base' />
                {this.renderProjectButtons()}
            </div>
        );
    },

});

export default Display;
