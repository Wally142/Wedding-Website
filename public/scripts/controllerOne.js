myApp.controller('WeddingController', function ($http, $location) {

    getImages();

    var vm = this;

    vm.images = [];

    function getImages() {

        $http({
            method: 'GET',
            url: '/party'
        }).then(function (response) {
            vm.images = response.data;
        });
    } //end getImages

    vm.rsvp = function () {

        var reserve = {
            name: vm.nameIn,
            guest: vm.guestIn,
            attend: vm.attendIn,
            meal: vm.mealIn,
            guestmeal: vm.mealGuest
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