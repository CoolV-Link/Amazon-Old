
import AmazonListScraper from './';


var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

var listID = urlParams.get('list');
console.log(`[Arg] List ID: ${listID}`);


const amazonURL = 'https://www.amazon.com';
const listURL = `${amazonURL}/gp/registry/wishlist/${listID}`;

const AmazonListScraper = require('amazon-list-scraper').default;

const scraper = new AmazonListScraper();
scraper.scrape(listURL)
  .then(items => {
    console.log(items);
    for (var item : items) {
      
    }
    //  [
    //    { 
    //      title: 'The Principles of Object-Oriented JavaScript',
    //      price: 9.99,
    //      link: 'https://www.amazon.com/dp/B00I87B1H8/ref=wl_it_dp_v_nS_ttl/184-4221310-4664445?_encoding=UTF8&colid=1JMCNHNT959X2&coliid=I2ETH645CXBEGM'
    //    },
    //    { 
    //      title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    //      price: 38.6,
    //      link: 'https://www.amazon.com/dp/0132350882/ref=wl_it_dp_v_nS_ttl/184-4221310-4664445?_encoding=UTF8&colid=1JMCNHNT959X2&coliid=IDGP10KBLGRPV'
    //    } 
    //  ]
  })
  .catch(error => {
  });
