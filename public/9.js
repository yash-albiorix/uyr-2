(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{101:function(e,t,r){"use strict";(function(e){var n=r(1);r(4);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.a={data:function(){return{nav:[],buffor:[],img_path:e.env.MIX_IMAGE_URL}},created:function(){"Yes"!=localStorage.getItem("is_login")?this.$router.push({name:"login"}):this.getLeftMenus()},computed:i({show:function(){return this.$store.state.sidebarShow},minimize:function(){return this.$store.state.sidebarMinimize}},Object(n.c)("LeftMenus",["tabs"]),{},Object(n.c)("auth",["user"])),methods:i({},Object(n.b)("LeftMenus",["getLeftMenus"]))}}).call(this,r(127))},166:function(e,t,r){var n=r(416);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(16)(n,o);n.locals&&(e.exports=n.locals)},167:function(e,t,r){var n=r(418);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(16)(n,o);n.locals&&(e.exports=n.locals)},168:function(e,t,r){var n=r(420);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(16)(n,o);n.locals&&(e.exports=n.locals)},415:function(e,t,r){"use strict";r(166)},416:function(e,t,r){(e.exports=r(15)(!1)).push([e.i,"\n.c-icon[data-v-1764a3b0] {\n  margin-right: 0.3rem;\n}\n",""])},417:function(e,t,r){"use strict";r(167)},418:function(e,t,r){(e.exports=r(15)(!1)).push([e.i,"\n.breadcrumb-item + .breadcrumb-item::before {\n  color: #000;\n  content: '>>';\n  padding: 0px !important;\n}",""])},419:function(e,t,r){"use strict";r(168)},420:function(e,t,r){(e.exports=r(15)(!1)).push([e.i,"\n.fade-enter-active[data-v-fbbae6ec],\n.fade-leave-active[data-v-fbbae6ec] {\n  -webkit-transition: opacity 0.3s;\n  transition: opacity 0.3s;\n}\n.fade-enter[data-v-fbbae6ec],\n.fade-leave-to[data-v-fbbae6ec] {\n  opacity: 0;\n}\n",""])},805:function(e,t,r){"use strict";r.r(t);r(4);var n=r(1);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a={name:"TheSidebar",data:function(){return{nav:[],buffor:[]}},created:function(){this.getLeftMenus()},computed:i({show:function(){return this.$store.state.sidebarShow},minimize:function(){return this.$store.state.sidebarMinimize}},Object(n.c)("LeftMenus",["tabs"]),{},Object(n.c)("auth",["user"])),methods:i({},Object(n.b)("LeftMenus",["getLeftMenus"]),{logoError:function(e){e.target.src="/uploads/logo/default-logo.png"}}),mounted:function(){var e=this;this.$root.$on("toggle-sidebar",(function(){var t=!0===e.show||"responsive"===e.show;e.show=!t&&"responsive"})),this.$root.$on("toggle-sidebar-mobile",(function(){var t="responsive"===e.show||!1===e.show;e.show=!!t||"responsive"}))}},c=r(6),u=Object(c.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("CSidebar",{staticClass:"d-none",attrs:{fixed:"",minimize:e.minimize,show:!e.show},on:{"update:show":function(t){return e.$store.commit("set",["sidebarShow",t])}}},[r("ul",{staticClass:"c-sidebar-nav h-100 ps ps--active-y"},e._l(e.tabs,(function(t,n){return r("li",{staticClass:"c-sidebar-nav-item"},[r("router-link",{staticClass:"c-sidebar-nav-link",attrs:{to:{name:t.href},id:"menu_"+n}},[r("CIcon",{staticClass:"mr-1",attrs:{name:t.icon}}),e._v(" "),r("span",[e._v(e._s(t.name))])],1),e._v(" "),t.child?r("ul",{staticClass:"c-sidebar-nav h-100 ps ps--active-y"},e._l(t.child,(function(t){return r("li",{key:t.root_name},[r("router-link",{attrs:{to:{name:t.root_name}}},[e._v("\n             "+e._s(t.title)+"\n          ")])],1)})),0):e._e()],1)})),0)])}),[],!1,null,null,null).exports,l=r(101).a,f=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"d-flex ml-3 align-items-center"},[r("router-link",{attrs:{to:{name:"dashboard"}}},[r("div",{staticClass:"logo mr-5 "},[r("img",{attrs:{src:"/images/uyr_logo.png",width:"150px"}})])]),e._v(" "),r("CHeaderNav",{staticClass:"mob_menu mr-auto"},e._l(e.tabs,(function(t){return e.user&&e.tabs?r("div",[r("li",{staticClass:"c-header-nav-item dropdownn"},[r("router-link",{attrs:{to:{name:t.href}}},[e._v(e._s(t.slug))]),e._v(" "),t.child?r("ul",{staticClass:"dropdown-menuu"},e._l(t.child,(function(t){return r("li",[r("router-link",{attrs:{to:{name:t.href}}},[e._v(e._s(t.slug))])],1)})),0):e._e()],1)]):e._e()})),0)],1)])}),[],!1,null,null,null).exports,p=r(19),d=r.n(p);function b(e,t,r,n,o,i,s){try{var a=e[i](s),c=a.value}catch(e){return void r(e)}a.done?t(c):Promise.resolve(c).then(n,o)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h,g,O={name:"TheHeaderDropdownAccnt",data:function(){return{itemsCount:42,userid:0}},created:function(){},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(r,!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(n.c)("auth",["user"])),methods:{logout:(h=d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("auth/logout");case 2:t=this,localStorage.clear(),t.$router.push({name:"login"});case 5:case"end":return e.stop()}}),e,this)})),g=function(){var e=this,t=arguments;return new Promise((function(r,n){var o=h.apply(e,t);function i(e){b(o,r,n,i,s,"next",e)}function s(e){b(o,r,n,i,s,"throw",e)}i(void 0)}))},function(){return g.apply(this,arguments)}),imageError:function(e){e.target.src="/uploads/profile/default-profile.png"}}};r(415);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(r,!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j={name:"TheHeader",data:function(){return{isActive:!1}},components:{TheHeaderDropdownAccnt:Object(c.a)(O,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.user?r("CDropdown",{staticClass:"c-header-nav-items",attrs:{inNav:"",placement:"bottom-end","add-menu-classes":"pt-0"},scopedSlots:e._u([{key:"toggler",fn:function(){return[r("CHeaderNavLink",[e.user?r("div",{staticClass:"c-avatar"},[r("img",{staticClass:"c-avatar-img ",attrs:{src:"/uploads/profile/"+e.user.id+"/"+e.user.profile_photo},on:{error:e.imageError}})]):e._e()])]},proxy:!0}],null,!1,1557093012)},[e._v(" "),r("CDropdownHeader",{staticClass:"text-center",attrs:{tag:"div",color:"light"}},[r("strong",[e._v("My Account")])]),e._v(" "),4==e.user.role_type?r("CDropdownItem",{attrs:{to:{name:"updateDoctorProfile",params:{id:e.user.id}}}},[r("CIcon",{attrs:{name:"cil-user"}}),e._v(" Update Profile\n  ")],1):e._e(),e._v(" "),r("CDropdownItem",{attrs:{to:{name:"profileSettings"}}},[r("CIcon",{attrs:{name:"cil-user"}}),e._v(" Profile Settings\n  ")],1),e._v(" "),1==e.user.role_type||2==e.user.role_type?r("CDropdownItem",{attrs:{to:{name:"emailSetting"}}},[r("CIcon",{attrs:{name:"cil-user"}}),e._v(" Email Setting\n  ")],1):e._e(),e._v(" "),1==e.user.role_type||2==e.user.role_type?r("CDropdownItem",{attrs:{to:{name:"roles"}}},[r("CIcon",{attrs:{name:"cil-lock-unlocked"}}),e._v(" Manage Roles\n  ")],1):e._e(),e._v(" "),r("CDropdownItem",{on:{click:function(t){return e.logout()}}},[r("CIcon",{attrs:{name:"cil-power-standby"}}),e._v(" Logout\n  ")],1)],1):e._e()}),[],!1,null,"1764a3b0",null).exports,CMenu:f},created:function(){},computed:y({},Object(n.c)({user:"auth/user"})),methods:y({},Object(n.b)("auth",["fetchUser","get_user"]))},C=(r(417),{name:"TheFooter"});function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(r,!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k={name:"TheContainer",components:{TheSidebar:u,TheHeader:Object(c.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("CHeader",{staticClass:"border-bottom-0 bg-gray-100",attrs:{fixed:"","with-subheader":"",light:""}},[r("CToggler",{staticClass:"ml-0 d-none",attrs:{"in-header":""},on:{click:function(t){return e.$store.commit("toggleSidebarMobile")}}}),e._v(" "),r("CToggler",{staticClass:"ml-0 d-none",attrs:{"in-header":""},on:{click:function(t){return e.$store.commit("toggleSidebarDesktop")}}}),e._v(" "),r("div",{staticClass:"menu_overlay",class:{active:e.isActive},on:{click:function(t){e.isActive=!e.isActive}}}),e._v(" "),r("CMenu",{class:{active:e.isActive}}),e._v(" "),r("div",{staticClass:"d-flex align-items-center ml-auto mr-3 d-lg-none"},[r("div",{staticClass:"hamburger menutoggle",class:{active:e.isActive},attrs:{id:"hamburger-6 "},on:{click:function(t){e.isActive=!e.isActive}}},[r("span",{staticClass:"line"}),e._v(" "),r("span",{staticClass:"line"}),e._v(" "),r("span",{staticClass:"line"})])]),e._v(" "),r("CHeaderNav",{staticClass:"mr-4 ml-lg-auto"},[e.user?r("span",[e._v(" Logged In As "+e._s(e.user.title)+" ")]):e._e(),e._v(" "),r("TheHeaderDropdownAccnt")],1)],1)}),[],!1,null,null,null).exports,TheFooter:Object(c.a)(C,(function(){var e=this.$createElement;return(this._self._c||e)("CFooter",{attrs:{fixed:!1}})}),[],!1,null,null,null).exports},data:function(){return{role_type:""}},created:function(){"Yes"!=localStorage.getItem("is_login")?this.$router.push({name:"Login"}):this.get_users()},computed:D({},Object(n.c)({user:"auth/user"})),methods:D({},Object(n.b)("auth",["fetchUser","get_user"]),{get_users:function(){var e=this;this.get_user().then((function(t){e.fetchUser()})).catch((function(t){localStorage.removeItem("is_login"),e.$router.push({name:"Login"})}))}})},x=(r(419),Object(c.a)(k,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"c-app"},[t("TheSidebar"),this._v(" "),t("CWrapper",[t("TheHeader"),this._v(" "),t("div",{staticClass:"c-body"},[t("main",{staticClass:"c-main"},[t("CContainer",{attrs:{fluid:""}},[t("transition",{attrs:{name:"fade"}},[t("router-view")],1)],1)],1),this._v(" "),t("TheFooter")],1)],1)],1)}),[],!1,null,"fbbae6ec",null));t.default=x.exports}}]);