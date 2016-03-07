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
    'ngTouch',
    'angular-dygraphs'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

      // use the HTML5 History API
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
      });

  });
