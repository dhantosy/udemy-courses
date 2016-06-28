var Reflux = require('reflux');

module.exports = Reflux.createActions([
	// When we run getTopics, its going to call any store in this action
	'getTopics',
	'getImages',
	'getImage'
]);
