/** @jsx React.DOM */
var chai      = require('chai');
var spies     = require('chai-spies');
var React     = require('react/addons');
var TestUtils = React.addons.TestUtils;

var expect = chai.expect;

chai.use(spies);

describe('UI\\Components\\Form\\Input', function() {
    var Input = require('../../../../../application/ui/components/form/input.jsx');

    var input, spy, tag;

    beforeEach(function() {
        spy = chai.spy();
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
        expect(spy).to.have.been.called();
    });
});
