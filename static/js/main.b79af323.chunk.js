(this["webpackJsonplatest-react-course"]=this["webpackJsonplatest-react-course"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),l=n(8),s=n.n(l),i=(n(14),n(5)),r=n(2),u=(n(15),n(16),n(0)),j=function(e){var t="card "+e.className;return Object(u.jsx)("div",{className:t,children:e.children})},o=(n(18),function(e){return Object(u.jsx)("div",{className:"expenses-filter",children:Object(u.jsxs)("div",{className:"expenses-filter__control",children:[Object(u.jsx)("label",{children:"Filter by year"}),Object(u.jsxs)("select",{onChange:function(t){var n=t.target.value;e.onReceiveSelect(n)},value:e.selectVal,children:[Object(u.jsx)("option",{value:"2022",children:"2022"}),Object(u.jsx)("option",{value:"2021",children:"2021"}),Object(u.jsx)("option",{value:"2020",children:"2020"}),Object(u.jsx)("option",{value:"2019",children:"2019"})]})]})})}),d=(n(19),n(20),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(u.jsxs)("div",{className:"expense-date",children:[Object(u.jsx)("div",{className:"expense-date__month",children:t}),Object(u.jsx)("div",{className:"expense-date__year",children:a}),Object(u.jsx)("div",{className:"expense-date__day",children:n})]})}),b=function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)(j,{className:"expense-item",children:[Object(u.jsx)(d,{date:e.date}),Object(u.jsxs)("div",{className:"expense-item__description",children:[Object(u.jsx)("h2",{children:e.title}),Object(u.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},x=(n(21),function(e){return 0===e.items.length?Object(u.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expenses."}):Object(u.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(u.jsx)(b,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),O=n(9),v=(n(22),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(u.jsxs)("div",{className:"chart-bar",children:[Object(u.jsx)("div",{className:"chart-bar__inner",children:Object(u.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(u.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),h=(n(23),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(i.a)(t));return Object(u.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(u.jsx)(v,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),m=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(O.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(l){a.e(l)}finally{a.f()}return Object(u.jsx)(h,{dataPoints:n})},p=function(e){var t=Object(a.useState)("2020"),n=Object(r.a)(t,2),c=n[0],l=n[1],s=e.items.filter((function(e){return e.date.getFullYear().toString()===c}));return Object(u.jsx)("div",{children:Object(u.jsxs)(j,{className:"expenses",children:[Object(u.jsx)(o,{selectVal:c,onReceiveSelect:function(e){l(e)}}),Object(u.jsx)(m,{expenses:s}),Object(u.jsx)(x,{items:s})]})})},f=n(7),N=(n(24),n(25),function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],l=n[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),j=i[0],o=i[1],d=Object(a.useState)(""),b=Object(r.a)(d,2),x=b[0],O=b[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:+j,date:new Date(x)};e.onSaveExpenseData(n),l(""),o(""),O("")},children:[Object(u.jsxs)("div",{className:"new-expense__controls",children:[Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Title"}),Object(u.jsx)("input",{type:"text",onChange:function(e){l(e.target.value)},value:c})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Amount"}),Object(u.jsx)("input",{type:"number",min:"0.01",step:"0.01",onChange:function(e){o(e.target.value)},value:j})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Date"}),Object(u.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",onChange:function(e){O(e.target.value)},value:x})]})]}),Object(u.jsxs)("div",{className:"new-expense__actions",children:[Object(u.jsx)("button",{onClick:function(){e.onHandleCancel("cancel")},name:"cancel",children:"Cancel"}),Object(u.jsx)("button",{type:"submit",name:"addExpense",children:"Add Expense"})]})]})})}),_=function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),c=n[0],l=n[1];return Object(u.jsx)("div",{className:"new-expense",children:c?Object(u.jsx)(N,{onSaveExpenseData:function(t){var n=Object(f.a)(Object(f.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n),l(!1)},onHandleCancel:function(e){"cancel"===e&&l(!1)}}):Object(u.jsx)("button",{onClick:function(){l(!0)},name:"addNewExpBtn",children:"Add New Expense"})})},g=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}],S=function(){var e=Object(a.useState)(g),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(_,{onAddExpense:function(e){c((function(t){return[e].concat(Object(i.a)(t))}))}}),Object(u.jsx)(p,{items:n})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),l(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),w()}],[[26,1,2]]]);
//# sourceMappingURL=main.b79af323.chunk.js.map