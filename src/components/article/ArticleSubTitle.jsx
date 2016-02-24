var React = require('react');

var ArticleSubTitle = React.createClass({
  render: function() {

    var fontStyle = {
      fontWeight: 'lighter',

    };
    return (
      <h4 style={fontStyle }>{this.props.text}</h4>
    )
  }
});

module.exports = ArticleSubTitle;
