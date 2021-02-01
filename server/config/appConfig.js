require('./connect');

const userRoute = require('../api/Users/user.route');
const searchRoute = require('../api/Search/search.route');
const trackingRoute = require('../api/Tracking/tracking.route');

module.exports.appStarted = (app) => {
  app.use([userRoute, searchRoute]);
  app.use(trackingRoute);
	/*   app.use((req, res, next)=>{
    res.status(404).send('404_error_template', {title: "Sorry, page not found"});
  });*/
};
