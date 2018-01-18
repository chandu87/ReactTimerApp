var React=require('react');
var Nav = require('Navigation');

var Main= React.createClass({
  render:function(){
    return(
      <div>
          <div>
            <div>
              <Nav/>
              <p>Main.jsx file</p>
              {this.props.children}
            </div>
          </div>
      </div>
    );
  }
});
module.exports = Main;
