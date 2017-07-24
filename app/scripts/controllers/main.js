'use strict';

/**
 * @ngdoc function
 * @name trackingTheDebtAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trackingTheDebtAppApp
 */

// Controllers are "classes" or "constructor
// functions" that are responsible for providing
// the application behavior that supports the
// declarative markup in the template.
// Controllers are associated with an element
// in the DOM and so are provided with access
// to the scope. Other components (like services)
// only have access to the $rootScope service.
var myApp = angular.module('trackingTheDebtAppApp')
  .controller('MainCtrl', function () {
    this.message = 'MainCtrl loaded';
  });


// Changes active class when navbar item is clicked.
$('.nav li').click(function(e) {

    $('.nav li').removeClass('active');

    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
});

  // Directives Tutorial
  // https://www.codementor.io/angularjs/tutorial/create-dropdown-control




