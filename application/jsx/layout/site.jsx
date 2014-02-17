/** @jsx React.DOM */
define([
	'react',
	'templates/layout/site/slideOutMenu'
], function(
	React,
	SlideOutMenu
) {

	return React.createClass({

		getInitialState : function()
		{
			return {
				showSlideOut : false
			};
		},

		toggleSlideOut : function()
		{
			this.setState({
				showSlideOut : ! this.state.showSlideOut
			});
		},

		render : function() {
			var classes = 'home app-wrapper ' + (this.state.showSlideOut ? 'animate-sidebar-in' : 'animate-sidebar-out');

			return (
				<div className={classes}>
					<SlideOutMenu onNavSelect={this.toggleSlideOut} />
					<div className="layout--main">
						<header className="header header--transparent" role="banner">
							<h1 className="header__branding">
								<a href="/"><img src="/images/branding.svg" alt="Synapase Studios" /></a>
							</h1>
							<a onClick={this.toggleSlideOut} className="header__toggle-nav">
								&#9776;
							</a>
						</header>

						{this.props.children}
					</div>
				</div>
			);
		}
	});
});
