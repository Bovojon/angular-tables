(function() {
  'use strict';

  angular
    .module('tableApp', [])
    .controller('TableController', TableController);


  TableController.$inject = ["$scope"];
  function TableController($scope) {
    $scope.sortType = 'title';          // set the default sort type
    $scope.sortReverse = false        // set the default sort order
    $scope.searchTitle = '';           // set the default search/filter term


    // create list of sushi
    $scope.titles = [
      { title: 'title-one', length: 'ten', month: 2 },
      { title: 'title-two', length: 'five', month: 4 },
      { title: 'title-three', length: 'nine', month: 7 },
      { title: 'title-four', length: 'eight', month: 6 }
    ];

  }
})();
