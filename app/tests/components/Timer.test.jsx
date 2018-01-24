var expect= require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils=require('react-addons-test-utils');

var Timer=require('Timer');

describe('Timer',()=>{
  it('Should exist',()=>{
    expect(Timer).toExist();
  });
  it('should start timer on started status',(done)=>{
    var timer= TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange("started");
    setTimeout(()=>{
      expect(timer.state.count).toBe(1);
      done();
    },1001);
  });
  it('should pause timer on paused status',(done)=>{
    var timer=TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count:9});
    timer.handleStatusChange("started");
    timer.handleStatusChange("paused");

    setTimeout(()=>{
      expect(timer.state.count).toBe(9);
      expect(timer.state.timerStatus).toBe("paused");
      done();
    },1001);

  });
  it('should stop timer on stopped status and clear count',(done)=>{
    var timer= TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count:34});
    timer.handleStatusChange("started");
    timer.handleStatusChange("stopped");

    setTimeout(()=>{
      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe("stopped");
      done();
    },1001);


  });

});
