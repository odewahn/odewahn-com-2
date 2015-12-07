var React=require('react');
var FeatureBlock = require('./feature-block.react');
var Featured=require('../../source/featured-items');
var AppBar = require('material-ui/lib/app-bar');

var ThemeManager = require('material-ui/lib/styles/theme-manager');
var LightRawTheme = require('material-ui/lib/styles/raw-themes/dark-raw-theme');
var Colors = require('material-ui/lib/styles/colors');

const FontIcon = require('material-ui/lib/font-icon');
const IconButton = require('material-ui/lib/icon-button');

var FontAwesome = require('react-fontawesome');

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
      primary1Color: Colors.grey400,
      canvasColor: Colors.grey700
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
            <div className="col-sm-2">
              <img className="headshot" src="images/headshot.jpg"/>
            </div>
            <div className="col-sm-10 bioText">
              <p>
                Hi!  I'm Andrew Odewahn, and I'm the CTO of O'Reilly Media.  My interests
                are in using technology to create new kinds of media, as well as DevOps and Microservices as
                tools for innovation and organizational change.  Currently, I'm into Docker, Go, and Carina.
              </p>
              <div className="social">
                <a href="https://github.com/odewahn">
                  <FontAwesome className='socialIcon' name='github-alt' size='2x' />
                </a>
                <FontAwesome className='socialIcon' name='twitter' size='3x' />
                <FontAwesome className='socialIcon' name='envelope' size='2x' />
              </div>


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
