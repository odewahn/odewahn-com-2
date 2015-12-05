var React=require('react');
var FeatureBlock = require('./feature-block.react');
var Speaking=require('../../source/speaking');
var Writing=require('../../source/writing');

module.exports = React.createClass({
  render: function() {
    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
              <FeatureBlock title="Speaking and Presentations" data={Speaking} />
          </div>
          <div className="col-md-6">
              <FeatureBlock title="Writing" data={Writing} />
          </div>
        </div>
      </div>

    )
  }
});
