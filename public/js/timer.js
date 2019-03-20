// Create a countdown function that uses a formula to subtract current date from future date until
// it equals "0".


// Create a countdown function that uses a formula to subtract current date from future date until 
// it equals "0". 


var today = new Date();
var expiration = new Date();
var text = "";
someday.setFullYear(/*warranty expiration date goes here in YYYY, M, DD format*/);

updateData();

function updateData () {
if (expiration < today) { 
    function deleteItem (event) {
    event.stopPropagation();
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/items/" + id
    }).then(getItems);
    text = "Your warranty has expired.";
    console.log(text);
  }
  
} else {
  text = "Your item is still under warranty";
  console.log(text);
}
document.getElementById("demo").innerHTML = text;
// Include a conditional statement where if the result is 30 days or less, then the data will be moved to the soon to
//expire field. Then, include a second conditional to start a second function when the result equals zero or less.

//Second function will be an AJAX call that will access the database, and change warranty status from true to false through the PUT command.
//Once this is done, run a second AJAX call(?), that implements the DELETE command and removes the data from the warranty database entirely.

//Implement callback function to enable this.
