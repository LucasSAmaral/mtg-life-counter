(this["webpackJsonpmtg-life-counter"]=this["webpackJsonpmtg-life-counter"]||[]).push([[0],[,,,,,,,,,function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACm0lEQVRIS8WXS6hOURTHf3+kXK9ICXlLeQ4YUh4jxESSq5h4jG4phh4DjyGljLgmFJJM3DDCLYYMPEveN6REuNyS6699fedzHOd8Z597wxqes9b67b3O2v+9jvhPpliu7RHAemANMB0YDHQDL4HLQKukh7H5SsG2twBHgIGRSS8BayV1Zv1tN0n6Ep4Xgm2PAR4DgyKBWbeTkjYmD203A9Mk7SsE214CXOklMB32ERgFbK1VbU8h2PZs4E4J9D1wD/gOTAXGNqhe6IP+tXz5YNv9gG8FSd4BqyW15y3K9nigDZjbYNGF4GvAopzAZklnYkpvewFwvcD3T7DtYcCHnIApkp7GQFON1ApsyonJBV8AVmacV0gKxyPabG8HDlbZsTPOHZImRBMB2+uA09Hf2PZE4FkmYL6kWxXBZSLTLSl0+U8Bsb0f2JmGSCpVtSqLyvom4PvAjNTLTklD+5K4LDYBB/1MS+MDSTPLgmPe17776Ew1DyfgbZkkb2LPbRncdraaXZKa/up3rPXPJ2BIaoE91fwX4OwxPSBpVx1sOwh5Iua5FZT0tay06fe25wE3MzGTJD1Pg3cDexskjtbrJIftF0C4POqWHNNY8A5JhyrudjlwMRPTJmlVXUBqTVC04+OSNleETgae5MQMlxSGg1+jj+1GpV4o6UYMvIFet0tanOSILXXwvx1uL0kdeQuwHe7x88DInPehswdIChNLjxWB0+NKNk9I8qo2CIaJZRYQRt9GNkfS3d+aLNWBSalbgKPAWyAMB321pZKuZpNkd/xIUv0+tX0C2NBLclcYBCW9zotPg+vDdtrRdpC7s0A4HjEWRKZF0rFGzpUk03b4dQlHaxkwrqZ0n4Hw63IOOCUpjL6lVglcmq2Cww+hzfcfPEhTPQAAAABJRU5ErkJggg=="},function(e,n,t){e.exports=t.p+"static/media/red.8b36a800.png"},function(e,n,t){e.exports=t.p+"static/media/black.796b9af5.png"},function(e,n,t){e.exports=t.p+"static/media/blue.f6dd1992.png"},function(e,n,t){e.exports=t.p+"static/media/white.3f87c949.png"},function(e,n,t){e.exports=t.p+"static/media/green.2c9c6e4b.png"},,,,function(e,n,t){e.exports=t(29)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,,function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(8),c=t.n(r),i=t(2),l=t(1),u=t(3),s=t(9),f=t.n(s),d=(t(23),function(){var e=Object(o.useState)("Player's Name"),n=Object(l.a)(e,2),t=n[0],r=n[1];return a.a.createElement("input",{className:"mtg-player-name",type:"text",value:t,onFocus:function(){return r("")},onBlur:function(){""===t&&r("Player's Name")},onChange:function(e){return r(e.target.value)},onTouchStart:function(){}})}),m=t(10),g=t.n(m),p=t(11),b=t.n(p),v=t(12),h=t.n(v),E=t(13),A=t.n(E),k=t(14),w=t.n(k),j=(t(24),function(e){var n=e.setDeckColor,t=Object(o.useState)(!1),r=Object(l.a)(t,2),c=r[0],i=r[1],u=[{colorIcon:g.a,color:"RED"},{colorIcon:h.a,color:"BLUE"},{colorIcon:b.a,color:"BLACK"},{colorIcon:A.a,color:"WHITE"},{colorIcon:w.a,color:"GREEN"}];return a.a.createElement("div",{className:"mtg-deck-color-container"},a.a.createElement("div",{className:"mtg-deck-color ".concat(c?"--opened":"")},a.a.createElement("p",{onClick:function(){return i(!c)}},"Change deck color"),a.a.createElement("ul",{className:"mtg-deck-color-options"},u.map((function(e){return a.a.createElement("li",{key:e.color},a.a.createElement("button",{onClick:function(){return n(e.color)}},a.a.createElement("img",{src:e.colorIcon,alt:e.color})))})))))}),O=(t(25),function(e){var n=e.symbol,t=e.updateValue,o=e.setValueAnimation;return a.a.createElement("button",{className:"mtg-life-counter-button",onClick:function(){t(),o()},onTouchStart:function(){}},n)}),N=function(e){var n=e.counterValue,t=e.valueAnimation,o=e.setConterValue,r=e.setValueAnimation;return a.a.createElement("div",{className:"mtg-life-counter"},a.a.createElement(O,{symbol:"-",updateValue:function(){return o(n-1)},setValueAnimation:function(){return r("--decrease")}}),a.a.createElement("div",{className:"mtg-life-counter-value ".concat(t," ").concat(n<=0?"--lost":""),onAnimationEnd:function(){return r("")}},n),a.a.createElement(O,{symbol:"+",updateValue:function(){return o(n+1)},setValueAnimation:function(){return r("--increase")}}))},C=function(e){var n=e.reloadCounter,t=Object(o.useState)(20),r=Object(l.a)(t,2),c=r[0],i=r[1],u=Object(o.useState)(""),s=Object(l.a)(u,2),f=s[0],m=s[1],g=Object(o.useState)("NONE"),p=Object(l.a)(g,2),b=p[0],v=p[1];Object(o.useEffect)((function(){i(20)}),[n]);return a.a.createElement("div",{className:"mtg-life-counter-container ".concat({NONE:"",RED:"--red-deck",BLUE:"--blue-deck",BLACK:"--black-deck",WHITE:"--white-deck",GREEN:"--green-deck"}[b])},a.a.createElement(d,null),a.a.createElement(N,{counterValue:c,valueAnimation:f,setConterValue:i,setValueAnimation:m}),a.a.createElement(j,{setDeckColor:v}))};t(26);function S(){var e=Object(i.a)(["\n0% {\n  transform: rotate(0deg) scale(1);\n}\n25% {\n  transform: rotate(90deg) scale(1.2);\n}\n50% {\n  transform: rotate(180deg) scale(1.2);\n}\n75% {\n  transform: rotate(270deg) scale(1.2);\n}\n100% {\n  transform: rotate(360deg) scale(1);\n}\n"]);return S=function(){return e},e}function x(){var e=Object(i.a)(["\n          animation: "," 600ms linear both;\n        "]);return x=function(){return e},e}function y(){var e=Object(i.a)(["\n  width: 100%;\n  height: auto;\n  ","\n"]);return y=function(){return e},e}function B(){var e=Object(i.a)(["\n  position: absolute;\n  top: -15px;\n  background-color: black;\n  border: none;\n  outline: none;\n"]);return B=function(){return e},e}function P(){var e=Object(i.a)(["\n  height: 1px;\n  background-color: #d8dcdd;\n  width: 100%;\n"]);return P=function(){return e},e}function I(){var e=Object(i.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n"]);return I=function(){return e},e}function L(){var e=Object(i.a)(["\n  color: #d8dcdd;\n  text-align: center;\n  margin-top: 20px;\n\n  @media (max-width: 720px) {\n    display: none;\n  }\n"]);return L=function(){return e},e}function D(){var e=Object(i.a)(['\n  height: 100vh;\n  background-color: #000000;\n  font-family: "MTG";\n  padding: 20px 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  @media (max-width: 720px) {\n    justify-content: space-between;\n    padding: 0;\n    overflow: hidden;\n  }\n']);return D=function(){return e},e}var V=u.b.div(D()),R=u.b.h1(L()),T=u.b.div(I()),G=u.b.div(P()),W=u.b.button(B()),H=u.b.img(y(),(function(e){return e.reloadCounter?Object(u.a)(x(),M):""})),M=Object(u.c)(S()),U=function(){var e=Object(o.useState)(!1),n=Object(l.a)(e,2),t=n[0],r=n[1];return a.a.createElement(V,null,a.a.createElement(R,null,"MTG Life Counter"),a.a.createElement(C,{reloadCounter:t}),a.a.createElement(T,null,a.a.createElement(G,null),a.a.createElement(W,{onClick:function(){return r(!0)}},a.a.createElement(H,{src:f.a,reloadCounter:t,alt:"",onAnimationEnd:function(){return r(!1)}}))),a.a.createElement(C,{reloadCounter:t}))},Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(U,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mtg-life-counter",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/mtg-life-counter","/sw.js");Z?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(n,e)}))}}()}],[[18,1,2]]]);
//# sourceMappingURL=main.3c1f5662.chunk.js.map