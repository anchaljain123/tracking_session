const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

router.post('/api/checkUser', userController.getUser);
router.post('/api/saveUser', userController.saveUser);
router.get('/api/logout', (req, res) => {
	res.redirect('/');
});
router.get('/api/fetchUser', userController.fetchUser);


module.exports = router;
