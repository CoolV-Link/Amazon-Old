/** Amazon List Scraper **/

function getListHTML (id)
{
}


function getListInfo (id, doc)
{
  var title = listItem.querySelector('.awl-item-title');
  var info = listItem.querySelector('.awl-item-title');
  var owner = listItem.querySelector('.awl-item-title');
  var listParent = doc.getElementById('awl-list-items');

  var list = new List(id, title, info);
  list.items = getListItems(listParent);
  return list;
}


function getListItems (listParent)
{
  var items = [];
  var listItems = listParent.querySelector('li');
  for (var i = 0; i < listItems.length; i++) {
    items.push(createListItem(listItems[i]));
  }
  return items;
}

function createItem (listItem)
{
  var id = listItem.querySelector('.awl-item-title');
  var title = listItem.querySelector('.awl-item-title');
  var info = listItem.querySelector('.awl-item-title');
  var price = listItem.querySelector('.awl-item-title');
  return new ListItem(id, title, info, price);
}
