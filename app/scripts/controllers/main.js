'use strict';

/**
 * @ngdoc function
 * @name trackingTheDebtAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trackingTheDebtAppApp
 */
angular.module('trackingTheDebtApp')
  .controller('MainCtrl', function ($scope) {
    // Testing this out to see if I can retrieve this value
    $scope.page = 'home';
    // TODO: Put Dygraphs here?
    console.log($scope.page);
  });
