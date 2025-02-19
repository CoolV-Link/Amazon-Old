const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const tagGawdTech = 'gawdtech-20';

const baseURL = 'https://www.amazon.com/dp/';

const itemURL = "/dp/${itemID}";

const affURL = "?tag=${storeID}";

const linkURL = "baseURL+itemURL+affURL;


const productID = urlParams.get('item')
console.log(productID);


const storeID = urlParams.get('tag')
console.log(storeID);
