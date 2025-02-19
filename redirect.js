
var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);


var tagGawdTech = 'gawdtech-20';
var tagDefault =  tagGawdTech;


var idTextBox = 'url-old';
var idHyperLink = 'url-new';


var itemID = urlParams.get('item');
console.log(`Iten ID: ${itemID}`);

var tagID = urlParams.get('tag');
console.log(`Tag ID: ${tagID}`);



function getAmazonURL (itemID, tagID=tagDefault)
{
  var amazonURL = "https://www.amazon.com";
  var itemURL = "/dp/${itemID}";
  var tagURL = "?tag=${tagID}";
  var fullURL = amazonURL+itemURL+tagURL;
  return fullURL;
}

function redirect (itemID, tagID=tagDefault)
{
  var url = getAmazonURL (itemID, tagID);
  window.location.href = url;
  window.location.replace(url);
  setLink (url);
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
  var hyperlink = getHyperLink();
  hyperlink.text = url;
  hyperlink.src = url;
}

function getHyperLink (id=idHyperLink) {
  var hyperlink = document.getElementById(id);
}

function getTextBox (id=idTextBox) {
  var textBox = document.getElementById(id);
  return textBox;
}

function copyText()
{
    var textBox = getTextBox();
    textBox.select();
    textBox.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textBox.value);
    alert("Text Copied To Clipboard:\n" + textBox.value);
}

function clearText()
{
    var textBox = getTextBox();
    textBox.value = "";
}

function generateLink ()
{
  var textBox = getTextBox();
  var itemID = getItemID(textBox.value);
  var link = getAmazonURL(itemID, tagGawdTech);
}


if (itemID) {
  redirect(itemID. tagID);
  return;
}

