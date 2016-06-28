var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	mixins: [
		// to listen to any event coming from TopicStore, and automatically onChange
		Reflux.listenTo(TopicStore, 'onChange')
	],
	getInitialState: function() {
		// Prevent error when topics is empty
		return {
			topics: []
		}
	},
	componentWillMount: function() {
		Actions.getTopics();
	},
	render: function() {
		return <div className="list-group">
			{this.renderTopics()}
		</div>
	},
	renderTopics: function() {
		{/* slice only to show the first four topic */}
		return this.state.topics.slice(0, 4).map(function(topic){
			{/* Create url link to navigate between pages */}
			return <Link to={"topics/" + topic.id} className="list-group-item" key={topic.id}>
				<h4>{topic.name}</h4>
				<p>{topic.description}</p>
			</Link>
		});
	},
	// whenever we set state, automatically rendered of the component
	onChange: function(event, topics) {
		this.setState({topics: topics});
	}
})
// whenever rendering list of objects thah have id, like topic, make sure we have --
// one on one mapping with the key, by using the id 