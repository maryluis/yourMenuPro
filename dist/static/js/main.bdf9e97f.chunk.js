(this["webpackJsonpyour-menu"]=this["webpackJsonpyour-menu"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(28),a=n.n(s),i=(n(50),n(51),n(15)),o=n(12),l=n(0),u=function(e){var t=e.recepy,n=e.onClose;return Object(l.jsxs)("div",{className:"createDishForm recepyCard paddingOver noBorderRadius",children:[Object(l.jsx)("p",{dangerouslySetInnerHTML:{__html:t.replaceAll("\n","<br>")}}),Object(l.jsx)("button",{onClick:function(){return n(!1)},children:"\u0421\u0445\u043e\u0432\u0430\u0442\u0438"})]})},j=function(e){var t=e.basket,n=e.dish,c=e.dishOff,s=e.putDish,a=Object(r.useState)(!1),i=Object(o.a)(a,2),j=i[0],d=i[1],h=Object(r.useState)(!1),b=Object(o.a)(h,2),O=b[0],f=b[1];return Object(l.jsxs)("div",{className:"smallBorder borderTop createDishForm oneDish marginOver spaceBetweenCoulum paddingOver",children:[Object(l.jsx)("h4",{className:"textCenter",children:n.dish.name}),Object(l.jsxs)("div",{className:"forBigSize",children:[Object(l.jsx)("ul",{children:n.dish.ingredients.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsxs)("span",{className:"spaceBetween alignCenter",children:[Object(l.jsxs)("span",{className:"alignCenter",children:[e.title," "]}),Object(l.jsxs)("span",{className:"alignCenter",children:[e.howMany," ",e.ofWhat]})]})},e.title)}))}),j&&Object(l.jsx)(u,{recepy:n.dish.comment,onClose:d})]}),n.dish.comment&&Object(l.jsx)("button",{className:"forBigSize greenButton",disabled:j,onClick:function(){return d(!0)},children:"\u0414\u043e\u043a\u043b\u0430\u0434\u043d\u0456\u0448\u0435"}),Object(l.jsxs)("div",{className:"forSmallSize",children:[Object(l.jsx)("button",{className:"greenButton",disabled:O||j,onClick:function(){return f(!O)},children:"\u0406\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442\u0438"}),O&&Object(l.jsxs)("div",{className:"smallList paddingOver",children:[Object(l.jsx)("ul",{children:n.dish.ingredients.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsxs)("span",{className:"spaceBetween alignCenter",children:[Object(l.jsxs)("span",{className:"alignCenter",children:[e.title," "]}),Object(l.jsxs)("span",{className:"alignCenter",children:[e.howMany," ",e.ofWhat]})]})},e.title)}))}),Object(l.jsx)("div",{className:"flexCenter",children:Object(l.jsx)("button",{className:"alignCenter flexCenter",onClick:function(){return f(!O)},children:"\u0421\u0445\u043e\u0432\u0430\u0442\u0438"})})]}),n.dish.comment&&Object(l.jsx)("button",{className:"greenButton",disabled:j,onClick:function(){return d(!0)},children:"\u0414\u043e\u043a\u043b\u0430\u0434\u043d\u0456\u0448\u0435"}),j&&Object(l.jsx)(u,{recepy:n.dish.comment,onClose:d})]}),Object(l.jsx)("button",{className:t[n.id]&&"yellowButton",onClick:function(){t[n.id]?c(n.id,n.dish):s(n.id,n.dish)},children:t[n.id]?"\u041d\u0435 \u0445\u043e\u0447\u0443!":"\u0425\u043e\u0447\u0443!"})]})},d=n(3),h=n.n(d),b=n(10),O=n(18),f=n(19),p=n(11),x=n(9);function m(e){var t=[];for(var n in e)t.push({id:n,dish:e[n]});return t}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.name=e,this.type=t,this.ingredients=n,this.comment=r}function g(){return(g=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(L,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){return g.apply(this,arguments)},w=n(42),C=n.n(w);function N(){return(N=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get(L);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(){return N.apply(this,arguments)},A=n(43);function y(e,t){var n=[];for(var r in e){var c,s=[],a=Object(A.a)(t);try{for(a.s();!(c=a.n()).done;){var i=c.value;e[r][i]?s.push(!1):s.push(!0)}}catch(o){a.e(o)}finally{a.f()}-1!==s.indexOf(!0)?n.push(!0):n.push(!1)}return-1===n.indexOf(!1)}function k(e){var t,n=function(e){var t=[];for(var n in e)t=[].concat(Object(f.a)(t),[e[n].name]);return t}(e),r=function(e){var t=[];for(var n in e)t=[].concat(Object(f.a)(e[n].ingredients),Object(f.a)(t));return t}(e);return{titles:n,ingredients:function(e){for(var t=Object(f.a)(e),n=[],r=0;r<t.length-1;r++){for(var c=t[r],s=!1,a=r+1;a<t.length;a++)t[r].title.toUpperCase()===t[a].title.toUpperCase()&&t[r].ofWhat===t[a].ofWhat&&(c.howMany=+c.howMany+ +t[a].howMany,t.splice(a,1),s=!0);s&&(r=r--),n.push(t[r])}return n.push(t[t.length-1]),n}((t="goodType",r.sort((function(e,n){return e[t]>n[t]?1:-1}))))}}function B(){return(B=Object(O.a)(h.a.mark((function e(t){var n,r,c,s,a,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:for(n=e.sent,r=m(n.data),c={},s=0;s<t;s++)a=Math.floor(Math.random()*(r.length-1)),i=r[a],c[i.id]=i.dish,r.splice(a,1);return e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var T=function(e){return B.apply(this,arguments)};var _=function(e,t){var n={};for(var r in e){n[e[r][t]]||(n[e[r][t]]=[]);var c={};c.id=r,c.dish=e[r],n[e[r][t]].push(c)}return n};function E(){return(E=Object(O.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(F,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(e){return E.apply(this,arguments)},L="https://createmenupro-default-rtdb.firebaseio.com/.json",F="https://commentsformenu-default-rtdb.firebaseio.com/.json",H=function(e){return new Promise((function(t){return setTimeout((function(){return t(e)}),e)}))};var R=n(7),M=Object(p.b)((function(e){return{data:e&&e.newGoods}}),(function(e){return Object(x.b)({},e)}))((function(e){var t=Object(r.useState)([0]),n=Object(o.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(""),i=Object(o.a)(a,2),u=i[0],j=i[1],d=Object(r.useState)("1"),p=Object(o.a)(d,2),x=p[0],m=p[1],g=Object(r.useState)(null),w=Object(o.a)(g,2),C=w[0],N=w[1],D=Object(R.f)();return Object(l.jsxs)("div",{className:"createDishForm marginBottom",children:[Object(l.jsx)("h2",{children:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u0431\u043b\u044e\u0434\u0430"}),Object(l.jsx)("input",{type:"text",className:"mainInput",placeholder:"\u041d\u0430\u0437\u0432\u0430 \u043a\u0443\u043b\u0456\u043d\u0430\u0440\u043d\u043e\u0433\u043e \u0448\u0435\u0434\u0435\u0432\u0440\u0430",onChange:function(e){return j(e.target.value)}}),Object(l.jsx)("h4",{children:"\u0422\u0438\u043f \u0431\u043b\u044e\u0434\u0430"}),Object(l.jsxs)("select",{onChange:function(e){return m(e.target.value)},children:[Object(l.jsx)("option",{value:"1",children:"\u041f\u0435\u0440\u0448\u0430 \u0441\u0442\u0440\u0430\u0432\u0430"}),Object(l.jsx)("option",{value:"2",children:"\u0414\u0440\u0443\u0433\u0430 \u0441\u0442\u0440\u0430\u0432\u0430"}),Object(l.jsx)("option",{value:"3",children:"\u041c'\u044f\u0441\u043d\u0435"}),Object(l.jsx)("option",{value:"4",children:"\u0421\u0430\u043b\u0430\u0442"}),Object(l.jsx)("option",{value:"5",children:"\u0414\u0435\u0441\u0435\u0440\u0442"}),Object(l.jsx)("option",{value:"6",children:"\u0413\u0430\u0440\u043d\u0456\u0440"}),Object(l.jsx)("option",{value:"7",children:"\u0428\u0432\u0438\u0434\u043a\u0435 \u0433\u043e\u0442\u0443\u0432\u0430\u043d\u043d\u044f"}),Object(l.jsx)("option",{value:"8",children:"\u0406\u043d\u0448\u0435"})]}),Object(l.jsx)("h4",{className:"toIngr",children:"\u0429\u043e \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e:"}),Object(l.jsxs)("div",{children:[c.map((function(e){return Object(l.jsx)(ze,{id:e},e)})),Object(l.jsx)("div",{className:"btnCenter",children:Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),s([].concat(Object(f.a)(c),[c.length]))},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0456\u043d\u0433\u0440\u0435\u0434\u0456\u0454\u043d\u0442"})})]}),Object(l.jsx)("textarea",{onChange:function(e){return N(e.target.value)},placeholder:"\u042f\u043a \u0433\u043e\u0442\u0443\u0432\u0430\u0442\u0438? (\u0437\u0430 \u0431\u0430\u0436\u0430\u043d\u043d\u044f\u043c)"}),Object(l.jsx)("button",{disabled:u.length<2||!e.data||y(e.data,["title","howMany"]),type:"submit",onClick:function(){var t=Object(O.a)(h.a.mark((function t(n){var r,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(c in n.preventDefault(),r=Object(b.a)({},e.data))0!==r[c].title.length&&0!==r[c].howMany.length||delete r[c];return t.next=5,S(new v(u,x,r,C));case 5:D.push("/dishes-list/");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438"})]})})),Y=n(22);var W=function(e){return{type:"ADD_GOOD",data:e}},z=function(e,t,n,r,c,s){return{type:"ASYNC_ADD_GOOD",data:{id:t,title:e,howMany:n,ofWhat:r,goodType:c}}},U=n(8),G=n(45),P=h.a.mark(q),J=h.a.mark(K),V=h.a.mark(Z),Q=h.a.mark(X);function q(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(U.c)(Te(e.id,e.dish));case 2:case"end":return t.stop()}}),P)}function K(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(U.c)(Ee(e.id,e.dish));case 2:case"end":return t.stop()}}),J)}function Z(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.c)(Le());case 2:case"end":return e.stop()}}),V)}function X(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.d)("ASYNC_DISH_ADD",q);case 2:return e.next=4,Object(U.d)("ASYNC_DISH_DELETE",K);case 4:return e.next=6,Object(U.d)("ASYNC_CLEAR_DISHES",Z);case 6:case"end":return e.stop()}}),Q)}var $=X,ee=h.a.mark(re),te=h.a.mark(ce),ne=h.a.mark(se);function re(e){var t;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=k(e.data),n.next=3,Object(U.c)(He(t));case 3:case"end":return n.stop()}}),ee)}function ce(e){var t,n;return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,T(e.data);case 2:return t=r.sent,r.next=5,Object(U.c)(je(t));case 5:return r.next=7,k(t);case 7:return n=r.sent,r.next=10,Object(U.c)(Me(n));case 10:case"end":return r.stop()}}),te)}function se(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.f)("STANDART_LIST",re);case 2:return e.next=4,Object(U.d)("FAST_LIST",ce);case 4:case"end":return e.stop()}}),ne)}var ae=h.a.mark(oe),ie=h.a.mark(le);function oe(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(U.c)(Ye(+e.count));case 2:case"end":return t.stop()}}),ae)}function le(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.d)("ASYNC_CHANGE_COUNT",oe);case 2:case"end":return e.stop()}}),ie)}var ue=le;var je=function(e){return{type:"ASYNC_FAST_DISHES",dishes:e}},de=h.a.mark(be),he=h.a.mark(Oe);function be(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(U.c)({type:"FAST_DISHES",dishes:e.dishes});case 2:case"end":return t.stop()}}),de)}function Oe(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.d)("ASYNC_FAST_DISHES",be);case 2:case"end":return e.stop()}}),he)}var fe=Oe,pe=h.a.mark(Se),xe=h.a.mark(we),me=h.a.mark(Ce),ve=h.a.mark(Ne),ge=h.a.mark(De);function Se(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H(1e3);case 2:return t.next=4,Object(U.c)(W(e));case 4:case"end":return t.stop()}}),pe)}function we(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.e)("ASYNC_ADD_GOOD",Se);case 2:case"end":return e.stop()}}),xe)}function Ce(){var e;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(U.b)(D);case 2:return e=t.sent,t.next=5,Object(U.c)(ye(e));case 5:case"end":return t.stop()}}),me)}function Ne(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.d)("GET_DISHES",Ce);case 2:case"end":return e.stop()}}),ve)}function De(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.a)([fe(),we(),Ne(),$(),se(),ue()]);case 2:case"end":return e.stop()}}),ge)}var Ae=Object(G.a)();var ye=function(e){return{type:"PUT_DISHES",payload:e}},ke=function(){return{type:"GET_DISHES"}};var Be=function(e,t){return{type:"ASYNC_DISH_ADD",id:e,dish:t}},Te=function(e,t){return{type:"DISH_ADD",id:e,dish:t}},_e=function(e,t){return{type:"ASYNC_DISH_DELETE",id:e,dish:t}},Ee=function(e,t){return{type:"DISH_DELETE",id:e,dish:t}},Ie=function(){return{type:"ASYNC_CLEAR_DISHES"}},Le=function(){return{type:"CLEAR_DISHES"}};var Fe=function(e){return{type:"STANDART_LIST",data:e}},He=function(e){return{type:"PUT_STANDART_LIST",data:e}},Re=function(e){return{type:"FAST_LIST",data:e}},Me=function(e){return{type:"PUT_FAST_LIST",data:e}};var Ye=function(e){return{type:"CHANGE_COUNT",count:e}};var We=Object(x.e)(Object(x.c)({promiseData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"PUT_DISHES"===t.type?Object(b.a)(Object(b.a)({},e),{},{dishes:t.payload.data}):e},dishesBask:function(e,t){var n=t.type,r=t.id,c=t.dish;return void 0===e&&(e={}),"DISH_ADD"===n&&(e=Object(b.a)(Object(b.a)({},e),{},Object(Y.a)({},r,c))),"DISH_DELETE"===n&&(delete e[r],e=Object(b.a)({},e)),"CLEAR_DISHES"===n&&(e={}),e},newGoods:function(e,t){var n=t.type,r=t.data;return void 0===e&&(e={}),"ADD_GOOD"===n&&(e=Object(b.a)(Object(b.a)({},e),{},Object(Y.a)({},r.data.id,{title:r.data.title,howMany:r.data.howMany,ofWhat:r.data.ofWhat,goodType:r.data.goodType}))),e},shopList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.data;return"PUT_STANDART_LIST"===n||"PUT_FAST_LIST"===n?Object(b.a)({},r):e},countFastList:function(e,t){var n=t.type,r=t.count,c=void 0===r?1:r;return void 0===e&&(e={count:c}),"CHANGE_COUNT"===n&&(e=Object(b.a)(Object(b.a)({},e),{},{count:c})),e},fastDishList:function(e,t){var n=t.type,r=t.dishes;return void 0===e&&(e={}),"FAST_DISHES"===n&&(e=Object(b.a)({},r)),e},typesOfDish:function(e){return void 0===e&&(e={1:"\u041f\u0435\u0440\u0448\u0456 \u0441\u0442\u0440\u0430\u0432\u0438",2:"\u0414\u0440\u0443\u0433\u0456 \u0441\u0442\u0440\u0430\u0432\u0438",3:"\u041c'\u044f\u0441\u043d\u0435",4:"\u0421\u0430\u043b\u0430\u0442\u0438",5:"\u0414\u0435\u0441\u0435\u0440\u0442\u0438",6:"\u0413\u0430\u0440\u043d\u0456\u0440\u0438",7:"\u0428\u0432\u0438\u0434\u043a\u0456 \u0441\u0442\u0440\u0430\u0432\u0438",8:"\u0406\u043d\u0448\u0435"}),e}}),Object(x.a)(Ae));Ae.run(De);var ze=Object(p.b)((function(e){return{state:e,count:e.count}}),(function(e){return Object(x.b)({onAdd:z},e)}))((function(e){var t=e.onAdd,n=e.id,c=Object(r.useState)(""),s=Object(o.a)(c,2),a=s[0],i=s[1],u=Object(r.useState)(0),j=Object(o.a)(u,2),d=j[0],h=j[1],b=Object(r.useState)("\u0433\u0440"),O=Object(o.a)(b,2),f=O[0],p=O[1],x=Object(r.useState)("1"),m=Object(o.a)(x,2),v=m[0],g=m[1];return Object(r.useEffect)((function(){t(a,n,d,f,v)}),[a,n,t,d,f,v]),Object(l.jsxs)("div",{className:"oneIngrForm",children:[Object(l.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430 \u0456\u043d\u0433\u0440\u0435\u0434\u0456\u043d\u0442\u0443",onChange:function(e){return i(e.target.value)}}),Object(l.jsx)("input",{type:"number",placeholder:"\u0441\u043a\u0456\u043b\u044c\u043a\u0438",onChange:function(e){return h(+e.target.value)}}),Object(l.jsxs)("span",{className:"spaceBetween",children:[Object(l.jsx)("span",{children:"\u0447\u043e\u0433\u043e"}),Object(l.jsxs)("select",{onChange:function(e){return p(e.target.value)},children:[Object(l.jsx)("option",{children:"\u0433\u0440"}),Object(l.jsx)("option",{children:"\u0448\u0442"}),Object(l.jsx)("option",{children:"\u0431\u0430\u043d\u043a\u0430"}),Object(l.jsx)("option",{children:"\u0437\u0443\u0431\u0447\u0438\u043a\u0456\u0432"}),Object(l.jsx)("option",{children:"\u043f\u0430\u0447\u043a\u0430"}),Object(l.jsx)("option",{children:"\u0441\u0442.\u043b"}),Object(l.jsx)("option",{children:"\u043f\u043b\u044f\u0448\u043a\u0430"}),Object(l.jsx)("option",{children:"\u0433\u043e\u043b\u0456\u0432\u043a\u0430"})]})]}),Object(l.jsxs)("span",{className:"spaceBetween",children:[Object(l.jsx)("span",{children:"\u0442\u0438\u043f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0443"}),Object(l.jsxs)("select",{onChange:function(e){return g(e.target.value)},children:[Object(l.jsx)("option",{value:"1",children:"\u041e\u0432\u043e\u0447\u0456\\\u0444\u0440\u0443\u043a\u0442\u0438"}),Object(l.jsx)("option",{value:"2",children:"\u041c'\u044f\u0441\u043e"}),Object(l.jsx)("option",{value:"3",children:"\u041c\u043e\u043b\u043e\u0447\u043d\u0438\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442"}),Object(l.jsx)("option",{value:"4",children:"\u041a\u043e\u043d\u0441\u0435\u0440\u0432\u0438"}),Object(l.jsx)("option",{value:"5",children:"\u041a\u0440\u0443\u043f\u0438"}),Object(l.jsx)("option",{value:"6",children:"\u0421\u043f\u0435\u0446\u0456\u0457"}),Object(l.jsx)("option",{value:"7",children:"\u0406\u043d\u0448\u0435"})]})]})]})})),Ue=function(){return Object(l.jsx)("div",{className:"columnMenu",children:Object(l.jsxs)("ul",{className:"smallBorder flexCoulumn absoluteMenu greyBachground",children:[Object(l.jsx)("li",{className:"borderBottom",children:Object(l.jsx)(i.b,{to:"/",children:"\u041d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0443"})}),Object(l.jsx)("li",{className:"borderBottom",children:Object(l.jsx)(i.b,{to:"/dishes-list/",children:"\u041e\u0431\u0440\u0430\u0442\u0438 \u0441\u043c\u0430\u0447\u043d\u044e\u0447\u0456 \u0441\u0442\u0440\u0430\u0432\u0438"})}),Object(l.jsx)("li",{className:"borderBottom",children:Object(l.jsx)(i.b,{to:"/create-dish/",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0441\u043c\u0430\u0447\u043d\u044e\u0447\u0443 \u0441\u0442\u0440\u0430\u0432\u0443"})}),Object(l.jsx)("li",{className:"borderBottom",children:Object(l.jsx)(i.b,{to:"/create-message/",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432\u0456\u0434\u0433\u0443\u043a"})})]})})},Ge=function(){var e=Object(r.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{onClick:function(){return c(!n)},className:"",children:[Object(l.jsx)("img",{alt:"logo",className:"logo",src:"../images/body/32399bentobox_98893.png",width:"50",height:"50"}),n&&Object(l.jsx)(Ue,{})]})},Pe=function(){return Object(l.jsxs)("header",{className:"footer spaceBetween zIndexUp borderBottom",children:[Object(l.jsxs)("div",{className:"flexRow left",children:[Object(l.jsx)(Ge,{}),Object(l.jsx)($e,{classStyle:"toFastStartHeader"})]}),Object(l.jsx)(rt,{})]})},Je=function(){return Object(l.jsx)("footer",{className:"footer alignCenter borderTop",children:Object(l.jsxs)("div",{className:"spaceBetween noMargin",children:[Object(l.jsx)("span",{className:"smallLetters marginOverSmall",children:Object(l.jsxs)("a",{target:"_blank",without:"true",rel:"noreferrer",href:"https://www.linkedin.com/in/%D0%BC%D0%B0%D1%80%D0%B8%D1%8F-%D0%B3%D0%BB%D0%B0%D0%BC%D0%B0%D0%B7%D0%B4%D0%B0-956134208/",children:["\xa9  \u0421\u0430\u0439\u0442 \u0432\u0456\u0434 \u041c. \u0410. \u0413\u043b\u0430\u043c\u0430\u0437\u0434\u0430 2021",Object(l.jsx)("img",{className:"iconSize marginOverSmall forBigSize",alt:"Linkedin icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABo0lEQVRoge2ZvUrEQBRGT1SwEdfCWiz0ESzFUsFd1lYUO0ufwUIWfBCfYTs1iqXvYCfq4iImlQhrEUUTZjIz+b24c+A24c7M+chO/hY8Hk9R+kAIxMCk5YqBa6DnGuJcgLyuBrYh+gJkTdW1CRIKEDXVVVY6UASJgAWbxC0SAYt/D6iCTJpxKU3KfaYti6qZ2iBPwD6w/F2HwKhqqarIu1psK/rbulyncN3sHeBdcewtZ0xdlNrsW4pjm8Vd6iXvdI6AI373yAHwbBgj8qclCX8fEY1rkEBTLj13JPeiFWCe5JlpAzgFXh19crHeYJoxOl6AHcPaS8DQ4GBaRylVZZA1m8WBOeDW4NFqEBdWgY+CLkqpuoLMWvRcuLg0fdU6AR6BT+ABOM7pHZZdrK4zsqeZU/f+vV7QpfYgN5o5Q01/R2qQsWbOsaY/cHFxfdZS9WfH2PQUmTd3zNQ+oojFB5GGDyINH0Qa/yaI/4oiDVWQuHELd7KfbZVB7hsQKYuVYw/zi3/btWubeCBAVldntiF+6JL8exoJkI+ASxzOhMfjSfMFRzMGRV1gLKEAAAAASUVORK5CYII="})]})}),Object(l.jsxs)("span",{className:"smallLetters marginOverSmall textEnd flexColumn",children:[Object(l.jsxs)("a",{target:"_blank",without:"true",rel:"noreferrer",href:"https://www.instagram.com/victoriaborodinova/",children:["\xa9 \u0424\u043e\u0442\u043e \u0432\u0456\u0434 victoriaborodinova",Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-instagram marginOverSmall iconSize forBigSize",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"})})]}),Object(l.jsx)("a",{className:"forBigSize",target:"_blank",without:"true",rel:"noreferrer",href:"https://icons8.com/icon/85141/\u043b\u0438\u043d\u043a\u0435\u0434\u0438\u043d",children:"\u041b\u0438\u043d\u043a\u0435\u0434\u0418\u043d icon by Icons8"})]})]})})},Ve=function(e){var t=e.dishArr,n=e.typeName,r=e.bask,c=e.clearBask,s=e.dishOffBask,a=e.dishToBask;return Object(l.jsxs)("div",{className:"flexColumn flexCenter width createDishForm",children:[Object(l.jsx)("h3",{children:n}),Object(l.jsx)("div",{className:"flexRow",children:t.map((function(e){return Object(l.jsx)(j,{dish:e,basket:r,dishClear:c,goodsArr:e.ingredients,dishOff:s,putDish:a,comment:e.comment},e.id)}))})]})},Qe=Object(p.b)((function(e){return{dishes:m(e.promiseData.dishes),dishesSort:m(_(e.promiseData.dishes,"type")),state:e,bask:e.dishesBask,types:e.typesOfDish}}),(function(e){return Object(x.b)({getData:ke,dishToBask:Be,dishOffBask:_e},e)}))((function(e){e.dishes;var t=e.types,n=e.dishesSort,c=e.clearBask,s=e.getData,a=e.bask,i=(e.state,e.dishToBask),o=e.dishOffBask;return Object(r.useEffect)((function(){s()}),[s]),Object(l.jsx)("div",{className:"dishList flexRow flexWrap marginForSmall",children:n.length>0?n.map((function(e){return Object(l.jsx)(Ve,{dishArr:e.dish,typeName:t[e.id],bask:a,clearBask:c,dishOffBask:o,dishToBask:i},e.id)})):Object(l.jsx)("div",{className:"spinner-grow text-secondary",role:"status"})})})),qe=function(){return Object(l.jsx)("main",{className:"main",children:Object(l.jsxs)(R.c,{children:[Object(l.jsx)(R.a,{path:"/dishes-list/",component:Qe}),Object(l.jsx)(R.a,{path:"/create-dish/",component:M}),Object(l.jsx)(R.a,{path:"/dishes-bask",component:et}),Object(l.jsx)(R.a,{path:"/shop-list/",component:st}),Object(l.jsx)(R.a,{path:"/fast-list/",component:ct}),Object(l.jsx)(R.a,{path:"/create-message/",component:nt}),Object(l.jsx)(R.a,{path:"/success/",component:Ze}),Object(l.jsx)(R.a,{path:"/",component:Xe,exact:!0}),Object(l.jsx)(R.a,{component:Ke,exact:!0})]})})},Ke=function(){var e=Object(R.f)();return Object(l.jsxs)("div",{className:"createDishForm paddingOver marginTop",children:[Object(l.jsx)("p",{children:"\u041e\u0439, \u0437\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u0432\u0438 \u0449\u043e\u0441\u044c \u0437\u0430\u0431\u043b\u0443\u043a\u0430\u043b\u0438. \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0456\u043d\u0448\u0443 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443."}),Object(l.jsx)("button",{onClick:function(){return e.push("/")},children:"\u041d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0443"})]})},Ze=function(){var e=Object(R.f)();return Object(l.jsxs)("div",{className:"createDishForm paddingOver marginTop",children:[Object(l.jsx)("p",{children:"\u0414\u044f\u043a\u0443\u0454\u043c\u043e \u0437\u0430 \u0432\u0456\u0434\u0433\u0443\u043a"}),Object(l.jsx)("button",{onClick:function(){return e.push("/")},children:"\u041d\u0430 \u0433\u043e\u043b\u043e\u0432\u043d\u0443"})]})},Xe=function(){var e=Object(R.f)();return Object(l.jsxs)("div",{className:"createDishForm paddingOver marginTop",children:[Object(l.jsx)("p",{children:"\u041f\u0440\u0438\u0432\u0456\u0442! \u041b\u0430\u0441\u043a\u0430\u0432\u043e \u043f\u0440\u043e\u0441\u0438\u043c\u043e \u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443 \u0429\u0438\u0440\u043e\u0421\u043c\u0430\u043a\u0443\u0439. \u041c\u0438 \u0437\u0430 \u0442\u0435, \u0449\u043e\u0431 \u0449\u0438\u0440\u043e \u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044f \u0440\u0435\u0446\u0435\u043f\u0442\u0430\u043c\u0438 \u0442\u0430 \u0437\u0440\u0443\u0447\u043d\u043e \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438 \u0441\u043f\u0438\u0441\u043a\u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0456\u0432 \u0434\u043b\u044f \u043d\u0430\u0439\u0449\u0438\u0440\u0456\u0448\u0438\u0445 \u0441\u0442\u0440\u0430\u0432. \u0410 \u0432 \u0446\u044c\u043e\u043c\u0443 \u0434\u043e\u043f\u043e\u043c\u043e\u0436\u0435 \u043d\u0430\u0448 \u0441\u0435\u0440\u0432\u0456\u0441."}),Object(l.jsx)("p",{children:"\u0426\u0435 \u0434\u0440\u0443\u0433\u0430 \u0432\u0435\u0440\u0441\u0456\u044f \u043d\u0430\u0448\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0456\u0441\u0443. \u0422\u0435\u043f\u0435\u0440, \u044f\u043a\u0449\u043e \u0432\u0438 \u043d\u0435 \u0443\u044f\u0432\u043b\u044f\u0454\u0442\u0435 \u0449\u043e \u043f\u0440\u0438\u0433\u043e\u0442\u0443\u0432\u0430\u0442\u0438, \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0431\u0440\u0430\u0442\u0438 \u043a\u0456\u043b\u044c\u043a\u0456\u0442\u044c \u0431\u043b\u044e\u0434, \u0430 \u043c\u0438 \u0432\u0430\u043c \u0437\u0430\u043f\u0440\u043e\u043f\u043e\u043d\u0443\u0454\u043c\u043e \u0441\u0442\u0440\u0430\u0432\u0438 \u043d\u0430 \u0432\u0438\u0431\u0456\u0440, \u0442\u0430 \u043f\u0456\u0434\u0433\u043e\u0442\u0443\u0454\u043c\u043e \u0441\u043f\u0438\u0441\u043e\u043a, \u043d\u0430 \u0432\u0438\u043f\u0430\u0434\u043e\u043a, \u044f\u043a\u0449\u043e \u0432\u0441\u0456 \u0441\u0442\u0440\u0430\u0432\u0438 \u0432\u0430\u043c \u0441\u043f\u043e\u0434\u043e\u0431\u0430\u044e\u0442\u044c\u0441\u044f."}),Object(l.jsx)("p",{children:"\u0422\u0430\u043a\u043e\u0436 \u043c\u0438 \u0434\u043e\u0434\u0430\u043b\u0438 \u0441\u043e\u0440\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0441\u0442\u0440\u0430\u0432 \u0437\u0430 \u0457\u0445 \u0442\u0438\u043f\u043e\u043c - \u043f\u0435\u0440\u0448\u0430 \u0441\u0442\u0440\u0430\u0432\u0430, \u0434\u0440\u0443\u0433\u0430, \u0434\u0435\u0441\u0435\u0440\u0442 \u0442\u0430 \u0456\u043d. \u041e\u043a\u0440\u0456\u043c \u0442\u043e\u0433\u043e \u0442\u0440\u043e\u0448\u043a\u0438 \u0437\u043c\u0456\u043d\u0438\u043b\u0438 \u0437\u043e\u0432\u043d\u0456\u0448\u043d\u0456\u0439 \u0432\u0438\u0433\u043b\u044f\u0434 \u0434\u043b\u044f \u043c\u043e\u0431\u0456\u043b\u044c\u043d\u0438\u0445 \u043f\u0440\u0438\u0441\u0442\u0440\u043e\u0407\u0432 \u0442\u0430 \u0434\u043e\u0434\u0430\u043b\u0438 \u0444\u043e\u0440\u043c\u0443 \u0437\u0432\u043e\u0440\u043e\u0442\u043d\u044c\u043e\u0433\u043e \u0437\u0432'\u044f\u0437\u043a\u0443 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u043f\u043e\u0431\u0430\u0436\u0430\u043d\u044c \u0442\u0430 \u0437\u0430\u0443\u0432\u0430\u0436\u0435\u043d\u044c."}),Object(l.jsx)("p",{children:"\u041d\u0443\u043c\u043e \u0449\u0438\u0440\u043e \u0441\u043c\u0430\u043a\u0443\u0432\u0430\u0442\u0438!"}),Object(l.jsxs)("div",{className:"flexRow flexWrap",children:[Object(l.jsx)("button",{onClick:function(){return e.push("/dishes-list/")},children:"\u0414\u043e \u0449\u0438\u0440\u0438\u0445 \u0441\u0442\u0440\u0430\u0432"}),Object(l.jsx)("button",{onClick:function(){return e.push("/create-dish/")},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043d\u043e\u0432\u0443 \u0441\u0442\u0440\u0430\u0432\u0443"}),Object(l.jsx)("button",{onClick:function(){return e.push("/create-message/")},children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u0432\u0456\u0434\u0433\u0443\u043a"})]})]})},$e=Object(p.b)((function(e){return{state:e}}),(function(e){return Object(x.b)({getList:Re},e)}))((function(e){e.state;var t=e.getList,n=e.classStyle,c=Object(R.f)(),s=Object(r.useState)(1),a=Object(o.a)(s,2),i=a[0],u=a[1];return Object(l.jsxs)("div",{className:"smallLetters flexRow noMargin ".concat(n),children:[Object(l.jsxs)("div",{className:"flexColumn",children:[Object(l.jsx)("span",{className:"marginOverSmall",children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0431\u043b\u044e\u0434"}),Object(l.jsxs)("select",{onChange:function(e){return u(e.target.value)},children:[Object(l.jsx)("option",{value:"1",children:"1"}),Object(l.jsx)("option",{value:"2",children:"2"}),Object(l.jsx)("option",{value:"3",children:"3"}),Object(l.jsx)("option",{value:"4",children:"4"}),Object(l.jsx)("option",{value:"5",children:"5"}),Object(l.jsx)("option",{value:"6",children:"6"}),Object(l.jsx)("option",{value:"7",children:"7"}),Object(l.jsx)("option",{value:"8",children:"8"})]})]}),Object(l.jsx)("button",{onClick:Object(O.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(i);case 2:return e.next=4,H(1e3);case 4:c.push("/fast-list/");case 5:case"end":return e.stop()}}),e)}))),children:"\u0417\u0430\u043f\u0440\u043e\u043f\u043e\u043d\u0443\u0439\u0442\u0435"})]})})),et=Object(p.b)((function(e){return{dishes:m(e.dishesBask),state:e,bask:e.dishesBask}}),(function(e){return Object(x.b)({dishOffBask:_e,clearBask:Ie,createList:Fe},e)}))((function(e){var t=e.dishes,n=e.bask,r=e.state,c=e.createList,s=e.clearBask,a=e.dishOffBask,o=Object(R.f)();return Object(l.jsxs)(l.Fragment,{children:[t.length>0&&Object(l.jsxs)("div",{className:"flexColumn marginForSmall",children:[Object(l.jsx)("div",{className:"flexRow flexWrap",children:n&&t.map((function(e){return Object(l.jsx)(j,{dish:e,basket:n,dishClear:s,goodsArr:e.dish.ingredients,dishOff:a,state:r.promiseData,comment:e.dish.comment},e.id)}))}),Object(l.jsxs)("div",{className:"flexRow flexCenter flexWrap",children:[Object(l.jsx)("button",{onClick:function(){return s()},children:"\u041f\u0435\u0440\u0435\u0445\u043e\u0442\u0456\u043b\u043e\u0441\u044f"}),Object(l.jsx)("button",{onClick:function(){c(n),s(),o.push("/shop-list/")},children:"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u043f\u0438\u0441\u043e\u043a"})]})]}),0===t.length&&Object(l.jsxs)("div",{className:"createDishForm paddingOver",children:[Object(l.jsx)("p",{children:"\u041e\u0439, \u0432\u0438 \u0449\u0435 \u043d\u0435 \u043e\u0431\u0440\u0430\u043b\u0438 \u0436\u043e\u0434\u043d\u043e\u0433\u043e \u0431\u043b\u044e\u0434\u0430. \u041f\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044c \u0434\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u0440\u0435\u0446\u0435\u043f\u0442\u0456\u0432, \u043f\u0456\u0434\u0431\u0435\u0440\u0456\u0442\u044c \u0440\u0430\u043d\u0434\u043e\u043c\u043d\u043e"}),Object(l.jsx)("button",{className:"flexCenter",children:Object(l.jsx)(i.b,{to:"/dishes-list/",children:"\u0414\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u0431\u043b\u044e\u0434"})}),Object(l.jsx)($e,{classStyle:"fastListBottom"})]})]})})),tt=Object(p.b)((function(e){return{list:e.shopList}}),(function(e){return Object(x.b)({},e)}))((function(e){var t=e.list;return Object(l.jsxs)("div",{className:"createDishForm",children:[Object(l.jsx)("h3",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0431\u043b\u044e\u0434"}),Object(l.jsx)("ul",{children:t.titles&&t.titles.map((function(e){return Object(l.jsx)("li",{children:e},e)}))}),Object(l.jsx)("h3",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u0456\u0432"}),Object(l.jsx)("ul",{className:"noPadding numbers",children:t.ingredients&&t.ingredients.map((function(e){return Object(l.jsxs)("li",{className:"spaceBetween alignCenter",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"5",height:"5",fill:"currentColor",className:"bi bi-circle-fill marginOverSmall",viewBox:"0 0 16 16",children:Object(l.jsx)("circle",{cx:"8",cy:"8",r:"8"})}),Object(l.jsx)("span",{className:"marginOverSmall",children:e.title})]}),Object(l.jsxs)("span",{className:"marginOverSmall",children:[e.howMany," ",e.ofWhat]})]},e.title+e.ofWhat)}))})]})})),nt=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(null),a=Object(o.a)(s,2),i=a[0],u=a[1],j=Object(R.f)();return Object(l.jsxs)("div",{className:"createDishForm marginBottom",children:[Object(l.jsx)("h4",{children:"\u0404 \u043f\u043e\u0431\u0430\u0436\u0430\u043d\u043d\u044f, \u043f\u0440\u043e\u043f\u043e\u0437\u0438\u0446\u0456\u0456 \u0447\u0438 \u0437\u0430\u0443\u0432\u0430\u0436\u0435\u043d\u043d\u044f?"}),Object(l.jsx)("input",{type:"text",className:"mainInput",placeholder:"\u0412\u0430\u0448\u0435 \u0456\u043c'\u044f",onChange:function(e){return c(e.target.value)}}),Object(l.jsx)("textarea",{onChange:function(e){return u(e.target.value)},placeholder:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440"}),Object(l.jsx)("button",{disabled:!n||!i,onClick:function(){var e={};e.name=n,e.comment=i,I(e),j.push("/success/")},children:"\u041d\u0430\u0434\u0456\u0441\u043b\u0430\u0442\u0438"})]})},rt=Object(p.b)((function(e){return{bask:Object.keys(e.dishesBask).length}}),(function(e){return Object(x.b)({},e)}))((function(e){var t=e.bask;return Object(l.jsx)("div",{className:"flexCenter",children:Object(l.jsxs)(i.b,{to:"/dishes-bask",children:[Object(l.jsx)("span",{className:"marginOverSmall",children:t}),Object(l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-record-circle marginOverSmall",viewBox:"0 0 16 16",children:[Object(l.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(l.jsx)("path",{d:"M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"})]})]})})})),ct=Object(p.b)((function(e){return{dishes:m(e.fastDishList),state:e,bask:e.dishesBask}}),(function(e){return Object(x.b)({dishOffBask:_e,dishAdd:Be},e)}))((function(e){var t=e.dishes,n=e.bask,c=(e.state,e.dishOffBask),s=e.dishAdd,a=Object(R.f)();return Object(r.useEffect)((function(){return!t.length&&a.push("/")}),[t,a]),Object(l.jsxs)("div",{className:"flexColumn marginForSmall flexCenter",children:[Object(l.jsx)("h3",{className:"width createDishForm textCenter",children:"\u041c\u0438 \u0432\u0430\u043c \u043f\u0440\u043e\u043f\u043e\u043d\u0443\u0454\u043c\u043e \u0446\u0456 \u0431\u043b\u044e\u0434\u0430"}),Object(l.jsx)("div",{className:"flexRow flexWrap",children:t.map((function(e){return Object(l.jsx)(j,{dish:e,basket:n,putDish:s,goodsArr:e.dish.ingredients,dishOff:c,comment:e.dish.comment},e.id)}))}),Object(l.jsxs)("div",{className:"width createDishForm paddingOver flexCenter",children:[Object(l.jsx)("h3",{className:"textCenter",children:"\u042f\u043a\u0449\u043e \u0432\u0441\u0435 \u043f\u043e\u0434\u043e\u0431\u0430\u0454\u0442\u044c\u0441\u044f - \u043b\u043e\u0432\u0456\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a"}),Object(l.jsx)(tt,{})]}),Object(l.jsxs)("div",{className:"width createDishForm paddingOver",children:[Object(l.jsx)("h3",{className:"textCenter",children:"\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u043f\u043e\u0434\u043e\u0431\u0430\u0454\u0442\u044c\u0441\u044f? \u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437"}),Object(l.jsx)($e,{classStyle:"fastListBottom"})]})]})})),st=Object(p.b)((function(e){return{list:e.shopList}}),(function(e){return Object(x.b)({},e)}))((function(e){var t=e.list,n=Object(R.f)();return Object(r.useEffect)((function(){!t.titles&&n.push("/")}),[t,n]),Object(l.jsx)(tt,{})})),at=n(44);var it=function(){return Object(l.jsx)(p.a,{store:We,children:Object(l.jsxs)(i.a,{history:at.a,children:[Object(l.jsx)(Pe,{}),Object(l.jsx)(qe,{}),Object(l.jsx)(Je,{})]})})},ot=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(it,{})}),document.getElementById("root")),ot()}},[[77,1,2]]]);
//# sourceMappingURL=main.bdf9e97f.chunk.js.map