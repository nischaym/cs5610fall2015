(function () {
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController)

    function HeaderController ($scope , $location,$rootScope)
    {
        $scope.eraseUser = eraseUser;
        console.log($rootScope.user)
        if ($rootScope.user == null)
        {
            $scope.username = "username";
        }
        else
        {
            $scope.$rootScope.globalusername = $rootScope.user.username;
        }
        
        function eraseUser()
        {
            //$rootScope.user = null;
            $rootScope.user.logged = false;
        }

    }

        
})();