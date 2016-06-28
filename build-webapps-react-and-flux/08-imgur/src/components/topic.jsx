var React = require('react');
var Actions = require('../actions');
var imageStore = require('../stores/image-store');
var Reflux = require('reflux');
var ImagePreview = require('./image-preview');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(imageStore, 'onChange')
	],
	getInitialState: function() {
		return {
			images: []
		}
	},
	// when component first rendered in DOM, componentWillMount function will run
	// and going to fetch all the parameter with the id
	// when user click on the link, it will rerender this whole component, it doesnt get removed from the DOM
	// But it get a set of new properties
	componentWillMount: function() {
		Actions.getImages(this.props.params.id);
	},
	// when it get a new properties, react will call componentWillReceiveProps and pass the next properties
	// we need to getImages again to rerender and fetch the data when user click different topic
	componentWillReceiveProps: function(nextProps) {
		Actions.getImages(nextProps.params.id);
	},
	render: function() {
		return <div className="topic">
			{this.renderImages()}
		</div>
	},
	renderImages: function() {
		return this.state.images.slice(0, 20).map(function(image) {
			return <ImagePreview key={image.id} {...image} />
		});
	},
	onChange: function(event, images) {
		this.setState({images: images})
	}
})