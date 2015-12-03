(function () {
    angular
        .module("TripTorque")
        .controller("LoginController", LoginController);

    function LoginController($scope , $rootScope, $location,UserService) {

        $rootScope.user;
        //$scope.user = {username:"",password:""};
        $scope.login = login;

        /* function for the check of login*/
        function login (username, password)
        {
            UserService.findUserByUsernameAndPassword(username, password).then(function(response){
                var user = response;
                console.log(response);
                if(user == null)
                {
                    alert("username not present");
                }
                else
                {
                    $rootScope.user = user[0];
                    $rootScope.user.logged = true;
                    $rootScope.user.globalusername = $scope.user.username;
                    $location.url('/profile');
                }
            });
        }
    }
})();