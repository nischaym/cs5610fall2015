(function () {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope , UserService, $rootScope, $location) {

        $scope.users = UserService.getAllUsers();
        var users = $scope.users;

        console.log($scope.users);

        /* function for the check of login*/
        $scope.login = function (username , password) {

            console.log(username, password)

            for (var i = 0; i < users.length; i++)
            {
                console.log(users[i].username);
                console.log(users[i].password);
                if ((users[i].username == username) &&
                    (users[i].password == password))
                {
                    $rootScope.username = username;
                    $location.url('/profile');
                    break;
                }
                else 
                {
                    if(i+1 == users.length)
                    {
                        alert("username not present");
                        break;
                    }
                }
            }
        }
    };
})();