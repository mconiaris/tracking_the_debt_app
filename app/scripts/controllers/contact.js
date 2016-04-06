'use strict';

/**
 * @ngdoc function
 * @name trackingTheDebtAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the trackingTheDebtAppApp
 */
angular.module('trackingTheDebtAppApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.message = 'ContactCtrl loaded';

    console.log($scope.message);
  });

