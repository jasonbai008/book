"use strict";(self["webpackChunkbook"]=self["webpackChunkbook"]||[]).push([[401],{5401:function(t,e,n){n.r(e),n.d(e,{default:function(){return a}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("i",{staticClass:"el-icon-menu",on:{click:t.openMenu}}),n("div",{staticClass:"list"},t._l(t.list,(function(e,i){return n("div",{key:i,staticClass:"item"},[n("h5",[t._v(t._s(t._f("genFileName")(e)))]),n("audio",{attrs:{src:e,controls:""}})])})),0)])},s=[],o=(n(8309),n(4916),n(3123),n(7042),n(1539),n(2222),{name:"book",data:function(){return{list:[]}},mounted:function(){this.getList(this.$route.query.name,this.$route.query.origin)},filters:{genFileName:function(t){var e=t.lastIndexOf("/");return t.slice(e+1).split(".")[0]}},methods:{openMenu:function(){this.$bus.$emit("openDrawer")},getList:function(t,e){var n=this;fetch("/".concat(e,"/api/").concat(t,".json?time=").concat(Date.now())).then((function(t){return t.json()})).then((function(t){n.list=t}))}},watch:{$route:{handler:function(t,e){this.getList(this.$route.query.name,this.$route.query.origin)},deep:!0}}}),u=o,r=n(1001),c=(0,r.Z)(u,i,s,!1,null,"793ae890",null),a=c.exports}}]);
//# sourceMappingURL=401-legacy.0811c6e6.js.map