(function () {
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, UserService, $location, $rootScope)
    {

        var model = this;
        model.update = update;

        model.user = {userid: "",username:"" ,userid:"" , password:"",email:"", lastname:"",firstname:""};

        var userid = $rootScope.user.userid;
        model.user.username = $rootScope.user.username;
        model.user.email = $rootScope.user.email;
        model.user.firstname = $rootScope.user.firstname;
        model.user.password = $rootScope.user.password;
        model.user.lastname = $rootScope.user.lastname;

        function update()
        {
            var newUser =
            {
                username : model.user.username,
                password:  model.user.password,
                email:     model.user.email,
                firstname: model.user.firstname,
                lastname:  model.user.lastname
            };

            UserService.updateUser(userid, newUser).then(function(response){

                var newUser = response[0];
                model.user.username = newUser.username;
                model.user.lastname = newUser.lastname;
                model.user.email = newUser.email;
                model.user.password = newUser.password;
                model.user.firstname = newUser.firstname;
                $rootScope.user.userid = newUser.userid;
                $rootScope.user.username = newUser.username;
                $rootScope.user.firstname = newUser.firstname;
                $rootScope.user.lastname = newUser.lastname;
                $rootScope.user.email = newUser.email;
                $rootScope.password = newUser.password;

            });
            
        }
    };
})();