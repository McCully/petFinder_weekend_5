myApp.controller('findPetController', ['$scope', '$http', '$location',  'DataFactory'  , function($scope, $http , $location , DataFactory) {

    $scope.data = {};
    $scope.showAnimal = false;
    $scope.favoriteAdded = false;
    $scope.dataFactory = DataFactory;
    $scope.location = '';
    $scope.animalDropdown ='';


    $scope.chooseAnimal = function() {
        var animalType = $scope.animalDropdown;
        $scope.showAnimal = true;
        $location.url('#findAnimal');
        console.log($scope.showAnimal == true);
        petFinder(animalType);
    };


    $scope.addFavorite = function() {
        var animals = {
            animalId: $scope.animal.id.$t,
            animalName: $scope.animal.name.$t,
            animalDesc: $scope.animal.description.$t,
            animalImage: $scope.animal.media.photos.photo[2].$t
        };
        $scope.dataFactory.postToDatabase(animals);
        $scope.favoriteAdded = true;

        $scope.dataFactory.retrieveData().then(function() {
            $scope.favorites = $scope.dataFactory.faveData();
        });

        return animals;
    };

    $scope.dataFactory.retrieveData().then(function() {
        $scope.favorites = $scope.dataFactory.faveData();
    });

    function petFinder(animalType) {
        // API key
        var key = '84d039c7cf924d5cf5f14cb5c2c1e57b';

        var baseURL = 'http://api.petfinder.com/';
        var query = 'pet.getRandom';
        query += '?key=' + key;
        query += '&animal=' + animalType;
        query += '&output=basic';
        query += '&format=json';

        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
        console.log(request);

        $http.jsonp(request).then(
            function(response) {
                $scope.animal = response.data.petfinder.pet;
                console.log(response.data.petfinder.pet);
            }
        );
    }

    petFinder();

}]);
//     function petFinder(animalType) {
//
//         var key = '84d039c7cf924d5cf5f14cb5c2c1e57b';
//
//         var baseURL = 'http://api.animalfinder.com/';
//         var query = baseURL + 'pet.getRandom';
//         query += '?key=' + key;
//         query += '&animal=' + animalType;
//         query += '&output=basic';
//         query += '&format=json';
//
//         var request = encodeURI(query) + '&callback=JSON_CALLBACK';
//         console.log("request " ,request);
//
//         $http.jsonp(request).then(
//             function(response) {
//                 $scope.animal = response.data.animalfinder.pet;
//                 console.log( "aniaml scope " , $scope.animal);
//             }
//         );
//     }
//
//     petFinder();
//
// }]);
