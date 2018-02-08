var router = require('express').Router();

var images = [
    {
        title: 'Gary Wallerus',
        picture: '../images/Gary.jpg',
        description: 'Best Man',
        title2: 'Yolanda Lavelle',
        picture2: '../images/Yolanda.jpg',
        description2: 'Maid of Honor',
        
    },
    {
        title: 'Mike Machacek',
        picture: '../images/Mike.jpg',
        description: 'Best Man',
        title2: 'Sahra Lavelle',
        picture2: '../images/Sahra.jpg',
        description2: 'Bridesmaid',
        
    },
    {
        title: 'Peter Shroyer',
        picture: '../images/Peter.jpg',
        description: 'Groomsmen',
        title2: 'Vicki Souvannarath',
        picture2: '../images/Vicki.jpg',
        description2: 'Bridesmaid',
        
    },
    {
        title: 'Andy Siegel',
        picture: '../images/Seagull.jpg',
        description: 'Groomsmen',
        title2: 'Peter Shroyer',
        picture2: '../images/Eswin.jpg',
        description2: 'Bridesmaid',
        
    }
];

router.get('/', function (req, res) {
    res.send(images);
});

module.exports = router;