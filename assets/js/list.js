/** Amazon List **/

function pageList (idPage, idTitle)
{
  var nodePage = getElement(idPage);
  var nodeTitle = getElement(idTitle);

  if (!ARG_LIST_CFG) {
    nodeTitle.innerHTML = "Error: Invalid File";
    return;
  }

  nodeTitle.innerHTML = "List: "+ARG_LIST_CFG;
  var lists = loadSavedList(ARG_LIST_CFG);

  if (!ARG_LIST) {
    logList("Lists:", lists);
    var listItems = newListItems(lists);
    nodePage.appendChild(listItems);
    return;
  }

  lists.forEach(
    (list) => {
        logList(`[${list.id}] ${list.name}:`, list.items);
        var listContainer = newListContainer(list);
        nodePage.appendChild(listContainer);
    });
}

function newListItems (items)
{
  var ul = document.createElement('ul');
  ul.innerHTML = "";
  items.forEach(
    (item) => {
      var li = newTextLink('li', item.name, '#'+item.id);
      ul.appendChild(li);
    });
  return ul;
}

function newTextNode (type, text)
{
  var textNode = createTextNode(text);
  if (!type) {
    return textNode;
  }
  var container = document.createElement(type);
  container.appendChild(textNode);
  return container;
}

function newTextLink (type, text, url)
{
  var textNode = createTextNode(text);
  var a = document.createElement('a');
  a.href = url;
  a.appendChild(textNode);
  if (!type) {
    return a;
  }
  var container = document.createElement(type);
  container.appendChild(a);
  return container;
}

function newListContainer (list)
{
  var container = document.createElement('div');
  container.id = 'list-'+list.id;
  var lineBreak = document.createElement('br');

  container.appendChild(newTextLink('h1', list.name, '#'+list.id));
  container.appendChild(newContainerNode('p', 'br',
      createTextNode(null, list.info),
      newTextLink(null, 'Owner: '+list.owner.name, '#'+list.owner.id)));
  //container.appendChild(newParagraph(list.info, 'Owner: '+list.owner));
  container.appendChild(newListItems(list.items));

  return container;
}

function newContainerNode (type, spacer, ...nodes)
{
  var container = document.createElement(type);
  var separator = document.createElement(spacer);
  nodes.forEach(
    (node) => {
      if (index > 0) {
        container.appendChild(separator);
      }
      container.appendChild(node);
      index++;
    });
  return container;
}

function loadSavedList(listID)
{
  var url = `${URL_SITE}/assets/list/${listID}.json`;
  var data = (await (await fetch(url)).text());
  var json = JSON.parse(data);
  return json;
}

function logList (text, ...args)
{
//  args.forEach(
//    (arg) => {
      console.log(text);
      console.log(args);
//    });
}
