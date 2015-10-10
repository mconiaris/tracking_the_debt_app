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
    $scope.graph = {
      data: [
      [new Date(2014,0,1), 10, 100],
      [new Date(2014,1,1), 20, 80],
      [new Date(2014,2,1), 50, 60],
      [new Date(2014,3,1), 70, 80]
      ],
      opts: {
        labels: ["x", "A", "B"]
      }
    };

    // var graph = $http.get('scripts/graph.js').success(function(data) {
    // $scope.graph = data;

});
