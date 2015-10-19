(function () {
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController)

    function ProfileController($scope, UserService, $location) {

        $scope.users = UserService.getAllUsers();
        console.log($scope.users);

        $scope.update = update;

        function update(user) {

            var newUser = {
                userid,
                password,
                email
            };

            if (password == verifypassword) {
                $scope.users.push(newUser);
                $location.url('/profile');
            }
        }
    };
})();