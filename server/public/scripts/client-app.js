var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider' , function($routeProvider){
  $routeProvider
  .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: "homeController"
    })
    .when('/findAnimal', {
      templateUrl: '/views/templates/findAnimal.html',
      controller: "findPetController"
    })
    .when('/favorites' ,{
      templateUrl: '/views/templates/favorites.html',
      controller: "favoritesController"
    })
    .otherwise({
      redirectTo: 'home'
    })


}]);
