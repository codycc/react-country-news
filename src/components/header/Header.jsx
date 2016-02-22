var React = require('react');
var HeaderTitle = require('./HeaderTitle.jsx');
var HeaderSubTitle = require('./HeaderSubTitle.jsx');
var Link = require('react-router').Link;


var Header = React.createClass({
  render: function(){

    var headerStyle = {
      height: 250,
      background: '#3D50B5',
      color:'white'
    };

    var linkStyle = {


    };


    return (

        <div style={headerStyle} className="header1">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="col-xs-8">
              <HeaderTitle text={this.props.title} />
              <HeaderSubTitle text={this.props.subtitle} />
            </div>

            <div className="col-xs-4">
                <h5><Link to="/photos">Photos</Link></h5>
                <h5><Link to="/news">News</Link></h5>
            </div>
          </div>
        </div>

    );

  }

});

module.exports = Header;
