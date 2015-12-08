(function () {
    angular
        .module("TripTorque")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, $rootScope,UserService)
    {

        $scope.register = register;
        $rootScope.user ;//= {username:"",password:"",email:"",userid:"",logged:false,globalusername:""};
        $scope.user = {username:"",password:"",city:"",state:"",firstname:"",lastname:"",verify_password : ""};
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

                function validateUsername()
                {
                    var result;
                    UserService.findUserByUsername($scope.user.username).then(function(response){

                        result = response;
                    });
                    if (result.length == 0)
                    {
                        return (true);
                    }
                    alert('USERNAME ALREADY TAKEN');
                    return (false);

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
                }
                var emailvalid = ValidateEmail($scope.user.email);
                //var duplicateusername = validateUsername($scope.user.username);
                var passwordvalid = ValidatePassword; //$scope.user.password == $scope.user.verify_password;
                if (emailvalid && passwordvalid)
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
                        $scope.user = {username:"",password:"",city:"",state:"",firstname:"",lastname:"",verify_password : ""};
                        $location.url('/profile/'+newUser._id);
                    });
                }
                else
                {

                    //do nothing
                }
            }
        }
    }
})();

