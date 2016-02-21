var React = require('react');
var Link = require('react-router').Link;

var HeaderLinks = React.createClass({
  render: function() {
    return (
      <p>{this.props.text}</p>
    );

  }
});

module.exports = HeaderLinks;
