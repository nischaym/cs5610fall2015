(function () {
    angular
        .module("TripTorque")
        .controller("SearchController", SearchController);

    function SearchController($scope , $http ,$rootScope, $location,UserService,TripService,$routeParams )
    {

        //$scope.searchstring = $rootScope.searchstring;
        //console.log($rootScope.searchstring);

        //navbar_initialized = false;
        //
        //if($(window).width() < 768){
        //    console.log('in in seraaf');
        //    gsdk.initRightMenu();
        //
        //}

        $scope.search = search;
        $scope.origin ="";
        $scope.destination="";
        $scope.results = false;

        //if($rootScope.searchstring != "")
        //{
        //
        //
        //    var dest = $rootScope.searchstring;
        //    //  var url = "http://www.myapifilms.com/imdb?title=Avatar&format=JSON&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=1&forceYear=0&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&similarMovies=0&adultSearch=0&callback=JSONP_CALLBACK"
        //    //    var url ="http://www.myapifilms.com/imdb?title=Avatar&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=1&forceYear=0&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&similarMovies=0&adultSearch=0&callback=JSON_CALLBACK";
        //
        //    //var url = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Boston&types=geocode&key=AIzaSyCmK8VWPlJNtUDLAmhZHE09vMcVoZsMHps&callback=JSON_CALLBACK";
        //
        //    //var placename = "lorem";
        //    //TripService.searchByKeyword(placename).then(function(response){
        //    //        console.log(response);
        //    //});
        //    //var url = "http://free.rome2rio.com/api/1.2/json/Search?key=j9jwRQnz&oName=new york&dName=Boston";
        //    var url1 = "http://free.rome2rio.com/api/1.2/json/Geocode?key=j9jwRQnz&query="+dest;
        //    console.log(url1);
        //    $http.get(url1)
        //        .success(function (response) {
        //            var movie = response;
        //            console.log('after success');
        //            console.log(movie);
        //            //$scope.destination = response;
        //        });
        //
        //
        //}

        function search(origin , destination){

            //var dest = place;
            var url = "http://free.rome2rio.com/api/1.2/json/Search?key=j9jwRQnz&oName=" + origin + "&dName=" + destination
            //var url1 = "http://free.rome2rio.com/api/1.2/json/Geocode?key=j9jwRQnz&query=" + dest;
            console.log(url);
            $http.get(url)
                .success(function (response) {

                     $scope.routes = response.routes;
                    //$scope.segments = route1.segments;
                    //console.log($scope.routes);
                    $scope.results = true;

                });

        }

    }


})();