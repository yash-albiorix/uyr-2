(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{28:function(t,s,e){"use strict";var a={name:"Uheader",data:function(){return{isActive:!1}}},i=e(6),r=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("header",{staticClass:"header"},[e("div",{staticClass:"top-header-bar"},[e("div",{staticClass:"container"},[e("div",{staticClass:"top-header"},[e("div",{staticClass:"top-header-right"},[e("ul",[e("li",[e("vue-fontawesome",{attrs:{icon:"volume-control-phone",size:"0.9"}}),t._v(" "),e("a",{attrs:{href:"tel:+496170961709"}},[t._v("Customer Support")])],1),t._v(" "),e("li",[e("vue-fontawesome",{attrs:{icon:"user-circle-o",size:"0.9"}}),t._v(" "),e("router-link",{attrs:{to:"login"}},[t._v("\n                                Login")])],1),t._v(" "),e("li",[e("vue-fontawesome",{attrs:{icon:"user",size:"0.9"}}),t._v(" "),e("router-link",{attrs:{to:"register"}},[t._v("Register")])],1)])])])])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"main-header"},[e("div",{staticClass:"logo"},[e("router-link",{attrs:{to:{name:"homepage"}}},[e("img",{attrs:{src:"images/uyr_logo.png",width:"180",alt:"Logo"}})])],1),t._v(" "),e("div",{staticClass:"menu"},[e("ul",{staticClass:"menu_ul",class:{active:t.isActive}},[e("li",[e("router-link",{attrs:{to:{name:"homepage"}}},[e("vue-fontawesome",{staticClass:"mr-1",attrs:{icon:"home",size:"1"}}),t._v("Home")],1)],1),t._v(" "),e("li",[e("router-link",{attrs:{to:{name:"about"}}},[e("vue-fontawesome",{staticClass:"mr-1",attrs:{icon:"users",size:"1"}}),t._v("About Us")],1)],1),t._v(" "),e("li",[e("router-link",{attrs:{to:{name:"career"}}},[e("vue-fontawesome",{staticClass:"mr-1",attrs:{icon:"briefcase",size:"1"}}),t._v("Careers")],1)],1),t._v(" "),e("li",[e("router-link",{attrs:{to:{name:"blog"}}},[e("vue-fontawesome",{staticClass:"mr-1",attrs:{icon:"pencil-square-o",size:"1"}}),t._v("Articles")],1)],1),t._v(" "),e("li",[e("router-link",{attrs:{to:{name:"contact"}}},[e("vue-fontawesome",{staticClass:"mr-1",attrs:{icon:"map-marker",size:"1"}}),t._v(" Contact Us")],1)],1)]),t._v(" "),e("div",{staticClass:"hamburger menutoggle",class:{active:t.isActive},attrs:{id:"hamburger-6"},on:{click:function(s){t.isActive=!t.isActive}}},[e("span",{staticClass:"line"}),t._v(" "),e("span",{staticClass:"line"}),t._v(" "),e("span",{staticClass:"line"})])])])])]),t._v(" "),e("div",{staticClass:"menu_overlay",class:{active:t.isActive},on:{click:function(s){t.isActive=!t.isActive}}})])}),[],!1,null,null,null);s.a=r.exports},29:function(t,s,e){"use strict";var a=e(82),i={name:"Ufooter",data:function(){return{}},components:{UAnimateContainer:a.UAnimateContainer,UAnimate:a.UAnimate}},r=e(6),n=Object(r.a)(i,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"footer_bottom text-center"},[s("div",{staticClass:"container"},[s("div",{staticClass:"f_bottm"},[this._m(0),this._v(" "),s("div",{staticClass:"f_left"},[s("ul",[s("li",[s("router-link",{attrs:{to:{name:"privacy-policy"}}},[this._v("Privacy & Policy")])],1),this._v(" "),s("li",[s("router-link",{attrs:{to:{name:"terms-condition"}}},[this._v("Terms & Conditions")])],1)])])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"f_left"},[s("p",[this._v("2022 © All Rights Reserved.")])])}],!1,null,null,null);s.a=n.exports},808:function(t,s,e){"use strict";e.r(s);var a=e(19),i=e.n(a),r=e(28),n=e(29),o=e(77),c=e.n(o),l=(e(125),e(126),e(1)),u=e(4),v=e.n(u);function d(t,s,e,a,i,r,n){try{var o=t[r](n),c=o.value}catch(t){return void e(t)}o.done?s(c):Promise.resolve(c).then(a,i)}function m(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,a)}return e}function _(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?m(e,!0).forEach((function(s){h(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):m(e).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}function h(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}var p,C,b={data:function(){return{main_slider:{slidesToShow:1,dots:!0,arrows:!0},testimonials_slider:{slidesToShow:1,dots:!0,arrows:!1},partners_slider:{slidesToShow:4,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}}]}}},components:{VueSlickCarousel:c.a,Uheader:r.a,Ufooter:n.a},created:function(){this.fetchUser(),this.homePageData()},computed:_({},Object(l.c)("Front/HomePage",["result"])),methods:_({},Object(l.b)("auth",["login","validateLogin","saveToken","fetchUser","resetState"]),{},Object(l.b)("Front/HomePage",["gethomePageData"]),{fetchUser:(p=i.a.mark((function t(){var s,e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("/api/get_user");case 3:s=t.sent,e=s.data,this.user=e,""!=this.user?(localStorage.setItem("is_login","Yes"),this.$router.push({path:"dashboard"})):localStorage.removeItem("is_login"),t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),t,this,[[0,9]])})),C=function(){var t=this,s=arguments;return new Promise((function(e,a){var i=p.apply(t,s);function r(t){d(i,e,a,r,n,"next",t)}function n(t){d(i,e,a,r,n,"throw",t)}r(void 0)}))},function(){return C.apply(this,arguments)}),homePageData:function(){this.gethomePageData().then((function(){}))}})},f=e(6),g=Object(f.a)(b,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("u-animate-container",[e("Uheader"),t._v(" "),e("main",{staticClass:"pts"},[e("div",{staticClass:"banner-section"},[t.result&&t.result.homepageSlider?e("div",[e("VueSlickCarousel",t._b({staticClass:"main_slider"},"VueSlickCarousel",t.main_slider,!1),t._l(t.result.homepageSlider,(function(s,a){return e("div",{key:a,staticClass:"banner"},[s.image?e("img",{attrs:{src:"/uploads/homepageSlider/"+s.id+"/"+s.image,alt:"banner"}}):t._e()])})),0)],1):t._e()]),t._v(" "),e("div",{staticClass:"service_section ptb_60"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-12"},[e("u-animate",{staticClass:"section_heading text-center mb-3",attrs:{name:"zoomIn",duration:"2s"}},[e("h2",[t._v("Services")])])],1),t._v(" "),t._l(t.result.service,(function(s,a){return t.result&&t.result.service?e("div",{key:a,staticClass:"col-md-4 col-sm-6 serv_b"},[e("u-animate",{staticClass:"services",attrs:{name:"zoomIn",duration:"1.5s",delay:"0s",el:"div"}},[e("div",{staticClass:"service_details"},[e("div",{staticClass:"service_icon"},[s.image_name?e("img",{attrs:{src:"/uploads/service/"+s.id+"/"+s.image_name}}):t._e()]),t._v(" "),e("div",{staticClass:"serv_desc"},[e("h2",[t._v(t._s(s.service_name))]),t._v(" "),e("p",[t._v(t._s(s.description))])])])])],1):t._e()}))],2)])]),t._v(" "),e("div",{staticClass:"about_us_section ptb_60 bg_gray"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-12"},[e("u-animate",{staticClass:"section_heading text-center mb-3",attrs:{name:"zoomIn",duration:"2s"}},[e("h2",[t._v("About Us")])])],1),t._v(" "),e("div",{staticClass:"col-md-12"},[e("u-animate",{staticClass:"about_description",attrs:{name:"zoomIn",duration:"2s"}},[this.result.aboutUS?e("div",{staticClass:"abt_heading"},[e("h2",[t._v(" "+t._s(this.result.aboutUS.title))])]):t._e(),t._v(" "),this.result&&this.result.aboutUS?e("p",{staticClass:"text-justify"},[e("span",{domProps:{innerHTML:t._s(this.result.aboutUS.description.substring(0,1200)+"...")}})]):t._e(),t._v(" "),e("router-link",{attrs:{to:{name:"about"}}},[e("button",{staticClass:"btn btn-custom"},[t._v("Read more")])])],1)],1)])])]),t._v(" "),e("div",{staticClass:"testimonials_section py-5 mb-5"},[e("div",{staticClass:"container"},[e("u-animate",{staticClass:"section_heading text-center",attrs:{name:"zoomIn",duration:"2s"}},[e("h2",[t._v("Testimonials")])]),t._v(" "),t.result&&t.result.testimonials?e("div",[e("VueSlickCarousel",t._b({staticClass:"testimonials_slider"},"VueSlickCarousel",t.testimonials_slider,!1),t._l(t.result.testimonials,(function(s,a){return e("div",{key:a,staticClass:"testimonials_slide"},[e("u-animate",{attrs:{name:"zoomIn",duration:"1.5s",delay:"0s"}},[e("div",{staticClass:"testimonial"},[e("div",{staticClass:"testimonial_text"},[e("p",{domProps:{innerHTML:t._s(s.description)}})]),t._v(" "),e("h2",[t._v(t._s(s.name))])])])],1)})),0)],1):t._e()],1)]),t._v(" "),e("div",{staticClass:"why_us_bg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"why_us"},[e("h2",[t._v("Need a Doctor ?")]),t._v(" "),e("button",{staticClass:"btn btn-custom"},[t._v("Book Appointment")])])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"why_us"},[e("h2",[t._v("Why work for us ?")]),t._v(" "),e("router-link",{attrs:{to:{name:"why-us"}}},[e("button",{staticClass:"btn btn-custom"},[t._v("View Detail")])])],1)])])])]),t._v(" "),e("div",{staticClass:"partners_section ptb_60 pb-5"},[e("div",{staticClass:"container"},[e("div",{staticClass:"section_heading text-center"},[e("h2",[t._v("Associate Partners")])]),t._v(" "),e("div",{staticClass:"partner_s"},[t.result&&t.result.associatePartner?e("div",[e("VueSlickCarousel",t._b({staticClass:"partners_slider"},"VueSlickCarousel",t.partners_slider,!1),t._l(t.result.associatePartner,(function(t,s){return e("div",{key:s},[e("div",{staticClass:"partner_logo"},[t.image?e("img",{attrs:{width:"100%",alt:"about img",src:"uploads/associatePartners/"+t.id+"/"+t.image}}):e("img",{attrs:{src:"/images/uyr_logo.png",alt:"Logo"}})])])})),0)],1):t._e()])])])]),t._v(" "),e("Ufooter")],1)],1)}),[],!1,null,null,null);s.default=g.exports}}]);