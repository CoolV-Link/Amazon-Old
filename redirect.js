
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);


var tagGawdTech = 'gawdtech-20';
var tagDefault =  tagGawdTech;

var idLinkForm = 'link-old';
var idTextBoxOld = 'url-old';
var idLinkNew = 'link-new';
var idTextBoxNew = 'url-new';
var idRedirect = 'redirect';
var idRedirectLink = 'redirect-url';

var itemID = urlParams.get('item');
console.log(`Iten ID: ${itemID}`);

var tagID = urlParams.get('tag');
console.log(`Tag ID: ${tagID}`);



function getAmazonURL (itemID, tagID=tagDefault)
{
  var amazonURL = "https://www.amazon.com";
  var itemURL = `/dp/${itemID}`;
  var tagURL = `?tag=${tagID}`;
  var fullURL = `${amazonURL}${itemURL}${tagURL}`;
  return fullURL;
}

function redirect (itemID, tagID=tagDefault)
{
  var url = getAmazonURL (itemID, tagID);
  window.location.href = `${url}`;
  window.location.replace(`${url}`);
  setLink (`${url}`);
}

function getItemID (url)
{
  var itemStart = paragraph.indexOf('/dp/');
  itemStart += 4;
  var itemEnd = paragraph.indexOf('/', itemStart);
  var itemID = text.substring(itemStart, itemEnd);
  return itemID;
}

function setLink (url)
{
  var hyperlink = getElement(idRedirectLink);
  hyperlink.text = `${url}`;
  hyperlink.src = `${url}`;
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
  var textBox = getElement(idOld);
  var itemID = getItemID(textBox.value);
  var link = getAmazonURL(itemID, tagDefault);
  setValue(idNew, link);
}


if (itemID) {
  redirect(itemID. tagID);
}

