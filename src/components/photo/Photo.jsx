var React = require('react');

var Photo = React.createClass({
  render: function() {

    var imageStyle = {
      height:170,
      margin: 10,
    };

    return (
      <img style={imageStyle} src={this.props.img_src} />
    );

  }
});

module.exports = Photo;
