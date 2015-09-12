// create admin application
var adminApp = angular.module('adminApp', ['ngRoute']);

// create the controller and inject Angular's $scope
adminApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'This is the home page';
});
