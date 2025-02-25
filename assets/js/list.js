/** Amazon List **/

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

function pageList(idName, idList)
{
  if (!ARG_LIST)
  {
    listTitle(idName, "Lists");
    printList(idList, LISTS);
    return;
  }
  LISTS.forEach(
    (list) => {
//      if (list.id == ARG_LIST) {
        listTitle(idName, list.name);
        printList(idList, list.items);
//      }
    });
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
  items.forEach(
    (item) => {
      ul.appendChild(listItem(item));
    });
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
  return listItem;
}
