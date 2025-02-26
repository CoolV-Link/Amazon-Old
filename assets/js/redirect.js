/** Amazon Redirect **/

function redirect (url)
{
  window.location.replace(url);
  window.location.href = url;
}

function getRedirectURL ()
{
  if (ARG_LIST) {
    return getListURL(ARG_LIST, ARG_TAG);
  }
  if (ARG_ITEM) {
    return getAmazonURL(ARG_ITEM, ARG_TAG);
  }
  return URL_SITE_LINK;
}

function pageRedirect (id)
{
  var url = getRedirectURL();
  redirect(url);
  setLink(id, url);
}
