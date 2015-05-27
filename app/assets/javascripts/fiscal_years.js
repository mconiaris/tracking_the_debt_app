// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

  // Load default graph
    // containing div
    // CSV or path to a CSV file. Loaded through  fiscal years helper
    current_dollars = [
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
    ]

    constant_dollars = [
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
    ]


$(document).ready(function() {
  console.log( "fiscal_years.js ready" );

  g = new Dygraph(

    document.getElementById("graphdiv"),

    current_dollars,
    {
      labels: [ "Fiscal Year", "Receipts", "Outlays" ],
      drawPoints: true,
      xlabel:"Fiscal Year",
      ylabel:"In Billions of Dollars",
      title: "Receipts & Outlays in Current Dollars: 1940-2019",
      titleHeight: 25,
      pointSize: 2,
      // TODO: If statement that turns surplus green
      colors: ["green", "red"],
      axisLabelFontSize: 12
    }
  );

  // retrieve the jQuery wrapped dom object identified by the selector '#choices'
  var sel = $('#choices');
  // assign a change listener to it
  sel.change(function(){ //inside the listener
    // retrieve the value of the object firing the event (referenced by this)
    var value = $(this).val();
    // print it in the logs
    console.log(value + " selected."); // crashes in IE, if console not open
    // make the text of all label elements be the value
    $('label').text(value);
  }); // close the change listener


  // Responds to user's choice of desired graph.
  $('#choices').change(function() {

    // Receipts & Outlays (Current Dollars)
    if($('#choices option:selected').val() == "current-receipts") {
      console.log("#choices option:selected equals " + $('#choices option:selected').val());
      g.user_attrs_.title = "Receipts & Outlays Current Dollars: 1940-2019";
      g.user_attrs_.ylabel = "In Billions of Dollars";
      g.user_attrs_.labels = [ "Fiscal Year", "Receipts", "Outlays" ];
      g.updateOptions({file: current_dollars })
      g.drawGraph_();
  //     // Receipts & Outlays (2009 Dollars)
    } else if ($('#choices option:selected').val() == "constant-receipts") {
      console.log("#choices option:selected equals " + $('#choices option:selected').val());
      g.user_attrs_.title = "Receipts & Outlays in Constant (2009) Dollars: 1940-2019";
      g.user_attrs_.labels = [ "Fiscal Year", "Receipts", "Outlays" ];
      g.updateOptions({file: constant_dollars })
      g.drawGraph_();
      // Receipts & Outlays as Percentage of GDP
    } else if ($('#choices option:selected').val() == "gdp-receipts") {
  //     console.log("#choices option:selected equals " + $('#choices option:selected').val());
  //     g.user_attrs_.title = "Receipts & Outlays as a Percentage of GDP: 1940-2019";
  //     g.user_attrs_.labels = [ "Fiscal Year", "Receipts", "Outlays" ];
  //     g.updateOptions({file: <%= gdp_dollars %>})
  //     g.drawGraph_();
  //     // Surpluses or Deficits (Current Dollars)
  //   } else if ($('#choices option:selected').val() == "current-surpluses") {
  //     console.log("#choices option:selected equals " + $('#choices option:selected').val());
  //     g.user_attrs_.title = "Surpluses or Deficits in Current Dollars: 1940-2019";
  //     g.user_attrs_.ylabel = "Percentage Surplus or Deficit";
  //     g.user_attrs_.labels = [ "Fiscal Year", "Surplus/Deficit" ];
  //     g.updateOptions({file: <%= surplus_deficit_current_dollars %>});

  //     g.drawGraph_();
  //     // Surpluses or Deficits (2009 Dollars)
  //   } else if ($('#choices option:selected').val() == "constant-surpluses") {
  //     console.log("#choices option:selected equals " + $('#choices option:selected').val());
  //     g.user_attrs_.title = "Surpluses or Deficits in Constant (2009) Dollars: 1940-2019";
  //     g.updateOptions({file: <%= surplus_deficit_constant_dollars %>});
  //     g.user_attrs_.labels = [ "Fiscal Year", "Surplus/Deficit" ];
  //     g.drawGraph_();
  //     // Surpluses or Deficits as Percentage of GDP
  //   } else if ($('#choices option:selected').val() == "gdp-surpluses") {
  //     console.log("#choices option:selected equals " + $('#choices option:selected').val());
  //     g.user_attrs_.title = "Surpluses or Deficits as a Percentage of GDP: 1940-2019";
  //     g.user_attrs_.labels = [ "Fiscal Year", "Surplus/Deficit" ];
  //     g.updateOptions({file: <%= surplus_deficit_gdp_dollars %>});
  //     g.drawGraph_();
  //   } else {
  //     console.log("Option selected not configured. Keeping existing graph.");
    }
  });

});

