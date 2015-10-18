(function () {
    angular
        .module("FormBuilderApp")
        .controller("MainController", MainController);

    function MainController($scope , $location){
        
        $scope.$location = $location;
        $scope.hello = "hello from MC";
        
    }

})();