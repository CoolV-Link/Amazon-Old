/** Amazon Redirect **/

function redirect (url)
{
  window.location.href = url;
  window.location.replace(url);
}

function getRedirectURL ()
{
  if (ARG_LIST) {
    return getListURL(ARG_LIST, ARG_TAG);
  }
  if (ARG_ITEM) {
    return getAmazonURL(ARG_ITEM, ARG_TAG);
  }
  return `${URL_SITE}/Link`;
}

function pageRedirect (id)
{
  var url = getRedirectURL();
  redirect(url);
  setLink(id, url);
}
