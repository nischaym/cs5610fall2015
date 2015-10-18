(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController" , LoginController)

    function LoginController($scope , UserService) {

        $scope.users = UserService.getAllUsers();

        console.log($scope.users);

        $scope.login = function (userid , password) {

            console.log(userid,password)
        }
        
    };

})();