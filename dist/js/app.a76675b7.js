(function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],m=0,v=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(v.length)v.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,s=1;s<i.length;s++){var c=i[s];0!==r[c]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=i[0]))}return e}var n={},r={app:0},a=[];function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var n=i("85ec"),r=i.n(n);r.a},"0efa":function(e,t,i){},1768:function(e,t,i){"use strict";var n=i("0efa"),r=i.n(n);r.a},4253:function(e,t,i){},"569e":function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=i("8c4f");n["a"].use(r["a"]);var a=new r["a"]({routes:[]}),o=a,s=i("2f62"),c=i("bc3a"),l=i.n(c),u={state:{movies:[]},actions:{GET_MOVIES_FROM_API:function(e){var t=e.commit;return l()("https://kinopoiskapiunofficial.tech/api/v2.1/films/top?type=BEST_FILMS_LIST&listId=1",{method:"GET",headers:{accept:"application/json","X-API-KEY":"4aaa82c7-2c53-40cc-8205-3719863a0373"}}).then((function(e){return t("SET_MOVIES_TO_STATE",e.data.films),console.log(e.data.films),e})).catch((function(e){return console.log(e),e}))}},mutations:{SET_MOVIES_TO_STATE:function(e,t){e.movies=t}},getters:{MOVIES:function(e){return e.movies}}},m={state:{movieFilteredList:""},actions:{SET_INPUT_DATA:function(e,t){var i=e.commit;i("SET_INPUT_DATA",t)}},mutations:{SET_INPUT_DATA:function(e,t){e.movieFilteredList=t}},getters:{MOVIE_INPUT_DATA:function(e){return e.movieFilteredList}}};n["a"].use(s["a"]);var v=new s["a"].Store({modules:{movies:u,dataShare:m}}),f=v,p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("v-main-wrapper")],1)},d=[],_=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"v-main-wrapper",staticClass:"v-main-wrapper"},[i("div",{ref:"v-modal-overlay",staticClass:"v-modal-overlay"}),i("v-header"),i("v-search"),i("v-movie-list")],1)},h=[],g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"header"},[i("h1",{staticClass:"header__title"},[e._v("Movie Finder")])])}],O={name:"v-header",props:{},computed:{},methods:{},watch:{}},T=O,E=(i("f1a0"),i("2877")),y=Object(E["a"])(T,g,b,!1,null,null,null),S=y.exports,I=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"search"},[i("div",{staticClass:"search-wrapper"},[i("div",{staticClass:"search-block"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.movieFilteredList,expression:"movieFilteredList"}],staticClass:"search-block__input",attrs:{type:"text"},domProps:{value:e.movieFilteredList},on:{input:function(t){t.target.composing||(e.movieFilteredList=t.target.value)}}})]),i("p",{staticClass:"search__description"},[e._v("Sharing a few of our favorites movies")])])])},w=[],L={name:"v-search",computed:{movieFilteredList:{get:function(){return this.$store.state.dataShare.movieFilteredList},set:function(e){this.$store.dispatch("SET_INPUT_DATA",e)}}}},M=L,j=(i("1768"),Object(E["a"])(M,I,w,!1,null,null,null)),A=j.exports,P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"movie"},[i("ul",{staticClass:"movie__list"},e._l(e.filteredList,(function(e){return i("v-movie-item",{key:e.filmId,attrs:{movie_data:e}})})),1)])},C=[],F=(i("4de4"),i("c975"),i("5530")),x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",{ref:"movie__item",staticClass:"movie__item",on:{click:e.toggleItem}},[i("h2",{staticClass:"movie__item-title"},[e._v(e._s(e.movie_data.nameRu))]),i("img",{ref:"movie__item-img",staticClass:"movie__item-img",attrs:{src:e.movie_data.posterUrlPreview,alt:""}}),i("p",{staticClass:"movie__item-rating"},[e._v("Rating: "),i("span",{staticClass:"movie__item-rating--count"},[e._v(e._s(e.movie_data.rating))])]),i("p",{staticClass:"movie__item-year"},[e._v("Year: "+e._s(e.movie_data.year))])])},$=[],V={name:"v-movie-item",data:function(){return{closing:!1}},props:{movie_data:{type:Object,default:function(){return{}}}},methods:{open:function(){this.closing=!0,this.$refs["movie__item"].classList.add("open-item"),this.$refs["movie__item-img"].classList.add("open-img"),document.querySelector(".v-modal-overlay").classList.add("open-overlay")},close:function(){this.closing=!1,this.$refs["movie__item"].classList.remove("open-item"),this.$refs["movie__item-img"].classList.remove("open-img"),document.querySelector(".v-modal-overlay").classList.remove("open-overlay")},toggleItem:function(){this.closing?this.close():this.open()}}},k=V,D=(i("fc97"),Object(E["a"])(k,x,$,!1,null,null,null)),N=D.exports,U={name:"v-movie-list",components:{vMovieItem:N},computed:Object(F["a"])(Object(F["a"])({movieFilteredList:function(){return this.$store.getters.MOVIE_INPUT_DATA}},Object(s["c"])(["MOVIES","MOVIE_INPUT_DATA"])),{},{filteredList:function(){var e=this.movieFilteredList;return this.MOVIES.filter((function(t){return""===e||t.nameRu.toLowerCase().indexOf(e.toLowerCase())>-1}))}}),methods:Object(F["a"])({},Object(s["b"])(["GET_MOVIES_FROM_API"])),mounted:function(){this.GET_MOVIES_FROM_API().then((function(e){e.data&&console.log("Data arrived")}))}},R=U,G=(i("a37b"),Object(E["a"])(R,P,C,!1,null,null,null)),q=G.exports,J={name:"v-main-wrapper",components:{vHeader:S,vSearch:A,vMovieList:q}},Y=J,B=(i("85bd"),Object(E["a"])(Y,_,h,!1,null,null,null)),H=B.exports,K={name:"app",components:{vMainWrapper:H}},W=K,X=(i("034f"),Object(E["a"])(W,p,d,!1,null,null,null)),z=X.exports;i("f5df1"),i("569e");n["a"].config.productionTip=!1,new n["a"]({router:o,store:f,render:function(e){return e(z)}}).$mount("#app")},"85bd":function(e,t,i){"use strict";var n=i("4253"),r=i.n(n);r.a},"85ec":function(e,t,i){},8783:function(e,t,i){},a37b:function(e,t,i){"use strict";var n=i("b1d4"),r=i.n(n);r.a},b1d4:function(e,t,i){},f020:function(e,t,i){},f1a0:function(e,t,i){"use strict";var n=i("f020"),r=i.n(n);r.a},fc97:function(e,t,i){"use strict";var n=i("8783"),r=i.n(n);r.a}});
//# sourceMappingURL=app.a76675b7.js.map