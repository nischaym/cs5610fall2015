(function () {
    angular
        .module("TripTorque")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope , $rootScope,$location,$routeParams) {

        //$scope.navbarCollapsed = false;

        $scope.logout = logout;
        console.log($rootScope);
        $scope.user = $rootScope.user;

        console.log('in header');
        function logout(){

            console.log($rootScope.user.logged);
            $scope.user.logged = false;
            $location.url('#/home');

        }

        $rootScope.$on("auth", function(event, user){
            $scope.user = $rootScope.user = user;
        });

    }
})();