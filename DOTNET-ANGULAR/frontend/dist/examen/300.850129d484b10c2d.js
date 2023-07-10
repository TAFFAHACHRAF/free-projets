"use strict";(self.webpackChunkexamen=self.webpackChunkexamen||[]).push([[300],{1300:(y,p,m)=>{m.r(p),m.d(p,{CustomerModule:()=>P});var c=m(4755),a=m(753),e=m(9523),g=m(9467),h=m(3144);let l=(()=>{class n{constructor(t){this.http=t,this.url=g.N.backendHost+"/customers"}getCustomers(){return this.http.get(this.url)}deleteCustomer(t){return this.http.delete(`${this.url}/${t}`)}addCustomer(t){return this.http.post(this.url,t)}getCustomerById(t){return this.http.get(`${this.url}/${t}`)}updateCustomer(t,o){return this.http.put(`${this.url}/${o}`,t)}getCustomerByKeyword(t){return this.http.get(`${this.url}/search?keyword=${t}`)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(h.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var i=m(5030);const f=function(n){return["edit",n]};function C(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"a",10),e._uU(9,"Edit"),e.qZA()(),e.TgZ(10,"td")(11,"a",11),e.NdJ("click",function(){const u=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.deleteCustomer(u.id))}),e._uU(12,"Delete"),e.qZA()()()}if(2&n){const t=r.$implicit;e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.email),e.xp6(2),e.Q6J("routerLink",e.VKq(4,f,t.id))}}function v(n,r){1&n&&(e.TgZ(0,"div",17),e._uU(1," Name is required "),e.qZA())}function Z(n,r){1&n&&(e.TgZ(0,"div",17),e._uU(1," Email is required "),e.qZA())}function b(n,r){1&n&&(e.TgZ(0,"div",17),e._uU(1," Name is required "),e.qZA())}function M(n,r){1&n&&(e.TgZ(0,"div",17),e._uU(1," Quantity is required "),e.qZA())}const T=[{path:"",component:(()=>{class n{constructor(t,o){this.customerService=t,this.router=o,this.keyword="",this.currentPage=1,this.totalPages=5,this.pageSize=5,this.currentPath=this.router.url}ngOnInit(){this.getCustomers(this.currentPage,this.pageSize)}getCustomers(t=1,o=4){this.customerService.getCustomers().subscribe(s=>{this.customers=s})}deleteCustomer(t){this.customerService.deleteCustomer(t).subscribe({}),this.customers=this.customers.filter(o=>o.id!==t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l),e.Y36(a.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-p-index"]],decls:25,vars:3,consts:[[1,"p-4",2,"width","1350px"],[1,"card"],[1,"card-body"],[1,"input-group","mb-3","p-2","mt-4"],["type","text","placeholder","Search",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-outline-success"],[1,"bi","bi-search"],[1,"table","table-striped"],[1,"thead-dark"],[4,"ngFor","ngForOf"],[1,"btn","btn-outline-success",3,"routerLink"],[1,"btn","btn-outline-danger",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div"),e._uU(4),e.qZA(),e.TgZ(5,"div",3)(6,"input",4),e.NdJ("ngModelChange",function(u){return o.keyword=u}),e.qZA(),e.TgZ(7,"button",5),e._UZ(8,"i",6),e._uU(9," Search "),e.qZA()(),e.TgZ(10,"table",7)(11,"thead",8)(12,"tr")(13,"th"),e._uU(14,"ID"),e.qZA(),e.TgZ(15,"th"),e._uU(16,"NAME"),e.qZA(),e.TgZ(17,"th"),e._uU(18,"EMAIL"),e.qZA(),e.TgZ(19,"th"),e._uU(20,"Edit"),e.qZA(),e.TgZ(21,"th"),e._uU(22,"Delete"),e.qZA()()(),e.TgZ(23,"tbody"),e.YNc(24,C,13,6,"tr",9),e.qZA()()()()()),2&t&&(e.xp6(4),e.hij(" ",o.currentPath," "),e.xp6(2),e.Q6J("ngModel",o.keyword),e.xp6(18),e.Q6J("ngForOf",o.customers))},dependencies:[c.sg,a.rH,i.Fj,i.JJ,i.On]}),n})()},{path:"edit/:id",component:(()=>{class n{constructor(t,o,s){this.route=t,this.customerService=o,this.router=s,this.currentPath=this.router.url,this.form={id:0,name:"",email:""}}ngOnInit(){this.route.params.subscribe(t=>{this.id=t.id,this.customerService.getCustomerById(this.id).subscribe(o=>{this.customer=o,this.form={id:this.customer.id,name:this.customer.name,email:this.customer.email}},o=>{console.log(o)})})}onSubmit(){this.customerService.updateCustomer(this.form,this.id).subscribe(t=>{this.router.navigate(["admin/customer"])},t=>{console.log(t),400===t.status?console.log("Bad Request: Session expired"):console.log("An error occurred")})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.gz),e.Y36(l),e.Y36(a.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-p-edit"]],decls:23,vars:5,consts:[[1,"p-4",2,"width","1350px"],[1,"card"],[1,"card-body"],[1,"form_container","p-2","mt-4"],["name","form",3,"ngSubmit"],["f","ngForm"],[1,"form-group"],["for","name"],["type","text","name","name","id","name","required","",1,"form-control",3,"ngModel","ngModelChange"],["name","ngModel"],["class","invalid-feedback",4,"ngIf"],[1,"form-group","pt-4"],["for","email"],["type","email","name","email","id","email","required","",1,"form-control",3,"ngModel","ngModelChange"],["email","ngModel"],[1,"form-group","mt-4","pt-4","d-flex","justify-content-center"],[1,"btn","btn-danger"],[1,"invalid-feedback"]],template:function(t,o){if(1&t){const s=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div"),e._uU(4),e.qZA(),e.TgZ(5,"div",3)(6,"form",4,5),e.NdJ("ngSubmit",function(){e.CHM(s);const d=e.MAs(7);return e.KtG(d.form.valid&&o.onSubmit())}),e.TgZ(8,"div",6)(9,"label",7),e._uU(10,"Name"),e.qZA(),e.TgZ(11,"input",8,9),e.NdJ("ngModelChange",function(d){return o.form.name=d}),e.qZA(),e.YNc(13,v,2,0,"div",10),e.qZA(),e.TgZ(14,"div",11)(15,"label",12),e._uU(16,"Email"),e.qZA(),e.TgZ(17,"input",13,14),e.NdJ("ngModelChange",function(d){return o.form.email=d}),e.qZA(),e.YNc(19,Z,2,0,"div",10),e.qZA(),e.TgZ(20,"div",15)(21,"button",16),e._uU(22,"Save Product"),e.qZA()()()()()()()}if(2&t){const s=e.MAs(7),u=e.MAs(12),d=e.MAs(18);e.xp6(4),e.hij(" ",o.currentPath," "),e.xp6(7),e.Q6J("ngModel",o.form.name),e.xp6(2),e.Q6J("ngIf",u.invalid&&s.submitted),e.xp6(4),e.Q6J("ngModel",o.form.email),e.xp6(2),e.Q6J("ngIf",d.invalid&&s.submitted)}},dependencies:[c.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.On,i.F]}),n})()},{path:"add",component:(()=>{class n{constructor(t,o){this.customerService=t,this.router=o,this.form={id:0,name:"",email:""},this.currentPath=this.router.url}ngOnInit(){}onSubmit(){this.customerService.addCustomer(this.form).subscribe(t=>{this.router.navigate(["admin/customer"])})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l),e.Y36(a.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-p-add"]],decls:23,vars:5,consts:[[1,"p-4",2,"width","1350px"],[1,"card"],[1,"card-body"],[1,"form_container","p-2","mt-4"],["name","form",3,"ngSubmit"],["f","ngForm"],[1,"form-group"],["for","name"],["type","text","name","name","id","name","required","",1,"form-control",3,"ngModel","ngModelChange"],["name","ngModel"],["class","invalid-feedback",4,"ngIf"],[1,"form-group","pt-4"],["for","email"],["type","email","name","email","id","email","required","",1,"form-control",3,"ngModel","ngModelChange"],["email","ngModel"],[1,"form-group","mt-4","pt-4","d-flex","justify-content-center"],[1,"btn","btn-danger"],[1,"invalid-feedback"]],template:function(t,o){if(1&t){const s=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div"),e._uU(4),e.qZA(),e.TgZ(5,"div",3)(6,"form",4,5),e.NdJ("ngSubmit",function(){e.CHM(s);const d=e.MAs(7);return e.KtG(d.form.valid&&o.onSubmit())}),e.TgZ(8,"div",6)(9,"label",7),e._uU(10,"Name"),e.qZA(),e.TgZ(11,"input",8,9),e.NdJ("ngModelChange",function(d){return o.form.name=d}),e.qZA(),e.YNc(13,b,2,0,"div",10),e.qZA(),e.TgZ(14,"div",11)(15,"label",12),e._uU(16,"Email"),e.qZA(),e.TgZ(17,"input",13,14),e.NdJ("ngModelChange",function(d){return o.form.email=d}),e.qZA(),e.YNc(19,M,2,0,"div",10),e.qZA(),e.TgZ(20,"div",15)(21,"button",16),e._uU(22,"Save Customer"),e.qZA()()()()()()()}if(2&t){const s=e.MAs(7),u=e.MAs(12),d=e.MAs(18);e.xp6(4),e.hij(" ",o.currentPath," "),e.xp6(7),e.Q6J("ngModel",o.form.name),e.xp6(2),e.Q6J("ngIf",u.invalid&&s.submitted),e.xp6(4),e.Q6J("ngModel",o.form.email),e.xp6(2),e.Q6J("ngIf",d.invalid&&s.submitted)}},dependencies:[c.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.On,i.F]}),n})()}];let q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[a.Bz.forChild(T),a.Bz]}),n})(),P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,q,i.u5]}),n})()}}]);