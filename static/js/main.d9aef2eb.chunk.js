(this["webpackJsonpeveryday-action"]=this["webpackJsonpeveryday-action"]||[]).push([[0],{31:function(e,t,n){e.exports=n(55)},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),c=n.n(i),l=(n(36),n(37),n(38),n(39),n(40),n(41),function(e){return r.a.createElement("li",{className:"NavigationItem"},r.a.createElement("a",{href:e.link,className:e.active?"active":null},e.children))}),o=function(e){return r.a.createElement("ul",{className:"NavigationItems"},r.a.createElement(l,{link:"/",active:!0},"\u4e3b\u9875"))},m=function(){return r.a.createElement("header",{className:"Navigation"},r.a.createElement("nav",null,r.a.createElement(o,null)))},s=function(e){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement("main",{className:"Content"},e.children))},u=n(14),d=n(2),p=n(6),b=n(7),f=n(9),v=n(8),h=(n(42),{itemTypes:["\u8fd0\u52a8","\u751f\u6d3b","\u5b66\u4e60","\u5de5\u4f5c","\u5a31\u4e50"],items:{1593920420073:{id:1593920420073,created_timestamp:1593920420073,content:"\u8dd1\u6b65",type:"\u8fd0\u52a8",done:!1},1593920427447:{id:1593920427447,created_timestamp:1593920420073,content:"\u6df7\u5408\u6709\u6c27",type:"\u8fd0\u52a8",done:!1},1593920442267:{id:1593920442267,created_timestamp:1593920420073,content:"\u6d17\u7259",type:"\u751f\u6d3b",done:!1},1593988570469:{id:1593988570469,created_timestamp:1593988570469,content:"\u770b\u4e66",type:"\u5b66\u4e60",done:!1}},columns:{"column-1":{id:"column-1",title:"\u611f\u5174\u8da3",taskIds:[1593920420073,1593920427447],itemToSubmit:{id:null,content:"\u65b0\u4efb\u52a1",type:null,created_timestamp:null,done:!1}},"column-2":{id:"column-2",title:"\u884c\u52a8\u4e2d",taskIds:[1593920442267,1593988570469],itemToSubmit:{id:null,content:"\u65b0\u4efb\u52a1",type:null,created_timestamp:null,done:!1}},"column-3":{id:"column-3",title:"\u5b8c\u6210",taskIds:[],itemToSubmit:{id:null,content:"\u65b0\u4efb\u52a1",type:null,created_timestamp:null,done:!1}}},columnOrder:["column-1","column-2","column-3"],editingItem:!1,itemUnderEditing:{}}),E=n(13),y=(n(43),n(44),function(e){return r.a.createElement("div",{className:"TodoForm"},r.a.createElement("form",{onSubmit:e.submitted},r.a.createElement("input",{placeholder:e.value,value:e.value,onChange:e.inputChanged}),r.a.createElement("button",{type:"submit"},"+")))}),g=(n(45),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"TodoItems"},r.a.createElement("h4",null,this.props.key),r.a.createElement("ul",null,this.props.children))}}]),n}(a.Component)),k=n(69),I=n(24),C=n.n(I),O=n(26),j=n.n(O),S=n(25),N=n.n(S),H=n(27),T=n.n(H),w=n(28),x=n.n(w),U=(n(46),function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e,t=this;switch(this.props.item.type){case"\u8fd0\u52a8":e=r.a.createElement(C.a,null);break;case"\u751f\u6d3b":e=r.a.createElement(N.a,null);break;case"\u5b66\u4e60":e=r.a.createElement(j.a,null);break;case"\u5de5\u4f5c":e=r.a.createElement(T.a,null);break;case"\u5a31\u4e50":e=r.a.createElement(x.a,null);break;default:e=r.a.createElement(k.a,null,"star")}return r.a.createElement(E.b,{draggableId:this.props.item.id.toString(),index:this.props.index},(function(n){return r.a.createElement("div",Object.assign({className:"TodoItem"},n.draggableProps,n.dragHandleProps,{ref:n.innerRef}),e,r.a.createElement("p",{className:t.props.item.done?"done":"undone",onClick:function(){return t.props.contentClicked(t.props.item.id)}},t.props.item.content),r.a.createElement("button",{type:"button",className:"editButton",onClick:function(){return t.props.editClicked(t.props.item.id)}},r.a.createElement("i",{className:"fa fa-bars"})),r.a.createElement("button",{type:"button",className:"closeButton",onClick:function(){return t.props.closeClicked(t.props.item.id,t.props.columnId)}},r.a.createElement("i",{className:"fa fa-close"})))}))}}]),n}(a.Component)),_=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.props.items,n=Object.keys(t).map((function(n,a){return r.a.createElement(U,{columnId:e.props.column.id,key:t[n].id,item:t[n],contentClicked:e.props.contentClicked,editClicked:e.props.editClicked,closeClicked:e.props.closeClicked,index:a})}));return r.a.createElement("div",{className:"Column"},r.a.createElement("h3",null,this.props.column.title),r.a.createElement(y,{value:this.props.column.itemToSubmit.content,inputChanged:function(t){return e.props.formInputChanged(t,e.props.column.id)},submitted:function(t){return e.props.submitted(t,e.props.column.id)}}),r.a.createElement(E.c,{droppableId:this.props.column.id},(function(e){return r.a.createElement("div",Object.assign({ref:e.innerRef},e.droppableProps),r.a.createElement(g,null,n),e.placeholder)})))}}]),n}(a.Component),B=(n(53),function(e){var t=e.item,n=e.itemTypes.map((function(e){return t.type===e?r.a.createElement("option",{key:e,value:e,selected:"selected"},e):r.a.createElement("option",{key:e,value:e},e)}));return r.a.createElement("div",{className:"TodoItemSummary"},r.a.createElement("form",null,r.a.createElement("label",null,"\u5185\u5bb9\uff1a"),r.a.createElement("input",{value:e.item.content,onChange:e.itemSummaryContentChanged})),r.a.createElement("form",null,r.a.createElement("label",null,"\u7c7b\u522b\uff1a"),r.a.createElement("select",{onChange:e.itemSummaryTypeChanged},n)),r.a.createElement("button",{type:"button",className:"saveButton",onClick:function(){return e.saveClicked(e.item)}},"\u786e\u5b9a"),r.a.createElement("button",{type:"button",className:"cancelButton",onClick:function(){return e.cancelClicked()}},"\u53d6\u6d88"))}),D=(n(54),function(e){return r.a.createElement("div",{className:"Modal",style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children)}),A=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state=h,e.onDragEnd=function(t){var n=t.destination,a=t.source,r=t.draggableId;if(n&&(n.droppableId!==a.droppableId||n.index!==a.index))if(n.droppableId===a.droppableId){var i=e.state.columns[a.droppableId],c=Array.from(i.taskIds);c.splice(a.index,1),c.splice(n.index,0,r);var l=Object(d.a)(Object(d.a)({},i),{},{taskIds:c}),o=Object(d.a)(Object(d.a)({},e.state),{},{columns:Object(d.a)(Object(d.a)({},e.state.columns),{},Object(u.a)({},l.id,l))});e.setState(o)}else{var m,s=e.state.columns[a.droppableId],p=e.state.columns[n.droppableId],b=Array.from(s.taskIds),f=Array.from(p.taskIds);b.splice(a.index,1),f.splice(n.index,0,r);var v=Object(d.a)(Object(d.a)({},s),{},{taskIds:b}),h=Object(d.a)(Object(d.a)({},p),{},{taskIds:f}),E=Object(d.a)(Object(d.a)({},e.state),{},{columns:Object(d.a)(Object(d.a)({},e.state.columns),{},(m={},Object(u.a)(m,v.id,v),Object(u.a)(m,h.id,h),m))});e.setState(E)}},e.formInputChangeHandler=function(t,n){var a=e.state.columns,r=Object(d.a)({},a[n]),i={id:null,created_timestamp:null,content:t.target.value,done:!1};r.itemToSubmit=i,a[n]=r,e.setState({columns:a})},e.addItemHandler=function(t,n){t.preventDefault();var a=e.state.columns,r=Object(d.a)({},a[n]),i=r.itemToSubmit;if(i.content){var c=Object(d.a)({},e.state.items),l=Date.now(),o={id:l,created_timestamp:l,content:i.content,done:!1};r.taskIds.push(o.id),a[n]=r,c[l]=o,e.setState({items:c,columns:a})}},e.removeItemHandler=function(t,n){console.log(n);var a=Object(d.a)({},e.state.items);delete a[t];var r=e.state.columns,i=Object(d.a)({},r[n]),c=i.taskIds.filter((function(e){return e!==t}));i.taskIds=c,r[n]=i,e.setState({items:a,columns:r})},e.editItemHandler=function(t){var n=Object(d.a)({},e.state.items)[t];e.setState({editingItem:!0,itemUnderEditing:Object(d.a)({},n)})},e.revertItemDoneHandler=function(t){var n=Object(d.a)({},e.state.items),a=n[t];a.done=!a.done,e.setState({items:n})},e.itemSummaryContentChangeHandler=function(t){var n=e.state.itemUnderEditing;n.content=t.target.value,e.setState({itemUnderEditing:n})},e.itemSummaryTypeChangeHandler=function(t){var n=e.state.itemUnderEditing;n.type=t.target.value,e.setState({itemUnderEditing:n})},e.editItemSaveHandler=function(t){var n=Object(d.a)({},e.state.items);n[t.id]=t,e.setState({items:n,editingItem:!1,itemUnderEditing:{}})},e.editItemCancelHandler=function(){e.setState({editingItem:!1,itemUnderEditing:{}})},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this,t=this.state.columnOrder.map((function(t){var n=e.state.columns[t],a=n.taskIds.map((function(t){return e.state.items[t]}));return r.a.createElement(_,{key:n.id,column:n,formInputChanged:e.formInputChangeHandler,submitted:e.addItemHandler,items:a,contentClicked:e.revertItemDoneHandler,editClicked:e.editItemHandler,closeClicked:e.removeItemHandler})}));return r.a.createElement("div",{className:"TodoListBuilder"},r.a.createElement(D,{show:this.state.editingItem},r.a.createElement(B,{itemTypes:this.state.itemTypes,item:this.state.itemUnderEditing,itemSummaryContentChanged:this.itemSummaryContentChangeHandler,itemSummaryTypeChanged:this.itemSummaryTypeChangeHandler,saveClicked:this.editItemSaveHandler,cancelClicked:this.editItemCancelHandler})),r.a.createElement(E.a,{onDragEnd:this.onDragEnd},t))}}]),n}(a.Component);var P=function(){return r.a.createElement("div",null,r.a.createElement(s,null,r.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.d9aef2eb.chunk.js.map