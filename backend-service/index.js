const winston = require('winston');
const express = require('express');

const app = express();
const gtfs = require('gtfs');

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

// Get a specific agency by `agency_name`
gtfs
  .getAgencies({
    agency_name: 'GO Transit'
  })
  .then(agencies => console.log(agencies));

const port = process.env.PORT || 9000;
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}...`)
);

module.exports = server;
