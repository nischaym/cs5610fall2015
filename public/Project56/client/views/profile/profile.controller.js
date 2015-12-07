(function () {
    angular
        .module("TripTorque")
        .controller("ProfileController", ProfileController);

        function ProfileController($scope , $rootScope, $location,UserService,TripService,$routeParams)
    {

        //$scope.user = {username:"",firstname:"",lastname:""};
        $scope.user = $rootScope.user;
        $scope.userdetailsedit = false;
        $scope.isCollapsedtrips = true;
        $scope.isCollapsedfollowers = true;
        $scope.isCollapsedfollowing = true;
        $scope.addNewTrip = false;
        $scope.isCollapsedtrips = true;
        $scope.currentviewId = $routeParams.userid;
        var currentuser =


        $scope.userEdit = userEdit;
        $scope.cancelEdit=cancelEdit;
        $scope.saveUserEdit = saveUserEdit;
        $scope.addTrip = addTrip;
        $scope.saveTrip = saveTrip;
        $scope.removeTrip = removeTrip;

        TripService.findAllTripsByUserId($scope.currentviewId).then(function(response){

            console.log('find trips');
            console.log(response);
            $scope.trips = response;
        });

        UserService.findUserByUserId($scope.currentviewId).then(function(response){

            $scope.displayuser = response;
        });

        function userEdit(){
            $scope.userdetailsedit = true;
            $scope.newlastname=$scope.user.lastname;
            $scope.newfirstname=$scope.user.firstname;
            $scope.newemail =$scope.user.email;
            $scope.newcity =$scope.user.city;
            $scope.newstate =$scope.user.state;
        }

        function cancelEdit(){
            $scope.userdetailsedit = false;
        }

        function saveUserEdit(newlastname,newfirstname,newemail,newcity,newstate){

            var newuser = $scope.user;
            if(newlastname != null){
                newuser.lastname = newlastname;
            }
            if(newfirstname != null){
                newuser.firstname = newfirstname;
            }
            if(newemail!= null){
                newuser.email = newemail;
            }
            if(newcity!= null){
                newuser.city = newcity;
            }
            if(newstate!= null){
                newuser.state = newstate;
            }
            console.log(newuser);

            UserService.updateUser(newuser).then(function(response){
                console.log('in profile controller');
                console.log(response);
                var user = response;
                $scope.user = user;
                $rootScope.user.logged = true;
                $rootScope.user.globalusername = user.username;
                $scope.userdetailsedit = false;
                $scope.displayuser = response;

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

        function removeTrip(index){

            var tripid = $scope.trips[index]._id;
            console.log(index);
            TripService.removeTripById(tripid).then(function(response){

                TripService.findAllTripsByUserId($routeParams.userid).then(function(response){

                    $scope.trips = response;

                });
            });
        }
    }


})();