"use strict";(self.webpackChunkmdrza_ranking=self.webpackChunkmdrza_ranking||[]).push([["main"],{1680:(d,D,n)=>{var u=n(2313),t=n(4893),Z=n(9776),A=n(2155),Y=n(6360);var c=n(2349),f=n(7093),s=n(2382),_=n(4567),i=n(4999),U=n(9287),b=n(7261),w=n(4004),N=n(6529);let F=(()=>{class e{constructor(a){this.httpClient=a}list(){const a=[];return this.httpClient.get("https://www.mit-dem-rad-zur-arbeit.de/api/teamranking.php?trid=98").pipe((0,w.U)(l=>(l.forEach(m=>{const r={};r.name=m.teamname,r.sumKm=m.Summe,r.sumDays=m.Tage,r.member=m.AnzTeammember,r.avgKm=m.AvgKM,r.avgDays=m.AvgDays,r.rank=m.rank,a.push(r)}),a)))}}return e.\u0275fac=function(a){return new(a||e)(t.LFG(N.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var S=n(9808),z=n(3322),h=n(7423),g=n(9224),v=n(7322),C=n(7531);function k(e,o){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Rang"),t.qZA())}function L(e,o){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.rank)}}function O(e,o){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Name"),t.qZA())}function H(e,o){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.name)}}function Q(e,o){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Summe km"),t.qZA())}function B(e,o){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.sumKm)}}function R(e,o){1&e&&(t.TgZ(0,"mat-header-cell",24),t._uU(1,"Summe Tage"),t.qZA())}function J(e,o){if(1&e&&(t.TgZ(0,"mat-cell",24),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.sumDays)}}function K(e,o){1&e&&(t.TgZ(0,"mat-header-cell"),t._uU(1,"Avg Km"),t.qZA())}function I(e,o){if(1&e&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.avgKm)}}function W(e,o){1&e&&(t.TgZ(0,"mat-header-cell",24),t._uU(1,"Avg Tage"),t.qZA())}function q(e,o){if(1&e&&(t.TgZ(0,"mat-cell",24),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.Oqu(a.avgDays)}}function G(e,o){1&e&&(t.TgZ(0,"mat-header-cell",25),t._uU(1,"Anzahl Mitglieder"),t.qZA())}function P(e,o){if(1&e&&(t.TgZ(0,"mat-cell",25),t._uU(1),t.qZA()),2&e){const a=o.$implicit;t.xp6(1),t.hij(" ",a.member," ")}}function $(e,o){1&e&&t._UZ(0,"mat-header-row")}function j(e,o){1&e&&t._UZ(0,"mat-row")}function X(e,o){if(1&e&&(t.TgZ(0,"mat-table",8),t.ynx(1,9),t.YNc(2,k,2,0,"mat-header-cell",10),t.YNc(3,L,2,1,"mat-cell",11),t.BQk(),t.ynx(4,12),t.YNc(5,O,2,0,"mat-header-cell",10),t.YNc(6,H,2,1,"mat-cell",11),t.BQk(),t.ynx(7,13),t.YNc(8,Q,2,0,"mat-header-cell",10),t.YNc(9,B,2,1,"mat-cell",11),t.BQk(),t.ynx(10,14),t.YNc(11,R,2,0,"mat-header-cell",15),t.YNc(12,J,2,1,"mat-cell",16),t.BQk(),t.ynx(13,17),t.YNc(14,K,2,0,"mat-header-cell",10),t.YNc(15,I,2,1,"mat-cell",11),t.BQk(),t.ynx(16,18),t.YNc(17,W,2,0,"mat-header-cell",15),t.YNc(18,q,2,1,"mat-cell",16),t.BQk(),t.ynx(19,19),t.YNc(20,G,2,0,"mat-header-cell",20),t.YNc(21,P,2,1,"mat-cell",21),t.BQk(),t.YNc(22,$,1,0,"mat-header-row",22),t.YNc(23,j,1,0,"mat-row",23),t.qZA()),2&e){const a=t.oxw();t.Q6J("dataSource",a.dataSource),t.xp6(22),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns)}}const E=function(){return[5,10,20]};let V=(()=>{class e{constructor(a,l,m,r){this.formBuilder=a,this.clipboard=l,this.snackBar=m,this.mdrzaService=r,this.dataSource=new i.by,this.displayedColumns=["rank","name","sumKm","sumDays","avgKm","avgDays","member"]}get f(){return this.form.controls}ngOnInit(){this.form=this.formBuilder.group({filter:["",s.kI.required]}),this.mdrzaService.list().subscribe(a=>{this.dataSource=new i.by(a),this.dataSource.paginator=this.paginator,this.dataSource.filterPredicate=(m,r)=>{const y=(r=","===r.slice(-1)?r.slice(0,-1):r).trim().split(",");let T=!1;for(const nt of y)if(T=m.name.trim().toLocaleLowerCase().indexOf(nt.trim().toLocaleLowerCase())>=0,T)break;return T};const l=new URL(location.href).searchParams.get("teams");l&&(this.f.filter.setValue(l.trim()),this.setFilter(this.f.filter.value))})}applyFilter(a){this.setFilter(a.target.value)}setFilter(a){this.dataSource.filter=a.trim().toLowerCase()}onSubmit(){const a=new URL(location.href);a.searchParams.set("teams",this.f.filter.value),this.clipboard.copy(a.href),this.snackBar.open("Teams copied to clipboard","Ready",{duration:3e3,verticalPosition:"top"})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(s.qu),t.Y36(U.TU),t.Y36(b.ux),t.Y36(F))},e.\u0275cmp=t.Xpm({type:e,selectors:[["mr-dashboard"]],viewQuery:function(a,l){if(1&a&&t.Gf(_.NW,5),2&a){let m;t.iGM(m=t.CRH())&&(l.paginator=m.first)}},decls:10,vars:5,consts:[["fxLayout","row","fxLayoutAlign","center"],["fxFlex","80"],["fxLayout","row","fxLayoutAlign","center","novalidate","",3,"formGroup","ngSubmit"],["fxFlex","90","hintLabel","Enter the teams you want to see in contest and create a url to send to friends."],["matInput","","placeholder","Teams","formControlName","filter",3,"keyup"],["fxFlex","8","fxFlexOffset","2","mat-raised-button","","color","primary",3,"disabled"],["showFirstLastButtons","",3,"pageSizeOptions"],["class","mat-elevation-z8",3,"dataSource",4,"ngIf"],[1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","rank"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","sumKm"],["matColumnDef","sumDays"],["fxHide.lt-sm","true",4,"matHeaderCellDef"],["fxHide.lt-sm","true",4,"matCellDef"],["matColumnDef","avgKm"],["matColumnDef","avgDays"],["matColumnDef","member"],["fxHide.lt-md","true",4,"matHeaderCellDef"],["fxHide.lt-md","true",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["fxHide.lt-sm","true"],["fxHide.lt-md","true"]],template:function(a,l){1&a&&(t.TgZ(0,"div",0)(1,"mat-card",1)(2,"mat-card-content")(3,"form",2),t.NdJ("ngSubmit",function(){return l.onSubmit()}),t.TgZ(4,"mat-form-field",3)(5,"input",4),t.NdJ("keyup",function(r){return l.applyFilter(r)}),t.qZA()(),t.TgZ(6,"button",5),t._uU(7,"URL"),t.qZA()(),t._UZ(8,"mat-paginator",6),t.YNc(9,X,24,3,"mat-table",7),t.qZA()()()),2&a&&(t.xp6(3),t.Q6J("formGroup",l.form),t.xp6(3),t.Q6J("disabled",!l.form.valid),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(4,E)),t.xp6(1),t.Q6J("ngIf",l.dataSource))},dependencies:[S.O5,f.xw,f.Wh,f.UT,f.yH,z.b8,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,h.lW,g.a8,g.dn,v.KE,C.Nt,_.NW,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk],encapsulation:2}),e})();var x=n(4594);function tt(e,o){1&e&&(t.TgZ(0,"mat-dialog-content"),t._uU(1," Shows the ranking of teams for 'MdRzA - Mit dem Rad zur Arbeit'. Users can create a link to share or use himself. "),t.qZA(),t.TgZ(2,"mat-dialog-actions",4)(3,"button",5),t._uU(4,"Close"),t.qZA()())}let et=(()=>{class e{constructor(a,l,m){this.dialog=a,this.titleService=l,this.overlayContainer=m,this.class="indigo-pink-theme",this.appname="MdRzA Ranking",this.titleService.setTitle(this.appname),this.overlayContainer.getContainerElement().classList.add("indigo-pink-theme")}openDialog(a){this.dialog.open(a,{maxWidth:"800px"})}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(c.uw),t.Y36(u.Dx),t.Y36(Z.Xj))},e.\u0275cmp=t.Xpm({type:e,selectors:[["mr-root"]],hostVars:2,hostBindings:function(a,l){2&a&&t.Tol(l.class)},decls:11,vars:1,consts:[["fxLayoutAlign","space-between center","color","primary",1,"mat-elevation-z4"],["mat-button","",3,"click"],["mat-button","","href","https://www.mit-dem-rad-zur-arbeit.de/","target","_blank"],["dialog",""],["align","end"],["mat-button","","mat-dialog-close","","cdkFocusInitial",""]],template:function(a,l){if(1&a){const m=t.EpF();t.TgZ(0,"mat-toolbar",0),t._uU(1),t.TgZ(2,"div")(3,"button",1),t.NdJ("click",function(){t.CHM(m);const y=t.MAs(9);return t.KtG(l.openDialog(y))}),t._uU(4,"APP INFO"),t.qZA(),t._uU(5," | "),t.TgZ(6,"a",2),t._uU(7,"Open MdRzA"),t.qZA()()(),t.YNc(8,tt,5,0,"ng-template",null,3,t.W1O),t._UZ(10,"mr-dashboard")}2&a&&(t.xp6(1),t.hij(" ",l.appname," "))},dependencies:[f.Wh,V,h.lW,h.zs,c.ZT,c.xY,c.H8,x.Ye],styles:["body[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue Light,Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif;margin:0;overflow-y:scroll}.mat-card[_ngcontent-%COMP%]{margin-top:20px}"]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.ot,g.QW,c.Is,v.lN,C.c,_.TU,b.ZX,i.p0,x.g0,h.ot,g.QW,c.Is,v.lN,C.c,_.TU,b.ZX,i.p0,x.g0]}),e})(),at=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[U.Iq,S.ez,A.o9,N.JF,s.UX,M]}),e})(),ot=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e,bootstrap:[et]}),e.\u0275inj=t.cJS({imports:[Y.PW,u.b2,A.o9,Z.U8,at,M]}),e})();u.q6().bootstrapModule(ot).catch(e=>console.error(e))}},d=>{d.O(0,["vendor"],()=>d(d.s=1680)),d.O()}]);