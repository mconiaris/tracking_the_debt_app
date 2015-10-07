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
      }).when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl',
        controllerAs: 'about'
      }).when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'MainCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
