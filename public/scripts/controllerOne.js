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
            swal({
                title: 'Thank You!',
                text: 'Your RSVP has been submitted',
                imageUrl: './images/cake.jpg',
                imageHeight: 300,
                imageWidth: 300,
                imageAlt: 'Custom image',
                animation: false
            });
            $location.path('/home');
        });
    }
});// end controller