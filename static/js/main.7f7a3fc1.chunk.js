(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(11),l=n.n(c),i=(n(17),n(5)),u=n(6),m=n(8),s=n(9),f=n(3),d=n(1),p=n(7),y=(n(18),function(e){return document.getElementById(e)}),E=function(e,t){return window.localStorage.setItem(e,JSON.stringify(t))},h=y("onPlaySound"),v=y("onLoseSound"),b=y("onWinSound"),g=y("onDrawSound"),w=y("onNewGameSound"),O=y("onHoverSound"),j="\u274c",k="\u2b55\ufe0f",N=function(e){var t=e.className;return o.a.createElement("span",Object.assign({className:t},{role:"img","aria-label":"Trophy"}),"\ud83c\udfc6")},C=function(e){var t=e.className;return o.a.createElement("span",Object.assign({className:t},{role:"img","aria-label":"Crying Face"}),"\ud83d\ude2d")},S=(a={},Object(p.a)(a,j,o.a.createElement(o.a.Fragment,null,o.a.createElement(N,{className:"spin-left"}),"You Won!",o.a.createElement(N,{className:"spin-right"}))),Object(p.a)(a,k,o.a.createElement(o.a.Fragment,null,o.a.createElement(C,{className:"spin-left"}),"You Lost!",o.a.createElement(C,{className:"spin-right"}))),Object(p.a)(a,"Draw","\ud83e\udd37\u200d\u2640\ufe0f   Draw   \ud83e\udd37\u200d\u2640\ufe0f"),a),D=[[0,1,2],[3,4,5],[6,7,8]],M=function(e,t){return e.reduce((function(e,n){return n===t?e+1:e}),0)},A=function(e){for(var t=function(t,n,a){return e[t]===e[n]&&e[n]===e[a]&&""!==e[a]},n=0;n<3;n++)if(t.apply(void 0,Object(f.a)(D[n])))return e[D[n][0]];for(var a=function(e){var t=Object(d.a)(e,3),n=t[0],a=t[1],r=t[2];return[[n[0],a[0],r[0]],[n[1],a[1],r[1]],[n[2],a[2],r[2]]]}(D),r=0;r<3;r++)if(t.apply(void 0,Object(f.a)(a[r])))return e[a[r][0]];return t(0,4,8)?e[0]:t(6,4,2)?e[6]:0===M(e,"")&&"Draw"},F=function(e,t){var n,a=(n="",t.reduce((function(e,t,a){return t===n?e.concat(a):e}),[])),r=a.length,o=function(){var e=function(e){if(1===M(e,j)&&""===e[4])return 4;var t=function(t,n,a,r){return e[n]===t&&e[a]===e[n]&&""===e[r]};return t(k,3,6,0)||t(k,4,8,0)||t(k,1,2,0)?0:t(k,0,2,1)||t(k,4,7,1)?1:t(k,0,1,2)||t(k,6,4,2)||t(k,5,8,2)?2:t(k,0,6,3)||t(k,4,5,3)?3:t(k,0,8,4)||t(k,1,7,4)||t(k,6,2,4)||t(k,3,5,4)?4:t(k,2,8,5)||t(k,3,4,5)?5:t(k,0,3,6)||t(k,4,2,6)||t(k,7,8,6)?6:t(k,1,4,7)||t(k,6,8,7)?7:t(k,0,4,8)||t(k,2,5,8)||t(k,6,7,8)?8:t(j,3,6,0)||t(j,4,8,0)||t(j,1,2,0)?0:t(j,0,2,1)||t(j,4,7,1)?1:t(j,0,1,2)||t(j,6,4,2)||t(j,5,8,2)?2:t(j,0,6,3)||t(j,4,5,3)?3:t(j,0,8,4)||t(j,1,7,4)||t(j,6,2,4)||t(j,3,5,4)?4:t(j,2,8,5)||t(j,3,4,5)?5:t(j,0,3,6)||t(j,4,2,6)||t(j,7,8,6)?6:t(j,1,4,7)||t(j,6,8,7)?7:(t(j,0,4,8)||t(j,2,5,8)||!!t(j,6,7,8))&&8}(t);return!1===e?a[Math.floor(Math.random()*r)]:e};return"random"===e?Math.floor(100*Math.random())>67?o():a[Math.floor(Math.random()*r)]:"first"===e?a[0]:"last"===e?a[r-1]:"hard"===e?o():void 0},P=["","","","","","","","",""],T=function(e){return(e.reduce((function(e,t){return t.winner===j?e+1:e}),0)/e.length*100).toFixed(0)},I=function(){var e,t=Object(r.useState)(Array.from(P)),n=Object(d.a)(t,2),a=n[0],c=n[1],l=Object(r.useState)(!1),i=Object(d.a)(l,2),u=i[0],m=i[1],s=Object(r.useState)("hard"),p=Object(d.a)(s,2),y=p[0],v=p[1],b=Object(r.useState)((e="history",JSON.parse(window.localStorage.getItem(e))||[])),g=Object(d.a)(b,2),N=g[0],C=g[1],S=A(a),M=function(e){return function(){if(!u){h.play();var t=Array.from(a);t[e]=j;var n=A(t);m(n),n||(t[F(y,t)]=k),c(t)}}},I=function(){var e=Array.from(P);(function(e,t){for(var n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0})(a,e)||w.play(),v(y),c(e),m(!1)},H=function(){w.play(),C((function(e){var t=[{winner:S,strategy:y,timestamp:new Date(Date.now()).toLocaleTimeString(),winPercentage:T([{winner:S}].concat(Object(f.a)(e)))}].concat(Object(f.a)(e));return E("history",t),t})),I()},L=function(e){var t=a[e];return t===j?o.a.createElement("td",{key:e},j):t===k?o.a.createElement("td",{className:"fade-in",key:e},k):o.a.createElement("td",{onClick:M(e),onMouseEnter:function(){return O.play()},key:e}," ","\xa0"," ")};return o.a.createElement(o.a.Fragment,null,S===j&&o.a.createElement(Y,{onClick:H}),S===k&&o.a.createElement(W,{onClick:H}),"Draw"===S&&o.a.createElement(J,{onClick:H}),o.a.createElement("div",{className:"paneled"},o.a.createElement("h1",null,"Tic \u2022 Tac \u2022 Toe")),o.a.createElement("table",null,o.a.createElement("tbody",null,D.map((function(e,t){return o.a.createElement("tr",{key:t},e.map(L))})))),o.a.createElement("div",null,o.a.createElement("button",{onMouseEnter:function(){return O.play()},onClick:I},"New Game"),o.a.createElement("div",{className:"paneled"},o.a.createElement("label",{htmlFor:"strategy"},"Difficulty")),o.a.createElement("select",{name:"strategy",onChange:function(e){return v(e.target.value)}},o.a.createElement("option",{value:"hard"},"HARD"),o.a.createElement("option",{value:"random"},"MEDIUM"),o.a.createElement("option",{value:"first"},"EASY #1"),o.a.createElement("option",{value:"last"},"EASY #2")),o.a.createElement("div",{className:"paneled"},"History"),o.a.createElement("button",{onClick:function(){N.length>0&&!window.confirm("Are you sure? This will delete your game history permanently.")||(C([]),E("history",[]))},className:"clearButton"},"Clear"),o.a.createElement("div",{className:"terminal"},o.a.createElement("ol",{reversed:!0},o.a.createElement(B,{history:N})))))},B=function(e){return e.history.map((function(e,t){var n=e.winner,a=e.strategy,r=e.timestamp,c=e.winPercentage;return o.a.createElement("li",{key:t+n},r," \u2022 ",S[n]," \u2022 ",a," \u2022 win percentage:"," ",c,"%")}))},J=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){g.play()}},{key:"render",value:function(){return o.a.createElement("div",{className:"draw-modal"},o.a.createElement("h2",null,S.Draw),o.a.createElement("button",{onClick:this.props.onClick},"Play Again"))}}]),n}(o.a.Component),W=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){v.play()}},{key:"render",value:function(){return o.a.createElement("div",{className:"lose-modal"},o.a.createElement("h2",null,S[k]),o.a.createElement("button",{onClick:this.props.onClick},"Play Again"))}}]),n}(o.a.Component),Y=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){b.play()}},{key:"render",value:function(){return o.a.createElement("div",{className:"win-modal"},o.a.createElement("h2",null,S[j]),o.a.createElement("button",{onClick:this.props.onClick},"Play Again"))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.7f7a3fc1.chunk.js.map