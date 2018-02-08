var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

router.post('/', function (req, res) {
    console.log('in router post', req.body);
    var text = req.body.comments;
    var userId = req.user.id;
    var happy = req.body.id;
    pool.connect(function (error, client, done) {
        if (error) {
            console.log(error);
            res.sendStatus(404);
        } else {
            var queryString = 'INSERT INTO comments (comments, user_id, location_id) VALUES ($1, $2, $3);';
            var item = [text, userId, happy];
            client.query(queryString, item, function (queryErr, resultObj) {
                done();
                if (queryErr) {
                    console.log(queryErr)
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });
        }
    });
});// end post

module.exports = router;