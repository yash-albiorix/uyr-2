(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{28:function(t,e,s){"use strict";var a={name:"Uheader",data:function(){return{isActive:!1}}},i=s(6),r=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("header",{staticClass:"header"},[s("div",{staticClass:"top-header-bar"},[s("div",{staticClass:"container"},[s("div",{staticClass:"top-header"},[s("div",{staticClass:"top-header-right"},[s("ul",[s("li",[s("vue-fontawesome",{attrs:{icon:"volume-control-phone",size:"0.9"}}),t._v(" "),s("a",{attrs:{href:"tel:+496170961709"}},[t._v("Customer Support")])],1),t._v(" "),s("li",[s("vue-fontawesome",{attrs:{icon:"user-circle-o",size:"0.9"}}),t._v(" "),s("router-link",{attrs:{to:"login"}},[t._v("\n                                Login")])],1),t._v(" "),s("li",[s("vue-fontawesome",{attrs:{icon:"user",size:"0.9"}}),t._v(" "),s("router-link",{attrs:{to:"register"}},[t._v("Register")])],1)])])])])]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"main-header"},[s("div",{staticClass:"logo"},[s("router-link",{attrs:{to:{name:"homepage"}}},[s("img",{attrs:{src:"images/uyr_logo.png",width:"180",alt:"Logo"}})])],1),t._v(" "),s("div",{staticClass:"menu"},[s("ul",{staticClass:"menu_ul",class:{active:t.isActive}},[s("li",[s("router-link",{attrs:{to:{name:"homepage"}}},[s("vue-fontawesome",{staticClass:"mr-1",attrs:{icon:"home",size:"1"}}),t._v("Home")],1)],1),t._v(" "),s("li",[s("router-link",{attrs:{to:{name:"about"}}},[s("vue-fontawesome",{staticClass:"mr-1",attrs:{icon:"users",size:"1"}}),t._v("About Us")],1)],1),t._v(" "),s("li",[s("router-link",{attrs:{to:{name:"career"}}},[s("vue-fontawesome",{staticClass:"mr-1",attrs:{icon:"briefcase",size:"1"}}),t._v("Careers")],1)],1),t._v(" "),s("li",[s("router-link",{attrs:{to:{name:"blog"}}},[s("vue-fontawesome",{staticClass:"mr-1",attrs:{icon:"pencil-square-o",size:"1"}}),t._v("Articles")],1)],1),t._v(" "),s("li",[s("router-link",{attrs:{to:{name:"contact"}}},[s("vue-fontawesome",{staticClass:"mr-1",attrs:{icon:"map-marker",size:"1"}}),t._v(" Contact Us")],1)],1)]),t._v(" "),s("div",{staticClass:"hamburger menutoggle",class:{active:t.isActive},attrs:{id:"hamburger-6"},on:{click:function(e){t.isActive=!t.isActive}}},[s("span",{staticClass:"line"}),t._v(" "),s("span",{staticClass:"line"}),t._v(" "),s("span",{staticClass:"line"})])])])])]),t._v(" "),s("div",{staticClass:"menu_overlay",class:{active:t.isActive},on:{click:function(e){t.isActive=!t.isActive}}})])}),[],!1,null,null,null);e.a=r.exports},29:function(t,e,s){"use strict";var a=s(82),i={name:"Ufooter",data:function(){return{}},components:{UAnimateContainer:a.UAnimateContainer,UAnimate:a.UAnimate}},r=s(6),n=Object(r.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"footer_bottom text-center"},[e("div",{staticClass:"container"},[e("div",{staticClass:"f_bottm"},[this._m(0),this._v(" "),e("div",{staticClass:"f_left"},[e("ul",[e("li",[e("router-link",{attrs:{to:{name:"privacy-policy"}}},[this._v("Privacy & Policy")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:{name:"terms-condition"}}},[this._v("Terms & Conditions")])],1)])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"f_left"},[e("p",[this._v("2022 © All Rights Reserved.")])])}],!1,null,null,null);e.a=n.exports},812:function(t,e,s){"use strict";s.r(e);var a=s(28),i=s(29),r=s(77),n=s.n(r),o=(s(125),s(126),s(1));function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(s,!0).forEach((function(e){v(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function v(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var u={data:function(){return{}},components:{VueSlickCarousel:n.a,Uheader:a.a,Ufooter:i.a},created:function(){this.homePageData()},computed:c({},Object(o.c)("Front/HomePage",["result"])),methods:c({},Object(o.b)("Front/HomePage",["gethomePageData"]),{homePageData:function(){this.gethomePageData().then((function(){}))}})},m=s(6),d=Object(m.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("u-animate-container",[s("Uheader"),t._v(" "),s("main",{staticClass:"pts"},[s("section",{staticClass:"inner-header"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12 sec-title colored text-center"},[s("h2",[t._v("Articles")])])])])]),t._v(" "),s("div",{staticClass:"blog_section ptb_60 pt-2"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-8"},t._l(t.result.blog,(function(e,a){return t.result&&t.result.blog?s("div",{key:a,staticClass:"single_blog"},[s("div",{staticClass:"blog_img"},[e.image_name?s("img",{attrs:{width:"100%",alt:"about img",src:"/uploads/blog/"+e.id+"/"+e.image_name}}):s("img",{attrs:{src:"/images/banner.jpg",width:"100%",alt:"about img"}})]),t._v(" "),s("div",{staticClass:"blog_details"},[s("div",{staticClass:"blog_title"},[s("h2",[t._v(t._s(e.title))])]),t._v(" "),s("ul",{staticClass:"single-post"},[s("li",[s("span",{staticClass:"p-date"},[s("i",{staticClass:"fa fa-calendar-check-o"}),t._v(" Feb 16, 2021 ")])]),t._v(" "),s("li",[s("span",{staticClass:"p-date"},[s("i",{staticClass:"fa fa-user-o"}),t._v("Author: "+t._s(e.author_name)+" ")])])]),t._v(" "),s("p",[s("span",{domProps:{innerHTML:t._s(e.description.substring(0,600)+"...")}})]),t._v(" "),s("router-link",{attrs:{to:{name:"blog_details",params:{id:e.id}}}},[t._v(" Read more...")])],1)]):t._e()})),0),t._v(" "),s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"card latest_blog_box"},[s("div",{staticClass:"card-header p-3"},[s("h6",[t._v("Latest Post")])]),t._v(" "),s("div",{staticClass:"card-body p-3"},t._l(t.result.blog,(function(e,a){return a<5?s("router-link",{key:a,attrs:{to:{name:"blog_details",params:{id:e.id}}}},[s("div",{staticClass:"latest_blog"},[s("div",{staticClass:"lblog_img"},[e.image_name?s("img",{attrs:{width:"100%",alt:"about img",src:"/uploads/blog/"+e.id+"/"+e.image_name}}):s("img",{attrs:{src:"/images/banner.jpg",width:"100%",alt:"about img"}})]),t._v(" "),s("div",{staticClass:"lbog_info"},[s("h2",[t._v(t._s(e.title))]),t._v(" "),s("p",[t._v("04 Dec 2020")])])])]):t._e()})),1)])])])])])]),t._v(" "),s("Ufooter")],1)],1)}),[],!1,null,null,null);e.default=d.exports}}]);