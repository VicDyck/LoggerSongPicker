(this["webpackJsonpreact-roller-attributes-v105"]=this["webpackJsonpreact-roller-attributes-v105"]||[]).push([[0],{20:function(e,n,a){},21:function(e,n,a){},23:function(e,n,a){"use strict";a.r(n);var t=a(3),o=a(15),s=a.n(o),r=a(10),i=a(5),c=(a(20),{song01:{num:1,name:"Karma Police - Folson Prison",singer:"Adam",played:0},song02:{num:2,name:"Tilsonburg",singer:"Adam",played:0},song03:{num:3,name:"Good As Hell",singer:"Adam",played:0},song04:{num:4,name:"Dig It Down",singer:"Adam",played:0},song05:{num:5,name:"Don't Let the Door Hit Ya",singer:"Adam",played:0},song06:{num:6,name:"Shotgun",singer:"Adam",played:0},song07:{num:7,name:"Still Drunk from the Night Before",singer:"Adam",played:0},song08:{num:8,name:"Float On",singer:"Adam",played:0},song09:{num:9,name:"North of Dewdney",singer:"Adam",played:0},song10:{num:10,name:"Caravan",singer:"Adam",played:0},song11:{num:11,name:"Arrested",singer:"Adam",played:0},song12:{num:12,name:"Taking the Treeline Down",singer:"Adam",played:0},song13:{num:13,name:"Boneshaker",singer:"Adam",played:0},song14:{num:14,name:"Three Little Birds",singer:"Other",played:0},song15:{num:15,name:"Family Tradition",singer:"Other",played:0},song16:{num:16,name:"Feeling Groovy",singer:"Other",played:0},song17:{num:17,name:"Log Driver's Waltz",singer:"Other",played:0}}),l=new(a(14).b)("#dice-box",{id:"dice-canvas",assetPath:"/assets/dice-box/",startingHeight:8,throwForce:6,spinForce:5,lightIntensity:.9}),d=(a(21),a(1)),m=function(e){var n=e.onChange,a=e.songs,t=e.onRoll,o=function(e){e.preventDefault();var t=e.target.value;t&&(t=parseInt(t));var o=e.target.id.replace("song-",""),s=Object(r.a)({},a);s[o].played=t,n(s)};return Object(d.jsxs)("div",{className:"songs",children:[Object(d.jsx)("button",{id:"pick-song",className:"button","aria-label":"Pick Song",onClick:function(e){e.preventDefault(),t("1d20",song)},children:"Pick Song"}),Object.entries(a).map((function(e){var n=Object(i.a)(e,2),a=n[0],t=n[1];return Object(d.jsx)("div",{className:"songs-group",children:Object(d.jsx)("div",{className:"songs-name",children:Object(d.jsx)("button",{className:"button button--secondary",id:"pick-".concat(a),onClick:o,children:t.name})})},a)}))]})};function g(){var e=Object(t.useState)(c),n=Object(i.a)(e,2),a=n[0],o=n[1],s=Object(t.useState)(),g=Object(i.a)(s,2),u=g[0],p=g[1];l.onRollComplete=function(e){console.log(e);var n=Object(r.a)({},a);"all"===u?Object.keys(n).forEach((function(a,t){n[a].played=e[t].value})):n[u].total=e[0].value,o(n)};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Logger Song Picker"}),Object(d.jsx)(m,{songs:a,onClick:function(e,n){p(n),l.show().roll(e)}})]})}l.init().then((function(){document.addEventListener("mousedown",(function(){var e=document.getElementById("dice-canvas");"none"!==window.getComputedStyle(e).display&&l.hide().clear()}))}));var u=document.getElementById("root");s.a.render(Object(d.jsx)(t.StrictMode,{children:Object(d.jsx)(g,{})}),u)}},[[23,1,2]]]);
//# sourceMappingURL=main.283f0bb7.chunk.js.map