var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;
var partyRouter = require('./routes/party');
var rsvpRouter = require('./routes/rsvp');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/party', partyRouter);
app.use('/rsvp', rsvpRouter);

app.listen(port, function() {
    console.log('listening on', port);
});
