/** Amazon Core **/

var URL_AMAZON = "https://www.amazon.com";

var URL_ITEM_PREFIX = [
    "/dp/",
    "/d/",
];

var REGEX_ITEM_ID = "";

var QUERY_STRING = window.location.search;
var URL_PARAMS = new URLSearchParams(QUERY_STRING);

var ARG_ITEM = URL_PARAMS.get('item');
console.log(`[Arg] Item ID: ${ARG_ITEM}`);

var ARG_TAG = URL_PARAMS.get('tag');
console.log(`[Arg] Tag ID: ${ARG_TAG}`);

var ARG_LIST = URL_PARAMS.get('list');
console.log(`[Arg] List ID: ${ARG_LIST}`);


function getTagID (tagID)
{
  return tagID ? tagID : TAG_DEFAULT;
}

function getNewURL (itemID, tagID)
{
  tagID = getTagID(tagID);
  return `${URL_SITE}?item=${itemID}&tag=${tagID}`;
}

function getAmazonListURL (listID)
{
  return `${URL_AMAZON}/wishlist/${listID}}`;
}

function getAmazonURL (itemID, tagID)
{
  tagID = getTagID(tagID);
  return `${URL_AMAZON}/dp/${itemID}?tag=${tagID}`;
}

function getStartItemID (url)
{
  URL_ITEM_PREFIX.forEach(
  (prefix) => {
    var index = url.indexOf(prefix);
    if (index != -1) {
      return index + prefix.length;
    }
  });
  return false;
}

function getItemID (url)
{
  var itemStart = getStartItemID(url);
  if (itemStart === false) {
    return false;
  }
  var itemEnd = itemStart + 10;
  var itemID = url.substring(itemStart, itemEnd);
  return itemID;
}

function getElement (id) {
  var element = document.getElementById(id);
  return element;
}

function copyText(id)
{
    var textBox = getElement(id);
    textBox.select();
    textBox.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textBox.value);
    alert("Text Copied To Clipboard:\n" + textBox.value);
}

function setText(id, text='')
{
    var element = getElement(id);
    element.text = text;
}

function setValue(id, text='')
{
    var element = getElement(id);
    element.value = text;
}

function setLink (id, url='')
{
  var element = getElement(id);
  element.text = url;
  element.href = url;
}

function redirect (url)
{
  window.location.replace(`${url}`);
  //window.location.href = `${url}`;
}

function getListURL (listID, tagID)
{
  tagID = getTagID(tagID);
  return `${URL_SITE}/List/?list=${listID}&tag=${tagID}`;
}

