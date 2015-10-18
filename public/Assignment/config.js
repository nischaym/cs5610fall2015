(function () {

    angular
        .module("FormBuilderApp")
        .config(configure);

    function configure($routeProvider) {
        $routeProvider
        .when("/home", {
            templateUrl: "home/home.view.html"
        })
        .when("/register", {
            templateUrl: "register/register.view.html"
        })
        .when("/profile", {
            templateUrl: "profile/profile.view.html"
        })
        .when("/login", {
            templateUrl: "login/login.view.html",
            controller : "LoginController"
        })
        .when("/admin", {
            templateUrl: "admin/admin.view.html"
        })
        .when("/forms", {
            templateUrl: "forms/forms.view.html"
        })
        .otherwise({
            redirectTo: "/home"
        });
    }
})();