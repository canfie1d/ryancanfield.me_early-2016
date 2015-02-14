'use strict';
// Ensure that chai accepts should-style assertions and is integrated with sinon.
var chai      = require('chai');
var sinonChai = require('sinon-chai');

chai.should();
chai.use(sinonChai);

require('./globals');

// Require all modules ending in '-test'
var context = require.context('.', true, /\-test$/);

context.keys().forEach(context);