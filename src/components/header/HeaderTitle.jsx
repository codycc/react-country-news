var React = require('react');

var HeaderTitle = React.createClass({
  render: function() {
    return (
      <h1>{this.props.text}</h1>
    )

  }
});

module.exports = HeaderTitle;
