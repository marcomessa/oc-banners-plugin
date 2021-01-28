/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugins/mmes/banners/components/showbanner/assets/src/Modal.js":
/*!************************************************************************!*\
  !*** ./plugins/mmes/banners/components/showbanner/assets/src/Modal.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal = /*#__PURE__*/function () {
  function Modal(properties) {
    _classCallCheck(this, Modal);

    this.properties = properties;
    this.prepareVars();
  }

  _createClass(Modal, [{
    key: "prepareVars",
    value: function prepareVars() {
      this.hasBeenClosed = this.getCookie(this.properties.cookieName);
      this.overlay = document.createElement('div');
      this.overlay.dataset.mmesModalOverlay = '1';
      this.overlay.classList.add('fade-in');
      this.modal = document.querySelector('[data-mmes-modal]');
      this.closeButton = document.querySelector('[data-mmes-modal-close]');
    }
  }, {
    key: "appendOverlay",
    value: function appendOverlay() {
      document.body.appendChild(this.overlay);
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      var _this = this;

      this.boundClose = function (evt) {
        return _this.close(evt);
      };

      this.overlay.addEventListener('click', this.boundClose);
      this.closeButton.addEventListener('click', this.boundClose);
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      var _this2 = this;

      this.overlay.removeEventListener('click', function () {
        return _this2.boundClose();
      });
      this.closeButton.removeEventListener('click', this.boundClose);
      document.removeEventListener('mouseleave', this.boundOnMouseLeaveDocument);
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      if (!this.hasBeenClosed) {
        switch (this.properties.trigger) {
          case "0":
            // on load
            this.show();
            break;

          case "1":
            //on mouse exit
            this.boundOnMouseLeaveDocument = function (evt) {
              return _this3.onMouseLeaveDocument(evt);
            };

            document.addEventListener('mouseleave', this.boundOnMouseLeaveDocument);
            break;
        }
      }
    }
  }, {
    key: "show",
    value: function show() {
      if (!this.hasBeenClosed) {
        this.appendOverlay();
        this.initEvents();
        this.modal.classList.add('fade-in-slide-in');
      }
    }
  }, {
    key: "close",
    value: function close() {
      if (this.properties.useCookie === '1') {
        this.setCookie(this.properties.cookieName, true, this.properties.cookieDuration);
      }

      this.removeEvents();
      document.body.removeChild(this.overlay);
      document.body.removeChild(this.modal);
    }
  }, {
    key: "onMouseLeaveDocument",
    value: function onMouseLeaveDocument() {
      this.show();
    }
    /**
     * https://plainjs.com/javascript/utilities/set-cookie-get-cookie-and-delete-cookie-5/
     * @param name
     * @returns {*|null}
     */

  }, {
    key: "getCookie",
    value: function getCookie(name) {
      var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
      return v ? v[2] : null;
    }
    /**
     * https://plainjs.com/javascript/utilities/set-cookie-get-cookie-and-delete-cookie-5/
     * @param name
     * @param value
     * @param days
     */

  }, {
    key: "setCookie",
    value: function setCookie(name, value, days) {
      var d = new Date();
      d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
      document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
    }
    /**
     * https://plainjs.com/javascript/utilities/set-cookie-get-cookie-and-delete-cookie-5/
     * @param name
     */

  }, {
    key: "deleteCookie",
    value: function deleteCookie(name) {
      setCookie(name, '', -1);
    }
  }]);

  return Modal;
}();



/***/ }),

/***/ "./plugins/mmes/banners/components/showbanner/assets/src/showmodal.js":
/*!****************************************************************************!*\
  !*** ./plugins/mmes/banners/components/showbanner/assets/src/showmodal.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./plugins/mmes/banners/components/showbanner/assets/src/Modal.js");

window.Modal = _Modal__WEBPACK_IMPORTED_MODULE_0__["default"];

/***/ }),

