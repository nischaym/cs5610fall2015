(function () {
    angular
        .module("TripTorque")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope , $rootScope,$location,UserService,TripService,$routeParams) {

        //$scope.navbarCollapsed = false;

        $scope.logout = logout;

        console.log('in header');
        function logout(){

            console.log($rootScope.user.logged);
            $scope.user.logged = false;
            $location.url('#/home');

        }

    }
})();