/* jshint globalstrict: true */
'use strict';

var React = require('react');

module.exports = React.createClass ({

    displayName : 'Grid',

    render : function()
    {
        return (
        <div className='pl-page'>
          <h1 className='pl-h1'>Grid</h1>
            <div className="row display">
              <div className="small-2 large-4 columns"><span className="hide-for-large">2</span><span className="show-for-large">4</span></div>
              <div className="small-4 large-4 columns">4</div>
              <div className="small-6 large-4 columns"><span className="hide-for-large">6</span><span className="show-for-large">4</span></div>
            </div>
            <div className="row display">
              <div className="large-3 columns"><span className="hide-for-large">full</span><span className="show-for-large">3</span></div>
              <div className="large-6 columns"><span className="hide-for-large">full</span><span className="show-for-large">6</span></div>
              <div className="large-3 columns"><span className="hide-for-large">full</span><span className="show-for-large">3</span></div>
            </div>
            <div className="row display">
              <div className="small-6 large-2 columns"><span className="hide-for-large">6</span><span className="show-for-large">2</span></div>
              <div className="small-6 large-8 columns"><span className="hide-for-large">6</span><span className="show-for-large">8</span></div>
              <div className="small-12 large-2 columns"><span className="hide-for-large">full</span><span className="show-for-large">2</span></div>
            </div>
            <div className="row display">
              <div className="small-3 columns">3</div>
              <div className="small-9 columns">9</div>
            </div>
            <div className="row display">
              <div className="large-4 columns"><span className="hide-for-large">full</span><span className="show-for-large">4</span></div>
              <div className="large-8 columns"><span className="hide-for-large">full</span><span className="show-for-large">8</span></div>
            </div>
            <div className="row display">
              <div className="small-6 large-5 columns"><span className="hide-for-large">6</span><span className="show-for-large">5</span></div>
              <div className="small-6 large-7 columns"><span className="hide-for-large">6</span><span className="show-for-large">7</span></div>
            </div>
            <div className="row display">
              <div className="large-6 columns"><span className="hide-for-large">full</span><span className="show-for-large">6</span></div>
              <div className="large-6 columns"><span className="hide-for-large">full</span><span className="show-for-large">6</span></div>
            </div>
          </div>
        );
    }
});