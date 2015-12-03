(function () {
    angular
        .module("TripTorque")
        .controller("ProfileController", ProfileController);

        function ProfileController($scope , $rootScope, $location,UserService,TripService)
    {

        //$scope.user = {username:"",firstname:"",lastname:""};
        $scope.user = $rootScope.user;
        $scope.userdetailsedit = false;
        $scope.isCollapsedtrips = true;
        $scope.isCollapsedfollowers = true;
        $scope.isCollapsedfollowing = true;
        $scope.addNewTrip = false;

        //$scope.user.title = "Jobless";


        $scope.userEdit = userEdit;
        $scope.cancelEdit=cancelEdit;
        $scope.saveUserEdit = saveUserEdit;
        $scope.addTrip = addTrip;
        $scope.saveTrip = saveTrip;

        TripService.findAllTripsByUserId($scope.user._id).then(function(response){

            console.log('adasbfosasfnanfkn');
            console.log(response);
            $scope.trips = response;
        });

        function userEdit(){
            $scope.userdetailsedit = true;
        }

        function cancelEdit(){
            $scope.userdetailsedit = false;
        }

        function saveUserEdit(){

            UserService.updateUser($scope.user).then(function(response){
                console.log('in profile controller');
                console.log(response);
                var user = response;
                $scope.user = user;
                $rootScope.user.logged = true;
                $rootScope.user.globalusername = user.username;
                $scope.userdetailsedit = false;

            });
        }


        function addTrip(){
            $scope.addNewTrip = !$scope.addNewTrip;
        }



        function saveTrip(newtitle,newsummary,newcontent)
        {
            var newTrip =
            {   userid : $scope.user._id,
                username:$scope.user.username,
                title :newtitle,
                summary :newsummary,
                content:newcontent
            };
            console.log(newTrip);
            TripService.createTripForUser(newTrip).then(function(response){

                TripService.findAllTripsByUserId($scope.user._id).then(function(response){

                    $scope.trips = response;
                    addTrip();
                    $scope.title="";

                });
            });
        }

    }


})();