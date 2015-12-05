var React = require('react');
var marked = require('marked');

const Card = require('material-ui/lib/card/card');
const CardHeader = require('material-ui/lib/card/card-header');
const CardTitle = require('material-ui/lib/card/card-title');
const CardText = require('material-ui/lib/card/card-text');
const CardActions = require('material-ui/lib/card/card-actions');
const CardMedia = require('material-ui/lib/card/card-media');

module.exports = React.createClass({
  render: function() {
    /*
    function getImage(s) {
      return s || ;
    }
    */
    return (
      <Card>
        <CardMedia overlay={<CardTitle title={this.props.data.title} subtitle={this.props.data.description} />}>
          <img src={this.props.data.image || "http://lorempixel.com/600/337/nature/" }/>
        </CardMedia>
      </Card>
    );
  }
});
