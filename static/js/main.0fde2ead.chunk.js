(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),o=a.n(r),l=(a(13),a(1)),u=a(7);function i(e){var t=e.toString(16);return 1==t.length?"0"+t:t}var s=function(e,t,a){return"#"+i(e)+i(t)+i(a)},m=function(e){var t=e.rgb,a=e.weight,r=e.index,o=e.hexColor,i=Object(n.useState)(!1),m=Object(l.a)(i,2),b=m[0],p=m[1],f=t.join(","),E=(s.apply(void 0,Object(u.a)(t)),"#".concat(o));return Object(n.useEffect)((function(){var e=setTimeout((function(){p(!1)}),3e3);return function(){return clearTimeout(e)}}),[b]),c.a.createElement("article",{className:"color ".concat(r>10&&"color-light"),style:{backgroundColor:"rgb(".concat(f,")")},onClick:function(){p(!0),navigator.clipboard.writeText(E)}},c.a.createElement("p",{className:"percent-value"},a,"%"),c.a.createElement("p",{className:"color-value"},E),b&&c.a.createElement("p",{className:"alert"},"copied to clipboard"))},b=a(4),p=a.n(b);var f=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),u=Object(l.a)(o,2),i=u[0],s=u[1],b=Object(n.useState)(new p.a("#f15025").all(10)),f=Object(l.a)(b,2),E=f[0],g=f[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"container"},c.a.createElement("h3",null,"color generator"),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();try{var t=new p.a(a).all(10);g(t)}catch(i){s(!0),console.log(i)}}},c.a.createElement("input",{type:"text",value:a,onChange:function(e){return r(e.target.value)},placeholder:"#f15025",className:"".concat(i?"error":null)}),c.a.createElement("button",{className:"btn",type:"submit"},"submit"))),c.a.createElement("section",{className:"colors"},E.map((function(e,t){return c.a.createElement(m,Object.assign({key:t},e,{index:t,hexColor:e.hex}))}))))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.0fde2ead.chunk.js.map