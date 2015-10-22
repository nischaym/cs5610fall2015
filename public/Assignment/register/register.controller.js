(function () {
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController)

    function RegisterController($scope, UserService, $location, $rootScope)
    {

        $scope.register = register;

        function register()
        {

            var newUser =
            {
                username : $scope.username,
                password : $scope.password,
                email: $scope.email
            };

 /*           if (($scope.verifypassword != null) &&
                ($scope.username != null) &&
                ($scope.password != null) &&
                ($scope.password == $scope.verifypassword))
            {*/
                UserService.createUser(newUser , route_to_profile)
            //}
        }

        function route_to_profile(user) {
            $rootScope.user.username = user.username;
            $rootScope.user.password = user.password;
            $location.url('/profile');
        }

    };
})();

