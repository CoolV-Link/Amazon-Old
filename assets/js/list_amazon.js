/** Amazon List Scraper **/

function downloadAmazonList(listID)
{
  var url = getAmazonListURL(listID);
  var html = (await (await fetch(url)).text());
  var doc = new DOMParser().parseFromString(html, 'text/html');
  return doc;
}

function pageAmazonList (idName, idList)
{
  //var listID = ARG_LIST;
  var doc = downloadAmazonList(listID);
  var list = getListInfo(listID, doc);
  setListTitle(idName, list.name);
  var itemsParent = doc.getElementById('awl-list-items');
  list.items = getListItems(itemsParent);
  setListItems(idList, list.items);
  LISTS.push(list);
  return list;
}

function getListInfo (listID, doc)
{
  var title = doc.querySelector('.awl-list-title');
  var info = doc.querySelector('#wlDesc');
  var owner = doc.querySelector('.awl-item-title');
  return new List(
    listID,
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
  var itemID = listItem.querySelector('.a-section');
  var title = listItem.querySelector('.awl-item-title');
  var info = listItem.querySelector('.awl-item-title');
  var price = listItem.querySelector('.awl-item-wrapper');
  return new Item(
    itemID,
    title[0].innerHTML,
    info, price
  );
}
