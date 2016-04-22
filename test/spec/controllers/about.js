'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('trackingTheDebtAppApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have a defined scope', function() {
    expect(scope).toBeDefined();
  });

  it('should attach a message reading \'AboutCtrl loaded\' to the scope', function () {
    expect(MainCtrl.message).toBe('AboutCtrl loaded');
  });
});
