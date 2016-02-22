var React = require('react');
var Article = require('./article/Article.jsx');
var Header = require('./header/Header.jsx');
var Link = require('react-router').Link;

var News = React.createClass({
  render: function() {


    return (

      <div className="col-sm-offset-2">
        <div className="articles">
            <Article
            profile = "./images/profileimage.png"
            title="TESTING TITLE 1"
            subtitle="TESTING SUBTITLE 1 "
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus
                  asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
            image="./images/reactlogo.svg"
           location="Toronto,Ontario"/>

           <Article
           profile = "./images/profileimage.png"
           title="TESTING TITLE 2"
           subtitle="TESTING SUBTITLE 2 "
           text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus
                 asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
           image="./images/reactlogo.svg"
          location="Toronto,Ontario"/>

        </div>
      </div>

    );
  }
});


module.exports =News;
