(function () {
    angular
        .module("TripTorque")
        .controller("DetailsController", DetailsController);

    function DetailsController($scope , $rootScope, $location,UserService,TripService,$routeParams,CommentService) {

        console.log($routeParams);
        $scope.user = $rootScope.user;
        console.log('user data');
        console.log($scope.user);

        TripService.getTripById($routeParams.tripid).then(function(response){

            console.log(response);
            $scope.trip=response;
        });

        CommentService.getCommentsForTrip($routeParams.tripid).then(function(response){

            console.log(response);
            $scope.comments = response;
        });

        $scope.editTrip = editTrip;
        $scope.saveTrip = saveTrip;
        $scope.addComment = addComment;
        $scope.cancelComment = cancelComment;
        $scope.saveComment = saveComment;

        function editTrip(){

            $scope.editTripIsTrue = !$scope.editTripIsTrue;
            if($scope.editTripIsTrue)
            {
                $scope.newcontent = $scope.trip.content;
                $scope.newsummary = $scope.trip.summary;
            }
            //console.log(newcontent);

        }

        function saveTrip(newsummary,newcontent){

            if(newsummary == null && newcontent == null )
            {
                alert('you deleted everthing..!!!!');
            }
            else
            {
                if(newsummary != null)
                {
                    $scope.trip.summary =newsummary;
                }
                if(newcontent != null)
                {
                    $scope.trip.content = newcontent;
                }

                TripService.updateTripById($scope.trip).then(function(response){
                    $scope.trip = response;
                    $scope.editTripIsTrue = false;
                });
            }
        }

        function addComment(){
            $scope.addNewComment = true;
        }

        function cancelComment(){
            $scope.addNewComment = false;
        }

        function saveComment(newcomment){

            console.log(newcomment);
            var comment = {
                userid : $scope.user.userid,
                username : $scope.user.username,
                tripid: $routeParams.tripid,
                content:newcomment
            };
            console.log(comment);

            CommentService.createCommentForTrip(comment).then(function(response){

                CommentService.getCommentsForTrip($routeParams.tripid).then(function(response){

                    console.log(response);
                    $scope.comments = response;
                    cancelComment();

                });

            });
        }
    }
})();