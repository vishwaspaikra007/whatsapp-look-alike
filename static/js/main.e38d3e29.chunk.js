(this["webpackJsonpwhatsapp-clone"]=this["webpackJsonpwhatsapp-clone"]||[]).push([[0],{120:function(e,t){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},151:function(e,t){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},18:function(e,t,a){e.exports={doubleBlueTick:"MsgStatus_doubleBlueTick__3A1lY",doubleTick:"MsgStatus_doubleTick__kK2bX",singleTick:"MsgStatus_singleTick__3yxxg",pending:"MsgStatus_pending__2y4Pj"}},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(70),r=a.n(s),o=(a(82),a(1)),l=a(5),i=a(4),u=a.n(i),m=(a(99),a(71)),d={production:!0,server:"https://whatsapplookalike.onrender.com"},f=d.production?d.server:"http://localhost:3000",p=a.n(m)()(f),g=a(72),v=a.n(g);function b(e){return Object(n.useEffect)((function(){p.emit("joinRoom",e.email),p.on("msgFromServer",(function(t){console.log(t);var a=JSON.parse(JSON.stringify(e.roomsMessagesRef.current));a[t.roomId].list.push(t.msgData),e.setRoomsMessages(a);var n=JSON.parse(JSON.stringify(e.newMSGCountRef.current));console.log("modifiedNewMsgCount",n),n[t.roomId]++,e.setNewMSGCount(n),p.emit("msgStatusToServer",{roomId:t.roomId,senderId:t.msgData.senderId,type:"received",timestamp:Date.now()})})),p.on("newChat",(function(t){console.log(t),p.emit("joinRoom",t.contact._id),e.setContacts(e.contactsRef.current.concat(t.contact));var a=JSON.parse(JSON.stringify(e.roomsMessagesRef.current));a[t.contact._id]={},a[t.contact._id].list=[t.contact.lastMessageData],e.setRoomsMessages(a)})),p.on("msgStatus",(function(t){var a=JSON.parse(JSON.stringify(e.roomsMessagesRef.current));a[t.roomId]&&(a[t.roomId][t.type]=t.timestamp,e.setRoomsMessages(a))})),console.log("socket connection established")}),[]),Object(n.useEffect)((function(){e._id&&p.emit("joinRoom",e._id)}),[e._id]),c.a.createElement("div",{className:v.a.socketMSG},"Socket Connected..")}a(123),a(124);function h(e){var t={transition:"0s",transform:"scale(1)",opacity:1},a={transform:"scale(10)",opacity:0,transition:"1s"},s=Object(n.useState)(a),r=Object(o.a)(s,2),l=r[0],i=r[1];return Object(n.useEffect)((function(){(function(e,t){var a=!0;for(var n in e)a&=e[n]===t[n];return a})(l,t)&&setTimeout((function(){i(a)}),0)}),[l]),Object(n.useEffect)((function(){e.clicked&&(i(t),e.setClicked(!1))}),[e.clicked]),c.a.createElement("div",{className:"circularClickAnimationContainer"},c.a.createElement("div",{className:"circularBody",style:l}))}function E(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),s=a[0],r=a[1],l=Object(n.useState)(!1),i=Object(o.a)(l,2),m=i[0],d=i[1],f=Object(n.useState)(!1),p=Object(o.a)(f,2),g=p[0],v=p[1],b=Object(n.useState)(!1),E=Object(o.a)(b,2),O=E[0],j=E[1],w=Object(n.useRef)(),k={marginLeft:e.marginLeft+"%"},R={transform:"translate(0px,".concat(e.y,"px)")};return Object(n.useEffect)((function(){r(!0),e.setHeaderRefInApp(w)}),[]),Object(n.useEffect)((function(){e.accessJWTTokken&&(u.a.defaults.withCredentials=!0,u.a.defaults.headers.common.Authorization="bearer "+e.accessJWTTokken)}),[e.accessJWTTokken]),c.a.createElement("div",null,c.a.createElement("div",{className:"header",style:R,ref:w},c.a.createElement("div",{className:"menu"},c.a.createElement("div",{className:"brandName"},"WhatsApp"),c.a.createElement("div",null,c.a.createElement("i",{className:"icon-search"})),c.a.createElement("div",{onClick:function(){s&&e.openMenu(!0)}},c.a.createElement("i",{className:"vertical-menu"}))),c.a.createElement("div",{className:"options"},c.a.createElement("div",null,c.a.createElement("i",{className:"icon-camera"})),c.a.createElement("div",{onClick:function(){e.scrollTo(0),d(!0)}},"CHATS",c.a.createElement(h,{clicked:m,setClicked:function(e){return d(e)}})),c.a.createElement("div",{onClick:function(){e.scrollTo(1),v(!0)}},"STATUS",c.a.createElement(h,{clicked:g,setClicked:function(e){return v(e)}})),c.a.createElement("div",{onClick:function(){e.scrollTo(2),j(!0)}},"CALLS",c.a.createElement(h,{clicked:O,setClicked:function(e){return j(e)}}))),c.a.createElement("span",{className:"indicator",style:k})))}function O(){return c.a.createElement("div",{style:{height:"calc(100vh - 50px)",background:"pink",scrollSnapAlign:"start",scrollSnapStop:"always",paddingTop:"60px"}})}function j(){return c.a.createElement("div",{style:{height:"calc(100vh - 50px)",background:"orange",scrollSnapAlign:"start",scrollSnapStop:"always",paddingTop:"60px"}})}var w,k,R=a(14),S=(a(125),a(126),["svgRef","title"]);function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var N=function(e){var t=e.svgRef,a=e.title,n=C(e,S);return c.a.createElement("svg",y({viewBox:"0 0 212 212",width:212,height:212,ref:t},n),a?c.a.createElement("title",null,a):null,w||(w=c.a.createElement("path",{fill:"#DFE5E7",className:"background",d:"M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"})),k||(k=c.a.createElement("path",{fill:"#FFF",className:"primary",d:"M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"})))},M=c.a.forwardRef((function(e,t){return c.a.createElement(N,y({svgRef:t},e))}));a.p;function T(){return c.a.createElement("div",{className:"bgStyle"},c.a.createElement(M,null))}var D=function(e){var t=(Date.now()-new Date(e).getTime())/864e4;if(t>=2){var a=new Date(e).getDate();a=a/10>=1?a:"0"+a;var n=new Date(e).getMonth();n=n/10>=1?n:"0"+n;var c=JSON.stringify(new Date(e).getFullYear()).slice(0,2);return"".concat(a,"/").concat(n,"/").concat(c)}if(t>=1)return"Yesterday";var s=new Date(e).getHours(),r=s/12<1?"am":"pm";s=(s=s%13?s%13:1)/10>=1?s:"0"+s;var o=new Date(e).getMinutes();return s+":"+(o=o/10>=1?o:"0"+o)+" "+r},_=a(22),x=a.n(_),I=a(18),W=a.n(I);function A(e){return c.a.createElement(c.a.Fragment,null,new Date(e.msgTimestamp).getTime()<=new Date(e.seen).getTime()?c.a.createElement("div",{className:W.a.doubleBlueTick}):new Date(e.msgTimestamp).getTime()<=new Date(e.received).getTime()?c.a.createElement("div",{className:W.a.doubleTick}):new Date(e.msgTimestamp).getTime()<=new Date(e.sent).getTime()?c.a.createElement("div",{className:W.a.singleTick}):c.a.createElement("div",{className:W.a.pending}))}function P(e){var t=Object(n.useState)(void 0),a=Object(o.a)(t,2),s=(a[0],a[1],Object(n.useState)(void 0)),r=Object(o.a)(s,2),l=r[0],i=r[1],u=Object(n.useState)(!1),m=Object(o.a)(u,2),d=m[0],f=m[1];return Object(n.useEffect)((function(){e.date&&i(D(e.date))})),c.a.createElement("div",{className:"ChatContainer"},c.a.createElement(T,null),c.a.createElement(R.a,null,c.a.createElement(R.b,{to:"/whatsapp-look-alike/"+e.name.replace(new RegExp(" ","g"),"-"),onClick:function(){e.setselectedRoomRecipientData({_id:e.recipientId,name:e.name,email:e.email}),e.setSelectedRoom_id(e.roomId),f(!0)}},c.a.createElement("div",null,c.a.createElement("div",{className:"name"},e.name),c.a.createElement("div",{className:["date",e.newMSGCount?"newMSGColor":null].join(" ")},l)),c.a.createElement("div",null,c.a.createElement("div",{className:"lastMessage"},e.userData._id==e.senderId?c.a.createElement(A,{seen:e.seen,received:e.received,sent:e.sent,msgTimestamp:e.date,newMSGCount:e.newMSGCount}):null,c.a.createElement("span",{style:{paddingLeft:"5px"}},e.lastMessage.replace(/<\/*div>/g," "))),c.a.createElement("div",{className:"tag"},e.newMSGCount?c.a.createElement("div",{className:"newMSG"},e.newMSGCount):null)))),c.a.createElement(h,{clicked:d,setClicked:function(e){return f(e)}}))}a(173);function J(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),s=a[0],r=a[1],l=Object(n.useRef)();return Object(n.useEffect)((function(){e.setchatsRef(l),console.log("from chats",e.roomsMessages)}),[]),Object(n.useEffect)((function(){e.contacts.length&&Object.keys(e.contacts[0].lastMessageData).length&&r(e.contacts.sort((function(e,t){return new Date(e.lastMessageData.timestamp).getTime()<new Date(t.lastMessageData.timestamp).getTime()?1:-1})))}),[e.contacts]),c.a.createElement("div",{ref:l,className:"chatsContainer"},s.map((function(t,a){return c.a.createElement(P,{key:a,roomId:t._id,recipientId:t.recipientId,name:t.name,email:t.email,date:t.lastMessageData.timestamp,lastMessage:t.lastMessageData.msg,setselectedRoomRecipientData:function(t){return e.setselectedRoomRecipientData(t)},setSelectedRoom_id:function(t){return e.setSelectedRoom_id(t)},seen:t.seen,received:t.received,sent:t.sent,userData:e.userData,senderId:t.lastMessageData.senderId,newMSGCount:t.newMSGCount})})),c.a.createElement("div",null,"Tap and hold on chat for more option"))}a(174);function G(e){var t=Object(n.useRef)(),a=Object(n.useState)(),s=Object(o.a)(a,2),r=s[0],l=s[1];return Object(n.useEffect)((function(){e.shareRef(t),r&&e.setchatsRefForBody(r)}),[e]),c.a.createElement("div",{className:"body",ref:t},c.a.createElement(J,{setchatsRef:function(e){return l(e)},scrolled:e.scrolled,setselectedRoomRecipientData:function(t){return e.setselectedRoomRecipientData(t)},setSelectedRoom_id:function(t){return e.setSelectedRoom_id(t)},contacts:e.contacts,userData:e.userData}),c.a.createElement(j,null),c.a.createElement(O,null))}a(175);function L(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),s=a[0],r=a[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),u=i[0],m=i[1];return Object(n.useEffect)((function(){m(""),setTimeout((function(){m(e.menuClass)}),10)}),[e.menuClass]),Object(n.useEffect)((function(){r(!0),m("")}),[]),c.a.createElement("div",{className:"menuContainer",onClick:function(){return s&&(m("menuCardFull menuCardFullHide"),setTimeout((function(){m(""),r(!0),e.openMenu(!1)}),295)),void r(!1)}},c.a.createElement("div",{className:"menuCard "+u},c.a.createElement("div",{className:"MenuList"},c.a.createElement("span",null,"New group"),c.a.createElement("span",null,"New broadcast"),c.a.createElement("span",null,"WhatsApp web"),c.a.createElement("span",null,"Starred messages"),c.a.createElement("span",null,"Settings"))))}a(67);var z=a(74),F=a.n(z);function H(e){return c.a.createElement("div",{className:["msgBox ",e.obj.senderId===e.userData._id?"sent":"bot1"===e.obj.senderId?"bot1":"received",e.messageOwnerChanged?"marginTop":null].join(" ")},c.a.createElement("div",null,x()(e.obj.msg)),c.a.createElement("div",null,c.a.createElement("div",null,D(e.obj.timestamp)),e.obj.senderId==e.userData._id?c.a.createElement(A,{msgTimestamp:e.obj.timestamp,seen:e.seen,received:e.received,sent:e.sent}):null))}function B(e){var t,a=Object(n.useState)(100),s=Object(o.a)(a,2),r=s[0],l=s[1],i=Object(n.useState)(100),u=Object(o.a)(i,2),m=u[0],d=u[1],f=Object(n.useState)("60px"),g=Object(o.a)(f,2),v=g[0],b=g[1],h=Object(n.useState)(115),E=Object(o.a)(h,2),O=E[0],j=E[1],w=Object(n.useRef)(),k=Object(n.useRef)(),R=Object(n.useRef)(),S=Object(n.useRef)(""),y=!1;Object(n.useEffect)((function(){console.log("props.selectedRoom_id",e.selectedRoom_id),e.selectedRoomRecipientData._id?(l(0),d(0)):(l(100),d(100))}),[e.selectedRoomRecipientData]);var C=function(){k.current&&k.current.scrollTo(0,k.current.scrollHeight)};Object(n.useEffect)((function(){C()}),[e.roomsMessagesRef.current,r,O]);return Object(n.useEffect)((function(){e.selectedRoom_id&&e.selectedRoomRecipientData.email&&console.log("from room",e.roomsMessagesRef.current[e.selectedRoom_id].list.slice(-1)[0].senderId),e.selectedRoom_id&&e.roomsMessagesRef.current[e.selectedRoom_id].list.slice(-1)[0].senderId!=e.userData._id&&e.selectedRoomRecipientData.email&&p.emit("msgStatusToServer",{roomId:e.selectedRoom_id,senderEmail:e.selectedRoomRecipientData.email,type:"seen",timestamp:Date.now(),receiverId:e.userData._id})}),[e.roomsMessagesRef.current,e.selectedRoom_id,e.selectedRoomRecipientData]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"room",style:{transform:"translate(".concat(r,"%,0px)"),gridTemplateRows:"55px auto ".concat(v)}},c.a.createElement("div",{className:"background-image"}),c.a.createElement("div",{className:"roomHeader"},c.a.createElement("div",{className:"back",onClick:function(){return e.setSelectedRoom_id(void 0),e.setselectedRoomRecipientData({}),void window.history.back()}},c.a.createElement("i",{className:"return"})),c.a.createElement("div",{className:"picContainer"},c.a.createElement(T,null)),c.a.createElement("div",{className:"name"},e.selectedRoomRecipientData._id?e.selectedRoomRecipientData.name:null),c.a.createElement("div",{className:"videoCall"},c.a.createElement("i",{className:"video-call"})),c.a.createElement("div",{className:"audioCall"},c.a.createElement("i",{className:"call"})),c.a.createElement("div",{className:"menu-room"},c.a.createElement("i",{className:"vertical-menu"}))),c.a.createElement("div",{ref:k,className:"messages",style:{height:"calc(100vh - ".concat(O,"px)")}},e.selectedRoom_id?e.roomsMessagesRef.current[e.selectedRoom_id].list.map((function(a,n){return y=t!==a.senderId,t=a.senderId,c.a.createElement(H,{key:n,userData:e.userData,selectedRoom_id:e.selectedRoom_id,obj:a,messageOwnerChanged:y,seen:e.roomsMessagesRef.current[e.selectedRoom_id].seen,received:e.roomsMessagesRef.current[e.selectedRoom_id].received,sent:e.roomsMessagesRef.current[e.selectedRoom_id].sent})})):null)),c.a.createElement("div",{ref:w,className:"create",style:{transform:"translate(".concat(m,"%,0px)")}},c.a.createElement("div",{className:"chatInput"},c.a.createElement("div",{className:"emoji"},c.a.createElement("i",null)),c.a.createElement(F.a,{innerRef:R,className:"input",html:S.current,onChange:function(e){S.current=e.target.value,console.log(S.current,"inputHeight",v),b(w.current.clientHeight+15+"px"),j(w.current.clientHeight+70)},onFocus:function(){setTimeout((function(){C()}),1e3)}}),c.a.createElement("div",{className:"attachment"},c.a.createElement("i",null)),c.a.createElement("div",{className:"camera"},c.a.createElement("i",null))),c.a.createElement("div",{className:"send",onClick:function(){return function(){if(e.selectedRoom_id){var t={msg:S.current,senderId:e.userData._id,senderName:e.userData.name,timestamp:Date.now()};p.emit("msgToServer",{msgData:t,roomId:e.selectedRoom_id,receiverEmail:e.selectedRoomRecipientData.email,senderEmail:e.userData.email});var a=JSON.parse(JSON.stringify(e.roomsMessagesRef.current));a[e.selectedRoom_id].list.push(t),console.log("roomsMessages",a),e.setRoomsMessages(a),S.current="",j(115),C(),R.current.focus()}}()}},c.a.createElement("i",null))))}var U;a(177);function V(e){var t={zIndex:e.blockStyle.zIndex,opacity:e.blockStyle.opacity};return c.a.createElement("div",{style:t,className:"block"})}var $=["svgRef","title"];function Y(){return(Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var K=function(e){var t=e.svgRef,a=e.title,n=q(e,$);return c.a.createElement("svg",Y({viewBox:"0 0 24 24",width:24,height:24,ref:t},n),a?c.a.createElement("title",null,a):null,U||(U=c.a.createElement("path",{fill:"currentColor",d:"M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"})))},Q=c.a.forwardRef((function(e,t){return c.a.createElement(K,Y({svgRef:t},e))}));a.p,a(178);function X(e){return c.a.createElement(R.a,null,c.a.createElement(R.b,{to:"/whatsapp-look-alike/select-contact-for-chatting",className:"directAccess"},c.a.createElement(Q,{className:"createChat",onClick:function(){return e.setOpenAvailableChats(!0)}})))}a(179);var Z,ee=["svgRef","title"];function te(){return(te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var ne=function(e){var t=e.svgRef,a=e.title,n=ae(e,ee);return c.a.createElement("svg",te({viewBox:"0 0 32 32",width:32,height:32,ref:t},n),a?c.a.createElement("title",null,a):null,Z||(Z=c.a.createElement("path",{fill:"currentColor",d:"M15.313 15.672c2.401 0 4.237-1.835 4.237-4.235S17.713 7.2 15.313 7.2s-4.235 1.836-4.235 4.237 1.834 4.235 4.235 4.235zm9.349-.64c1.571 0 2.773-1.201 2.773-2.772 0-1.571-1.202-2.773-2.773-2.773s-2.772 1.202-2.772 2.773c0 1.571 1.201 2.772 2.772 2.772zm-1.724 5.841a7.856 7.856 0 0 0-.889-1.107 8.074 8.074 0 0 0-1.825-1.413 9.05 9.05 0 0 0-.675-.346l-.021-.009c-1.107-.502-2.5-.851-4.232-.851-1.732 0-3.124.349-4.232.851l-.112.054a9.247 9.247 0 0 0-.705.374 8.137 8.137 0 0 0-1.705 1.341 7.991 7.991 0 0 0-.656.773 8.584 8.584 0 0 0-.233.334c-.063.095-.116.184-.164.263l-.012.02a4.495 4.495 0 0 0-.213.408v2.276h16.061v-2.276s-.07-.164-.225-.427a4.257 4.257 0 0 0-.162-.265zm1.724-4.357c-1.333 0-2.376.3-3.179.713a9.409 9.409 0 0 1 1.733 1.218c1.402 1.25 1.959 2.503 2.017 2.641l.021.049h4.954v-1.571s-1.294-3.05-5.546-3.05zM9.41 13.78H6.261v-3.152H4.344v3.152H1.2v1.918h3.144v3.145h1.917v-3.145H9.41V13.78z"})))},ce=c.a.forwardRef((function(e,t){return c.a.createElement(ne,te({svgRef:t},e))}));a.p;function se(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),s=a[0],r=a[1];return c.a.createElement("div",{className:"savedContacts"},c.a.createElement("span",null,c.a.createElement(M,{className:"Person"})),c.a.createElement("div",{onClick:function(){e.openChatRoom(e.obj._id),r(!0)}},c.a.createElement("span",null,e.obj.name),c.a.createElement("span",null,"whatever")),c.a.createElement(h,{clicked:s,setClicked:function(e){return r(e)}}))}var re=a(75),oe=a(76);var le=new(Object(re.a)((function e(t){if(Object(oe.a)(this,e),window.Worker){console.log("Worker is supported in your browser");var a=t.toString();a=a.substring(a.indexOf("{")+1,a.lastIndexOf("}"));var n=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(n))}console.log("Worker is not supported in your browser")})))((function(){var e=this;this.onmessage=function(t){console.log("roomsMessages ",t.data.modifiedRoomsMessages);var a={};for(var n in t.data.modifiedRoomsMessages){a[n]=0;for(var c=t.data.modifiedRoomsMessages[n].list.length;t.data.modifiedRoomsMessages[n].list[--c].senderId!=t.data.userData._id&&new Date(t.data.modifiedRoomsMessages[n].list[c].timestamp).getTime()>=new Date(t.data.modifiedRoomsMessages[n].roomOpenedTimestamp).getTime();)a[n]++}e.postMessage(a)}}));function ie(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),s=a[0],r=a[1],l=Object(n.useState)(void 0),i=Object(o.a)(l,2),m=i[0],f=i[1],g=Object(n.useState)(!1),v=Object(o.a)(g,2),b=v[0],E=v[1],O=Object(n.useState)([]),j=Object(o.a)(O,2),w=j[0],k=j[1],R=d.production?d.server+"/createRoom":"http://localhost:3000/createRoom",S=d.production?d.server+"/getContacts":"http://localhost:3000/getContacts",y=function t(){if(m){var a={};a.email=m,m!==e.email?u.a.post(R,a).then((function(a){if(e.reAuthorizationCheckAndConfig(a))return t(),null;if(a.data.roomCreated){console.log(a),f(void 0),E(!1),e.setContacts(e.contacts.concat(a.data.contact)),c=a.data.contact,k(w.concat(c).sort((function(e,t){return e.name.toUpperCase()<t.name.toUpperCase()?1:-1})));var n=JSON.parse(JSON.stringify(e.roomsMessages));return n[a.data.contact._id].list=[a.data.contact.lastMessageData],e.setRoomsMessages(n),p.emit("joinRoom",a.data.contact._id),null}var c;alert(a.data.msg),console.log(a.data.msg)})):(alert(m+" is your email"),f(void 0),E(!1))}else console.log("email is not defined"),E(!1)};Object(n.useEffect)((function(){y()}),[m]),Object(n.useEffect)((function(){!m&&b&&f(prompt("Enter email to save contact"))}),[b]);var C={transform:e.openAvailableChats?"translate(0px,0px)":"translate(100%,0px)"};Object(n.useEffect)((function(){u.a.post(S).then((function(t){var a=t.data,n=a.contacts,c=a.roomsMessages,s=a.userData;console.log("get contacts",t),k(n.sort((function(e,t){return e.name.toUpperCase()>t.name.toUpperCase()?1:-1})));var r={},o=n.map((function(e){return r[e._id]={seen:e.seen,received:e.received,sent:e.sent,list:c[e._id]},e.lastMessageData=c[e._id][c[e._id].length-1],(!e.seen||e.lastMessageData.timestamp>e.seen)&&p.emit("msgStatusToServer",{roomId:e._id,senderEmail:e.email,type:"received",timestamp:Date.now()}),e}));le.postMessage({modifiedRoomsMessages:r,userData:s}),console.log("modifiedContacts",o),e.setContacts(o),e.setRoomsMessages(r),e.setUserData(t.data.userData),n.map((function(e){p.emit("joinRoom",e._id)}))}))}),[]);return Object(n.useEffect)((function(){return le.onmessage=function(t){console.log("from Worker : ",t.data),e.setNewMSGCount(t.data)},function(){le.removeListener("message")}}),[]),c.a.createElement("div",{className:"room AvailableChats",style:C},c.a.createElement("div",{className:"menu"},c.a.createElement("div",{className:"s",onClick:function(){window.history.back()}},c.a.createElement("i",{className:"return"})),c.a.createElement("div",{className:"a"},c.a.createElement("span",null,"Select contact"),c.a.createElement("span",null,w.length," contacts")),c.a.createElement("div",null,c.a.createElement("i",{className:"icon-search"})),c.a.createElement("div",null,c.a.createElement("i",{className:"vertical-menu"}))),c.a.createElement("div",{className:"contacts"},c.a.createElement("div",{className:"newGroup"},c.a.createElement("span",null,c.a.createElement(ce,{className:"AddGroup"})),c.a.createElement("p",null,"New Group")),c.a.createElement("div",{className:"newGroup",onClick:function(){r(!0),E(!0)}},c.a.createElement("span",null,c.a.createElement(ce,{className:"AddGroup"})),c.a.createElement("p",null,"New Contact"),c.a.createElement(h,{clicked:s,setClicked:function(e){return r(e)}})),w.map((function(e,t){return c.a.createElement(se,{key:t,obj:e,openChatRoom:function(e){}})}))))}a(180),a(68);function ue(e){return c.a.createElement("div",{className:"WelcomePage"},c.a.createElement("h1",null,"Welcome to WhatsApp"),c.a.createElement("div",null,c.a.createElement("span",null)),c.a.createElement("p",null,"Read our ",c.a.createElement("span",null,"Privacy Policy"),'. Tap "Agree and continue" to accept the ',c.a.createElement("span",null,"Terms of Service"),"."),c.a.createElement("button",{onClick:function(){return e.setAgreed(!0)}},"AGREE AND CONTINUE"),c.a.createElement("footer",null,"from",c.a.createElement("span",null,"FACEBOOK")))}a(69);function me(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),s=a[0],r=a[1],l=Object(n.useState)(!1),i=Object(o.a)(l,2),m=i[0],f=i[1],p=Object(n.useState)(!1),g=Object(o.a)(p,2),v=g[0],b=g[1],h=Object(n.useState)(!1),E=Object(o.a)(h,2),O=E[0],j=E[1],w=Object(n.useState)(void 0),k=Object(o.a)(w,2),R=k[0],S=k[1],y=Object(n.useState)(void 0),C=Object(o.a)(y,2),N=C[0],M=C[1],T=Object(n.useState)(void 0),D=Object(o.a)(T,2),_=D[0],x=D[1],I=Object(n.useRef)(),W=Object(n.useRef)(),A=Object(n.useRef)(),P=Object(n.useRef)();return Object(n.useEffect)((function(){I.current.focus()}),[]),Object(n.useEffect)((function(){m&&W.current.focus()}),[m]),Object(n.useEffect)((function(){v&&A.current.focus()}),[v]),c.a.createElement("div",{className:"EnterEmail"},c.a.createElement("h2",null,"Enter Your E-mail"),c.a.createElement("p",null,"WhatsApp will send an E-mail to verify your email. ",c.a.createElement("span",null,"What's my email?")),c.a.createElement("input",{ref:I,type:"email",placeholder:"email",onChange:function(e){return r(e.target.value)},disabled:m||O}),m?c.a.createElement("input",{ref:W,type:"number",placeholder:"enter OTP",onChange:function(e){return S(e.target.value)},disabled:O||v}):null,v?c.a.createElement("div",{className:"PWDContainer"},c.a.createElement("br",null),c.a.createElement("p",null,"Enter password"),c.a.createElement("input",{ref:A,type:"password",min:"6",placeholder:"password",onChange:function(e){return M(e.target.value)},disabled:O}),e.registered?null:c.a.createElement("input",{ref:P,type:"password",placeholder:"confirm password",onChange:function(e){return x(e.target.value)},disabled:O})):null,c.a.createElement("button",{onClick:function(){return function(){j(!0);var t=d.production?d.server+"/requestMail":"http://localhost:3000/requestMail",a=d.production?d.server+"/verifyOTP":"http://localhost:3000/verifyOTP",n=d.production?d.server+"/login":"http://localhost:3000/login",c={};c.to=s,m||v?m&&!v?(c.email=s,c.otp=R,u.a.post(a,c,{withCredentials:!0}).then((function(e){j(!1),e.data.verified?b(!0):(alert(e.data.msg),W.current.focus())}))):e.registered?(c.email=s,c.PWD=N,u.a.post(n,c,{withCredentials:!0}).then((function(t){t.data.logedIn?(e.setAccessJWTTokken(t.data.signedJWT),e.setEmail(s),e.setPWD("userPassword")):(alert("Either password or email is wrong"),j(!1),A.current.focus())})).catch((function(e){console.log(e),alert("something went wrong"),j(!1),A.current.focus()}))):N===_?(e.setEmail(s),e.setPWD(N)):(j(!1),alert("password doesnot match"),P.current.focus()):u.a.post(t,c,{withCredentials:!0}).then((function(t){j(!1),t.data.registered?(b(!0),e.setRegistered(!0)):t.data.OTPsent?f(!0):(alert("message not sent try again"),I.current.focus())}))}()},disabled:O},"Next"))}a(181);function de(e){var t=Object(n.useState)(void 0),s=Object(o.a)(t,2),r=s[0],l=s[1],i=Object(n.useState)(!1),m=Object(o.a)(i,2),f=m[0],p=m[1],g=Object(n.useState)(!1),v=Object(o.a)(g,2),b=v[0],h=v[1],E=d.production?d.server+"/register":"http://localhost:3000/register",O=d.production?d.server+"/saveUserMetaData":"http://localhost:3000/saveUserMetaData",j=Object(n.useRef)(),w={},k=function(){u.a.post(O,{},{withCredentials:!0}).then((function(t){p(!1),t.data.saved?(e.setPWD("userPassword"),e.setRegistered(!0)):alert(t.data.msg+"try one more time")})).catch((function(e){p(!1),console.log(e),alert("error occured try again")}))};return Object(n.useEffect)((function(){j&&j.current.focus()}),[]),c.a.createElement("div",{className:"EnterEmail EnterNameAndDp"},c.a.createElement("h2",null,"Profile info"),c.a.createElement("p",null,"Please provide your name and an optional profile photo"),c.a.createElement("div",{className:"imgContainer"},c.a.createElement("img",{className:"defaultImg",src:a(53),alt:"profile pic"})),c.a.createElement("input",{ref:j,disabled:f,type:"text",name:"name",onChange:function(e){return l(e.target.value)}}),c.a.createElement("button",{onClick:function(){return b?k():(p(!0),w.name=r,w.email=e.email,w.PWD=e.PWD,void u.a.post(E,w,{withCredentials:!0}).then((function(t){t.data.registered?(console.log("registered"),e.setAccessJWTTokken(t.data.signedJWT),u.a.defaults.headers.common.Authorization="bearer "+t.data.signedJWT,h(t.data.registered),k()):(p(!1),alert(t.data.msg),j.current.focus())})).catch((function(e){console.log(e),p(!1),alert("something went wrong try again"),j.current.focus()})))},disabled:f},"Next"))}var fe=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(0),i=Object(o.a)(r,2),m=i[0],f=i[1],p=Object(n.useState)(10),g=Object(o.a)(p,2),v=g[0],h=g[1],O=Object(n.useState)(!1),j=Object(o.a)(O,2),w=j[0],k=j[1],R=Object(n.useState)("menuCard"),S=Object(o.a)(R,2),y=S[0],C=S[1],N=Object(n.useState)(),M=Object(o.a)(N,2),T=M[0],D=M[1],_=Object(n.useState)(0),x=Object(o.a)(_,2),I=x[0],W=x[1],A=Object(n.useState)(),P=Object(o.a)(A,2),J=P[0],z=P[1],F=Object(n.useState)(!1),H=Object(o.a)(F,2),U=H[0],$=H[1],Y=Object(n.useState)(!1),q=Object(o.a)(Y,2),K=q[0],Q=q[1],Z=Object(n.useState)(void 0),ee=Object(o.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)({}),ce=Object(o.a)(ne,2),se=ce[0],re=ce[1],oe=Object(n.useState)(void 0),le=Object(o.a)(oe,2),fe=le[0],pe=le[1],ge=Object(n.useState)({}),ve=Object(o.a)(ge,2),be=ve[0],he=ve[1],Ee=Object(n.useState)(!1),Oe=Object(o.a)(Ee,2),je=Oe[0],we=Oe[1],ke=Object(n.useState)(void 0),Re=Object(o.a)(ke,2),Se=Re[0],ye=Re[1],Ce=Object(n.useState)(void 0),Ne=Object(o.a)(Ce,2),Me=Ne[0],Te=Ne[1],De=Object(n.useState)([]),_e=Object(o.a)(De,2),xe=_e[0],Ie=_e[1],We=Object(n.useState)([]),Ae=Object(o.a)(We,2),Pe=Ae[0],Je=Ae[1],Ge=Object(n.useState)({}),Le=Object(o.a)(Ge,2),ze=Le[0],Fe=Le[1],He=Object(n.useRef)(je),Be=Object(n.useRef)(se),Ue=Object(l.a)(),Ve=Object(n.useRef)(a),$e=Object(n.useRef)(),Ye=Object(n.useRef)(),qe=Object(n.useRef)(!1),Ke=Object(n.useRef)(ze),Qe=function(e){var t;Ve.current.style.scrollSnapType="none",t&&clearInterval(t);var a=Ve.current.scrollLeft,n=e*Ve.current.clientWidth-a,c=n/5,s=0;Ve.current&&(t=setInterval((function(){f(a+=c),s+=c,Math.abs(s)>=Math.abs(n)&&(clearInterval(t),Ve.current.style.scrollSnapType="x mandatory",Ve.current.scrollLeft)}),1))};return Object(n.useEffect)((function(){if(Ve.current){var e=Math.round(Ve.current.scrollLeft),t=Math.round(document.documentElement.clientWidth),a=window.location.pathname,n=a.match("whatsapp-look-alike/chats");e!=t||a.match("status")?e!=2*t||a.match("calls")?0!=e||n||(console.log("chats"),Ue.goBack()):(console.log("calls"),n?Ue.push("/whatsapp-look-alike/calls"):Ue.replace("/whatsapp-look-alike/calls")):(console.log("status"),n?Ue.push("/whatsapp-look-alike/status"):Ue.replace("/whatsapp-look-alike/status"))}}),[v]),Object(n.useEffect)((function(){a&&a.scrollTo(m,0)}),[m,a]),Object(n.useEffect)((function(){return Ve.current=a,a&&a.addEventListener("scroll",(function(e){h(10+a.scrollLeft/a.scrollWidth*90)})),function(){a&&a.removeEventListener("scroll")}}),[a]),Object(n.useEffect)((function(){C(w?"menuCardFull":" ")}),[w]),Object(n.useEffect)((function(){if(T&&J){var e,t,a=0;T.addEventListener("scroll",(function(n){t&&clearTimeout(t),J.style.transition="0ms",e||(e=T.scrollTop),(a+=e-T.scrollTop)<-60?a=-60:a>0&&(a=0),W(a),t=setTimeout((function(){J.style.transition="transform 300ms ease-in-out",a=a<-30&&T.scrollTop>60?-60:0,W(a)}),300),e=T.scrollTop}))}return function(){T&&T.removeEventListener("scroll")}}),[T,J]),Object(n.useEffect)((function(){J&&a&&(se._id||je?(J.style.transform="translate(-100px,".concat(I,"px)"),a.style.transform="translate(-100px,0px)"):(J.style.transform="translate(0px,".concat(I,"px)"),a.style.transform="translate(0px,0px)"))}),[se,je]),Object(n.useEffect)((function(){Ve.current&&!qe.current&&function(){var e;qe.current=!0,window.performance&&(console.info("window.performance works fine on this browser"),e=1==performance.navigation.type,console.log("reloaded ",e));var t=window.location.pathname;t.match(/whatsapp-look-alike\/*$/)?Ue.replace("/whatsapp-look-alike/chats"):t.match(/whatsapp-look-alike\/status\/*$/)?(Qe(1),e||(Ue.replace("/whatsapp-look-alike/chats"),Ue.push("/whatsapp-look-alike/status"))):t.match(/whatsapp-look-alike\/calls\/*$/)?(Qe(2),e||(Ue.replace("/whatsapp-look-alike/chats"),Ue.push("/whatsapp-look-alike/calls"))):t.match(/whatsapp-look-alike\/select-contact-for-chatting\/*$/)?(we(!0),e||(Ue.replace("/whatsapp-look-alike/chats"),Ue.push("/whatsapp-look-alike/select-contact-for-chatting"))):(!t.match(/whatsapp-look-alike\/chats\/*$/)||t.match(/whatsapp-look-alike\/*/g).length>1)&&(e?Ue.goBack():Ue.replace("/whatsapp-look-alike/chats")),console.log("if page is loading continuosly than write the folowing path after url 'whatsapp-look-alike/chats'")}()}),[Ve.current]),Object(n.useEffect)((function(){window.addEventListener("popstate",(function(){console.log(window.location.pathname);var e=!(He.current||Be.current._id);window.location.pathname.match("whatsapp-look-alike/chats")&&e&&Qe(0),re({}),we(!1)}))}),[]),Object(n.useEffect)((function(){He.current=je,Be.current=se}),[se,je]),Object(n.useEffect)((function(){$e.current=Pe}),[Pe]),Object(n.useEffect)((function(){Ye.current=xe}),[xe]),Object(n.useEffect)((function(){!function(){console.log("called for refresh token");var e=d.production?d.server+"/refreshToken":"http://localhost:3000/refreshToken";u.a.get(e,{withCredentials:!0}).then((function(e){console.log("called for refresh token"),e.data.logedIn?(console.log("logged in"),ae(e.data.signedJWT),ye(e.data.email),Te("userPassword"),Q(!0),$(!0)):alert(e.data.msg)})).catch((function(e){return[console.log(e+" login again")]}))}()}),[]),Object(n.useEffect)((function(){console.log(Pe),Ie(xe.map((function(e){return e.lastMessageData=Pe[e._id].list[Pe[e._id].list.length-1],e.seen=Pe[e._id].seen,e.received=Pe[e._id].received,e.sent=Pe[e._id].sent,e})))}),[Pe]),Object(n.useEffect)((function(){Ke.current=ze,Ie(xe.map((function(e){if(se._id==e.recipientId&&0!=e.newMSGCount){e.newMSGCount=0;var t=JSON.parse(JSON.stringify(Ke.current));t[e._id]=0,Fe(t)}else e.newMSGCount=Ke.current[e._id];return e})))}),[ze]),Object(n.useEffect)((function(){if(fe&&Object.keys(Ke.current).length){var e=JSON.parse(JSON.stringify(Ke.current));e[fe]=0,console.log("new message",e),Fe(e)}}),[fe]),c.a.createElement("div",{className:"App"},U?c.a.createElement(c.a.Fragment,null,Se&&Me?c.a.createElement(c.a.Fragment,null,K&&te?null:c.a.createElement(de,{accessJWTTokken:te,setAccessJWTTokken:function(e){return ae(e)},setRegistered:function(e){return Q(e)},email:Se,PWD:Me,setPWD:function(e){return Te(e)}})):c.a.createElement(me,{accessJWTTokken:te,setAccessJWTTokken:function(e){return ae(e)},registered:K,setRegistered:function(e){return Q(e)},setEmail:function(e){return ye(e)},setPWD:function(e){return Te(e)}})):c.a.createElement(ue,{setAgreed:function(e){return $(e)}}),K&&te?c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{roomsMessagesRef:$e,setRoomsMessages:function(e){return Je(e)},email:Se,contactsRef:Ye,setContacts:function(e){return Ie(e)},_id:be._id,newMSGCountRef:Ke,setNewMSGCount:function(e){return Fe(e)}}),c.a.createElement(E,{setHeaderRefInApp:function(e){return z(e.current)},scrollTo:Qe,marginLeft:v,openMenu:function(e){return k(e)},y:I,accessJWTTokken:te}),c.a.createElement(G,{shareRef:function(e){return s(e.current)},setchatsRefForBody:function(e){return D(e.current)},scrolled:I,setselectedRoomRecipientData:function(e){return re(e)},setSelectedRoom_id:function(e){return pe(e)},contacts:xe,userData:be}),w?c.a.createElement(L,{openMenu:function(e){return k(e)},menuClass:y}):null,c.a.createElement(X,{setOpenAvailableChats:function(e){return we(e)}}),c.a.createElement(B,{userData:be,selectedRoomRecipientData:se,setselectedRoomRecipientData:function(e){return re(e)},selectedRoom_id:fe,setSelectedRoom_id:function(e){return pe(e)},roomsMessagesRef:$e,setRoomsMessages:function(e){return Je(e)}}),c.a.createElement(ie,{openAvailableChats:je,setOpenAvailableChats:function(e){return we(e)},email:Se,reAuthorizationCheckAndConfig:function(e){return function(e){return!0===e.data.logedIn?(ae(e.data.signedJWT),!0):!1===e.data.logedIn&&(alert(e.data.msg),ye(void 0),Te(void 0),ae(void 0),void Q(!1))}(e)},setContacts:function(e){return Ie(e)},setRoomsMessages:function(e){return Je(e)},setUserData:function(e){return he(e)},contacts:xe,roomsMessages:Pe,setNewMSGCount:function(e){return Fe(e)}}),c.a.createElement(V,{blockStyle:se._id||je?{zIndex:2,opacity:.6}:{zIndex:-2,opacity:0}})):null)},pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ge(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(fe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/whatsapp-look-alike",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/whatsapp-look-alike","/service-worker.js");pe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ge(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ge(t,e)}))}}()},53:function(e,t,a){e.exports=a.p+"static/media/person.a8f61b5a.svg"},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},72:function(e,t,a){e.exports={socketMSG:"SocketConnections_socketMSG__xpIQV"}},77:function(e,t,a){e.exports=a(182)},82:function(e,t,a){},99:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.e38d3e29.chunk.js.map