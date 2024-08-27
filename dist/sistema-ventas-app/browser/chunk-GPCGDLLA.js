import{a as ke}from"./chunk-2PX2V5L3.js";import{a as _}from"./chunk-SNZVP43R.js";import{A as fe,B as he,F as ge,G as _e,H as ve,I as Ce,J as be,K as Se,L as Ee,M as we,N as Ue,O as Ie,P as Me,Q as xe,R as k,S as De,T as Fe,U as ye,V as Te,W as Ne,X as Re,Y as Oe,Z as $e,a as te,b as $,e as ie,f as re,k as oe,l as h,m as ae,n as ne,o as se,p as me,q as le,r as ue,s as ce,x as de,y as pe}from"./chunk-JJW7TMR6.js";import{a as O,l as q}from"./chunk-UDCYXUZB.js";import"./chunk-IX6G3U3V.js";import{Cb as o,Db as a,E as W,Eb as d,Fb as C,Gb as b,Ib as J,Kc as N,Lb as v,Lc as R,Nb as B,Nc as ee,Rb as K,Sb as X,Tb as Y,Vb as s,W as x,Wb as S,Xb as g,Za as m,_a as f,_b as Z,aa as D,ba as F,c as G,fa as E,j as M,ka as y,la as T,q as Q,rb as c,ta as V,tb as u,ua as L}from"./chunk-WSLSRKTI.js";var j=(()=>{let e=class e{constructor(i,r){this.http=i,this.snackBar=r}createUsuario(i){return this.http.post(`${_.API_URL}/users/usuarios`,i)}getUsuarios(){return this.http.get(`${_.API_URL}/users/usuarios`,{headers:{requireToken:"true"}}).pipe(W(i=>this.handlerError(i)))}getUsuario(i){return this.http.get(`${_.API_URL}/users/usuarios/${i}`,{headers:{requireToken:"true"}})}updateUsuario(i,r){return this.http.put(`${_.API_URL}/users/usuarios/${i}`,r,{headers:{requireToken:"true"}})}deleteUsuario(i){return this.http.delete(`${_.API_URL}/users/usuarios/${i}`,{headers:{requireToken:"true"}})}handlerError(i){var r="";return i.error&&(i.error.message?r=i.error.message:r="Ocurri\xF3 un error"),this.snackBar.open(r,"",{duration:3e3}),Q(()=>Error(r))}};e.\u0275fac=function(r){return new(r||e)(E(O),E(ie))},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Pe=(()=>{let e=class e{constructor(i){this.http=i}getRoles(){return this.http.get(`${_.API_URL}/roles/roles`)}};e.\u0275fac=function(r){return new(r||e)(E(O))},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function Qe(t,e){t&1&&(o(0,"mat-error"),s(1," Las contrase\xF1as no coinciden "),a())}function We(t,e){if(t&1&&(o(0,"mat-option",15),s(1),a()),t&2){let l=e.$implicit;u("value",l.id),m(),S(l.nombre)}}var U=function(t){return t.EDIT="edit",t.NEW="new",t}(U||{}),Ae=(()=>{let e=class e{constructor(i,r,n,p,H,P){this.data=i,this.fb=r,this.baseForm=n,this.usuarioService=p,this.rolesService=H,this.dialogRef=P,this.destroy$=new M,this.roles=[],this.titleButton="Guardar",this.actionTODO=U.NEW,this.userForm=this.fb.group({cveUsuario:[""],nombre:["",[h.required,h.minLength(3)]],apellidos:["",[h.required,h.minLength(3)]],username:["",[h.required,h.minLength(3)]],password:["",[h.required]],confirmPassword:["",[h.required]],rol:[[],[h.required]]},{validator:this.passwordMatchValidator})}getRoles(){this.rolesService.getRoles().subscribe(i=>{this.roles=i},i=>{console.error("Error al obtener roles",i)})}ngOnInit(){this.pathData(),this.getRoles()}pathData(){this.data.user.cveUsuario?(this.titleButton="Actualizar",this.actionTODO=U.EDIT,this.userForm.patchValue({cveUsuario:this.data.user.cveUsuario,nombre:this.data.user.nombre,apellidos:this.data.user.apellidos,rol:this.data.user.roles.map(i=>i.id)}),this.userForm.controls.username.disable(),this.userForm.controls.password.disable(),this.userForm.controls.confirmPassword.disable()):(this.titleButton="Guardar",this.actionTODO=U.NEW)}ngOnDestroy(){this.destroy$.next({}),this.destroy$.complete()}onSave(){if(!this.userForm.invalid){var i=this.userForm.getRawValue();if(this.actionTODO==U.NEW){var r={nombre:i.nombre,apellidos:i.apellidos,username:i.username,rol:i.rol};this.usuarioService.createUsuario(r).pipe(x(this.destroy$)).subscribe(I=>{console.log("Usuario creado con \xE9xito",r)},I=>{console.error("Error al crear usuario",I)}),this.refresh()}else{var z=i,{confirmPassword:n,password:p,username:H}=z,P=G(z,["confirmPassword","password","username"]);let I=this.data.user.cveUsuario;this.usuarioService.updateUsuario(I,P).subscribe(A=>{console.log("Usuario actualizado con \xE9xito",A)},A=>{console.error("Error al actualizar usuario",A)}),this.refresh()}}}passwordMatchValidator(i){let r=i.get("password")?.value,n=i.get("confirmPassword")?.value;r!==n?i.get("confirmPassword")?.setErrors({mismatch:!0}):i.get("confirmPassword")?.setErrors(null)}refresh(){window.location.reload()}};e.\u0275fac=function(r){return new(r||e)(f(Fe),f(ue),f(ke),f(j),f(Pe),f(De))},e.\u0275cmp=y({type:e,selectors:[["app-usuario-dialog"]],decls:45,vars:10,consts:[["mat-dialog-title",""],[3,"submit","formGroup"],[1,"full-width"],["matInput","","formControlName","nombre","placeholder","Nombre"],["matInput","","formControlName","apellidos","placeholder","Apellidos"],["matInput","","formControlName","username","placeholder","Username"],["matInput","","formControlName","password","placeholder","Password"],["matInput","","formControlName","confirmPassword","placeholder","Confirmar contrase\xF1a"],[4,"ngIf"],["apparence","outline",1,"full-width"],["formControlName","rol","multiple",""],[3,"value",4,"ngFor","ngForOf"],["align","end"],["mat-button","","mat-dialog-close",""],["type","button","mat-flat-button","","color","primary",1,"me-2",3,"click","disabled"],[3,"value"]],template:function(r,n){r&1&&(o(0,"h1",0),s(1,"Usuario"),a(),o(2,"mat-dialog-content")(3,"form",1),v("submit",function(){return n.onSave()}),o(4,"mat-form-field",2)(5,"mat-label"),s(6,"Nombre"),a(),d(7,"input",3),o(8,"mat-error"),s(9),a()(),o(10,"mat-form-field",2)(11,"mat-label"),s(12,"Apellidos"),a(),d(13,"input",4),o(14,"mat-error"),s(15),a()(),o(16,"mat-form-field",2)(17,"mat-label"),s(18,"Username"),a(),d(19,"input",5),o(20,"mat-error"),s(21),a()(),o(22,"mat-form-field",2)(23,"mat-label"),s(24,"Contrase\xF1a"),a(),d(25,"input",6),o(26,"mat-error"),s(27),a()(),o(28,"mat-form-field",2)(29,"mat-label"),s(30,"Confirmar contrase\xF1a"),a(),d(31,"input",7),c(32,Qe,2,0,"mat-error",8),o(33,"mat-error"),s(34),a()(),o(35,"mat-form-field",9)(36,"mat-label"),s(37,"Rol(es)"),a(),o(38,"mat-select",10),c(39,We,2,2,"mat-option",11),a()()()(),o(40,"mat-dialog-actions",12)(41,"button",13),s(42," Cerrar "),a(),o(43,"button",14),v("click",function(){return n.onSave()}),s(44),a()()),r&2&&(m(3),u("formGroup",n.userForm),m(6),g(" ",n.baseForm.getErrorMessage(n.userForm.get("nombre"))," "),m(6),g(" ",n.baseForm.getErrorMessage(n.userForm.get("apellidos"))," "),m(6),g(" ",n.baseForm.getErrorMessage(n.userForm.get("username"))," "),m(6),g(" ",n.baseForm.getErrorMessage(n.userForm.get("password"))," "),m(5),u("ngIf",n.userForm.hasError("mismatch","confirmPassword")),m(2),g(" ",n.baseForm.getErrorMessage(n.userForm.get("confirmPassword"))," "),m(5),u("ngForOf",n.roles),m(4),u("disabled",n.userForm.invalid),m(),g(" ",n.titleButton," "))},dependencies:[N,R,se,oe,ae,ne,me,le,$,he,fe,de,pe,Te,Ne,Oe,Re,xe,te]});let t=e;return t})();var Je=()=>[5,10,20];function Ke(t,e){t&1&&(o(0,"th",15),s(1,"Nombre"),a())}function Xe(t,e){if(t&1&&(o(0,"td",16),s(1),a()),t&2){let l=e.$implicit;m(),S(l.nombre)}}function Ye(t,e){t&1&&(o(0,"th",15),s(1,"Apellidos"),a())}function Ze(t,e){if(t&1&&(o(0,"td",16),s(1),a()),t&2){let l=e.$implicit;m(),S(l.apellidos)}}function et(t,e){t&1&&(o(0,"th",15),s(1,"Nombre de usuario"),a())}function tt(t,e){if(t&1&&(o(0,"td",16),s(1),a()),t&2){let l=e.$implicit;m(),S(l.username)}}function it(t,e){t&1&&(o(0,"th",15),s(1,"Rol(es)"),a())}function rt(t,e){t&1&&(o(0,"span"),s(1,", "),a())}function ot(t,e){if(t&1&&(o(0,"span"),s(1),c(2,rt,2,0,"span",18),a()),t&2){let l=e.$implicit,i=e.last;m(),g(" ",l.nombre,""),m(),u("ngIf",!i)}}function at(t,e){if(t&1&&(o(0,"td",16),c(1,ot,3,2,"span",17),a()),t&2){let l=e.$implicit;m(),u("ngForOf",l.roles)}}function nt(t,e){t&1&&d(0,"th",15)}function st(t,e){if(t&1){let l=J();o(0,"td",16)(1,"button",19),v("click",function(){let r=V(l).$implicit,n=B();return L(n.onOpenModal(r))}),o(2,"mat-icon"),s(3,"edit"),a(),s(4," Editar "),a(),o(5,"button",20),v("click",function(){let r=V(l).$implicit,n=B();return L(n.eliminarUsuario(r))}),o(6,"mat-icon"),s(7,"delete"),a(),s(8," Eliminar "),a()()}}function mt(t,e){t&1&&d(0,"tr",21)}function lt(t,e){t&1&&d(0,"tr",22)}var Ve=(()=>{let e=class e{constructor(i,r){this.dialog=i,this.usuariosService=r,this.destroy$=new M,this.dataSource=new Me,this.displayedColumns=["nombre","apellidos","username","rol","acciones"]}ngOnInit(){this.listar()}listar(){this.usuariosService.getUsuarios().pipe(x(this.destroy$)).subscribe(i=>{this.dataSource.data=i})}ngAfterViewInit(){this.dataSource.paginator=this.paginator}onOpenModal(i={}){let r=this.dialog.open(Ae,{width:"80%",data:{user:i}})}ngOnDestroy(){this.destroy$.next({}),this.destroy$.complete()}eliminarUsuario(i){let r=i.cveUsuario;this.usuariosService.deleteUsuario(r).subscribe(n=>{n.success?this.dataSource.data=this.dataSource.data.filter(p=>p.cveUsuario!==i.cveUsuario):console.error("Error al eliminar usuario:",n.error)}),this.refresh()}refresh(){window.location.reload()}};e.\u0275fac=function(r){return new(r||e)(f(ye),f(j))},e.\u0275cmp=y({type:e,selectors:[["app-usuarios"]],viewQuery:function(r,n){if(r&1&&K(k,5),r&2){let p;X(p=Y())&&(n.paginator=p.first)}},decls:27,vars:5,consts:[[1,"m-3"],["align","right"],["mat-flat-button","","color","primary",1,"m-2",3,"click"],[1,"table-content","mat-elevation-z8","m-2"],["mat-table","",3,"dataSource"],["matColumnDef","nombre"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","apellidos"],["matColumnDef","username"],["matColumnDef","rol"],["matColumnDef","acciones"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[4,"ngFor","ngForOf"],[4,"ngIf"],["mat-flat-button","","color","accent",1,"me-2",3,"click"],["mat-flat-button","","color","warn",1,"me-2",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(r,n){r&1&&(o(0,"h3",0),s(1,"Usuarios"),a(),o(2,"div",1)(3,"button",2),v("click",function(){return n.onOpenModal()}),o(4,"mat-icon"),s(5,"add"),a(),s(6," Agregar "),a()(),o(7,"div",3)(8,"table",4),C(9,5),c(10,Ke,2,0,"th",6)(11,Xe,2,1,"td",7),b(),C(12,8),c(13,Ye,2,0,"th",6)(14,Ze,2,1,"td",7),b(),C(15,9),c(16,et,2,0,"th",6)(17,tt,2,1,"td",7),b(),C(18,10),c(19,it,2,0,"th",6)(20,at,2,1,"td",7),b(),C(21,11),c(22,nt,1,0,"th",6)(23,st,9,0,"td",7),b(),c(24,mt,1,0,"tr",12)(25,lt,1,0,"tr",13),a(),d(26,"mat-paginator",14),a()),r&2&&(m(8),u("dataSource",n.dataSource),m(16),u("matHeaderRowDef",n.displayedColumns),m(),u("matRowDefColumns",n.displayedColumns),m(),u("pageSizeOptions",Z(4,Je)))},dependencies:[N,R,$,re,ge,ve,Ee,Ce,_e,we,be,Se,Ue,Ie,k]});let t=e;return t})();var ut=[{path:"",component:Ve}],Le=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=T({type:e}),e.\u0275inj=F({imports:[q.forChild(ut),q]});let t=e;return t})();var zt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=T({type:e}),e.\u0275inj=F({imports:[ee,Le,ce,$e]});let t=e;return t})();export{zt as UsuariosModule};
