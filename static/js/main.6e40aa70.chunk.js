(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(32)},28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(17),c=n.n(l),u=n(1),o=n(4),i=n(13),s=n(3),m={head:["Number","Name","Theme","Exemple"],table:[["\u21161","First","First Theme","Exemple first"],["\u21162","Second","Second Theme","Exemple second"],["\u21163","Three","test2","test2"],["\u21164","Four","test3","test3"]]},b=Object(o.b)({table:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ROW":return Object(s.a)({},e,{table:[].concat(Object(i.a)(e.table),[e.table[0].map(function(e){return t.row})])});case"ADD_COLUMN":return e.table.map(function(e){return e.push(t.column)}),Object(s.a)({},e,{head:[].concat(Object(i.a)(e.head),[t.column])});case"DELETE_ROW":var n=Object(s.a)({},e);return n.table.length>1&&(n.table=n.table.slice(0,-1)),n;case"DELETE_COLUMN":var a=Object(s.a)({},e);return a.head=a.head.slice(0,-1),a.table=a.table.map(function(e){return e.slice(0,-1)}),a;case"EDIT_HEAD":return e.head=e.head.map(function(e,n){return t.number===n?t.value:e}),Object(s.a)({},e);case"EDIT_CELL":return e.table=e.table.map(function(e,n){return t.number_row===n?e.map(function(e,n){return t.number_cell===n?t.value:e}):e}),Object(s.a)({},e);default:return e}}}),v=Object(o.c)(b),d=(n(28),n(30),n(5)),f=n(6),E=n(8),p=n(7),h=n(9),w=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(E.a)(this,Object(p.a)(t).call(this,e))).openItem=function(){n.setState({vis:!0})},n.insertItem=function(e){n.setState({value:e})},n.saveItem=function(e){"Enter"===e&&(n.setState({vis:!1}),n.props.editHead(n.state.value,n.props.number))},n.state={vis:!1,value:n.props.item},n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("th",{onClick:function(){return e.openItem()}},!1===this.state.vis?this.props.item:r.a.createElement("div",null,r.a.createElement("input",{onKeyPress:function(t){return e.saveItem(t.key)},onChange:function(t){return e.insertItem(t.target.value)},value:this.state.value})))}}]),t}(r.a.Component),O=Object(u.b)(null,{editHead:function(e,t){return{type:"EDIT_HEAD",value:e,number:t}}})(w),j=function(e){var t=e.head;return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"nav"}),t.map(function(e,t){return r.a.createElement("td",{className:"nav",key:t},t+1)})),r.a.createElement("tr",null,r.a.createElement("td",{className:"nav"},"0"),t.map(function(e,t){return r.a.createElement(O,{key:t,item:e,number:t})})))},C=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(E.a)(this,Object(p.a)(t).call(this,e))).openItem=function(){n.setState({vis:!0})},n.insertItem=function(e){n.setState({value:e})},n.saveItem=function(e){"Enter"===e&&(n.setState({vis:!1}),n.props.editCell(n.state.value,n.props.number_row,n.props.number_cell))},n.state={vis:!1,value:n.props.cell},n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("td",{onClick:function(){return e.openItem()}},!1===this.state.vis?this.props.cell:r.a.createElement("input",{onKeyPress:function(t){return e.saveItem(t.key)},onChange:function(t){return e.insertItem(t.target.value)},value:this.state.value}))}}]),t}(r.a.Component),_=Object(u.b)(null,{editCell:function(e,t,n){return{type:"EDIT_CELL",value:e,number_row:t,number_cell:n}}})(C),k=function(e){var t=e.rows,n=e.number_row;return t.map(function(e,t){return r.a.createElement(_,{key:t,cell:e,number_row:n,number_cell:t})})},y=function(e){return e.table.map(function(e,t){return r.a.createElement("tr",null,r.a.createElement("td",{className:"nav"},t+1),r.a.createElement(k,{key:t,rows:e,number_row:t}))})},D=Object(u.b)(null,{addRow:function(e){return{type:"ADD_ROW",row:e}}})(function(e){var t=e.addRow;return r.a.createElement("div",{className:"bar_item",onClick:function(){return t("")}},"Add Row")}),N=Object(u.b)(null,{addColumn:function(e){return{type:"ADD_COLUMN",column:e}}})(function(e){var t=e.addColumn;return r.a.createElement("div",{className:"bar_item",onClick:function(){return t("")}},"Add Column")}),I=Object(u.b)(null,{deleteRow:function(){return{type:"DELETE_ROW"}}})(function(e){var t=e.deleteRow;return r.a.createElement("div",{className:"bar_item",onClick:function(){return t("")}},"Delete Row")}),R=Object(u.b)(null,{deleteColumn:function(){return{type:"DELETE_COLUMN"}}})(function(e){var t=e.deleteColumn;return r.a.createElement("div",{className:"bar_item",onClick:function(){return t("")}},"Delete Column")}),L=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(E.a)(this,Object(p.a)(t).call(this,e))).viewRow=function(){n.setState({row:!n.state.row,column:!1})},n.viewColumn=function(){n.setState({column:!n.state.column,row:!1})},n.state={row:!1,column:!1},n}return Object(h.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"nav_item",onClick:function(){return e.viewRow()}},"Row",!0===this.state.row?r.a.createElement("div",{className:"bar"},r.a.createElement(D,null),r.a.createElement(I,null)):""),r.a.createElement("div",{className:"nav_item",onClick:function(){return e.viewColumn()}},"Column",!0===this.state.column?r.a.createElement("div",{className:"bar"},r.a.createElement(N,null),r.a.createElement(R,null)):""))}}]),t}(r.a.Component),T=Object(u.b)(function(e){var t=e.table.head;return{table:function(e){return e.table.table}(e),head:t}})(function(e){var t=e.table,n=e.head;return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement("table",null,r.a.createElement(j,{head:n}),r.a.createElement("tbody",null,r.a.createElement(y,{table:t}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(u.a,{store:v},r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.6e40aa70.chunk.js.map