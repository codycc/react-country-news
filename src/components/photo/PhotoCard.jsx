var React = require('react');
var Photo = require('./Photo.jsx');

var PhotoCard = React.createClass({
  render: function() {

    var cardStyle = {
      paddingLeft: 35


    };

    return (
      <div  className="col-sm-10">
        <div  className = "panel panel-default">
          <div className = "panel-body">
          <div style={cardStyle} className="photos-">
            <div className="row">
              <div className="col-xs-12">
                  <Photo img_src={this.props.image}/>
                  <Photo img_src={this.props.image}/>
                  <Photo img_src={this.props.image}/>
                  <Photo img_src={this.props.image}/>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12">
                    <Photo img_src={this.props.image}/>
                    <Photo img_src={this.props.image}/>
                    <Photo img_src={this.props.image}/>
                    <Photo img_src={this.props.image}/>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    );

  }
});

module.exports = PhotoCard;
