const trackingService = require('./tracking.service');

exports.storeSession = (req, res, next) => {
    trackingService.storeSession(req.body, res);
};

exports.getUserSession = (req, res, next) => {
    trackingService.getUserSession(req.body, res);
};

