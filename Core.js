
var QUERY_STRING = window.location.search;
var URL_PARAMS = new URLSearchParams(QUERY_STRING);

var ARG_ITEM = URL_PARAMS.get('item');
console.log(`[Arg] Item ID: ${ARG_ITEM}`);

var ARG_TAG = URL_PARAMS.get('tag');
console.log(`[Arg] Tag ID: ${ARG_TAG}`);

var ARG_LIST = URL_PARAMS.get('list');
console.log(`[Arg] List ID: ${ARG_LIST}`);



function getNewURL (itemID, tagID)
{
  tagID = tagID ? tagID : DEFAULT_TAG;
  return `${siteURL}?item=${itemID}&tag=${tagID}`;
}

function getAmazonURL (itemID, tagID)
{
  tagID = tagID ? tagID : DEFAULT_TAG;
  return `${amazonURL}/dp/${itemID}?tag=${tagID}`;
}

function redirect (url)
{
  //var url = getAmazonURL(itemID, tagID);
  window.location.replace(`${url}`);
  //window.location.href = `${url}`;
  //setLink(url);
}

function getItemID (url)
{
  var itemStart = url.indexOf('/dp/');
  if (!itemStart)
  {
    return false;
  }
  itemStart += 4;
  var itemEnd = itemStart + 10;
  var itemID = url.substring(itemStart, itemEnd);
  return itemID;
}

function setLink (id, url)
{
  var element = getElement(id);
  element.text = `${url}`;
  element.href = `${url}`;
}

function getElement (id) {
  var element = document.getElementById(id);
  return element;
}

function copyText(id)
{
    var textBox = getElement(id);
    textBox.select();
    textBox.setSelectionRange(0, 
  var link = getNewURL(itemID, tagID);
  setValue(idNew, link);
}
