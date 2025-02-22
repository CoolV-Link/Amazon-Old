/** Amazon List **/

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
  if (!ARG_LIST)
  {
    listTitle(idName, "Lists");
    return;
  }
  for (var list : LISTS)
    {
/*        if (list.id != ARG_LIST.id)
        {
          continue;
        }*/
        listTitle(idName, list.name);
        printList(idList, list.items);
    }
}

function print (list)
{
  console.log(`[${list.id}] ${list.name}`);
  console.log(list.items);
}

function listTitle (idName, name)
{
  var title = getElement(idName);
  title.text = name;
}

function printList (idList, items)
{
  var ul = getElement(idList);
  for (var item : items)
  {
       ul.appendChild(listItem(item));
  }

function printItems (list, items)
{
  console.log(`[${list.id}] ${list.name}`);
  console.log(list.items);
}

function listItem (item)
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
