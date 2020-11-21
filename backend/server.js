/* eslint-disable no-console */
/**
 * Created by Piyush
 * Initial structure
 */

// REQUIRES
const express = require('express');
const routeResources = require('node-resources');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./config/database.config.js');
// application config
const envConfig = require('./config/env.config');

// Configuring the database
global.mongoose = require('mongoose');
global.async = require('async');
global.ResponseWrapper = require('./utils/ResponseWrapper');

// require static files

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Enable cors
app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());

// Require Notes routes
routeResources.registerRoutes(app, {
  path: `${__dirname}/resources/`,
  pattern: '[folder].routes.js',
});
app.use((req, res, next) => {
  res.status(405).send({
    status: 405,
    error: 'Method not allowed',
  });
  next();
});
// listen for requests
app.listen(envConfig[envConfig.current_env].port, () => {
  console.log(
    `Server is listening on port ${envConfig[envConfig.current_env].port}`,
  );
});

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(dbConfig[envConfig.current_env], {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((err) => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });
