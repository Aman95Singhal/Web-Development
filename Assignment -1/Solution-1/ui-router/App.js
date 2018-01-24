var myApp = angular.module('routing', ['ui.router']);

myApp.config(function($stateProvider) {
  var homePage = {
    name: 'home',
    url: '/home',
    templateUrl: 'home.html'
  }

  var aboutUS = {
    name: 'about',
    url: '/about',
    templateUrl: 'aboutus.html'
  }

  $stateProvider.state(homePage);
  $stateProvider.state(aboutUS);
});