(this["webpackJsonpmtg-life-counter"]=this["webpackJsonpmtg-life-counter"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),u=(n(9),n(1)),l=function(){var e=Object(a.useState)("Player's Name"),t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement("input",{className:"mtg-player-name",type:"text",value:n,onFocus:function(){return c("")},onBlur:function(){""===n&&c("Player's Name")},onChange:function(e){return c(e.target.value)}})},i=function(e){var t=e.symbol,n=e.updateValue,a=e.setValueAnimation;return r.a.createElement("button",{className:"mtg-life-counter-button",onClick:function(){n(),a()}},t)},m=function(){var e=Object(a.useState)(20),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),m=Object(u.a)(o,2),s=m[0],f=m[1];return r.a.createElement("div",{className:"mtg-life-counter-container"},r.a.createElement(l,null),r.a.createElement("div",{className:"mtg-life-counter"},r.a.createElement(i,{symbol:"-",updateValue:function(){return c(n-1)},setValueAnimation:function(){return f("--decrease")}}),r.a.createElement("div",{className:"mtg-life-counter-value ".concat(s),onAnimationEnd:function(){return f("")}},n),r.a.createElement(i,{symbol:"+",updateValue:function(){return c(n+1)},setValueAnimation:function(){return f("--increase")}})))};var s=function(){return r.a.createElement("div",{className:"mtg-container"},r.a.createElement("h1",{className:"mtg-title"},"MTG Life Counter"),r.a.createElement(m,null),r.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.4e6fffe2.chunk.js.map