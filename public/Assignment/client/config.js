(function () {

    angular
        .module("FormBuilderApp")
        .config(configure);

    function configure($routeProvider) {
        $routeProvider
        .when("/home", {
            templateUrl: "views/home/home.view.html"
        })
        .when("/register", {
            templateUrl: "views/register/register.view.html",
            controller : "RegisterController"
        })
        .when("/profile", {
            templateUrl: "views/profile/profile.view.html",
            controller: "ProfileController"
        })
        .when("/login", {
            templateUrl: "views/login/login.view.html",
            controller : "LoginController"
        })
        .when("/admin", {
            templateUrl: "admin/admin.view.html"
        })
        .when("/forms", {
            templateUrl: "views/form/form.view.html",
            controller : "FormController"
        })

        .when("/form-fields", {
            templateUrl: "views/form/form-fields.view.html",
            controller: "FormController"
        })
        .otherwise({
            redirectTo: "/home"
        });
    }
})();