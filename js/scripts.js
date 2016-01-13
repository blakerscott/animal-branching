$(document).ready(function() {

  var turtleClick = confirm("Do you want to learn about Turtles?");
  var snakeClick = confirm("Do you want to learn about Snakes?");
  var frogClick = confirm("Do you want to learn about frogs?");

  if (turtleClick === true) {
    $("#turtles").show();
  } else {
    $(".turtles").hide();
  }

  if (snakeClick === true) {
    $("#snakes").show();
  } else {
    $(".snakes").hide();
  }

  if (frogClick === true) {
    $("#frogs").show();
  } else {
    $(".frogs").hide();
  }


});
