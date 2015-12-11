(function () {
    angular
        .module("TripTorque")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope , $rootScope,$location,$routeParams) {

        //$scope.navbarCollapsed = false;
        $rootScope.$on("auth", function(event, user){
            $scope.user = $rootScope.user = user;
        });

        //navbar_initialized = false;
        //
        //if($(window).width() < 768){
        //    console.log('in header nav');
        //    gsdk.initRightMenu();
        //}

        $scope.logout = logout;
        //$scope.search = search;
        console.log($rootScope);
        $scope.user = $rootScope.user;
        $scope.searchstring = "";
        $rootScope.searchstring = "";
        //$scope.updatenav = updatenav;

        //function updatenav(){
        //
        //    navbar_initialized = false;
        //
        //    if($(window).width() < 768){
        //        console.log('in header nav');
        //        gsdk.initRightMenu();
        //    }
        //
        //}


        console.log('in header');
        function logout(){

            var w = $(window).width();
            console.log(w);
            //navbar_initialized = false;
            //
            //if($(window).width() < 768){
            //    console.log('in logout nav');
            //    gsdk.initRightMenu();
            //}
            console.log($rootScope.user.logged);
            $scope.user.logged = false;
            //navbar_initialized = false;
            //
            //if($(window).width() < 768){
            //    console.log('inside logout nav');
            //    gsdk.initRightMenu();
            //}
            $location.url('#/home');
            //navbar_initialized = false;
            //
            //if($(window).width() < 768){
            //    console.log('in logout nav');
            //    gsdk.initRightMenu();
            //}

            console.log('after logout');
            console.log($rootScope.user.logged);

        }

        //function search(searchstring){
        //    console.log(searchstring);
        //    console.log('afsfsfasfsaffasffffsfsfsffas');
        //    $rootScope.searchstring = searchstring;
        //    $scope.searchstring = "";
        //    $location.url('search');
        //}

    }
})();