var pageComponent =
webpackJsonppageComponent([39],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* jshint ignore:start */

/**
 * Abstract interface for storing and retrieving data using some persistence
 * mechanism.
 * @constructor
 */

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StorageMechanism = function () {
	function StorageMechanism() {
		_classCallCheck(this, StorageMechanism);
	}

	_createClass(StorageMechanism, [{
		key: 'clear',

		/**
   * Clear all items from the data storage.
   */
		value: function clear() {
			throw Error('Unimplemented abstract method');
		}

		/**
   * Sets an item in the data storage.
   * @param {string} key The key to set.
   * @param {*} value The value to serialize to a string and save.
   */

	}, {
		key: 'set',
		value: function set(key, value) {
			throw Error('Unimplemented abstract method');
		}

		/**
   * Gets an item from the data storage.
   * @param {string} key The key to get.
   * @return {*} Deserialized value or undefined if not found.
   */

	}, {
		key: 'get',
		value: function get(key) {
			throw Error('Unimplemented abstract method');
		}

		/**
   * Checks if this mechanism is supported in the current environment.
   * Subclasses should override this when necessary.
   */

	}, {
		key: 'keys',


		/**
   * Returns the list of keys stored in the Storage object.
   * @param {!Array<string>} keys
   */
		value: function keys() {
			throw Error('Unimplemented abstract method');
		}

		/**
   * Removes an item from the data storage.
   * @param {string} key The key to remove.
   */

	}, {
		key: 'remove',
		value: function remove(key) {
			throw Error('Unimplemented abstract method');
		}

		/**
   * Returns the number of data items stored in the Storage object.
   * @return {number}
   */

	}, {
		key: 'size',
		value: function size() {
			throw Error('Unimplemented abstract method');
		}
	}], [{
		key: 'isSupported',
		value: function isSupported() {
			return true;
		}
	}]);

	return StorageMechanism;
}();

exports.default = StorageMechanism;

/* jshint ignore:end */

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _metalToggler = __webpack_require__(21);

var _metalToggler2 = _interopRequireDefault(_metalToggler);

var _metalStorage = __webpack_require__(20);

var _Sidebar = __webpack_require__(23);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_Component) {
	_inherits(Sidebar, _Component);

	function Sidebar() {
		_classCallCheck(this, Sidebar);

		return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
	}

	_createClass(Sidebar, [{
		key: 'attached',
		value: function attached() {
			_metalToggler2.default.CSS_EXPANDED = 'open'; /* Until metal-toggler can manage classenames on states */

			this._toggler = new _metalToggler2.default({
				content: '.sidebar-toggler-content',
				header: '.sidebar-toggler'
			});

			this.createStorage_();

			this.setAtlasFromStorage_();
		}
	}, {
		key: 'disposed',
		value: function disposed() {
			this._toggler.dispose();
		}
	}, {
		key: 'createStorage_',
		value: function createStorage_() {
			this.mechanism = new _metalStorage.LocalStorageMechanism();

			this.storage = new _metalStorage.Storage(this.mechanism);
		}
	}, {
		key: 'handleThemeChange_',
		value: function handleThemeChange_(_ref) {
			var target = _ref.target;

			this.storage.set('atlas', target.checked);

			this.atlas = target.checked;
		}
	}, {
		key: 'setAtlas_',
		value: function setAtlas_(value) {
			var linkTag = document.getElementById('mainCssLink');

			var href = '/styles/main.css';

			if (!value) {
				href = '/styles/clay_base.css';
			}

			if (linkTag.getAttribute('href') !== href) {
				linkTag.setAttribute('href', href);
			}

			return value;
		}
	}, {
		key: 'setAtlasFromStorage_',
		value: function setAtlasFromStorage_() {
			var atlas = this.storage.get('atlas');

			if (atlas !== undefined) {
				this.atlas = atlas;
			}
		}
	}]);

	return Sidebar;
}(_metalComponent2.default);

;

