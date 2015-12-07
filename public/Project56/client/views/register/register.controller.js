(function () {
    angular
        .module("TripTorque")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, $rootScope,UserService)
    {

        $scope.register = register;
        $rootScope.user ;//= {username:"",password:"",email:"",userid:"",logged:false,globalusername:""};
        $scope.user = {username:"",password:"",city:"",state:"",firstname:"",lastname:""};
        function register()
        {
            if($scope.user.username == "" || $scope.user.password =="" || $scope.user.email == "" || $scope.user.city == "" || $scope.user.state =="" ||$scope.user.firstname == "" || $scope.user.lastname == "")
            {
                alert('Please enter all the details');
            }
            else
            {
                var newUser =
                {
                    username : $scope.user.username,
                    password : $scope.user.password,
                    email: $scope.user.email,
                    city:$scope.user.city,
                    state:$scope.user.state,
                    firstname:$scope.user.firstname,
                    lastname:$scope.user.lastname
                };
                UserService.createUser(newUser).then(function (response) {

                    newUser = response;
                    console.log(newUser);
                    console.log('-----------------');
                    console.log(response);
                    $rootScope.user = newUser;
                    //$rootScope.user.password = newUser.password;
                    //$rootScope.user.email = newUser.email;
                    //$rootScope.user.userid = newUser._id;
                    $rootScope.user.logged = true;
                    $rootScope.user.globalusername = newUser.username;
                    $scope.user = {username:"",password:"",city:"",state:"",firstname:"",lastname:""};
                    $location.url('/profile/'+newUser._id);
                });
            }
        }
    }
})();

