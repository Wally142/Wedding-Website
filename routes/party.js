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
        picture: '../images/peter.jpg',
        description: 'Groomsmen',
        title2: 'Bridgitte Manay',
        picture2: '../images/bmanay.jpg',
        description2: 'Bridesmaid',

    },
    {
        title: 'Marty Hanson',
        picture: '../images/marty.jpg',
        description: 'Groomsmen',
        title2: 'Vicki Souva',
        picture2: '../images/Vicki.jpg',
        description2: 'Bridesmaid',

    },
    {
        title: 'Andy Siegel',
        picture: '../images/Seagull.jpg',
        description: 'Groomsmen',
        title2: 'Jackie Schultz',
        picture2: '../images/jackie.jpg',
        description2: 'Bridesmaid',

    },
    {
        title: 'Cesar Camacho',
        picture: '../images/cesar.jpg',
        description: 'Groomsmen',
        title2: 'Eva Napoles',
        picture2: '../images/eva.jpg',
        description2: 'Bridesmaid',
    }
];

router.get('/', function (req, res) {
    res.send(images);
});

module.exports = router;