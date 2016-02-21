var React = require('react');
var HeaderTitle = require('./HeaderTitle.jsx');
var HeaderSubTitle = require('./HeaderSubTitle.jsx');
var HeaderLinks = require('./HeaderLinks.jsx');

var Header = React.createClass({
  render: function(){

    var headerStyle = {
      height: 250,
      background: '#3D50B5',
      color:'white'
    };


    return (

        <div style={headerStyle} className="header1">
        <div className="col-sm-8 col-sm-offset-2">
            <HeaderTitle text={this.props.title} />
            <HeaderSubTitle text={this.props.subtitle} />
            <HeaderLinks text={this.props.links} />
            </div>
        </div>

    );

  }

});

module.exports = Header;
