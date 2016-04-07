'use strict';

describe('Controller: MainCtrl', function () {

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

  it('should attach a message reading \'MainCtrl loaded\' to the scope', function () {
    expect(MainCtrl.message).toBe('MainCtrl loaded');
  });
});

describe('Controller: DropdownCtrl', function() {

  // load the controller's module
  beforeEach(module('trackingTheDebtAppApp'));

  var DropdownCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DropdownCtrl = $controller('DropdownCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a message reading \'DropdownCtrl loaded\' to the scope', function () {
    expect(DropdownCtrl.message).toBe('DropdownCtrl loaded');
  });

});
