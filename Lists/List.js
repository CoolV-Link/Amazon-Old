var list = '';
var items = [
  
];

function List (id, name, info='')
{
  this.id = id;
  this.name = name;
  this.info = info;
}

function Item (id, name, price, info='')
{
  this.id = id;
  this.name = name;
  this.price = price;
  this.info = info;
}
