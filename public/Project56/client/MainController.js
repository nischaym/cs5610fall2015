(function () {
    angular
        .module("TripTorque")
        .controller("MainController", MainController);

    function MainController($scope , $location , $window){
        
        $scope.$location = $location;
        $scope.hello = "hello from MC";

        //navbar_initialized = false;
        //
        //if($(window).width() < 768){
        //    console.log('fadfaff');
        //    gsdk.initRightMenu();
        //}
    }

})();