(function () {
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController)

    function ProfileController($scope, UserService, $location, $rootScope)
    {
        var userid = $rootScope.user.userid;
        //var id = $rootScope.user.userid;
        $scope.user.username = $rootScope.user.username;
        $scope.user.lastname = $rootScope.user.lastname;
        //console.log($scope.users);
        //console.log(present_username);
        console.log(userid)
        $scope.update = update;

        function update()
        {
            var newUser =
            {
                username : $scope.user.username,
                password:  $scope.user.password,
                email:     $scope.user.email,
                firstname: $scope.user.firstname,
                lastname:  $scope.user.lastname
            };
            UserService.updateUser(userid, newUser, refresh_page)
            
        }
        function refresh_page(user)
        {
            console.log(user.lastname);
            $scope.user.username = user.username;
            $scope.user.lastname = user.lastname;
            $scope.user.email = user.email;
            $scope.user.password = user.password;
            $scope.user.firstname = user.firstname;
           // $location.url('/profile')
        }
    };
})();