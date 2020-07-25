(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,a){e.exports=a(51)},30:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(23),o=a.n(i),l=(a(30),a(8)),s=a(4),c=a(5),m=a(6),u=a(7),d=a(2),p=a.n(d),h=(a(9),a(10),a(11),a(1)),g=a.n(h),E=a(24),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).onClickHandler=function(e){"none"===r.state.modalDisplay?r.setState({modalDisplay:"block"}):"block"===r.state.modalDisplay&&r.setState({modalDisplay:"none"})},r.closeButtonHandler=function(){r.setState({modalDisplay:"none"})},r.deleteUnitButtonHandler=function(){p.a.delete("/unit-delete/"+r.props.articleId+"/"+r.props.unitId).then((function(e){r.setState({modalDisplay:"none",unitDeleted:!0})}))},r.updateUnit=function(e){e.preventDefault();var t=e.target,a=t.heading,n=t.shortDescription,i=t.longDescription,o=t.priority,l=t.complexity,s={heading:a.value,shortDescription:n.value,longDescription:i.value,priority:o.value,complexity:l.value};p.a.put("/unit-update/"+r.props.articleId+"/"+r.props.unitId,s).then((function(e){r.setState({editUnitMode:!1,heading:s.heading,shortDescription:s.shortDescription,longDescription:s.longDescription,priority:s.priority,complexity:s.complexity})}))},r.unitCreationForm=function(){return n.a.createElement("form",{name:"createUnit",onSubmit:r.updateUnit},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"heading"}),n.a.createElement("input",{type:"text",className:"form-control",id:"heading",name:"heading",defaultValue:r.state.heading})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"shortDescription"}),n.a.createElement("textarea",{type:"text",className:"form-control",id:"shortDescription",name:"shortDescription",defaultValue:r.state.shortDescription})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"longDescription"}),n.a.createElement("textarea",{type:"text",className:"form-control",id:"longDescription",name:"longDescription",defaultValue:r.state.longDescription})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"priority"}),n.a.createElement("select",{className:"form-control",id:"priority",defaultValue:r.state.priority},n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"),n.a.createElement("option",{value:"5"},"5"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"complexity"}),n.a.createElement("select",{className:"form-control",id:"complexity",defaultValue:r.state.complexity},n.a.createElement("option",{value:"basic"},"Basic"),n.a.createElement("option",{value:"easy"},"Easy"),n.a.createElement("option",{value:"medium"},"Medium"),n.a.createElement("option",{value:"hard"},"Hard"))),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("button",{type:"submit",className:"btn btn-outline-primary",id:"Create-unit-button"},"Create"),n.a.createElement("button",{onClick:function(){r.setState({editUnitMode:!1})},className:"btn btn-outline-primary",id:"Create-unit-button"},"Cancel")))},r.state={modalDisplay:"none",heading:r.props.heading,shortDescription:r.props.shortDescription,longDescription:r.props.longDescription,priority:r.props.priority,complexity:r.props.complexity,unitDeleted:!1,editUnitMode:!1},r}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t={display:this.state.modalDisplay,position:"fixed",zIndex:"1",paddingTop:"100px",left:"0",top:"0",width:"100%",height:"100%",overflow:"auto",backgroundColor:"rgba(0,0,0,0.4)"},a={border:"2px solid "+{basic:"#cfc10a",easy:"#7dd943",medium:"#f07f1d",hard:"#f50525"}[this.props.complexity]},r={whiteSpace:"pre-wrap",wordBreak:"break-all"};return n.a.createElement("div",null,!this.state.unitDeleted&&n.a.createElement("div",null,n.a.createElement("div",{style:a,className:"unit",onClick:this.onClickHandler},n.a.createElement("div",{className:"unitHeading"},n.a.createElement("h3",{style:r},this.state.heading)),n.a.createElement("div",{className:"unitShortDescription"},n.a.createElement("p",{style:r},this.state.shortDescription))),n.a.createElement("div",{className:"unitModal",style:t},n.a.createElement("div",{className:"unitModalContent",style:{backgroundColor:"#fefefe",margin:"auto",padding:"50px",border:"1px solid #888",width:"80%",position:"relative"}},n.a.createElement("span",{style:{float:"right"},className:"closeButton",onClick:this.closeButtonHandler},"CLOSE"),!this.state.editUnitMode&&n.a.createElement("div",{id:"displayUnitMode"},n.a.createElement("div",{style:{whiteSpace:"pre-wrap",wordBreak:"break-all",color:"#93b4b5",width:"70%"}},n.a.createElement("h3",null,this.state.heading)),n.a.createElement("br",null),n.a.createElement("div",{className:"descriptionDivUnitModal"},n.a.createElement("h4",null,"Short Description"),n.a.createElement("div",{id:"shortDescriptionDivModal",className:"descriptionUnitModal"},n.a.createElement("h5",{style:r},this.state.shortDescription)),n.a.createElement("h4",null,"Long Description"),n.a.createElement("div",{id:"longDescriptionDivModal",className:"descriptionUnitModal"},n.a.createElement("p",{style:r},this.state.longDescription))),n.a.createElement("div",{class:"settingsUnitModal"},n.a.createElement("div",null,n.a.createElement("ul",{style:{listStyleType:"none"}},n.a.createElement("li",null,"myArticles"==this.props.sectionName&&n.a.createElement("h6",{id:"unitEditButton",onClick:function(){e.setState({editUnitMode:!0})}},"Edit")),n.a.createElement("li",null,"myArticles"==this.props.sectionName&&n.a.createElement("h6",{id:"unitDeleteButton",onClick:function(){return e.deleteUnitButtonHandler()}},"Delete")))))),this.state.editUnitMode&&n.a.createElement("div",{id:"editUnitMode"},this.unitCreationForm())))))}}]),a}(n.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).createUnit=function(e){e.preventDefault();var t={heading:e.target.heading.value,shortDescription:e.target.shortDescription.value,longDescription:e.target.longDescription.value,priority:e.target.priority.value,complexity:e.target.complexity.value};p.a.post("/add-unit/"+r.state.dbId,t).then((function(e){var t=[].concat(Object(l.a)(r.state.units),[e.data]);r.setState({units:t})})),e.target.reset()},r.unitCreationForm=function(){return n.a.createElement("form",{name:"createUnit",onSubmit:r.createUnit},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"heading"}),n.a.createElement("input",{type:"text",className:"form-control",id:"heading",name:"heading",placeholder:"Heading"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"shortDescription"}),n.a.createElement("textarea",{type:"textarea",className:"form-control",id:"shortDescription",name:"shortDescription",placeholder:"Short description"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"longDescription"}),n.a.createElement("textarea",{type:"text",className:"form-control",id:"longDescription",name:"longDescription",placeholder:"Long description"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"priority"}),n.a.createElement("select",{className:"form-control",id:"priority"},n.a.createElement("option",{value:"1"},"1"),n.a.createElement("option",{value:"2"},"2"),n.a.createElement("option",{value:"3"},"3"),n.a.createElement("option",{value:"4"},"4"),n.a.createElement("option",{value:"5"},"5"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"complexity"}),n.a.createElement("select",{className:"form-control",id:"complexity"},n.a.createElement("option",{value:"basic"},"Basic"),n.a.createElement("option",{value:"easy"},"Easy"),n.a.createElement("option",{value:"medium"},"Medium"),n.a.createElement("option",{value:"hard"},"Hard"))),n.a.createElement("div",{style:{textAlign:"center"}},n.a.createElement("button",{type:"submit",className:"btn btn-outline-primary",id:"Create-unit-button"},"Create")))},r.articleClickHandler=function(){r.state.articleClicked?r.setState({articleClicked:!1}):r.setState({articleClicked:!0,showUnitCreationForm:!0})},r.deletearticleButtonHandler=function(){p.a.delete("/article-delete/"+r.props.dbId).then((function(e){console.log(e),r.setState({articleDeleted:!0})}))},r.state={dbId:r.props.dbId,heading:r.props.heading,description:r.props.description,units:r.props.units,showArticleCreationForm:!1,showUnitCreationForm:!1,articleClicked:!1,articleDeleted:!1},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,!this.state.articleDeleted&&n.a.createElement("div",{onClick:function(){e.articleClickHandler()}},n.a.createElement("div",null,n.a.createElement("h1",null,this.state.heading),n.a.createElement("h4",null,this.state.description)),this.state.articleClicked&&n.a.createElement("div",{onClick:function(e){return e.stopPropagation()}},this.state.units.map((function(t){return n.a.createElement(f,{key:t._id,unitId:t._id,articleId:e.props.dbId,heading:t.heading,shortDescription:t.shortDescription,longDescription:t.longDescription,priority:t.priority,complexity:t.complexity,sectionName:e.props.sectionName})})),n.a.createElement("div",{id:"unitCreationForm",className:"unitCreationForm"},"myArticles"===this.props.sectionName&&this.state.showUnitCreationForm&&this.unitCreationForm()))))}}]),a}(n.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).createArticle=function(e){e.preventDefault();var t={heading:e.target.heading.value,description:e.target.description.value};p.a.post("/new-article",t).then((function(e){var t=Object(E.a)({},e.data),a=[].concat(Object(l.a)(r.state.articles),[t]);e.data._id&&(r.setState({articles:a,showArticleCreationForm:!1,showCreateArticleButton:!0}),g.a.set("articles",a),g.a.set("showArticleCreationForm",!1),g.a.set("showCreateArticleButton",!0))}))},r.cancelButtonClickHandler=function(){r.setState({showArticleCreationForm:!1,showCreateArticleButton:!0}),g.a.set("showArticleCreationForm",!1),g.a.set("showCreateArticleButton",!0)},r.unitsHandlerFromArticle=function(e){},r.articleCreationForm=function(){return n.a.createElement("form",{name:"createArticle",onSubmit:r.createArticle},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"heading"},"Name"),n.a.createElement("input",{type:"text",className:"form-control",id:"articleHeading",name:"heading",placeholder:"heading"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"description"},"Description"),n.a.createElement("textarea",{type:"textarea",className:"form-control",id:"description",name:"description",placeholder:"description"})),n.a.createElement("div",{className:"form-group",id:"articleImage"},n.a.createElement("input",{type:"file"})),n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Create"),n.a.createElement("span",null," ",n.a.createElement("button",{onClick:r.cancelButtonClickHandler,className:"btn btn-primary"},"Cancel")))},r.createArticleButtonClickHandler=function(){r.setState({showArticleCreationForm:!0,showCreateArticleButton:!1})},r.state={articles:Object(l.a)(r.props.articles),showArticleCreationForm:!1,showCreateArticleButton:!0},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t={marginBottom:"25px",background:"#e6edf0"};return n.a.createElement("div",{id:"articles",style:{marginLeft:"30%",marginTop:"5%",width:"70%"}},n.a.createElement("div",null,"myArticles"===this.props.sectionName&&(this.state.showArticleCreationForm?n.a.createElement("h2",null,"Create Article"):n.a.createElement("h2",null,"My Articles")),"myArticles"===this.props.sectionName&&(this.state.showCreateArticleButton?n.a.createElement("button",{style:{position:"fixed",top:"30",right:"0"},onClick:this.createArticleButtonClickHandler,className:"btn btn-outline-primary"},"New Article"):null)),this.state.showArticleCreationForm?this.articleCreationForm():null,n.a.createElement("ul",{className:"list-group",style:{display:"flex",flexDirection:"column-reverse"}},!this.state.showArticleCreationForm&&this.state.articles.map((function(a){return n.a.createElement("div",{key:a._id},n.a.createElement("li",{className:"list-group-item",style:t},n.a.createElement(v,{dbId:a._id,heading:a.heading,description:a.description,units:a.units,unitAdd:e.unitsHandlerFromArticle,sectionName:e.props.sectionName})))}))))}}]),a}(n.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).fetchMyArticlesFromDb=function(){p.a.get("/articles").then((function(e){var t=Object(l.a)(e.data);r.setState({articles:t,fetchedMyArticlesFromDb:!0,showOtherArticles:!1}),g.a.set("articles",t),g.a.set("fetchedMyArticlesFromDb",!0)}))},r.populateOtherArticles=function(){p.a.get("/articles/home").then((function(e){var t=Object(l.a)(e.data);r.setState({OtherArticles:t,fetchedOtherArticlesFromDb:!0})}))},r.userLogin=function(e){e.preventDefault();var t={username:e.target.username.value,password:e.target.password.value};p.a.post("/login",t).then((function(e){if("success"===e.data){r.setState({loginSuccess:!0,showRegisterForm:!1,showLoginForm:!1}),g.a.set("loginSuccess",!0),g.a.set("showRegisterForm",!1),g.a.set("showLoginForm",!1)}else alert("Incorrect credentials")}))},r.userLogout=function(e){e.preventDefault(),p.a.get("/logout").then((function(e){console.log("logout successful")})),g.a.clear(),r.setState({articles:[],showRegisterForm:!1,showLoginForm:!1,loginSuccess:!1,fetchedMyArticlesFromDb:!1})},r.userRegistration=function(e){e.preventDefault();var t={username:e.target.username.value,password:e.target.password.value,firstName:e.target.firstName.value,lastName:e.target.lastName.value,email:e.target.email.value,contactNumber:e.target.contactNumber.value};p.a.post("/register",t).then((function(e){r.setState({showRegisterForm:!1,showLoginForm:!0}),g.a.set("showRegisterForm",!1),g.a.set("showLoginForm",!0)}))},r.userRegistrationForm=function(){return n.a.createElement("form",{name:"register",onSubmit:r.userRegistration},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"firstName"},"First name"),n.a.createElement("input",{type:"text",className:"form-control",id:"firstName",name:"firstName",placeholder:"first name"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"lastName"},"Last name"),n.a.createElement("input",{type:"text",className:"form-control",id:"lastName",name:"lastName",placeholder:"last name"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"username"},"Username"),n.a.createElement("input",{type:"text",className:"form-control",id:"username",name:"username",placeholder:"username"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",className:"form-control",id:"password",name:"password",placeholder:"password"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement("input",{type:"email",className:"form-control",id:"email",name:"email",placeholder:"email"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"contactNumber"},"Contact Number"),n.a.createElement("input",{type:"text",className:"form-control",id:"contactNumber",name:"contactNumber",placeholder:"9999999999"})),n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Register"))},r.userLoginForm=function(){return n.a.createElement("form",{name:"login",onSubmit:r.userLogin},n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"username"},"Username"),n.a.createElement("input",{type:"text",className:"form-control",id:"username",name:"username",placeholder:"username"})),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"password"},"Password"),n.a.createElement("input",{type:"password",className:"form-control",id:"password",name:"password",placeholder:"password"})),n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login"))},r.displayMyArticles=function(){return n.a.createElement("div",null,n.a.createElement(b,{sectionName:"myArticles",articles:r.state.articles}))},r.displayOtherArticles=function(){return n.a.createElement("div",null,n.a.createElement(b,{sectionName:"homePage",articles:r.state.OtherArticles}))},r.state={articles:[],OtherArticles:[],showRegisterForm:g.a.get("showRegisterForm")||!1,showLoginForm:g.a.get("showLoginForm")||!1,loginSuccess:g.a.get("loginSuccess")||!1,fetchedMyArticlesFromDb:!1,fetchedOtherArticlesFromDb:!1,showOtherArticles:!0},r}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{style:{minWidth:"1000px"},className:"mainScreen"},n.a.createElement("div",{id:"menuSection"},n.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},!this.state.loginSuccess&&n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){e.setState({showLoginForm:!0,showRegisterForm:!1}),g.a.set("showLoginForm",!0),g.a.set("showRegisterForm",!1)},className:"btn btn-primary"},"Login")),!this.state.loginSuccess&&n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){e.setState({showRegisterForm:!0,showLoginForm:!1}),g.a.set("showRegisterForm",!0),g.a.set("showLoginForm",!1)},className:"btn btn-primary"},"Register")),this.state.loginSuccess&&n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return e.fetchMyArticlesFromDb()},className:"btn btn-primary"},"My Articles")),this.state.loginSuccess&&n.a.createElement("div",null,n.a.createElement("button",{onClick:function(){return window.location.reload(!1)},className:"btn btn-primary"},"Home")),this.state.loginSuccess&&n.a.createElement("button",{onClick:function(t){return e.userLogout(t)},className:"btn btn-primary"},"Logout"))),n.a.createElement("div",{className:"bodySection"},n.a.createElement("div",null,this.state.showArticleCreationForm?this.articleCreationForm():null,this.state.showUnitCreationForm?this.unitCreationForm():null,this.state.showLoginForm?this.userLoginForm():null,this.state.showRegisterForm?this.userRegistrationForm():null),n.a.createElement("div",null,this.state.loginSuccess&&!this.state.fetchedOtherArticlesFromDb&&this.populateOtherArticles(),this.state.loginSuccess&&this.state.showOtherArticles&&this.state.fetchedOtherArticlesFromDb&&this.displayOtherArticles(),this.state.loginSuccess&&this.state.fetchedMyArticlesFromDb?this.displayMyArticles():null)))}}]),a}(n.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return n.a.createElement(y,null)}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){}},[[25,1,2]]]);
//# sourceMappingURL=main.b8acc5f8.chunk.js.map