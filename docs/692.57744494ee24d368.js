"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[692],{6692:(A,c,i)=>{i.r(c),i.d(c,{GenresModule:()=>Z});var a=i(6814),e=i(9468),l=i(4033),m=i(6184),u=i(8565),r=i(8719);let v=(()=>{class t extends u.w{set genre(n){this.genre_value.set(n)}constructor(n,o){super(n,o),this.route=n,this.router=o,this.genre_value=(0,e.tdS)("")}sortGenre(n){this.addQuery(n.value,"genre")}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(r.gz),e.Y36(r.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-select-genre"]],inputs:{genre:"genre"},features:[e.qOj],decls:17,vars:1,consts:[[1,"btn","button-primary",3,"value","change"],["selected","","value",""],["value","action"],["value","sci-fi"],["value","animation"],["value","adventure"],["value","comedy"],["value","crime"],["value","drama"]],template:function(o,s){1&o&&(e.TgZ(0,"select",0),e.NdJ("change",function(y){return s.sortGenre(y.target)}),e.TgZ(1,"option",1),e._uU(2,"Select a genre"),e.qZA(),e.TgZ(3,"option",2),e._uU(4,"Action"),e.qZA(),e.TgZ(5,"option",3),e._uU(6,"Sci-Fi"),e.qZA(),e.TgZ(7,"option",4),e._uU(8,"Animation"),e.qZA(),e.TgZ(9,"option",5),e._uU(10,"Adventure"),e.qZA(),e.TgZ(11,"option",6),e._uU(12,"Comedy"),e.qZA(),e.TgZ(13,"option",7),e._uU(14,"Crime"),e.qZA(),e.TgZ(15,"option",8),e._uU(16,"Drama"),e.qZA()()),2&o&&e.Q6J("value",s.genre_value())}})}return t})();function g(t,C){1&t&&e._UZ(0,"app-card-movie",6),2&t&&e.Q6J("movie",C.$implicit)}let p=(()=>{class t{constructor(n){this.moviesService=n,this.genre_value=(0,e.tdS)(""),this.movies=(0,e.Flj)(()=>this.moviesService.getMovieByGenre(this.genre_value()))}set genre(n){this.genre_value.set(n)}ngOnInit(){}static#e=this.\u0275fac=function(o){return new(o||t)(e.Y36(l.I))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-genders"]],inputs:{genre:"genre"},decls:8,vars:5,consts:[[1,"genres"],[1,"mb-3","title-section"],[1,"filters"],[3,"genre"],[1,"grid","mt-4"],[3,"movie",4,"ngFor","ngForOf"],[3,"movie"]],template:function(o,s){1&o&&(e.TgZ(0,"div",0)(1,"h2",1),e._uU(2),e.ALo(3,"titlecase"),e.qZA(),e.TgZ(4,"div",2),e._UZ(5,"app-select-genre",3),e.qZA(),e.TgZ(6,"div",4),e.YNc(7,g,1,1,"app-card-movie",5),e.qZA()()),2&o&&(e.xp6(2),e.hij("",e.lcZ(3,3,s.genre_value())||"Genres"," movies"),e.xp6(3),e.Q6J("genre",s.genre_value()),e.xp6(2),e.Q6J("ngForOf",s.movies()))},dependencies:[a.sg,m.m,v,a.rS],styles:[".genres[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{max-width:35%;display:flex;justify-content:space-between}@media (max-width: 1200px){.genres[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{max-width:40%!important}}@media (max-width: 768px){.genres[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%]{max-width:100%!important;justify-content:space-evenly!important}}"]})}return t})();var d=i(4871),h=i(4555);const f=[{path:"",component:p}];let Z=(()=>{class t{static#e=this.\u0275fac=function(o){return new(o||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[a.ez,r.Bz.forChild(f),d.s,h.F,r.Bz]})}return t})()}}]);