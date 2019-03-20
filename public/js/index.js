$("button").on("click", function (e) {
  e.preventDefault();
  var name = $('#add_item_name').val().trim();
  var phoneNumber = $('#add_item_phone').val().trim();
  var expirationDate = $('#add_item_expiration_date').val().trim();
  var price = $('#add_item_price').val().trim();
  var notes = $('#add_item_notes').val().trim();
  var category = $('#add_item_category').val().trim();

  /* eslint-disable camelcase */
  var newItem = {
    // Left hand side must match name of columns in database
    item_name: name,
    phone_number: phoneNumber,
    expiration_date: expirationDate,
    notes: notes,
    price: price,
    // TODO: Correctly determine the category to add to
    category: category,
    // TODO: Correctly determine if the warranty is valid
    warrantyValid: true,

  };
  /* eslint-enable camelcase */

  console.log(newItem);

  $.post("/items", newItem).then(function (result) {
    console.log(result);
    window.location.reload();
  });

  $('#add_item_name').val("")
  $('#add_item_phone').val("")
  $('#add_item_expiration_date').val("")
  $('#add_item_price').val("")
  $('#add_item_notes').val("")
  $('#add_item_category').val("")

});

//Getting Item from Api Server

$.get("/items", function (data) {
  console.log(data);
  for (var i = 0; i < data.length; i++) {
    var itemCategory = data[i].category.toLowerCase();
    console.log(itemCategory);
    selectCategory(data[i], itemCategory);
  }
});
//Determine Category to push to
function selectCategory(items, category) {
  category = category.toLowerCase();
  switch (category) {
    case "expiresoon":
      expireSoonItems(items, category);
      break;
    case "home":
      homeItems(items, category);
      break;
    case "auto":
      autoItems(items, category);
      break;
    case "electronics":
      electronicItems(items, category);
      break;
    case "miscellaneous":
      miscellaneousItems(items, category);
      break;
    default:
      "Create a new category for the item";
  }
}

//Expiring Items
function expireSoonItems(item, category) {
  createTable(item, category);
}

//Auto Mobile Items
function homeItems(item, category) {
  createTable(item, category);
}

//Auto Mobile Items
function autoItems(item, category) {
  createTable(item, category);
}
//Electronic Items
function electronicItems(item, category) {
  createTable(item, category);
}
//Miscellenous Items
function miscellaneousItems(item, category) {
  createTable(item, category);
}

//Creating table to populate data
function createTable(item, categoryName) {
  //Set the category name to lowercase
  categoryName = categoryName;
  console.log(categoryName);

  //Create a Table Row
  var itemTr = $("<tr>");
  //Create a Table Cells
  var itemIdCell = $("<td>").text(item.id);
  var itemNameCell = $("<td>").text(item.item_name);
  var itemPhoneCell = $("<td>").text(item.phone_number);
  var itemExpireDate = $("<td>").text(item.expiration_date);
  var itemRenewalPrice = $("<td>").text(item.price);
  var itemNote = $("<td>").text(item.notes);
  var button = $("<button>")
    .text("X")
    .css({
      marginLeft: "15px"
    });
  //Appended Table cell to table row
  itemTr.append(
    itemIdCell,
    itemNameCell,
    itemPhoneCell,
    itemExpireDate,
    itemRenewalPrice,
    itemNote,
    button
  );
  //Appended Table row to table body
  $("#" + categoryName).append(itemTr);
}
