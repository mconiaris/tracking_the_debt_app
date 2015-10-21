'use strict';

/**
 * @ngdoc function
 * @name trackingTheDebtAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the trackingTheDebtAppApp
 */
var myApp = angular.module('trackingTheDebtApp')
  .controller('MainCtrl', function ($scope) {
    $scope.message = "MainCtrl loaded";
    console.log($scope.message);
});



myApp.controller('GraphCtrl', ['$scope', function($scope) {

  $scope.message = "GraphCtrl loaded.";
  console.log($scope.message);

  $scope.graph = {
    data: [
    [1940,6.5,9.5],
    [1941,8.7,13.7],
    [1942,14.6,35.1],
    [1943,24.0,78.6],
    [1944,43.7,91.3],
    [1945,45.2,92.7],
    [1946,39.3,55.2],
    [1947,38.5,34.5],
    [1948,41.6,29.8],
    [1949,39.4,38.8],
    [1950,39.4,42.6],
    [1951,51.6,45.5],
    [1952,66.2,67.7],
    [1953,69.6,76.1],
    [1954,69.7,70.9],
    [1955,65.5,68.4],
    [1956,74.6,70.6],
    [1957,80.0,76.6],
    [1958,79.6,82.4],
    [1959,79.2,92.1],
    [1960,92.5,92.2],
    [1961,94.4,97.7],
    [1962,99.7,106.8],
    [1963,106.6,111.3],
    [1964,112.6,118.5],
    [1965,116.8,118.2],
    [1966,130.8,134.5],
    [1967,148.8,157.5],
    [1968,153.0,178.1],
    [1969,186.9,183.6],
    [1970,192.8,195.6],
    [1971,187.1,210.2],
    [1972,207.3,230.7],
    [1973,230.8,245.7],
    [1974,263.2,269.4],
    [1975,279.1,332.3],
    [1976,298.1,371.8],
    [1977,355.6,409.2],
    [1978,399.6,458.7],
    [1979,463.3,504.0],
    [1980,517.1,590.9],
    [1981,599.3,678.2],
    [1982,617.8,745.7],
    [1983,600.6,808.4],
    [1984,666.4,851.8],
    [1985,734.0,946.3],
    [1986,769.2,990.4],
    [1987,854.3,1004.0],
    [1988,909.2,1064.4],
    [1989,991.1,1143.7],
    [1990,1032.0,1253.0],
    [1991,1055.0,1324.2],
    [1992,1091.2,1381.5],
    [1993,1154.3,1409.4],
    [1994,1258.6,1461.8],
    [1995,1351.8,1515.7],
    [1996,1453.1,1560.5],
    [1997,1579.2,1601.1],
    [1998,1721.7,1652.5],
    [1999,1827.5,1701.8],
    [2000,2025.2,1789.0],
    [2001,1991.1,1862.8],
    [2002,1853.1,2010.9],
    [2003,1782.3,2159.9],
    [2004,1880.1,2292.8],
    [2005,2153.6,2472.0],
    [2006,2406.9,2655.0],
    [2007,2568.0,2728.7],
    [2008,2524.0,2982.5],
    [2009,2105.0,3517.7],
    [2010,2162.7,3457.1],
    [2011,2303.5,3603.1],
    [2012,2450.2,3537.1],
    [2013,2775.1,3454.6],
    [2014,3001.7,3650.5],
    [2015,3337.4,3901.0],
    [2016,3568.0,4099.1],
    [2017,3810.8,4268.6],
    [2018,4029.9,4443.1],
    [2019,4226.1,4728.8]
    ],
    opts: {
      labels: [ "Fiscal Year", "Receipts", "Outlays" ],
      drawPoints: true,
      xlabel:"Fiscal Year",
      ylabel:"In Billions of Dollars",
      title: "Receipts & Outlays in Current Dollars: 1940-2019",
    }
  };
  console.log($scope.graph);

  $scope.currentDollars = function() {
    console.log("currentDollars button pressed.");
    $scope.graph = {
        data: [
            [1940,6.5,9.5],
            [1941,8.7,13.7],
            [1942,14.6,35.1],
            [1943,24.0,78.6],
        ],
        opts: {
            labels: [ "Fiscal Year", "Receipts", "Outlays" ],
        }
    };
    console.log($scope.graph);
  };
}]);


myApp.directive('graph', function() {
  console.log("From directive.");
  return {
    restrict: 'E', // Use as element
    scope: { // Isolate scope
        data: '=', // Two-way bind data to local scope
        opts: '=?' // '?' means optional
    },
    template: "<div id=\"graph\"></div>", // We need a div to attach graph to
    link: function(scope, elem, attrs) {

      var graph = new Dygraph(elem.children()[0], scope.data, scope.opts );
      console.log("link: " + this);
      console.log(graph);
    }
  };
});
