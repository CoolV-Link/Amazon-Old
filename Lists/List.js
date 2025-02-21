var LISTS = [];

/**
// Sample Lists
var test = new List("", "List", "Sample");
test.items = [
  new Item("", "Item", "Sample", 0.00),
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

function Item (id, name, info, price)
{
  this.id = id;
  this.name = name;
  this.info = info;
  this.price = price;
}

function show List (id)
{
  for (var list : LISTS)
    {
        if (list.id == id)
        {
          //show
        }
    }
}

