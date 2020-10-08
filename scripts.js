let myHabeneroSauceSquirts, myBurritoObject;
myHabeneroSauceSquirts = 3;
myBurritoObject = {
  tortilla: "wheat",
  guacamole: true,
  beans: "pinto",
  habeneroSauceSquirts: myHabeneroSauceSquirts,
  spiciness: function(){
    if (myHabeneroSauceSquirts > 0 ){
      alert("This is a spicy burrito!");
    } else {
      alert("This is a mild burrito.");
    }
}
};
$("#response").html("Your burrito has " + myBurritoObject.habeneroSauceSquirts + " squirts of habenro.");
myBurritoObject.spiciness();
