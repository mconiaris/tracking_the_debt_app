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

}]);
