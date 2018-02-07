myApp.controller('WeddingController', function ($http) {
    
    getImages();

    var vm = this;

    vm.images = [];

    function getImages() {

        $http({
            method: 'GET',
            url: '/party'
        }).then(function (response) {
            console.log('data received');
            vm.images = response.data;

        });
    } //end getImages

});