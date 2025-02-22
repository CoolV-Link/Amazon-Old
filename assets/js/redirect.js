/** Amazon Redirect **/

function redirect (url)
{
  window.location.replace(`${url}`);
  //window.location.href = `${url}`;
}

function getRedirectURL ()
{
  if (ARG_LIST) {
    return getListURL(ARG_LIST, ARG_TAG);
     // return `${URL_SITE}/List/?list=${ARG_LIST}`;
  }
  if (ARG_ITEM) {
    return getAmazonURL(ARG_ITEM, ARG_TAG);
  }
  return `${URL_SITE}/Link/`;
}

function pageRedirect (id)
{
  var url = getRedirectURL();
  setLink(id, url);
  redirect(url);
}
