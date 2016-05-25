"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,r,n,l){var a=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,a=t["default"].Application.extend({modulePrefix:l["default"].modulePrefix,podModulePrefix:l["default"].podModulePrefix,Resolver:r["default"]}),(0,n["default"])(a,l["default"].modulePrefix),e["default"]=a}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,r){var n=r["default"].APP.name,l=r["default"].APP.version;e["default"]=t["default"].extend({version:l,name:n})}),define("dummy/components/ember-3d-nav/component",["exports","ember-3d-nav/components/ember-3d-nav/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/nav-item/component",["exports","ember-3d-nav/components/nav-item/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/nav-items-container/component",["exports","ember-3d-nav/components/nav-items-container/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/nav-marker/component",["exports","ember-3d-nav/components/nav-marker/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/nav-trigger/component",["exports","ember-3d-nav/components/nav-trigger/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/nav-trigger-container/component",["exports","ember-3d-nav/components/nav-trigger-container/component"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/helpers/and",["exports","ember","ember-truth-helpers/helpers/and"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.andHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.andHelper)),e["default"]=n}),define("dummy/helpers/eq",["exports","ember","ember-truth-helpers/helpers/equal"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.equalHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.equalHelper)),e["default"]=n}),define("dummy/helpers/gt",["exports","ember","ember-truth-helpers/helpers/gt"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.gtHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.gtHelper)),e["default"]=n}),define("dummy/helpers/gte",["exports","ember","ember-truth-helpers/helpers/gte"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.gteHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.gteHelper)),e["default"]=n}),define("dummy/helpers/is-array",["exports","ember","ember-truth-helpers/helpers/is-array"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.isArrayHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.isArrayHelper)),e["default"]=n}),define("dummy/helpers/lt",["exports","ember","ember-truth-helpers/helpers/lt"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.ltHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.ltHelper)),e["default"]=n}),define("dummy/helpers/lte",["exports","ember","ember-truth-helpers/helpers/lte"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.lteHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.lteHelper)),e["default"]=n}),define("dummy/helpers/not-eq",["exports","ember","ember-truth-helpers/helpers/not-equal"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.notEqualHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.notEqualHelper)),e["default"]=n}),define("dummy/helpers/not",["exports","ember","ember-truth-helpers/helpers/not"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.notHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.notHelper)),e["default"]=n}),define("dummy/helpers/or",["exports","ember","ember-truth-helpers/helpers/or"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.orHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.orHelper)),e["default"]=n}),define("dummy/helpers/xor",["exports","ember","ember-truth-helpers/helpers/xor"],function(e,t,r){var n=null;t["default"].Helper?n=t["default"].Helper.helper(r.xorHelper):t["default"].HTMLBars.makeBoundHelper&&(n=t["default"].HTMLBars.makeBoundHelper(r.xorHelper)),e["default"]=n}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,r){e["default"]={name:"App Version",initialize:(0,t["default"])(r["default"].APP.name,r["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,r){function n(){var e=arguments[1]||arguments[0];if(r["default"].exportApplicationGlobal!==!1){var n,l=r["default"].exportApplicationGlobal;n="string"==typeof l?l:t["default"].String.classify(r["default"].modulePrefix),window[n]||(window[n]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[n]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/initializers/truth-helpers",["exports","ember","ember-truth-helpers/utils/register-helper","ember-truth-helpers/helpers/and","ember-truth-helpers/helpers/or","ember-truth-helpers/helpers/equal","ember-truth-helpers/helpers/not","ember-truth-helpers/helpers/is-array","ember-truth-helpers/helpers/not-equal","ember-truth-helpers/helpers/gt","ember-truth-helpers/helpers/gte","ember-truth-helpers/helpers/lt","ember-truth-helpers/helpers/lte"],function(e,t,r,n,l,a,o,u,d,i,m,p,s){function c(){t["default"].Helper||((0,r.registerHelper)("and",n.andHelper),(0,r.registerHelper)("or",l.orHelper),(0,r.registerHelper)("eq",a.equalHelper),(0,r.registerHelper)("not",o.notHelper),(0,r.registerHelper)("is-array",u.isArrayHelper),(0,r.registerHelper)("not-eq",d.notEqualHelper),(0,r.registerHelper)("gt",i.gtHelper),(0,r.registerHelper)("gte",m.gteHelper),(0,r.registerHelper)("lt",p.ltHelper),(0,r.registerHelper)("lte",s.lteHelper))}e.initialize=c,e["default"]={name:"truth-helpers",initialize:c}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,r){var n=t["default"].Router.extend({location:r["default"].locationType});n.map(function(){}),e["default"]=n}),define("dummy/routes/application",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({links:t["default"].A([{href:"#0",selected:!0,text:"About"},{href:"#0",selected:!1,text:"Technologies"},{href:"#0",selected:!1,text:"Team"},{href:"#0",selected:!1,text:"Portfolio"},{href:"#0",selected:!1,text:"Contact"}]),setupController:function(e){e.set("links",this.get("links"))}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.1",loc:{source:null,start:{line:2,column:2},end:{line:4,column:2}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("    ");e.appendChild(t,r);var r=e.createElement("a");e.setAttribute(r,"href","//shipshape.io"),e.setAttribute(r,"class","cd-logo");var n=e.createElement("img");e.setAttribute(n,"src","img/ShipShapeIcon.svg"),e.setAttribute(n,"alt","Logo"),e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.1",loc:{source:null,start:{line:5,column:2},end:{line:15,column:2}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("    ");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"class","info-text");var n=e.createTextNode("\n      ");e.appendChild(r,n);var n=e.createElement("h1"),l=e.createTextNode("Ember-3D-Nav");e.appendChild(n,l),e.appendChild(r,n);var n=e.createTextNode("\n      ");e.appendChild(r,n);var n=e.createElement("p"),l=e.createTextNode("\n        This Ember addon is based on the amazing work done by CodyHouse on\n        ");e.appendChild(n,l);var l=e.createElement("a");e.setAttribute(l,"href","https://codyhouse.co/gem/3d-rotating-navigation/");var a=e.createTextNode("3D Rotating Navigation");e.appendChild(l,a),e.appendChild(n,l);var l=e.createTextNode(".\n        Some changes have been made to convert things into Ember components and try to make it reusable,\n        but a lot of the original styles have stayed.\n      ");e.appendChild(n,l),e.appendChild(r,n);var n=e.createTextNode("\n    ");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),r=function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.1",loc:{source:null,start:{line:18,column:6},end:{line:20,column:6}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("        ");e.appendChild(t,r);var r=e.createElement("a"),n=e.createComment("");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=e.childAt(t,[1]),l=new Array(2);return l[0]=e.createAttrMorph(n,"href"),l[1]=e.createMorphAt(n,0,0),l},statements:[["attribute","href",["concat",[["get","link.href",["loc",[null,[19,19],[19,28]]]]]]],["content","link.text",["loc",[null,[19,32],[19,45]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.3.1",loc:{source:null,start:{line:17,column:4},end:{line:21,column:4}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:2,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,r),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","nav-item",[],["index",["subexpr","@mut",[["get","index",["loc",[null,[18,24],[18,29]]]]],[],[]],"selectedIndex",["subexpr","@mut",[["get","selectedIndex",["loc",[null,[18,44],[18,57]]]]],[],[]],"onClickAction",["subexpr","@mut",[["get","navItemClicked",["loc",[null,[18,72],[18,86]]]]],[],[]]],0,null,["loc",[null,[18,6],[20,19]]]]],locals:["link","index"],templates:[e]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.3.1",loc:{source:null,start:{line:16,column:2},end:{line:22,column:2}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,r),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","each",[["get","links",["loc",[null,[17,12],[17,17]]]]],[],0,null,["loc",[null,[17,4],[21,13]]]]],locals:[],templates:[e]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:23,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:3,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");e.appendChild(t,r);var r=e.createComment("");e.appendChild(t,r);var r=e.createComment("");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(3);return n[0]=e.createMorphAt(t,0,0,r),n[1]=e.createMorphAt(t,1,1,r),n[2]=e.createMorphAt(t,2,2,r),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","if",[["subexpr","eq",[["get","section",["loc",[null,[2,12],[2,19]]]],"header"],[],["loc",[null,[2,8],[2,29]]]]],[],0,null,["loc",[null,[2,2],[4,9]]]],["block","if",[["subexpr","eq",[["get","section",["loc",[null,[5,12],[5,19]]]],"main"],[],["loc",[null,[5,8],[5,27]]]]],[],1,null,["loc",[null,[5,2],[15,9]]]],["block","if",[["subexpr","eq",[["get","section",["loc",[null,[16,12],[16,19]]]],"nav-items"],[],["loc",[null,[16,8],[16,32]]]]],[],2,null,["loc",[null,[16,2],[22,9]]]]],locals:["section","selectedIndex","navItemClicked"],templates:[e,t,r]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.3.1",loc:{source:null,start:{line:1,column:0},end:{line:24,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,r),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["block","ember-3d-nav",[],[],0,null,["loc",[null,[1,0],[23,17]]]]],locals:[],templates:[e]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var r=t+"/config/environment",n=e["default"].$('meta[name="'+r+'"]').attr("content"),l=JSON.parse(unescape(n));return{"default":l}}catch(a){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-3d-nav",version:"v0.0.5"});