var React = require('react');

var ArticleSubTitle = React.createClass({
  render: function() {
    return (
      <h5>{this.props.text}</h5>
    )

  }
});

module.exports = ArticleSubTitle;
