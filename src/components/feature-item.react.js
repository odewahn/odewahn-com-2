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
    return (
      <Card>
        <CardMedia overlay={<CardTitle title={this.props.data.title} subtitle="Subtitle"/>}>
          <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
        <CardText>
          {this.props.data.description}
        </CardText>
      </Card>
    );
  }
});
