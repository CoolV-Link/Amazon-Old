/** Amazon Link **/

function copyText(id)
{
    var textBox = getElement(id);
    textBox.select();
    textBox.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textBox.value);
    alert("Text Copied To Clipboard:\n" + textBox.value);
}

function generateLink (idError, idURL, idSite, idAff, idTag)
{
//  var errorItem = getElement(idError);
  var urlItem = getElement(idURL);
  var tagItem = getElement(idTag);
  //var siteItem = getElement(idSite);
  //var affItem = getElement(idAff);
  var origURL = urlItem.value;
  if (!origURL) {
    setText(idError, "Error: Enter URL");
    return;
  }
  var itemID = getItemID(origURL);
  if (itemID === false) {
    setText(idError, "Error: Invalid ID");
    return;
  }
  setText(idError, `Item ID: ${itemID}`);
  var tagID = tagItem.value;
  if (ARG_TAG && !tagID) {
      tagID = ARG_TAG;
  }
  setText(idError, `Item ID: ${itemID} | Tag: ${tagID}`);
  //var urlSite = `${URL_SITE_ITEM}?item=${itemID}&tag=${tagID}`;
  var urlSite = getSiteURL(itemID, tagID);
  var urlAff = getAmazonURL(itemID, tagID);
    //siteItem.value = urlSite;
    //affItem.value = urlAff;
  setValue(idSite, urlSite);
  setValue(idAff, urlAff);
}
