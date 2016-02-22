var React = require('react');
var ArticleTitle = require('./ArticleTitle.jsx');
var ArticleSubTitle = require('./ArticleSubTitle.jsx');
var ArticleText = require('./ArticleText.jsx');
var ArticleLocation = require('./ArticleLocation.jsx');
var ArticleImage = require('./ArticleImage.jsx');

var Article = React.createClass({
  render: function(){



    var photoStyle = {
      margin: 15


    };


    return (
      <div  className="col-sm-10">
        <div  className = "panel panel-default">
            <div className = "panel-body">
            <div className="col-xs-2"></div>
                <div className="col-xs-8">
                    <ArticleTitle text={this.props.title} />
                    <ArticleSubTitle text={this.props.subtitle} />
                    <ArticleText text={this.props.text} />
                    <div  className="photos">
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
