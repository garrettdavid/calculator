$(document).ready(function() {
  var total = [];
  var display = 0;

  // When a number button is clicked
  $(".num-btn").click(function() {
    // Change the display value
    display = $(this).val();
    update(display);
    // Add the selected number to the total array
    total.push(display);
  });

  // When an operator button is clicked
  $(".oper-btn").click(function() {
    // Adjust the display value to reflect the selected operator
    display = $(this).val();
    update(display);
    // Add the operator to the array too
    total.push(display);
    $("#total").html(total);
  });

  $("#decimal").click(function() {
    //TODO

    /*
    display = display + ".";
    update(display);
    */
  });

  // Clear displayed entry
  $("#clear_entry").click(function() {
    display = 0;
    update(display);
  });

  // Clear all entries
  $("#clear_all").click(function() {
    display = 0;
    total.length = 0;
    $("#total").html("0");
    update(display);
  });

  $("#equals").click(function() {
    $("#total").html(total);
    var value = total.toString();
    display = value;
    update(display);
  });

});

function update(data) {
  $("#display").html(data);
}
