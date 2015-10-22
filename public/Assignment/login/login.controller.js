(function () {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope , UserService, $rootScope, $location) {


        /* function for the check of login*/
        $scope.login = function (username, password)
        {
            //console.log(username, password)
            UserService.findUserByUsernameAndPassword(username, password, checklogin);
        }

        function checklogin(user) 
        {
            if(user == null)
            {
                alert("username not present");
            }
            else 
            {
                $rootScope.user = user;
                $location.url('/profile');
            }
        }
    };
})();