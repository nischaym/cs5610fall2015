(function () {

    angular
        .module("TripTorque")
        .config(configure);

    function configure($routeProvider) {
        $routeProvider
            .when("/home", {
            templateUrl: "views/home/home.view.html",
                controller : "HomeController"
        })
            .when("/register", {
            templateUrl: "views/register/register.view.html",
            controller : "RegisterController"
        })
            .when("/profile/:userid", {
            templateUrl: "views/profile/profile.view.html",
            controller: "ProfileController"
        })
            //.when("/following", {
            //    templateUrl: "views/profile/profile.view.html"
            //    //controller: "ProfileController as model"
            //})


            .when("/login", {
            templateUrl: "views/login/login.view.html",
            controller : "LoginController"
        })

            .when("/search", {
            templateUrl: "views/search/search.view.html"
        })
            .when("/details", {
                templateUrl: "views/details/details.view.html"
            })

            .when("/trip/:tripid", {
                templateUrl: "views/details/details.view.html",
                controller:"DetailsController"
            })

            .when("/admin", {
                templateUrl: "views/admin/admin.view.html",
                controller:"AdminController"
            })

            .when("/documentation", {
                templateUrl: "views/documentation/documentation.view.html"

            })
            .otherwise({
            redirectTo: "/home"
        });
    }
})();