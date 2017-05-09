var React = require('react');
var Navigation = require('Navigation');

// var Main = React.createClass({
//   render: function(){
//     return (
//       <div>
//         <Nav/>
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props)=>{
  return (
    <div>
      <Navigation/>
      <div >
        <div>
          <p>Main.jsx rendered</p>
          {props.children}
        </div>

      </div>


    </div>
  );
}

module.exports = Main;
