#!/usr/bin/env node

'use strict';

require('node-jsx').install({extension: '.jsx'});

var routes = require('./application/ui/routes');
var _      = require('underscore');
var Router = require('synapse-common').lib.Router;

var router = new Router();
_.each(routes, function(data, name)
{
    var component = data.component,
        _route    = data.route,
        options   = data.options;

    router.match(_route, name, component, options);
});

// http://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript
function cartesianProductOf() {
    return _.reduce(arguments, function(a, b) {
        return _.flatten(_.map(a, function(x) {
            return _.map(b, function(y) {
                return x.concat([y]);
            });
        }), true);
    }, [ [] ]);
}

var urls = [];

_.each(routes, function(route, name) {
    if (name === '*unknown') {
        return;
    }

    if (route.options.constraints) {
        var constraints = {},
            constraintsValid = true;

        _.each(route.options.constraints, function(constraint, constraintName) {
            var constraintText = constraint.toString()
                .replace('/^(', '')
                .replace(')$/', '')
                .replace('/(', '')
                .replace(')/', '')
                .replace('$/', '');

            // Try to get the groups out
            var options = constraintText.split('|'),
                allOptionsValid = true;

            _.each(options, function(option) {
                if ( ! constraint.test(option)) {
                    allOptionsValid = false;
                }
            });

            constraints[constraintName] = options;

            if ( ! allOptionsValid) {
                constraintsValid = false;
            }
        });

        if ( ! constraintsValid) {
            console.log('skipping ' + name + ' due to unparseable constraints');
            return;
        }

        var cartProd = cartesianProductOf.apply(null, _.values(constraints));

        _.each(cartProd, function(match) {
            urls.push(router.reverse(name, match));
        });

    } else {
        urls.push('/' + route.route);
    }
});

var baseUrl = 'http://www.example.com';
var sitemap = '<?xml version="1.0" encoding="UTF-8"?>';
sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
sitemap += "\n";

_.each(urls, function(url) {
    sitemap += "\t";
    // @todo make this a current date instead of a hard-coded date
    sitemap += '<url><loc>' + baseUrl + url + '</loc><lastmod>2014-04-25</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>';
    sitemap += "\n";
});

sitemap += '</urlset>';

console.log(sitemap);
