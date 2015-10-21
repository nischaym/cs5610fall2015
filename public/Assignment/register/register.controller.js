(function () {
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController)

    function RegisterController($scope, UserService, $location, $rootScope)
    {

        $scope.users = UserService.getAllUsers();

        console.log($scope.users);

        $scope.login = login;

        function login(username, password, verifypassword, email)
        {

            var newUser =
            {
                username,
                password,
                email
            };

            //userid = Guid.create();

            if ((verifypassword != null) &&
                (username != null) &&
                (password != null) &&
                (password == verifypassword))
            {
                $scope.users.push(newUser);
                //$scope.users = UserService.getAllUsers();
                //UserService.createUser(newUser)
                $rootScope.username = username;
                $location.url('/profile');
            }
        }
    };
})();
