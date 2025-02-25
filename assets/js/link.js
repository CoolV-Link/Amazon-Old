/** Amazon Link **/

function copyText(id)
{
    var textBox = getElement(id);
    textBox.select();
    textBox.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textBox.value);
    alert("Text Copied To Clipboard:\n" + textBox.value);
}

function generateLink (idOrig, idSite, idAff, idError)
{
//  var errorItem = getElement(idError);
  var origItem = getElement(idOrig);
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
  var tagID = getTagID(ARG_TAG);
  var urlSite = getNewURL(itemID, tagID);
  var urlAff = getAmazonURL(itemID, tagID);
  setValue(idSite, urlSite);
  setValue(idAff, urlAff);
}
