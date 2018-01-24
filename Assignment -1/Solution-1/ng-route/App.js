angular.module('routing', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
$routeProvider
.when('/', {
templateUrl: 'home.html'
})
.when('/about', {
templateUrl: 'aboutus.html'
})
.otherwise({redirectTo: '/'});
}]);