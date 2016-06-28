var React = require('react');
var ReactRouter = require('react-router');
/* Object that tells the router what page the user in currently */
var HashHistory = require('react-router/lib/hashhistory');
/* Decide what content to show on the page */
var Router = ReactRouter.Router;
/* Object that used to configure Router */
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Topic = require('./components/topic');
var ImageDetail= require('./components/image-detail');

module.exports = (
	/* React router use '#' as the main navigation history */
	<Router history={new HashHistory}>
		<Route path="/" component={Main}>
			{/* declare url parameter with double colon and the name of the parameter  */}
			<Route path="topics/:id" component={Topic} />
			<Route path="images/:id" component={ImageDetail} />
		</Route>
	</Router>
)