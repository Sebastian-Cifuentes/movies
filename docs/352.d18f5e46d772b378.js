"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[352],{9352:(y,l,o)=>{o.r(l),o.d(l,{PrivateModule:()=>M});var c=o(6814),s=o(8719),t=o(9468);const m=["input"];let p=(()=>{class n{constructor(i){this.router=i}search(i){if("Enter"===i.key){const e=i.target.value;if(""===e)return;this.router.navigate(["/search"],{queryParams:{search:e},queryParamsHandling:"merge"}),this.input.nativeElement.value=""}}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(s.F0))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-search-input"]],viewQuery:function(e,a){if(1&e&&t.Gf(m,5),2&e){let r;t.iGM(r=t.CRH())&&(a.input=r.first)}},decls:4,vars:0,consts:[[1,"search-input"],[1,"fa-solid","fa-magnifying-glass","magnifier"],["type","text","placeholder","Search","name","search",3,"keyup"],["input",""]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"i",1),t.TgZ(2,"input",2,3),t.NdJ("keyup",function(P){return a.search(P)}),t.qZA()())},styles:[".search-input[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between;width:100%;position:relative}.search-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#3a3f55;border-radius:20px;border:1px solid transparent;padding:5px 20px 5px 40px;outline:none}.search-input[_ngcontent-%COMP%]   .magnifier[_ngcontent-%COMP%]{position:absolute;top:10px;left:10px}"]})}return n})(),u=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-navbar"]],decls:16,vars:0,consts:[[1,"main-navbar"],[1,"logo-menu"],["routerLink","/movies",1,"logo"],[1,"fa-solid","fa-film","mr-2"],[1,"menu"],[1,"menu-items"],["routerLink","/movies",1,"menu__item","pointer"],["routerLink","/favorites",1,"menu__item","pointer"],["routerLink","/genres",1,"menu__item","pointer"],[1,"search"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"i",3),t.TgZ(4,"b"),t._uU(5,"MoviesApp"),t.qZA()(),t.TgZ(6,"div",4)(7,"ul",5)(8,"li",6),t._uU(9,"Movies"),t.qZA(),t.TgZ(10,"li",7),t._uU(11,"My list"),t.qZA(),t.TgZ(12,"li",8),t._uU(13,"Genre"),t.qZA()()()(),t.TgZ(14,"div",9),t._UZ(15,"app-search-input"),t.qZA()())},dependencies:[s.rH,p],styles:[".main-navbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-top:30px;width:100%}.main-navbar[_ngcontent-%COMP%]   .logo-menu[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between;width:50%}.main-navbar[_ngcontent-%COMP%]   .logo-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;list-style:none;margin:0;width:350px}.main-navbar[_ngcontent-%COMP%]   .logo-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu__item[_ngcontent-%COMP%]{color:#fff;font-size:15px}.main-navbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{margin:auto 0}@media (max-width: 768px){.main-navbar[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.main-navbar[_ngcontent-%COMP%]   .logo-menu[_ngcontent-%COMP%]{flex-direction:column}.main-navbar[_ngcontent-%COMP%]   .logo-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]{flex-direction:column;align-items:center;padding:0}.main-navbar[_ngcontent-%COMP%]   .logo-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu__item[_ngcontent-%COMP%], .main-navbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]{margin-top:10px}}"]})}return n})(),d=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-footer"]],decls:3,vars:0,consts:[[1,"footer"],[1,"copyright"]],template:function(e,a){1&e&&(t.TgZ(0,"footer",0)(1,"p",1),t._uU(2," \xa9 2023 Movies. "),t.qZA()())},styles:[".footer[_ngcontent-%COMP%]{background-color:#3a3f55;display:flex;align-items:center;justify-content:center;padding:20px 60px}.footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{color:#fff;margin:0}"]})}return n})(),g=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-private"]],decls:6,vars:0,consts:[[1,"container"],[1,"main","container"],[1,"footer"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-navbar"),t.qZA(),t.TgZ(2,"div",1),t._UZ(3,"router-outlet"),t.qZA(),t.TgZ(4,"div",2),t._UZ(5,"app-footer"),t.qZA())},dependencies:[s.lC,u,d],styles:[".main[_ngcontent-%COMP%]{margin-top:50px;margin-bottom:100px}.footer[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%;z-index:1}"]})}return n})(),h=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[c.ez]})}return n})(),f=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[c.ez,s.Bz,h]})}return n})(),v=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[c.ez]})}return n})();const C=[{path:"",component:g,children:[{path:"movie/:id",loadChildren:()=>Promise.all([o.e(592),o.e(809)]).then(o.bind(o,5809)).then(n=>n.MovieModule)},{path:"movies",loadChildren:()=>Promise.all([o.e(592),o.e(9)]).then(o.bind(o,5009)).then(n=>n.MoviesModule)},{path:"favorites",loadChildren:()=>Promise.all([o.e(592),o.e(703)]).then(o.bind(o,703)).then(n=>n.FavoritesModule)},{path:"genres",loadChildren:()=>Promise.all([o.e(592),o.e(692)]).then(o.bind(o,6692)).then(n=>n.GenresModule)},{path:"search",loadChildren:()=>Promise.all([o.e(592),o.e(870)]).then(o.bind(o,4870)).then(n=>n.SearchModule)},{path:"**",redirectTo:"movies"}]}];let M=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[c.ez,s.Bz.forChild(C),f,v]})}return n})()}}]);