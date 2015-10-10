'use strict';

/**
 * @ngdoc function
 * @name trackingTheDebtAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trackingTheDebtAppApp
 */
angular.module('trackingTheDebtApp')
  .controller('MainCtrl', function ($scope, $http) {
    // Testing this out to see if I can retrieve this value
    $scope.page = 'home';
    // TODO: Put Dygraphs here?
    console.log($scope.page);

    $http.get('scripts/graph.js').success(function(data) {
    $scope.graph = data;
  });

  // $scope.orderProp = 'age';
  console.log($scope.graph)
  });


// phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
//   $http.get('phones/phones.json').success(function(data) {
//     $scope.phones = data;
//   });

//   $scope.orderProp = 'age';
// });
