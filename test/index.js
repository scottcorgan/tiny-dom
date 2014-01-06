var dom = require('../index.js');
var test = require('tape');

test('creates element with no attributes', function (t) {
  var div = dom('<div></div>');
  var span = dom('    <span></span>');
  
  t.equal(div.nodeName, document.createElement('div').nodeName, 'created div element');
  t.equal(span.nodeName, document.createElement('span').nodeName, 'created span element');
  t.end();
});

test('creates element with attributes', function (t) {
  var div = dom('<div class="test" role="navigation"></div>');
  
  t.equal(div.className, 'test', 'added class attibute');
  t.equal(div.getAttribute('role'), 'navigation', 'added role attribute');
  t.end();
});

test('creates a text node from normal strings', function (t) {
  var text = dom('test');
  
  t.equal(text.nodeValue, 'test', 'text node');
  t.end();
});

test('creates element with children', function (t) {
  var el = dom('<div><span class="child1"></span></span><span class="child2"></span></div>');
  
  t.equal(el.firstChild.className, 'child1', 'has first child');
  t.end();
});

