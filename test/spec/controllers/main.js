'use strict';

describe('Controller: MainCtrl', function () {

  // the beforeEach function is called once
  // before each spec in the describe in which
  // it is called
  // load the controller's module
  beforeEach(module('trackingTheDebtAppApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have a defined scope', function() {
    expect(scope).toBeDefined();
  });

  it('should attach a message reading \'MainCtrl loaded\' to the scope', function () {
    expect(MainCtrl.message).toBe('MainCtrl loaded');
  });
});


// A test suite begins with a call to the global
// Jasmine function describe with two parameters:
// a string and a function. The string is a name
// or title for a spec suite – usually what is
// being tested. The function is a block of code
// that implements the suite.
describe('Controller: GraphCtrl', function () {

  // load the controller's module
  // JavaScript scoping rules apply, so variables
  // declared in a describe are available to any
  // it block inside the suite.
  beforeEach(module('trackingTheDebtAppApp'));

  var GraphCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GraphCtrl = $controller('GraphCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
