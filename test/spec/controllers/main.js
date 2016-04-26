'use strict';


// Angular Doc on Tests: https://docs.angularjs.org/guide/unit-testing
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
