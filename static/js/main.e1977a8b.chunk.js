(this["webpackJsonpsimpsons-quote-onclick"]=this["webpackJsonpsimpsons-quote-onclick"]||[]).push([[0],{19:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c(12),a=c.n(s),i=c(14),r=(c(19),c(0));var o=function(e){return e&&Object(r.jsx)("div",{className:"DisplayQuote",children:Object(r.jsxs)("div",{className:"character-bg",children:[Object(r.jsx)("img",{src:e.image,alt:e.character}),Object(r.jsxs)("div",{className:"text-container",children:['"',e.quote,'"',Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("em",{children:["~ ",e.character]})]})]})})},h=c(13),u=c.n(h),j={quote:"By chilling my loins I increase the chances of impregnating my wife.",character:"Apu Nahasapeemapetilon",image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629"};function l(){var e=Object(n.useState)(j),t=Object(i.a)(e,2),c=t[0],s=t[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("p",{children:Object(r.jsx)("button",{type:"button",onClick:function(){u.a.get("https://simpsons-quotes-api.herokuapp.com/quotes").then((function(e){return e.data})).then((function(e){return s(e[0])})).catch((function(e){return console.log(e)}))},children:Object(r.jsx)("h3",{children:"Hit me!"})})}),Object(r.jsx)(o,{image:c.image,quote:c.quote,character:c.character})]})}var p=document.getElementById("root");a.a.render(Object(r.jsx)(n.StrictMode,{children:Object(r.jsx)(l,{})}),p)}},[[39,1,2]]]);
//# sourceMappingURL=main.e1977a8b.chunk.js.map