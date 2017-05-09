var React = require('React');
var {Link,IndexLink} = require('react-router');
var Navigation=React.createClass({
  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer
            </li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
            </li>

            <li>
              <Link to="/" activeClassName="active-link">Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="http://github.com/bhdy7030" target="_blank">bhdy7030</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = Navigation
