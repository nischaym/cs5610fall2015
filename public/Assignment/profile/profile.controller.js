(function () {
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController)

    function ProfileController($scope, UserService, $location, $rootScope)
    {
        $scope.users = UserService.getAllUsers();
        var users = $scope.users;
        var present_username = $rootScope.username;
        console.log($scope.users);
        $scope.update = update;

        for (var i = 0; i < users.length; i++) {
            if (users[i].username == present_username) {
                $scope.user.username = present_username;
                break;
            }
        }

        function update(user)
        {
            var newUser =
            {
                username,
                password,
                email
            };
        }
    };
})();