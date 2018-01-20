var React= require('react');
var Clock=require('Clock');
var CountdownForm=require('CountdownForm');

var Countdown= React.createClass({
  getInitialState:function(){
    return{ count :0};
  },
  handleSetCountDown:function(seconds){
    this.setState({count:seconds});

  },
  render:function(){
    var {count}= this.state;
    return(
      <div>
        <Clock totalseconds={count}/>
        <CountdownForm onSetCountDown={this.handleSetCountDown}/>

      </div>
    );
  }
});

module.exports= Countdown;
