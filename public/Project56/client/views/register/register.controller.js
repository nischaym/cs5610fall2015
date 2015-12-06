(function () {
    angular
        .module("TripTorque")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, $rootScope,UserService)
    {

        $scope.register = register;
        $rootScope.user ;//= {username:"",password:"",email:"",userid:"",logged:false,globalusername:""};
        function register()
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
            console.log(newUser);
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
                    $location.url('/profile/'+newUser._id);
                });
        }
    };
})();

