(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s,r=n(4),c=n.n(r),i=n(5),o=n(6),a=n(9),u=n(7),l=n(8),h=n(1),b=n.n(h),d=(n(14),n(15),n(2)),p=n.n(d),j=n(0),O=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(s||(s={}));var g=function(e){Object(a.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={sortType:s.NONE,isReversed:!1},e.changeSortType=function(t){e.setState({sortType:t})},e.changeOrder=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.reset=function(){e.setState({sortType:s.NONE,isReversed:!1})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.sortType,r=t.isReversed,c=function(e,t){var n=t.sortType,r=t.isReversed,c=Object(l.a)(e);return c.sort((function(e,t){switch(n){case s.ALPHABET:return e.localeCompare(t);case s.LENGTH:return e.length-t.length;default:return 0}})),r&&c.reverse(),c}(O,{sortType:n,isReversed:r});return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",onClick:function(){return e.changeSortType(s.ALPHABET)},className:p()("button is-info",{"is-light":n!==s.ALPHABET}),children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",onClick:function(){return e.changeSortType(s.LENGTH)},className:p()("button is-success",{"is-light":n!==s.LENGTH}),children:"Sort by length"}),Object(j.jsx)("button",{type:"button",onClick:this.changeOrder,className:p()("button is-warning",{"is-light":!r}),children:"Reverse"}),(r||n!==s.NONE)&&Object(j.jsx)("button",{onClick:this.reset,type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(j.jsx)("ul",{children:Object(j.jsx)("ul",{children:c.map((function(e){return Object(j.jsx)("li",{"data-cy":"Good",children:e},e)}))})})]})}}]),n}(b.a.PureComponent);c.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.03259e47.chunk.js.map