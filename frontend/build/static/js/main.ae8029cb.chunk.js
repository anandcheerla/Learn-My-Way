(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{117:function(e,t,a){},118:function(e,t,a){},119:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(14),l=a.n(r),c=(a(93),a(9)),o=a.n(c),s=a(18),u=a(7),d=a(17),m=a(15),p=a.n(m),g=a(34),v=a(28),b={login:p.a.get("authSession"),articles:[],username:null,tags:[],userDetails:{}},h=Object(g.b)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOGIN":return Object(v.a)({},e,{login:t.payload.login});case"ADD_USER_NAME":return Object(v.a)({},e,{username:t.payload.username});case"SET_MY_ARTICLES":return Object(v.a)({},e,{articles:t.payload.articles});case"SET_TAGS":return Object(v.a)({},e,{tags:t.payload.tags});case"SET_USER_DETAILS":return Object(v.a)({},e,{userDetails:t.payload.user_details});default:return e}}}),E=Object(g.c)(h),f=(a(117),a(118),a(4)),_=a(175),y=function(e){return{type:"SET_LOGIN",payload:{login:e}}},O=function(e){return{type:"SET_MY_ARTICLES",payload:{articles:e}}};a(119);var j=Object(d.b)((function(e){return{}}),{setLogin:y,setUserName:function(e){return{type:"ADD_USER_NAME",payload:{username:e}}},setUserDetails:function(e){return{type:"SET_USER_DETAILS",payload:{userDetails:e}}}})((function(e){var t=Object(n.useState)(""),a=Object(f.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(""),s=Object(f.a)(c,2),d=s[0],m=s[1],g=Object(n.useState)(""),v=Object(f.a)(g,2),b=v[0],h=v[1],E=Object(n.useState)(""),y=Object(f.a)(E,2),O=y[0],j=y[1],N=Object(n.useState)(""),S=Object(f.a)(N,2),w=S[0],A=S[1],M=Object(n.useRef)(null),k=Object(u.g)(),C=function(){if(D()){var t={username:r,password:d};M.current.innerHTML="Logging In",M.current.style.opacity=.7,o.a.post("/user/login",t).then((function(a){!1!==a.data?(e.setLogin(!0),p.a.set("authSession",!0),e.setUserName(t.username),e.setUserDetails(a.data),p.a.set("savedArticles",a.data.savedArticles),k.push("/home")):(A("Incorrect Credentials"),M.current.innerHTML="Login",M.current.style.opacity=1)}))}},D=function(){var e=!0;return""==r?(h("Please Fill in this field"),e=!1):h(""),""==d?(j("Please Fill in this field"),e=!1):j(""),e};return i.a.createElement("div",{id:"Login"},i.a.createElement("div",{className:"Login__input-div"},i.a.createElement("input",{"data-test":"Login__username-input",type:"text",className:"Login__input-field",id:"Login__username",name:"username",placeholder:"username",onChange:function(e){l(e.target.value)},value:r,required:!0}),i.a.createElement("label",{"data-test":"Login__username-warning-label",className:"Login__input-validation-message"},b)),i.a.createElement("div",{className:"Login__input-div"},i.a.createElement("input",{"data-test":"Login__password-input",type:"password",className:"Login__input-field",id:"Login__password",name:"password",placeholder:"password",onChange:function(e){m(e.target.value)},onKeyDown:function(e){13==e.which&&C()},value:d,required:!0}),i.a.createElement("label",{"data-test":"Login__password-warning-label",className:"Login__input-validation-message"},O)),i.a.createElement("div",{className:"Login__message"},i.a.createElement("label",{"data-test":"Login__form-warning-label",id:"Login__login-err-msg",className:"Login__input-validation-message"},w)),i.a.createElement("div",{className:"Login__button"},i.a.createElement(_.a,{"data-test":"Login__login-button",type:"submit",onClick:C,ref:M,variant:"outlined",color:"primary"},"Log In")))}));a(121);var N=function(e){var t=Object(u.g)(),a=Object(n.useState)(""),r=Object(f.a)(a,2),l=r[0],c=r[1],s=Object(n.useState)(""),d=Object(f.a)(s,2),m=d[0],p=d[1],g=Object(n.useState)(""),v=Object(f.a)(g,2),b=v[0],h=v[1],E=Object(n.useState)(""),y=Object(f.a)(E,2),O=y[0],j=y[1],N=Object(n.useState)(""),S=Object(f.a)(N,2),w=S[0],A=S[1],M=Object(n.useState)(""),k=Object(f.a)(M,2),C=k[0],D=k[1],I=Object(n.useState)(""),U=Object(f.a)(I,2),R=U[0],x=U[1],T=Object(n.useState)(""),L=Object(f.a)(T,2),H=L[0],F=L[1],P=Object(n.useState)(""),q=Object(f.a)(P,2),B=q[0],J=q[1],G=Object(n.useState)(""),K=Object(f.a)(G,2),W=K[0],Y=K[1],$=Object(n.useState)(""),z=Object(f.a)($,2),V=z[0],Q=z[1],X=Object(n.useState)(""),Z=Object(f.a)(X,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(""),ne=Object(f.a)(ae,2),ie=ne[0],re=ne[1],le=function(e){if(e.preventDefault(),ce()){var a=document.getElementById("Register__register-button");a.innerHTML="Signing Up",a.style.opacity=.7;var n={username:l,password:m,firstName:b,lastName:O,email:w,contactNumber:C};o.a.post("/user/register",n).then((function(e){if(1!=e.data)return console.log("coming"),re(e.data),a.innerHTML="Register",void(a.style.opacity=1);t.push("/login")}))}},ce=function(){var e=!0;""==b?(J("Please Fill in this field"),e=!1):J(""),""==O?(Y("Please Fill in this field"),e=!1):Y(""),""==l?(x("Please Fill in this field"),e=!1):x(""),""==m?(F("Please Fill in this field"),e=!1):m.length<8?(F("Password Must be greater than 7 Characters"),e=!1):F("");var t=/^.*@.*\..+/.test(w);""==w?(Q("Please Fill in this field"),e=!1):t?Q(""):(Q("Please Enter the correct Email"),e=!1);var a=/^[0-9]+$/.test(C);return""==C?(te("Please Fill in this field"),e=!1):a?te(""):(te("Contact number should contain digits"),e=!1),e};return i.a.createElement("div",{id:"Register"},i.a.createElement("div",{className:"Register__input-div"},i.a.createElement("input",{type:"text",onChange:function(e){h(e.target.value)},className:"Register__input-field",id:"Register__first-name",name:"firstName",placeholder:"First Name",required:!0}),i.a.createElement("label",{className:"Register__input-validation-message"},B)),i.a.createElement("div",{className:"Register__input-div"},i.a.createElement("input",{type:"text",className:"Register__input-field",id:"Register__last-name",name:"lastName",placeholder:"Last Name",onChange:function(e){j(e.target.value)},required:!0}),i.a.createElement("label",{className:"Register__input-validation-message"},W)),i.a.createElement("div",{className:"Register__input-div"},i.a.createElement("input",{type:"text",className:"Register__input-field",id:"Register__username",name:"username",placeholder:"User Name",onChange:function(e){c(e.target.value)},required:!0}),i.a.createElement("label",{className:"Register__input-validation-message"},R)),i.a.createElement("div",{className:"Register__input-div"},i.a.createElement("input",{type:"password",className:"Register__input-field",id:"Register__password",name:"password",placeholder:"Password",onChange:function(e){p(e.target.value)},required:!0}),i.a.createElement("label",{className:"Register__input-validation-message"},H)),i.a.createElement("div",{className:"Register__input-div"},i.a.createElement("input",{type:"email",className:"Register__input-field",id:"Register__email",name:"email",placeholder:"Email",onChange:function(e){A(e.target.value)},required:!0}),i.a.createElement("label",{className:"Register__input-validation-message"},V)),i.a.createElement("div",{className:"Register__input-div"},i.a.createElement("input",{type:"text",className:"Register__input-field",id:"Register__contact-number",name:"contactNumber",placeholder:"Contact Number",onChange:function(e){D(e.target.value)},onKeyDown:function(e){13==e.which&&le(e)},required:!0}),i.a.createElement("label",{className:"Register__input-validation-message"},ee)),i.a.createElement("div",{className:"Register__message"},i.a.createElement("label",{className:"Register__input-validation-message"},ie)),i.a.createElement("br",null),i.a.createElement("div",{className:"Register__button"},i.a.createElement(_.a,{onClick:function(e){return le(e)},id:"Register__register-button",variant:"outlined",color:"primary"},"Register")))},S=a(184);a(122),a(123);function w(e){var t=Object(n.useState)(!1),a=Object(f.a)(t,2),r=a[0],l=a[1];return i.a.createElement("div",null,i.a.createElement("div",{onClick:function(){return l(!r)}},e.children),r&&i.a.createElement("div",{className:"Menu__items-div"},e.items.map((function(e){return i.a.createElement(s.b,{to:"/".concat(e.matchUrl)},i.a.createElement("div",null,e.itemName))}))))}var A=Object(d.b)((function(e){return{login:e.app.login}}))((function(e){return i.a.createElement("div",{id:"Header"},e.login?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"Header__nav-bar-button"},i.a.createElement(s.b,{to:"/my-articles"},"My Articles")),i.a.createElement("div",{className:"Header__nav-bar-button"},i.a.createElement(s.b,{to:"/home"},"Home")),i.a.createElement("div",{className:"Header__nav-bar-div--right"},i.a.createElement("div",null,i.a.createElement(w,{items:[{itemName:"Profile",clickHandler:"",matchUrl:"my-profile"},{itemName:"Settings",clickHandler:"",matchUrl:"settings"},{itemName:"Logout",clickHandler:"",matchUrl:"logout"}]},i.a.createElement(S.a,{"aria-controls":"simple-menu","aria-haspopup":"true"}))))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"Header__nav-bar-button"},i.a.createElement(s.b,{to:"/login"},"Login")),i.a.createElement("div",{className:"Header__nav-bar-button"},i.a.createElement(s.b,{to:"/about"},"About")),i.a.createElement("div",{className:"Header__nav-bar-button"},i.a.createElement(s.b,{to:"/register"},"Register"))))}));var M=Object(d.b)(null,{setLogin:y})((function(e){return o.a.get("/user/logout").then((function(t){e.setLogin(!1),p.a.clear()})),i.a.createElement("div",null)}));a(124);var k=function(e){return i.a.createElement("div",{className:"About"},i.a.createElement("h3",null,"Have you ever scared of reading an article/material that you just come across when you are browsing.... Title is catchy, but the article is too big"),i.a.createElement("br",null),i.a.createElement("h3",null,"Have you ever thought that you want to glance at an article inorder to get an overview, but tired of reading the entire thing..."),i.a.createElement("br",null),i.a.createElement("h3",null,"Have you ever tired of reading boring paragraphs which spans few pages and stumped by the massive size where the probability to overlook is high..."),i.a.createElement("br",null),i.a.createElement("h3",null,"Have you ever thought while you were reading, it would be better if we know where to focus/stress more and which part is complex or which part is easy to understand...!!!"),i.a.createElement("br",null),i.a.createElement("h3",null,"Have you ever overlooked things/information that is required the most in understanding the essence of the entire article..."),i.a.createElement("br",null),i.a.createElement("h3",null,"Even if you didnot think none of these, you are welcome to check out this !!!"),i.a.createElement("br",null),i.a.createElement("p",null,"This application is a learning platform.The main intention of the application is to make the reading/learning effective in terms of presentation,focus and efficiency. The learning will be in the form of articles which is some information that the people want to share/track/learn. The article is divided into small(very small and clear as possible)learning chunks with individual importance and level of complexity that is set by the person who prepares the article. Based on the Importance the reader can decide which unit to focus more and which unit to focus less and which is important. Based on the level of complexity the reader can learn and understand what ever they want to in whatever pace they are able to... combination of these two things makes the learning effective..."),i.a.createElement("br",null),i.a.createElement("p",null,"This application could be used in two ways. one way, people can track their learnings that they have learned somewhere else. Preparing an article with more emphasis on each and every small unit requires some good understanding and intuition, helps them to understand things even better... Second way,They can post the same article, so that someone could read it and understand in the way you understood...By filtering the information, one can get the most out of it..."))},C=(a(125),a(13)),D=a(42),I=a.n(D),U=a(182),R=a(183),x=a(45),T=a(179),L=a(77),H=a.n(L),F=(a(126),a(76)),P=a.n(F);a(127);var q=function(e){var t=Object(u.g)(),a=Object(n.useState)(!1),r=Object(f.a)(a,2),l=r[0],c=r[1],s=function(e){e&&e.preventDefault(),t.goBack()};return i.a.createElement("div",{className:"UnitModal"},i.a.createElement("div",{className:"UnitModal__inner-div"},i.a.createElement("div",{className:"UnitModal--top-align"},i.a.createElement("div",{className:"UnitModal__unit-type"},i.a.createElement("h2",{"data-test":"UnitModal__unit-type"},"".concat(e.complexity.toUpperCase()," ").concat(e.priority,"/5"))),i.a.createElement("div",{class:"UnitModal__close-icon"},i.a.createElement(P.a,{onClick:function(e){return s(e)}}))),i.a.createElement("div",{className:"UnitModal--middle-align"},i.a.createElement("div",{className:"UnitModal__unit-data--left-align"},""!==e.heading&&i.a.createElement("div",{className:"UnitModal__heading"},i.a.createElement("h2",{"data-test":"UnitModal__heading"},e.heading)),""!==e.shortDescription&&i.a.createElement("div",{className:"UnitModal--background-grey"},i.a.createElement("p",{"data-test":"UnitModal__shortDescription"},e.shortDescription)),""!==e.longDescription&&i.a.createElement("div",{className:"UnitModal--background-grey"},i.a.createElement("p",{"data-test":"UnitModal__longDescription"},e.longDescription))),i.a.createElement("div",{className:"UnitModal__unit-details--right-align"},"myArticle"===e.articleType&&i.a.createElement("div",{className:"UnitModal__more"},i.a.createElement("div",{onClick:function(e){c(!l)}},"More"),l&&i.a.createElement("div",{onClick:function(){window.confirm("Are you sure, you want to delete the article ?")&&o.a.delete("/user/".concat(e.articleId,"/delete-unit/").concat(e.unitId)).then((function(t){p.a.set(e.unitId,{deleted:!0}),s()}))}},"Delete"),l&&i.a.createElement("div",null,"Edit"))))))};a(129);var B=Object(d.b)((function(e){return{articles:e.app.articles}}),{setArticles:O})((function(e){var t=Object(u.h)(),a=t.path,r=t.url,l=Object(u.g)(),c=Object(n.useState)(""),o=Object(f.a)(c,2),s=(o[0],o[1],Object(n.useState)("")),d=Object(f.a)(s,2),m=(d[0],d[1],Object(n.useState)("")),p=Object(f.a)(m,2),g=(p[0],p[1],Object(n.useState)("")),v=Object(f.a)(g,2),b=(v[0],v[1],Object(n.useState)("")),h=Object(f.a)(b,2),E=(h[0],h[1],Object(n.useState)(!1)),_=Object(f.a)(E,2);return _[0],_[1],i.a.createElement("div",{id:"Unit"},i.a.createElement("div",{onClick:function(t){return function(t){t.preventDefault(),l.push("".concat(r,"/").concat(e.unitId))}(t)}},i.a.createElement("h2",{"data-test":"Unit__heading"},e.heading),i.a.createElement("h3",{"data-test":"Unit__shortDescription"},e.shortDescription)),i.a.createElement(i.a.Fragment,null,i.a.createElement(u.b,{path:"".concat(a,"/").concat(e.unitId)},i.a.createElement(q,{articleType:e.articleType,heading:e.heading,shortDescription:e.shortDescription,longDescription:e.longDescription,priority:e.priority,complexity:e.complexity,articleId:e.articleId,unitId:e.unitId,uploaderUserName:e.uploaderUserName,articleIndex:e.articleIndex,unitIndex:e.unitIndex}))))}));function J(e){return i.a.createElement(i.a.Fragment,null,e.units&&e.units.map((function(t){return null==p.a.get(t._id)&&i.a.createElement(B,{articleType:e.type,heading:t.heading,shortDescription:t.shortDescription,longDescription:t.longDescription,priority:t.priority,complexity:t.complexity,unitId:t._id,articleId:e.dbId,uploaderUserName:e.uploaderUserName,articleIndex:e.articleIndex,unitIndex:t.unitIndex})})))}a(130);var G=Object(d.b)((function(e){return{articles:e.app.articles}}),{setArticles:O})((function(e){var t=p.a.get("savedArticles"),a=p.a.get("likedArticles"),r=Object(u.g)(),l=Object(u.h)(),c=l.path,s=l.url,d=(l.isExact,Object(n.useState)(!1)),m=Object(f.a)(d,2),g=m[0],v=m[1],b=Object(n.useState)(!1),h=Object(f.a)(b,2),E=(h[0],h[1],Object(n.useState)("")),y=Object(f.a)(E,2),O=y[0],j=y[1],N=Object(n.useState)(""),S=Object(f.a)(N,2),w=S[0],A=S[1],M=Object(n.useState)(""),k=Object(f.a)(M,2),D=k[0],U=k[1],R=Object(n.useState)(""),L=Object(f.a)(R,2),F=L[0],P=L[1],q=Object(n.useState)(""),B=Object(f.a)(q,2),G=B[0],K=B[1],W=Object(n.useState)(""),Y=Object(f.a)(W,2),$=Y[0],z=Y[1],V=Object(n.useState)("Just now"),Q=Object(f.a)(V,2),X=Q[0],Z=Q[1],ee=Object(n.useState)(e.likes),te=Object(f.a)(ee,2),ae=te[0],ne=te[1],ie=p.a.get("".concat(e.dbId,"_sd")),re=Object(n.useState)(ie||null==ie&&t&&1==t[e.dbId]||!1),le=Object(f.a)(re,2),ce=le[0],oe=le[1],se=Object(n.useState)(p.a.get("".concat(e.dbId,"_ld"))||a&&1==a[e.dbId]||!1),ue=Object(f.a)(se,2),de=(ue[0],ue[1],Object(n.useState)("default")),me=Object(f.a)(de,2),pe=(me[0],me[1],Object(n.useState)(!1)),ge=Object(f.a)(pe,2),ve=ge[0],be=ge[1],he=Object(n.useState)(!1),Ee=Object(f.a)(he,2),fe=Ee[0],_e=Ee[1],ye=Object(n.useState)(e.units||[]),Oe=Object(f.a)(ye,2),je=Oe[0],Ne=Oe[1],Se=Object(n.useRef)(null),we=Object(n.useRef)(null),Ae=function(t,a){if(t.preventDefault(),t.persist(),"delete_article"===a){if(window.confirm("Are you sure, you want to delete the article ?")){o.a.delete("/user/article-delete/"+e.dbId).then((function(e){}));var n=Object(C.a)(e.articles);n[e.articleIndex]=null,e.setArticles(n),_e(!1)}}else"save_article"===a?(Me(),_e(!1)):"remove_article"===a?(ke(),_e(!1)):"change_visibility"===a&&(_e(!1),"private"===e.visibility?o.a.get("/user/".concat(e.dbId,"/make-article-public")).then((function(e){})):o.a.get("/user/".concat(e.dbId,"/make-article-private")).then((function(e){})))},Me=function(){try{o.a.post("/user/save-article/".concat(e.dbId)).then((function(t){1==t.data&&(p.a.set("".concat(e.dbId,"_sd"),!0),oe(!0))}))}catch(t){console.log(t)}},ke=function(){try{o.a.post("/user/unsave-article/".concat(e.dbId)).then((function(t){1==t.data&&(console.log("removed from saved articles"),p.a.set("".concat(e.dbId,"_sd"),!1),oe(!1))}))}catch(t){console.log(t)}};return Object(n.useEffect)((function(){if(void 0!=e.lastUpdatedTime&&null!=e.lastUpdatedTime){var t=new Date,a=new Date(e.lastUpdatedTime),n=Math.floor(t-a),i=Math.floor(n/6e4),r=a.getMonth(),l=a.getDate();t.getDate()==l&&t.getMonth()==r?Z(i<=0?"Just now":i<60?i+" min ago":Math.floor(i/60)+" hours ago"):Z(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][r]+" "+l)}}),[]),i.a.createElement("div",{id:"Article"},i.a.createElement("div",{onClick:function(){g?g&&(be(!1),v(!1),r.push(O)):(v(!0),j(s),r.push("".concat(s,"/").concat(e.dbId)))}},i.a.createElement("div",null,i.a.createElement("h1",{"data-test":"Article__heading"},e.heading),i.a.createElement("p",{"data-test":"Article__description"},e.description)),i.a.createElement(u.b,{exact:!0,path:"".concat(c)},i.a.createElement("div",null,"myArticle"!=e.type&&i.a.createElement("p",{"data-test":"Article__uploader-first-name"},e.uploaderFirstName),i.a.createElement("p",null,X))),i.a.createElement("div",{className:"Article--right-align",id:"Article__more-icon-div"},i.a.createElement("div",{onClick:function(e){return e.stopPropagation()},id:"Article__more_dropdown"},i.a.createElement("div",{onClick:function(e){_e(!fe)}},"More"),fe&&"myArticle"===e.type&&i.a.createElement("div",{onClick:function(e){return Ae(e,"change_visibility")}},"Make ","private"===e.visibility?"public":"private"),fe&&"myArticle"===e.type&&i.a.createElement("div",{onClick:function(e){return Ae(e,"delete_article")}},"Delete Article"),fe&&(ce?i.a.createElement("div",{onClick:function(e){return Ae(e,"remove_article")}},"Remove"):i.a.createElement("div",{onClick:function(e){return Ae(e,"save_article")}},"Save"))))),i.a.createElement(u.b,{path:"".concat(c,"/").concat(e.dbId)},e.units&&e.units.length>0&&i.a.createElement("div",{"data-test":"Article__filters",id:"Article__filters"},i.a.createElement("div",{onClick:function(e){return e.stopPropagation()},id:"Article__unit_difficulty_filter"},i.a.createElement("select",{ref:Se,name:"complexity",id:"Article__unit_difficulty_filter_id",onChange:function(t){return function(t){t.preventDefault();for(var a=t.target.value,n=we.current.value,i=Object(C.a)(e.units),r=[],l=0;l<i.length;l++)"all"!=a&&i[l].complexity.toLowerCase()!=a||"all"!=n&&i[l].priority!=Number(n)||r.push(i[l]);Ne(r)}(t)}},i.a.createElement("option",{value:"all"},"Complexity"),i.a.createElement("option",{value:"basic"},"Basic"),i.a.createElement("option",{value:"easy"},"Easy"),i.a.createElement("option",{value:"medium"},"Medium"),i.a.createElement("option",{value:"hard"},"Hard"))),i.a.createElement("div",{onClick:function(e){return e.stopPropagation()},id:"Article__unit_importance_filter"},i.a.createElement("select",{ref:we,name:"priority",id:"Article__unit_importance_filter_id",onChange:function(t){return function(t){t.preventDefault();for(var a=t.target.value,n=Se.current.value,i=Object(C.a)(e.units),r=[],l=0;l<i.length;l++)"all"!=a&&i[l].priority!=Number(a)||"all"!=n&&i[l].complexity.toLowerCase()!=n||r.push(i[l]);Ne(r)}(t)}},i.a.createElement("option",{value:"all"},"Priority"),i.a.createElement("option",{value:"1"},"1"),i.a.createElement("option",{value:"2"},"2"),i.a.createElement("option",{value:"3"},"3"),i.a.createElement("option",{value:"4"},"4"),i.a.createElement("option",{value:"5"},"5")))),i.a.createElement(J,{units:je}),i.a.createElement("div",null,i.a.createElement("div",{className:"Article--center-align"},!ve&&"myArticle"===e.type&&i.a.createElement(_.a,{onClick:function(e){be(!0)},variant:"outlined",color:"primary",endIcon:i.a.createElement(I.a,null)},"Unit")),ve&&i.a.createElement("div",{id:"Article__unit-creation-form"},i.a.createElement("div",{className:"Article__text-area-input"},i.a.createElement(T.a,{className:"",id:"",onChange:function(e){!function(e){e.preventDefault(),A(e.target.value)}(e)},value:w,name:"heading",placeholder:"Heading"})),i.a.createElement("div",{className:"Article__text-area-input"},i.a.createElement(T.a,{className:"",id:"",name:"shortDescription",rowsMin:3,onChange:function(e){!function(e){e.preventDefault(),U(e.target.value)}(e)},value:D,placeholder:"Short description"})),i.a.createElement("div",{className:"Article__text-area-input"},i.a.createElement(T.a,Object(x.a)({className:"",id:"",name:"longDescription",rowsMin:3,placeholder:"",onChange:function(e){!function(e){e.preventDefault(),P(e.target.value)}(e)},value:F},"placeholder","Long description"))),i.a.createElement("div",{className:"Article__buttons-input-outer-div"},i.a.createElement("div",null,i.a.createElement("div",{className:"Article__buttons-input"},i.a.createElement("select",{onChange:function(e){!function(e){e.preventDefault(),K(e.target.value)}(e)}},i.a.createElement("option",null,"Priority"),i.a.createElement("option",null,"1"),i.a.createElement("option",null,"2"),i.a.createElement("option",null,"3"),i.a.createElement("option",null,"4"),i.a.createElement("option",null,"5"))),i.a.createElement("div",{className:"Article__buttons-input"},i.a.createElement("select",{onChange:function(e){!function(e){e.preventDefault(),z(e.target.value)}(e)}},i.a.createElement("option",null,"Complexity"),i.a.createElement("option",null,"Basic"),i.a.createElement("option",null,"Easy"),i.a.createElement("option",null,"Medium"),i.a.createElement("option",null,"Hard"))))),i.a.createElement("div",{className:"Article--center-align"},i.a.createElement(_.a,{onClick:function(t){!function(t){if(t.preventDefault(),""!==D||""!==w){var a=5,n="easy";G&&(a=Number(G)),$&&(n=$);var i={heading:w,shortDescription:D,longDescription:F,priority:a,complexity:n},r=Object(C.a)(je),l=Object(C.a)(e.units),c=[].concat(Object(C.a)(l),[i]),s=Object(C.a)(e.articles);s[e.articleIndex].units=c,e.setArticles(s);var u=Se.current&&Se.current.value||"all",d=we.current&&we.current.value||"all";if(("all"===u||i.complexity===u)&&("all"===d||i.priority===Number(d))){var m=[].concat(Object(C.a)(r),[i]);Ne(m)}A(""),U(""),P(""),K(""),z(""),o.a.post("/user/".concat(e.dbId,"/add-unit"),i).then((function(t){var a=[].concat(Object(C.a)(l),[t.data]),n=Object(C.a)(e.articles);if(n[e.articleIndex].units=a,e.setArticles(n),("all"==u||i.complexity==u)&&("all"==d||i.priority==Number(d))){var c=[].concat(Object(C.a)(r),[t.data]);Ne(c)}}))}else alert("please fill the mandatory fields")}(t)},variant:"outlined",color:"primary",endIcon:i.a.createElement(I.a,null)},"Create"))))),i.a.createElement("div",null,i.a.createElement("div",{id:"Article__likes-div"},i.a.createElement("div",null,i.a.createElement(H.a,{onClick:function(){try{o.a.post("/user/like-article/".concat(e.dbId)).then((function(e){"liked"==e.data?ne(ae+1):"unliked"==e.data&&ne(ae-1)}))}catch(t){console.log(t)}}})),i.a.createElement("div",null,i.a.createElement("label",null,ae)))))}));a(131);var K=Object(d.b)((function(e){return{username:e.app.username}}))((function(e){return i.a.createElement("div",{id:"Articles__articles-container"},e.articles.map((function(t,a){return null!=t&&i.a.createElement(G,{type:e.type,key:t._id,dbId:t._id,heading:t.heading,description:t.description,units:t.units,lastUpdatedTime:t.lastUpdatedTime,uploaderFirstName:t.uploaderFirstName,uploaderUserName:t.uploaderUserName||e.username,visibility:t.visibility,articleIndex:a,likes:t.likes})})))}));a(132);var W=function(e){return i.a.createElement("div",{className:"Tag"},i.a.createElement("h4",{"data-test":"Tag__tagName",className:"Tag__tag"},e.tagName))};a(133);var Y=Object(d.b)((function(e){return{articles:e.app.articles,tags:e.app.tags}}),{setArticles:O,setTags:function(e){return{type:"SET_TAGS",payload:{tags:e}}}})((function(e){var t=Object(u.g)(),a=Object(n.useState)([]),r=Object(f.a)(a,2),l=(r[0],r[1]),c=Object(n.useState)(p.a.get("fetchedOtherArticlesFromDb")||!1),s=Object(f.a)(c,2),d=(s[0],s[1]),m=Object(n.useState)(!1),g=Object(f.a)(m,2),b=(g[0],g[1]),h=Object(n.useState)(""),E=Object(f.a)(h,2),y=E[0],O=E[1],j=Object(n.useState)(""),N=Object(f.a)(j,2),S=N[0],w=N[1],A=Object(n.useState)([]),M=Object(f.a)(A,2),k=M[0],D=M[1],x=Object(u.h)(),T=x.path,L=x.url;Object(n.useEffect)((function(){o.a.get("/user/my-articles").then((function(t){if(0!=t.data){var a=Object(C.a)(t.data);e.setArticles(a),l(a),d(!0)}}))}),[]),Object(n.useEffect)((function(){o.a.get("/topic/get-all-tags").then((function(t){var a=Object(C.a)(t.data);e.setTags(a)}))}),[]);var H=function(){b(!1),t.goBack()};return i.a.createElement("div",{class:"MyArticles"},i.a.createElement("div",{class:"MyArticles-article-creation-section"},i.a.createElement("div",{class:"MyArticles__create-article"},i.a.createElement(u.b,{exact:!0,path:"".concat(T)},i.a.createElement(_.a,{onClick:function(e){return function(e){e.preventDefault(),t.push("".concat(L,"/create-article")),b(!0)}(e)},id:"MyArticles__create-article-button",variant:"outlined",color:"primary",endIcon:i.a.createElement(I.a,null)},"Article"))),i.a.createElement(u.b,{path:"".concat(T,"/create-article")},i.a.createElement("div",{id:"MyArticles__article-creation-form"},i.a.createElement("div",{className:"MyArticles__article-creation-form-input"},i.a.createElement("label",{htmlFor:"heading"}),i.a.createElement(U.a,{id:"articleHeading",onChange:function(e){!function(e){e.preventDefault(),O(e.target.value)}(e)},value:y,label:"Heading",variant:"outlined",required:!0})),i.a.createElement("div",{className:"MyArticles__article-creation-form-input"},i.a.createElement("label",{htmlFor:"description"}),i.a.createElement(U.a,{id:"description",label:"Description",onChange:function(e){!function(e){e.preventDefault(),w(e.target.value)}(e)},value:S,multiline:!0,rows:4,defaultValue:"default",variant:"outlined",required:!0})),i.a.createElement("div",{className:"MyArticles__auto-complete-helper-div"},k.map((function(e){return""!=e&&i.a.createElement(W,{tagName:e})}))),i.a.createElement("div",null,i.a.createElement(R.a,{onChange:function(e){""!=e.target.innerText&&D([].concat(Object(C.a)(k),[e.target.innerText]))},onKeyUp:function(e){"Enter"===e.key&&D([].concat(Object(C.a)(k),[e.target.value]))},autoHighlight:"true",id:"combo-box-demo",className:"MyArticles__article-creation-form-input",options:e.tags,getOptionLabel:function(e){return e.tagName},style:{width:300},renderInput:function(e){return i.a.createElement(U.a,Object.assign({},e,{label:"Tags",variant:"outlined"}))}})),i.a.createElement("div",{className:"MyArticles__article-creation-form-input"},i.a.createElement(_.a,{variant:"outlined",onClick:function(a){!function(a){a.preventDefault();var n={heading:y,description:S,tags:k};if(""!=n.heading&&""!=n.description){var i=Object(v.a)({},n),r=[].concat(Object(C.a)(e.articles),[i]),l=Object(C.a)(e.articles);e.setArticles(r),b(!1),t.goBack(),o.a.post("/user/new-article",n).then((function(a){i=Object(v.a)({},a.data),r=[].concat(Object(C.a)(l),[i]),D([]),O(""),w(""),t.push("".concat(T,"/").concat(i._id)),a.data._id&&(e.setArticles(r),b(!1))}))}else alert("please fill the required fields")}(a)},color:"primary"},"Continue")),i.a.createElement("div",{className:"MyArticles__article-creation-form-input"},i.a.createElement(_.a,{variant:"outlined",onClick:H,color:"primary"},"Cancel"))))),i.a.createElement("div",{class:"MyArticles-my-articles-section"},i.a.createElement(u.b,{path:"".concat(T)},i.a.createElement(K,{type:"myArticle",articles:e.articles}))))}));var $=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(""),s=Object(f.a)(c,2),u=s[0],d=s[1];return Object(n.useEffect)((function(){o.a.get("/user/saved-articles").then((function(e){0!=e.data?l(e.data):d("No saved Articles!!!")}))}),[]),i.a.createElement("div",{id:"SavedArticles"},i.a.createElement("h3",null,"Saved Articles"),0==r.length?i.a.createElement("h1",null,u):i.a.createElement(K,{type:"savedArticles",articles:r}))};a(134);var z=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),r=(a[0],a[1],Object(u.h)()),l=r.path,c=r.url,s=Object(u.g)(),d=Object(n.useState)([]),m=Object(f.a)(d,2),p=m[0],g=m[1],v=Object(n.useState)([]),b=Object(f.a)(v,2),h=b[0],E=b[1],_=Object(n.useState)(""),y=Object(f.a)(_,2),O=y[0],j=y[1];return Object(n.useEffect)((function(){o.a.get("/topic/get-all-tags").then((function(e){var t=Object(C.a)(e.data);g(t)}))}),[]),i.a.createElement("div",{className:"SuggestedArticles"},i.a.createElement(u.b,{path:"".concat(l)},i.a.createElement("div",{className:"SuggestedArticles__tags"},p.map((function(e){return i.a.createElement("div",{onClick:function(t){return a=e.tagName,E([]),s.push("".concat(c,"/topic/").concat(a)),void o.a.get("/topic/".concat(a,"/0/5")).then((function(e){if(0!=e.data){var t=Object(C.a)(e.data);E(t),j("")}else j("Sorry, No Articles Found with this Tag!!")}));var a}},i.a.createElement(W,{tagName:e.tagName}))})))),i.a.createElement(u.b,{path:"".concat(l,"/topic/:tagName")},i.a.createElement("div",{className:"Suggested__articles-container"},0==h.length?i.a.createElement("div",{className:"center-align"},i.a.createElement("h2",null,O)):h.map((function(t){return null!=t&&i.a.createElement(G,{type:"otherArticle",key:t._id,dbId:t._id,heading:t.heading,description:t.description,units:t.units,lastUpdatedTime:t.lastUpdatedTime,uploaderFirstName:t.uploaderFirstName,uploaderUserName:t.uploaderUserName||e.username,visibility:t.visibility,likes:t.likes})})))))};a(135);function V(e){var t=Object(u.h)(),a=t.path,n=t.url;return i.a.createElement("div",null,i.a.createElement("h1",null,"My Profile"),i.a.createElement(s.b,{to:"".concat(n,"/saved")},"Saved"),i.a.createElement(u.d,null,i.a.createElement(u.b,{path:"".concat(a,"/saved")},i.a.createElement($,null))))}var Q=function(e){var t=Object(u.h)();return t.path,t.url,i.a.createElement("div",{id:"Home"},i.a.createElement("div",{id:"Home__body"},i.a.createElement(u.d,null,i.a.createElement(u.b,{path:"/home"},i.a.createElement(z,null)),i.a.createElement(u.b,{path:"/my-articles"},i.a.createElement(Y,null)),i.a.createElement(u.b,{path:"/my-profile"},i.a.createElement(V,null)))),i.a.createElement("div",{id:"Home__footer"}))};a(136);function X(e){return i.a.createElement("div",{id:"StartUp"},i.a.createElement("div",{className:"StartUp__left-content"},i.a.createElement("div",null,i.a.createElement("h3",null,"Share Content")),i.a.createElement("div",null,i.a.createElement("h3",null,"Compose Articles with emphasis one each part")),i.a.createElement("div",null,i.a.createElement("h3",null,"Prepare Notes")),i.a.createElement("div",null,i.a.createElement("h3",null,"Filter what you Need!!"))),i.a.createElement("div",{className:"StartUp__right-content"},i.a.createElement("div",null,"Read My Way enhances the Readabilty and focusses on increasing the effectiveness of Reading or understanding a article/content.It has the ability to filter out the parts that are required  based on the complexity and priority.")),i.a.createElement("div",{className:"StartUp__footer"},"RMW@ AKC@ contact: anandcheerla999@gmail.com"))}function Z(e){return i.a.createElement(i.a.Fragment,null,e.login?e.children:i.a.createElement(u.a,{to:"/login"}))}var ee=Object(d.b)((function(e){return{login:e.app.login}}))((function(e){return i.a.createElement("div",{id:"Main"},i.a.createElement("div",{id:"Main__header"},i.a.createElement(A,null)),i.a.createElement("div",{id:"Main__body"},i.a.createElement("switch",null,i.a.createElement(u.b,{path:"/login"},i.a.createElement("div",{id:"Main__login"},i.a.createElement(j,null))),i.a.createElement(u.b,{path:"/register"},i.a.createElement("div",{id:"Main__register"},i.a.createElement(N,null))),i.a.createElement(u.b,{path:"/about"},i.a.createElement("div",{id:"Main__about"},i.a.createElement(k,null))),i.a.createElement(u.b,{path:"/logout"},i.a.createElement("div",{id:"Main__logout"},i.a.createElement(M,null))),i.a.createElement(u.b,{exact:!0,path:"/"},i.a.createElement(X,null)),i.a.createElement(u.b,{path:"/:some_path"},i.a.createElement(Z,{login:e.login},i.a.createElement("div",{id:"Main__home"},i.a.createElement(Q,null)))))),i.a.createElement("div",{id:"Main__footer"}))}));var te=function(e){return i.a.createElement("div",{id:"App"},i.a.createElement(d.a,{store:E},i.a.createElement(s.a,null,i.a.createElement(u.b,{path:"/",component:ee}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},88:function(e,t,a){e.exports=a(137)},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.ae8029cb.chunk.js.map