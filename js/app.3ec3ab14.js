(function(t){function e(e){for(var r,o,s=e[0],i=e[1],u=e[2],f=0,d=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==c[i]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},c={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/gitogram/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"092a":function(t,e,n){"use strict";n("121d")},"11de":function(t,e,n){"use strict";n("c480")},"121d":function(t,e,n){},"144e":function(t,e,n){"use strict";n("fb8b")},"191a":function(t,e,n){},"1af6":function(t,e,n){},4174:function(t,e,n){"use strict";n("7732")},"495e":function(t,e,n){"use strict";n("96f8")},"4a8e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"logo",(function(){return R})),n.d(r,"home",(function(){return G})),n.d(r,"logout",(function(){return W})),n.d(r,"triangle",(function(){return at})),n.d(r,"star",(function(){return dt})),n.d(r,"fork",(function(){return mt}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function a(t,e,n,r,a,o){var s=Object(c["p"])("feeds");return Object(c["k"])(),Object(c["c"])(s)}var o={class:"topline"},s={class:"stories"},i={class:"g-container posts-container"},u={class:"posts__list"};function l(t,e,n,r,a,l){var f=Object(c["p"])("logo"),d=Object(c["p"])("navigation"),b=Object(c["p"])("story-user-item"),p=Object(c["p"])("topline"),C=Object(c["p"])("card"),O=Object(c["p"])("post");return Object(c["k"])(),Object(c["e"])(c["a"],null,[Object(c["f"])("div",o,[Object(c["i"])(p,null,{headline:Object(c["s"])((function(){return[Object(c["i"])(f),Object(c["i"])(d)]})),content:Object(c["s"])((function(){return[Object(c["f"])("ul",s,[(Object(c["k"])(!0),Object(c["e"])(c["a"],null,Object(c["n"])(a.stories,(function(t){return Object(c["k"])(),Object(c["e"])("li",{class:"stories__item",key:t.id},[Object(c["i"])(b,{avatar:t.avatar,username:t.username,onClick:function(e){return l.handlePress(t.id)}},null,8,["avatar","username","onClick"])])})),128))])]})),_:1})]),Object(c["f"])("div",i,[Object(c["f"])("ul",u,[(Object(c["k"])(),Object(c["e"])(c["a"],null,Object(c["n"])(3,(function(t,e){return Object(c["f"])("li",{key:e,class:"posts__item"},[Object(c["i"])(O,null,{card:Object(c["s"])((function(){return[Object(c["i"])(C)]})),_:1})])})),64))])])],64)}var f={class:"c-topline"},d={class:"g-container"},b={class:"headline"},p={key:0,class:"content"};function C(t,e,n,r,a,o){return Object(c["k"])(),Object(c["e"])("div",f,[Object(c["f"])("div",d,[Object(c["f"])("div",b,[Object(c["o"])(t.$slots,"headline",{},void 0,!0)]),t.$slots.content?(Object(c["k"])(),Object(c["e"])("div",p,[Object(c["o"])(t.$slots,"content",{},void 0,!0)])):Object(c["d"])("",!0)])])}var O={name:"topline"},v=(n("144e"),n("6b0d")),j=n.n(v);const m=j()(O,[["render",C],["__scopeId","data-v-1578cb16"]]);var _=m,g={class:"avatar"},h=["src"],L={class:"username"};function k(t,e,n,r,a,o){return Object(c["k"])(),Object(c["e"])("button",{class:"c-story__user_item",onClick:e[0]||(e[0]=function(e){return t.$emit("onPress")})},[Object(c["f"])("div",g,[Object(c["f"])("img",{src:n.avatar,class:"img",alt:"username avatar"},null,8,h)]),Object(c["f"])("div",L,Object(c["r"])(n.username),1)])}var w={props:{avatar:{type:String,required:!0},username:{type:String,required:!0}}};n("588e");const V=j()(w,[["render",k],["__scopeId","data-v-7ff0e250"]]);var y=V,H={class:"logo",href:"#!"};function M(t,e,n,r,a,o){var s=Object(c["p"])("icon");return Object(c["k"])(),Object(c["e"])("a",H,[Object(c["i"])(s,{class:"logo",name:"logo"})])}n("b0c0");function Z(t,e,n,r,a,o){return Object(c["k"])(),Object(c["c"])(Object(c["q"])(n.name))}var x=n("5530"),S=(n("caad"),n("2532"),n("b64b"),{preserveAspectRatio:"none",viewBox:"0 0 175 41",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),q=Object(c["g"])('<path d="M18.6664 14.4756H24.3009C23.5838 9.28933 19.0122 5.63971 13.0832 5.63971C6.15528 5.63971 0.815308 10.6339 0.815308 19.1369C0.815308 27.435 5.80953 32.5829 13.1984 32.5829C19.819 32.5829 24.5443 28.3954 24.5443 21.4931V18.1893H13.5698V22.3639H19.2043C19.1274 25.6166 16.9121 27.6783 13.224 27.6783C9.06217 27.6783 6.43701 24.5665 6.43701 19.0857C6.43701 13.6305 9.16462 10.5443 13.1728 10.5443C16.0285 10.5443 17.9621 12.0169 18.6664 14.4756Z" fill="currentColor"></path><path d="M28.5773 32.2243H34.0325V12.5548H28.5773V32.2243ZM31.3177 10.0193C32.944 10.0193 34.2758 8.7771 34.2758 7.25322C34.2758 5.74215 32.944 4.5 31.3177 4.5C29.7042 4.5 28.3724 5.74215 28.3724 7.25322C28.3724 8.7771 29.7042 10.0193 31.3177 10.0193Z" fill="currentColor"></path><path d="M47.6026 12.5548H43.9017V7.84229H38.4465V12.5548H35.7573V16.6526H38.4465V26.8972C38.4209 30.7517 41.046 32.6597 45.003 32.4932C46.4116 32.442 47.4105 32.1603 47.9611 31.981L47.1031 27.9216C46.8342 27.9728 46.258 28.1009 45.7457 28.1009C44.6572 28.1009 43.9017 27.6911 43.9017 26.18V16.6526H47.6026V12.5548Z" fill="currentColor"></path><path d="M58.5699 32.6085C64.5373 32.6085 68.251 28.5235 68.251 22.4664C68.251 16.3709 64.5373 12.2987 58.5699 12.2987C52.6024 12.2987 48.8888 16.3709 48.8888 22.4664C48.8888 28.5235 52.6024 32.6085 58.5699 32.6085ZM58.5955 28.3826C55.8422 28.3826 54.4336 25.8599 54.4336 22.428C54.4336 18.996 55.8422 16.4605 58.5955 16.4605C61.2975 16.4605 62.7061 18.996 62.7061 22.428C62.7061 25.8599 61.2975 28.3826 58.5955 28.3826Z" fill="currentColor"></path><path d="M79.3975 40.0102C85.0192 40.0102 89.0146 37.449 89.0146 32.4164V12.5548H83.5978V15.8586H83.3929C82.663 14.2579 81.0623 12.2987 77.7712 12.2987C73.4557 12.2987 69.8061 15.6538 69.8061 22.3511C69.8061 28.8948 73.3533 31.9426 77.784 31.9426C80.9214 31.9426 82.6758 30.3675 83.3929 28.7412H83.6234V32.3396C83.6234 35.0416 81.8947 36.0916 79.5256 36.0916C77.1181 36.0916 75.9016 35.0416 75.4534 33.8506L70.4079 34.5293C71.061 37.6283 74.096 40.0102 79.3975 40.0102ZM79.5128 27.8448C76.8364 27.8448 75.3766 25.719 75.3766 22.3255C75.3766 18.9832 76.8108 16.6398 79.5128 16.6398C82.1636 16.6398 83.649 18.8808 83.649 22.3255C83.649 25.7959 82.138 27.8448 79.5128 27.8448Z" fill="currentColor"></path><path d="M92.0936 32.2243H97.5488V21.0962C97.5488 18.6759 99.316 17.0112 101.723 17.0112C102.479 17.0112 103.516 17.1392 104.029 17.3057V12.4651C103.542 12.3499 102.863 12.2731 102.313 12.2731C100.11 12.2731 98.3044 13.5536 97.5873 15.9867H97.3824V12.5548H92.0936V32.2243Z" fill="currentColor"></path><path d="M110.632 32.5957C113.539 32.5957 115.422 31.3279 116.382 29.4967H116.536V32.2243H121.709V18.9576C121.709 14.2707 117.739 12.2987 113.36 12.2987C108.647 12.2987 105.548 14.5525 104.793 18.1381L109.838 18.5478C110.21 17.2417 111.375 16.2812 113.334 16.2812C115.191 16.2812 116.254 17.2161 116.254 18.8296V18.9064C116.254 20.1742 114.909 20.3406 111.49 20.6736C107.597 21.0321 104.101 22.3383 104.101 26.7307C104.101 30.6236 106.88 32.5957 110.632 32.5957ZM112.195 28.8308C110.517 28.8308 109.313 28.0497 109.313 26.5514C109.313 25.0147 110.581 24.2592 112.502 23.9903C113.693 23.8238 115.639 23.5421 116.292 23.1067V25.194C116.292 27.2557 114.589 28.8308 112.195 28.8308Z" fill="currentColor"></path><path d="M124.679 32.2243H130.135V20.4175C130.135 18.2405 131.518 16.7935 133.336 16.7935C135.129 16.7935 136.333 18.0228 136.333 19.9565V32.2243H141.621V20.2126C141.621 18.1765 142.787 16.7935 144.771 16.7935C146.513 16.7935 147.819 17.8819 147.819 20.0717V32.2243H153.262V18.996C153.262 14.7317 150.726 12.2987 147.064 12.2987C144.182 12.2987 141.941 13.7713 141.135 16.0251H140.93C140.302 13.7457 138.292 12.2987 135.59 12.2987C132.939 12.2987 130.929 13.7073 130.109 16.0251H129.878V12.5548H124.679V32.2243Z" fill="currentColor"></path><path d="M174.815 4.76892H170.116L161.664 36.1685H166.364L174.815 4.76892Z" fill="currentColor"></path>',9),I=[q];function P(t,e){return Object(c["k"])(),Object(c["e"])("svg",S,I)}const A={},T=j()(A,[["render",P]]);var R=T,B={preserveAspectRatio:"none",viewBox:"0 0 24 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"},N=Object(c["f"])("path",{d:"M10.0692 1.06704C11.1853 0.128491 12.8147 0.128491 13.9308 1.06704L22.9308 8.63522C23.6087 9.20524 24 10.0456 24 10.9313V23.5C24 24.6046 23.1046 25.5 22 25.5H16.5C15.3954 25.5 14.5 24.6046 14.5 23.5V16.5H9.5V23.5C9.5 24.6046 8.60457 25.5 7.5 25.5H2C0.895431 25.5 0 24.6046 0 23.5V10.9313C0 10.0456 0.391346 9.20524 1.0692 8.63522L10.0692 1.06704Z",fill:"currentColor"},null,-1),$=[N];function J(t,e){return Object(c["k"])(),Object(c["e"])("svg",B,$)}const F={},U=j()(F,[["render",J]]);var G=U,Y={preserveAspectRatio:"none",viewBox:"0 0 26 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},z=Object(c["f"])("path",{d:"M13 0.942731V8.625L13.0007 9.25621L22.3025 9.25501L20.1495 7.10032C19.8167 6.76743 19.7865 6.2466 20.0589 5.87963L20.1497 5.7745C20.4826 5.44172 21.0034 5.41155 21.3704 5.68393L21.4755 5.77472L25.2213 9.52178C25.5538 9.85436 25.5842 10.3746 25.3125 10.7416L25.2219 10.8467L21.4762 14.601C21.1105 14.9676 20.5169 14.9683 20.1503 14.6026C19.8171 14.2701 19.7863 13.7493 20.0582 13.382L20.1488 13.2767L22.29 11.13L13.0007 11.1312L13 19.5625C13 20.1455 12.4735 20.5871 11.8994 20.4857L1.27444 18.6091C0.826512 18.53 0.5 18.1408 0.5 17.6859V2.68752C0.5 2.22839 0.832518 1.83681 1.28558 1.76241L11.9106 0.0176215C12.4814 -0.0761076 13 0.364318 13 0.942731ZM8.62769 9.87502C7.93585 9.87502 7.375 10.4359 7.375 11.1277C7.375 11.8196 7.93585 12.3804 8.62769 12.3804C9.31953 12.3804 9.88037 11.8196 9.88037 11.1277C9.88037 10.4359 9.31953 9.87502 8.62769 9.87502ZM14.25 18.6266L15.2064 18.6268L15.3338 18.6183C15.7919 18.556 16.1447 18.163 16.1439 17.6878L16.135 12.375H14.25V18.6266ZM14.2525 8.00002L14.25 6.4067V1.75002L15.1816 1.75002C15.6556 1.75002 16.0476 2.10192 16.1103 2.55891L16.1191 2.68597L16.1275 8.00002H14.2525Z",fill:"currentColor"},null,-1),D=[z];function E(t,e){return Object(c["k"])(),Object(c["e"])("svg",Y,D)}const K={},Q=j()(K,[["render",E]]);var W=Q,X={preserveAspectRatio:"none",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},tt=Object(c["f"])("path",{d:"M9.79959 5.26034C9.51774 5.56387 9.04319 5.58144 8.73966 5.29959L5 1.77348L1.26033 5.29959C0.956802 5.58144 0.482254 5.56387 0.200401 5.26034C-0.0814505 4.9568 -0.0638752 4.48225 0.239658 4.2004L4.48966 0.200402C4.77742 -0.0668049 5.22257 -0.0668049 5.51033 0.200402L9.76034 4.2004C10.0639 4.48225 10.0814 4.9568 9.79959 5.26034Z",fill:"currentColor"},null,-1),et=[tt];function nt(t,e){return Object(c["k"])(),Object(c["e"])("svg",X,et)}const rt={},ct=j()(rt,[["render",nt]]);var at=ct,ot={preserveAspectRatio:"none",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},st=Object(c["f"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.86393 0.25C8.00395 0.24991 8.14119 0.289014 8.26013 0.362887C8.37907 0.43676 8.47495 0.542452 8.53693 0.668L10.4189 4.483L14.6289 5.095C14.7674 5.11511 14.8975 5.17355 15.0044 5.26372C15.1114 5.35388 15.1911 5.47218 15.2343 5.60523C15.2776 5.73829 15.2828 5.8808 15.2493 6.01665C15.2159 6.1525 15.1451 6.27628 15.0449 6.374L11.9989 9.344L12.7179 13.536C12.7416 13.6739 12.7263 13.8157 12.6736 13.9454C12.6209 14.0751 12.533 14.1874 12.4198 14.2697C12.3066 14.352 12.1726 14.401 12.033 14.4111C11.8934 14.4212 11.7538 14.3921 11.6299 14.327L7.86393 12.347L4.09793 14.327C3.97412 14.392 3.8346 14.4211 3.69512 14.411C3.55565 14.4009 3.42177 14.352 3.30861 14.2699C3.19546 14.1877 3.10752 14.0755 3.05475 13.946C3.00197 13.8165 2.98644 13.6749 3.00993 13.537L3.72993 9.343L0.681934 6.374C0.5815 6.27632 0.510433 6.15247 0.476786 6.01647C0.443138 5.88047 0.448256 5.73777 0.491558 5.60453C0.534861 5.47129 0.614617 5.35284 0.72179 5.26261C0.828962 5.17238 0.959262 5.11397 1.09793 5.094L5.30793 4.483L7.19093 0.668C7.25291 0.542452 7.3488 0.43676 7.46774 0.362887C7.58668 0.289014 7.72392 0.24991 7.86393 0.25ZM7.86393 2.695L6.47893 5.5C6.42515 5.6089 6.34572 5.70311 6.24748 5.77453C6.14923 5.84595 6.03511 5.89244 5.91493 5.91L2.81793 6.36L5.05793 8.544C5.14508 8.62886 5.21029 8.73365 5.24792 8.84933C5.28555 8.96501 5.29448 9.0881 5.27393 9.208L4.74593 12.292L7.51493 10.836C7.62256 10.7794 7.74234 10.7499 7.86393 10.7499C7.98553 10.7499 8.1053 10.7794 8.21293 10.836L10.9829 12.292L10.4529 9.208C10.4324 9.0881 10.4413 8.96501 10.4789 8.84933C10.5166 8.73365 10.5818 8.62886 10.6689 8.544L12.9089 6.361L9.81293 5.911C9.69275 5.89344 9.57863 5.84695 9.48039 5.77553C9.38214 5.70411 9.30272 5.6099 9.24893 5.501L7.86393 2.694V2.695Z",fill:"currentColor"},null,-1),it=[st];function ut(t,e){return Object(c["k"])(),Object(c["e"])("svg",ot,it)}const lt={},ft=j()(lt,[["render",ut]]);var dt=ft,bt={preserveAspectRatio:"none",viewBox:"0 0 12 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},pt=Object(c["f"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 2.25001C3 2.44892 2.92099 2.63969 2.78033 2.78034C2.63968 2.92099 2.44892 3.00001 2.25 3.00001C2.05109 3.00001 1.86033 2.92099 1.71967 2.78034C1.57902 2.63969 1.5 2.44892 1.5 2.25001C1.5 2.05109 1.57902 1.86033 1.71967 1.71968C1.86033 1.57902 2.05109 1.50001 2.25 1.50001C2.44892 1.50001 2.63968 1.57902 2.78033 1.71968C2.92099 1.86033 3 2.05109 3 2.25001ZM3 4.37201C3.50042 4.19509 3.92217 3.84696 4.19073 3.38915C4.45929 2.93134 4.55735 2.39333 4.4676 1.87021C4.37785 1.34709 4.10605 0.87253 3.70025 0.53043C3.29445 0.18832 2.78077 0.00069046 2.25 0.00069046C1.71924 0.00069046 1.20556 0.18832 0.799762 0.53043C0.393962 0.87253 0.122161 1.34709 0.0324114 1.87021C-0.0573486 2.39333 0.0407214 2.93134 0.309281 3.38915C0.577841 3.84696 0.999591 4.19509 1.5 4.37201V5.25001C1.5 5.84674 1.73706 6.41904 2.15901 6.841C2.58097 7.26295 3.15327 7.50001 3.75 7.50001H5.25V9.628C4.74932 9.8049 4.3273 10.1532 4.05855 10.6112C3.78981 11.0692 3.69164 11.6075 3.78139 12.1309C3.87115 12.6543 4.14306 13.1291 4.54905 13.4714C4.95504 13.8136 5.46897 14.0014 6 14.0014C6.53104 14.0014 7.04497 13.8136 7.45096 13.4714C7.85695 13.1291 8.1289 12.6543 8.2186 12.1309C8.3084 11.6075 8.2102 11.0692 7.94146 10.6112C7.67271 10.1532 7.25069 9.8049 6.75 9.628V7.50001H8.25C8.8467 7.50001 9.419 7.26295 9.841 6.841C10.263 6.41904 10.5 5.84674 10.5 5.25001V4.37201C11.0004 4.19509 11.4222 3.84696 11.6907 3.38915C11.9593 2.93134 12.0574 2.39333 11.9676 1.87021C11.8778 1.34709 11.6061 0.87253 11.2002 0.53043C10.7944 0.18832 10.2808 0.00069046 9.75 0.00069046C9.2192 0.00069046 8.7056 0.18832 8.2998 0.53043C7.89396 0.87253 7.62216 1.34709 7.53241 1.87021C7.44265 2.39333 7.54072 2.93134 7.80928 3.38915C8.0778 3.84696 8.4996 4.19509 9 4.37201V5.25001C9 5.44892 8.921 5.63969 8.7803 5.78034C8.6397 5.92099 8.4489 6.00001 8.25 6.00001H3.75C3.55109 6.00001 3.36033 5.92099 3.21967 5.78034C3.07902 5.63969 3 5.44892 3 5.25001V4.37201ZM6.75 11.75C6.75 11.9489 6.67099 12.1397 6.53033 12.2803C6.38968 12.421 6.19892 12.5 6 12.5C5.80109 12.5 5.61033 12.421 5.46967 12.2803C5.32902 12.1397 5.25 11.9489 5.25 11.75C5.25 11.5511 5.32902 11.3603 5.46967 11.2197C5.61033 11.079 5.80109 11 6 11C6.19892 11 6.38968 11.079 6.53033 11.2197C6.67099 11.3603 6.75 11.5511 6.75 11.75ZM9.75 3.00001C9.9489 3.00001 10.1397 2.92099 10.2803 2.78034C10.421 2.63969 10.5 2.44892 10.5 2.25001C10.5 2.05109 10.421 1.86033 10.2803 1.71968C10.1397 1.57902 9.9489 1.50001 9.75 1.50001C9.5511 1.50001 9.3603 1.57902 9.2197 1.71968C9.079 1.86033 9 2.05109 9 2.25001C9 2.44892 9.079 2.63969 9.2197 2.78034C9.3603 2.92099 9.5511 3.00001 9.75 3.00001Z",fill:"currentColor"},null,-1),Ct=[pt];function Ot(t,e){return Object(c["k"])(),Object(c["e"])("svg",bt,Ct)}const vt={},jt=j()(vt,[["render",Ot]]);var mt=jt,_t={name:"icon",components:Object(x["a"])({},r),props:{name:{type:String,required:!0,validator:function(t){return Object.keys(r).includes(t)}}}};n("63b2");const gt=j()(_t,[["render",Z],["__scopeId","data-v-5fa70bf3"]]);var ht=gt,Lt={name:"logo",components:{icon:ht}};n("e947");const kt=j()(Lt,[["render",M],["__scopeId","data-v-988e3058"]]);var wt=kt,Vt={class:"nav"},yt={href:"/",class:"icon"},Ht={href:"/",class:"avatar"},Mt={href:"#!",class:"icon"};function Zt(t,e,n,r,a,o){var s=Object(c["p"])("icon"),i=Object(c["p"])("avatar");return Object(c["k"])(),Object(c["e"])("nav",Vt,[Object(c["f"])("a",yt,[Object(c["i"])(s,{name:"home"})]),Object(c["f"])("a",Ht,[Object(c["i"])(i,{avatar:n.avatar},null,8,["avatar"])]),Object(c["f"])("a",Mt,[Object(c["i"])(s,{name:"logout"})])])}var xt={class:"avatar"},St=["src"];function qt(t,e,n,r,a,o){return Object(c["k"])(),Object(c["e"])("div",xt,[Object(c["f"])("img",{src:n.avatar,class:"img",alt:"avatar"},null,8,St)])}var It={props:{avatar:{type:String,required:!0}}};n("c652");const Pt=j()(It,[["render",qt],["__scopeId","data-v-4e595733"]]);var At=Pt,Tt={name:"navigation",components:{icon:ht,avatar:At},props:{avatar:{type:String,required:!0,default:"https://picsum.photos/200/200"}}};n("feff");const Rt=j()(Tt,[["render",Zt],["__scopeId","data-v-6bfc2b6b"]]);var Bt=Rt,Nt=function(t){return Object(c["m"])("data-v-1090d96c"),t=t(),Object(c["l"])(),t},$t={class:"post"},Jt={class:"post__user"},Ft={class:"post__card"},Ut={class:"toggler"},Gt={key:0},Yt={class:"post__comments comments_list"},zt=Nt((function(){return Object(c["f"])("div",{class:"post__date"}," 15 JANUARY ",-1)}));function Dt(t,e,n,r,a,o){var s=Object(c["p"])("user"),i=Object(c["p"])("toggler"),u=Object(c["p"])("comment");return Object(c["k"])(),Object(c["e"])(c["a"],null,[Object(c["f"])("div",$t,[Object(c["f"])("div",Jt,[Object(c["i"])(s)]),Object(c["f"])("div",Ft,[Object(c["o"])(t.$slots,"card",{},void 0,!0)]),Object(c["f"])("div",Ut,[Object(c["i"])(i,{onOnToggle:o.toggleClick},null,8,["onOnToggle"])]),a.showComment?(Object(c["k"])(),Object(c["e"])("div",Gt,[Object(c["f"])("ul",Yt,[(Object(c["k"])(),Object(c["e"])(c["a"],null,Object(c["n"])(3,(function(t){return Object(c["f"])("li",{class:"comment__item",key:t},[Object(c["i"])(u)])})),64))])])):Object(c["d"])("",!0)]),zt],64)}var Et={class:"user__container"},Kt={class:"user"},Qt={class:"user__name"};function Wt(t,e,n,r,a,o){var s=Object(c["p"])("avatar");return Object(c["k"])(),Object(c["e"])("div",Et,[Object(c["f"])("div",Kt,[Object(c["i"])(s,{class:"user__avatar",avatar:n.avatar},null,8,["avatar"])]),Object(c["f"])("div",Qt,Object(c["r"])(n.name),1)])}var Xt={name:"user",components:{avatar:At},props:{avatar:{type:String,required:!0,default:"https://picsum.photos/200/200"},name:{type:String,required:!0,default:"John Galt"}}};n("666d");const te=j()(Xt,[["render",Wt],["__scopeId","data-v-2ce5aea1"]]);var ee=te,ne={class:"text"},re={class:"icon"};function ce(t,e,n,r,a,o){var s=Object(c["p"])("icon");return Object(c["k"])(),Object(c["e"])("button",{class:Object(c["j"])(["button",{active:a.isOpened}]),onClick:e[0]||(e[0]=function(){return o.toggle&&o.toggle.apply(o,arguments)})},[Object(c["f"])("span",ne,Object(c["r"])(a.isOpened?"Hide":"Show")+" issues",1),Object(c["f"])("span",re,[Object(c["i"])(s,{name:"triangle"})])],2)}var ae={components:{icon:ht},emits:["onToggle"],data:function(){return{isOpened:!1}},computed:{},methods:{toggle:function(){this.isOpened=!this.isOpened,this.$emit("onToggle",this.isOpened)}}};n("a491");const oe=j()(ae,[["render",ce],["__scopeId","data-v-6bdbef9c"]]);var se=oe,ie={class:"comment"},ue={class:"comment__username"};function le(t,e,n,r,a,o){return Object(c["k"])(),Object(c["e"])("div",ie,[Object(c["f"])("p",null,[Object(c["f"])("span",ue,Object(c["r"])(n.username),1),Object(c["h"])(" "+Object(c["r"])(n.text),1)])])}var fe={name:"comment",props:{username:{type:String,required:!0,default:"default username"},text:{type:String,required:!0,default:"default text"}}};n("ab87");const de=j()(fe,[["render",le],["__scopeId","data-v-6abd960d"]]);var be=de,pe={name:"post",components:{user:ee,toggler:se,comment:be},data:function(){return{showComment:!1}},methods:{toggleClick:function(t){this.showComment=t}}};n("092a");const Ce=j()(pe,[["render",Dt],["__scopeId","data-v-1090d96c"]]);var Oe=Ce,ve=function(t){return Object(c["m"])("data-v-3145425c"),t=t(),Object(c["l"])(),t},je={class:"card"},me=ve((function(){return Object(c["f"])("div",{class:"card__title_wrap"},[Object(c["f"])("h2",{class:"card__title"},"Title")],-1)})),_e=ve((function(){return Object(c["f"])("div",{class:"card__description_wrap"},[Object(c["f"])("p",{class:"card__description"},"card description")],-1)})),ge={class:"card__stats"};function he(t,e,n,r,a,o){var s=Object(c["p"])("stats");return Object(c["k"])(),Object(c["e"])("div",je,[me,_e,Object(c["f"])("div",ge,[Object(c["i"])(s,{stars:n.stars,forks:n.forks},null,8,["stars","forks"])])])}n("a9e3");var Le=function(t){return Object(c["m"])("data-v-383be16c"),t=t(),Object(c["l"])(),t},ke={class:"stats"},we={class:"stats__container stats__border-right"},Ve=Le((function(){return Object(c["f"])("div",{class:"stats__name"},"Star",-1)})),ye={class:"stats__container stats__border-right"},He={class:"stats__container stats__border-right"},Me=Le((function(){return Object(c["f"])("div",{class:"stats__name"},"Fork",-1)})),Ze={class:"stats__container"};function xe(t,e,n,r,a,o){var s=Object(c["p"])("icon");return Object(c["k"])(),Object(c["e"])("div",ke,[Object(c["f"])("div",we,[Object(c["i"])(s,{class:"stats__icon",name:"star"}),Ve]),Object(c["f"])("div",ye,Object(c["r"])(n.stars),1),Object(c["f"])("div",He,[Object(c["i"])(s,{class:"stats__icon",name:"fork"}),Me]),Object(c["f"])("div",Ze,Object(c["r"])(n.forks),1)])}var Se={name:"stats",components:{icon:ht},props:{stars:{type:Number,required:!0,default:0},forks:{type:Number,required:!0,default:0}}};n("7fc3");const qe=j()(Se,[["render",xe],["__scopeId","data-v-383be16c"]]);var Ie=qe,Pe={name:"card",components:{stats:Ie},props:{stars:{type:Number,required:!0,default:0},forks:{type:Number,required:!0,default:0}}};n("495e");const Ae=j()(Pe,[["render",he],["__scopeId","data-v-3145425c"]]);var Te=Ae,Re=n("7714"),Be={name:"feeds",components:{StoryUserItem:y,topline:_,logo:wt,navigation:Bt,post:Oe,card:Te},data:function(){return{stories:Re}},methods:{handlePress:function(){console.log("click")}}};n("4174");const Ne=j()(Be,[["render",l],["__scopeId","data-v-03ae87e6"]]);var $e=Ne,Je={name:"App",components:{feeds:$e}};n("11de");const Fe=j()(Je,[["render",a]]);var Ue=Fe;Object(c["b"])(Ue).mount("#app")},"588e":function(t,e,n){"use strict";n("191a")},"63b2":function(t,e,n){"use strict";n("92bf")},"666d":function(t,e,n){"use strict";n("d8a7")},"6dce":function(t,e,n){},7714:function(t){t.exports=JSON.parse('[{"id":"0","avatar":"https://picsum.photos/300/300","username":"One"},{"id":"1","avatar":"https://picsum.photos/400/400","username":"Two"},{"id":"2","avatar":"https://picsum.photos/500/500","username":"Three"},{"id":"3","avatar":"https://picsum.photos/600/600","username":"Four"}]')},7732:function(t,e,n){},"7fc3":function(t,e,n){"use strict";n("6dce")},"83be":function(t,e,n){},"92bf":function(t,e,n){},"96f8":function(t,e,n){},a491:function(t,e,n){"use strict";n("1af6")},a553:function(t,e,n){},ab87:function(t,e,n){"use strict";n("a553")},c480:function(t,e,n){},c652:function(t,e,n){"use strict";n("f434")},d8a7:function(t,e,n){},e947:function(t,e,n){"use strict";n("4a8e")},f434:function(t,e,n){},fb8b:function(t,e,n){},feff:function(t,e,n){"use strict";n("83be")}});
//# sourceMappingURL=app.3ec3ab14.js.map