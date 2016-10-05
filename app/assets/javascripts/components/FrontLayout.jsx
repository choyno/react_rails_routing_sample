var FrontLayout = React.createClass({
  render: function() {
    return(
           <div>
             <ul>
               <li><Link to="/home">Home</Link></li>
               <li><Link to="/about">About</Link></li>
             </ul>
             {this.props.children}
           </div>
          )
  }
});

var ready = function () {
  if($("#react-container").length >= 1){
    ReactDOM.render(
      <Router  history={appHistory}>
        <Route path="/" component={FrontLayout}>
        <IndexRoute component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        </Route>
      </Router>,
      document.getElementById('react-container')
    );
  }else{}
};

$(document).ready(ready);



