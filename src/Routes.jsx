var React = require('react');
var ReactRouter = require('react-router');//actual package
var Router = ReactRouter.Router; // calling package and grabbing the router
var Route = ReactRouter.Route;//For specific pages
var Link = require('react-router').Link




var Base = require('./components/Base.jsx');
var News = require('./components/News.jsx');
var Photos = require('./components/Photos.jsx');



var Routes = (
    <Router >
      <Route path="/" component={Base}>
          <Route path="/news" component={News}/>
          <Route path="/photos" component={Photos}/>

      </Route>
    </Router>
);

module.exports = Routes;
