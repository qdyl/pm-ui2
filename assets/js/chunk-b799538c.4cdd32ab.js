(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b799538c"],{1888:function(t,s,e){},2361:function(t,s,e){"use strict";e("37d6")},"37d6":function(t,s,e){},"4b46":function(t,s,e){"use strict";e("1888")},"5e75":function(t,s,e){},"70bc":function(t,s,e){t.exports=e.p+"assets/img/boy.e1183d99.png"},"70df":function(t,s,e){"use strict";e("5e75")},"925e":function(t,s,e){"use strict";e("b6a4")},b6a4:function(t,s,e){},c827:function(t,s,e){t.exports=e.p+"assets/img/girl.d08d66fd.png"},faf8:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"page"},[s("header",{staticClass:"headerBlock"},[s("div",{staticClass:"topItem"},[s("van-icon",{attrs:{name:"like",size:"25px",color:"#1989fa"}}),s("p",{staticClass:"tpText"},[t._v("关注我的")])],1),s("div",{staticClass:"topItem"},[s("van-icon",{attrs:{name:"like",size:"25px",color:"#fd6954"}}),s("p",{staticClass:"tpText"},[t._v("我关注的")])],1),s("div",{staticClass:"topItem"},[s("van-icon",{attrs:{name:"star",size:"25px",color:"#1989fa"}}),s("p",{staticClass:"tpText"},[t._v("收藏的")])],1)]),s("main",{staticClass:"main"},[s("PeopleList",{attrs:{"person-list":t.pLists,"chat-acontid1":t.chatAcontId1,"chat-acontid2":t.chatAcontId2,"hire-jobid":t.hireJobId},on:{emitEnterChatRoom:t.emitEnterChatRoom}})],1)])},i=[],a=(e("14d9"),function(){var t=this,s=t._self._c;return s("section",{staticClass:"chat-box"},[t.personList.length>0?s("ul",{staticClass:"lists"},t._l(t.personList,(function(e,n){return s("li",{key:n,staticClass:"list",on:{click:function(s){return t.onChatPerson(e)}}},[s("div",{staticClass:"leftBar"},[s("img",{staticClass:"userImg",attrs:{src:e.userImg,alt:""}})]),s("section",{staticClass:"rightBar"},[s("div",{staticClass:"content1"},[s("h3",{staticClass:"chatName ellipsis1"},[t._v(t._s(e.chatName))]),s("div",{staticClass:"chatCont ellipsis1"},[t._v(t._s(e.content))])]),s("div",{staticClass:"content2"},[s("p",{staticClass:"sendTime"},[t._v(t._s(e.sendTime))]),s("span",{staticClass:"setStatus"})])])])})),0):s("van-empty",{attrs:{description:"暂无消息"}})],1)}),c=[];const o=[{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",chatName:"百度有限公司",content:"你好，很看好你，来公司面试么？来公司面试么？",sendTime:"14:52"},{userImg:e("c827"),chatName:"百度有限公司",content:"你好",sendTime:"14:52"},{userImg:e("c827"),chatName:"百度有限公司",content:"你好",sendTime:"14:52"},{userImg:e("c827"),chatName:"百度有限公司",content:"你好",sendTime:"14:52"},{userImg:e("70bc"),chatName:"百度有限公司",content:"你好，很看好你，来公司面试么？来公司面试么？",sendTime:"14:52"},{userImg:e("70bc"),chatName:"百度有限公司",content:"你好，很看好你，来公司面试么？来公司面试么？",sendTime:"14:52"}];var m={props:{personList:{type:Array,default:()=>o},chatAcontid1:{type:[Number,String],default:"",required:!0},chatAcontid2:{type:[Number,String],default:"",required:!0},hireJobid:{type:[Number,String],default:""}},data(){return{}},methods:{onChatPerson(t){this.$emit("emitEnterChatRoom",t)}}},u=m,r=(e("4b46"),e("2877")),l=Object(r["a"])(u,a,c,!1,null,"06d82c2e",null),d=l.exports,p={components:{PeopleList:d},data(){return{show:!0,chatAcontId1:"",chatAcontId2:"",hireJobId:1,pLists:[{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",chatName:"2222百度有限公司",content:"你好，很看好你，来公司面试么？来公司面试么？",sendTime:"14:52"},{userImg:e("c827"),chatName:"11111百度有限公司",content:"你好",sendTime:"14:52"},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",chatName:"百度有限公司",content:"你好",sendTime:"14:52"},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",chatName:"百度有限公司",content:"你好",sendTime:"14:52"},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",chatName:"百度有限公司",content:"你好",sendTime:"14:52"},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",chatName:"百度有限公司",content:"你好",sendTime:"14:52"}]}},created(){},methods:{emitEnterChatRoom(){this.$router.push("/example/thePages/chat/chatRoom")}}},f=p,h=(e("925e"),Object(r["a"])(f,n,i,!1,null,"6f1eb621",null));s["default"]=h.exports},fe8a:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"page"},[s("NewsOn",{attrs:{"news-lists":t.newsLists}}),s("footer",{staticClass:"footer"},[s("van-field",{attrs:{center:"",clearable:"",label:"",placeholder:"请输入消息"},scopedSlots:t._u([{key:"left-icon",fn:function(){return[s("van-icon",{attrs:{name:"more-o",size:"25px",color:"#07c160"},on:{click:t.onLeftIcon}})]},proxy:!0},{key:"button",fn:function(){return[t.newsValue?s("van-button",{attrs:{size:"small",type:"primary"},on:{click:t.sendMsg}},[t._v("发送")]):s("van-button",{attrs:{size:"small",type:"default",icon:"plus",plain:"",hairline:""},on:{click:function(s){t.subInfo.isShow2=!t.subInfo.isShow2}}})]},proxy:!0}]),model:{value:t.newsValue,callback:function(s){t.newsValue=s},expression:"newsValue"}}),s("ul",{directives:[{name:"show",rawName:"v-show",value:t.subInfo.isShow2,expression:"subInfo.isShow2"}],staticClass:"subMenu-box"},[s("li",{staticClass:"menu-item"},[s("div",{staticClass:"menuBg"},[s("van-icon",{staticClass:"iconBg",attrs:{name:"photo-o",size:"25px",color:"#333"}})],1),s("span",{staticClass:"menuTit"},[t._v("图片")])]),s("li",{staticClass:"menu-item"},[s("div",{staticClass:"menuBg"},[s("van-icon",{staticClass:"iconBg",attrs:{name:"paid",size:"25px",color:"#333"}})],1),s("span",{staticClass:"menuTit"},[t._v("拍摄")])]),s("li",{staticClass:"menu-item"},[s("div",{staticClass:"menuBg"},[s("van-icon",{staticClass:"iconBg",attrs:{name:"video-o",size:"25px",color:"#333"}})],1),s("span",{staticClass:"menuTit"},[t._v("视频通话")])])])],1)],1)},i=[],a=function(){var t=this,s=t._self._c;return s("main",{staticClass:"chatRoom-main"},[s("div",{staticClass:"chatRoom-innerBox"},[s("ul",{staticClass:"news-lists"},t._l(t.newsLists,(function(e,n){return s("li",{key:n,staticClass:"new-list",class:{direction:2==e.type}},[s("div",{staticClass:"imgTimgBar"},[s("div",{staticClass:"time"},[t._v(t._s(e.sendTime))]),s("div",{staticClass:"userImg"},[s("img",{staticClass:"img",attrs:{src:e.userImg,alt:""}})])]),s("div",{staticClass:"contentBar"},[s("div",{staticClass:"newsCont"},[t._v(t._s(e.content))])])])})),0)])])},c=[];const o=[{userImg:e("c827"),content:"hr你好，我很看好公司的职位，很有意向很有意向很有意向很有意向很有意向很有意向很有意向很有意向很有意向",sendTime:"2021-05-16 15:30",type:2},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:e("c827"),content:"hr你好，我很看好公司的职位，很有意向很有意向很有意向很有意向很有意向很有意向很有意向很有意向很有意向",sendTime:"2021-05-16 15:30",type:2},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1}];var m={props:{newsLists:{type:Array,default:()=>o}}},u=m,r=(e("70df"),e("2877")),l=Object(r["a"])(u,a,c,!1,null,"c04e707a",null),d=l.exports,p={components:{NewsOn:d},data(){return{subInfo:{isShow1:!1,isShow2:!1},newsValue:"",newsLists:[{userImg:e("c827"),content:"hr你好，我很看好公司的职位，很有意向很有意向很有意向很有意向很有意向很有意向很有意向很有意向很有意向",sendTime:"2021-05-16 15:30",type:2},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"1111111你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1},{userImg:e("c827"),content:"hr你好，我很看好公司的职位，很有意向很有意向很有意向很有意向很有意向很有意向很有意向很有意向很有意向",sendTime:"2021-05-16 15:30",type:2},{userImg:"https://t7.baidu.com/it/u=963301259,1982396977&fm=193&f=GIF",content:"你好，来贵公司面试么",sendTime:"2021-05-16 15:30",type:1}]}},methods:{sendMsg(){console.log(2222)},getMsg(){},newsOn(){},onLeftIcon(){console.log(111)}}},f=p,h=(e("2361"),Object(r["a"])(f,n,i,!1,null,"bf81009c",null));s["default"]=h.exports}}]);