Sidebar.STATE = {
	atlas: {
		value: true,
		setter: 'setAtlas_'
	}
};

_metalSoy2.default.register(Sidebar, _Sidebar2.default);

exports.default = Sidebar;

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalStorageMechanism = exports.StorageMechanism = exports.Storage = undefined;

var _Storage = __webpack_require__(24);

var _Storage2 = _interopRequireDefault(_Storage);

var _StorageMechanism = __webpack_require__(9);

var _StorageMechanism2 = _interopRequireDefault(_StorageMechanism);

var _LocalStorageMechanism = __webpack_require__(25);

var _LocalStorageMechanism2 = _interopRequireDefault(_LocalStorageMechanism);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Storage = _Storage2.default;
exports.StorageMechanism = _StorageMechanism2.default;
exports.LocalStorageMechanism = _LocalStorageMechanism2.default;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Toggler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _metalDom = __webpack_require__(3);

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalEvents = __webpack_require__(5);

var _metalState = __webpack_require__(6);

var _metalState2 = _interopRequireDefault(_metalState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Toggler component.
 */
var Toggler = function (_State) {
	_inherits(Toggler, _State);

	/**
  * @inheritDoc
  */
	function Toggler(config) {
		_classCallCheck(this, Toggler);

		var _this = _possibleConstructorReturn(this, (Toggler.__proto__ || Object.getPrototypeOf(Toggler)).call(this, config));

		_this.headerEventHandler_ = new _metalEvents.EventHandler();

		_this.on('headerChanged', _this.syncHeader);
		_this.syncHeader();
		return _this;
	}

	/**
  * @inheritDoc
  */


	_createClass(Toggler, [{
		key: 'disposeInternal',
		value: function disposeInternal() {
			_get(Toggler.prototype.__proto__ || Object.getPrototypeOf(Toggler.prototype), 'disposeInternal', this).call(this);
			this.headerEventHandler_.removeAllListeners();
		}

		/**
   * Manually collapse the content's visibility.
   * @param {string|!Element} header
   */

	}, {
		key: 'collapse',
		value: function collapse(header) {
			var headerElements = this.getHeaderElements_(header);
			var content = this.getContentElement_(headerElements);

			this.emit('headerToggled', { headerElements: headerElements, content: content });
			this.emit('headerCollapsed', { headerElements: headerElements, content: content });

			_metalDom2.default.removeClasses(content, this.expandedClasses);
			_metalDom2.default.addClasses(content, this.collapsedClasses);
			_metalDom2.default.removeClasses(headerElements, this.headerExpandedClasses);
			_metalDom2.default.addClasses(headerElements, this.headerCollapsedClasses);
			this.setAttribute_(content, 'aria-expanded', false);
			this.setAttribute_(headerElements, 'aria-expanded', false);
		}

		/**
   * Manually expand the content's visibility.
   * @param {string|!Element} header
   */

	}, {
		key: 'expand',
		value: function expand(header) {
			var headerElements = this.getHeaderElements_(header);
			var content = this.getContentElement_(headerElements);

			this.emit('headerToggled', { headerElements: headerElements, content: content });
			this.emit('headerExpanded', { headerElements: headerElements, content: content });

			_metalDom2.default.addClasses(content, this.expandedClasses);
			_metalDom2.default.removeClasses(content, this.collapsedClasses);
			_metalDom2.default.addClasses(headerElements, this.headerExpandedClasses);
			_metalDom2.default.removeClasses(headerElements, this.headerCollapsedClasses);
			this.setAttribute_(content, 'aria-expanded', true);
			this.setAttribute_(headerElements, 'aria-expanded', true);
		}

		/**
   * Gets the content to be toggled by the given header element.
   * @param {!Element} header
   * @return {!Element}
   * @protected
   */

	}, {
		key: 'getContentElement_',
		value: function getContentElement_(header) {
			if (_metal2.default.isElement(this.content)) {
				return this.content;
			}

			var content = _metalDom2.default.next(header, this.content);
			if (content) {
				return content;
			}

			if (_metal2.default.isElement(header)) {
				content = header.querySelector(this.content);
				if (content) {
					return content;
				}
			}

			return this.container.querySelectorAll(this.content);
		}

		/**
   * Gets the header elements by giving a selector.
   * @param {string} header
   * @return {!Nodelist}
   * @protected
   */

	}, {
		key: 'getHeaderElements_',
		value: function getHeaderElements_() {
			var header = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.header;

			if (_metal2.default.isElement(header) || _metal2.default.isElement(header[0])) {
				return header;
			}
			return this.container.querySelectorAll(header);
		}

		/**
   * Handles a `click` event on the header.
   * @param {!Event} event
   * @protected
   */

	}, {
		key: 'handleClick_',
		value: function handleClick_(event) {
			this.toggle(event.delegateTarget || event.currentTarget);
		}

		/**
   * Handles a `keydown` event on the header.
   * @param {!Event} event
   * @protected
   */

	}, {
		key: 'handleKeydown_',
		value: function handleKeydown_(event) {
			if (event.keyCode === 13 || event.keyCode === 32) {
				this.toggle(event.delegateTarget || event.currentTarget);
				event.preventDefault();
			}
		}

		/**
   * Checks if there is any expanded header in the component context.
   * @param {string|!Element} header
   * @return {boolean}
   * @protected
   */

	}, {
		key: 'hasExpanded_',
		value: function hasExpanded_(header) {
			if (_metal2.default.isElement(header)) {
				return _metalDom2.default.hasClass(header, this.headerExpandedClasses);
			}
			return !!this.container.querySelectorAll('.' + this.headerExpandedClasses).length;
		}

		/**
   * Sets attribute on one or more elements.
   * @param {!Element|NodeList} elements
   * @param {!string} name
   * @param {?string|boolean} value
   */

	}, {
		key: 'setAttribute_',
		value: function setAttribute_(elements, name, value) {
			elements = elements instanceof NodeList ? elements : [elements];

			for (var i = 0; i < elements.length; i++) {
				elements[i].setAttribute(name, value);
			}
		}

		/**
   * Syncs the component according to the value of the `header` state,
   * attaching events to the new element and detaching from any previous one.
   */

	}, {
		key: 'syncHeader',
		value: function syncHeader() {
			this.headerEventHandler_.removeAllListeners();
			if (this.header) {
				if (_metal2.default.isString(this.header)) {
					this.headerEventHandler_.add(_metalDom2.default.delegate(this.container, 'click', this.header, this.handleClick_.bind(this)), _metalDom2.default.delegate(this.container, 'keydown', this.header, this.handleKeydown_.bind(this)));
				} else {
					this.headerEventHandler_.add(_metalDom2.default.on(this.header, 'click', this.handleClick_.bind(this)), _metalDom2.default.on(this.header, 'keydown', this.handleKeydown_.bind(this)));
				}
			}
		}

		/**
   * Toggles the content's visibility.
   * @param {string|!Element} header
   */

	}, {
		key: 'toggle',
		value: function toggle(header) {
			var headerElements = this.getHeaderElements_(header);
			if (this.hasExpanded_(headerElements)) {
				this.collapse(headerElements);
			} else {
				this.expand(headerElements);
			}
		}
	}]);

	return Toggler;
}(_metalState2.default);

/**
 * State configuration.
 */


Toggler.STATE = {
	/**
  * The CSS classes added to the content when it's collapsed.
  */
	collapsedClasses: {
		validator: _metal2.default.isString,
		value: 'toggler-collapsed'
	},

	/**
  * The element where the header/content selectors will be looked for.
  * @type {string|!Element}
  */
	container: {
		setter: _metalDom2.default.toElement,
		validator: function validator(value) {
			return _metal2.default.isString(value) || _metal2.default.isElement(value);
		},
		valueFn: function valueFn() {
			return document;
		}
	},

	/**
  * The element that should be expanded/collapsed by this toggler.
  * @type {string|!Element}
  */
	content: {
		validator: function validator(value) {
			return _metal2.default.isString(value) || _metal2.default.isElement(value);
		}
	},

	/**
  * The CSS classes added to the content when it's expanded.
  */
	expandedClasses: {
		validator: _metal2.default.isString,
		value: 'toggler-expanded'
	},

	/**
  * The element that should be trigger toggling.
  * @type {string|!Element}
  */
	header: {
		validator: function validator(value) {
			return _metal2.default.isString(value) || _metal2.default.isElement(value);
		}
	},

	/**
  * The CSS classes added to the header when the content is collapsed.
  */
	headerCollapsedClasses: {
		validator: _metal2.default.isString,
		value: 'toggler-header-collapsed'
	},

	/**
  * The CSS classes added to the header when the content is expanded.
  */
	headerExpandedClasses: {
		validator: _metal2.default.isString,
		value: 'toggler-header-expanded'
	}
};

exports.Toggler = Toggler;
exports.default = Toggler;

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templates", function() { return templates; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_soy__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_soy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal_soy__);
/* jshint ignore:start */


var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Sidebar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Sidebar.
 * @public
 */

goog.module('Sidebar.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias1 = __WEBPACK_IMPORTED_MODULE_1_metal_soy___default.a.getTemplate('ElectricSearchAutocomplete.incrementaldom', 'render');

var $templateAlias2 = __WEBPACK_IMPORTED_MODULE_1_metal_soy___default.a.getTemplate('MainNavigation.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div');
    ie_open('div', null, null,
        'class', 'navbar navbar-mobile navbar-expand-lg navbar-header');
      ie_open('a', null, null,
          'class', 'navbar-brand d-flex',
          'href', '/');
        ie_open('img', null, null,
            'class', 'logo mr-2',
            'src', '/images/clay_logo_w.png',
            'alt', '');
        ie_close('img');
        ie_open('span', null, null,
            'class', 'title h1 font-weight-bold mb-0 p-1');
          var dyn2 = opt_data.site.title;
          if (typeof dyn2 == 'function') dyn2(); else if (dyn2 != null) itext(dyn2);
          itext(' ');
        ie_close('span');
      ie_close('a');
      ie_open('button', null, null,
          'class', 'navbar-toggler sidebar-toggler p-3',
          'type', 'button',
          'data-toggle', 'collapse',
          'data-target', '#navbarSupportedContent',
          'aria-controls', 'navbarSupportedContent',
          'aria-expanded', 'false',
          'aria-label', 'Toggle navigation');
        ie_open('svg', null, null,
            'aria-hidden', 'true',
            'class', 'lexicon-icon lexicon-icon-bars');
          ie_void('use', null, null,
              'xlink:href', '/vendor/lexicon/icons.svg#bars');
        ie_close('svg');
      ie_close('button');
    ie_close('div');
    ie_open('nav', null, null,
        'class', 'sidebar-toggler-content sidenav-fixed sidenav-menu-slider',
        'id', 'clay-sidebar');
      ie_open('div', null, null,
          'class', 'sidebar sidebar-clay-site sidenav-menu d-flex flex-column');
        ie_open('div', null, null,
            'class', 'sidebar-header');
          ie_open('div', null, null,
              'class', 'navbar navbar-expand-lg navbar-header');
            ie_open('a', null, null,
                'class', 'navbar-brand',
                'href', '/');
              ie_open('img', null, null,
                  'class', 'logo mr-2',
                  'src', '/images/clay_logo_w.png',
                  'alt', opt_data.site.title);
              ie_close('img');
              ie_open('span', null, null,
                  'class', 'title');
                var dyn3 = opt_data.site.title;
                if (typeof dyn3 == 'function') dyn3(); else if (dyn3 != null) itext(dyn3);
                itext(' ');
              ie_close('span');
              ie_open('small');
                itext('by Liferay');
              ie_close('small');
            ie_close('a');
          ie_close('div');
        ie_close('div');
        ie_open('div', null, null,
            'class', 'sidebar-body mb-auto');
          ie_open('div', null, null,
              'class', 'sidebar-search');
            $templateAlias1({maxResults: 5, path: '/docs/', placeholder: 'Search'}, null, opt_ijData);
          ie_close('div');
          ie_open('div', null, null,
              'class', 'style-toggler');
            ie_open('div', null, null,
                'class', 'form-check');
              ie_open('label', null, null,
                  'class', 'form-check-label');
                var attributes__soy81 = function() {
                  if (opt_data.atlas) {
                    iattr('checked', '');
                  }
                  iattr('class', 'form-check-input');
                  iattr('data-onchange', 'handleThemeChange_');
                  iattr('type', 'checkbox');
                };
                ie_open_start('input');
                    attributes__soy81();
                ie_open_end();
                ie_close('input');
                ie_open('span', null, null,
                    'class', 'form-check-description');
                  itext('Show Atlas Theme');
                ie_close('span');
              ie_close('label');
            ie_close('div');
          ie_close('div');
          $templateAlias2(opt_data, null, opt_ijData);
        ie_close('div');
        ie_open('ul', null, null,
            'class', 'nav-icons');
          ie_open('li', null, null,
              'class', 'd-block mb-3');
            ie_open('a', null, null,
                'class', 'rounded-circle sticker sticker-secondary',
                'href', 'https://github.com/liferay/clay/issues',
                'target', '_blank');
              ie_open('svg', null, null,
                  'aria-hidden', 'true',
                  'class', 'lexicon-icon lexicon-icon-bars');
                ie_void('use', null, null,
                    'xlink:href', '/vendor/lexicon/icons.svg#comments');
              ie_close('svg');
            ie_close('a');
          ie_close('li');
          ie_open('li', null, null,
              'class', 'd-block');
            ie_open('a', null, null,
                'class', 'rounded-circle sticker sticker-secondary',
                'href', 'https://github.com/liferay/clay',
                'target', '_blank');
              ie_open('img', null, null,
                  'class', 'lexicon-icon',
                  'src', '/images/home/GitHub-Mark-64px.svg',
                  'alt', '');
              ie_close('img');
            ie_close('a');
          ie_close('li');
        ie_close('ul');
      ie_close('div');
    ie_close('nav');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Sidebar.render';
}

exports.render.params = ["atlas","section","site"];
exports.render.types = {"atlas":"any","section":"any","site":"any"};
templates = exports;
return exports;

});

