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
}

function setListTitle (idName, name)
{
  var title = getElement(idName);
  title.text = name;
}

function setListItems (idList, items)
{
  var ul = getElement(idList);
  items.forEach(
    (item) => {
      ul.appendChild(listItem(item));
    });
}

function newListItem (item)
{
  var itemText = createTextNode(item.name);
  var itemLink = document.createElement('a');
  itemLink.href = item.id;
  itemLink.appendChild(itemText);
  var listItem = document.createElement('li');
  listItem.appendChild(itemLink);
  return listItem;
}


function logList (id, name, items)
{
  console.log(`[${id}] ${name}`);
  console.log(items);
}


function loadListConfig (cfgList)
{
  //cfgList = cfgList ? cfgList: CFG_LIST_DEFAULT;
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = getListConfigURL(cfgList);
  document.body.appendChild(script);
}

function getListConfigURL (fileName=LIST_DEFAULT)
{
  return `${URL_SITE}/assets/cfg/list/${fileName}.js`;
}
