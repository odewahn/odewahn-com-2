var React=require('react');
var FeatureBlock = require('./feature-block.react');
var Featured=require('../../source/featured-items');
var AppBar = require('material-ui/lib/app-bar');

var ThemeManager = require('material-ui/lib/styles/theme-manager');
var LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
var Colors = require('material-ui/lib/styles/colors');

/*
Example of how to render colors and styles:

* https://github.com/callemall/material-ui/blob/master/examples/browserify-gulp-example/src/app/components/main.jsx
* http://www.material-ui.com/#/customization/themes

*/
 

module.exports = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext: function() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  getInitialState: function() {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
    };
  },
  componentWillMount: function() {
    console.log("mounting component")
    var newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      primary1Color: Colors.deepOrange500,
      //canvasColor: Colors.deepOrange500,
    });
    this.setState({muiTheme: newMuiTheme});
  },

  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <AppBar title="Andrew Odewahn" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
              <FeatureBlock title="Speaking and Writing" data={Featured} />
          </div>
        </div>
      </div>
    )
  }
});
