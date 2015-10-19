(function () {
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController)

    function RegisterController($scope, UserService ,$location) {

        $scope.users = UserService.getAllUsers();
        console.log($scope.users);

        $scope.login = login;

        function login(userid, password, verifypassword, email) {

            var newUser = {
                userid,
                password,
                email
            };

            if (password == verifypassword)
            {
                $scope.users.push(newUser);
                $location.url('/profile');
            }
            

        }

    };

})();