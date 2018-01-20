var React=require('react');
var Nav = require('Navigation');

var Main= React.createClass({
  render:function(){
    return(
      <div>
        <Nav/>
          <div className="row">
            <div clasName="column small-centered medium-6 large-4">
              {this.props.children}
            </div>
          </div>
      </div>
    );
  }
});
module.exports = Main;
