var expect= require('expect');
var React= require('react');
var ReactDOM=require('react-dom');
var $ = require('jQuery');
var TestUtils= require('react-addons-test-utils');

var Countdown= require('Countdown');

describe('Countdown',()=>{
  it('Countdown should exist',()=>{
    expect(Countdown).toExist();
  });
    describe('handlesetcountdown',()=>{
        it('countdown status should change and count should update',(done)=>{
          var countdown=TestUtils.renderIntoDocument(<Countdown/>);
          countdown.handleSetCountDown(9);

          expect(countdown.state.count).toBe(9);
          expect(countdown.state.countdownStatus).toBe('started');

          setTimeout(()=>{
            expect(countdown.state.count).toBe(8);
            done();
          },1001);
        });
        it('count should not be negative',(done)=>{
          var countdown=TestUtils.renderIntoDocument(<Countdown/>);
          countdown.handleSetCountDown(1);
          setTimeout(()=>{
            expect(countdown.state.count).toBe(0);
            done();
          },2001);
        });
        it('count should be paused',(done)=>{
          var countdown=TestUtils.renderIntoDocument(<Countdown/>);
          countdown.handleSetCountDown(3);
          countdown.handleStatusChange("paused");

          setTimeout(()=>{
            expect(countdown.state.count).toBe(3);
            expect(countdown.state.countdownStatus).toBe("paused");
            done();
          },1001);
        });
        it('count should zero and status to be stopped',(done)=>{
          var countdown = TestUtils.renderIntoDocument(<Countdown/>);
          countdown.handleSetCountDown(3);
          countdown.handleStatusChange("stopped");

          setTimeout(()=>{
            expect(countdown.state.countdownStatus).toBe("stopped");
            expect(countdown.state.count).toBe(0);
            done();
          },1001);

        });
    });

});
