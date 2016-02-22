var React = require('react');
var PhotoCard = require('./photo/PhotoCard.jsx');


var Photos = React.createClass({
  render: function() {
    return (
        <div className="col-sm-offset-2">
        <PhotoCard image="./images/reactlogo.svg"/>
        </div>
    );
  }
});


module.exports =Photos;
