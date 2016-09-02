myApp.controller("homeController", ["$scope", "$http", function($scope, $http) {
  var key = '84d039c7cf924d5cf5f14cb5c2c1e57b';
  var baseURL = 'http://api.petfinder.com/';

  $scope.getRandomPet = function() {
    var query = baseURL + 'pet.getRandom';
    query += '?key=' + key;
    query += '&output=basic';
    query += '&format=json';

    console.log('query: ', query);

    var request = encodeURI(query) + '&callback=JSON_CALLBACK';

    $http.jsonp(request).then(function(response) {
      $scope.animal = response.data.petfinder.pet;

    });
  }
  angular.element(document).ready($scope.getRandomPet);
}]);
