'use strict';

exports = module.exports = function(models) {
	return {
		update: require('./update')(models),
		verify: require('./verify')(models),
		saveRememberMeToken: require('./remember')(models)
	};
};
