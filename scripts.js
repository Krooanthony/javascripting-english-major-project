let userInput;
userInput = prompt ("Think of a number", "Type your stupid answer here");
for (let i = 1; i <= userInput; i = i + 1) if (i % 2 !== 0) {
  $("#response").append("<br />" + i + " is odd "); } else {
    $("#response").append("<br />" + i + " is even ");
  }
