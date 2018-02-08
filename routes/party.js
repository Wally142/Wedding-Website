var router = require('express').Router();

var images = [
    {
        title: 'Gary Wallerus',
        picture: '../images/Gary.jpg',
        description: 'Get at this man',
        picture2: 'dog'
    },
    {
        title: 'Mike Machacek',
        picture: '../images/Mike.jpg',
        description: 'Get at this man',
        picture2: 'dog'
    },
    {
        title: 'Peter Shroyer',
        picture: '../images/Peter.jpg',
        description: 'Get at this man',
        picture2: 'dog'
    },
    {
        title: 'Andy Siegel',
        picture: '../images/Seagull.jpg',
        description: 'Get at this man',
        picture2: 'dog'
    }
];

router.get('/', function (req, res) {
    res.send(images);
});

module.exports = router;