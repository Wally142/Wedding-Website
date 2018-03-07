const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const partyRouter = require('./routes/party');
const rsvpRouter = require('./routes/rsvp');
require('dotenv').config();
const request = require('request');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/party', partyRouter);
app.use('/rsvp', rsvpRouter);

app.listen(port, function() {
    console.log('listening on', port);
});
