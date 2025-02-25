/** Amazon List Scraper **/

function getListHTML (id)
{
  var url = `${URL_AMAZON}/wishlist/${id}`;
  var html = (await (await fetch(url)).text());
  var doc = new DOMParser().parseFromString(html, 'text/html');
  return doc;
}

function createList (id)
{
  var doc = getListHTML(id);
  var list = getListInfo(id, doc);
  list.items = getListItems(listParent);
  LISTS.push(list);
  return list;
}

function getListInfo (id, doc)
{
  var title = doc.querySelector('.awl-list-title');
  var info = doc.querySelector('#wlDesc');
  var owner = doc.querySelector('.awl-item-title');
  var listParent = doc.getElementById('awl-list-items');
  return new List(
    id,
    title[0].innerHTML,
    info);
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
  var id = listItem.querySelector('.a-section');
  var title = listItem.querySelector('.awl-item-title');
  var info = listItem.querySelector('.awl-item-title');
  var price = listItem.querySelector('.awl-item-wrapper');
  return new ListItem(
    id,
    title[0].innerHTML,
    info, price
  );
}
