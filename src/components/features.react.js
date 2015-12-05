var React=require('react');
var FeatureBlock = require('./feature-block.react');
var Speaking=require('../../source/speaking');
var Writing=require('../../source/writing');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <FeatureBlock title="Speaking and Presentations" data={Speaking} />
        <FeatureBlock title="Writing" data={Writing} />
      </div>
    )
  }
});
