$("button").on("click", function(e) {
  e.preventDefault();
  var newItem = {
    itemName: $("#name")
      .val()
      .trim(),
    category: $("#category")
      .val()
      .trim(),
    expirationDate: $("#expirationdate")
      .val()
      .trim(),
    warrantyValid: $("#warrantyvalid")
      .val()
      .trim(),
    phoneNumber: $("#phonenumber")
      .val()
      .trim(),
    note: $("#note")
      .val()
      .trim()
  };

  console.log(newItem);

  // Clear the form field
  $("#name").val("");
  $("#categories").val("");
  $("#barcode").val("");
  $("#renewal-price").val("");
  $("#date").val("");
});

//Getting Item from Api Server

$.get("/items", function(data) {
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
