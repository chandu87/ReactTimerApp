var React= require('react');
var {Link,IndexLink}=require('react-router');

var Nav= ()=> {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">TimerApp</li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>
            <li>
              <Link to="/" activeClassName="active-link">CountDown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">

            <li className="menu-text">Createdby<a href="#">chandu</a>
            </li>

          </ul>

        </div>
      </div>
    );
  };

module.exports= Nav;
