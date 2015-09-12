angular.module('adminApp').config(function($routeProvider) {
    $routeProvider

    // route for the home page
    .when('/', {
        templateUrl : 'app/components/home/homeView.html',
        controller  : 'mainController'
    })

    // Get list of users
    .when('/users', {
        templateUrl : 'app/components/users/usersView.html',
        controller  : 'usersController'
    })

    // Get list of groups
    .when('/groups', {
        templateUrl : 'app/components/groups/groupsView.html',
        controller  : 'groupsController'
    })

    // Login into the applications
    .when('/login', {
        templateUrl : 'app/components/login/loginView.html',
        controller  : 'loginController'
    })

    // Logout from the applications
    .when('/logout', {
        templateUrl : 'app/components/login/loginView.html',
        controller  : 'logoutController'
    })
});
