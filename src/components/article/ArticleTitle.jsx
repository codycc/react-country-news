var React = require('react');

var ArticleTitle = React.createClass({
  render: function() {
    return (
      <h4>{this.props.text}</h4>
    )

  }
});

module.exports = ArticleTitle;
