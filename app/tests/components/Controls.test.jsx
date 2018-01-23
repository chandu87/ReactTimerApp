var React= require('react');
var expect= require('expect');
var ReactDOM=require('react-dom');
var $=require('jQuery');
var TestUtils= require('react-addons-test-utils');


var Controls= require('Controls');

describe('Controls',()=>{
  it('should exist',()=>{
    expect(Controls).toExist();
  });

  describe('render of button start and pause',()=>{
    it('should render pause when started',()=>{
      var controls= TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pausebutton= $el.find('button:contains(Pause)');

      expect(controls.props.countdownStatus).toBe("started");
      expect($pausebutton.length).toBe(1);
    });
    it('should render start button when paused',()=>{
      var controls=TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      var $el=$(ReactDOM.findDOMNode(controls));
      var $startButton= $el.find('button:contains(Start)')

      expect($startButton.length).toBe(1);
    });


  });

});
