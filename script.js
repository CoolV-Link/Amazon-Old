/** Amazon Affiliate Link **/

var newBaseURL = '';

var tagDefault = '';

var redirectID = '';

var siteURL = '';

var amazonURL = 'https://www.amazon.com';

var redirectURL = false;


var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);

var itemID = urlParams.get('item');
console.log(`[Arg] Item ID: ${itemID}`);

var tagID = urlParams.get('tag');
console.log(`[Arg] Tag ID: ${tagID}`);

var listID = urlParams.get('list');
console.log(`[Arg] List ID: ${listID}`);



function getNewURL (itemID, tagID)
{
  return `${siteURL}?item=${itemID}&tag=${tagID}`;
}

function getAmazonURL (itemID, tagID)
{
  return `${amazonURL}/dp/${itemID}?tag=${tagID}`;
}

function redirect (url)
{
  //var url = getAmazonURL(itemID, tagID);
  window.location.replace(`${url}`);
  //window.location.href = `${url}`;
  //setLink(url);
}

function getItemID (url)
{
  var itemStart = url.indexOf('/dp/');
  if (!itemStart)
  {
    return false;
  }
  itemStart += 4;
  var itemEnd = itemStart + 10;
  var itemID = url.substring(itemStart, itemEnd);
  return itemID;
}

function setLink (id, url)
{
  var element = getElement(id);
  element.text = `${url}`;
  element.href = `${url}`;
}

function getElement (id) {
  var element = document.getElementById(id);
  return element;
}

function copyText(id)
{
    var textBox = getElement(id);
    textBox.select();
    textBox.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textBox.value);
    alert("Text Copied To Clipboard:\n" + textBox.value);
}

function setText(id, text='')
{
    var element = getElement(id);
    element.text = text;
}

function setValue(id, text='')
{
    var element = getElement(id);
    element.value = text;
}

function generateLink (idOld, idNew)
{
  var inputItem = getElement(idOld);
  var itemID = getItemID(inputItem.value);
  if (itemID === false)
  {
    setValue(idNew, 'Error');
    return;
  }
  if (!tagID)
  {
    tagID = tagDefault;
    console.log(`[Default] Tag ID: ${tagID}`);
  }
  var link = getNewURL(itemID, tagID);
  setValue(idNew, link);
}


function doRedirect ()
{
  if (!tagID)
  {
    tagID = tagDefault;
    console.log(`[Default] Tag ID: ${tagID}`);
  }
  if (itemID)
  {
    redirectURL = getAmazonURL(itemID, tagID);
    console.log(`[Redirect] URL: ${redirectURL}`);
    redirect(redirectURL);
    setLink(redirectID, redirectURL);
    return true;
  }
  return false;
}

function toggleElement(id, show) {
  var element = getElement(id);
  if (show) {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

function doItemList ()
{
  
}

/* PHP
function wishlist ($listname)
{
	$url = "http://www.amazon.com/registry/wishlist/$listname?layout=compact";
	$contents = file_get_contents($url);
	preg_match_all ('|/dp/(\w+)/|', $contents, $ASINs, PREG_PATTERN_ORDER);
	return $ASINs[1]; // just get the numbers
}
*/


function getWishList (listID)
{
  var response = httpGet(`${amazonURL}/registry/wishlist/${listID}?layout=compact`);
  var asinRegex = /name="item.([\d]+)\.(?:[A-Z0-9]+).([A-Z0-9]+).*/g
  while (match = asinRegex.exec(response)) {
    var asin = match[2];
    var offers = httpGet(`${amazonURL}/gp/offer-listing/${asin}`);    
    console.log("[ASIN] "+asin);
    console.log("[Title] "+getFirstMatch(/class="producttitle">(.+)</g, offers));
    console.log("[ASINOffers "+getFirstMatch(/class="price">(.+)</g, offers));
  }  
  Browser.msgBox("Finished");
}

function getFirstMatch (regex, text)
{
  var match = regex.exec(text);
  return (match == null) ? "Unknown" : match[1];
}



function httpGet (url)
{
	var request = new XMLHttpRequest();
	request.open("GET", url, true);
	request.onload = function()
	{
		if (request.status == 200)
		{
			return request.responseText;
		} else {
      			return false;
		}
	};
	request.onerror = function()
	{
		return false;
	};
	request.send();
}

