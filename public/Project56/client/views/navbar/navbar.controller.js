(function () {
    angular
        .module("TripTorque")
        .controller("NavbarController", NavbarController);

    function NavbarController($scope , $rootScope, $location) {// UserService,

        //var profile = this;
        $scope.toggle = true;

    }


})();