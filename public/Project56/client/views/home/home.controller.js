(function () {
    angular
        .module("TripTorque")
        .controller("HomeController", HomeController);

    function HomeController($scope , $rootScope, $location,TripService) {// UserService,


        console.log('i am in controller');
        TripService.findAllTrips().then(function(response){

            $scope.trips = response;

            console.log(response);

        });

    }
})();