(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{14:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var n=o(2),c=o.n(n),a=o(8),r=o.n(a),d=(o(14),o(9)),j=o(3),s=o(7),i=o(18),u=o(19),b=o(20),l=o(21),O=o(22),x=o(1);var p=function(t){var e=t.todo,o=t.removeTodo,c=t.updateTodo,a=Object(n.useState)(!1),r=Object(j.a)(a,2),d=r[0],p=r[1],v=Object(n.useState)(!1),h=Object(j.a)(v,2),f=h[0],m=h[1],g=Object(n.useState)(""),k=Object(j.a)(g,2),T=k[0],y=k[1],N=function(){y(e.text),p(!d)},C=e.key,S=e.text,w=f?Object(x.jsx)("span",{style:{textDecoration:"line-through"},children:S}):S,D={title:d?"apply changes":"delete todo"};return Object(x.jsxs)("div",{className:"todo",children:[!d&&Object(x.jsx)("button",{className:"toggle-done",title:"toggle done",onClick:function(){return m(!f)},children:f?Object(x.jsx)(i.a,{}):Object(x.jsx)(u.a,{})}),Object(x.jsx)("div",{className:"todo-text",children:d?Object(x.jsx)("textarea",{rows:2,value:T,onChange:function(t){return y(t.target.value)}}):w}),Object(x.jsxs)("div",{className:"todo-options",children:[Object(x.jsx)("button",{title:"toggle edit",onClick:function(){return N()},children:d?Object(x.jsx)(b.a,{}):Object(x.jsx)(l.b,{})}),Object(x.jsx)("button",Object(s.a)(Object(s.a)({},D),{},{onClick:d?function(){return c(C,T),void N()}:function(){return o(C)},children:d?Object(x.jsx)(O.a,{}):Object(x.jsx)(l.a,{})}))]})]},C)};var v=function(t){var e=t.todos,o=t.removeTodo,n=t.updateTodo;return Object(x.jsx)("div",{className:"todo-list",children:e.map((function(t){return Object(x.jsx)(p,{todo:t,removeTodo:o,updateTodo:n},t.key)}))})};var h=function(t){var e=t.addTodo,o=Object(n.useState)(""),c=Object(j.a)(o,2),a=c[0],r=c[1];return Object(x.jsxs)("div",{className:"add-todo-form",children:[Object(x.jsx)("input",{type:"text",placeholder:"New todo...",value:a,onChange:function(t){r(t.target.value)}}),Object(x.jsx)("button",{onClick:function(){e(a),r("")},children:"Add!"})]})};var f=function(){var t=Object(n.useState)([]),e=Object(j.a)(t,2),o=e[0],c=e[1];return Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{children:"TODO App"}),Object(x.jsx)(h,{addTodo:function(t){return c([].concat(Object(d.a)(o),[{key:(new Date).getTime(),text:t}]))}}),Object(x.jsx)(v,{todos:o,removeTodo:function(t){return c(o.filter((function(e){return e.key!==t})))},updateTodo:function(t,e){return c(o.map((function(o){return o.key===t?{key:t,text:e}:o})))}})]})};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8a0de81a.chunk.js.map