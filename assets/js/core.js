/** Amazon Link **/

// Config

var TAG_DEFAULT = "";

var URL_SITE = "";

// End Config

var URL_AMAZON = "https://www.amazon.com";

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
  tagID = tagID ? tagID : TAG_DEFAULT;
  return `${URL_SITE}?item=${itemID}&tag=${tagID}`;
}

function getAmazonListURL (listID)
{
  return `${URL_AMAZON}/wishlist/${listID}}`;
}

function getAmazonURL (itemID, tagID)
{
  if (!tagID) {
    tagID = TAG_DEFAULT;
  }
  return `${URL_AMAZON}/dp/${itemID}?tag=${tagID}`;
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

function setLink (id, url)
{
  var element = getElement(id);
  element.text = `${url}`;
  element.href = `${url}`;
}

function redirect (url)
{
  //var url = getAmazonURL(itemID, tagID);
  window.location.replace(`${url}`);
  //window.location.href = `${url}`;
  //setLink(url);
}

function getRedirectURL ()
{
  if (ARG_LIST) {
    return `${URL_SITE}/List/?list=${ARG_LIST}`;
  }
  if (ARG_ITEM) {
    return GetAmazonURL(ARG_ITEM, ARG_TAG);
  }
  return `${URL_SITE}/Link/`;
}

function pageRedirect (id)
{
  var url = getRedirectURL();
  setLink(id, url);
  redirect(url);
}
