'use strict';

/**
 * @ngdoc function
 * @name trackingTheDebtAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trackingTheDebtAppApp
 */
var myApp = angular.module('trackingTheDebtAppApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


myApp.controller('GraphCtrl', ['$scope', function($scope) {

  $scope.message = 'GraphCtrl loaded.';
  console.log($scope.message);

  $scope.graph = {
    data: [
      [1940,6.5,9.5],
      [1941,8.7,13.7],
      [1942,14.6,35.1],
    ],
    options: {
      labels: ['x', 'A', 'B']
    },
    legend: {
      series: {
        A: {
          label: 'Series A'
        },
        B: {
          label: 'Series B',
          format: 3
        }
      }
    }
  };


}]);
