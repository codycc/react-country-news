var React = require('react');

var ArticleProfile = React.createClass({
  render: function() {

    var imageStyle = {
      height:80,
      margin: 15,
    };
    return (
      <img style={imageStyle} src={this.props.img_src} />
    );

  }
});

module.exports = ArticleProfile;
