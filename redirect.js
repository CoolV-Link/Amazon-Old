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


if (!itemID) {
  redirect("new.html");
  return;
}

var itemURL = "/dp/${itemID}";

var tagURL = "?tag=${tagID}";

var linkURL = "baseURL+itemURL+tagURL;

redirect("${linkURL}");


function redirect (url)
{
  window.location.href = url;
}

function copyText ()
{
  
}

function newlink ()
{
  
}
