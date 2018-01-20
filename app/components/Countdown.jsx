var React= require('react');
var Clock=require('Clock');

var Countdown= () => {
  return(
    <div>
      <Clock totalseconds={92}/>
    </div>
  );
};

module.exports= Countdown;
