const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', function (req, res) {
    let reserve = req.body;
    pool.connect(function (error, client, done) {
        if (error) {
            console.log(error);
            res.sendStatus(404);
        } else {
            const queryString = 'INSERT INTO wedding (name, guest, attend, meal, guestmeal) VALUES ($1, $2, $3, $4, $5);';
            let item = [reserve.name, reserve.guest, reserve.attend, reserve.meal, reserve.guestmeal];
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