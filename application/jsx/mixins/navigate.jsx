/** @jsx React.DOM */
define([
	'react',
	'backbone',
	'templates/layout/internal',
	'templates/mixins/navigate'
], function(
	React,
	Backbone,
	InternalLayoutTemplate,
	navigateMixin
) {

	var isExternalLink = function(link)
	{
		if (link.hasAttribute('target') && link.getAttribute('target') === '_blank')
			return true;

		if (link.hasAttribute('rel') && link.getAttribute('rel') === 'external')
			return true;

		if (link.protocol !== 'http:' && link.protocol !== 'https:' && link.protocol !== 'file:')
			return true;

		if (link.hostname !== location.hostname && link.hostname !== '')
			return true;

		return false;
	};

	return {

		navigate : function(event)
		{
			var target   = event.currentTarget,
				isAnchor = target.nodeName === 'A',
				external = isExternalLink(target);

			if ( ! isAnchor)
				return;

			var href = target.getAttribute('href') || target.getAttribute('data-href') || null;

			if ( ! href || href === '' || href.charAt(0) === '#')
				return;

			if (isAnchor && external)
			{
				event.preventDefault();
				window.open(href);
				return;
			}

			Backbone.history.navigate(href, {trigger: true});

			event.preventDefault();
		}

	};
});
