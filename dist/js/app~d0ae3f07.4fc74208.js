(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)r=i[u],s[r]&&d.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==s[i]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={"app~d0ae3f07":0},s={"app~d0ae3f07":0},o=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-744c9ad6":"c57aa27a","chunk-772e958e":"6155efac"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-744c9ad6":1,"chunk-772e958e":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-744c9ad6":"68141692","chunk-772e958e":"cd2c3c01"}[t]+".css",r=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var i=s[o],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===r))return e()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){i=u[o],l=i.getAttribute("data-href");if(l===a||l===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.request=a,n(s)},d.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){r[t]=0}));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise(function(e,n){a=s[t]=[e,n]});e.push(a[2]=o);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(t),l=function(e){d.onerror=d.onload=null,clearTimeout(h);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}s[t]=void 0}};var h=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var h=u;o.push([0,"chunk-vendors~7274e1de","chunk-vendors~ec8c427e","chunk-vendors~fdc6512a","chunk-vendors~0605657e","chunk-vendors~d2305125","chunk-vendors~78eefc6e","chunk-vendors~4a7e9e0b"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("771e"),r=n.n(a);r.a},2070:function(t,e,n){"use strict";var a=n("d21b"),r=n.n(a);r.a},"2b0f":function(t,e,n){"use strict";var a=n("a985"),r=n.n(a);r.a},"4ec4":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{color:t.color,dense:"",flat:"",app:""}},[n("v-toolbar-title",[t._t("left")],2),n("v-spacer"),t._t("right")],2)},r=[],s={props:["color"]},o=s,i=(n("f7cd"),n("2877")),c=n("6544"),l=n.n(c),u=n("9910"),d=n("71d9"),h=n("2a7f"),p=Object(i["a"])(o,a,r,!1,null,null,null);p.options.__file="Titlebar.vue";e["a"]=p.exports;l()(p,{VSpacer:u["a"],VToolbar:d["a"],VToolbarTitle:h["a"]})},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=n("bb71");n.e("chunk-772e958e").then(n.t.bind(null,"da64",7)),n.e("chunk-744c9ad6").then(n.t.bind(null,"15f5",7)),a["a"].use(r["a"],{iconfont:["md","fa"]});var s=n("8c4f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticStyle:{background:"#ff4800"},attrs:{"justify-center":"","align-center":"","fill-height":""}},[n("div",[n("v-layout",{attrs:{column:"","align-center":""}},[n("router-link",{attrs:{to:"/lobby"}},[n("v-img",{attrs:{src:"/logo.svg",width:"350",height:"64"}})],1),n("router-link",{attrs:{to:"/lobby"}},[n("v-img",{staticClass:"mt-4",attrs:{width:"350",height:"260",src:"/dudes.svg"}})],1),n("v-layout",{staticClass:"mt-2",staticStyle:{width:"100%"}},[n("v-text-field",{ref:"roomInput",attrs:{color:"white",label:"Which room do you want to enter?",placeholder:"Lobby",dark:"","hide-details":""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.joinRoom(e):null}},model:{value:t.room,callback:function(e){t.room=e},expression:"room"}}),n("v-btn",{staticClass:"mb-0 mr-0",attrs:{large:"",icon:"",dark:""},on:{click:t.joinRoom}},[n("v-icon",{attrs:{large:""}},[t._v("meeting_room")])],1)],1)],1)],1)])},i=[],c={data(){return{room:null}},methods:{joinRoom(){const t=this.room||"lobby".replace(/^https?:\/\//,"").replace(/[\W_]+/g," ").replace(/ /g,"-").replace(/-$/,"").toLowerCase();this.$router.push(t),this.room=null}},mounted(){this.$refs.roomInput.focus()}},l=c,u=n("2877"),d=n("6544"),h=n.n(d),p=n("8336"),f=n("132d"),m=n("adda"),v=n("a722"),g=n("2677"),b=Object(u["a"])(l,o,i,!1,null,null,null);b.options.__file="Home.vue";var y=b.exports;h()(b,{VBtn:p["a"],VIcon:f["a"],VImg:m["a"],VLayout:v["a"],VTextField:g["a"]});var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"chatNgen grey lighten-2",attrs:{"fill-height":"",column:""}},[n("v-tabs",{staticClass:"tabs grey darken-1",attrs:{"slider-color":"#ea4200",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab",[n("v-icon",[t._v("chat")])],1),n("v-tab",[n("v-icon",[t._v("people")])],1),n("v-layout",{staticClass:"font-weight-bold white--text ml-2 mr-2",staticStyle:{height:"48px"},attrs:{"justify-center":"","align-end":"",column:""}},[0===t.tab?n("div",{staticClass:"caption ml-2 mr-2 roomLabel"},[t._v("#"+t._s(t.$route.params.room))]):n("div",{staticClass:"caption ml-2 mr-2"},[t._v("\n        "+t._s(t.peers.length||1)+" Peer"+t._s(t.peers.length>1?"s":"")+"\n      ")])]),n("v-tab-item",[n("v-card",{attrs:{flat:""}},[n("v-layout",{attrs:{"fill-height":"",column:""}},[n("v-layout",{ref:"chatBox",staticClass:"chatBox",attrs:{column:""}},[n("v-spacer"),t._l(t.messages,function(e,a){return n("div",{key:"msg-"+a+"-"+t.lastUpdate},[n("v-divider"),n("div",{staticClass:"pa-2"},[n("v-layout",{attrs:{column:""}},[n("v-layout",{attrs:{wrap:""}},[n("div",{staticClass:"font-weight-bold"},[t._v("\n                      @"+t._s(e.nickname||"Guest")+"\n                    ")]),n("v-spacer"),n("v-layout",{staticClass:"caption",staticStyle:{"font-size":"0.75em"},attrs:{"justify-end":""}},[t._v("\n                      "+t._s(t.timeAgo(e.ts))+"\n                    ")])],1),n("div",{staticClass:"mono",staticStyle:{"font-size":"0.75em"}},[t._v("\n                    "+t._s(e.peerId)+"\n                  ")])],1),n("div",[t._v(t._s(e.msg))])],1)],1)})],2),n("v-divider"),n("div",[n("v-layout",[n("v-text-field",{ref:"messageInput",attrs:{placeholder:"Message",solo:"",flat:"","hide-details":""},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.send(e):null}},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}}),n("v-btn",{attrs:{icon:""},on:{click:t.send}},[n("v-icon",{attrs:{color:"text--grey"}},[t._v("chat")])],1)],1)],1)],1)],1)],1),n("v-tab-item",[n("v-card",{attrs:{flat:""}},[n("v-list",{staticClass:"pt-0"},[t._l(t.peers,function(e,a){return[n("v-list-tile",{key:"peer-"+a},[n("v-layout",{attrs:{column:""}},[n("div",{staticClass:"font-weight-bold"},[t._v("\n                @"+t._s(e.nickname||"Guest")+"\n              ")]),n("div",{staticClass:"caption",staticStyle:{"font-size":"0.75em"}},[t._v(t._s(e.peerId))])])],1),n("v-divider",{key:"div-"+a})]})],2)],1)],1)],1)],1)},w=[],_=n("ed6e"),x=n("b356"),C=n.n(x),I={name:"ChatNgen",components:{},data(){return{tab:0,msg:null,messages:[],peers:[],lastUpdate:Date.now()}},methods:{send(){_["a"].$emit("send",this.msg),this.msg=null},timeAgo(t){return C()().format(t)},registerPeer(t){const e=this.peers.filter(e=>e.peerId===t.peerId).length;e||this.peers.push(t)},updatePeer(t){for(let e=0;e<this.peers.length;e++)this.peers[e].peerId===t&&(this.peers[e].ts=Date.now())},clearInactivePeers(){const t=Date.now()-3e4;this.peers=this.peers.filter(e=>e.ts>=t)}},mounted(){this.$refs.messageInput.focus(),_["a"].$on("incoming",t=>{const e=Date.now();try{const{peerId:a,nickname:r,msg:s}=JSON.parse(t);this.registerPeer({peerId:a,nickname:r,ts:e}),this.updatePeer(a),s&&(this.messages.push({ts:e,peerId:a,nickname:r,msg:s}),this.$nextTick(()=>{const t=this.$refs.chatBox;t.scrollTop=t.scrollHeight}))}catch(n){console.error(n)}this.lastUpdate=e}),window.setInterval(()=>{this.lastUpdate=Date.now(),this.clearInactivePeers()},15e3)},watch:{"$route.params.room":function(t){this.messages=[],this.peers=[]}}},V=I,j=(n("2070"),n("b0af")),T=n("ce7e"),O=n("8860"),S=n("ba95"),$=n("9910"),E=n("71a3"),P=n("c671"),B=n("fe57"),N=Object(u["a"])(V,k,w,!1,null,"a7285b5a",null);N.options.__file="ChatNgen.vue";var L=N.exports;h()(N,{VBtn:p["a"],VCard:j["a"],VDivider:T["a"],VIcon:f["a"],VLayout:v["a"],VList:O["a"],VListTile:S["a"],VSpacer:$["a"],VTab:E["a"],VTabItem:P["a"],VTabs:B["a"],VTextField:g["a"]}),a["a"].use(s["a"]);var R=new s["a"]({routes:[{path:"/",name:"chatngen",component:y},{path:"/:room",name:"chatngen",component:L}]}),A=n("2f62"),D=n("0e44");a["a"].use(A["a"]);const J={merge(t,e){Object.keys(e).forEach(n=>e[n].constructor===String?t[n]=e[n]:Object.keys(e[n]).forEach(a=>t[n][a]=e[n][a]))}},M=new A["a"].Store({state:{},mutations:J,plugins:[Object(D["a"])({key:"vim-network-digital-asset-template",paths:[]})]});var z=M,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.$route.params.room?n("titlebar",{attrs:{color:"#ea4200"}},[n("div",{staticClass:"titleLeft headline text-uppercase white--text",attrs:{slot:"left"},slot:"left"},[t.$vuetify.breakpoint.smAndUp?n("v-flex",[n("router-link",{attrs:{to:"/"}},[n("v-img",{attrs:{src:"/logo.svg",width:"176",height:"32"}})],1)],1):n("v-flex",[n("v-img",{attrs:{src:"/favicon-white.svg",width:"32",height:"32"}})],1)],1),n("div",{staticClass:"titleRight",attrs:{slot:"right"},slot:"right"},[n("v-flex",{staticClass:"peerId"},[n("v-text-field",{staticClass:"transparent",attrs:{placeholder:"Enter Nickname",color:"white","prepend-icon":"alternate_email",solo:"",flat:"",dark:"","hide-details":""},model:{value:t.identity.nickname,callback:function(e){t.$set(t.identity,"nickname",e)},expression:"identity.nickname"}})],1)],1)]):n("titlebar",{attrs:{color:"#ea4200"}},[n("div",{attrs:{slot:"right"},slot:"right"},[n("v-btn",{staticClass:"downloadLink transparent text--white",attrs:{href:"https://github.com/rtbz/chatngen/raw/master/extension/browser-extensions.zip",flat:"",dark:""}},[t._v("\n        Get Extension\n        "),n("v-icon",{staticClass:"ml-2"},[t._v("cloud_download")])],1)],1)]),n("v-content",[n("router-view")],1)],1)},F=[],G=n("cb9b"),q=G["a"],H=(n("034f"),n("2b0f"),n("7496")),W=n("549c"),X=n("0e8f"),K=Object(u["a"])(q,U,F,!1,null,"1f3bf0d6",null);K.options.__file="App.vue";var Q=K.exports;h()(K,{VApp:H["a"],VBtn:p["a"],VContent:W["a"],VFlex:X["a"],VIcon:f["a"],VImg:m["a"],VTextField:g["a"]}),a["a"].config.productionTip=!1,new a["a"]({render:t=>t(Q),router:R,store:z}).$mount("#app")},6285:function(t,e){t.exports={config:{Addresses:{Swarm:["/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-websocket-star"]}},EXPERIMENTAL:{pubsub:!0}}},"771e":function(t,e,n){},a985:function(t,e,n){},b263:function(t,e,n){},cb9b:function(t,e,n){"use strict";(function(t){var a=n("6285"),r=n.n(a),s=n("cfb0"),o=n("4ec4"),i=n("ed6e");e["a"]={components:{Titlebar:o["a"]},data(){return{node:null,room:null,currentRoom:null,identity:{peerId:null,nickname:null}}},methods:{incoming(t){const{from:e,data:n}=t;try{const{nickname:t,msg:r}=JSON.parse(n.toString());i["a"].$emit("incoming",JSON.stringify({peerId:e,nickname:t,msg:r}))}catch(a){console.error(a)}},changeRoom(t){this.currentRoom&&this.node.pubsub.unsubscribe(this.currentRoom),this.node.pubsub.subscribe(t,t=>{this.incoming(t)}),this.currentRoom=t},publish(e){this.node.pubsub.publish(this.room,t.from(JSON.stringify({nickname:this.identity.nickname,msg:e})),t=>{t&&console.error(t)})},heartBeat(){this.publish(null)}},mounted:async function(){this.room=this.$route.params.room;const{node:t,identity:e}=await Object(s["a"])(r.a);this.node=t,this.identity.peerId=e.id,i["a"].$on("send",t=>this.publish(t)),this.changeRoom(this.room),window.setInterval(()=>this.heartBeat(),1e4)},watch:{"$route.params.room":function(t){this.changeRoom(t)}}}}).call(this,n("b639").Buffer)},cfb0:function(t,e,n){"use strict";n.d(e,"a",function(){return a});const a=t=>new Promise((e,n)=>{const a=new window.Ipfs(t);a.on("ready",()=>{a.id((t,r)=>{if(t)return n(t);e({node:a,identity:r})})})})},d21b:function(t,e,n){},ed6e:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var a=n("2b0e");const r=new a["a"]},f7cd:function(t,e,n){"use strict";var a=n("b263"),r=n.n(a);r.a}});
//# sourceMappingURL=app~d0ae3f07.4fc74208.js.map