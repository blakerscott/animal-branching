$(document).ready(function() {

  var turtleClick = confirm("Do you want to learn about Turtles?");

  if (turtleClick === true) {
    $("#turtles").show();
  } else {
    $(".turtles").hide();
  }


});
