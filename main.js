/**
 * Created by msp on 2016/7/24.
 */
var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {
    $scope.user = 'John Doe';
    $scope.email = 'john.doe@gmail.com';

    var input = document.getElementById('myEmail');

    input.oninput = function(event) {
        $scope.validEmail = true;

        //if(input.validity && !input.validity.valid){
        //    if(input.validity.valueMissing){
        //        alert("Can't be null")
        //    }else if(input.validity.patternMismatch ){
        //        alert("Invalid Email");
        //    }
        //}
    }


});