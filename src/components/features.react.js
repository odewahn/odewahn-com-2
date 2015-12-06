var React=require('react');
var FeatureBlock = require('./feature-block.react');
var Featured=require('../../source/featured-items');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
              <FeatureBlock title="Speaking and Writing" data={Featured} />
          </div>
        </div>
      </div>
    )
  }
});

/*
<div className="row">
  <div className="col-md-12">
      <FeatureBlock title="Writing" data={Writing} />
  </div>
</div>
*/

/*
Example of how to render colors and styles
https://github.com/callemall/material-ui/blob/master/examples/browserify-gulp-example/src/app/components/main.jsx
*/
