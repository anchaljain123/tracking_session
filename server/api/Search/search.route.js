const express = require('express');
const router = express.Router();
const constants = require('../../config/constant');
const searchController = require('./search.controller');
const request = require('superagent');

router.get('/cb', (req, res) => {
	const { query } = req;
	const { code } = query;

	if (!code) {
		res.send({ err: 'no code' });
	} else {
		request
			.post('https://github.com/login/oauth/access_token')
			.send({
				client_id: constants.CLIENTID,
				client_secret: constants.SECRETKEY,
				code: code,
			})
			.set('Accept', 'application/json')
			.then(function(result) {
				const data = result.body;
                // save accesstoken 
                // then codes api is hit
                const accessToken = data.access_token;
             
				return request
					.get(
						'https://api.github.com/search/code?q=addClass+in:file+language:js+repo:jquery/jquery&page=1&per_page=100'
					) // get query from param
					.set('Authorization', 'token' + accessToken);
			})
			.then((result) => {
                //return searchController.saveResult(result.body.items, res);  
            })
            .then(data => {
                console.log('>>', data, '=========data');
				res.redirect('/dashboard');
            })
			.catch((err) => res.send(err));
	}
});

module.exports = router;
