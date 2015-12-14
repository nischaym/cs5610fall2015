(function () {
    angular
        .module("TripTorque")
        .controller("ProfileController", ProfileController);

        function ProfileController($scope , $rootScope, $location,UserService,TripService,$routeParams,$window)
    {

        //navbar_initialized = false;
        //
        //if($(window).width() < 768){
        //    console.log('navbar in profile');
        //    gsdk.initRightMenu();
        //}
        //$scope.user = {username:"",firstname:"",lastname:""};
        $scope.user = $rootScope.user;

        $scope.userdetailsedit = false;
        $scope.isCollapsedtrips = true;
        $scope.isCollapsedfollowers = true;
        $scope.isCollapsedfollowing = true;
        $scope.addNewTrip = false;
        $scope.isCollapsedtrips = true;
        $scope.currentviewId = $routeParams.userid;
        $scope.newsummary = "";
        $scope.newcontent = "";
        $scope.newtitle = "";
        $scope.notalreadypresent = true;


        $scope.userEdit = userEdit;
        $scope.cancelEdit=cancelEdit;
        $scope.saveUserEdit = saveUserEdit;
        $scope.addTrip = addTrip;
        $scope.saveTrip = saveTrip;
        $scope.removeTrip = removeTrip;
        $scope.followUser = followUser;

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
            if(newlastname != ""){
                newuser.lastname = newlastname;
            }
            if(newfirstname != ""){
                newuser.firstname = newfirstname;
            }
            if(newemail!= ""){
                newuser.email = newemail;
            }
            if(newcity!= ""){
                newuser.city = newcity;
            }
            if(newstate!= ""){
                newuser.state = newstate;
            }
            console.log(newuser);

            UserService.updateUser(newuser).then(function(response){
                console.log('in profile controller');
                console.log(response);
                var user = response;
                $scope.user = user;
                $scope.user.logged = true;
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
            if(newtitle != "" && newsummary != "" && newcontent != "")
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
            else
            {
                alert('PLEASE ENTER ALL THE DETAILS OF TRIP');
            }
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

        function followUser(){


            for(var i=0;i<$scope.displayuser.followers.length;i++)
            {
                if($scope.displayuser.followers[i].username == $scope.user.username)
                {
                    notalreadypresent = false;
                    alert('you are already following');
                    return;
                }
            };
            console.log($scope.notalreadypresent);
            if($scope.notalreadypresent)
            {

                follower = {
                    userid:$scope.user._id,
                    username:$scope.user.username,
                    following:$scope.displayuser.username
                };

                UserService.addFollower($scope.displayuser._id,follower).then(function (response) {
                    console.log(response);
                    $scope.displayuser = response;
                })
            }
            else
            {
                $scope.notalreadypresent = true;
            }

        }
    }


})();