﻿(function () {
    angular
        .module("TripTorque")
        .controller("RegisterController", RegisterController)

    function RegisterController($scope, $location, $rootScope)
    {

        var model = this;
        model.register = register;

        function register()
        {

            var newUser =
            {
                username : model.username,
                password : model.password,
                email: model.email
            };
            console.log(newUser);
                //UserService.createUser(newUser).then(function (response) {
                //
                //    newUser = response;
                //    $rootScope.user.username = newUser.username;
                //    $rootScope.user.password = newUser.password;
                //    $rootScope.user.email = newUser.email;
                //    $rootScope.user.userid = newUser.userid;
                //    $location.url('/profile');
                //    $rootScope.user.logged = true;
                //    $rootScope.user.globalusername = newUser.username;
                //    console.log($rootScope.user.globalusername);
                //
                //});

        }


    };
})();
