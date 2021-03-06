require('./config/connect');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const constants  = require('./config/constant');
const appConfig = require('./config/appConfig');
//Routes
const userRoute = require('./api/Users/user.route');
const searchRoute = require('./api/Search/search.route');
const trackingRoute = require('./api/Tracking/tracking.route');


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// appConfig.appStarted(app);

app.use(userRoute);
app.use(searchRoute);
app.use(trackingRoute);

// API calls
// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

// app.post('/api/world', (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`,
//   );
// });

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));