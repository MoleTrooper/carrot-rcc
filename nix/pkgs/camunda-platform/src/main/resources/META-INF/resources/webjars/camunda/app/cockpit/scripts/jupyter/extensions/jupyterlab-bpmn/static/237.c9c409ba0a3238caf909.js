(self.webpackChunkjupyterlab_bpmn=self.webpackChunkjupyterlab_bpmn||[]).push([[237],{5149:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(43),i=n(8670);function o(){this._uid=12}o.prototype.createRoot=function(t){return this.create("root",t)},o.prototype.createLabel=function(t){return this.create("label",t)},o.prototype.createShape=function(t){return this.create("shape",t)},o.prototype.createConnection=function(t){return this.create("connection",t)},o.prototype.create=function(t,e){return(e=(0,i.f0)({},e||{})).id||(e.id=t+"_"+this._uid++),(0,r.Ue)(t,e)}},6858:(t,e,n)=>{"use strict";function r(t,e){var n=this;e=e||1e3,t.on(["render.shape","render.connection"],e,(function(t,e){var r=t.type,i=e.element,o=e.gfx;if(n.canRender(i))return"render.shape"===r?n.drawShape(o,i):n.drawConnection(o,i)})),t.on(["render.getShapePath","render.getConnectionPath"],e,(function(t,e){if(n.canRender(e))return"render.getShapePath"===t.type?n.getShapePath(e):n.getConnectionPath(e)}))}n.d(e,{Z:()=>r}),r.prototype.canRender=function(){},r.prototype.drawShape=function(){},r.prototype.drawConnection=function(){},r.prototype.getShapePath=function(){},r.prototype.getConnectionPath=function(){}},935:(t,e,n)=>{"use strict";n.d(e,{aR:()=>c,ex:()=>u,JA:()=>s,wS:()=>l,T8:()=>f,Hz:()=>h});var r=n(8670),i=n(1349),o=n(2720),a=n.n(o);function c(t){return{x:Math.round(t.x),y:Math.round(t.y),width:Math.round(t.width),height:Math.round(t.height)}}function u(t){return{x:Math.round(t.x),y:Math.round(t.y)}}function s(t){return{top:t.y,right:t.x+(t.width||0),bottom:t.y+(t.height||0),left:t.x}}function l(t){return u({x:t.x+(t.width||0)/2,y:t.y+(t.height||0)/2})}function f(t,e,n){n=n||0,(0,r.Kn)(n)||(n={x:n,y:n});var i=s(t),o=s(e),a=i.bottom+n.y<=o.top,c=i.left-n.x>=o.right,u=i.top-n.y>=o.bottom,l=a?"top":u?"bottom":null,f=i.right+n.x<=o.left?"left":c?"right":null;return f&&l?l+"-"+f:f||l||"intersect"}function h(t,e,n){var o,c,s=(o=t,c=e,a()(o,c));return 1===s.length||2===s.length&&(0,i.tW)(s[0],s[1])<1?u(s[0]):s.length>1?u((s=(0,r.MR)(s,(function(t){var e=Math.floor(100*t.t2)||1;return e=((e=100-e)<10?"0":"")+e,t.segment2+"#"+e})))[n?0:s.length-1]):null}},43:(t,e,n)=>{"use strict";n.d(e,{XY:()=>p,__:()=>v,Ue:()=>b});var r=n(8670),i=n(5717),o=n.n(i),a=n(1235),c=n.n(a),u=new(c())({name:"children",enumerable:!0,collection:!0},{name:"parent"}),s=new(c())({name:"labels",enumerable:!0,collection:!0},{name:"labelTarget"}),l=new(c())({name:"attachers",collection:!0},{name:"host"}),f=new(c())({name:"outgoing",collection:!0},{name:"source"}),h=new(c())({name:"incoming",collection:!0},{name:"target"});function p(){Object.defineProperty(this,"businessObject",{writable:!0}),Object.defineProperty(this,"label",{get:function(){return this.labels[0]},set:function(t){var e=this.label,n=this.labels;!t&&e?n.remove(e):n.add(t,0)}}),u.bind(this,"parent"),s.bind(this,"labels"),f.bind(this,"outgoing"),h.bind(this,"incoming")}function d(){p.call(this),u.bind(this,"children"),l.bind(this,"host"),l.bind(this,"attachers")}function y(){d.call(this)}function v(){d.call(this),s.bind(this,"labelTarget")}function x(){p.call(this),f.bind(this,"source"),h.bind(this,"target")}o()(d,p),o()(y,d),o()(v,d),o()(x,p);var g={connection:x,shape:d,label:v,root:y};function b(t,e){var n=g[t];if(!n)throw new Error("unknown type: <"+t+">");return(0,r.f0)(new n,e)}},943:(t,e,n)=>{"use strict";function r(t,e){if(!t||!e)return-1;var n=t.indexOf(e);return-1!==n&&t.splice(n,1),n}function i(t,e,n){if(t&&e){"number"!=typeof n&&(n=-1);var r=t.indexOf(e);if(-1!==r){if(r===n)return;if(-1===n)return;t.splice(r,1)}-1!==n?t.splice(n,0,e):t.push(e)}}function o(t,e){return t&&e?t.indexOf(e):-1}n.d(e,{Od:()=>r,IH:()=>i,cq:()=>o})},1490:(t,e,n)=>{"use strict";n.d(e,{cd:()=>i,om:()=>c,PB:()=>u,vA:()=>s,jY:()=>l,oL:()=>f,He:()=>h});var r=n(8670);function i(t){return(0,r.hX)(t,(function(e){return!(0,r.sE)(t,(function(t){return t!==e&&o(e,t)}))}))}function o(t,e){if(e){if(t===e)return e;if(t.parent)return o(t.parent,e)}}function a(t,e,n){var r=!n||-1===t.indexOf(e);return r&&t.push(e),r}function c(t,e,n){n=n||0,(0,r.kJ)(t)||(t=[t]),(0,r.Ed)(t,(function(t,i){var o=e(t,i,n);(0,r.kJ)(o)&&o.length&&c(o,e,n+1)}))}function u(t,e){return function(t,e,n){var r=[],i=[];return c(t,(function(t,o,c){a(r,t,e);var u=t.children;if((-1===n||c<n)&&u&&a(i,u,e))return u})),r}(t,!e,-1)}function s(t,e,n){(0,r.o8)(e)&&(e=!0),(0,r.Kn)(e)&&(n=e,e=!0);var i=p((n=n||{}).allShapes),o=p(n.allConnections),a=p(n.enclosedElements),u=p(n.enclosedConnections),s=p(n.topLevel,e&&(0,r.vM)(t,(function(t){return t.id})));function l(t){s[t.source.id]&&s[t.target.id]&&(s[t.id]=[t]),i[t.source.id]&&i[t.target.id]&&(u[t.id]=a[t.id]=t),o[t.id]=t}return c(t,(function(t){if(a[t.id]=t,!t.waypoints)return i[t.id]=t,(0,r.Ed)(t.incoming,l),(0,r.Ed)(t.outgoing,l),t.children;u[t.id]=o[t.id]=t})),{allShapes:i,allConnections:o,topLevel:s,enclosedConnections:u,enclosedElements:a}}function l(t,e){var n,i,o,a;return e=!!e,(0,r.kJ)(t)||(t=[t]),(0,r.Ed)(t,(function(t){var r=t;t.waypoints&&!e&&(r=l(t.waypoints,!0));var c=r.x,u=r.y,s=r.height||0,f=r.width||0;(c<n||void 0===n)&&(n=c),(u<i||void 0===i)&&(i=u),(c+f>o||void 0===o)&&(o=c+f),(u+s>a||void 0===a)&&(a=u+s)})),{x:n,y:i,height:a-i,width:o-n}}function f(t){return"waypoints"in t?"connection":"x"in t?"shape":"root"}function h(t){return!(!t||!t.isFrame)}function p(t,e){return(0,r.f0)({},t||{},e||{})}},1349:(t,e,n)=>{"use strict";n.d(e,{tW:()=>i,ZS:()=>o,Or:()=>a,qr:()=>c});var r=n(8670);function i(t,e){return t&&e?Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):-1}function o(t,e,n,r){if(void 0===r&&(r=5),!t||!e||!n)return!1;var o=(e.x-t.x)*(n.y-t.y)-(e.y-t.y)*(n.x-t.x),a=i(t,e);return Math.abs(o/a)<=r}function a(t,e){var n;return function(t,e){var n,i=(n=(0,r.kJ)(t)?t:[t,void 0]).slice().shift();return(0,r.yW)(n,(function(t){return Math.abs(i.y-t.y)<=2}))}(n=(0,r.kJ)(t)?t:[t,e])?"h":!!function(t,e){var n,i=(n=(0,r.kJ)(t)?t:[t,void 0]).slice().shift();return(0,r.yW)(n,(function(t){return Math.abs(i.x-t.x)<=2}))}(n)&&"v"}function c(t,e,n){return n=n||0,t.x>e.x-n&&t.y>e.y-n&&t.x<e.x+e.width+n&&t.y<e.y+e.height+n}},2023:(t,e,n)=>{"use strict";function r(t){return t.childNodes[0]}function i(t){return t.parentNode.childNodes[1]}n.d(e,{s:()=>r,G:()=>i})},8230:(t,e,n)=>{"use strict";n.d(e,{KO:()=>i,W5:()=>a,cq:()=>c});var r=n(7487);function i(t){return t.join(",").replace(/,?([A-z]),?/g,"$1")}function o(t){for(var e,n="",r=0;e=t[r];r++)n+=e.x+","+e.y+" ";return n}function a(t,e){var n=(0,r.Ue)("polyline");return(0,r.Lj)(n,{points:o(t)}),e&&(0,r.Lj)(n,e),n}function c(t,e){return(0,r.Lj)(t,{points:o(e)}),t}},2168:(t,e,n)=>{"use strict";n.d(e,{vs:()=>i,Iu:()=>o,U1:()=>a});var r=n(7487);function i(t,e,n,i,o){var a=(0,r.pH)();a.setTranslate(e,n);var c=(0,r.pH)();c.setRotate(i||0,0,0);var u=(0,r.pH)();u.setScale(o||1,o||1),(0,r.vs)(t,[a,c,u])}function o(t,e,n){var i=(0,r.pH)();i.setTranslate(e,n),(0,r.vs)(t,i)}function a(t,e){var n=(0,r.pH)();n.setRotate(e,0,0),(0,r.vs)(t,n)}},5717:t=>{"function"==typeof Object.create?t.exports=function(t,e){e&&(t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:t.exports=function(t,e){if(e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}}},9674:(t,e,n)=>{"use strict";function r(t,e,n){return 2==arguments.length?t.getAttribute(e):null===n?t.removeAttribute(e):(t.setAttribute(e,n),t)}n.d(e,{Lj:()=>r,Sh:()=>u,ZH:()=>l,oq:()=>d,cl:()=>w,H6:()=>C,B:()=>b,wB:()=>p,IO:()=>E,Kt:()=>S,Od:()=>j});var i=[].indexOf,o=function(t,e){if(i)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1},a=/\s+/,c=Object.prototype.toString;function u(t){return new s(t)}function s(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}function l(t){for(var e;t.childNodes.length;)e=t.childNodes[0],t.removeChild(e);return t}s.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array();return~o(e,t)||e.push(t),this.el.className=e.join(" "),this},s.prototype.remove=function(t){if("[object RegExp]"==c.call(t))return this.removeMatching(t);if(this.list)return this.list.remove(t),this;var e=this.array(),n=o(e,t);return~n&&e.splice(n,1),this.el.className=e.join(" "),this},s.prototype.removeMatching=function(t){for(var e=this.array(),n=0;n<e.length;n++)t.test(e[n])&&this.remove(e[n]);return this},s.prototype.toggle=function(t,e){return this.list?(void 0!==e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t),this):(void 0!==e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},s.prototype.array=function(){var t=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(a);return""===t[0]&&t.shift(),t},s.prototype.has=s.prototype.contains=function(t){return this.list?this.list.contains(t):!!~o(this.array(),t)};var f="undefined"!=typeof Element?Element.prototype:{},h=f.matches||f.matchesSelector||f.webkitMatchesSelector||f.mozMatchesSelector||f.msMatchesSelector||f.oMatchesSelector,p=function(t,e){if(!t||1!==t.nodeType)return!1;if(h)return h.call(t,e);for(var n=t.parentNode.querySelectorAll(e),r=0;r<n.length;r++)if(n[r]==t)return!0;return!1};function d(t,e,n){for(var r=n?t:t.parentNode;r&&r.nodeType!==document.DOCUMENT_NODE&&r.nodeType!==document.DOCUMENT_FRAGMENT_NODE;){if(p(r,e))return r;r=r.parentNode}return p(r,e)?r:null}var y,v=window.addEventListener?"addEventListener":"attachEvent",x=window.removeEventListener?"removeEventListener":"detachEvent",g="addEventListener"!==v?"on":"",b={bind:function(t,e,n,r){return t[v](g+e,n,r||!1),n},unbind:function(t,e,n,r){return t[x](g+e,n,r||!1),n}},m=["focus","blur"],w={bind:function(t,e,n,r,i){return-1!==m.indexOf(n)&&(i=!0),b.bind(t,n,(function(n){var i=n.target||n.srcElement;n.delegateTarget=d(i,e,!0),n.delegateTarget&&r.call(t,n)}),i)},unbind:function(t,e,n,r){return-1!==m.indexOf(e)&&(r=!0),b.unbind(t,e,n,r)}},C=function(t,e){if("string"!=typeof t)throw new TypeError("String expected");e||(e=document);var n=/<([\w:]+)/.exec(t);if(!n)return e.createTextNode(t);t=t.replace(/^\s+|\s+$/g,"");var r=n[1];if("body"==r)return(i=e.createElement("html")).innerHTML=t,i.removeChild(i.lastChild);var i,o=O[r]||O._default,a=o[0],c=o[1],u=o[2];for((i=e.createElement("div")).innerHTML=c+t+u;a--;)i=i.lastChild;if(i.firstChild==i.lastChild)return i.removeChild(i.firstChild);for(var s=e.createDocumentFragment();i.firstChild;)s.appendChild(i.removeChild(i.firstChild));return s},M=!1;"undefined"!=typeof document&&((y=document.createElement("div")).innerHTML='  <link/><table></table><a href="/a">a</a><input type="checkbox"/>',M=!y.getElementsByTagName("link").length,y=void 0);var O={legend:[1,"<fieldset>","</fieldset>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],_default:M?[1,"X<div>","</div>"]:[0,"",""]};function E(t,e){return(e=e||document).querySelector(t)}function S(t,e){return(e=e||document).querySelectorAll(t)}function j(t){t.parentNode&&t.parentNode.removeChild(t)}O.td=O.th=[3,"<table><tbody><tr>","</tr></tbody></table>"],O.option=O.optgroup=[1,'<select multiple="multiple">',"</select>"],O.thead=O.tbody=O.colgroup=O.caption=O.tfoot=[1,"<table>","</table>"],O.polyline=O.ellipse=O.polygon=O.circle=O.text=O.line=O.path=O.rect=O.g=[1,'<svg xmlns="http://www.w3.org/2000/svg" version="1.1">',"</svg>"]},1235:(t,e,n)=>{t.exports=n(8302),t.exports.Collection=n(5048)},5048:t=>{"use strict";t.exports.extend=function(t,e,n,r){var i=n.inverse;return Object.defineProperty(t,"remove",{value:function(t){var n=this.indexOf(t);return-1!==n&&(this.splice(n,1),e.unset(t,i,r)),t}}),Object.defineProperty(t,"contains",{value:function(t){return-1!==this.indexOf(t)}}),Object.defineProperty(t,"add",{value:function(t,n){var o=this.indexOf(t);if(void 0===n){if(-1!==o)return;n=this.length}-1!==o&&this.splice(o,1),this.splice(n,0,t),-1===o&&e.set(t,i,r)}}),Object.defineProperty(t,"__refs_collection",{value:!0}),t},t.exports.isExtended=function(t){return!0===t.__refs_collection}},8302:(t,e,n)=>{"use strict";var r=n(5048);function i(t,e,n){var i=r.extend(n[e.name]||[],t,e,n);Object.defineProperty(n,e.name,{enumerable:e.enumerable,value:i}),i.length&&i.forEach((function(r){t.set(r,e.inverse,n)}))}function o(t,e){if(!(this instanceof o))return new o(t,e);t.inverse=e,e.inverse=t,this.props={},this.props[t.name]=t,this.props[e.name]=e}o.prototype.bind=function(t,e){if("string"==typeof e){if(!this.props[e])throw new Error("no property <"+e+"> in ref");e=this.props[e]}e.collection?i(this,e,t):function(t,e,n){var r=e.inverse,i=n[e.name];Object.defineProperty(n,e.name,{configurable:e.configurable,enumerable:e.enumerable,get:function(){return i},set:function(e){if(e!==i){var o=i;i=null,o&&t.unset(o,r,n),i=e,t.set(i,r,n)}}})}(this,e,t)},o.prototype.ensureRefsCollection=function(t,e){var n=t[e.name];return r.isExtended(n)||i(this,e,t),n},o.prototype.ensureBound=function(t,e){(function(t,e){return Object.prototype.hasOwnProperty.call(t,e.name||e)})(t,e)||this.bind(t,e)},o.prototype.unset=function(t,e,n){t&&(this.ensureBound(t,e),e.collection?this.ensureRefsCollection(t,e).remove(n):t[e.name]=void 0)},o.prototype.set=function(t,e,n){t&&(this.ensureBound(t,e),e.collection?this.ensureRefsCollection(t,e).add(n):t[e.name]=n)},t.exports=o},2720:t=>{"use strict";var e=/,?([a-z]),?/gi,n=parseFloat,r=Math,i=r.PI,o=r.min,a=r.max,c=r.pow,u=r.abs,s=/([a-z])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?[\s]*,?[\s]*)+)/gi,l=/(-?\d*\.?\d*(?:e[-+]?\d+)?)[\s]*,?[\s]*/gi,f=Array.isArray||function(t){return t instanceof Array};function h(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function p(t){if("function"==typeof t||Object(t)!==t)return t;var e=new t.constructor;for(var n in t)h(t,n)&&(e[n]=p(t[n]));return e}function d(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return t.push(t.splice(n,1)[0])}function y(t){var e=y.ps=y.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout((function(){for(var n in e)h(e,n)&&n!=t&&(e[n].sleep--,!e[n].sleep&&delete e[n])})),e[t]}function v(t,e,n,r){return 1===arguments.length&&(e=t.y,n=t.width,r=t.height,t=t.x),{x:t,y:e,width:n,height:r,x2:t+n,y2:e+r}}function x(){return this.join(",").replace(e,"$1")}function g(t){var e=p(t);return e.toString=x,e}function b(t,e,n,r,i,o,a,u,s){var l=1-s,f=c(l,3),h=c(l,2),p=s*s*s,d=f*e+3*h*s*r+3*l*s*s*o+p*u;return{x:E(f*t+3*h*s*n+3*l*s*s*i+p*a),y:E(d)}}function m(t){var e=_.apply(null,t);return v(e.x0,e.y0,e.x1-e.x0,e.y1-e.y0)}function w(t,e,n){return e>=t.x&&e<=t.x+t.width&&n>=t.y&&n<=t.y+t.height}function C(t,e,n,r,i){return t*(t*(-3*e+9*n-9*r+3*i)+6*e-12*n+6*r)-3*e+3*n}function M(t,e,n,i,o,a,c,u,s){null==s&&(s=1);for(var l=(s=s>1?1:s<0?0:s)/2,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],h=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],p=0,d=0;d<12;d++){var y=l*f[d]+l,v=C(y,t,n,o,c),x=C(y,e,i,a,u),g=v*v+x*x;p+=h[d]*r.sqrt(g)}return l*p}function O(t,e,n,r,i,c,u,s){if(!(a(t,n)<o(i,u)||o(t,n)>a(i,u)||a(e,r)<o(c,s)||o(e,r)>a(c,s))){var l=(t*r-e*n)*(c-s)-(e-r)*(i*s-c*u),f=(t-n)*(c-s)-(e-r)*(i-u);if(f){var h=E(((t*r-e*n)*(i-u)-(t-n)*(i*s-c*u))/f),p=E(l/f),d=+h.toFixed(2),y=+p.toFixed(2);if(!(d<+o(t,n).toFixed(2)||d>+a(t,n).toFixed(2)||d<+o(i,u).toFixed(2)||d>+a(i,u).toFixed(2)||y<+o(e,r).toFixed(2)||y>+a(e,r).toFixed(2)||y<+o(c,s).toFixed(2)||y>+a(c,s).toFixed(2)))return{x:h,y:p}}}}function E(t){return Math.round(1e11*t)/1e11}function S(t,e,n){if(r=m(t),i=m(e),r=v(r),!(w(i=v(i),r.x,r.y)||w(i,r.x2,r.y)||w(i,r.x,r.y2)||w(i,r.x2,r.y2)||w(r,i.x,i.y)||w(r,i.x2,i.y)||w(r,i.x,i.y2)||w(r,i.x2,i.y2)||(r.x<i.x2&&r.x>i.x||i.x<r.x2&&i.x>r.x)&&(r.y<i.y2&&r.y>i.y||i.y<r.y2&&i.y>r.y)))return n?0:[];for(var r,i,o=M.apply(0,t),a=M.apply(0,e),c=k(t)?1:~~(o/5)||1,s=k(e)?1:~~(a/5)||1,l=[],f=[],h={},p=n?0:[],d=0;d<c+1;d++){var y=b.apply(0,t.concat(d/c));l.push({x:y.x,y:y.y,t:d/c})}for(d=0;d<s+1;d++)y=b.apply(0,e.concat(d/s)),f.push({x:y.x,y:y.y,t:d/s});for(d=0;d<c;d++)for(var x=0;x<s;x++){var g,C=l[d],E=l[d+1],S=f[x],j=f[x+1],q=u(E.x-C.x)<.01?"y":"x",T=u(j.x-S.x)<.01?"y":"x",L=O(C.x,C.y,E.x,E.y,S.x,S.y,j.x,j.y);if(L){if(h[g=L.x.toFixed(9)+"#"+L.y.toFixed(9)])continue;h[g]=!0;var _=C.t+u((L[q]-C[q])/(E[q]-C[q]))*(E.t-C.t),A=S.t+u((L[T]-S[T])/(j[T]-S[T]))*(j.t-S.t);_>=0&&_<=1&&A>=0&&A<=1&&(n?p++:p.push({x:L.x,y:L.y,t1:_,t2:A}))}}return p}function j(t){var e=y(t);if(e.abs)return g(e.abs);if(f(t)&&f(t&&t[0])||(t=function(t){if(!t)return null;var e=y(t);if(e.arr)return p(e.arr);var n={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},r=[];return f(t)&&f(t[0])&&(r=p(t)),r.length||String(t).replace(s,(function(t,e,i){var o=[],a=e.toLowerCase();for(i.replace(l,(function(t,e){e&&o.push(+e)})),"m"==a&&o.length>2&&(r.push([e].concat(o.splice(0,2))),a="l",e="m"==e?"l":"L");o.length>=n[a]&&(r.push([e].concat(o.splice(0,n[a]))),n[a]););})),r.toString=y.toString,e.arr=p(r),r}(t)),!t||!t.length)return[["M",0,0]];var n,r=[],i=0,o=0,a=0,c=0,u=0;"M"==t[0][0]&&(a=i=+t[0][1],c=o=+t[0][2],u++,r[0]=["M",i,o]);for(var h,d,v=u,b=t.length;v<b;v++){if(r.push(h=[]),(n=(d=t[v])[0])!=n.toUpperCase())switch(h[0]=n.toUpperCase(),h[0]){case"A":h[1]=d[1],h[2]=d[2],h[3]=d[3],h[4]=d[4],h[5]=d[5],h[6]=+d[6]+i,h[7]=+d[7]+o;break;case"V":h[1]=+d[1]+o;break;case"H":h[1]=+d[1]+i;break;case"M":a=+d[1]+i,c=+d[2]+o;default:for(var m=1,w=d.length;m<w;m++)h[m]=+d[m]+(m%2?i:o)}else for(var C=0,M=d.length;C<M;C++)h[C]=d[C];switch(n=n.toUpperCase(),h[0]){case"Z":i=+a,o=+c;break;case"H":i=h[1];break;case"V":o=h[1];break;case"M":a=h[h.length-2],c=h[h.length-1];default:i=h[h.length-2],o=h[h.length-1]}}return r.toString=x,e.abs=g(r),r}function k(t){return t[0]===t[2]&&t[1]===t[3]&&t[4]===t[6]&&t[5]===t[7]}function q(t,e,n,r){return[t,e,n,r,n,r]}function T(t,e,n,r,i,o){var a=1/3,c=2/3;return[a*t+c*n,a*e+c*r,a*i+c*n,a*o+c*r,i,o]}function L(t,e,n,o,a,c,s,l,f,p){var y,v,x=120*i/180,g=i/180*(+a||0),b=[],m=(v=function(t,e,n){return{x:t*r.cos(n)-e*r.sin(n),y:t*r.sin(n)+e*r.cos(n)}},function t(){var e=Array.prototype.slice.call(arguments,0),n=e.join("␀"),r=t.cache=t.cache||{},i=t.count=t.count||[];return h(r,n)?(d(i,n),r[n]):(i.length>=1e3&&delete r[i.shift()],i.push(n),r[n]=v.apply(0,e),r[n])});if(p)q=p[0],T=p[1],j=p[2],k=p[3];else{t=(y=m(t,e,-g)).x,e=y.y;var w=(t-(l=(y=m(l,f,-g)).x))/2,C=(e-(f=y.y))/2,M=w*w/(n*n)+C*C/(o*o);M>1&&(n*=M=r.sqrt(M),o*=M);var O=n*n,E=o*o,S=(c==s?-1:1)*r.sqrt(u((O*E-O*C*C-E*w*w)/(O*C*C+E*w*w))),j=S*n*C/o+(t+l)/2,k=S*-o*w/n+(e+f)/2,q=r.asin(((e-k)/o).toFixed(9)),T=r.asin(((f-k)/o).toFixed(9));(q=t<j?i-q:q)<0&&(q=2*i+q),(T=l<j?i-T:T)<0&&(T=2*i+T),s&&q>T&&(q-=2*i),!s&&T>q&&(T-=2*i)}var _=T-q;if(u(_)>x){var A=T,N=l,P=f;T=q+x*(s&&T>q?1:-1),b=L(l=j+n*r.cos(T),f=k+o*r.sin(T),n,o,a,0,s,N,P,[T,A,j,k])}_=T-q;var F=r.cos(q),H=r.sin(q),R=r.cos(T),U=r.sin(T),z=r.tan(_/4),B=4/3*n*z,J=4/3*o*z,D=[t,e],X=[t+B*H,e-J*F],Z=[l+B*U,f-J*R],W=[l,f];if(X[0]=2*D[0]-X[0],X[1]=2*D[1]-X[1],p)return[X,Z,W].concat(b);for(var Y=[],I=0,K=(b=[X,Z,W].concat(b).join().split(",")).length;I<K;I++)Y[I]=I%2?m(b[I-1],b[I],g).y:m(b[I],b[I+1],g).x;return Y}function _(t,e,n,i,c,s,l,f){for(var h,p,d,y,v,x,g,b,m=[],w=[[],[]],C=0;C<2;++C)if(0==C?(p=6*t-12*n+6*c,h=-3*t+9*n-9*c+3*l,d=3*n-3*t):(p=6*e-12*i+6*s,h=-3*e+9*i-9*s+3*f,d=3*i-3*e),u(h)<1e-12){if(u(p)<1e-12)continue;0<(y=-d/p)&&y<1&&m.push(y)}else g=p*p-4*d*h,b=r.sqrt(g),g<0||(0<(v=(-p+b)/(2*h))&&v<1&&m.push(v),0<(x=(-p-b)/(2*h))&&x<1&&m.push(x));for(var M,O=m.length,E=O;O--;)M=1-(y=m[O]),w[0][O]=M*M*M*t+3*M*M*y*n+3*M*y*y*c+y*y*y*l,w[1][O]=M*M*M*e+3*M*M*y*i+3*M*y*y*s+y*y*y*f;return w[0][E]=t,w[1][E]=e,w[0][E+1]=l,w[1][E+1]=f,w[0].length=w[1].length=E+2,{x0:o.apply(0,w[0]),y0:o.apply(0,w[1]),x1:a.apply(0,w[0]),y1:a.apply(0,w[1])}}function A(t){var e=y(t);if(e.curve)return g(e.curve);for(var r=j(t),i={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=function(t,e,n){var r,i;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"].concat(L.apply(0,[e.x,e.y].concat(t.slice(1))));break;case"S":"C"==n||"S"==n?(r=2*e.x-e.bx,i=2*e.y-e.by):(r=e.x,i=e.y),t=["C",r,i].concat(t.slice(1));break;case"T":"Q"==n||"T"==n?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"].concat(T(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"].concat(T(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"].concat(q(e.x,e.y,t[1],t[2]));break;case"H":t=["C"].concat(q(e.x,e.y,t[1],e.y));break;case"V":t=["C"].concat(q(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"].concat(q(e.x,e.y,e.X,e.Y))}return t},a=function(t,e){if(t[e].length>7){t[e].shift();for(var n=t[e];n.length;)c[e]="A",t.splice(e++,0,["C"].concat(n.splice(0,6)));t.splice(e,1),f=r.length}},c=[],u="",s="",l=0,f=r.length;l<f;l++){r[l]&&(u=r[l][0]),"C"!=u&&(c[l]=u,l&&(s=c[l-1])),r[l]=o(r[l],i,s),"A"!=c[l]&&"C"==u&&(c[l]="C"),a(r,l);var h=r[l],p=h.length;i.x=h[p-2],i.y=h[p-1],i.bx=n(h[p-4])||i.x,i.by=n(h[p-3])||i.y}return e.curve=g(r),r}t.exports=function(t,e,n){t=A(t),e=A(e);for(var r,i,o,a,c,u,s,l,f,h,p=n?0:[],d=0,y=t.length;d<y;d++){var v=t[d];if("M"==v[0])r=c=v[1],i=u=v[2];else{"C"==v[0]?(f=[r,i].concat(v.slice(1)),r=f[6],i=f[7]):(f=[r,i,r,i,c,u,c,u],r=c,i=u);for(var x=0,g=e.length;x<g;x++){var b=e[x];if("M"==b[0])o=s=b[1],a=l=b[2];else{"C"==b[0]?(h=[o,a].concat(b.slice(1)),o=h[6],a=h[7]):(h=[o,a,o,a,s,l,s,l],o=s,a=l);var m=S(f,h,n);if(n)p+=m;else{for(var w=0,C=m.length;w<C;w++)m[w].segment1=d,m[w].segment2=x,m[w].bez1=f,m[w].bez2=h;p=p.concat(m)}}}}}return p}}}]);