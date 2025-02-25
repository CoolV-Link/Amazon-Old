/** Amazon Link **/

function copyText(id)
{
    var textBox = getElement(id);
    textBox.select();
    textBox.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textBox.value);
    alert("Text Copied To Clipboard:\n" + textBox.value);
}

function generateLink (idOrig, idSite, idAff)
{
  var origItem = getElement(idOrig);
  var siteItem = getElement(idSite);
  var affItem = getElement(idAff);
  var itemID = getItemID(origItem.value);
  if (itemID === false) {
    siteItem.value = "Error";
    affItem.value = "Error";
    return;
  }
  var tagID = ARG_TAG ? ARG_TAG : TAG_DEFAULT;
  var link = getNewURL(itemID, tagID);
  var linkAff = getAmazonURL(itemID, tagID);
  siteItem.value = `${link}`;
  affItem.value = `${linkAff}`;
}
