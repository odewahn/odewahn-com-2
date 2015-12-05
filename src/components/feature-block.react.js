var React = require('react');
var FeatureItem = require('./feature-item.react.js')

module.exports = React.createClass({
  render: function() {
    var featureItems = this.props.data.map(function(item){
      console.log(item);
      return (
        <div className="col-md-12">
          <div className="box">
            <FeatureItem data={item}/>
          </div>
        </div>
      )
    });
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div className="container-fluid">
          <div className="row">
            {featureItems}
          </div>
        </div>
      </div>
    );
  }
});
