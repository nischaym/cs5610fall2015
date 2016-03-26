(function () {
    angular
        .module("Typo")
        .controller("HomeController", AdminController);

    function AdminController($scope , $rootScope, $location) {

        $scope.showthis = "Nischay";
        $scope.input = "";
        $scope.result = "YAaaaayyYYYAEEeeee";


        if($scope.showthis === $scope.input)
        {
            $scope.result = "YAaaaayyYYYAEEeeee";
        }

    }
})();