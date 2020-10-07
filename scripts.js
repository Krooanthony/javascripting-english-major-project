let userInput;
userInput = prompt ("Think of a number", "Type your stupid answer here");
for (let i = 1; i <= userInput; i = i + 1) if (i % 2 !== 0) {
  $("#response").append("<br />" + i + " is odd "); } else {
    $("#response").append("<br />" + i + " is even ");
  }
let tipCalculator;
tipCalculator = function(total, tipRate){
  // step 1:
  let tipAmount;
  tipAmount = tipRate * total;;
  // and step 2:
  $("#response").html("Your tip is $" + tipAmount);
};

//now call (or "execute") the function, passing a total of $50.00 and a tipRate of 20%

tipCalculator(50.00, 0.2);
