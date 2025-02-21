var LISTS = [];

/** Sample Lists
var test = new List(0, "List", "Sample");
test.items = [
  new Item(0, "Item", 0.00, "Sample"),
];
LISTS.push(test);
**/

function List (id, name, info)
{
  this.id = id;
  this.name = name;
  this.info = info;
  this.items = [];
}

function Item (id, name, price, info)
{
  this.id = id;
  this.name = name;
  this.price = price;
  this.info = info;
}
