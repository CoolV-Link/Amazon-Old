/** Amazon Link **/

function copyText(id)
{
    var textBox = getElement(id);
    textBox.select();
    textBox.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(textBox.value);
    alert("Text Copied To Clipboard:\n" + textBox.value);
}

function generateLink (idOld, idNew)
{
  var inputItem = getElement(idOld);
  var outputItem = getElement(idNew);
  var itemID = getItemID(inputItem.value);
  if (itemID === false) {
    outputItem.value = "Error";
    return;
  }
  if (!tagID) {
    tagID = tagDefault;
    console.log(`[Default] Tag ID: ${tagID}`);
  }
  var link = getNewURL(itemID, tagID);
  outputItem.value = `${link}`;
}
