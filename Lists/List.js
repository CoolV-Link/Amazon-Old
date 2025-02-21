var list = new List(0, "List", "Sample");
var items = [
  new Item(0, "Item", 0.00, "Sample"),
];

function List (id, name, info)
{
  this.id = id;
  this.name = name;
  this.info = info;
}

function Item (id, name, price, info)
{
  this.id = id;
  this.name = name;
  this.price = price;
  this.info = info;
}