/***/ 1:
/*!**********************************************************************************!*\
  !*** multi ./plugins/mmes/banners/components/showbanner/assets/src/showmodal.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/marcomessa/dev/plastigrafica/plugins/mmes/banners/components/showbanner/assets/src/showmodal.js */"./plugins/mmes/banners/components/showbanner/assets/src/showmodal.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9tbWVzL2Jhbm5lcnMvY29tcG9uZW50cy9zaG93YmFubmVyL2Fzc2V0cy9zcmMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9tbWVzL2Jhbm5lcnMvY29tcG9uZW50cy9zaG93YmFubmVyL2Fzc2V0cy9zcmMvc2hvd21vZGFsLmpzIl0sIm5hbWVzIjpbIk1vZGFsIiwicHJvcGVydGllcyIsInByZXBhcmVWYXJzIiwiaGFzQmVlbkNsb3NlZCIsImdldENvb2tpZSIsImNvb2tpZU5hbWUiLCJvdmVybGF5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZGF0YXNldCIsIm1tZXNNb2RhbE92ZXJsYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJtb2RhbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9zZUJ1dHRvbiIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImJvdW5kQ2xvc2UiLCJldnQiLCJjbG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYm91bmRPbk1vdXNlTGVhdmVEb2N1bWVudCIsInRyaWdnZXIiLCJzaG93Iiwib25Nb3VzZUxlYXZlRG9jdW1lbnQiLCJhcHBlbmRPdmVybGF5IiwiaW5pdEV2ZW50cyIsInVzZUNvb2tpZSIsInNldENvb2tpZSIsImNvb2tpZUR1cmF0aW9uIiwicmVtb3ZlRXZlbnRzIiwicmVtb3ZlQ2hpbGQiLCJuYW1lIiwidiIsImNvb2tpZSIsIm1hdGNoIiwidmFsdWUiLCJkYXlzIiwiZCIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInRvR01UU3RyaW5nIiwid2luZG93Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRnFCQSxLO0FBQ25CLGlCQUFZQyxVQUFaLEVBQXdCO0FBQUE7O0FBQ3RCLFNBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsV0FBTDtBQUNEOzs7O2tDQUVhO0FBQ1osV0FBS0MsYUFBTCxHQUFxQixLQUFLQyxTQUFMLENBQWUsS0FBS0gsVUFBTCxDQUFnQkksVUFBL0IsQ0FBckI7QUFDQSxXQUFLQyxPQUFMLEdBQWVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EsV0FBS0YsT0FBTCxDQUFhRyxPQUFiLENBQXFCQyxnQkFBckIsR0FBd0MsR0FBeEM7QUFDQSxXQUFLSixPQUFMLENBQWFLLFNBQWIsQ0FBdUJDLEdBQXZCLENBQTJCLFNBQTNCO0FBQ0EsV0FBS0MsS0FBTCxHQUFhTixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWI7QUFDQSxXQUFLQyxXQUFMLEdBQW1CUixRQUFRLENBQUNPLGFBQVQsQ0FBdUIseUJBQXZCLENBQW5CO0FBQ0Q7OztvQ0FFZTtBQUNkUCxjQUFRLENBQUNTLElBQVQsQ0FBY0MsV0FBZCxDQUEwQixLQUFLWCxPQUEvQjtBQUNEOzs7aUNBRVk7QUFBQTs7QUFDWCxXQUFLWSxVQUFMLEdBQWtCLFVBQUFDLEdBQUc7QUFBQSxlQUFJLEtBQUksQ0FBQ0MsS0FBTCxDQUFXRCxHQUFYLENBQUo7QUFBQSxPQUFyQjs7QUFDQSxXQUFLYixPQUFMLENBQWFlLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLEtBQUtILFVBQTVDO0FBQ0EsV0FBS0gsV0FBTCxDQUFpQk0sZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLEtBQUtILFVBQWhEO0FBQ0Q7OzttQ0FFYztBQUFBOztBQUNiLFdBQUtaLE9BQUwsQ0FBYWdCLG1CQUFiLENBQWlDLE9BQWpDLEVBQTBDO0FBQUEsZUFBTSxNQUFJLENBQUNKLFVBQUwsRUFBTjtBQUFBLE9BQTFDO0FBQ0EsV0FBS0gsV0FBTCxDQUFpQk8sbUJBQWpCLENBQXFDLE9BQXJDLEVBQThDLEtBQUtKLFVBQW5EO0FBQ0FYLGNBQVEsQ0FBQ2UsbUJBQVQsQ0FBNkIsWUFBN0IsRUFBMkMsS0FBS0MseUJBQWhEO0FBQ0Q7OzsyQkFFTTtBQUFBOztBQUNMLFVBQUksQ0FBQyxLQUFLcEIsYUFBVixFQUF5QjtBQUN2QixnQkFBUSxLQUFLRixVQUFMLENBQWdCdUIsT0FBeEI7QUFDRSxlQUFLLEdBQUw7QUFBVTtBQUNSLGlCQUFLQyxJQUFMO0FBQ0E7O0FBQ0YsZUFBSyxHQUFMO0FBQVU7QUFDUixpQkFBS0YseUJBQUwsR0FBaUMsVUFBQUosR0FBRztBQUFBLHFCQUFJLE1BQUksQ0FBQ08sb0JBQUwsQ0FBMEJQLEdBQTFCLENBQUo7QUFBQSxhQUFwQzs7QUFDQVosb0JBQVEsQ0FBQ2MsZ0JBQVQsQ0FBMEIsWUFBMUIsRUFBd0MsS0FBS0UseUJBQTdDO0FBQ0E7QUFQSjtBQVNEO0FBQ0Y7OzsyQkFFTTtBQUNMLFVBQUksQ0FBQyxLQUFLcEIsYUFBVixFQUF5QjtBQUN2QixhQUFLd0IsYUFBTDtBQUNBLGFBQUtDLFVBQUw7QUFDQSxhQUFLZixLQUFMLENBQVdGLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLGtCQUF6QjtBQUNEO0FBQ0Y7Ozs0QkFFTztBQUNOLFVBQUksS0FBS1gsVUFBTCxDQUFnQjRCLFNBQWhCLEtBQThCLEdBQWxDLEVBQXVDO0FBQ3JDLGFBQUtDLFNBQUwsQ0FDRSxLQUFLN0IsVUFBTCxDQUFnQkksVUFEbEIsRUFFRSxJQUZGLEVBR0UsS0FBS0osVUFBTCxDQUFnQjhCLGNBSGxCO0FBS0Q7O0FBRUQsV0FBS0MsWUFBTDtBQUNBekIsY0FBUSxDQUFDUyxJQUFULENBQWNpQixXQUFkLENBQTBCLEtBQUszQixPQUEvQjtBQUNBQyxjQUFRLENBQUNTLElBQVQsQ0FBY2lCLFdBQWQsQ0FBMEIsS0FBS3BCLEtBQS9CO0FBQ0Q7OzsyQ0FFc0I7QUFDckIsV0FBS1ksSUFBTDtBQUNEO0FBRUQ7Ozs7Ozs7OzhCQUtVUyxJLEVBQU07QUFDZCxVQUFJQyxDQUFDLEdBQUc1QixRQUFRLENBQUM2QixNQUFULENBQWdCQyxLQUFoQixDQUFzQixZQUFZSCxJQUFaLEdBQW1CLGVBQXpDLENBQVI7QUFDQSxhQUFPQyxDQUFDLEdBQUdBLENBQUMsQ0FBQyxDQUFELENBQUosR0FBVSxJQUFsQjtBQUNEO0FBRUQ7Ozs7Ozs7Ozs4QkFNVUQsSSxFQUFNSSxLLEVBQU9DLEksRUFBTTtBQUMzQixVQUFJQyxDQUFDLEdBQUcsSUFBSUMsSUFBSixFQUFSO0FBQ0FELE9BQUMsQ0FBQ0UsT0FBRixDQUFVRixDQUFDLENBQUNHLE9BQUYsS0FBYyxLQUFLLEVBQUwsR0FBVSxFQUFWLEdBQWUsSUFBZixHQUFzQkosSUFBOUM7QUFDQWhDLGNBQVEsQ0FBQzZCLE1BQVQsR0FBa0JGLElBQUksR0FBRyxHQUFQLEdBQWFJLEtBQWIsR0FBcUIsa0JBQXJCLEdBQTBDRSxDQUFDLENBQUNJLFdBQUYsRUFBNUQ7QUFDRDtBQUVEOzs7Ozs7O2lDQUlhVixJLEVBQU07QUFDakJKLGVBQVMsQ0FBQ0ksSUFBRCxFQUFPLEVBQVAsRUFBVyxDQUFDLENBQVosQ0FBVDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0g7QUFBQTtBQUFBO0FBRUFXLE1BQU0sQ0FBQzdDLEtBQVAsR0FBZUEsOENBQWYsQyIsImZpbGUiOiIvcGx1Z2lucy9tbWVzL2Jhbm5lcnMvY29tcG9uZW50cy9zaG93YmFubmVyL2Fzc2V0cy9idWlsZC9zaG93bW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllc1xuICAgIHRoaXMucHJlcGFyZVZhcnMoKVxuICB9XG5cbiAgcHJlcGFyZVZhcnMoKSB7XG4gICAgdGhpcy5oYXNCZWVuQ2xvc2VkID0gdGhpcy5nZXRDb29raWUodGhpcy5wcm9wZXJ0aWVzLmNvb2tpZU5hbWUpXG4gICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLm92ZXJsYXkuZGF0YXNldC5tbWVzTW9kYWxPdmVybGF5ID0gJzEnXG4gICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKVxuICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tbWVzLW1vZGFsXScpXG4gICAgdGhpcy5jbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1tZXMtbW9kYWwtY2xvc2VdJylcbiAgfVxuXG4gIGFwcGVuZE92ZXJsYXkoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xuICB9XG5cbiAgaW5pdEV2ZW50cygpIHtcbiAgICB0aGlzLmJvdW5kQ2xvc2UgPSBldnQgPT4gdGhpcy5jbG9zZShldnQpXG4gICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZENsb3NlKVxuICAgIHRoaXMuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmJvdW5kQ2xvc2UpXG4gIH1cblxuICByZW1vdmVFdmVudHMoKSB7XG4gICAgdGhpcy5vdmVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5ib3VuZENsb3NlKCkpXG4gICAgdGhpcy5jbG9zZUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRDbG9zZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5ib3VuZE9uTW91c2VMZWF2ZURvY3VtZW50KVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaGFzQmVlbkNsb3NlZCkge1xuICAgICAgc3dpdGNoICh0aGlzLnByb3BlcnRpZXMudHJpZ2dlcikge1xuICAgICAgICBjYXNlIFwiMFwiOiAvLyBvbiBsb2FkXG4gICAgICAgICAgdGhpcy5zaG93KClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjFcIjogLy9vbiBtb3VzZSBleGl0XG4gICAgICAgICAgdGhpcy5ib3VuZE9uTW91c2VMZWF2ZURvY3VtZW50ID0gZXZ0ID0+IHRoaXMub25Nb3VzZUxlYXZlRG9jdW1lbnQoZXZ0KVxuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmJvdW5kT25Nb3VzZUxlYXZlRG9jdW1lbnQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoIXRoaXMuaGFzQmVlbkNsb3NlZCkge1xuICAgICAgdGhpcy5hcHBlbmRPdmVybGF5KClcbiAgICAgIHRoaXMuaW5pdEV2ZW50cygpXG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4tc2xpZGUtaW4nKVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGlmICh0aGlzLnByb3BlcnRpZXMudXNlQ29va2llID09PSAnMScpIHtcbiAgICAgIHRoaXMuc2V0Q29va2llKFxuICAgICAgICB0aGlzLnByb3BlcnRpZXMuY29va2llTmFtZSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzLmNvb2tpZUR1cmF0aW9uXG4gICAgICApXG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVFdmVudHMoKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5vdmVybGF5KVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5tb2RhbClcbiAgfVxuXG4gIG9uTW91c2VMZWF2ZURvY3VtZW50KCkge1xuICAgIHRoaXMuc2hvdygpXG4gIH1cblxuICAvKipcbiAgICogaHR0cHM6Ly9wbGFpbmpzLmNvbS9qYXZhc2NyaXB0L3V0aWxpdGllcy9zZXQtY29va2llLWdldC1jb29raWUtYW5kLWRlbGV0ZS1jb29raWUtNS9cbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHJldHVybnMgeyp8bnVsbH1cbiAgICovXG4gIGdldENvb2tpZShuYW1lKSB7XG4gICAgbGV0IHYgPSBkb2N1bWVudC5jb29raWUubWF0Y2goJyhefDspID8nICsgbmFtZSArICc9KFteO10qKSg7fCQpJyk7XG4gICAgcmV0dXJuIHYgPyB2WzJdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBodHRwczovL3BsYWluanMuY29tL2phdmFzY3JpcHQvdXRpbGl0aWVzL3NldC1jb29raWUtZ2V0LWNvb2tpZS1hbmQtZGVsZXRlLWNvb2tpZS01L1xuICAgKiBAcGFyYW0gbmFtZVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHBhcmFtIGRheXNcbiAgICovXG4gIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgZGF5cykge1xuICAgIHZhciBkID0gbmV3IERhdGU7XG4gICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgMjQgKiA2MCAqIDYwICogMTAwMCAqIGRheXMpO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgXCI7cGF0aD0vO2V4cGlyZXM9XCIgKyBkLnRvR01UU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogaHR0cHM6Ly9wbGFpbmpzLmNvbS9qYXZhc2NyaXB0L3V0aWxpdGllcy9zZXQtY29va2llLWdldC1jb29raWUtYW5kLWRlbGV0ZS1jb29raWUtNS9cbiAgICogQHBhcmFtIG5hbWVcbiAgICovXG4gIGRlbGV0ZUNvb2tpZShuYW1lKSB7XG4gICAgc2V0Q29va2llKG5hbWUsICcnLCAtMSk7XG4gIH1cbn1cbiIsImltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiXG5cbndpbmRvdy5Nb2RhbCA9IE1vZGFsXG4iXSwic291cmNlUm9vdCI6IiJ9