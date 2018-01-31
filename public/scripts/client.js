var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'WeddingController as wc',
        }).when('/hotel', {
            templateUrl: '/views/templates/hotel.html',
            controller: 'WeddingController as wc',
        }).when('/contact', {
            templateUrl: '/views/templates/contact.html',
            controller: 'WeddingController as wc',
        }).when('/WeddingParty', {
            templateUrl: '/views/templates/weddingParty.html',
            controller: 'WeddingController as wc',
        }).otherwise({
            redirectTo: 'home'
        });
});