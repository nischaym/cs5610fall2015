(function () {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope , UserService, $rootScope, $location) {

        var model = this;
        model.login=login;

        /* function for the check of login*/
        function login (username, password)
        {
            var user;
            UserService.findUserByUsernameAndPassword(username, password).then(function(response){

                user = response;
                console.log('back in contriller');
                console.log(user);
                if(user == null)
                {
                    alert("username not present");
                }
                else
                {
                    $rootScope.user = user;
                    $rootScope.user.logged = true;
                    $rootScope.user.globalusername = user.username;
                    $location.url('/profile');
                }
            });
        }
    }
})();