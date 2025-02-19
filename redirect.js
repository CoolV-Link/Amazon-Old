const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const tagGawdTech = 'gawdtech-20';

const baseURL = 'https://www.amazon.com/dp/';


const itemID = urlParams.get('item')
console.log(itemID);


const tagID = urlParams.get('tag')
console.log(tagID);

if (!tagID) {
tagID = tagGawdTech;
}


const itemURL = "/dp/${itemID}";

const tagURL = "?tag=${tagID}";

const linkURL = "baseURL+itemURL+tagURL;

window.location.htef = "${linkURL}";

