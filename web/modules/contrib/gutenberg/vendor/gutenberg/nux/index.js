this.wp=this.wp||{},this.wp.nux=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=317)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},19:function(e,t,n){"use strict";var r=n(31);function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return i}))},2:function(e,t){!function(){e.exports=this.lodash}()},22:function(e,t,n){"use strict";var r=n(37);var i=n(38);function u(e,t){return Object(r.a)(e)||function(e,t){var n=[],r=!0,i=!1,u=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,u=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw u}}return n}(e,t)||Object(i.a)()}n.d(t,"a",(function(){return u}))},3:function(e,t){!function(){e.exports=this.wp.components}()},31:function(e,t,n){"use strict";function r(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}n.d(t,"a",(function(){return r}))},317:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"triggerGuide",(function(){return f})),n.d(r,"dismissTip",(function(){return p})),n.d(r,"disableTips",(function(){return d})),n.d(r,"enableTips",(function(){return b}));var i={};n.r(i),n.d(i,"getAssociatedGuide",(function(){return O})),n.d(i,"isTipVisible",(function(){return g})),n.d(i,"areTipsEnabled",(function(){return j}));var u=n(4),o=n(9),c=n(7),a=n(19);var s=Object(u.combineReducers)({areTipsEnabled:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"DISABLE_TIPS":return!1;case"ENABLE_TIPS":return!0}return e},dismissedTips:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DISMISS_TIP":return Object(c.a)({},e,Object(o.a)({},t.id,!0));case"ENABLE_TIPS":return{}}return e}}),l=Object(u.combineReducers)({guides:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TRIGGER_GUIDE":return[].concat(Object(a.a)(e),[t.tipIds])}return e},preferences:s});function f(e){return{type:"TRIGGER_GUIDE",tipIds:e}}function p(e){return{type:"DISMISS_TIP",id:e}}function d(){return{type:"DISABLE_TIPS"}}function b(){return{type:"ENABLE_TIPS"}}var v=n(22),h=n(36),y=n(2),O=Object(h.a)((function(e,t){var n=!0,r=!1,i=void 0;try{for(var u,o=e.guides[Symbol.iterator]();!(n=(u=o.next()).done);n=!0){var c=u.value;if(Object(y.includes)(c,t)){var a=Object(y.difference)(c,Object(y.keys)(e.preferences.dismissedTips)),s=Object(v.a)(a,2),l=s[0],f=void 0===l?null:l,p=s[1];return{tipIds:c,currentTipId:f,nextTipId:void 0===p?null:p}}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return null}),(function(e){return[e.guides,e.preferences.dismissedTips]}));function g(e,t){if(!e.preferences.areTipsEnabled)return!1;if(Object(y.has)(e.preferences.dismissedTips,[t]))return!1;var n=O(e,t);return!n||n.currentTipId===t}function j(e){return e.preferences.areTipsEnabled}Object(u.registerStore)("core/nux",{reducer:l,actions:r,selectors:i,persist:["preferences"]});var m=n(0),T=n(8),x=n(3),w=n(1);function I(e){e.stopPropagation()}var S=Object(T.compose)(Object(u.withSelect)((function(e,t){var n=t.tipId,r=e("core/nux"),i=r.isTipVisible,u=(0,r.getAssociatedGuide)(n);return{isVisible:i(n),hasNextTip:!(!u||!u.nextTipId)}})),Object(u.withDispatch)((function(e,t){var n=t.tipId,r=e("core/nux"),i=r.dismissTip,u=r.disableTips;return{onDismiss:function(){i(n)},onDisable:function(){u()}}})))((function(e){var t=e.position,n=void 0===t?"middle right":t,r=e.children,i=e.isVisible,u=e.hasNextTip,o=e.onDismiss,c=e.onDisable,a=Object(m.useRef)(null),s=Object(m.useCallback)((function(e){return a.current=e.parentNode,function(e){return e.parentNode.getBoundingClientRect()}(e)}),[a]),l=Object(m.useCallback)((function(e){a.current&&(a.current.contains(e.relatedTarget)||c())}),[c,a]);return i?Object(m.createElement)(x.Popover,{className:"nux-dot-tip",position:n,noArrow:!0,focusOnMount:"container",getAnchorRect:s,role:"dialog","aria-label":Object(w.__)("Editor tips"),onClick:I,onFocusOutside:l},Object(m.createElement)("p",null,r),Object(m.createElement)("p",null,Object(m.createElement)(x.Button,{isLink:!0,onClick:o},u?Object(w.__)("See next tip"):Object(w.__)("Got it"))),Object(m.createElement)(x.IconButton,{className:"nux-dot-tip__disable",icon:"no-alt",label:Object(w.__)("Disable tips"),onClick:c})):null}));n.d(t,"DotTip",(function(){return S}))},36:function(e,t,n){"use strict";var r,i;function u(e){return[e]}function o(){var e={clear:function(){e.head=null}};return e}function c(e,t,n){var r;if(e.length!==t.length)return!1;for(r=n;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}r={},i="undefined"!=typeof WeakMap,t.a=function(e,t){var n,a;function s(){n=i?new WeakMap:o()}function l(){var n,r,i,u,o,s=arguments.length;for(u=new Array(s),i=0;i<s;i++)u[i]=arguments[i];for(o=t.apply(null,u),(n=a(o)).isUniqueByDependants||(n.lastDependants&&!c(o,n.lastDependants,0)&&n.clear(),n.lastDependants=o),r=n.head;r;){if(c(r.args,u,1))return r!==n.head&&(r.prev.next=r.next,r.next&&(r.next.prev=r.prev),r.next=n.head,r.prev=null,n.head.prev=r,n.head=r),r.val;r=r.next}return r={val:e.apply(null,u)},u[0]=null,r.args=u,n.head&&(n.head.prev=r,r.next=n.head),n.head=r,r.val}return t||(t=u),a=i?function(e){var t,i,u,c,a,s=n,l=!0;for(t=0;t<e.length;t++){if(i=e[t],!(a=i)||"object"!=typeof a){l=!1;break}s.has(i)?s=s.get(i):(u=new WeakMap,s.set(i,u),s=u)}return s.has(r)||((c=o()).isUniqueByDependants=l,s.set(r,c)),s.get(r)}:function(){return n},l.getDependants=t,l.clear=s,s(),l}},37:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},38:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}n.d(t,"a",(function(){return r}))},4:function(e,t){!function(){e.exports=this.wp.data}()},7:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(9);function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){Object(r.a)(e,t,n[t])}))}return e}},8:function(e,t){!function(){e.exports=this.wp.compose}()},9:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}});