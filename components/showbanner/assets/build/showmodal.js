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
      this.overlay = document.createElement('div');
      this.overlay.dataset.mmesModalOverlay = true;
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
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      var _this2 = this;

      this.overlay.removeEventListener('click', function () {
        return _this2.boundClose();
      });
      document.removeEventListener('mouseleave', this.boundOnMouseLeaveDocument);
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

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
  }, {
    key: "show",
    value: function show() {
      this.appendOverlay();
      this.initEvents();
      this.modal.classList.add('fade-in-slide-in');
    }
  }, {
    key: "close",
    value: function close() {
      this.removeEvents();
      document.body.removeChild(this.overlay);
      document.body.removeChild(this.modal);
    }
  }, {
    key: "onMouseLeaveDocument",
    value: function onMouseLeaveDocument() {
      this.show();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9tbWVzL2Jhbm5lcnMvY29tcG9uZW50cy9zaG93YmFubmVyL2Fzc2V0cy9zcmMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9tbWVzL2Jhbm5lcnMvY29tcG9uZW50cy9zaG93YmFubmVyL2Fzc2V0cy9zcmMvc2hvd21vZGFsLmpzIl0sIm5hbWVzIjpbIk1vZGFsIiwicHJvcGVydGllcyIsInByZXBhcmVWYXJzIiwib3ZlcmxheSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRhdGFzZXQiLCJtbWVzTW9kYWxPdmVybGF5IiwiY2xhc3NMaXN0IiwiYWRkIiwibW9kYWwiLCJxdWVyeVNlbGVjdG9yIiwiY2xvc2VCdXR0b24iLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJib3VuZENsb3NlIiwiZXZ0IiwiY2xvc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJvdW5kT25Nb3VzZUxlYXZlRG9jdW1lbnQiLCJ0cmlnZ2VyIiwic2hvdyIsIm9uTW91c2VMZWF2ZURvY3VtZW50IiwiYXBwZW5kT3ZlcmxheSIsImluaXRFdmVudHMiLCJyZW1vdmVFdmVudHMiLCJyZW1vdmVDaGlsZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEZxQkEsSztBQUNuQixpQkFBWUMsVUFBWixFQUF3QjtBQUFBOztBQUN0QixTQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUtDLFdBQUw7QUFDRDs7OztrQ0FFYTtBQUNaLFdBQUtDLE9BQUwsR0FBZUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxXQUFLRixPQUFMLENBQWFHLE9BQWIsQ0FBcUJDLGdCQUFyQixHQUF3QyxJQUF4QztBQUNBLFdBQUtKLE9BQUwsQ0FBYUssU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsU0FBM0I7QUFDQSxXQUFLQyxLQUFMLEdBQWFOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixtQkFBdkIsQ0FBYjtBQUNBLFdBQUtDLFdBQUwsR0FBbUJSLFFBQVEsQ0FBQ08sYUFBVCxDQUF1Qix5QkFBdkIsQ0FBbkI7QUFDRDs7O29DQUVlO0FBQ2RQLGNBQVEsQ0FBQ1MsSUFBVCxDQUFjQyxXQUFkLENBQTBCLEtBQUtYLE9BQS9CO0FBQ0Q7OztpQ0FFWTtBQUFBOztBQUNYLFdBQUtZLFVBQUwsR0FBa0IsVUFBQUMsR0FBRztBQUFBLGVBQUksS0FBSSxDQUFDQyxLQUFMLENBQVdELEdBQVgsQ0FBSjtBQUFBLE9BQXJCOztBQUNBLFdBQUtiLE9BQUwsQ0FBYWUsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsS0FBS0gsVUFBNUM7QUFDRDs7O21DQUVjO0FBQUE7O0FBQ2IsV0FBS1osT0FBTCxDQUFhZ0IsbUJBQWIsQ0FBaUMsT0FBakMsRUFBMEM7QUFBQSxlQUFNLE1BQUksQ0FBQ0osVUFBTCxFQUFOO0FBQUEsT0FBMUM7QUFDQVgsY0FBUSxDQUFDZSxtQkFBVCxDQUE2QixZQUE3QixFQUEyQyxLQUFLQyx5QkFBaEQ7QUFDRDs7OzJCQUVNO0FBQUE7O0FBQ0wsY0FBUSxLQUFLbkIsVUFBTCxDQUFnQm9CLE9BQXhCO0FBQ0UsYUFBSyxHQUFMO0FBQVU7QUFDUixlQUFLQyxJQUFMO0FBQ0E7O0FBQ0YsYUFBSyxHQUFMO0FBQVU7QUFDUixlQUFLRix5QkFBTCxHQUFpQyxVQUFBSixHQUFHO0FBQUEsbUJBQUksTUFBSSxDQUFDTyxvQkFBTCxDQUEwQlAsR0FBMUIsQ0FBSjtBQUFBLFdBQXBDOztBQUNBWixrQkFBUSxDQUFDYyxnQkFBVCxDQUEwQixZQUExQixFQUF3QyxLQUFLRSx5QkFBN0M7QUFDQTtBQVBKO0FBU0Q7OzsyQkFFTTtBQUNMLFdBQUtJLGFBQUw7QUFDQSxXQUFLQyxVQUFMO0FBQ0EsV0FBS2YsS0FBTCxDQUFXRixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixrQkFBekI7QUFDRDs7OzRCQUVPO0FBQ04sV0FBS2lCLFlBQUw7QUFDQXRCLGNBQVEsQ0FBQ1MsSUFBVCxDQUFjYyxXQUFkLENBQTBCLEtBQUt4QixPQUEvQjtBQUNBQyxjQUFRLENBQUNTLElBQVQsQ0FBY2MsV0FBZCxDQUEwQixLQUFLakIsS0FBL0I7QUFDRDs7OzJDQUVzQjtBQUNyQixXQUFLWSxJQUFMO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RESDtBQUFBO0FBQUE7QUFFQU0sTUFBTSxDQUFDNUIsS0FBUCxHQUFlQSw4Q0FBZixDIiwiZmlsZSI6Ii9wbHVnaW5zL21tZXMvYmFubmVycy9jb21wb25lbnRzL3Nob3diYW5uZXIvYXNzZXRzL2J1aWxkL3Nob3dtb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzXG4gICAgdGhpcy5wcmVwYXJlVmFycygpXG4gIH1cblxuICBwcmVwYXJlVmFycygpIHtcbiAgICB0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRoaXMub3ZlcmxheS5kYXRhc2V0Lm1tZXNNb2RhbE92ZXJsYXkgPSB0cnVlXG4gICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKVxuICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tbWVzLW1vZGFsXScpXG4gICAgdGhpcy5jbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1tZXMtbW9kYWwtY2xvc2VdJylcbiAgfVxuXG4gIGFwcGVuZE92ZXJsYXkoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xuICB9XG5cbiAgaW5pdEV2ZW50cygpIHtcbiAgICB0aGlzLmJvdW5kQ2xvc2UgPSBldnQgPT4gdGhpcy5jbG9zZShldnQpXG4gICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZENsb3NlKVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRzKCkge1xuICAgIHRoaXMub3ZlcmxheS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuYm91bmRDbG9zZSgpKVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmJvdW5kT25Nb3VzZUxlYXZlRG9jdW1lbnQpXG4gIH1cblxuICBpbml0KCkge1xuICAgIHN3aXRjaCAodGhpcy5wcm9wZXJ0aWVzLnRyaWdnZXIpIHtcbiAgICAgIGNhc2UgXCIwXCI6IC8vIG9uIGxvYWRcbiAgICAgICAgdGhpcy5zaG93KClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiMVwiOiAvL29uIG1vdXNlIGV4aXRcbiAgICAgICAgdGhpcy5ib3VuZE9uTW91c2VMZWF2ZURvY3VtZW50ID0gZXZ0ID0+IHRoaXMub25Nb3VzZUxlYXZlRG9jdW1lbnQoZXZ0KVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5ib3VuZE9uTW91c2VMZWF2ZURvY3VtZW50KVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMuYXBwZW5kT3ZlcmxheSgpXG4gICAgdGhpcy5pbml0RXZlbnRzKClcbiAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4tc2xpZGUtaW4nKVxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5yZW1vdmVFdmVudHMoKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5vdmVybGF5KVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5tb2RhbClcbiAgfVxuXG4gIG9uTW91c2VMZWF2ZURvY3VtZW50KCkge1xuICAgIHRoaXMuc2hvdygpXG4gIH1cbn1cbiIsImltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiXG5cbndpbmRvdy5Nb2RhbCA9IE1vZGFsXG4iXSwic291cmNlUm9vdCI6IiJ9