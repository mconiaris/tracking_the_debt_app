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

  // Specs are defined by calling the global
  // Jasmine function it, which, like describe
  // takes a string and a function. The string
  // is the title of the spec and the function
  // is the spec, or test. A spec contains one
  // or more expectations that test the state
  // of the code. An expectation in Jasmine is
  // an assertion that is either true or false.
  // A spec with all true expectations is a
  // passing spec. A spec with one or more false
  // expectations is a failing spec.
  // Expectations are built with the function
  // expect which takes a value, called the actual.
  // It is chained with a Matcher function, which
  // takes the expected value.
  // The 'toBe' matcher compares with ==="
  it('should attach a message reading \'GraphCtrl loaded.\' to the scope', function () {
    expect(scope.message).toBe('GraphCtrl loaded.');
  });

  // toEqual works for simple literals and variables
  describe('scope.graphs', function(){
    it('should be an Array', function () {
      expect(scope.graphs).toEqual(jasmine.any(Array));
    });
    it('should contain six objects', function () {
      expect(scope.graphs.length).toBe(6);
    });
    it('[0] should be an object', function () {
      expect(scope.graphs[0]).toEqual(jasmine.any(Object));
    });
  });


  // ================================
  // graphs[0] data tests
  // ================================
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
    it('should not be null', function() {
      expect(scope.graphs[0].data[0][0]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[0][0]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1940\'', function () {
      expect(scope.graphs[0].data[0][0]).toBe(1940);
    });
  });


  describe('scope.graphs[0].data[0][1]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[0][1]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[0][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'6.5\'', function () {
      expect(scope.graphs[0].data[0][1]).toBe(6.5);
    });
  });


  describe('scope.graphs[0].data[0][2]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[0][2]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[0][2]).toEqual(jasmine.any(Number));
    });
    it('should equal \'6.5\'', function () {
      expect(scope.graphs[0].data[0][2]).toBe(9.5);
    });
  });

  // ================================
  // graphs[0] option tests
  // ================================

  describe('scope.graphs[0].opts.labels', function() {
    it('should be an Array', function () {
      expect(scope.graphs[0].opts.labels).toEqual(jasmine.any(Array));
    });
    it('should have three items', function() {
      expect(scope.graphs[0].opts.labels.length).toBe(3);
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



  // ================================
  // graphs[1] data tests
  // ================================
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
    it('should not be null', function() {
      expect(scope.graphs[1].data[0][0]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[1].data[0][0]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1940\'', function () {
      expect(scope.graphs[1].data[0][0]).toBe(1940);
    });
  });

  describe('scope.graphs[1].data[0][1]', function() {
    it('should not be null', function() {
      expect(scope.graphs[1].data[0][1]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[1].data[0][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'96.3\'', function () {
      expect(scope.graphs[1].data[0][1]).toBe(96.3);
    });
  });

  describe('scope.graphs[1].data[0][2]', function() {
    it('should not be null', function() {
      expect(scope.graphs[1].data[0][2]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[1].data[0][2]).toEqual(jasmine.any(Number));
    });
    it('should equal \'139.2\'', function () {
      expect(scope.graphs[1].data[0][2]).toBe(139.2);
    });
  });


  // ================================
  // graphs[1] options tests
  // ================================
  describe('scope.graphs[1].opts.labels', function() {
    it('should be an Array', function () {
      expect(scope.graphs[1].opts.labels).toEqual(jasmine.any(Array));
    });
    it('should have three items', function() {
      expect(scope.graphs[1].opts.labels.length).toBe(3);
    });
  });

  describe('scope.graphs[1].opts.labels[0]', function() {
    it('should equal \'Fiscal Year\'', function() {
      expect(scope.graphs[1].opts.labels[0]).toBe('Fiscal Year');
    });
  });

  describe('scope.graphs[1].opts.labels[1]', function() {
    it('should equal \'Receipts\'', function() {
      expect(scope.graphs[1].opts.labels[1]).toBe('Receipts');
    });
  });

  describe('scope.graphs[1].opts.labels[2]', function() {
    it('should equal \'Outlays\'', function() {
      expect(scope.graphs[1].opts.labels[2]).toBe('Outlays');
    });
  });


  // ================================
  // graphs[2] data tests
  // ================================
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
    it('should not be null', function() {
      expect(scope.graphs[2].data[0][0]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[2].data[0][0]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1940\'', function () {
      expect(scope.graphs[2].data[0][0]).toBe(1940);
    });
  });

  describe('scope.graphs[2].data[0][1]', function() {
    it('should not be null', function() {
      expect(scope.graphs[2].data[0][1]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[2].data[0][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'6.7\'', function () {
      expect(scope.graphs[2].data[0][1]).toBe(6.7);
    });
  });

  describe('scope.graphs[2].data[0][2]', function() {
    it('should not be null', function() {
      expect(scope.graphs[2].data[0][2]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[2].data[0][2]).toEqual(jasmine.any(Number));
    });
    it('should equal \'9.6\'', function () {
      expect(scope.graphs[2].data[0][2]).toBe(9.6);
    });
  });

  // ================================
  // graphs[2] options tests
  // ================================
  describe('scope.graphs[2].opts.labels', function() {
    it('should be an Array', function () {
      expect(scope.graphs[2].opts.labels).toEqual(jasmine.any(Array));
    });
    it('should have three items', function() {
      expect(scope.graphs[2].opts.labels.length).toBe(3);
    });
  });

  describe('scope.graphs[2].opts.labels[0]', function() {
    it('should equal \'Fiscal Year\'', function() {
      expect(scope.graphs[2].opts.labels[0]).toBe('Fiscal Year');
    });
  });

  describe('scope.graphs[2].opts.labels[1]', function() {
    it('should equal \'Receipts\'', function() {
      expect(scope.graphs[2].opts.labels[1]).toBe('Receipts');
    });
  });

  describe('scope.graphs[2].opts.labels[2]', function() {
    it('should equal \'Outlays\'', function() {
      expect(scope.graphs[2].opts.labels[2]).toBe('Outlays');
    });
  });


  // ================================
  // graphs[3] data tests
  // ================================
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
    it('should not be null', function() {
      expect(scope.graphs[3].data[0][0]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[3].data[0][0]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1940\'', function () {
      expect(scope.graphs[3].data[0][0]).toBe(1940);
    });
  });

  describe('scope.graphs[3].data[0][1]', function() {
    it('should not be null', function() {
      expect(scope.graphs[3].data[0][1]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[3].data[0][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'-2.9\'', function () {
      expect(scope.graphs[3].data[0][1]).toBe(-2.9);
    });
  });

  // ================================
  // graphs[3] option tests
  // ================================
  describe('scope.graphs[3].opts.labels', function() {
    it('should be an Array', function () {
      expect(scope.graphs[3].opts.labels).toEqual(jasmine.any(Array));
    });
    it('should have two items', function() {
      expect(scope.graphs[3].opts.labels.length).toBe(2);
    });
  });

  describe('scope.graphs[3].opts.labels[0]', function() {
    it('should equal \'Fiscal Year\'', function() {
      expect(scope.graphs[3].opts.labels[0]).toBe('Fiscal Year');
    });
  });

  describe('scope.graphs[3].opts.labels[1]', function() {
    it('should equal \'Surplus/Deficit\'', function() {
      expect(scope.graphs[3].opts.labels[1]).toBe('Surplus/Deficit');
    });
  });


  // ================================
  // graphs[4] data tests
  // ================================
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
      expect(scope.graphs[4].data[0][0]).toBe(1940);
    });
  });

  describe('scope.graphs[4].data[0][1]', function() {
    it('should be a Number', function () {
      expect(scope.graphs[4].data[0][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'-42.9\'', function () {
      expect(scope.graphs[4].data[0][1]).toBe(-42.9);
    });
  });

  // ================================
  // graphs[4] option tests
  // ================================
  describe('scope.graphs[4].opts.labels', function() {
    it('should be an Array', function () {
      expect(scope.graphs[4].opts.labels).toEqual(jasmine.any(Array));
    });
    it('should have two items', function() {
      expect(scope.graphs[4].opts.labels.length).toBe(2);
    });
  });

  describe('scope.graphs[4].opts.labels[0]', function() {
    it('should equal \'Fiscal Year\'', function() {
      expect(scope.graphs[4].opts.labels[0]).toBe('Fiscal Year');
    });
  });

  describe('scope.graphs[4].opts.labels[1]', function() {
    it('should equal \'Surplus/Deficit\'', function() {
      expect(scope.graphs[4].opts.labels[1]).toBe('Surplus/Deficit');
    });
  });


  // ================================
  // graphs[5] data tests
  // ================================
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
      expect(scope.graphs[5].data[0][0]).toBe(1940);
    });
  });

  describe('scope.graphs[5].data[0][1]', function() {
    it('should be a Number', function () {
      expect(scope.graphs[5].data[0][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'-3.0\'', function () {
      expect(scope.graphs[5].data[0][1]).toBe(-3.0);
    });
  });

  // ================================
  // graphs[5] options tests
  // ================================
  describe('scope.graphs[5].opts.labels', function() {
    it('should be an Array', function () {
      expect(scope.graphs[5].opts.labels).toEqual(jasmine.any(Array));
    });
    it('should have two items', function() {
      expect(scope.graphs[5].opts.labels.length).toBe(2);
    });
  });

  describe('scope.graphs[5].opts.labels[0]', function() {
    it('should equal \'Fiscal Year\'', function() {
      expect(scope.graphs[5].opts.labels[0]).toBe('Fiscal Year');
    });
  });

  describe('scope.graphs[5].opts.labels[1]', function() {
    it('should equal \'Surplus/Deficit\'', function() {
      expect(scope.graphs[5].opts.labels[1]).toBe('Surplus/Deficit');
    });
  });
});
