var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/home', {
            templateUrl: '/views/home.html',
            controller: 'WeddingController as wc',
        }).when('/Hotel', {
            templateUrl: '/views/hotel.html',
            controller: 'WeddingController as wc',
        }).when('/Reception', {
            templateUrl: '/views/contact.html',
            controller: 'WeddingController as wc',
        }).when('/WeddingParty', {
            templateUrl: '/views/weddingParty.html',
            controller: 'WeddingController as wc',
        }).when('/WeddingParty2', {
            templateUrl: '/views/weddingParty2.html',
            controller: 'WeddingController as wc',
        }).when('/RSVP', {
            templateUrl: '/views/rsvp.html',
            controller: 'WeddingController as wc'
        }).when('/Photos', {
            templateUrl: '/views/photos.html',
            controller: 'WeddingController as wc'
        }).otherwise({
            redirectTo: 'home'
        });
});