(function () {
    angular
        .module("TripTorque")
        .controller("DetailsController", DetailsController);

    function DetailsController($scope , $rootScope, $location,UserService,TripService,$routeParams,CommentService) {

        console.log($routeParams);
        $scope.user = $rootScope.user;
        console.log('user data');
        console.log($scope.user);
        $scope.isCollapsedfollowers = true;

        TripService.getTripById($routeParams.tripid).then(function(response){

            console.log(response);
            $scope.trip=response;
        });

        CommentService.getCommentsForTrip($routeParams.tripid).then(function(response){

            console.log(response);
            console.log('jfbdsjifbsdjibgisdgvsdbvubvubib');
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

            if(newsummary == "" || newcontent == "" )
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

            if(newcomment == null)
            {
                alert('ENTER COMMENT');
            }
            else
            {
                console.log($scope.user);
                var user1 = $scope.user;
                console.log(user1);
                var nischay = {
                    username : $scope.user.username,
                    tripid: $routeParams.tripid,
                    content:newcomment,
                    userid :user1._id
                };
                console.log(nischay);

                CommentService.createCommentForTrip(nischay).then(function(response){

                    CommentService.getCommentsForTrip($routeParams.tripid).then(function(response){
                        $scope.comments = response;
                        cancelComment();
                    });
                });
            }
        }
    }
})();