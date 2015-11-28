(function () {

    angular
        .module("TripTorque")
        .config(configure);

    function configure($routeProvider) {
        $routeProvider
            .when("/home", {
            templateUrl: "views/home/home.view.html"
        })
            .when("/register", {
            templateUrl: "views/register/register.view.html",
            controller : "RegisterController as model"
        })
            .when("/profile", {
            templateUrl: "views/profile/profile.view.html"
            //controller: "ProfileController as model"
        })
            //.when("/following", {
            //    templateUrl: "views/profile/profile.view.html"
            //    //controller: "ProfileController as model"
            //})


            .when("/login", {
            templateUrl: "views/login/login.view.html",
            controller : "LoginController as model"
        })

            .when("/search", {
            templateUrl: "views/search/search.view.html"
        })
            .when("/details", {
                templateUrl: "views/details/details.view.html"
            })

        .otherwise({
            redirectTo: "/home"
        });
    }
})();