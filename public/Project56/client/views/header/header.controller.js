(function () {
    angular
        .module("TripTorque")
        .controller("headerController", headerController);

    function headerController($scope , $rootScope, $location,UserService,TripService,$routeParams) {

        $scope.navbarCollapsed = true;

    }
})();