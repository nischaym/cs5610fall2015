(function () {
    angular
        .module("TripTorque")
        .controller("LoginController", LoginController);

    function LoginController($scope , $rootScope, $location) {// UserService,

        var model = this;
        model.login=login;

        /* function for the check of login*/
        function login (username, password)
        {
            console.log(username);
            console.log()
            //var user;
            //UserService.findUserByUsernameAndPassword(username, password).then(function(response){
            //
            //    user = response;
            //    //console.log(response);
            //    //console.log('back in contriller');
            //    //console.log(user);
            //    if(user == null)
            //    {
            //        alert("username not present");
            //    }
            //    else
            //    {
            //        $rootScope.user = user;
            //        $rootScope.user.logged = true;
            //        $rootScope.user.globalusername = user.username;
            //        $location.url('/profile');
            //    }
            //});
        }
    }
})();