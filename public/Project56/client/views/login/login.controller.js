(function () {
    angular
        .module("TripTorque")
        .controller("LoginController", LoginController);

    function LoginController($scope , $rootScope, $location,UserService) {

        navbar_initialized = false;

        if($(window).width() < 768){
            console.log('in login')
            gsdk.initRightMenu();
        }

        $rootScope.user;
        $scope.user = {username:"",password:""};
        $scope.login = login;
        //$scope.user.username = "";
        //$scope.user.username = "";
        /* function for the check of login*/
        function login (username, password)
        {
            if(username == null || password == null)
            {
                alert("Please Enter Details");
            }
            else
            {
                UserService.findUserByUsernameAndPassword(username, password).then(function(response){
                    var user = response;
                    console.log(response);
                    if(user.length == 0)
                    {
                        alert("username password not Matching");
                    }
                    else
                    {
                        $rootScope.user = user[0];
                        $rootScope.user.logged = true;
                        $rootScope.user.globalusername = $scope.user.username;
                        var rootscopeuser = $rootScope.user;
                        $rootScope.$broadcast('auth', rootscopeuser);
                        $scope.user.username = "";
                        $scope.user.password = "";
                        $location.url('/profile/'+$rootScope.user._id);

                    }
                });
            }
        }
    }
})();