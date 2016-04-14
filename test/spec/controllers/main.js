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
    it('[0] should be an object', function () {
      expect(scope.graphs[0]).toEqual(jasmine.any(Object));
    });
  });


  // graphs[0]
  describe('scope.graphs[0].data', function() {
    it('should be an Array', function () {
      expect(scope.graphs[0].data).toEqual(jasmine.any(Array));
    });
  });

  describe('scope.graphs[0].data[0]', function() {
    it('should be an Array', function () {
      expect(scope.graphs[0].data[0]).toEqual(jasmine.any(Array));
    });
  });

  describe('scope.graphs[0].data[0][0]', function() {
    it('[0][0] attribute should be a Number', function () {
      expect(scope.graphs[0].data[0][0]).toEqual(jasmine.any(Number));
    });
    it('[0][0] attribute should equal \'1940\'', function () {
      expect(scope.graphs[0].data[0][0]).toEqual(1940);
    });
  });

  describe('scope.graphs[0].data[0][1]', function() {
    it('[0][1] attribute should be a Number', function () {
      expect(scope.graphs[0].data[0][1]).toEqual(jasmine.any(Number));
    });
    it('[0][1] attribute should equal \'6.5\'', function () {
      expect(scope.graphs[0].data[0][1]).toEqual(6.5);
    });
  });

  describe('scope.graphs[0].data[0][2]', function() {
    it('[0][2] attribute should be a Number', function () {
      expect(scope.graphs[0].data[0][2]).toEqual(jasmine.any(Number));
    });
    it('[0][2] attribute should equal \'6.5\'', function () {
      expect(scope.graphs[0].data[0][2]).toEqual(9.5);
    });
  });

  describe('scope.graphs[0].opts.labels', function() {
    it('should be an Array', function () {
      expect(scope.graphs[0].opts.labels).toEqual(jasmine.any(Array));
    });
    it('should have three items', function() {
      expect(scope.graphs[0].opts.labels.length).toEqual(3);
    });
  });

  describe('scope.graphs[0].opts.labels[0]', function() {
    it('should equal \'Fiscal Year\'', function() {
      expect(scope.graphs[0].opts.labels[0]).toBe('Fiscal Year');
    });
  });

  describe('scope.graphs[0].opts.labels[1]', function() {
    it('should equal \'Receipts\'', function() {
      expect(scope.graphs[0].opts.labels[1]).toBe('Receipts');
    });
  });

  describe('scope.graphs[0].opts.labels[2]', function() {
    it('should equal \'Outlays\'', function() {
      expect(scope.graphs[0].opts.labels[2]).toBe('Outlays');
    });
  });


  // graphs[0]
  describe('scope.graphs[1].data', function() {
    it('should be an Array', function () {
      expect(scope.graphs[1].data).toEqual(jasmine.any(Array));
    });
  });

  describe('scope.graphs[1].data[0]', function() {
    it('should be an Array', function () {
      expect(scope.graphs[1].data[0]).toEqual(jasmine.any(Array));
    });
  });

  describe('scope.graphs[1].data[0][0]', function() {
    it('should be a Number', function () {
      expect(scope.graphs[1].data[0][0]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1940\'', function () {
      expect(scope.graphs[1].data[0][0]).toEqual(1940);
    });
  });

  describe('scope.graphs[1].data[0][1]', function() {
    it('should be a Number', function () {
      expect(scope.graphs[1].data[0][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'96.3\'', function () {
      expect(scope.graphs[1].data[0][1]).toEqual(96.3);
    });
  });

  describe('scope.graphs[1].data[0][2]', function() {
    it('should be a Number', function () {
      expect(scope.graphs[1].data[0][2]).toEqual(jasmine.any(Number));
    });
    it('should equal \'139.2\'', function () {
      expect(scope.graphs[1].data[0][2]).toEqual(139.2);
    });
  });

  describe('scope.graphs[1].opts.labels', function() {
    it('should be an Array', function () {
      expect(scope.graphs[1].opts.labels).toEqual(jasmine.any(Array));
    });
  });


  // graphs[0]
  describe('scope.graphs[2].data', function() {
    it('should be an Array', function () {
      expect(scope.graphs[2].data).toEqual(jasmine.any(Array));
    });
  });

  describe('scope.graphs[2].data[0]', function() {
    it('should be an Array', function () {
      expect(scope.graphs[2].data[0]).toEqual(jasmine.any(Array));
    });
  });

  describe('scope.graphs[2].data[0][0]', function() {
    it('should be a Number', function () {
      expect(scope.graphs[2].data[0][0]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1940\'', function () {
      expect(scope.graphs[2].data[0][0]).toEqual(1940);
    });
  });

  describe('scope.graphs[2].data[0][1]', function() {
    it('should be a Number', function () {
      expect(scope.graphs[2].data[0][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'6.7\'', function () {
      expect(scope.graphs[2].data[0][1]).toEqual(6.7);
    });
  });

  describe('scope.graphs[2].data[0][2]', function() {
    it('should be a Number', function () {
      expect(scope.graphs[2].data[0][2]).toEqual(jasmine.any(Number));
    });
    it('should equal \'9.6\'', function () {
      expect(scope.graphs[2].data[0][2]).toEqual(9.6);
    });
  });

  describe('scope.graphs[2].opts.labels', function() {
    it('should be an Array', function () {
      expect(scope.graphs[2].opts.labels).toEqual(jasmine.any(Array));
    });
  });


  // graphs[3]
  describe('scope.graphs[3].data', function() {
    it('should be an Array', function () {
      expect(scope.graphs[3].data).toEqual(jasmine.any(Array));
    });
  });

  describe('scope.graphs[3].data[0]', function() {
    it('should be an Array', function () {
      expect(scope.graphs[3].data[0]).toEqual(jasmine.any(Array));
    });
  });

  describe('scope.graphs[3].data[0][0]', function() {
    it('should be a Number', function () {
      expect(scope.graphs[3].data[0][0]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1940\'', function () {
      expect(scope.graphs[3].data[0][0]).toEqual(1940);
    });
  });

  describe('scope.graphs[3].data[0][1]', function() {
    it('should be a Number', function () {
      expect(scope.graphs[3].data[0][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'-2.9\'', function () {
      expect(scope.graphs[3].data[0][1]).toEqual(-2.9);
    });
  });

  describe('scope.graphs[3].opts.labels', function() {
    it('should be an Array', function () {
      expect(scope.graphs[3].opts.labels).toEqual(jasmine.any(Array));
    });
  });


  // graphs[4]
  describe('scope.graphs[4].data', function() {
    it('should be an Array', function () {
      expect(scope.graphs[4].data).toEqual(jasmine.any(Array));
    });
  });

  describe('scope.graphs[4].data[0]', function() {
    it('should be an Array', function () {
      expect(scope.graphs[4].data[0]).toEqual(jasmine.any(Array));
    });
  });

  describe('scope.graphs[4].data[0][0]', function() {
    it('should be a Number', function () {
      expect(scope.graphs[4].data[0][0]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1940\'', function () {
      expect(scope.graphs[4].data[0][0]).toEqual(1940);
    });
  });

  describe('scope.graphs[4].data[0][1]', function() {
    it('should be a Number', function () {
      expect(scope.graphs[4].data[0][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'-42.9\'', function () {
      expect(scope.graphs[4].data[0][1]).toEqual(-42.9);
    });
  });

  describe('scope.graphs[4].opts.labels', function() {
    it('should be an Array', function () {
      expect(scope.graphs[4].opts.labels).toEqual(jasmine.any(Array));
    });
  });


  // graphs[5]
  describe('scope.graphs[5].data', function() {
    it('should be an Array', function () {
      expect(scope.graphs[5].data).toEqual(jasmine.any(Array));
    });
  });

  describe('scope.graphs[5].data[0]', function() {
    it('should be an Array', function () {
      expect(scope.graphs[5].data[0]).toEqual(jasmine.any(Array));
    });
  });

  describe('scope.graphs[5].data[0][0]', function() {
    it('should be a Number', function () {
      expect(scope.graphs[5].data[0][0]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1940\'', function () {
      expect(scope.graphs[5].data[0][0]).toEqual(1940);
    });
  });

  describe('scope.graphs[5].data[0][1]', function() {
    it('should be a Number', function () {
      expect(scope.graphs[5].data[0][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'-3.0\'', function () {
      expect(scope.graphs[5].data[0][1]).toEqual(-3.0);
    });
  });

  describe('scope.graphs[5].opts.labels', function() {
    it('should be an Array', function () {
      expect(scope.graphs[5].opts.labels).toEqual(jasmine.any(Array));
    });
  });
});
