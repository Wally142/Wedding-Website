var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/home', {
            templateUrl: '/views/home.html',
            controller: 'WeddingController as wc',
        }).when('/hotel', {
            templateUrl: '/views/hotel.html',
            controller: 'WeddingController as wc',
        }).when('/contact', {
            templateUrl: '/views/contact.html',
            controller: 'WeddingController as wc',
        }).when('/WeddingParty', {
            templateUrl: '/views/weddingParty.html',
            controller: 'WeddingController as wc',
        }).when('/WeddingParty2', {
            templateUrl: '/views/weddingParty2.html',
            controller: 'WeddingController as wc',
        }).when('/rsvp', {
            templateUrl: '/views/rsvp.html',
            controller: 'WeddingController as wc'
        }).otherwise({
            redirectTo: 'home'
        });
});