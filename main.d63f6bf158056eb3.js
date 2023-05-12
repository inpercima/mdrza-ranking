"use strict";(self.webpackChunkmdrza_ranking=self.webpackChunkmdrza_ranking||[]).push([["main"],{5345:(p,D,l)=>{var u=l(5441),t=l(9523),d=l(1728),c=l(5580),h=l(9383),_=l(6550),A=l(4275);var s=l(5030),g=l(7656),Z=l(2342),i=l(8980),U=l(4755),b=l(6012),v=l(9114),x=l(8097),N=l(1247),Y=l(4004),y=l(6832);let S=(()=>{class e{constructor(a){this.httpClient=a}list(){const a=[];return this.httpClient.get("https://www.mit-dem-rad-zur-arbeit.de/api/teamranking.php?trid=98").pipe((0,Y.U)(o=>(o.forEach(m=>{const r={};r.name=m.teamname,r.sumKm=m.Summe,r.sumDays=m.Tage,r.member=m.AnzTeammember,r.avgKm=m.AvgKM,r.avgDays=m.AvgDays,r.rank=m.rank,a.push(r)}),a)))}}return e.\u0275fac=function(a){return new(a||e)(t.LFG(y.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function k(e,n){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Rang"),t.qZA())}function w(e,n){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.rank)}}function z(e,n){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Teamname"),t.qZA())}function O(e,n){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.name)}}function Q(e,n){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Summe km"),t.qZA())}function R(e,n){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.sumKm)}}function H(e,n){1&e&&(t.TgZ(0,"mat-header-cell",24),t._uU(1,"Summe Tage"),t.qZA())}function B(e,n){if(1&e&&(t.TgZ(0,"mat-cell",24),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.sumDays)}}function L(e,n){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Durchschnitt km"),t.qZA())}function M(e,n){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.avgKm)}}function F(e,n){1&e&&(t.TgZ(0,"mat-header-cell",24),t._uU(1,"Durchschnitt Tage"),t.qZA())}function q(e,n){if(1&e&&(t.TgZ(0,"mat-cell",24),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.Oqu(a.avgDays)}}function J(e,n){1&e&&(t.TgZ(0,"mat-header-cell",25),t._uU(1,"Anzahl Teilnehmende"),t.qZA())}function I(e,n){if(1&e&&(t.TgZ(0,"mat-cell",25),t._uU(1),t.qZA()),2&e){const a=n.$implicit;t.xp6(1),t.hij(" ",a.member," ")}}function K(e,n){1&e&&t._UZ(0,"mat-header-row")}function $(e,n){1&e&&t._UZ(0,"mat-row")}function j(e,n){if(1&e&&(t.TgZ(0,"mat-table",8),t.ynx(1,9),t.YNc(2,k,2,0,"mat-header-cell",10),t.YNc(3,w,2,1,"mat-cell",11),t.BQk(),t.ynx(4,12),t.YNc(5,z,2,0,"mat-header-cell",10),t.YNc(6,O,2,1,"mat-cell",11),t.BQk(),t.ynx(7,13),t.YNc(8,Q,2,0,"mat-header-cell",10),t.YNc(9,R,2,1,"mat-cell",11),t.BQk(),t.ynx(10,14),t.YNc(11,H,2,0,"mat-header-cell",15),t.YNc(12,B,2,1,"mat-cell",16),t.BQk(),t.ynx(13,17),t.YNc(14,L,2,0,"mat-header-cell",10),t.YNc(15,M,2,1,"mat-cell",11),t.BQk(),t.ynx(16,18),t.YNc(17,F,2,0,"mat-header-cell",15),t.YNc(18,q,2,1,"mat-cell",16),t.BQk(),t.ynx(19,19),t.YNc(20,J,2,0,"mat-header-cell",20),t.YNc(21,I,2,1,"mat-cell",21),t.BQk(),t.YNc(22,K,1,0,"mat-header-row",22),t.YNc(23,$,1,0,"mat-row",23),t.qZA()),2&e){const a=t.oxw();t.Q6J("dataSource",a.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns)}}const G=function(){return[5,10,20]};let P=(()=>{class e{constructor(a,o,m,r){this.formBuilder=a,this.clipboard=o,this.snackBar=m,this.mdrzaService=r,this.dataSource=new i.by,this.displayedColumns=["rank","name","sumKm","sumDays","avgKm","avgDays","member"]}get f(){return this.form.controls}ngOnInit(){this.form=this.formBuilder.group({filter:["",s.kI.required]}),this.mdrzaService.list().subscribe(a=>{this.dataSource=new i.by(a),this.dataSource.paginator=this.paginator,this.dataSource.filterPredicate=(m,r)=>{const C=(r=","===r.slice(-1)?r.slice(0,-1):r).trim().split(",");let T=!1;for(const E of C)if(T=m.name.trim().toLocaleLowerCase().indexOf(E.trim().toLocaleLowerCase())>=0,T)break;return T};const o=new URL(location.href).searchParams.get("teams");o&&(this.f.filter.setValue(o.trim()),this.setFilter(this.f.filter.value))})}applyFilter(a){this.setFilter(a.target.value)}setFilter(a){this.dataSource.filter=a.trim().toLowerCase()}onSubmit(){const a=new URL(location.href);a.searchParams.set("teams",this.f.filter.value),this.clipboard.copy(a.href),this.snackBar.open("Teams copied to clipboard","Ready",{duration:3e3,verticalPosition:"top"})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(s.qu),t.Y36(N.TU),t.Y36(Z.ux),t.Y36(S))},e.\u0275cmp=t.Xpm({type:e,selectors:[["mr-dashboard"]],viewQuery:function(a,o){if(1&a&&t.Gf(g.NW,5),2&a){let m;t.iGM(m=t.CRH())&&(o.paginator=m.first)}},standalone:!0,features:[t.jDz],decls:12,vars:5,consts:[[1,"w-4/5","mx-auto"],["novalidate","",3,"formGroup","ngSubmit"],[1,"flex","gap-5","items-center"],["hintLabel","Enter the teams you want to see in contest and create a url to send to friends.",1,"basis-11/12"],["matInput","","formControlName","filter",3,"keyup"],["mat-raised-button","","color","primary",1,"flex-1",3,"disabled"],["showFirstLastButtons","",3,"pageSizeOptions"],["class","mat-elevation-z8",3,"dataSource",4,"ngIf"],[1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","rank"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","sumKm"],["matColumnDef","sumDays"],["fxHide.lt-sm","true",4,"matHeaderCellDef"],["fxHide.lt-sm","true",4,"matCellDef"],["matColumnDef","avgKm"],["matColumnDef","avgDays"],["matColumnDef","member"],["fxHide.lt-md","true",4,"matHeaderCellDef"],["fxHide.lt-md","true",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["fxHide.lt-sm","true"],["fxHide.lt-md","true"]],template:function(a,o){1&a&&(t.TgZ(0,"mat-card",0)(1,"mat-card-content")(2,"form",1),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(3,"div",2)(4,"mat-form-field",3)(5,"mat-label"),t._uU(6,"Teams"),t.qZA(),t.TgZ(7,"input",4),t.NdJ("keyup",function(r){return o.applyFilter(r)}),t.qZA()(),t.TgZ(8,"button",5),t._uU(9,"URL"),t.qZA()()(),t._UZ(10,"mat-paginator",6),t.YNc(11,j,24,3,"mat-table",7),t.qZA()()),2&a&&(t.xp6(2),t.Q6J("formGroup",o.form),t.xp6(6),t.Q6J("disabled",!o.form.valid),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(4,G)),t.xp6(1),t.Q6J("ngIf",o.dataSource))},dependencies:[d.ot,d.lW,b.QW,b.a8,b.dn,v.lN,v.KE,v.hX,x.c,x.Nt,g.TU,g.NW,Z.ZX,i.p0,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,U.O5,s.UX,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u],encapsulation:2}),e})();function W(e,n){1&e&&(t.TgZ(0,"h2",5),t._uU(1,"Overview"),t.qZA(),t.TgZ(2,"mat-dialog-content"),t._uU(3," Shows the ranking of teams for 'MdRzA - Mit dem Rad zur Arbeit'. "),t._UZ(4,"br"),t._uU(5," Users can create a link to share or use himself. "),t.qZA(),t.TgZ(6,"mat-dialog-actions",6)(7,"button",7),t._uU(8,"Close"),t.qZA()())}(0,_.Cg)((()=>{class e{constructor(a,o,m){this.dialog=a,this.titleService=o,this.overlayContainer=m,this.class="indigo-pink-theme",this.appname="MdRzA Ranking",this.titleService.setTitle(this.appname),this.overlayContainer.getContainerElement().classList.add("indigo-pink-theme")}openDialog(a){this.dialog.open(a,{maxWidth:"800px"})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(c.uw),t.Y36(_.Dx),t.Y36(u.Xj))},e.\u0275cmp=t.Xpm({type:e,selectors:[["mr-root"]],hostVars:2,hostBindings:function(a,o){2&a&&t.Tol(o.class)},standalone:!0,features:[t.jDz],decls:12,vars:1,consts:[[1,"mat-app-background"],["color","primary",1,"mat-elevation-z4","justify-between"],["mat-button","",3,"click"],["mat-button","","href","https://www.mit-dem-rad-zur-arbeit.de/","target","_blank"],["dialog",""],["mat-dialog-title",""],["align","end"],["mat-button","","mat-dialog-close","","cdkFocusInitial",""]],template:function(a,o){if(1&a){const m=t.EpF();t.TgZ(0,"div",0)(1,"mat-toolbar",1),t._uU(2),t.TgZ(3,"div")(4,"button",2),t.NdJ("click",function(){t.CHM(m);const C=t.MAs(10);return t.KtG(o.openDialog(C))}),t._uU(5,"APP INFO"),t.qZA(),t._uU(6," | "),t.TgZ(7,"a",3),t._uU(8,"Open MdRzA"),t.qZA()()(),t.YNc(9,W,9,0,"ng-template",null,4,t.W1O),t._UZ(11,"mr-dashboard"),t.qZA()}2&a&&(t.xp6(2),t.hij(" ",o.appname," "))},dependencies:[P,d.ot,d.zs,d.lW,c.Is,c.ZT,c.uh,c.xY,c.H8,h.g0,h.Ye],styles:["body[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0;overflow-y:scroll}mat-card[_ngcontent-%COMP%]{margin-top:20px}"]}),e})(),{providers:[(0,t.RIp)(_.b2,u.U8,d.ot,c.Is,h.g0),(0,A.iQ)(),(0,y.h_)()]}).catch(e=>console.error(e))}},p=>{p.O(0,["vendor"],()=>p(p.s=5345)),p.O()}]);