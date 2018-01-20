var React= require('react');

var Clock= React.createClass({
  getDefaultProps: function(){
    totalseconds : 0
  },
  propTypes:function(){
    totalseconds : React.PropTypes.number
  },
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
    var {totalseconds}= this.props;
    return(
      <div className="clock">
        <span className="clock-text">
          {this.formatseconds(totalseconds)}
        </span>
      </div>
    );
  }
});

module.exports= Clock;
