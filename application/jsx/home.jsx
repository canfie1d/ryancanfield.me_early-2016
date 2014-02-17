/** @jsx React.DOM */
define([
	'react',
	'templates/home/index'
], function(
	React,
	IndexPage
) {

	return React.createClass({

		displayName    : 'HomeModule',

		getInitialState : function()
		{
			return {
				showSegments : false
			};
		},

		handleShowSegment : function()
		{
			this.setState({
				showSegments : true
			});
		},

		handleHideSegment : function()
		{
			this.setState({
				showSegments : false
			});
		},

		render : function() {
			console.log(this.props.params);
			var classes = (this.state.showSegments ? 'segments-active' : 'segments-inactive');

			return <IndexPage className={classes} handleShowSegment={this.handleShowSegment} handleHideSegment={this.handleHideSegment} />;
		}

	});
});
