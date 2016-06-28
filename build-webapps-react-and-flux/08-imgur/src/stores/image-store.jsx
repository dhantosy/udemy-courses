var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');
var _ = require('lodash');

module.exports = Reflux.createStore({
	listenables: [Actions],
	getImages: function(topicId) {
		Api.get('topics/' + topicId)
		/* return promise */
		.then(function(json){
			// for every image in json data reject any image that is an album
			this.images = _.reject(json.data, function(image) {
				return image.is_album
			});

			this.triggerChange();
		}.bind(this));
	},
	getImage: function(id) {
		Api.get('gallery/image/' + id)
			.then(function(json){
				if (this.images) {
					this.images.push(json.data);
				} else {
					this.images = [json.data];
				}

				this.triggerChange();
			}.bind(this));
	},
	find: function(id) {
		// it takes a collection of data and finds object with property key id
		var image = _.findWhere(this.images, {id: id});
		// if image is found return the image, else issue another ajax request for this particular image/id
		if(image) {
			return image
		} else {
			this.getImage(id);
			return null
		}
	},
	triggerChange: function() {
		// when we trigger change, it also update this.topics data
		this.trigger('change', this.images);
	}
});