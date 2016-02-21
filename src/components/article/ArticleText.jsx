var React = require('react');

var ArticleText = React.createClass({
  render: function() {
    return (
      <p>{this.props.text}</p>
    )

  }
});

module.exports = ArticleText;
