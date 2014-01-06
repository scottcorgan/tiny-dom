# tiny-dom-parser
 
A tiny (less than 200 bytes) DOM parser. Works as a standalone or with [Browserify](http://browserify.org).

[![browser support](https://ci.testling.com/scottcorgan/tiny-dom.png)](https://ci.testling.com/scottcorgan/tiny-dom)
 
## Install

NPM
 
```
npm install tiny-dom-parser --save
```

Bower

```
bower install tiny-dom --save
```

```html
<script src="bower-components/tiny-dom/dist/tinydom.js"></script>
```

## Usage

If html is passed to the function, it returns a DOM element. If text is passed function, it return  a text node.

Browser

```js
var dom = window.tinyDom;

var el = dom('<ul id="tiny-dom"><li>1</li></ul>');
document.body.appendChild(el);
```

Browserify

```js
var dom = require('tiny-dom');

var el = dom('<ul id="tiny-dom"><li>1</li></ul>');
document.body.appendChild(el);
```
 
## Run Tests
 
Requires [Phantomjs](phantomjs.org/download.html) is installed
 
```
npm install
npm test
```