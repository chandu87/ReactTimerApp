var React= require('react');
var Clock= require('Clock');
var Controls= require('Controls');

var Timer = React.createClass({
  getInitialState:function(){
    return{
      count:0,
      timerStatus:"paused"
    };
  },
  componentDidUpdate:function(prevProps,prevState){
    if(this.state.timerStatus!== prevState.timerStatus)
    {
      switch(this.state.timerStatus){
        case "started":
        this.setTimer();
        break;
        case "stopped":
        this.setState({count:0});
        case "paused":
        clearInterval(this.timer);
        this.timer=undefined;
        break;
      }
    }

  },
  componentWillUnmount:function(){
    clearInterval(this.timer);
  },
  setTimer:function(){
      this.timer=setInterval(()=>{
      var newCount = this.state.count + 1;
      this.setState({count:newCount>0? newCount : 0});
      },
      1000);
  },
  handleStatusChange:function(newStatus){
    this.setState({
      timerStatus : newStatus
    });
  },
  render:function(){
    var {count,timerStatus}= this.state;
    return(
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalseconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports=Timer;
