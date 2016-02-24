var React = require('react');
var ArticleTitle = require('./ArticleTitle.jsx');
var ArticleSubTitle = require('./ArticleSubTitle.jsx');
var ArticleText = require('./ArticleText.jsx');
var ArticleLocation = require('./ArticleLocation.jsx');
var ArticleImage = require('./ArticleImage.jsx');
var ArticleProfile = require('./ArticleProfile.jsx');

var Article = React.createClass({
  render: function(){

    return (
      <div  className="col-sm-10">
        <div  className = "panel panel-default">
            <div className = "panel-body">
            <div className="col-xs-2">
              <ArticleProfile img_src={this.props.profile}/>
            </div>
                <div className="col-xs-8">
                    <ArticleTitle text={this.props.title} />
                    <ArticleSubTitle text={this.props.subtitle} />
                    <ArticleText text={this.props.text} />
                <div className="photos">
                    <ArticleImage img_src={this.props.image}/>
                    <ArticleImage  img_src={this.props.image}/>
                </div>
                    <ArticleLocation text={this.props.location}/>

                </div>
            </div>
        </div>
        </div>

    );

  }

});

module.exports = Article;
