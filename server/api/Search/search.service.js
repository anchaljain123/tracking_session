const Result = require('./search.model');

exports.saveResult = (results) => {
	return new Promise((resolve, reject) => {
		Result.insert(results, (err, data) => {
			if (err) reject({ error: err });
			else resolve(data);
		});
	});
};
