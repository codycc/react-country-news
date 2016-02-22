var React = require('react');

var ArticleImage = React.createClass({
  render: function() {

    var imageStyle = {
      height:80,
      margin: 5,
    };

    return (
      <img style={imageStyle} src={this.props.img_src} />
    );

  }
});

module.exports = ArticleImage;
