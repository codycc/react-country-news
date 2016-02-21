var React = require('react');
var ArticleTitle = require('./ArticleTitle.jsx');
var ArticleSubTitle = require('./ArticleSubTitle.jsx');
var ArticleText = require('./ArticleText.jsx');

var Article = React.createClass({
  render: function(){

    var articleStyle = {
      height:300,
    };
    
    return (
      <div  className="col-sm-10">
        <div style={articleStyle} className = "panel panel-default">
            <div className = "panel-body">
            <div className="col-xs-2"></div>
                <div className="col-xs-10">
                  <ArticleTitle text={this.props.title} />
                  <ArticleSubTitle text={this.props.subtitle} />
                  <ArticleText text={this.props.text} />
                </div>
            </div>
        </div>
        </div>

    );

  }

});

module.exports = Article;
