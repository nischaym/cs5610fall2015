﻿(function () {
    angular
        .module("TripTorque")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, $rootScope,UserService,$q)
    {

        //navbar_initialized = false;
        //
        //if($(window).width() < 768){
        //    console.log('in reg');
        //    gsdk.initRightMenu();
        //}
        $scope.register = register;
        $rootScope.user ;//= {username:"",password:"",email:"",userid:"",logged:false,globalusername:""};
        $scope.user = {username:"",password:"",city:"",state:"",firstname:"",lastname:"",verify_password : ""};
        $scope.validateUsername = validateUsername;
        $scope.duplicateusername = [];
        $scope.usernamevalid = false;

        function validateUsername()
        {
            var deferred = $q.defer();
            var result;
            UserService.findUserByUsername($scope.user.username).then(function(response){

                deferred.resolve(response);
                result = response;
            });
            return deferred.promise;
        }

        function register()
        {
            if($scope.user.username == "" || $scope.user.password =="" || $scope.user.email == "" || $scope.user.city == "" || $scope.user.state =="" ||$scope.user.firstname == "" || $scope.user.lastname == "" || $scope.user.verify_password == "")
            {
                alert('Please enter all the details');
            }
            else
            {
                function ValidateEmail(inputText)
                {
                    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if(mailformat.test(inputText)){
                        return (true);
                    }
                    else
                    {
                        alert("You have entered an invalid email address!");
                        return (false);
                    }
                }


                function ValidatePassword (){

                    if($scope.user.verify_password == $scope.user.password)
                    {
                        return true;
                    }
                    else
                    {
                        alert('PASSWORDS DONT MATCH');
                        return false;
                    }
                    return false;
                }
                var emailvalid = ValidateEmail($scope.user.email);
                var passwordvalid = ValidatePassword();

                $scope.validateUsername().then(function(response){
                    $scope.duplicateusername = response;
                    console.log(response);
                    if ($scope.duplicateusername.length == 0)
                    {
                        $scope.usernamevalid = true;
                    }
                    else
                    {
                        alert('USERNAME ALREADY TAKEN');
                        $scope.usernamevalid = false;
                    }

                    if (emailvalid && passwordvalid && $scope.usernamevalid)
                    {
                        var newUser =
                        {
                            username : $scope.user.username,
                            password : $scope.user.password,
                            email: $scope.user.email,
                            city:$scope.user.city,
                            state:$scope.user.state,
                            firstname:$scope.user.firstname,
                            lastname:$scope.user.lastname
                        };
                        UserService.createUser(newUser).then(function (response) {

                            newUser = response;
                            $rootScope.user = newUser;
                            $rootScope.user.logged = true;
                            $rootScope.user.globalusername = newUser.username;
                            var rootscopeuser = $rootScope.user;
                            $rootScope.$broadcast('auth', rootscopeuser);
                            $scope.user = {username:"",password:"",city:"",state:"",firstname:"",lastname:"",verify_password : ""};
                            $location.url('/profile/'+newUser._id);
                        });
                    }
                    else
                    {
                        //alert('something went wrong');
                        //do nothing
                    }



                });


                 //$scope.user.password == $scope.user.verify_password;
             }
        }
    }
})();

