(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-306f0d77"],{"0904":function(t,e,s){t.exports=s.p+"assets/img/new2.d5be0ead.png"},"2d5b":function(t,e,s){},"2e63":function(t,e,s){t.exports=s.p+"assets/img/new7.82aaca84.png"},8027:function(t,e,s){t.exports=s.p+"assets/img/new4.c344cbc3.png"},d7c4:function(t,e,s){"use strict";s.r(e);s("14d9");var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page"},[e("header",{staticClass:"header"},[e("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.banners,(function(t,s){return e("van-swipe-item",{key:s,staticClass:"bannerItem"},[e("img",{staticClass:"bannerImg",attrs:{src:t.imgsrc,alt:""}})])})),1)],1),e("main",{staticClass:"main"},[e("div",{staticClass:"blockPanel"},[t._v("劳动力采集")]),e("ul",{staticClass:"menulists2"},t._l(t.menuList,(function(s,n){return e("li",{key:n,staticClass:"menu",on:{click:function(e){return t.$router.push(s.url)}}},[e("img",{staticClass:"menuImg",attrs:{src:s.menuBg,alt:""}}),e("h4",{staticClass:"menuTit"},[t._v(t._s(s.title))]),e("small",{staticClass:"menuInfo"},[t._v("立即进入")])])})),0)])])},a=[];const i=[{title:"采集管理",menuBg:s("0904"),url:"/example/labor/laborForm"},{title:"组员管理",menuBg:s("8027"),url:"/example/labor/laborAccount"},{title:"劳动力列表",menuBg:s("2e63"),url:"/example/labor/laborList"}],r=[{title:"采集管理",menuBg:s("0904"),url:"/laborForm"},{title:"劳动力列表",menuBg:s("2e63"),url:"/laborList"}];var l={data(){return{banners:[{imgsrc:"https://img-qn.51miz.com/preview/element/00/01/27/16/E-1271618-C22DE044.jpg!/quality/90/unsharp/true/compress/true/fwfh/640x420"}],menuList:[]}},created(){this.initMenu()},methods:{initMenu(){const t=localStorage.getItem("admin_identity");"1"===String(t)?this.menuList=i:this.menuList=r}}},u=l,c=(s("ed05"),s("2877")),o=Object(c["a"])(u,n,a,!1,null,"e1fa35da",null);e["default"]=o.exports},ed05:function(t,e,s){"use strict";s("2d5b")}}]);