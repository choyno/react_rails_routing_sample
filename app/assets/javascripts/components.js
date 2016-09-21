
//= require_self
//= require react_ujs

React    = require('react');
ReactDOM  = require('react-dom');
ReactRouter  = require('react-router');

/* using global variables, create prefix for react-router */
Router      = ReactRouter.Router;
Route       = ReactRouter.Route;
IndexRoute  = ReactRouter.IndexRoute;
IndexLink   = ReactRouter.IndexLink;
Link        = ReactRouter.Link;

useRouterHistory = require("react-router/lib/useRouterHistory");
createHashHistory = require("react-router/node_modules/history/lib/createHashHistory");  //npm install -S history
appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

//= require components/app
var Home = require("./components/Home.jsx");
var About = require("./components/About.jsx");
