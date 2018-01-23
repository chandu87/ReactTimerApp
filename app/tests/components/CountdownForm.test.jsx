var expect = require('expect');
var React = require('react');
var ReactDOM= require('react-dom');
var TestUtils=require('react-addons-test-utils');
var $= require('jQuery');

var CountdownForm= require('CountdownForm');

describe('CountdownForm',()=>{
  it('should exist',()=>{
    expect(CountdownForm).Exist;
  });
  it('should call onSetCountdown if valid seconds',()=>{
  var spy=expect.createSpy();
  var countdownForm=TestUtils.renderIntoDocument(<CountdownForm onSetCountDown={spy}/>);
  var $el=$(ReactDOM.findDOMNode(countdownForm));

  countdownForm.refs.seconds.value='109';
  TestUtils.Simulate.submit($el.find('form')[0]);

  expect(spy).toHaveBeenCalledWith(109);
  });
  it('should not call onSetCountdown if valid seconds',()=>{
  var spy=expect.createSpy();
  var countdownForm=TestUtils.renderIntoDocument(<CountdownForm onSetCountDown={spy}/>);
  var $el=$(ReactDOM.findDOMNode(countdownForm));

  countdownForm.refs.seconds.value='adv';
  TestUtils.Simulate.submit($el.find('form')[0]);

  expect(spy).toNotHaveBeenCalled();
  });
});
