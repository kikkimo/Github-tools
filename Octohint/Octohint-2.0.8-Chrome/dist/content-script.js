!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=190)}({0:function(t,e,n){"use strict";n.d(e,"b",function(){return c}),n.d(e,"a",function(){return B}),n.d(e,"c",function(){return E});var o=function(){},r={},i=[],a=[];function c(t,e){var n,c,u,s,l=a;for(s=arguments.length;s-- >2;)i.push(arguments[s]);for(e&&null!=e.children&&(i.length||i.push(e.children),delete e.children);i.length;)if((c=i.pop())&&void 0!==c.pop)for(s=c.length;s--;)i.push(c[s]);else"boolean"==typeof c&&(c=null),(u="function"!=typeof t)&&(null==c?c="":"number"==typeof c?c=String(c):"string"!=typeof c&&(u=!1)),u&&n?l[l.length-1]+=c:l===a?l=[c]:l.push(c),n=u;var f=new o;return f.nodeName=t,f.children=l,f.attributes=null==e?void 0:e,f.key=null==e?void 0:e.key,void 0!==r.vnode&&r.vnode(f),f}function u(t,e){for(var n in e)t[n]=e[n];return t}function s(t,e){null!=t&&("function"==typeof t?t(e):t.current=e)}var l="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var f=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,p=[];function d(t){!t._dirty&&(t._dirty=!0)&&1==p.push(t)&&(r.debounceRendering||l)(h)}function h(){for(var t;t=p.pop();)t._dirty&&W(t)}function v(t,e){return t.normalizedNodeName===e||t.nodeName.toLowerCase()===e.toLowerCase()}function b(t){var e=u({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var o in n)void 0===e[o]&&(e[o]=n[o]);return e}function g(t){var e=t.parentNode;e&&e.removeChild(t)}function y(t,e,n,o,r){if("className"===e&&(e="class"),"key"===e);else if("ref"===e)s(n,null),s(o,t);else if("class"!==e||r)if("style"===e){if(o&&"string"!=typeof o&&"string"!=typeof n||(t.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(t.style[i]="");for(var i in o)t.style[i]="number"==typeof o[i]&&!1===f.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===e)o&&(t.innerHTML=o.__html||"");else if("o"==e[0]&&"n"==e[1]){var a=e!==(e=e.replace(/Capture$/,""));e=e.toLowerCase().substring(2),o?n||t.addEventListener(e,m,a):t.removeEventListener(e,m,a),(t._listeners||(t._listeners={}))[e]=o}else if("list"!==e&&"type"!==e&&!r&&e in t){try{t[e]=null==o?"":o}catch(t){}null!=o&&!1!==o||"spellcheck"==e||t.removeAttribute(e)}else{var c=r&&e!==(e=e.replace(/^xlink:?/,""));null==o||!1===o?c?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.removeAttribute(e):"function"!=typeof o&&(c?t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),o):t.setAttribute(e,o))}else t.className=o||""}function m(t){return this._listeners[t.type](r.event&&r.event(t)||t)}var _=[],w=0,O=!1,C=!1;function x(){for(var t;t=_.shift();)r.afterMount&&r.afterMount(t),t.componentDidMount&&t.componentDidMount()}function S(t,e,n,o,r,i){w++||(O=null!=r&&void 0!==r.ownerSVGElement,C=null!=t&&!("__preactattr_"in t));var a=j(t,e,n,o,i);return r&&a.parentNode!==r&&r.appendChild(a),--w||(C=!1,i||x()),a}function j(t,e,n,o,r){var i=t,a=O;if(null!=e&&"boolean"!=typeof e||(e=""),"string"==typeof e||"number"==typeof e)return t&&void 0!==t.splitText&&t.parentNode&&(!t._component||r)?t.nodeValue!=e&&(t.nodeValue=e):(i=document.createTextNode(e),t&&(t.parentNode&&t.parentNode.replaceChild(i,t),k(t,!0))),i.__preactattr_=!0,i;var c,u,s=e.nodeName;if("function"==typeof s)return function(t,e,n,o){var r=t&&t._component,i=r,a=t,c=r&&t._componentConstructor===e.nodeName,u=c,s=b(e);for(;r&&!u&&(r=r._parentComponent);)u=r.constructor===e.nodeName;r&&u&&(!o||r._component)?(U(r,s,3,n,o),t=r.base):(i&&!c&&(L(i),t=a=null),r=T(e.nodeName,s,n),t&&!r.nextBase&&(r.nextBase=t,a=null),U(r,s,1,n,o),t=r.base,a&&t!==a&&(a._component=null,k(a,!1)));return t}(t,e,n,o);if(O="svg"===s||"foreignObject"!==s&&O,s=String(s),(!t||!v(t,s))&&(c=s,(u=O?document.createElementNS("http://www.w3.org/2000/svg",c):document.createElement(c)).normalizedNodeName=c,i=u,t)){for(;t.firstChild;)i.appendChild(t.firstChild);t.parentNode&&t.parentNode.replaceChild(i,t),k(t,!0)}var l=i.firstChild,f=i.__preactattr_,p=e.children;if(null==f){f=i.__preactattr_={};for(var d=i.attributes,h=d.length;h--;)f[d[h].name]=d[h].value}return!C&&p&&1===p.length&&"string"==typeof p[0]&&null!=l&&void 0!==l.splitText&&null==l.nextSibling?l.nodeValue!=p[0]&&(l.nodeValue=p[0]):(p&&p.length||null!=l)&&function(t,e,n,o,r){var i,a,c,u,s,l=t.childNodes,f=[],p={},d=0,h=0,b=l.length,y=0,m=e?e.length:0;if(0!==b)for(var _=0;_<b;_++){var w=l[_],O=w.__preactattr_,C=m&&O?w._component?w._component.__key:O.key:null;null!=C?(d++,p[C]=w):(O||(void 0!==w.splitText?!r||w.nodeValue.trim():r))&&(f[y++]=w)}if(0!==m)for(var _=0;_<m;_++){u=e[_],s=null;var C=u.key;if(null!=C)d&&void 0!==p[C]&&(s=p[C],p[C]=void 0,d--);else if(h<y)for(i=h;i<y;i++)if(void 0!==f[i]&&(x=a=f[i],M=r,"string"==typeof(S=u)||"number"==typeof S?void 0!==x.splitText:"string"==typeof S.nodeName?!x._componentConstructor&&v(x,S.nodeName):M||x._componentConstructor===S.nodeName)){s=a,f[i]=void 0,i===y-1&&y--,i===h&&h++;break}s=j(s,u,n,o),c=l[_],s&&s!==t&&s!==c&&(null==c?t.appendChild(s):s===c.nextSibling?g(c):t.insertBefore(s,c))}var x,S,M;if(d)for(var _ in p)void 0!==p[_]&&k(p[_],!1);for(;h<=y;)void 0!==(s=f[y--])&&k(s,!1)}(i,p,n,o,C||null!=f.dangerouslySetInnerHTML),function(t,e,n){var o;for(o in n)e&&null!=e[o]||null==n[o]||y(t,o,n[o],n[o]=void 0,O);for(o in e)"children"===o||"innerHTML"===o||o in n&&e[o]===("value"===o||"checked"===o?t[o]:n[o])||y(t,o,n[o],n[o]=e[o],O)}(i,e.attributes,f),O=a,i}function k(t,e){var n=t._component;n?L(n):(null!=t.__preactattr_&&s(t.__preactattr_.ref,null),!1!==e&&null!=t.__preactattr_||g(t),M(t))}function M(t){for(t=t.lastChild;t;){var e=t.previousSibling;k(t,!0),t=e}}var N=[];function T(t,e,n){var o,r=N.length;for(t.prototype&&t.prototype.render?(o=new t(e,n),B.call(o,e,n)):((o=new B(e,n)).constructor=t,o.render=P);r--;)if(N[r].constructor===t)return o.nextBase=N[r].nextBase,N.splice(r,1),o;return o}function P(t,e,n){return this.constructor(t,n)}function U(t,e,n,o,i){t._disable||(t._disable=!0,t.__ref=e.ref,t.__key=e.key,delete e.ref,delete e.key,void 0===t.constructor.getDerivedStateFromProps&&(!t.base||i?t.componentWillMount&&t.componentWillMount():t.componentWillReceiveProps&&t.componentWillReceiveProps(e,o)),o&&o!==t.context&&(t.prevContext||(t.prevContext=t.context),t.context=o),t.prevProps||(t.prevProps=t.props),t.props=e,t._disable=!1,0!==n&&(1!==n&&!1===r.syncComponentUpdates&&t.base?d(t):W(t,1,i)),s(t.__ref,t))}function W(t,e,n,o){if(!t._disable){var i,a,c,s=t.props,l=t.state,f=t.context,p=t.prevProps||s,d=t.prevState||l,h=t.prevContext||f,v=t.base,g=t.nextBase,y=v||g,m=t._component,O=!1,C=h;if(t.constructor.getDerivedStateFromProps&&(l=u(u({},l),t.constructor.getDerivedStateFromProps(s,l)),t.state=l),v&&(t.props=p,t.state=d,t.context=h,2!==e&&t.shouldComponentUpdate&&!1===t.shouldComponentUpdate(s,l,f)?O=!0:t.componentWillUpdate&&t.componentWillUpdate(s,l,f),t.props=s,t.state=l,t.context=f),t.prevProps=t.prevState=t.prevContext=t.nextBase=null,t._dirty=!1,!O){i=t.render(s,l,f),t.getChildContext&&(f=u(u({},f),t.getChildContext())),v&&t.getSnapshotBeforeUpdate&&(C=t.getSnapshotBeforeUpdate(p,d));var j,M,N=i&&i.nodeName;if("function"==typeof N){var P=b(i);(a=m)&&a.constructor===N&&P.key==a.__key?U(a,P,1,f,!1):(j=a,t._component=a=T(N,P,f),a.nextBase=a.nextBase||g,a._parentComponent=t,U(a,P,0,f,!1),W(a,1,n,!0)),M=a.base}else c=y,(j=m)&&(c=t._component=null),(y||1===e)&&(c&&(c._component=null),M=S(c,i,f,n||!v,y&&y.parentNode,!0));if(y&&M!==y&&a!==m){var B=y.parentNode;B&&M!==B&&(B.replaceChild(M,y),j||(y._component=null,k(y,!1)))}if(j&&L(j),t.base=M,M&&!o){for(var E=t,D=t;D=D._parentComponent;)(E=D).base=M;M._component=E,M._componentConstructor=E.constructor}}for(!v||n?_.push(t):O||(t.componentDidUpdate&&t.componentDidUpdate(p,d,C),r.afterUpdate&&r.afterUpdate(t));t._renderCallbacks.length;)t._renderCallbacks.pop().call(t);w||o||x()}}function L(t){r.beforeUnmount&&r.beforeUnmount(t);var e=t.base;t._disable=!0,t.componentWillUnmount&&t.componentWillUnmount(),t.base=null;var n=t._component;n?L(n):e&&(null!=e.__preactattr_&&s(e.__preactattr_.ref,null),t.nextBase=e,g(e),N.push(t),M(e)),s(t.__ref,null)}function B(t,e){this._dirty=!0,this.context=e,this.props=t,this.state=this.state||{},this._renderCallbacks=[]}function E(t,e,n){return S(n,t,{},!1,e,!1)}u(B.prototype,{setState:function(t,e){this.prevState||(this.prevState=this.state),this.state=u(u({},this.state),"function"==typeof t?t(this.state,this.props):t),e&&this._renderCallbacks.push(e),d(this)},forceUpdate:function(t){t&&this._renderCallbacks.push(t),W(this,2)},render:function(){}})},12:function(t,e,n){"use strict";e.a=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},13:function(t,e,n){"use strict";var o;n.d(e,"a",function(){return o}),function(t){t.service="service",t.occurrence="occurrence",t.quickInfo="quickInfo"}(o||(o={}))},190:function(t,e,n){"use strict";n.r(e);var o=n(12),r=n(8),i=function(){return r.a.Date.now()},a=n(28),c=n(27),u="[object Symbol]";var s=function(t){return"symbol"==typeof t||Object(c.a)(t)&&Object(a.a)(t)==u},l=NaN,f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,h=/^0o[0-7]+$/i,v=parseInt;var b=function(t){if("number"==typeof t)return t;if(s(t))return l;if(Object(o.a)(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=Object(o.a)(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var n=d.test(t);return n||h.test(t)?v(t.slice(2),n?2:8):p.test(t)?l:+t},g="Expected a function",y=Math.max,m=Math.min;var _,w=function(t,e,n){var r,a,c,u,s,l,f=0,p=!1,d=!1,h=!0;if("function"!=typeof t)throw new TypeError(g);function v(e){var n=r,o=a;return r=a=void 0,f=e,u=t.apply(o,n)}function _(t){var n=t-l;return void 0===l||n>=e||n<0||d&&t-f>=c}function w(){var t=i();if(_(t))return O(t);s=setTimeout(w,function(t){var n=e-(t-l);return d?m(n,c-(t-f)):n}(t))}function O(t){return s=void 0,h&&r?v(t):(r=a=void 0,u)}function C(){var t=i(),n=_(t);if(r=arguments,a=this,l=t,n){if(void 0===s)return function(t){return f=t,s=setTimeout(w,e),p?v(t):u}(l);if(d)return s=setTimeout(w,e),v(l)}return void 0===s&&(s=setTimeout(w,e)),u}return e=b(e)||0,Object(o.a)(n)&&(p=!!n.leading,c=(d="maxWait"in n)?y(b(n.maxWait)||0,e):c,h="trailing"in n?!!n.trailing:h),C.cancel=function(){void 0!==s&&clearTimeout(s),f=0,r=l=a=s=void 0},C.flush=function(){return void 0===s?u:O(i())},C},O=n(0),C="#fffbdd",x="rgba(173,214,255,.3)",S="rgba(14,99,156,.4)",j="rgba(173,214,255,.7)",k=function(t){return Object(O.b)("div",{style:{position:"absolute",background:t.isWriteAccess?S:j,width:t.width,height:t.height,top:t.top,left:t.left}})},M=function(t){return Object(O.b)("div",{style:{display:t.visible?"block":"none",position:"absolute",background:C,left:0,width:t.width,height:t.height,top:t.top}})},N=function(t){return Object(O.b)("div",{style:{display:t.visible?"block":"none",position:"absolute",background:x,top:t.top,left:t.left,width:t.width,height:t.height}})},T=(_=function(t,e){return(_=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}_(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),P=function(){return(P=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},U=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={occurrences:[],definition:{visible:!1,height:0,width:0,top:0},quickInfo:{visible:!1,top:0,left:0,width:0,height:0}},e}return T(e,t),e.prototype.render=function(){var t=this.state;return Object(O.b)("div",null,Object(O.b)(M,P({},t.definition)),t.occurrences.map(function(t){return Object(O.b)(k,P({},t))}),Object(O.b)(N,P({},t.quickInfo)))},e}(O.a),W=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),L=function(){return(L=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function B(t){switch(t){case"keyword":return"#00f";case"punctuation":return"#000";default:return"#001080"}}var E=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={visible:!1,info:[],left:0,fontFamily:"monospace",fontSize:12,line:0,height:0},e}return W(e,t),e.prototype.render=function(){var t=this.state,e={};return t.line<2?e.top=(t.line+1)*t.height:e.bottom=0-t.line*t.height,Object(O.b)("div",{style:L({display:t.visible?"block":"none",whiteSpace:"pre-wrap",position:"absolute",background:"#efeff2",border:"1px solid #c8c8c8",fontSize:t.fontSize,padding:"2px 4px",fontFamily:t.fontFamily,left:t.left,maxWidth:500,maxHeight:300,overflow:"auto",wordBreak:"break-all"},e)},Object(O.b)("div",null,Array.isArray(t.info)?t.info.map(function(t){return"\n"===t.text?Object(O.b)("br",null):Object(O.b)("span",{style:{color:B(t.kind)}},t.text)}):t.info.replace(/\\/g,"")))},e}(O.a);var D=n(13),F=function(){function t(t,e){var n,o=this;this.DEBOUNCE_TIMEOUT=300,this.isMacOS=/Mac OS X/i.test(navigator.userAgent),this.setState=function(){},this.handleClick=function(t){var e={occurrences:[],definition:{visible:!1}},n=o.getPosition(t);n.x<0||n.y<0||o.sendMessage({file:o.fileName,type:D.a.occurrence,position:n,meta:o.isMacOS?t.metaKey:t.ctrlKey,codeUrl:o.codeUrl},function(t){if(t.info&&(Object.assign(e,{definition:{visible:!0,height:o.line.height,width:o.line.width-20,top:t.info.line*o.line.height}}),window.scrollTo(0,o.offsetTop+o.padding.top+t.info.line*o.line.height-80)),t.occurrences){var n=t.occurrences.map(function(t){return{height:o.line.height,width:t.width*o.fontWidth,top:t.range.line*o.line.height,left:t.range.character*o.fontWidth,isWriteAccess:t.isWriteAccess}});Object.assign(e,{occurrences:n})}o.setState(e)})},this.handleKeyDown=function(t){(o.isMacOS?"Meta"===t.key:"Control"===t.key)&&(o.$container.style.cursor="pointer",setTimeout(function(){return o.$container.style.cursor=null},1e4))},this.handleKeyUp=function(t){(o.isMacOS?"Meta"===t.key:"Control"===t.key)&&(o.$container.style.cursor=null)},this.handleMouseOut=function(t){o.setState({quickInfo:{visible:!1}})},this.handleMouseMove=w(function(t){var e=o.getPosition(t);if(!(e.x<0||e.y<0)){var n={file:o.fileName,codeUrl:o.codeUrl,type:D.a.quickInfo,position:e};o.sendMessage(n,function(t){var e=t.data;if(e){var n=e.range,r=n.line*o.line.height;o.setState({quickInfo:{visible:!0,info:e.info,top:r,line:n.line,left:n.character*o.fontWidth,height:o.line.height,fontFamily:o.fontFamily,fontWidth:o.fontWidth,fontSize:o.fontSize,width:e.width*o.fontWidth}})}else o.setState({quickInfo:{visible:!1}})})}},this.DEBOUNCE_TIMEOUT),this.sendMessage=t,this.renderParams=e,this.fileName=e.getFileName(),this.$container=e.getContainer();var r=e.getTabSizeDom?e.getTabSizeDom():this.$container,i=parseInt(getComputedStyle(r).tabSize,10)||8;this.offsetTop=this.getOffsetTop(this.$container),this.codeUrl=e.getCodeUrl();var a=e.getFontDOM();if(a){this.line=e.getLineWidthAndHeight();var c=document.createElement("span");c.innerText="0",a.appendChild(c),this.fontWidth=c.getBoundingClientRect().width,n=getComputedStyle(c),this.fontFamily=n.fontFamily,this.fontSize=n.fontSize,c.remove(),this.padding=e.getPadding(this.fontWidth),this.render(this.$container),this.addEventListener(this.$container),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp),this.sendMessage({file:this.fileName,type:D.a.service,codeUrl:this.codeUrl,tabSize:i},function(){})}}return t.prototype.addEventListener=function(t){t.addEventListener("click",this.handleClick),t.addEventListener("mousemove",this.handleMouseMove),t.addEventListener("mouseout",this.handleMouseOut)},t.prototype.getOffsetTop=function(t){if(!t)return 0;var e=t.offsetParent;return t.offsetTop+this.getOffsetTop(e)},t.prototype.getPosition=function(t){var e=this.$background.getBoundingClientRect();return{x:Math.floor((t.clientX-e.left)/this.fontWidth),y:Math.floor((t.clientY-e.top)/this.line.height)}},t.prototype.px2num=function(t){return t?parseInt(t.replace("px",""),10):0},t.prototype.render=function(t){this.renderParams.extraBeforeRender&&this.renderParams.extraBeforeRender();var e=t.getBoundingClientRect(),n=e.width,o=e.height,r=n-this.padding.left-10+"px",i=document.createElement("div");i.style.position="relative",i.style.top=this.padding.top+"px",i.style.left=this.padding.left+"px",i.style.width=r,this.$background=i;var a=document.createElement("div");a.style.position="relative";var c=getComputedStyle(t),u=this.px2num(c.paddingTop)+this.px2num(c.paddingBottom)+this.px2num(c.borderTopWidth)+this.px2num(c.borderBottomWidth);a.style.width=r,a.style.bottom=o-u-this.padding.top+"px",a.style.left=this.padding.left+"px",t.insertBefore(i,t.firstChild),t.appendChild(a),this.setState=function(t,e){var n,o;return Object(O.c)(Object(O.b)(U,{ref:function(t){return n=t}}),t),Object(O.c)(Object(O.b)(E,{ref:function(t){return o=t}}),e),function(t){n.setState(t),o.setState(t.quickInfo||{})}}(i,a)},t}(),A=function(t){return document.querySelector(t)},$=function(t){return document.querySelectorAll(t)};function q(){return location.protocol+"//"+location.host+location.pathname}function z(t){return void 0===t&&(t=location),"/"+t.host+t.pathname}var I={getContainer:function(){return A(".blob-wrapper")},getFontDOM:function(){return A("#LC1")},getLineWidthAndHeight:function(){return A("#LC1").getBoundingClientRect()},getPadding:function(){return{left:60,top:0}},getCodeUrl:function(){return q().replace("github.com","raw.githubusercontent.com").replace("/blob/","/")},getFileName:z,getTabSizeDom:function(){return A(".blob-wrapper table")}};var R={getContainer:function(){return A(".blob-content .code")},getFontDOM:function(){return A("#LC1")},getLineWidthAndHeight:function(){return A("#LC1").getBoundingClientRect()},getPadding:function(){return{left:10,top:0}},getCodeUrl:function(){return q().replace("/blob/","/raw/")},getFileName:z,extraBeforeRender:function(){var t=A(".blob-content .code code");t.style.position="relative",t.style.background="transparent"}},H=function(){function t(){this.sendMessage=this.getSendMessage();var t=this.getSendMessage();/gist\.github\.com/.test(location.href)?[].forEach.call($(".js-gist-file-update-container"),function(e){new F(t,function(t){return{getContainer:function(){return t.querySelector(".blob-wrapper")},getFontDOM:function(){return t.querySelector(".blob-wrapper .blob-code")},getLineWidthAndHeight:function(){return{width:918,height:20}},getPadding:function(){return{left:60,top:0}},getCodeUrl:function(){return t.querySelector(".file-actions a").href},getFileName:function(){var e=t.querySelector(".file-info").innerText.trim();return z().replace(/\/$/,"")+e},getTabSizeDom:function(){return t.querySelector(".blob-wrapper table")}}}(e))}):(this.addMutationObserver(A("#js-repo-pjax-container"),I),I.getContainer()?new F(t,I):(this.addMutationObserver(A(".blob-viewer"),R),R.getContainer()&&new F(t,R)))}return t.prototype.addMutationObserver=function(t,e,n){var o=this;void 0===n&&(n=!0),t&&n&&new MutationObserver(function(t){t.forEach(function(t){if("childList"===t.type&&t.addedNodes.length){var n=e.getContainer();n&&o.prevContainer!==n&&(new F(o.getSendMessage(),e),o.prevContainer=n)}})}).observe(t,{attributes:!0,childList:!0,characterData:!0})},t}(),K=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return K(e,t),e.prototype.getSendMessage=function(){return chrome.runtime.sendMessage},e}(H))},26:function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(7))},27:function(t,e,n){"use strict";e.a=function(t){return null!=t&&"object"==typeof t}},28:function(t,e,n){"use strict";var o=n(8).a.Symbol,r=Object.prototype,i=r.hasOwnProperty,a=r.toString,c=o?o.toStringTag:void 0;var u=function(t){var e=i.call(t,c),n=t[c];try{t[c]=void 0;var o=!0}catch(t){}var r=a.call(t);return o&&(e?t[c]=n:delete t[c]),r},s=Object.prototype.toString;var l=function(t){return s.call(t)},f="[object Null]",p="[object Undefined]",d=o?o.toStringTag:void 0;e.a=function(t){return null==t?void 0===t?p:f:d&&d in Object(t)?u(t):l(t)}},7:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},8:function(t,e,n){"use strict";var o=n(26),r="object"==typeof self&&self&&self.Object===Object&&self,i=o.a||r||Function("return this")();e.a=i}});