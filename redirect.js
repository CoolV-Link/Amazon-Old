var queryString = window.location.search;

var urlParams = new URLSearchParams(queryString);

var tagGawdTech = 'gawdtech-20';

var baseURL = 'https://www.amazon.com/dp/';


var itemID = urlParams.get('item')
console.log(itemID);


var tagID = urlParams.get('tag')
console.log(tagID);

if (!tagID) {
tagID = tagGawdTech;
}


if (!itemID) {
window.location.href = "new.html";
  return;
}

var itemURL = "/dp/${itemID}";

var tagURL = "?tag=${tagID}";

var linkURL = "baseURL+itemURL+tagURL;

window.location.htef = "${linkURL}";

