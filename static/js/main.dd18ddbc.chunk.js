(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(5),s=n(1),b=(n(10),n(11),n(12),n(4)),d=n.n(b),r=n(0),o=function(t){var e=t.tabs,n=t.selectedTab,c=t.onTabSelected,a=e.find((function(t){return t.id===n}))||e[0];return Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:e.map((function(t){return Object(r.jsx)("li",{className:d()({"is-active":t.id===n}),"data-cy":"Tab",children:Object(r.jsx)("a",{href:"#tab-1","data-cy":"TabLink",onClick:function(){return c(t)},children:t.title})},t.id)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:a.content})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(s.useState)(l[0].id),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h1",{className:"title",children:"Selected tab is ".concat(function(){var t=l.find((function(t){return t.id===n}));return t?t.title:l[0].title}())}),Object(r.jsx)(o,{tabs:l,selectedTab:n,onTabSelected:function(t){c(t.id)}})]})};a.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dd18ddbc.chunk.js.map