(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{14:function(t,e,o){},16:function(t,e,o){"use strict";o.r(e);var n=o(2),c=o.n(n),a=o(8),r=o.n(a),d=(o(14),o(3)),s=o(9),i=o(4),j=o(18),u=o(19),l=o(20),b=o(21),O=o(22),x=o(1);var f=function(t){var e=t.todo,o=t.removeTodo,c=t.updateTodo,a=t.toggleTodo,r=Object(n.useState)(!1),s=Object(i.a)(r,2),f=s[0],g=s[1],p=Object(n.useState)(""),v=Object(i.a)(p,2),h=v[0],m=v[1],T=function(){m(e.text),g(!f)},k=e.key,y=e.text,N=e.done,S=N?Object(x.jsx)("span",{style:{textDecoration:"line-through"},children:y}):y,C={title:f?"apply changes":"delete todo"};return Object(x.jsxs)("div",{className:"todo",children:[!f&&Object(x.jsx)("button",{className:"toggle-done",title:"toggle done",onClick:function(){return a(k)},children:N?Object(x.jsx)(j.a,{}):Object(x.jsx)(u.a,{})}),Object(x.jsx)("div",{className:"todo-text",children:f?Object(x.jsx)("textarea",{rows:2,value:h,onChange:function(t){return m(t.target.value)}}):S}),Object(x.jsxs)("div",{className:"todo-options",children:[Object(x.jsx)("button",{title:"toggle edit",onClick:function(){return T()},children:f?Object(x.jsx)(l.a,{}):Object(x.jsx)(b.b,{})}),Object(x.jsx)("button",Object(d.a)(Object(d.a)({},C),{},{onClick:f?function(){return c(k,h),void T()}:function(){return o(k)},children:f?Object(x.jsx)(O.a,{}):Object(x.jsx)(b.a,{})}))]})]},k)};var g=function(t){var e=t.todos,o=t.removeTodo,n=t.updateTodo,c=t.toggleTodo;return Object(x.jsx)("div",{className:"todo-list",children:e.map((function(t){return Object(x.jsx)(f,{todo:t,removeTodo:o,updateTodo:n,toggleTodo:c},t.key)}))})};var p=function(t){var e=t.addTodo,o=Object(n.useState)(""),c=Object(i.a)(o,2),a=c[0],r=c[1];return Object(x.jsxs)("div",{className:"add-todo-form",children:[Object(x.jsx)("input",{type:"text",placeholder:"New todo...",value:a,onChange:function(t){r(t.target.value)}}),Object(x.jsx)("button",{onClick:function(){a.trim()&&(e(a),r(""))},children:"Add!"})]})};var v=function(){var t=Object(n.useState)(JSON.parse(localStorage.getItem("todos"))||[]),e=Object(i.a)(t,2),o=e[0],c=e[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)("h1",{children:"TODO App"}),Object(x.jsx)(p,{addTodo:function(t){return c([].concat(Object(s.a)(o),[{key:(new Date).getTime(),text:t,done:!1}]))}}),Object(x.jsx)(g,{todos:o,removeTodo:function(t){return c(o.filter((function(e){return e.key!==t})))},updateTodo:function(t,e){return c(o.map((function(o){return o.key===t?Object(d.a)(Object(d.a)({},o),{},{text:e}):o})))},toggleTodo:function(t){return c(o.map((function(e){return e.key===t?Object(d.a)(Object(d.a)({},e),{},{done:!e.done}):e})))}})]})};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.503ac2fb.chunk.js.map