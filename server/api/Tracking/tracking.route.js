const express = require('express');
const router = express.Router();
const trackingController = require('./tracking.controller');

router.post('/api/tracking/save', trackingController.storeSession);
router.post('/api/tracking/get', trackingController.getUserSession);

module.exports = router;
