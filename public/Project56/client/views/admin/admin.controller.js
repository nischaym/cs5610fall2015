(function () {
    angular
        .module("TripTorque")
        .controller("AdminController", AdminController);

    function AdminController($scope , $rootScope, $location,UserService,TripService,$routeParams,CommentService) {


        $scope.removeuser = removeuser;
        $scope.removeTrip = removeTrip;
        $scope.removeComment = removeComment;

        UserService.getAllUsers().then(function(response){

            $scope.users = response;
        });

        TripService.findAllTrips().then(function(response) {

            $scope.trips = response;
        });

        CommentService.findAllComments().then(function(response) {

            $scope.comments = response;
        });

        function removeuser(index){

            console.log(index);
            console.log($scope.users[index]._id);
            UserService.removeUserById($scope.users[index]._id).then(function(response){

                UserService.getAllUsers().then(function(response){

                    $scope.users = response;
                    alert('REMOVED THE USER');
                });
            });
        }

        function removeTrip(index){

            var tripid = $scope.trips[index]._id;
            console.log(index);
            TripService.removeTripById(tripid).then(function(response){

                TripService.findAllTrips().then(function(response) {

                    $scope.trips = response;
                    alert('REMOVED THE TRIP');
                });
            });
        }



        function removeComment(index){

            CommentService.removeCommentById($scope.comments[index]._id).then(function(response){

                CommentService.findAllComments().then(function(response) {

                    $scope.comments = response;
                    alert('REMOVED THE COMMENT');
                });
            });
        }

    }
})();