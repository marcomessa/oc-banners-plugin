!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=8)}({10:function(e,t,o){"use strict";function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}o.r(t);var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.properties=t,this.prepareVars()}var t,o,i;return t=e,(o=[{key:"prepareVars",value:function(){this.hasBeenClosed=this.getCookie(this.properties.cookieName),this.overlay=document.createElement("div"),this.overlay.dataset.mmesModalOverlay="1",this.overlay.classList.add("fade-in"),this.modal=document.querySelector("[data-mmes-modal]"),this.closeButton=document.querySelector("[data-mmes-modal-close]")}},{key:"appendOverlay",value:function(){document.body.appendChild(this.overlay)}},{key:"initEvents",value:function(){var e=this;this.boundClose=function(t){return e.close(t)},this.overlay.addEventListener("click",this.boundClose),this.closeButton.addEventListener("click",this.boundClose)}},{key:"removeEvents",value:function(){var e=this;this.overlay.removeEventListener("click",(function(){return e.boundClose()})),this.closeButton.removeEventListener("click",this.boundClose),document.removeEventListener("mouseleave",this.boundOnMouseLeaveDocument)}},{key:"init",value:function(){var e=this;if(!this.hasBeenClosed)switch(this.properties.trigger){case"0":this.show();break;case"1":this.boundOnMouseLeaveDocument=function(t){return e.onMouseLeaveDocument(t)},document.addEventListener("mouseleave",this.boundOnMouseLeaveDocument)}}},{key:"show",value:function(){this.hasBeenClosed||(this.appendOverlay(),this.initEvents(),this.modal.classList.add("fade-in-slide-in"))}},{key:"close",value:function(){"1"===this.properties.useCookie&&this.setCookie(this.properties.cookieName,!0,this.properties.cookieDuration),this.removeEvents(),document.body.removeChild(this.overlay),document.body.removeChild(this.modal)}},{key:"onMouseLeaveDocument",value:function(){this.show()}},{key:"getCookie",value:function(e){var t=document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null}},{key:"setCookie",value:function(e,t,o){var n=new Date;n.setTime(n.getTime()+864e5*o),document.cookie=e+"="+t+";path=/;expires="+n.toGMTString()}},{key:"deleteCookie",value:function(e){setCookie(e,"",-1)}}])&&n(t.prototype,o),i&&n(t,i),e}();window.Modal=i},8:function(e,t,o){e.exports=o(10)}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9tbWVzL2Jhbm5lcnMvY29tcG9uZW50cy9zaG93YmFubmVyL2Fzc2V0cy9zcmMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGx1Z2lucy9tbWVzL2Jhbm5lcnMvY29tcG9uZW50cy9zaG93YmFubmVyL2Fzc2V0cy9zcmMvc2hvd21vZGFsLmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiTW9kYWwiLCJwcm9wZXJ0aWVzIiwidGhpcyIsInByZXBhcmVWYXJzIiwiaGFzQmVlbkNsb3NlZCIsImdldENvb2tpZSIsImNvb2tpZU5hbWUiLCJvdmVybGF5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZGF0YXNldCIsIm1tZXNNb2RhbE92ZXJsYXkiLCJjbGFzc0xpc3QiLCJhZGQiLCJtb2RhbCIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9zZUJ1dHRvbiIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImJvdW5kQ2xvc2UiLCJldnQiLCJjbG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYm91bmRPbk1vdXNlTGVhdmVEb2N1bWVudCIsInRyaWdnZXIiLCJzaG93Iiwib25Nb3VzZUxlYXZlRG9jdW1lbnQiLCJhcHBlbmRPdmVybGF5IiwiaW5pdEV2ZW50cyIsInVzZUNvb2tpZSIsInNldENvb2tpZSIsImNvb2tpZUR1cmF0aW9uIiwicmVtb3ZlRXZlbnRzIiwicmVtb3ZlQ2hpbGQiLCJ2IiwiY29va2llIiwibWF0Y2giLCJkYXlzIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwidG9HTVRTdHJpbmciLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTRixHQUcvREcsRUFBT0UsR0FBSSxFQUdKRixFQUFPRCxRQUtmRixFQUFvQlEsRUFBSUYsRUFHeEJOLEVBQW9CUyxFQUFJVixFQUd4QkMsRUFBb0JVLEVBQUksU0FBU1IsRUFBU1MsRUFBTUMsR0FDM0NaLEVBQW9CYSxFQUFFWCxFQUFTUyxJQUNsQ0csT0FBT0MsZUFBZWIsRUFBU1MsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWixFQUFvQmtCLEVBQUksU0FBU2hCLEdBQ1gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWViLEVBQVNpQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RQLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFbUIsT0FBTyxLQVF2RHJCLEVBQW9Cc0IsRUFBSSxTQUFTRCxFQUFPRSxHQUV2QyxHQURVLEVBQVBBLElBQVVGLEVBQVFyQixFQUFvQnFCLElBQy9CLEVBQVBFLEVBQVUsT0FBT0YsRUFDcEIsR0FBVyxFQUFQRSxHQUE4QixpQkFBVkYsR0FBc0JBLEdBQVNBLEVBQU1HLFdBQVksT0FBT0gsRUFDaEYsSUFBSUksRUFBS1gs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cGx1Z2lucy9tbWVzL2Jhbm5lcnMvY29tcG9uZW50cy9zaG93YmFubmVyL2Fzc2V0cy9idWlsZC9zaG93bW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllc1xuICAgIHRoaXMucHJlcGFyZVZhcnMoKVxuICB9XG5cbiAgcHJlcGFyZVZhcnMoKSB7XG4gICAgdGhpcy5oYXNCZWVuQ2xvc2VkID0gdGhpcy5nZXRDb29raWUodGhpcy5wcm9wZXJ0aWVzLmNvb2tpZU5hbWUpXG4gICAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aGlzLm92ZXJsYXkuZGF0YXNldC5tbWVzTW9kYWxPdmVybGF5ID0gJzEnXG4gICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4nKVxuICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tbWVzLW1vZGFsXScpXG4gICAgdGhpcy5jbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1tZXMtbW9kYWwtY2xvc2VdJylcbiAgfVxuXG4gIGFwcGVuZE92ZXJsYXkoKSB7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xuICB9XG5cbiAgaW5pdEV2ZW50cygpIHtcbiAgICB0aGlzLmJvdW5kQ2xvc2UgPSBldnQgPT4gdGhpcy5jbG9zZShldnQpXG4gICAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZENsb3NlKVxuICAgIHRoaXMuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmJvdW5kQ2xvc2UpXG4gIH1cblxuICByZW1vdmVFdmVudHMoKSB7XG4gICAgdGhpcy5vdmVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5ib3VuZENsb3NlKCkpXG4gICAgdGhpcy5jbG9zZUJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRDbG9zZSlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5ib3VuZE9uTW91c2VMZWF2ZURvY3VtZW50KVxuICB9XG5cbiAgaW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuaGFzQmVlbkNsb3NlZCkge1xuICAgICAgc3dpdGNoICh0aGlzLnByb3BlcnRpZXMudHJpZ2dlcikge1xuICAgICAgICBjYXNlIFwiMFwiOiAvLyBvbiBsb2FkXG4gICAgICAgICAgdGhpcy5zaG93KClcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIjFcIjogLy9vbiBtb3VzZSBleGl0XG4gICAgICAgICAgdGhpcy5ib3VuZE9uTW91c2VMZWF2ZURvY3VtZW50ID0gZXZ0ID0+IHRoaXMub25Nb3VzZUxlYXZlRG9jdW1lbnQoZXZ0KVxuICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmJvdW5kT25Nb3VzZUxlYXZlRG9jdW1lbnQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoIXRoaXMuaGFzQmVlbkNsb3NlZCkge1xuICAgICAgdGhpcy5hcHBlbmRPdmVybGF5KClcbiAgICAgIHRoaXMuaW5pdEV2ZW50cygpXG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ2ZhZGUtaW4tc2xpZGUtaW4nKVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGlmICh0aGlzLnByb3BlcnRpZXMudXNlQ29va2llID09PSAnMScpIHtcbiAgICAgIHRoaXMuc2V0Q29va2llKFxuICAgICAgICB0aGlzLnByb3BlcnRpZXMuY29va2llTmFtZSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzLmNvb2tpZUR1cmF0aW9uXG4gICAgICApXG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVFdmVudHMoKVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5vdmVybGF5KVxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5tb2RhbClcbiAgfVxuXG4gIG9uTW91c2VMZWF2ZURvY3VtZW50KCkge1xuICAgIHRoaXMuc2hvdygpXG4gIH1cblxuICAvKipcbiAgICogaHR0cHM6Ly9wbGFpbmpzLmNvbS9qYXZhc2NyaXB0L3V0aWxpdGllcy9zZXQtY29va2llLWdldC1jb29raWUtYW5kLWRlbGV0ZS1jb29raWUtNS9cbiAgICogQHBhcmFtIG5hbWVcbiAgICogQHJldHVybnMgeyp8bnVsbH1cbiAgICovXG4gIGdldENvb2tpZShuYW1lKSB7XG4gICAgbGV0IHYgPSBkb2N1bWVudC5jb29raWUubWF0Y2goJyhefDspID8nICsgbmFtZSArICc9KFteO10qKSg7fCQpJyk7XG4gICAgcmV0dXJuIHYgPyB2WzJdIDogbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBodHRwczovL3BsYWluanMuY29tL2phdmFzY3JpcHQvdXRpbGl0aWVzL3NldC1jb29raWUtZ2V0LWNvb2tpZS1hbmQtZGVsZXRlLWNvb2tpZS01L1xuICAgKiBAcGFyYW0gbmFtZVxuICAgKiBAcGFyYW0gdmFsdWVcbiAgICogQHBhcmFtIGRheXNcbiAgICovXG4gIHNldENvb2tpZShuYW1lLCB2YWx1ZSwgZGF5cykge1xuICAgIHZhciBkID0gbmV3IERhdGU7XG4gICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgMjQgKiA2MCAqIDYwICogMTAwMCAqIGRheXMpO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgXCI7cGF0aD0vO2V4cGlyZXM9XCIgKyBkLnRvR01UU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogaHR0cHM6Ly9wbGFpbmpzLmNvbS9qYXZhc2NyaXB0L3V0aWxpdGllcy9zZXQtY29va2llLWdldC1jb29raWUtYW5kLWRlbGV0ZS1jb29raWUtNS9cbiAgICogQHBhcmFtIG5hbWVcbiAgICovXG4gIGRlbGV0ZUNvb2tpZShuYW1lKSB7XG4gICAgc2V0Q29va2llKG5hbWUsICcnLCAtMSk7XG4gIH1cbn1cbiIsImltcG9ydCBNb2RhbCBmcm9tIFwiLi9Nb2RhbFwiXG5cbndpbmRvdy5Nb2RhbCA9IE1vZGFsXG4iXSwic291cmNlUm9vdCI6IiJ9