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

function pageList ()
{
  getList(ARG_LIST);
}

function getList (id)
{
  for (var list : LISTS)
    {
        if (id && id != list.id)
        {
          continue;
        }
        printList(list);
    }
}

function printList (list)
{
  setText("list-name", list.name);
  var ul = getElement("list-items");
  for (var item : list.items)
{
       ul.appendChild(printItem(item));
}

function printItems (list, items)
{
  console.log(`[${list.id}] ${list.name}`);
  console.log(list.items);
}



function printItem (item)
{
  var itemText = createTextNode(item.name);
  var itemLink = document.createElement('a');
  itemLink.href = item.id;
  itemLink.appendChild(itemText);
  var listItem = document.createElement('li');
  listItem.appendChild(itemLink);
  //list.appendChild(listItem);
  return listItem;
}
