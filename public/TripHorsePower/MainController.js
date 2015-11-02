(function () {
    angular
        .module("TripHorsePower")
        .controller("MainController", MainController);

    function MainController($scope , $location){
        
        $scope.$location = $location;
        $scope.hello = "hello from MC";
        
        

    }

})();