/** Amazon List **/

function pageList(idName, idList)
{
/*
  if (ARG_USER) {
    logList("-", "Lists", LISTS);
    setListTitle(idName, "Lists");
    setListItems(idList, LISTS);
    return;
  }
  LISTS.forEach(
    (list) => {
//      if (list.id == ARG_LIST) {
        logList(list.id, list.name, list.items);
        setListTitle(idName, list.name);
        setListItems(idList, list.items);
//      }
    });
*/
}

function setListTitle (idName, name)
{
  var title = getElement(idName);
  title.innerHTML = name;
}

function setListItems (idList, items)
{
  var ul = getElement(idList);
  ul.innerHTML = "";
  items.forEach(
    (item) => {
      ul.appendChild(newListItem(item));
    });
}

function newListItem (item)
{
  var listItem = document.createElement('li');
  var itemLink = document.createElement('a');
  var itemText = createTextNode(item.name);
  itemLink.href = item.id;
  itemLink.appendChild(itemText);
  listItem.appendChild(itemLink);
  return listItem;
}


function logList (id, name, items)
{
  console.log(`[${id}] ${name}`);
  console.log(items);
}


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
  getListInfo(idName, doc);
  getListItems(idList, doc);
}

function getListInfo (listID, doc)
{
  var title = doc.querySelector('.awl-list-title');
  var info = doc.querySelector('#wlDesc');
  var owner = doc.querySelector('.awl-item-title');
  setListTitle(idName, title[0].innerHTML);
  /*return new List(
    listID,
    title[0].innerHTML,
    info);*/
}

function getListItems (idList, doc)
{
  var itemsParent = doc.getElementById('awl-list-items');
  var listItems = listParent.querySelector('li');
  for (var i = 0; i < listItems.length; i++) {
    createListItem(listItems[i]);
  }
  return items;
}

function getListItem (listItem)
{
  var itemID = listItem.querySelector('.a-section');
  var title = listItem.querySelector('.awl-item-title');
  var info = listItem.querySelector('.awl-item-title');
  var price = listItem.querySelector('.awl-item-wrapper');

    //title[0].innerHTML
  var listItem = document.createElement('li');
  var itemLink = document.createElement('a');
  var itemText = createTextNode(item.name);
  itemLink.href = item.id;
  itemLink.appendChild(itemText);
  listItem.appendChild(itemLink);
  return listItem;
}
