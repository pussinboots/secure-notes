'use strict';
/* App Module */
var demoApp = angular.module('secureNotes', ['angularjs-crypto', 'ngRoute', 'controllers', 'services']);

demoApp.config(function ($routeProvider) {
    $routeProvider
    .when('/get', { templateUrl: 'partials/overview.html'})
    .otherwise({ redirectTo: '/get' });
});

demoApp.run(function(cfCryptoHttpInterceptor, $rootScope) {
    $rootScope.base64Key = "16rdKQfqN3L4TY7YktgxBw==";
    cfCryptoHttpInterceptor.base64Key = $rootScope.base64Key;
    cfCryptoHttpInterceptor.pattern = "_enc"; //default value but for a better understanding it is also defined here
})