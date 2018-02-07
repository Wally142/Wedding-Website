var router = require('express').Router();

var images = [
    {
        title: 'Gary Wallerus',
        picture: '../views/images/Gary.jpg',
        description: 'Get at this man',
    },
    {
        title: 'Mike Machacek',
        picture: '../views/images/Mike.jpg',
        description: 'Get at this man',
    },
    {
        title: 'Peter Shroyer',
        picture: '../views/images/Peter.jpg',
        description: 'Get at this man',
    },
    {
        title: 'Andy Siegel',
        picture: '../views/images/Seagull.jpg',
        description: 'Get at this man',
    }
];

router.get('/', function (req, res) {
    console.log('get accepted');
    res.send(images);
});

module.exports = router;