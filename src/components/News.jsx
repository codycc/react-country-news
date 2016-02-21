var React = require('react');
var Article = require('./article/Article.jsx');
var Header = require('./header/Header.jsx');
var Link = require('react-router').Link;

var News = React.createClass({
  render: function() {


    return (

      <div className="col-sm-offset-2">
        <div className="articles">
            <Article title="hello" subtitle="hello1" text="helloo3"/>
            <Article title="hello2" subtitle="hello2" text="helloo4"/>
        </div>
      </div>

    );
  }
});


module.exports =News;