class Sidebar extends __WEBPACK_IMPORTED_MODULE_0_metal_component___default.a {}
__WEBPACK_IMPORTED_MODULE_1_metal_soy___default.a.register(Sidebar, templates);

/* harmony default export */ __webpack_exports__["default"] = (templates);
/* jshint ignore:end */


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _StorageMechanism = __webpack_require__(9);

var _StorageMechanism2 = _interopRequireDefault(_StorageMechanism);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Storage = function () {

	/**
  * Provides a convenient API for data persistence using a selected data
  * storage mechanism.
  * @param {!StorageMechanism} mechanism The underlying storage mechanism.
  * @constructor
  */
	function Storage(mechanism) {
		_classCallCheck(this, Storage);

		assertMechanismDefAndNotNull(mechanism);
		assertMechanismInstanceOf(mechanism);

		/**
   * The mechanism used to persist key-value pairs.
   * @type {StorageMechanism}
   * @protected
   */
		this.mechanism = mechanism;
	}

	/**
  * Clear all items from the data storage.
  */


	_createClass(Storage, [{
		key: 'clear',
		value: function clear() {
			this.mechanism.clear();
		}

		/**
   * Sets an item in the data storage.
   * @param {string} key The key to set.
   * @param {*} value The value to serialize to a string and save.
   */

	}, {
		key: 'set',
		value: function set(key, value) {
			if (!_metal2.default.isDef(value)) {
				this.mechanism.remove(key);
				return;
			}
			this.mechanism.set(key, JSON.stringify(value));
		}

		/**
   * Gets an item from the data storage.
   * @param {string} key The key to get.
   * @return {*} Deserialized value or undefined if not found.
   */

	}, {
		key: 'get',
		value: function get(key) {
			var json;
			try {
				json = this.mechanism.get(key);
			} catch (e) {
				return undefined;
			}
			if (_metal2.default.isNull(json)) {
				return undefined;
			}
			try {
				return JSON.parse(json);
			} catch (e) {
				throw Storage.ErrorCode.INVALID_VALUE;
			}
		}

		/**
   * Returns the list of keys stored in the Storage object.
   * @param {!Array<string>} keys
   */

	}, {
		key: 'keys',
		value: function keys() {
			return this.mechanism.keys();
		}

		/**
   * Removes an item from the data storage.
   * @param {string} key The key to remove.
   */

	}, {
		key: 'remove',
		value: function remove(key) {
			this.mechanism.remove(key);
		}

		/**
   * Returns the number of data items stored in the Storage object.
   * @return {number}
   */

	}, {
		key: 'size',
		value: function size() {
			return this.mechanism.size();
		}

		/**
   * Returns the list of values stored in the Storage object.
   * @param {!Array<string>} values
   */

	}, {
		key: 'values',
		value: function values() {
			var _this = this;

			return this.keys().map(function (key) {
				return _this.get(key);
			});
		}
	}]);

	return Storage;
}();

