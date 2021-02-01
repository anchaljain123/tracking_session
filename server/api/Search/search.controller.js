const searchService = require('./search.service');

exports.saveResult = (result) => {
	return new Promise((resolve, reject) => {
		searchService.saveResult(result).then((data) => resolve(data)).catch((err) => reject(err));
	});
};
