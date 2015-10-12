// TODO: Find a cleaner way to bring the variables into the Dygraph

// Load default graph
// containing div
// CSV or path to a CSV file. Loaded through  fiscal years helper

// Enable Javascript strict mode.
"use strict";

var graph = (function() {
  console.log( "graph.js ready" );

  var g;

  g = new Dygraph(

    document.getElementById("graphdiv"),

    [
      [1940,6.5,9.5],
      [1941,8.7,13.7],
      [1942,14.6,35.1]
    ],
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
  return graph;

  // // retrieve the jQuery wrapped dom object identified by the selector '#choices'
  // var sel = $('#choices');
  // // assign a change listener to it
  // sel.change(function(){ //inside the listener
  //   // retrieve the value of the object firing the event (referenced by this)
  //   var value = $(this).val();
  //   // print it in the logs
  //   console.log(value + " selected."); // crashes in IE, if console not open
  //   // make the text of all label elements be the value
  //   $('label').text(value);
  // }); // close the change listener


  // // Responds to user's choice of desired graph.
  // $('#choices').change(function() {

  //   // Receipts & Outlays (Current Dollars)
  //   if($('#choices option:selected').val() == "current-receipts") {
  //     console.log("#choices option:selected equals " + $('#choices option:selected').val());
  //     g.user_attrs_.title = "Receipts & Outlays Current Dollars: 1940-2019";
  //     g.user_attrs_.ylabel = "In Billions of Dollars";
  //     g.user_attrs_.labels = [ "Fiscal Year", "Receipts", "Outlays" ];
  //     g.updateOptions({file: <%= current_dollars %>})
  //     g.drawGraph_();
  // //     // Receipts & Outlays (2009 Dollars)
  //   } else if ($('#choices option:selected').val() == "constant-receipts") {
  //     console.log("#choices option:selected equals " + $('#choices option:selected').val());
  //     g.user_attrs_.title = "Receipts & Outlays in Constant (2009) Dollars: 1940-2019";
  //     g.user_attrs_.labels = [ "Fiscal Year", "Receipts", "Outlays" ];
  //     g.updateOptions({file: <%= constant_dollars %> })
  //     g.drawGraph_();
  //     // Receipts & Outlays as Percentage of GDP
  //   } else if ($('#choices option:selected').val() == "gdp-receipts") {
  //     console.log("#choices option:selected equals " + $('#choices option:selected').val());
  //     g.user_attrs_.title = "Receipts & Outlays as a Percentage of GDP: 1940-2019";
  //     g.user_attrs_.labels = [ "Fiscal Year", "Receipts", "Outlays" ];
  //     g.updateOptions({file: <%= gdp_dollars %> })
  //     g.drawGraph_();
  // //     // Surpluses or Deficits (Current Dollars)
  //   } else if ($('#choices option:selected').val() == "current-surpluses") {
  //     console.log("#choices option:selected equals " + $('#choices option:selected').val());
  //     g.user_attrs_.title = "Surpluses or Deficits in Current Dollars: 1940-2019";
  //     g.user_attrs_.ylabel = "Percentage Surplus or Deficit";
  //     g.user_attrs_.labels = [ "Fiscal Year", "Surplus/Deficit" ];
  //     g.updateOptions({file: <%= surplus_deficit_current_dollars %> });

  //     g.drawGraph_();
  //     // Surpluses or Deficits (2009 Dollars)
  //   } else if ($('#choices option:selected').val() == "constant-surpluses") {
  //     console.log("#choices option:selected equals " + $('#choices option:selected').val());
  //     g.user_attrs_.title = "Surpluses or Deficits in Constant (2009) Dollars: 1940-2019";
  //     g.updateOptions({file: <%= surplus_deficit_constant_dollars %> });
  //     g.user_attrs_.labels = [ "Fiscal Year", "Surplus/Deficit" ];
  //     g.drawGraph_();
  //     // Surpluses or Deficits as Percentage of GDP
  //   } else if ($('#choices option:selected').val() == "gdp-surpluses") {
  //     console.log("#choices option:selected equals " + $('#choices option:selected').val());
  //     g.user_attrs_.title = "Surpluses or Deficits as a Percentage of GDP: 1940-2019";
  //     g.user_attrs_.labels = [ "Fiscal Year", "Surplus/Deficit" ];
  //     g.updateOptions({file: <%= surplus_deficit_gdp_dollars %> });
  //     g.drawGraph_();
  //   } else {
  //     console.log("Option selected not configured. Keeping existing graph.");
  //   }
  // });

});

