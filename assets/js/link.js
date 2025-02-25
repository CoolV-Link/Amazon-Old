/** Amazon Link **/

function copyText(id)
{
    var textBox = getElement(id);
    textBox.select();
    textBox.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textBox.value);
    alert("Text Copied To Clipboard:\n" + textBox.value);
}

function generateLink (idError, idOrig, idSite, idAff, idTags)
{
//  var errorItem = getElement(idError);
  var origItem = getElement(idOrig);
  var tagItem = getElement(idTags);
//  var siteItem = getElement(idSite);
//  var affItem = getElement(idAff);
  var origURL = origItem.value;
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
  var tagID = getTagID(tagItem.value);
  if (ARG_TAG && !tagItem.value) {
      tagID = ARG_TAG;
  }
  var urlSite = `${URL_SITE_ITEM}?item=${itemID}&tag=${tagID}`; //getNewURL(itemID, tagID);
  var urlAff = getAmazonURL(itemID, tagID);
  setValue(idSite, urlSite);
  setValue(idAff, urlAff);
}
