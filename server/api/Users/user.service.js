const User = require('./user.model');

exports.saveUser = (userData, res) => {
	const newUser = new User(userData);
	var query = userData.email; //Extract title from input form
	// User.findOne({ email: query }, function (err, example) {
	// 	if (err) console.log(err);
	// 	if (example) {
	// 		return res.status(400).send({ error: "This has already been saved" });
	// 	}
		newUser.save(userData, (err, data) => {
			if (err) {
				res.send({ error: err });
			} else {
				res.send({ user: data });
			}
		});

	// })
};

exports.getUser = (userData, res) => {
	User.find(userData, (err, data) => {
		if (err) {
			res.send({ error: err });
		} else {
			if (data.length) {
				res.send(data[0]);
			} else {
				res.send({ error: 'user not found' })
			}
		}
	});
};
