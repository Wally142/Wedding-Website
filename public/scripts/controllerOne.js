myApp.controller('WeddingController', function ($http, $location) {

    getImages();

    var vm = this;

    vm.images = [];

    function getImages() {

        $http({
            method: 'GET',
            url: '/party'
        }).then(function (response) {
            console.log('data received', response);
            vm.images = response.data;

        });
    } //end getImages

    function rsvp() {

        var reserve = {
            name: vm.nameIn,
            guest: vm.guestIn,
            attend: vm.attendIn,
            meal: vm.mealIn
        }

        $http({
            method: 'POST',
            url: '/rsvp',
            data: reserve
        }).then(function (response) {
            console.log('RSVP accepted');
            $location.path('/home');
        });
    }

});