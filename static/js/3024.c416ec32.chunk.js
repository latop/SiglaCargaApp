"use strict";(self.webpackChunk_latop_ReactCodeCargo=self.webpackChunk_latop_ReactCodeCargo||[]).push([[3024],{78402:function(e,t,s){s.d(t,{r:function(){return a}});var a="",r="";localStorage.getItem("token")?(a=localStorage.getItem("token"),localStorage.getItem("expiration"),localStorage.getItem("userName"),localStorage.getItem("gpId")&&(r=localStorage.getItem("gpId"),console.log(r+"teste"))):a=""},23024:function(e,t,s){s.r(t);var a=s(29439),r=s(72791),o=s(57689),n=s(11087),c=s(9085),l=(s(5462),s(78402),s(78983)),i=s(24846),d=s(99161),p=s(93647),h=s(80184);t.default=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),s=t[0],u=t[1],m=(0,r.useState)(""),x=(0,a.Z)(m,2),g=x[0],j=x[1],f=(0,r.useState)(null),S=(0,a.Z)(f,2),b=(S[0],S[1]),v=((0,o.s0)(),{});return(0,h.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:(0,h.jsx)(l.KB,{children:(0,h.jsx)(l.rb,{className:"justify-content-center",children:(0,h.jsx)(l.b7,{md:8,children:(0,h.jsxs)(l.dL,{children:[(0,h.jsx)(l.xH,{className:"p-4",children:(0,h.jsx)(l.sl,{children:(0,h.jsxs)(l.lx,{children:[(0,h.jsx)("h1",{children:"Login"}),(0,h.jsx)("p",{className:"text-medium-emphasis"}),(0,h.jsxs)(l.YR,{className:"mb-3",children:[(0,h.jsx)(l.wV,{children:(0,h.jsx)(i.Z,{icon:d.E})}),(0,h.jsx)(l.jO,{placeholder:"Email",autoComplete:"username",value:s,onChange:function(e){u(e.target.value)}})]}),(0,h.jsxs)(l.YR,{className:"mb-4",children:[(0,h.jsx)(l.wV,{children:(0,h.jsx)(i.Z,{icon:p.U})}),(0,h.jsx)(l.jO,{type:"password",placeholder:"Senha",autoComplete:"current-password",value:g,onChange:function(e){j(e.target.value)}})]}),(0,h.jsxs)(l.rb,{children:[(0,h.jsx)(l.b7,{xs:6,children:(0,h.jsx)(l.u5,{color:"primary",className:"px-4",onClick:function(){var e={domain:"application",UserLogin:s,password:"123"};b(v),fetch("https://apicarga.azurewebsites.net/api/Login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){!0===e.authenticated?(localStorage.setItem("token",e.accessToken),localStorage.setItem("userName",e.userName),localStorage.setItem("expiration",e.expiration),c.Am.success("Login realizado com sucesso!"),setTimeout((function(){window.location.href="https://pepsicobrasil.sigla.app/dashboard"}),1300)):c.Am.error("Erro ao fazer login:")}))},children:"Login"})}),(0,h.jsxs)(l.b7,{xs:6,className:"text-right",children:[(0,h.jsx)(l.u5,{color:"link",className:"px-0"}),(0,h.jsx)(c.Ix,{autoClose:1300,style:{top:"10%",left:"50%",transform:"translate(-50%, -50%)"}})]})]})]})})}),(0,h.jsx)(l.xH,{className:"text-white bg-primary py-5",style:{width:"44%"},children:(0,h.jsx)(l.sl,{className:"text-center",children:(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"PepsiCo Login"}),(0,h.jsx)("p",{children:"Entre com sua conta SSO"}),(0,h.jsx)(n.rU,{to:"https://secure.pepsico.com/oauth2/default/v1/authorize?client_id=0oa1sb2bvrhNCWSmS0h8&response_type=code&response_mode=query&scope=openid&redirect_uri=https://pepsicobrasil.sigla.app&state=1",children:(0,h.jsx)(l.u5,{color:"primary",className:"mt-3",active:!0,tabIndex:-1,children:"Login com SSO"})})]})})})]})})})})})}},93647:function(e,t,s){s.d(t,{U:function(){return a}});var a=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=3024.c416ec32.chunk.js.map