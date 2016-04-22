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


  // Directives Tutorial
  // https://www.codementor.io/angularjs/tutorial/create-dropdown-control




// Inline array annotation, where we pass an
// array whose elements consist of a list of
// strings (the names of the dependencies)
// followed by the function itself.
myApp.controller('GraphCtrl', ['$scope', '$window', function($scope, $window) {

  $scope.message = 'GraphCtrl loaded.';
  console.log($scope.message);

  $scope.graphs = [
    {
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
            labels: [ 'Fiscal Year', 'Receipts', 'Outlays' ],
            drawPoints: true,
            xlabel: 'Fiscal Year',
            ylabel: 'In Billions of Dollars',
            title: 'Receipts & Outlays in Current Dollars: 1940-2019',
        },
        graphType: 'Receipts-Current',
        shown: true
    },
    // Constant Dollars Graph
    {
        data: [
            [1940,96.3,139.2],
            [1941,117.4,184.0],
            [1942,170.2,408.6],
            [1943,250.8,820.8],
            [1944,495.4,1034.0],
            [1945,542.1,1113.0],
            [1946,467.8,657.5],
            [1947,410.2,367.4],
            [1948,417.7,299.1],
            [1949,410.6,404.5],
            [1950,392.1,423.1],
            [1951,513.1,452.4],
            [1952,659.7,674.8],
            [1953,645.7,705.9],
            [1954,625.1,635.5],
            [1955,568.2,594.1],
            [1956,620.5,587.7],
            [1957,634.8,607.8],
            [1958,596.5,617.3],
            [1959,570.5,663.1],
            [1960,656.0,653.8],
            [1961,655.0,678.2],
            [1962,691.2,740.8],
            [1963,709.5,741.1],
            [1964,737.5,776.2],
            [1965,753.7,762.8],
            [1966,821.3,844.5],
            [1967,913.6,966.6],
            [1968,905.7,1054.7],
            [1969,1041.1,1023.1],
            [1970,1016.4,1031.4],
            [1971,922.3,1035.8],
            [1972,958.0,1066.0],
            [1973,1019.0,1084.8],
            [1974,1073.1,1098.1],
            [1975,1036.0,1233.6],
            [1976,1032.8,1288.3],
            [1977,1148.4,1321.8],
            [1978,1214.1,1393.9],
            [1979,1296.7,1410.7],
            [1980,1309.5,1496.4],
            [1981,1366.0,1546.0],
            [1982,1309.7,1581.0],
            [1983,1213.5,1633.4],
            [1984,1290.3,1649.2],
            [1985,1376.1,1774.2],
            [1986,1404.3,1808.3],
            [1987,1517.1,1783.0],
            [1988,1562.3,1828.9],
            [1989,1640.1,1892.7],
            [1990,1657.5,2012.5],
            [1991,1619.3,2032.6],
            [1992,1614.7,2044.3],
            [1993,1659.0,2025.6],
            [1994,1775.9,2062.6],
            [1995,1853.3,2078.1],
            [1996,1949.9,2094.0],
            [1997,2077.4,2106.2],
            [1998,2244.8,2154.4],
            [1999,2352.5,2190.8],
            [2000,2543.6,2246.9],
            [2001,2435.6,2278.7],
            [2002,2229.2,2419.0],
            [2003,2086.0,2528.0],
            [2004,2142.8,2613.2],
            [2005,2371.8,2722.4],
            [2006,2562.1,2826.3],
            [2007,2663.1,2829.7],
            [2008,2529.0,2988.5],
            [2009,2105.0,3517.7],
            [2010,2137.5,3416.8],
            [2011,2232.7,3492.4],
            [2012,2331.0,3365.2],
            [2013,2597.9,3234.0],
            [2014,2768.9,3367.3],
            [2015,3022.2,3532.5],
            [2016,3164.2,3635.2],
            [2017,3307.7,3705.1],
            [2018,3421.2,3772.1],
            [2019,3509.2,3926.6]
        ],
        opts: {
            labels: [ 'Fiscal Year', 'Receipts', 'Outlays' ],
            drawPoints: true,
            xlabel:'Fiscal Year',
            ylabel:'In Billions of Dollars',
            title: 'Receipts & Outlays in Constant Dollars: 1940-2019',
        },
        graphType: 'Receipts-Constant',
        shown: false
    },
    {
        data: [
            [1940,6.7,9.6],
            [1941,7.5,11.7],
            [1942,9.9,23.8],
            [1943,13.0,42.6],
            [1944,20.5,42.7],
            [1945,19.9,41.0],
            [1946,17.2,24.2],
            [1947,16.1,14.4],
            [1948,15.8,11.3],
            [1949,14.2,14.0],
            [1950,14.1,15.3],
            [1951,15.8,13.9],
            [1952,18.5,18.9],
            [1953,18.2,19.9],
            [1954,18.0,18.3],
            [1955,16.1,16.8],
            [1956,17.0,16.1],
            [1957,17.2,16.5],
            [1958,16.8,17.4],
            [1959,15.7,18.2],
            [1960,17.3,17.2],
            [1961,17.2,17.8],
            [1962,17.0,18.2],
            [1963,17.2,18.0],
            [1964,17.0,17.9],
            [1965,16.4,16.6],
            [1966,16.7,17.2],
            [1967,17.8,18.8],
            [1968,17.0,19.8],
            [1969,19.0,18.7],
            [1970,18.4,18.6],
            [1971,16.7,18.8],
            [1972,17.0,18.9],
            [1973,17.0,18.1],
            [1974,17.7,18.1],
            [1975,17.3,20.6],
            [1976,16.6,20.8],
            [1977,17.5,20.2],
            [1978,17.5,20.1],
            [1979,18.0,19.6],
            [1980,18.5,21.1],
            [1981,19.1,21.6],
            [1982,18.6,22.5],
            [1983,17.0,22.8],
            [1984,16.9,21.5],
            [1985,17.2,22.2],
            [1986,17.0,21.8],
            [1987,17.9,21.0],
            [1988,17.6,20.6],
            [1989,17.8,20.5],
            [1990,17.4,21.2],
            [1991,17.3,21.7],
            [1992,17.0,21.5],
            [1993,17.0,20.7],
            [1994,17.5,20.3],
            [1995,17.8,20.0],
            [1996,18.2,19.6],
            [1997,18.6,18.9],
            [1998,19.2,18.5],
            [1999,19.2,17.9],
            [2000,19.9,17.6],
            [2001,18.8,17.6],
            [2002,17.0,18.5],
            [2003,15.7,19.1],
            [2004,15.6,19.0],
            [2005,16.7,19.2],
            [2006,17.6,19.4],
            [2007,17.9,19.0],
            [2008,17.1,20.2],
            [2009,14.6,24.4],
            [2010,14.6,23.4],
            [2011,15.0,23.4],
            [2012,15.2,22.0],
            [2013,16.7,20.8],
            [2014,17.3,21.1],
            [2015,18.3,21.4],
            [2016,18.6,21.4],
            [2017,18.9,21.1],
            [2018,19.0,20.9],
            [2019,19.0,21.3]
        ],
        opts: {
            labels: [ 'Fiscal Year', 'Receipts', 'Outlays' ],
            drawPoints: true,
            xlabel:'Fiscal Year',
            ylabel:'In Billions of Dollars',
            title: 'Receipts & Outlays as Percentage of GDP: 1940-2019',
        },
        graphType: 'Receipts-GDP',
        shown: false
    },
    {
        data: [
            [1940,-2.9],
            [1941,-4.9],
            [1942,-20.5],
            [1943,-54.6],
            [1944,-47.6],
            [1945,-47.6],
            [1946,-15.9],
            [1947,4.0],
            [1948,11.8],
            [1949,0.6],
            [1950,-3.1],
            [1951,6.1],
            [1952,-1.5],
            [1953,-6.5],
            [1954,-1.2],
            [1955,-3.0],
            [1956,3.9],
            [1957,3.4],
            [1958,-2.8],
            [1959,-12.8],
            [1960,0.3],
            [1961,-3.3],
            [1962,-7.1],
            [1963,-4.8],
            [1964,-5.9],
            [1965,-1.4],
            [1966,-3.7],
            [1967,-8.6],
            [1968,-25.2],
            [1969,3.2],
            [1970,-2.8],
            [1971,-23.0],
            [1972,-23.4],
            [1973,-14.9],
            [1974,-6.1],
            [1975,-53.2],
            [1976,-73.7],
            [1977,-53.7],
            [1978,-59.2],
            [1979,-40.7],
            [1980,-73.8],
            [1981,-79.0],
            [1982,-128.0],
            [1983,-207.8],
            [1984,-185.4],
            [1985,-212.3],
            [1986,-221.2],
            [1987,-149.7],
            [1988,-155.2],
            [1989,-152.6],
            [1990,-221.0],
            [1991,-269.2],
            [1992,-290.3],
            [1993,-255.1],
            [1994,-203.2],
            [1995,-164.0],
            [1996,-107.4],
            [1997,-21.9],
            [1998,69.3],
            [1999,125.6],
            [2000,236.2],
            [2001,128.2],
            [2002,-157.8],
            [2003,-377.6],
            [2004,-412.7],
            [2005,-318.3],
            [2006,-248.2],
            [2007,-160.7],
            [2008,-458.6],
            [2009,-1412.7],
            [2010,-1294.4],
            [2011,-1299.6],
            [2012,-1087.0],
            [2013,-679.5],
            [2014,-648.8],
            [2015,-563.6],
            [2016,-531.1],
            [2017,-457.8],
            [2018,-413.3],
            [2019,-502.7]
        ],
        opts: {
            labels: [ "Fiscal Year", "Surplus/Deficit" ],
            drawPoints: true,
            xlabel:"Fiscal Year",
            ylabel:"Percentage Surplus or Deficit",
            title: "Surpluses or Deficits in Current Dollars: 1940-2019",
        },
        graphType: 'Surplus-Current',
        shown: false
    },
    {
        data: [
            [1940,-42.9],
            [1941,-66.6],
            [1942,-238.4],
            [1943,-570.1],
            [1944,-538.6],
            [1945,-570.9],
            [1946,-189.7],
            [1947,42.8],
            [1948,118.6],
            [1949,6.0],
            [1950,-31.0],
            [1951,60.7],
            [1952,-15.1],
            [1953,-60.2],
            [1954,-10.4],
            [1955,-26.0],
            [1956,32.8],
            [1957,27.1],
            [1958,-20.7],
            [1959,-92.5],
            [1960,2.1],
            [1961,-23.1],
            [1962,-49.6],
            [1963,-31.7],
            [1964,-38.7],
            [1965,-9.1],
            [1966,-23.2],
            [1967,-53.1],
            [1968,-149.0],
            [1969,18.1],
            [1970,-15.0],
            [1971,-113.5],
            [1972,-108.0],
            [1973,-65.8],
            [1974,-25.0],
            [1975,-197.6],
            [1976,-255.5],
            [1977,-173.3],
            [1978,-179.8],
            [1979,-114.0],
            [1980,-187.0],
            [1981,-180.0],
            [1982,-271.3],
            [1983,-419.9],
            [1984,-358.9],
            [1985,-398.0],
            [1986,-403.9],
            [1987,-265.9],
            [1988,-266.6],
            [1989,-252.6],
            [1990,-355.0],
            [1991,-413.3],
            [1992,-429.6],
            [1993,-366.6],
            [1994,-286.7],
            [1995,-224.8],
            [1996,-144.2],
            [1997,-28.8],
            [1998,90.3],
            [1999,161.7],
            [2000,296.7],
            [2001,156.9],
            [2002,-189.8],
            [2003,-441.9],
            [2004,-470.4],
            [2005,-350.6],
            [2006,-264.2],
            [2007,-166.7],
            [2008,-459.5],
            [2009,-1412.7],
            [2010,-1279.3],
            [2011,-1259.7],
            [2012,-1034.1],
            [2013,-636.1],
            [2014,-598.5],
            [2015,-510.3],
            [2016,-471.0],
            [2017,-397.4],
            [2018,-350.9],
            [2019,-417.4]
        ],
        opts: {
            labels: [ "Fiscal Year", "Surplus/Deficit" ],
            drawPoints: true,
            xlabel:"Fiscal Year",
            ylabel:"Percentage Surplus or Deficit",
            title: "Surpluses or Deficits in Constant Dollars: 1940-2019",
        },
        graphType: 'Surplus-Constant',
        shown: false
    },
    {
        data: [
            [1940,-3.0],
            [1941,-4.3],
            [1942,-13.9],
            [1943,-29.6],
            [1944,-22.2],
            [1945,-21.0],
            [1946,-7.0],
            [1947,1.7],
            [1948,4.5],
            [1949,0.2],
            [1950,-1.1],
            [1951,1.9],
            [1952,-0.4],
            [1953,-1.7],
            [1954,-0.3],
            [1955,-0.7],
            [1956,0.9],
            [1957,0.7],
            [1958,-0.6],
            [1959,-2.5],
            [1960,0.1],
            [1961,-0.6],
            [1962,-1.2],
            [1963,-0.8],
            [1964,-0.9],
            [1965,-0.2],
            [1966,-0.5],
            [1967,-1.0],
            [1968,-2.8],
            [1969,0.3],
            [1970,-0.3],
            [1971,-2.1],
            [1972,-1.9],
            [1973,-1.1],
            [1974,-0.4],
            [1975,-3.3],
            [1976,-4.1],
            [1977,-2.6],
            [1978,-2.6],
            [1979,-1.6],
            [1980,-2.6],
            [1981,-2.5],
            [1982,-3.9],
            [1983,-5.9],
            [1984,-4.7],
            [1985,-5.0],
            [1986,-4.9],
            [1987,-3.1],
            [1988,-3.0],
            [1989,-2.7],
            [1990,-3.7],
            [1991,-4.4],
            [1992,-4.5],
            [1993,-3.8],
            [1994,-2.8],
            [1995,-2.2],
            [1996,-1.3],
            [1997,-0.3],
            [1998,0.8],
            [1999,1.3],
            [2000,2.3],
            [2001,1.2],
            [2002,-1.5],
            [2003,-3.3],
            [2004,-3.4],
            [2005,-2.5],
            [2006,-1.8],
            [2007,-1.1],
            [2008,-3.1],
            [2009,-9.8],
            [2010,-8.8],
            [2011,-8.4],
            [2012,-6.8],
            [2013,-4.1],
            [2014,-3.7],
            [2015,-3.1],
            [2016,-2.8],
            [2017,-2.3],
            [2018,-1.9],
            [2019,-2.3]
        ],
        opts: {
            labels: [ "Fiscal Year", "Surplus/Deficit" ],
            drawPoints: true,
            xlabel:"Fiscal Year",
            ylabel:"Percentage Surplus or Deficit",
            title: "Surpluses or Deficits in as a Pct. of GDP: 1940-2019",
        },
        graphType: 'Surplus-GDP',
        shown: false
    }
  ];


  // Function to show or hide particular graph
  $scope.flipMode = function(graphType) {
    $scope.graphs.forEach(function (graph) {
        if(graphType === graph.graphType){
            graph.shown = true;
        }
        else{
            graph.shown = false;
        }
    });
    console.log(graphType + ' button pressed');
  };
}]).directive('dygraph', function($window) {
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
      console.log('dygraph directive called.');

      function resize() {

          var parent = elem.parent();
          graph.resize(parent.width(), (parent.height()-50));
      }
      resize();

      var w = angular.element($window);
        w.bind('resize', function () {
          $window.location.reload();
          resize();
      });
    }
  };
});
