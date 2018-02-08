var router = require('express').Router();

var images = [
    {
        title: 'Gary Wallerus',
        picture: '../images/Gary.jpg',
        description: 'Get at this man',
    },
    {
        title: 'Mike Machacek',
        picture: '../images/Mike.jpg',
        description: 'Get at this man',
    },
    {
        title: 'Peter Shroyer',
        picture: '../images/Peter.jpg',
        description: 'Get at this man',
    },
    {
        title: 'Andy Siegel',
        picture: '../images/Seagull.jpg',
        description: 'Get at this man',
    }
];

router.get('/', function (req, res) {
    res.send(images);
});

module.exports = router;