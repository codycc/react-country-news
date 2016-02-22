var React = require('react');

var ArticleText = React.createClass({
  render: function() {

    var textStyle = {
      lineHeight:2,
    }
    return (
      <p style={textStyle}>{this.props.text}</p>
    )

  }
});

module.exports = ArticleText;
