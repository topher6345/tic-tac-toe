(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=(n(13),n(3)),u=n(4),i=n(5),m=(n(14),"\u274c"),f="\u2b55\ufe0f",s=[[0,1,2],[3,4,5],[6,7,8]],d=function(e,t){return e.reduce((function(e,n){return n===t?e+1:e}),0)},E=function(e){for(var t=function(t,n,a){return e[t]===e[n]&&e[n]===e[a]&&""!==e[a]},n=0;n<3;n++)if(t.apply(void 0,Object(u.a)(s[n])))return e[s[n][0]];for(var a=function(e){var t=Object(i.a)(e,3),n=t[0],a=t[1],r=t[2];return[[n[0],a[0],r[0]],[n[1],a[1],r[1]],[n[2],a[2],r[2]]]}(s),r=0;r<3;r++)if(t.apply(void 0,Object(u.a)(a[r])))return e[a[r][0]];return t(0,4,8)?e[0]:t(6,4,2)?e[6]:0===d(e,"")&&"Draw"},v=function(e,t){var n,a=(n="",t.reduce((function(e,t,a){return t===n?e.concat(a):e}),[])),r=a.length;if("random"===e)return a[Math.floor(Math.random()*r)];if("first"===e)return a[0];if("last"===e)return a[r-1];if("block"===e){var o=function(e){if(1===d(e,m)&&""===e[4])return 4;var t=function(t,n,a,r){return e[n]===t&&e[a]===e[n]&&""===e[r]};return t(f,3,6,0)||t(f,4,8,0)||t(f,1,2,0)?0:t(f,0,2,1)||t(f,4,7,1)?1:t(f,0,1,2)||t(f,6,4,2)||t(f,5,8,2)?2:t(f,0,6,3)||t(f,4,5,3)?3:t(f,0,8,4)||t(f,1,7,4)||t(f,6,2,4)||t(f,3,5,4)?4:t(f,2,8,5)||t(f,3,4,5)?5:t(f,0,3,6)||t(f,4,2,6)||t(f,7,8,6)?6:t(f,1,4,7)||t(f,6,8,7)?7:t(f,0,4,8)||t(f,2,5,8)||t(f,6,7,8)?8:t(m,3,6,0)||t(m,4,8,0)||t(m,1,2,0)?0:t(m,0,2,1)||t(m,4,7,1)?1:t(m,0,1,2)||t(m,6,4,2)||t(m,5,8,2)?2:t(m,0,6,3)||t(m,4,5,3)?3:t(m,0,8,4)||t(m,1,7,4)||t(m,6,2,4)||t(m,3,5,4)?4:t(m,2,8,5)||t(m,3,4,5)?5:t(m,0,3,6)||t(m,4,2,6)||t(m,7,8,6)?6:t(m,1,4,7)||t(m,6,8,7)?7:t(m,0,4,8)||t(m,2,5,8)||t(m,6,7,8)?8:[]}(t),c=a[Math.floor(Math.random()*r)];return"[]"===JSON.stringify(o)?c:o}},b=["","","","","","","","",""],g={board:Array.from(b),over:!1,strategy:"block"},h=function(){var e=Object(a.useState)(g),t=Object(i.a)(e,2),n=t[0],o=t[1],c=function(e){return function(){o((function(t){if(t.over)return t;var a=Array.from(t.board);a[e]=m;var r=E(a),o=v(n.strategy,a);return r||(a[o]=f),Object(l.a)({},t,{board:a,over:r})}))}},u=function(e){var t=n.board[e];return""===t?r.a.createElement("td",{onClick:c(e),index:e},"\xa0"):t===m?r.a.createElement("td",{key:e},m):t===f?r.a.createElement("td",{key:e},f):void 0},d=function(){return o((function(e){return Object(l.a)({},g,{strategy:e.strategy})}))},b=E(n.board);return r.a.createElement(r.a.Fragment,null,b===m&&r.a.createElement(k,{onClick:d}),b===f&&r.a.createElement(p,{onClick:d}),"Draw"===b&&r.a.createElement(y,{onClick:d}),r.a.createElement("h1",null,"Tic \u2022 Tac \u2022 Toe"),r.a.createElement("table",null,r.a.createElement("tbody",null,s.map((function(e){return r.a.createElement("tr",null,e.map(u))})))),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("button",{onClick:d},"Reset")),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"strategy"},"Strategy")),r.a.createElement("p",null,r.a.createElement("select",{name:"strategy",onChange:function(e){return function(e){var t=e.target.value;o((function(e){return Object(l.a)({},e,{strategy:t})}))}(e)}},r.a.createElement("option",{value:"block"},"Block"),r.a.createElement("option",{value:"random"},"RANDOM"),r.a.createElement("option",{value:"first"},"FIRST"),r.a.createElement("option",{value:"last"},"LAST")))))},y=function(e){return r.a.createElement("div",{className:"draw-modal"},r.a.createElement("h2",null,"\ud83e\udd37\u200d\u2640\ufe0fDRAW\ud83e\udd37\u200d\u2640\ufe0f"),r.a.createElement("button",e,"Play Again"))},p=function(e){return r.a.createElement("div",{className:"lose-modal"},r.a.createElement("h2",null,"\ud83d\ude2dYou Lost!\ud83d\ude2d"),r.a.createElement("button",e,"Play Again"))},k=function(e){return r.a.createElement("div",{className:"win-modal"},r.a.createElement("h2",null,"\ud83c\udfc6You Won!\ud83c\udfc6"),r.a.createElement("button",e,"Play Again"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8c840f4a.chunk.js.map