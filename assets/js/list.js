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

var LIST_GROUPS = [];

function ListGroup (id, info)
{
  this.id = id;
  this.info = info;
  this.lists = [];
}

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

function pageList(idName, idList)
{
  for (var list : LISTS)
    {
/*        if (list.id != ARG_LIST.id)
        {
          continue;
        }*/
        printTitle(idName, list);
        printList(idList, list);
    }
}

function print (list)
{
  console.log(`[${list.id}] ${list.name}`);
  console.log(list.items);
}

function printTitle (idName, list)
{
  var title = getElement(idName);
  title.text = list.name;
}

function printList (idList, list)
{
  var ul = getElement(idList);
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
