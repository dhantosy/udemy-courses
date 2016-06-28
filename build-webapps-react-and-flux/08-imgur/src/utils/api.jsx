var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = 'a337d1b51123e14';

module.exports = {
	get: function(url) {
		/* fetch make ajax request to imgur */
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Client-ID ' + apiKey
			}
		})
		/* when the request is complete, pass the below function - Called promises in JS */
		/* Use promises when it may take a long time to complete. like AJAX request */
		.then(function(response){
			/* call JSON to get data, because response does not contain any data */
			return response.json()
		})
		/* data object to work with */
		// .then(function(data){
		// 	console.log(data);
		// })
	}
};