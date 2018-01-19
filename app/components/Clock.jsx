var React= require('react');

var Clock= React.createClass({
formatseconds: function(totalseconds){
  var seconds= totalseconds%60;
  var minutes= Math.floor(totalseconds/60);

  if(seconds<10){
    seconds='0'+seconds;
  }
  if(minutes<10){
    minutes='0'+minutes;
  }

  return minutes +':' + seconds;

},
  render:function(){
    return(
      <div>

      </div>
    );
  }
});

module.exports= Clock;
