var React = require('react');

var ArticleLocation = React.createClass({
  render: function() {

    locationStyle = {
      fontWeight: 'normal',
      color:'grey'
    };
    return (
      <h3 style={locationStyle}>{this.props.text}</h3>
    )
  }
});

module.exports = ArticleLocation;
