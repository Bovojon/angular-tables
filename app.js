(function() {
  'use strict';

  angular
    .module('tableApp', [])
    .controller('TableController', TableController);


  TableController.$inject = ["$scope"];
  function TableController($scope) {
    $scope.sortType = 'name';          // set the default sort type
    $scope.sortReverse = false        // set the default sort order
    $scope.searchFish = '';           // set the default search/filter term


    // create list of sushi
    $scope.sushi = [
      { name: 'Cali Roll', fish: 'Crab', tastiness: 2 },
      { name: 'Philly', fish: 'Tuna', tastiness: 4 },
      { name: 'Tiger', fish: 'Eel', tastiness: 7 },
      { name: 'Rainbow', fish: 'Variety', tastiness: 6 }
    ];

  }
})();
