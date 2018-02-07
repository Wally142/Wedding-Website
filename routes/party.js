var router = require('express').Router();

var images = [
    {
        title: 'Gary Wallerus',
        picture: '../views/images/Gary.jpg',
        description: 'Get at this man',
    },
    {
        title: 'I Like Socializing',
        picture: '../views/images/Mike.jpg',
        description: 'Get at this man',
    },
    {
        title: 'I Like To Travel',
        picture: '../views/images/Peter.jpg',
        description: 'Get at this man',
    },
    {
        title: 'I Like to Gamble',
        picture: '../views/images/Seagull.jpg',
        description: 'Get at this man',
    }
];

router.get('/', function (req, res) {
    console.log('get accepted');
    res.send(images);
});

module.exports = router;