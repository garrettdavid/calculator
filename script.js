$(document).ready(function() {
  var total = [];
  var display = 0;

  $(".num-btn").click(function() {
    display = $(this).val();
    update(display);
  });

  $(".oper-btn").click(function() {
    total.push(display);
    $("#total").html(total);
    display = $(this).val();
    $("#display").html(display);

    total.push(display);
    $("#total").html(total);
  });
});

function update(display) {
  $("#display").html(display);
}
