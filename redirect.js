var queryString = window.location.search;

var urlParams = new URLSearchParams(queryString);

var tagGawdTech = 'gawdtech-20';

var baseURL = 'https://www.amazon.com';

var itemID = urlParams.get('item')
console.log(itemID);

var tagID = urlParams.get('tag')
console.log(tagID);

if (!tagID) {
  tagID = tagGawdTech;
}

var itemURL = "/dp/${itemID}";

var tagURL = "?tag=${tagID}";

var linkURL = "baseURL+itemURL+tagURL;


if (itemID) {
  redirect("${linkURL}");
  return;
}


function redirect (url)
{
  window.location.href = url;
}

function setLink (id, url)
{
  var textURL = document.getElementById(id);
  textURL.text = url;
  textURL.src = url;
}

function copyText(id)
{
    var textBox = document.getElementById(id);
    textBox.select();
    textBox.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textBox.value);
    alert("Text Copied To Clipboard:\n" + textBox.value);
}

function clearText(id)
{
    var textBox = document.getElementById(id);
    textBox.value = "";
}

function newLink ()
{
  
}
