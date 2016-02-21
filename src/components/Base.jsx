var React = require('react');
var Header = require('./header/Header.jsx');
var Link = require('react-router').Link;

var Base = React.createClass({
  render: function(){


    var articlesStyle =  {
      marginTop:-80
    };

    return (
            <div className="website">

              <div className="row">
                <div className="articleshome">
                  <Header title="Country News" subtitle="Top stories in my country" links="sdfsdf"/>
                </div>
              </div>


              <div style={articlesStyle} className="row">
                  {this.props.children}
              </div>



          </div>




    );
  }
});

module.exports = Base;
