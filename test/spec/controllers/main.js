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
  // graphs[x].data[x][0] tests
  // ================================


  // http://tosbourn.com/using-loops-in-jasmine/
  describe('value of graph year', function() {

    var graphIndex = 0;
    var year = 1940;
    var arraySize = 80;

    function yearTest(graphIndex, year) {
      it('in scope.graphs[0].data[0][' + graphIndex + '] should equal \'' + year + '\'', function () {
        expect(scope.graphs[0].data[graphIndex][0]).toBe(year);
      });
    }

    for(var x = 0; x < arraySize; x++) {
      yearTest(graphIndex, year);
      graphIndex++;
      year++;
    }
  });

  // ================================
  // graphs[0] attribute tests
  // ================================

  describe('scope.graphs[0].graphType', function() {
    it('should be \'Receipts-Current\'', function() {
      expect(scope.graphs[0]).toEqual(jasmine.objectContaining({
        graphType: 'Receipts-Current'
      }));
    });
  });

  describe('scope.graphs[0].shown', function() {
    it('should be \'true\'', function() {
      expect(scope.graphs[0]).toEqual(jasmine.objectContaining({
        shown: true
      }));
    });
  });


  // ================================
  // graphs[0] data tests
  // ================================
  describe('scope.graphs[0].data', function() {
    it('should be an Array', function () {
      expect(scope.graphs[0].data).toEqual(jasmine.any(Array));
    });
    it('should have 80 items in it', function() {
      expect(scope.graphs[0].data.length).toEqual(80);
    });
  });

  describe('scope.graphs[0].data[0]', function() {
    it('should be an Array', function () {
      expect(scope.graphs[0].data[0]).toEqual(jasmine.any(Array));
    });
  });


  // scope.graphs[0].data[0]
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
    it('should equal \'9.5\'', function () {
      expect(scope.graphs[0].data[0][2]).toBe(9.5);
    });
  });


  // scope.graphs[0].data[10]
  describe('scope.graphs[0].data[10][0]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[10][0]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[10][0]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1950\'', function () {
      expect(scope.graphs[0].data[10][0]).toBe(1950);
    });
  });

  describe('scope.graphs[0].data[10][1]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[10][1]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[10][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'39.4\'', function () {
      expect(scope.graphs[0].data[10][1]).toBe(39.4);
    });
  });


  describe('scope.graphs[0].data[10][2]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[10][2]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[10][2]).toEqual(jasmine.any(Number));
    });
    it('should equal \'42.6\'', function () {
      expect(scope.graphs[0].data[10][2]).toBe(42.6);
    });
  });


  // scope.graphs[0].data[20]
  describe('scope.graphs[0].data[20][0]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[20][0]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[20][0]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1960\'', function () {
      expect(scope.graphs[0].data[20][0]).toBe(1960);
    });
  });

  describe('scope.graphs[0].data[20][1]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[20][1]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[20][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'92.5\'', function () {
      expect(scope.graphs[0].data[20][1]).toBe(92.5);
    });
  });


  describe('scope.graphs[0].data[20][2]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[20][2]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[20][2]).toEqual(jasmine.any(Number));
    });
    it('should equal \'92.2\'', function () {
      expect(scope.graphs[0].data[20][2]).toBe(92.2);
    });
  });


  // scope.graphs[0].data[30]
  describe('scope.graphs[0].data[30][0]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[30][0]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[30][0]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1970\'', function () {
      expect(scope.graphs[0].data[30][0]).toBe(1970);
    });
  });

  describe('scope.graphs[0].data[30][1]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[30][1]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[30][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'192.8\'', function () {
      expect(scope.graphs[0].data[30][1]).toBe(192.8);
    });
  });


  describe('scope.graphs[0].data[30][2]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[30][2]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[30][2]).toEqual(jasmine.any(Number));
    });
    it('should equal \'195.6\'', function () {
      expect(scope.graphs[0].data[30][2]).toBe(195.6);
    });
  });


  // scope.graphs[0].data[40]
  describe('scope.graphs[0].data[40][0]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[40][0]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[40][0]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1980\'', function () {
      expect(scope.graphs[0].data[40][0]).toBe(1980);
    });
  });

  describe('scope.graphs[0].data[40][1]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[40][1]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[40][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'517.1\'', function () {
      expect(scope.graphs[0].data[40][1]).toBe(517.1);
    });
  });


  describe('scope.graphs[0].data[40][2]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[40][2]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[40][2]).toEqual(jasmine.any(Number));
    });
    it('should equal \'590.9\'', function () {
      expect(scope.graphs[0].data[40][2]).toBe(590.9);
    });
  });


  // scope.graphs[0].data[50]
  describe('scope.graphs[0].data[50][0]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[50][0]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[50][0]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1990\'', function () {
      expect(scope.graphs[0].data[50][0]).toBe(1990);
    });
  });

  describe('scope.graphs[0].data[50][1]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[50][1]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[50][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1032\'', function () {
      expect(scope.graphs[0].data[50][1]).toBe(1032);
    });
  });


  describe('scope.graphs[0].data[50][2]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[50][2]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[50][2]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1253\'', function () {
      expect(scope.graphs[0].data[50][2]).toBe(1253);
    });
  });


  // scope.graphs[0].data[60]
  describe('scope.graphs[0].data[60][0]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[60][0]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[60][0]).toEqual(jasmine.any(Number));
    });
    it('should equal \'2000\'', function () {
      expect(scope.graphs[0].data[60][0]).toBe(2000);
    });
  });

  describe('scope.graphs[0].data[60][1]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[60][1]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[60][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'2025.2\'', function () {
      expect(scope.graphs[0].data[60][1]).toBe(2025.2);
    });
  });


  describe('scope.graphs[0].data[60][2]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[60][2]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[60][2]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1789\'', function () {
      expect(scope.graphs[0].data[60][2]).toBe(1789);
    });
  });


  // scope.graphs[0].data[70]
  describe('scope.graphs[0].data[70][0]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[70][0]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[70][0]).toEqual(jasmine.any(Number));
    });
    it('should equal \'2010\'', function () {
      expect(scope.graphs[0].data[70][0]).toBe(2010);
    });
  });

  describe('scope.graphs[0].data[70][1]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[70][1]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[70][1]).toEqual(jasmine.any(Number));
    });
    it('should equal \'2162.7\'', function () {
      expect(scope.graphs[0].data[70][1]).toBe(2162.7);
    });
  });


  describe('scope.graphs[0].data[70][2]', function() {
    it('should not be null', function() {
      expect(scope.graphs[0].data[70][2]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[0].data[70][2]).toEqual(jasmine.any(Number));
    });
    it('should equal \'3457.1\'', function () {
      expect(scope.graphs[0].data[70][2]).toBe(3457.1);
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

  describe('graphs [0] opts', function() {
    describe('drawPoints', function() {
      it('should be true', function() {
        expect(scope.graphs[0].opts).toEqual(jasmine.objectContaining({
          drawPoints: true
        }));
      });
    });

    describe('xlabel', function() {
      it('should be \'Fiscal Year\'', function() {
        expect(scope.graphs[0].opts).toEqual(jasmine.objectContaining({
          xlabel: 'Fiscal Year'
        }));
      });
    });

    describe('ylabel', function() {
      it('should be \'In Billions of Dollars\'', function() {
        expect(scope.graphs[0].opts).toEqual(jasmine.objectContaining({
          ylabel: 'In Billions of Dollars'
        }));
      });
    });

    describe('title', function() {
      it('should be \'Receipts & Outlays in Current Dollars: 1940-2019\'', function() {
        expect(scope.graphs[0].opts).toEqual(jasmine.objectContaining({
          title: 'Receipts & Outlays in Current Dollars: 1940-2019'
        }));
      });
    });
  });


  // ================================
  // graphs[1] attribute tests
  // ================================

  describe('scope.graphs[1].graphType', function() {
    it('should be \'Receipts-Current\'', function() {
      expect(scope.graphs[1]).toEqual(jasmine.objectContaining({
        graphType: 'Receipts-Constant'
      }));
    });
  });

  describe('scope.graphs[1].shown', function() {
    it('should be \'false\'', function() {
      expect(scope.graphs[1]).toEqual(jasmine.objectContaining({
        shown: false
      }));
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
  // graphs[1] option tests
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

  describe('graphs [1] opts', function() {
    describe('drawPoints', function() {
      it('should be true', function() {
        expect(scope.graphs[1].opts).toEqual(jasmine.objectContaining({
          drawPoints: true
        }));
      });
    });

    describe('xlabel', function() {
      it('should be \'Fiscal Year\'', function() {
        expect(scope.graphs[1].opts).toEqual(jasmine.objectContaining({
          xlabel: 'Fiscal Year'
        }));
      });
    });

    describe('ylabel', function() {
      it('should be \'In Billions of Dollars\'', function() {
        expect(scope.graphs[1].opts).toEqual(jasmine.objectContaining({
          ylabel: 'In Billions of Dollars'
        }));
      });
    });1
    describe('title', function() {
      it('should be \'Receipts & Outlays in Constant Dollars: 1940-2019\'', function() {
        expect(scope.graphs[1].opts).toEqual(jasmine.objectContaining({
          title: 'Receipts & Outlays in Constant Dollars: 1940-2019'
        }));
      });
    });
  });



  // ================================
  // graphs[2] attribute tests
  // ================================

  describe('scope.graphs[2].graphType', function() {
    it('should be \'Receipts-Current\'', function() {
      expect(scope.graphs[2]).toEqual(jasmine.objectContaining({
        graphType: 'Receipts-GDP'
      }));
    });
  });

  describe('scope.graphs[2].shown', function() {
    it('should be \'false\'', function() {
      expect(scope.graphs[2]).toEqual(jasmine.objectContaining({
        shown: false
      }));
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
  // graphs[2] option tests
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

  describe('graphs [2] opts', function() {
    describe('drawPoints', function() {
      it('should be true', function() {
        expect(scope.graphs[2].opts).toEqual(jasmine.objectContaining({
          drawPoints: true
        }));
      });
    });

    describe('xlabel', function() {
      it('should be \'Fiscal Year\'', function() {
        expect(scope.graphs[2].opts).toEqual(jasmine.objectContaining({
          xlabel: 'Fiscal Year'
        }));
      });
    });

    describe('ylabel', function() {
      it('should be \'In Billions of Dollars\'', function() {
        expect(scope.graphs[2].opts).toEqual(jasmine.objectContaining({
          ylabel: 'In Billions of Dollars'
        }));
      });
    });1
    describe('title', function() {
      it('should be \'Receipts & Outlays as Percentage of GDP: 1940-2019\'', function() {
        expect(scope.graphs[2].opts).toEqual(jasmine.objectContaining({
          title: 'Receipts & Outlays as Percentage of GDP: 1940-2019'
        }));
      });
    });
  });


  // ================================
  // graphs[3] attribute tests
  // ================================

  describe('scope.graphs[3].graphType', function() {
    it('should be \'Receipts-Current\'', function() {
      expect(scope.graphs[3]).toEqual(jasmine.objectContaining({
        graphType: 'Surplus-Current'
      }));
    });
  });

  describe('scope.graphs[3].shown', function() {
    it('should be \'false\'', function() {
      expect(scope.graphs[3]).toEqual(jasmine.objectContaining({
        shown: false
      }));
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

  describe('graphs [3] opts', function() {
    describe('drawPoints', function() {
      it('should be true', function() {
        expect(scope.graphs[3].opts).toEqual(jasmine.objectContaining({
          drawPoints: true
        }));
      });
    });

    describe('xlabel', function() {
      it('should be \'Fiscal Year\'', function() {
        expect(scope.graphs[3].opts).toEqual(jasmine.objectContaining({
          xlabel: 'Fiscal Year'
        }));
      });
    });

    describe('ylabel', function() {
      it('should be \'Percentage Surplus or Deficit\'', function() {
        expect(scope.graphs[3].opts).toEqual(jasmine.objectContaining({
          ylabel: 'Percentage Surplus or Deficit'
        }));
      });
    });1
    describe('title', function() {
      it('should be \'Surpluses or Deficits in Current Dollars: 1940-2019\'', function() {
        expect(scope.graphs[3].opts).toEqual(jasmine.objectContaining({
          title: 'Surpluses or Deficits in Current Dollars: 1940-2019'
        }));
      });
    });
  });


  // ================================
  // graphs[4] attribute tests
  // ================================

  describe('scope.graphs[4].graphType', function() {
    it('should be \'Receipts-Current\'', function() {
      expect(scope.graphs[4]).toEqual(jasmine.objectContaining({
        graphType: 'Surplus-Constant'
      }));
    });
  });

  describe('scope.graphs[4].shown', function() {
    it('should be \'false\'', function() {
      expect(scope.graphs[4]).toEqual(jasmine.objectContaining({
        shown: false
      }));
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
    it('should not be null', function() {
      expect(scope.graphs[4].data[0][0]).toEqual(jasmine.anything());
    });
    it('should be a Number', function () {
      expect(scope.graphs[4].data[0][0]).toEqual(jasmine.any(Number));
    });
    it('should equal \'1940\'', function () {
      expect(scope.graphs[4].data[0][0]).toBe(1940);
    });
  });

  describe('scope.graphs[4].data[0][1]', function() {
    it('should not be null', function() {
      expect(scope.graphs[4].data[0][1]).toEqual(jasmine.anything());
    });
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

  describe('graphs [4] opts', function() {
    describe('drawPoints', function() {
      it('should be true', function() {
        expect(scope.graphs[4].opts).toEqual(jasmine.objectContaining({
          drawPoints: true
        }));
      });
    });

    describe('xlabel', function() {
      it('should be \'Fiscal Year\'', function() {
        expect(scope.graphs[4].opts).toEqual(jasmine.objectContaining({
          xlabel: 'Fiscal Year'
        }));
      });
    });

    describe('ylabel', function() {
      it('should be \'Percentage Surplus or Deficit\'', function() {
        expect(scope.graphs[4].opts).toEqual(jasmine.objectContaining({
          ylabel: 'Percentage Surplus or Deficit'
        }));
      });
    });1
    describe('title', function() {
      it('should be \'Surpluses or Deficits in Constant Dollars: 1940-2019\'', function() {
        expect(scope.graphs[4].opts).toEqual(jasmine.objectContaining({
          title: 'Surpluses or Deficits in Constant Dollars: 1940-2019'
        }));
      });
    });
  });



  // ================================
  // graphs[5] attribute tests
  // ================================

  describe('scope.graphs[5].graphType', function() {
    it('should be \'Receipts-Current\'', function() {
      expect(scope.graphs[5]).toEqual(jasmine.objectContaining({
        graphType: 'Surplus-GDP'
      }));
    });
  });

  describe('scope.graphs[5].shown', function() {
    it('should be \'false\'', function() {
      expect(scope.graphs[5]).toEqual(jasmine.objectContaining({
        shown: false
      }));
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
    it('should not be null', function() {
      expect(scope.graphs[5].data[0][0]).toEqual(jasmine.anything());
    });
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
  // graphs[5] option tests
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

  describe('graphs [5] opts', function() {
    describe('drawPoints', function() {
      it('should be true', function() {
        expect(scope.graphs[5].opts).toEqual(jasmine.objectContaining({
          drawPoints: true
        }));
      });
    });

    describe('xlabel', function() {
      it('should be \'Fiscal Year\'', function() {
        expect(scope.graphs[5].opts).toEqual(jasmine.objectContaining({
          xlabel: 'Fiscal Year'
        }));
      });
    });

    describe('ylabel', function() {
      it('should be \'Percentage Surplus or Deficit\'', function() {
        expect(scope.graphs[5].opts).toEqual(jasmine.objectContaining({
          ylabel: 'Percentage Surplus or Deficit'
        }));
      });
    });1
    describe('title', function() {
      it('should be \'Surpluses or Deficits in as a Pct. of GDP: 1940-2019\'', function() {
        expect(scope.graphs[5].opts).toEqual(jasmine.objectContaining({
          title: 'Surpluses or Deficits in as a Pct. of GDP: 1940-2019'
        }));
      });
    });
  });
});
