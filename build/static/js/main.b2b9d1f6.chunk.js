(this.webpackJsonpturkufit=this.webpackJsonpturkufit||[]).push([[0],{150:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(12),i=a.n(c),r=(a(86),a(18)),o=(a(29),a(7)),u=(a(87),function(e){var t=e.click;return l.a.createElement("button",{className:"toggle-button",onClick:function(){return t()}},l.a.createElement("div",{className:"toggle-button_line"}),l.a.createElement("div",{className:"toggle-button_line"}),l.a.createElement("div",{className:"toggle-button_line"}))}),s=(a(88),function(e){var t=e.drawerHandler;return l.a.createElement("header",{className:"navbar"},l.a.createElement("nav",{className:"navbar_navigation"},l.a.createElement("div",{className:"navbar_toggle-button"},l.a.createElement(u,{click:t})),l.a.createElement("div",{className:"navbar_logo"},l.a.createElement(o.b,{to:"/"}),"ULKOFIT"),l.a.createElement("div",{className:"spacer"}),l.a.createElement("div",{className:"navbar_navigation-items"},l.a.createElement("ul",null,l.a.createElement(o.b,{to:"/"},l.a.createElement("li",null,"Aloitus")),l.a.createElement(o.b,{to:"/locations"},l.a.createElement("li",null,"Sijainnit")),l.a.createElement(o.b,{to:"/exerciseinfo"},l.a.createElement("li",null,"Liikeohjeet"))))))}),m=(a(93),function(e){var t=e.show,a=e.click,n="side-drawer";return t&&(n="side-drawer open"),l.a.createElement("ul",{className:n},l.a.createElement(o.b,{to:"/",onClick:function(){return a()}},l.a.createElement("li",null,"Aloitus")),l.a.createElement(o.b,{to:"/locations",onClick:function(){return a()}},l.a.createElement("li",null,"Sijainnit")),l.a.createElement(o.b,{to:"/exerciseinfo",onClick:function(){return a()}},l.a.createElement("li",null,"Liikeohjeet")))}),E=(a(94),function(){return l.a.createElement("div",{className:"hero-image"},l.a.createElement("div",{className:"hero-container"},l.a.createElement("h1",{className:"hero-text"},"LIIKKUVATURKU")))}),d=a(175),f=function(){return l.a.createElement("div",{className:"content"},l.a.createElement(E,null),l.a.createElement("div",{className:"card"},l.a.createElement("h1",{style:{color:"white"}},"Liikkumista ulkolaitteilla"),l.a.createElement("p",null,"Ymp\xe4ri Turun kaupunkia sijaitsevat ulkokuntolaitteet ovat mainio tapa kasvattaa ja yll\xe4pit\xe4\xe4 lihaskuntoa. liikkuvaturku.fi avulla l\xf6yd\xe4t laitteiden sijainnit helposti kartalta laadukkailla kuvilla varustettuna."),l.a.createElement(o.b,{to:"/locations"},l.a.createElement(d.a,{ghost:!0,className:"button"},"Etsi l\xe4himm\xe4t ulkokuntoilulaitteet"))))},p=a(176),v=a(177),h=a(178),b=a(179),g=a(173),k=a(180),N=a(3),j=a(17),O=a.n(j),y=function(e){return function(t,a){O.a.get("http://localhost:3003/api/locations/".concat(e)).then((function(e){t({type:"SET_SELECTED_LOCATION",payload:{location:e.data[0]}})}))}},w=function(e,t,a){var n={latitude:e,longitude:t,zoom:a};return function(e,t){e({type:"SET_MAP",payload:{map:n}})}},_=(a(46),function(){var e=Object(n.useState)(60.45451),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(22.264824),u=Object(r.a)(i,2),s=u[0],m=u[1],E=13,d=Object(N.c)((function(e){return e.locations})),f=Object(N.c)((function(e){return e.map})),p=Object(N.b)();Object(n.useEffect)((function(){c(f.latitude),m(f.longitude)}),[f]);var v={center:[a,s],zoom:f.zoom};return l.a.createElement("div",{className:"map-container"},l.a.createElement(h.a,{viewport:v,onViewportChange:function(e){e.zoom&&null!==e.zoom&&(E=e.zoom)}},l.a.createElement(b.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),d.map((function(e){return l.a.createElement(g.a,{key:e.id,position:[e.latitude,e.longitude],onClick:function(){return function(e,t,a){p(y(e)),p(w(t,a,E))}(e.id,e.latitude,e.longitude)}},l.a.createElement(k.a,null,l.a.createElement("p",null,l.a.createElement("b",null,"Nimi:")," ",e.name),l.a.createElement("p",null,l.a.createElement("b",null,"Osoite:")," ",e.address),l.a.createElement(o.b,{to:"/locations/".concat(e.id)},l.a.createElement("p",{className:"info-item"},"Katso kuvat t\xe4\xe4lt\xe4"))))}))))}),S=function(){var e=Object(N.b)(),t=Object(N.c)((function(e){return e.locations}));return console.log(window.innerHeight),t?window.innerWidth<700?l.a.createElement("div",{className:"list-container-mobile"},l.a.createElement("h1",null,"Ulkoliikuntalaitteet"),l.a.createElement("ul",{className:"list"},t.map((function(e){return l.a.createElement(o.b,{to:"/locations/".concat(e.id),key:e.id},l.a.createElement("li",{className:"list-item"},e.name))})))):l.a.createElement("div",{className:"list-container"},l.a.createElement("h1",null,"Ulkoliikuntalaitteet"),l.a.createElement("ul",{className:"list"},t.map((function(t){return l.a.createElement("li",{onClick:function(){return a=t.id,n=t.latitude,l=t.longitude,e(y(a)),void e(w(n,l,14));var a,n,l},key:t.id,className:"list-item"},t.name)})))):null},T=function(){var e=Object(N.c)((function(e){return e.selectedLocation}));return l.a.createElement("div",{className:"selected-item-container"},l.a.createElement("h1",null,"Valittu sijainti"),l.a.createElement("div",{className:"info-box"},null!==e&&e?l.a.createElement("div",null,l.a.createElement("p",{className:"info-item"},l.a.createElement("b",null,"Nimi:")," ",e.name),l.a.createElement("p",{className:"info-item"},l.a.createElement("b",null,"Osoite:")," ",e.address),l.a.createElement("p",{className:"info-item"},l.a.createElement("b",null,"Laitteet: "),"Yl\xe4talja, punnerruslaite, dippitanko"),l.a.createElement(o.b,{to:"/locations/".concat(e.id)},l.a.createElement("p",{className:"info-item"},"Katso kuvat t\xe4\xe4lt\xe4"))):l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("h3",{style:{color:"white"}},"Valitse sijainti kartalta tai listalta"),l.a.createElement("br",null))))},C=function(){return window.innerWidth<700?l.a.createElement("div",{className:"content"},l.a.createElement(_,null),l.a.createElement(S,null)):l.a.createElement("div",{className:"content"},l.a.createElement(_,null),l.a.createElement(p.a,null,l.a.createElement(v.a,{span:12},l.a.createElement(S,null)),l.a.createElement(v.a,{span:12},l.a.createElement(T,null))))},L=function(e){return{type:"SET_IMAGES",payload:{images:e}}},A=(a(150),function(e){var t=e.id,a=e.name,c=e.content,i=e.reps,o=e.sets,u=Object(n.useState)(!1),s=Object(r.a)(u,2),m=s[0],E=s[1],d=Object(n.useState)(null),f=Object(r.a)(d,2),p=f[0],v=f[1],h=Object(n.useRef)(null),b=Object(N.b)();Object(n.useEffect)((function(){b((function(e,t){O.a.get("http://localhost:3003/api/images/machines").then((function(t){e(L(t.data))}))}))}),[b]);var g=Object(N.c)((function(e){return e.images}));Object(n.useEffect)((function(){g.map((function(e){return console.log(e.destination_id)})),v(g.filter((function(e){return e.destination_id===t}))[0])})),Object(n.useEffect)((function(){0!==g.length&&(h.current.style.maxHeight=m?"".concat(h.current.scrollHeight,"px"):"0px")}),[h,m,g]);return 0!==g.length||null!==p||p?l.a.createElement("div",{className:"menu-container"},l.a.createElement("button",{onClick:function(){E(!m)},className:"menu_item-button"},l.a.createElement("img",{className:"accordion_item-image",src:null===p||void 0===p?void 0:p.image_url}),a),l.a.createElement("div",{className:"menu_item-content",ref:h},l.a.createElement("h4",{style:{color:"white"}},"Liikeohjeet:"),l.a.createElement("p",null,c),l.a.createElement("h4",{style:{color:"white"}},"Liikem\xe4\xe4r\xe4:"),l.a.createElement("p",null,"Tee ",i," toistoa ja ",o," setti\xe4. Pid\xe4 settien v\xe4liss\xe4 30-60 sekunnin lepotauko."))):null}),I=function(){var e=Object(N.c)((function(e){return e.machines}));return l.a.createElement("div",{className:"content",style:{background:"rgba(255, 255, 255, 0.171)",width:"80%",margin:"1% 10%"}},l.a.createElement("h1",{style:{paddingTop:"2%"}},"Valitse laite"),e.map((function(e){return l.a.createElement(A,{key:e.id,id:e.id,name:e.name,content:e.content,reps:e.repetitions,sets:e.sets})})))},x=a(8),z=a(174),H=(a(47),function(e){var t=e.id,a=Object(N.b)();Object(n.useEffect)((function(){a(function(e){return function(t,a){O.a.get("http://localhost:3003/api/images/locations/".concat(e)).then((function(e){t(L(e.data))}))}}(t))}),[a,t]);var c=Object(N.c)((function(e){return e.images}));return 0!==c.length&&c?l.a.createElement(z.a,{draggable:!0},l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{src:c[0].image_url})),l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{src:c[1].image_url}))):null}),M=function(e){var t=e.id,a=Object(N.b)();Object(n.useEffect)((function(){a(y(t))}),[a]);var c=Object(N.c)((function(e){return e.selectedLocation}));return null!==c&&c?l.a.createElement("div",null,l.a.createElement("h1",null,c.name),l.a.createElement("p",{className:"info-text"},"Osoite: ",c.address),l.a.createElement(o.b,{to:"/locations"},l.a.createElement(d.a,{ghost:!0,className:"button"},"Takaisin"))):null},K=function(){var e=Object(x.f)().id;return l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"container"},l.a.createElement(H,{id:e}),l.a.createElement(M,{id:e})))},U=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer-inner"},l.a.createElement("p",null,"Copyright 2020 \xa9 All rights reserved"),l.a.createElement("p",null,"Contact Email joona.uutela@gmail.com")))},V=(a(169),function(e){var t=e.click;return l.a.createElement("div",{className:"backdrop",onClick:function(){return t()}})}),G=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],c=t[1],i=Object(N.b)();Object(n.useEffect)((function(){i((function(e,t){O.a.get("http://localhost:3003/api/locations").then((function(t){e({type:"GET_LOCATIONS",payload:{locations:t.data}})}))})),i((function(e,t){O.a.get("http://localhost:3003/api/machines").then((function(t){e({type:"SET_MACHINE",payload:{machines:t.data}})}))}))}),[i]);var u=function(){c((function(e){return!e}))};return l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(s,{drawerHandler:u}),l.a.createElement(m,{show:a,click:u}),a&&l.a.createElement(V,{click:function(){c(!1)}}),l.a.createElement(x.c,null,l.a.createElement(x.a,{path:"/locations/:id"},l.a.createElement(K,null)),l.a.createElement(x.a,{path:"/locations"},l.a.createElement(C,null)),l.a.createElement(x.a,{path:"/exerciseinfo"},l.a.createElement(I,null)),l.a.createElement(x.a,{path:"/"},l.a.createElement(f,null))),l.a.createElement(U,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(25),P=a(79),B=a(19),D={latitude:60.45451,longitude:22.264824,zoom:12},J=Object(W.c)({locations:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LOCATIONS":return[].concat(Object(B.a)(e),Object(B.a)(t.payload.locations));default:return e}},selectedLocation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SELECTED_LOCATION":return t.payload.location;default:return e}},images:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IMAGES":return Object(B.a)(t.payload.images);default:return e}},map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MAP":return console.log(t.payload.map),t.payload.map;default:return e}},machines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MACHINE":return[].concat(Object(B.a)(e),Object(B.a)(t.payload.machines));default:return e}}}),R=Object(W.d)(J,Object(W.a)(P.a));console.log(R.getState()),i.a.render(l.a.createElement(N.a,{store:R},l.a.createElement(G,null),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},81:function(e,t,a){e.exports=a(170)},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.b2b9d1f6.chunk.js.map