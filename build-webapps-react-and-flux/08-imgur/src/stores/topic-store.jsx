var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
	// trigger actions will get topics
	// Implemented by reflux
	listenables: [Actions],
	/* getTopics bind data to topics */
	getTopics: function() {
		/* return promise */
		return Api.get('topics/defaults')
		.then(function(json){
			// when ajax is complete, we get json data and save to this.topics
			this.topics = json.data;
			this.triggerChange();
		}.bind(this));
	},
	triggerChange: function() {
		// when we trigger change, it also update this.topics data
		this.trigger('change', this.topics);
	}
});