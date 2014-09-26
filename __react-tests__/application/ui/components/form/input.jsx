/* @jsx React.DOM */
/* globals describe, it */
/*jshint expr: true*/
'use strict';

var _         = require('underscore');
var chai      = require('chai');
var React     = require('react/addons');
var sinon     = require('sinon');
var sinonChai = require('sinon-chai');
var TestUtils = React.addons.TestUtils;

var expect = chai.expect;

chai.should();
chai.use(sinonChai);

describe('Application\\UI\\Components\\Form\\Input', function() {
    var Input = require('../../../../../application/ui/components/form/input.jsx');

    var input, spy, tag;

    beforeEach(function() {
        spy = sinon.spy();
        tag = TestUtils.renderIntoDocument(
            <Input onChange={spy} value={'test'} />
        );

        input = TestUtils.findRenderedDOMComponentWithTag(tag, 'input');
    });

    it('sets default value', function() {
        expect(input.getDOMNode().value).to.equal('test');
    });

    it('calls onChange function', function() {
        TestUtils.Simulate.change(input);

        expect(spy.called);
    });
});
