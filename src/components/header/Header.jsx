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
      float: 'right',
      fontSize: 30,



    };

    var textStyle = {
      color: 'white',
      textDecoration: 'none',

    };

    var listStyle = {
      listStyleType: 'none',
      textAlign: 'right',
      position: 'relative',
      top:60,
      right: -30
    };
    var photoStyle = {
      height: 30

    }


    return (

        <div style={headerStyle} className="header1">
          <div className="col-xs-8 col-sm-offset-2">
            <div className="col-xs-8">
            <div className="row">
              <HeaderTitle text={this.props.title} />
            
              </div>
              <div className="row">
              <HeaderSubTitle text={this.props.subtitle} />
              </div>
            </div>

            <div className="col-xs-4">
                <div style={linkStyle}className="links">
                  <ul style={listStyle}>
                    <li><Link style={textStyle} to="/news">NEWS</Link></li>
                    <li><Link style={textStyle} to="/photos">PHOTOS</Link></li>
                  </ul>
                </div>
            </div>
          </div>
        </div>

    );

  }

});

module.exports = Header;
