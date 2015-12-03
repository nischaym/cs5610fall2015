(function () {
    angular
        .module("TripTorque")
        .controller("DetailsController", DetailsController);

    function DetailsController($scope , $rootScope, $location,UserService,TripService,$routeParams) {

        console.log($routeParams);

        TripService.getTripById($routeParams.tripid).then(function(response){

            console.log(response);
            $scope.trip=response;
        });

    }
})();