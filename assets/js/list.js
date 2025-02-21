/** Amazon List **/

/**
// Sample Lists
var test = new List("", "List", "Sample");
test.items = [
  new Item("", "Item", "Sample", 0.00),
];
LISTS.push(test);
**/

var LISTS = [];

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

function showList (id)
{
  for (var list : LISTS)
    {
        if (id && id != list.id)
        {
          continue;
        }
        print(list);
    }
}

function print (list)
{
  console.log(`[${list.id}] ${list.name}`);
  console.log(list.items);
}
