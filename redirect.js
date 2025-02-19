/** Amazon Affiliate Link **/

var tagDefault = '';

var redirectID = '';
var redirectURL = false;

var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

var itemID = urlParams.get('item');
console.log(`[Arg] Item ID: ${itemID}`);

var tagID = urlParams.get('tag');
console.log(`[Arg] Tag ID: ${tagID}`);


function getAmazonURL (itemID, tagID=tagDefault)
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
  var itemEnd = url.indexOf('/', itemStart);
  var itemID = url.substring(itemStart, itemEnd);
  return itemID;
}

function setLink (id, url)
{
  var hyperlink = getElement(id);
  hyperlink.text = `${url}`;
  hyperlink.href = `${url}`;
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

function setText(id, text)
{
    var element = getElement(id);
    element.text = `${text}`;
}

function setValue(id, text)
{
    var textBox = getElement(id);
    textBox.value = `${text}`;
}

function generateLink (idOld, idNew)
{
  var inputItem = getElement(idOld);
  var itemID = getItemID(inputItem.value);
  if (itemID === false) {
    setValue(idNew, 'Error');
    return;
  }
  var link = getAmazonURL(itemID, tagID);
  setValue(idNew, link);
}


function init ()
{
  if (!tagID) {
    tagID = tagDefault;
    console.log(`[Default] Tag ID: ${tagID}`);
  }
  if (itemID) {
    redirectURL = getAmazonURL(itemID, tagID);
    redirect(itemID. tagID);
    setLink(redirectID, redirectURL);
  }
}

