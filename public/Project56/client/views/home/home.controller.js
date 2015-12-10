(function () {
    angular
        .module("TripTorque")
        .controller("HomeController", HomeController);

    function HomeController($scope , $rootScope, $location,TripService) {// UserService,


        navbar_initialized = false;

        if($(window).width() < 768){
            console.log('in home nav');
            gsdk.initRightMenu();
        }
        console.log('i am in controller');
        TripService.findAllTrips().then(function(response){

            $scope.trips = response;

            console.log(response);

        });

    }
})();