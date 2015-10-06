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
  .module('trackingTheDebtApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
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
