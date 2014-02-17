define([
	'underscore',
	'react',
	'backbone',
	'lib/router'
], function(
	_,
	React,
	Backbone,
	Router
) {

	return {

		router         : null,
		routingStarted : false,
		nextId         : 1,

		componentDidMount : function()
		{
			this.initRouter();
		},

		getInitialState : function() {
			return {
				componentName : null,
				props         : null
			};
		},

		updatePage : function(routeMatch, params, routeOptions)
		{
			this.setState({
				componentName : routeMatch.target,
				params        : params,
				routeOptions  : routeOptions
			});
		},

		getUrl : function()
		{
			return location.href;
		},

		navigate : function(handler)
		{
			this.router.navigate.bind(this.router, callback, {
				trigger : true
			});
		},

		navigateBack : function()
		{
			window.history.go.bind(window.history, -1);
		},

		initRouter : function()
		{
			this._routes      = this.routes || {};
			this._routePrefix = this.routePrefix || '';

			if ( ! this.router)
			{
				this.router = new Router();
				this.router.createHistory();
			}

			window.app.eventBroker.on('router:match', _.bind(this.updatePage, this));

			_.each(this._routes, _.bind(function(data, name)
			{
				var component = data.component,
					_route    = data.route,
					options   = data.options;

				this.router.match(_route, name, component, options);
			}, this));

			this.router.startHistory();
		}
	};

});
