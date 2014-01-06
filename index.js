module.exports = function (html) {
  var el = document.createElement('div');
  el.innerHTML = html.replace(/^\s+|\s+$/g,"");

  return el.removeChild(el.firstChild);
};