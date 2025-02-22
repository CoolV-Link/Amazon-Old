/** Lists Config **/

/**
// Sample Lists
var test = new List("", "List", "Sample");
test.items = [
  new Item("", "Item", "Sample", 0.00),
];
LISTS.push(test);
**/


// List: History
var history = new List("TPYL1KJFQ5X9", "History", "Order History");
history.items = [
  new Item("B07FZ3G7SC", "Bluetooth Adapter", "esinkin Wireless Audio Receiver for Music Streaming Sound System Works with Smart Phones, Tablets and Car, Wireless Adapter for Speakers", 23.99),
];
LISTS.push(history);


// List: Cart
var cart = new List("3BX6C2Q2CY8Z4", "Cart", "Shopping Cart");
cart.items = [
  new Item("", "Item", "Sample", 0.00),
];
LISTS.push(cart);


// List: Wish List
var wishlist = new List("22BGSVXAYLNR9", "Saved", "Wish List");
wishlist.items = [
  new Item("", "Item", "Sample", 0.00),
];
LISTS.push(wishlist);

var Wendells = new ListGroup("Wendells", "");

Wendells.lists.push(history);

LIST_GROUPS.push(Wendells);
