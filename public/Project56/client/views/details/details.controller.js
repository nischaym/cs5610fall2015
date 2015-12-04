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

        $scope.editTrip = editTrip;
        $scope.saveTrip = saveTrip;

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

                    console.log('######################');
                    console.log(response);
                    $scope.trip = response;
                    $scope.editTripIsTrue = false;

                });
            }
        }
    }
})();