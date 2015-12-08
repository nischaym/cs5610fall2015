(function () {
    angular
        .module("TripTorque")
        .controller("AdminController", AdminController);

    function AdminController($scope , $rootScope, $location,UserService,TripService,$routeParams,CommentService) {


        UserService.getAllUsers().then(function(response){

            $scope.users = response;
        })
    }
})();