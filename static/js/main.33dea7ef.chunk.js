(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),l=n.n(r),i=(n(14),n(8)),s=n(5),o=n(1),m=n(4),u=function(e){var t=e.items,n=e.removeItem,a=e.editItem;return c.a.createElement("div",{className:"grocery-list"},t.map((function(e){var t=e.id,r=e.title;return c.a.createElement("article",{key:t,className:"grocery-item"},c.a.createElement("p",{className:"title"},r),c.a.createElement("div",{className:"btn-container"},c.a.createElement("button",{type:"button",className:"edit-btn"},c.a.createElement(m.a,{onClick:function(){return a(t)}})),c.a.createElement("button",{type:"button",className:"delete-btn",onClick:function(){return n(t)}},c.a.createElement(m.b,null))))})))},d=function(e){var t=e.type,n=e.msg,r=e.removeAlert,l=e.list;return Object(a.useEffect)((function(){var e=setTimeout((function(){r()}),3e3);return function(){return clearTimeout(e)}}),[l]),c.a.createElement("p",{className:"alert alert-".concat(t)},n)};var f=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)(localStorage.getItem("list")?JSON.parse(localStorage.getItem("list")):[]),m=Object(o.a)(l,2),f=m[0],b=m[1],g=Object(a.useState)(!1),E=Object(o.a)(g,2),v=E[0],p=E[1],O=Object(a.useState)(null),j=Object(o.a)(O,2),y=(j[0],j[1]),N=Object(a.useState)({show:!1,msg:"",type:""}),h=Object(o.a)(N,2),S=h[0],I=h[1],k=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";I({show:e,type:t,msg:n})},w=function(e){var t=f.find((function(t){return t.id===e}));p(!0),y(e),r(t.title)};return Object(a.useEffect)((function(){localStorage.setItem("list",JSON.stringify(f))}),[f]),c.a.createElement("section",{className:"section-center"},c.a.createElement("form",{className:"grocery-form",onSubmit:function(e){if(e.preventDefault(),n)if(n&&v)b(f.map((function(e){return e.id===w.id?Object(s.a)(Object(s.a)({},e),{},{title:n}):e}))),r(""),y(null),p(!1),k(!0,"success","item edited...");else{k(!0,"success","Item Added...");var t={id:(new Date).getTime().toString(),title:n};b([].concat(Object(i.a)(f),[t])),r("")}else k(!0,"danger","Please Enter A Value")}},S.show&&c.a.createElement(d,Object.assign({},S,{removeAlert:k,list:f})),c.a.createElement("h3",null,"Grocery List"),c.a.createElement("div",{className:"form-control"},c.a.createElement("input",{type:"text",className:"grocery",placeholder:"e.g. Eggs",value:n,onChange:function(e){r(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"submit-btn"},v?"edit":"submit"))),f.length>0&&c.a.createElement("div",{className:"grocery-container"},c.a.createElement(u,{items:f,removeItem:function(e){k(!0,"danger","item removed..."),b(f.filter((function(t){return t.id!==e})))},editItem:w}),c.a.createElement("button",{className:"clear-btn",onClick:function(){k(!0,"danger","list emptied..."),b([])}},"Clear Items")))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.33dea7ef.chunk.js.map