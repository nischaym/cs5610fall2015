(function () {
    angular
        .module("TripTorque")
        .controller("DetailsController", DetailsController);

    function DetailsController($scope , $rootScope, $location,UserService,TripService,$routeParams,CommentService) {

        //navbar_initialized = false;
        //
        //if($(window).width() < 768){
        //    console.log('in details');
        //    gsdk.initRightMenu();
        //}
        console.log($routeParams);
        $scope.user = $rootScope.user;
        console.log('user data');
        console.log($scope.user);
        $scope.isCollapsedfollowers = true;


        TripService.getTripById($routeParams.tripid).then(function(response){
            //console.log(response);
            $scope.trip=response;
            $scope.displaycontent = $scope.trip.content.replace(/\n|\r\n|\r/g, '<br>');

        });

        CommentService.getCommentsForTrip($routeParams.tripid).then(function(response){
            $scope.comments = response;
        });

        $scope.editTrip = editTrip;
        $scope.saveTrip = saveTrip;
        $scope.addComment = addComment;
        $scope.cancelComment = cancelComment;
        $scope.saveComment = saveComment;
        $scope.routeToSearch = routeToSearch;

        function routeToSearch(){

            $rootScope.destination = $scope.trip.title;
            $location.url('search');
        }

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
                    $scope.displaycontent = $scope.trip.content.replace(/\n|\r\n|\r/g, '<br>');
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