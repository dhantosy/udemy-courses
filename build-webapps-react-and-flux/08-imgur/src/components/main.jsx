var React = require('react');
var Header = require('./header');
var TopicList = require('./topic-list');

/* Debug rendering */
var renderCount = 0;

module.exports = React.createClass({

	render: function() {
		return <div>
			<Header />
			{this.content()}
		</div>
	},
	content: function() {
		if(this.props.children) {
			return this.props.children
		} else {
			return <TopicList />
		}
	}
});

/* content function */
// root view only match with main.jsx
// check if there is children to render
// in routes, only render main.jsx