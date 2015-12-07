var React=require('react');
var FeatureBlock = require('./feature-block.react');
var Featured=require('../../source/featured-items');
var AppBar = require('material-ui/lib/app-bar');

var ThemeManager = require('material-ui/lib/styles/theme-manager');
var LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');
var Colors = require('material-ui/lib/styles/colors');

const FontIcon = require('material-ui/lib/font-icon');
const IconButton = require('material-ui/lib/icon-button');



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
      //primary1Color: Colors.deepOrange500,
      //canvasColor: Colors.deepOrange500,
    });
    this.setState({muiTheme: newMuiTheme});
  },

  render: function() {


    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <AppBar title="Andrew Odewahn" />
          </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
              <img className="headshot" src="images/headshot.jpg"/>
              <br/>
                <div className="social">
                  <i className="fa fa-github socialIcon"></i>
                  <i className="fa fa-twitter socialIcon"></i>
                  <i className="fa fa-envelope socialIcon"></i>
                </div>
            </div>
            <div className="col-sm-9 bioText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac velit nec risus iaculis consectetur eget et turpis. In hac habitasse platea dictumst. Aliquam dictum maximus sem vitae convallis. In sapien enim, fringilla tempus est non, hendrerit feugiat dolor. Phasellus ac convallis justo. Vestibulum quis dapibus quam. Sed gravida lectus in suscipit aliquam. Cras id metus ut orci consectetur suscipit eu sed arcu.




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
