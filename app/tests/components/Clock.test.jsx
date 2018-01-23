var React= require('react');
var ReactDOM=require('react-dom');
var expect=require('expect');
var $= require('jQuery');
var TestUtils= require('react-addons-test-utils');

var Clock= require('Clock');

describe('clock',()=>{
  it('should exist',()=>{
    expect('Clock').toExist();
  });
  it('it should render clock to output',()=>{
    var clock=TestUtils.renderIntoDocument(<Clock totalseconds={62}/>);
    var $el = $(ReactDOM.findDOMNode(clock));
    var actualtext= $el.find('.clock-text').text();
     expect(actualtext).toBe('01:02');
  });
});

describe('formatseconds',()=>{
      it('should format seconds',()=>{
      var clock=TestUtils.renderIntoDocument(<Clock/>);
      var seconds= 615;
      var expected='10:15';
      var actual=clock.formatseconds(seconds);

      expect(actual).toBe(expected);
        });
      it('should format seconds when min/sec less than 10',()=>{
        var clock=TestUtils.renderIntoDocument(<Clock/>);
        var seconds= 61;
        var expected='01:01';
        var actual=clock.formatseconds(seconds);

        expect(actual).toBe(expected);
      });
});
