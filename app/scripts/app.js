'use strict';

/**
 * @ngdoc overview
 * @name trackingTheDebtAppApp
 * @description
 * # trackingTheDebtAppApp
 *
 * Main module of the application.
 */
angular
  .module('trackingTheDebtAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