/**
 * Errors thrown by the storage.
 * @enum {string}
 */


Storage.ErrorCode = {
	INVALID_VALUE: 'Storage: Invalid value was encountered'
};

function assertMechanismDefAndNotNull(mechanism) {
	if (!_metal2.default.isDefAndNotNull(mechanism)) {
		throw Error('Storage mechanism is required');
	}
}

function assertMechanismInstanceOf(mechanism) {
	if (!(mechanism instanceof _StorageMechanism2.default)) {
		throw Error('Storage mechanism must me an implementation of StorageMechanism');
	}
}

exports.default = Storage;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _StorageMechanism2 = __webpack_require__(9);

var _StorageMechanism3 = _interopRequireDefault(_StorageMechanism2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Abstract interface for storing and retrieving data using some persistence
 * mechanism.
 * @constructor
 */
var LocalStorageMechanism = function (_StorageMechanism) {
	_inherits(LocalStorageMechanism, _StorageMechanism);

	function LocalStorageMechanism() {
		_classCallCheck(this, LocalStorageMechanism);

		return _possibleConstructorReturn(this, (LocalStorageMechanism.__proto__ || Object.getPrototypeOf(LocalStorageMechanism)).apply(this, arguments));
	}

	_createClass(LocalStorageMechanism, [{
		key: 'storage',

		/**
   * Returns reference for global local storage. by default
   */
		value: function storage() {
			return LocalStorageMechanism.globals.localStorage;
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'clear',
		value: function clear() {
			this.storage().clear();
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'keys',
		value: function keys() {
			return Object.keys(this.storage());
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'get',
		value: function get(key) {
			return this.storage().getItem(key);
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'remove',


		/**
   * @inheritDoc
   */
		value: function remove(key) {
			this.storage().removeItem(key);
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'set',
		value: function set(key, value) {
			this.storage().setItem(key, value);
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'size',
		value: function size() {
			return this.storage().length;
		}
	}], [{
		key: 'isSupported',
		value: function isSupported() {
			return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
		}
	}]);

	return LocalStorageMechanism;
}(_StorageMechanism3.default);

if (LocalStorageMechanism.isSupported()) {
	LocalStorageMechanism.globals = {
		localStorage: window.localStorage
	};
}

exports.default = LocalStorageMechanism;

/***/ })
],[12]);