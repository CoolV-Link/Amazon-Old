/** Amazon Affiliate Link **/

var newBaseURL = '';

var tagDefault = '';

var redirectID = '';


var redirectURL = false;

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

var itemID = urlParams.get('item');
console.log(`[Arg] Item ID: ${itemID}`);

var tagID = urlParams.get('tag');
console.log(`[Arg] Tag ID: ${tagID}`);


function getNewURL (itemID, tagID)
{
  return `${newBaseURL}?item=${itemID}&tag=${tagID}`;
}

function getAmazonURL (itemID, tagID)
{
  var amazonURL = "https://www.amazon.com";
  var itemURL = `/dp/${itemID}`;
  var tagURL = `?tag=${tagID}`;
  var fullURL = `${amazonURL}${itemURL}${tagURL}`;
  return fullURL;
}

function redirect (url)
{
  //var url = getAmazonURL(itemID, tagID);
  window.location.href = `${url}`;
  window.location.replace(`${url}`);
  //setLink(url);
}

function getItemID (url)
{
  var itemStart = url.indexOf('/dp/');
  if (!itemStart) {
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

function generateLink (idOld, idNew)
{
  var inputItem = getElement(idOld);
  var itemID = getItemID(inputItem.value);
  if (itemID === false) {
    setValue(idNew, 'Error');
    return;
  }
  if (!tagID) {
    tagID = tagDefault;
    console.log(`[Default] Tag ID: ${tagID}`);
  }
  var link = getNewURL(itemID, tagID);
  setValue(idNew, link);
}


function doRedirect ()
{
  if (!tagID) {
    tagID = tagDefault;
    console.log(`[Default] Tag ID: ${tagID}`);
  }
  if (itemID) {
    redirectURL = getAmazonURL(itemID, tagID);
    console.log(`[Redirect] URL: ${redirectURL}`);
    redirect(redirectURL);
    setLink(redirectID, redirectURL);
    return true;
  }
  return false;
}

function toggleElement(id, show) {
  var element = getElement(id);
  if (show) {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

