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


describe('Controller: GraphCtrl', function () {

  // load the controller's module
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

  it('should attach a message reading \'GraphCtrl loaded.\' to the scope', function () {
    expect(scope.message).toBe('GraphCtrl loaded.');
  });

  describe('scope.graphs', function(){
    it('should be an Array', function () {
      expect(scope.graphs).toEqual(jasmine.any(Array));
    });
    it('should contain six objects', function () {
      expect(scope.graphs.length).toEqual(6);
    });
    it('graphs[0] should be an object', function () {
      expect(scope.graphs[0]).toEqual(jasmine.any(Object));
    });

    describe('scope.graphs[0].data', function() {
      it('data attribute should be an Array', function () {
        expect(scope.graphs[0].data).toEqual(jasmine.any(Array));
      });
      it('data[0] attribute should be an Array', function () {
        expect(scope.graphs[0].data[0]).toEqual(jasmine.any(Array));
      });
      it('data[0][0] attribute should be a Number', function () {
        expect(scope.graphs[0].data[0][0]).toEqual(jasmine.any(Number));
      });
      it('data[0][0] attribute should equal \'1940\'', function () {
        expect(scope.graphs[0].data[0][0]).toEqual(1940);
      });
      it('data[0][1] attribute should be a Number', function () {
        expect(scope.graphs[0].data[0][1]).toEqual(jasmine.any(Number));
      });
      it('data[0][1] attribute should equal \'6.5\'', function () {
        expect(scope.graphs[0].data[0][1]).toEqual(6.5);
      });
      it('data[0][2] attribute should be a Number', function () {
        expect(scope.graphs[0].data[0][2]).toEqual(jasmine.any(Number));
      });
      it('data[0][2] attribute should equal \'6.5\'', function () {
        expect(scope.graphs[0].data[0][2]).toEqual(9.5);
      });
    });
  });
});
