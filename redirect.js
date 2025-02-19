const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const baseURL = '';

const linkURL = "";


const productID = urlParams.get('item')
console.log(productID);


const storeID = urlParams.get('store')
console.log(storeID);
