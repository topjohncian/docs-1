"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[75459],{62195:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>l});var o=s(11527),i=s(17279);const n={sidebar_position:2},r="Authenticator app OTP",a={id:"docs/recipes/multi-factor-auth/authenticator-app-otp",title:"Authenticator app OTP",description:"Concepts",source:"@site/docs/docs/recipes/multi-factor-auth/authenticator-app-otp.md",sourceDirName:"docs/recipes/multi-factor-auth",slug:"/docs/recipes/multi-factor-auth/authenticator-app-otp",permalink:"/docs/recipes/multi-factor-auth/authenticator-app-otp",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/multi-factor-auth/authenticator-app-otp.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Configure MFA",permalink:"/docs/recipes/multi-factor-auth/configure-mfa"},next:{title:"WebAuthn (Passkeys)",permalink:"/docs/recipes/multi-factor-auth/webauthn"}},c={},l=[{value:"Concepts",id:"concepts",level:2},{value:"Auth flows",id:"auth-flows",level:2}];function p(e){const t={h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"authenticator-app-otp",children:"Authenticator app OTP"}),"\n",(0,o.jsx)(t.h2,{id:"concepts",children:"Concepts"}),"\n",(0,o.jsx)(t.p,{children:"The Authenticator app, also referred to as the Software Token, is one of the most widely adopted MFA methods. It generates temporary, one-time passwords (OTP) to enhance the security of online service authentication. Unlike physical hardware tokens, software tokens are typically applications or plugins that users install on their devices, be it a smartphone or a computer browser. Software tokens can operate locally on a single device or synchronize across various devices, depending on the authenticator's capabilities and individual user settings."}),"\n",(0,o.jsx)(t.p,{children:"Popular examples of software tokens include Google Authenticator, Microsoft Authenticator, Duo, 1Password, Authy, and more."}),"\n",(0,o.jsx)(t.h2,{id:"auth-flows",children:"Auth flows"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Setup Flows"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"QR Code or Secret Key"}),": Users receive a QR code or a secret key from your service."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Add account"}),": Using their authenticator app, users scan the QR code or manually enter the secret key to add their account."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Dynamic one-time password"}),": The authenticator app displays a six-digit code that refreshes every 1-2 minutes for the added account."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Complete MFA setup"}),": Users enter this code within its validity into the MFA setup page, completing the setup of Authenticator App OTP for MFA."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"OTP set up flow",src:s(40283).Z+"",width:"3986",height:"1520"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Verification flows"})}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Login attempt"}),": During login, users are prompted for MFA."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Retrieve OTP"}),": Open their authenticator app to retrieve the OTP for the respective account."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Enter OTP"}),": Users enter the OTP displayed in the app within its validity into the 2-step verification page."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Authentication"}),": The system verifies the OTP, granting access upon successful validation."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"OTP verification flow",src:s(80754).Z+"",width:"2704",height:"1238"})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},40283:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/otp-set-up-flow-601b6eb43986290ab433ade3d882e87e.webp"},80754:(e,t,s)=>{s.d(t,{Z:()=>o});const o=s.p+"assets/images/otp-verification-flow-904894ff31e095d0dd30814facdf242b.webp"},17279:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var o=s(50959);const i={},n=o.createContext(i);function r(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);