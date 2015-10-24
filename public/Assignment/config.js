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
            templateUrl: "register/register.view.html",
            controller : "RegisterController"
        })
        .when("/profile", {
            templateUrl: "profile/profile.view.html",
            controller: "ProfileController"
        })
        .when("/login", {
            templateUrl: "login/login.view.html",
            controller : "LoginController"
        })
        .when("/admin", {
            templateUrl: "admin/admin.view.html"
        })
        .when("/forms", {
            templateUrl: "form/form.view.html",
            controller : "FormController"
        })

        .when("/form-fields", {
            templateUrl: "form/form-fields.view.html",
            controller: "FormController"
        })
        .otherwise({
            redirectTo: "/home"
        });
    }
})();