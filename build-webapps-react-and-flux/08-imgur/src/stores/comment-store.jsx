var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
	listenables: [Actions],
	getImage: function(id) {
		Api.get('gallery/' + id + '/comments')
			.then(function(json){

				this.comment = json.data;
				this.triggerChange();
				
			}.bind(this));
	},
	triggerChange: function() {
		// when we trigger change, it also update this.topics data
		this.trigger('change', this.comment);
	}
});