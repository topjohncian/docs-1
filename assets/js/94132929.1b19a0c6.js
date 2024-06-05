"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[7833],{33404:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>h,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=s(11527),r=s(17279),n=s(17843);const i={sidebar_position:5},a="Secure your webhooks",c={id:"docs/recipes/webhooks/securing-your-webhooks",title:"Secure your webhooks",description:"Once your server is ready to receive webhook requests, you may want to make sure that it can handle the requests securely. Logto generates a signature for each webhook request payload, which allows you to verify that the request comes from Logto.",source:"@site/docs/docs/recipes/webhooks/securing-your-webhooks.md",sourceDirName:"docs/recipes/webhooks",slug:"/docs/recipes/webhooks/securing-your-webhooks",permalink:"/docs/recipes/webhooks/securing-your-webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/webhooks/securing-your-webhooks.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Webhook request",permalink:"/docs/recipes/webhooks/webhook-request"},next:{title:"\ud83d\udd10 Role-based access control (RBAC)",permalink:"/docs/recipes/rbac/"}},h={},u=[{value:"Get the signing key",id:"get-the-signing-key",level:2},{value:"Verify the signature",id:"verify-the-signature",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"secure-your-webhooks",children:"Secure your webhooks"}),"\n",(0,t.jsx)(n.Z,{cloud:!0,oss:{major:1,minor:5}}),"\n",(0,t.jsx)(o.p,{children:"Once your server is ready to receive webhook requests, you may want to make sure that it can handle the requests securely. Logto generates a signature for each webhook request payload, which allows you to verify that the request comes from Logto."}),"\n",(0,t.jsx)(o.h2,{id:"get-the-signing-key",children:"Get the signing key"}),"\n",(0,t.jsxs)(o.p,{children:["You'll need to get the signing key from ",(0,t.jsx)(o.a,{href:"/docs/recipes/webhooks/configure-webhooks-in-console#secure-webhook",children:"the Admin Console"})," to verify the signature."]}),"\n",(0,t.jsx)(o.h2,{id:"verify-the-signature",children:"Verify the signature"}),"\n",(0,t.jsxs)(o.p,{children:["Extract the signature from the ",(0,t.jsx)(o.code,{children:"logto-signature-sha-256"})," header of the webhook request."]}),"\n",(0,t.jsx)(o.p,{children:"After that, you should generate a signature using your signing key, and the webhook request body and ensure that the result matches the signature from Logto."}),"\n",(0,t.jsx)(o.admonition,{type:"note",children:(0,t.jsx)(o.p,{children:"Use the raw body of the webhook request for signature generation; avoid using the parsed body, as servers may preprocess it before reaching your webhook endpoint handler."})}),"\n",(0,t.jsx)(o.p,{children:"Logto uses an HMAC hex digest to compute the signature."}),"\n",(0,t.jsx)(o.p,{children:"Here's an example of how to verify the signature in Node.js:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-js",children:"import { createHmac } from 'node:crypto';\n\nexport const verify = (signingKey: string, rawBody: Buffer[], expectedSignature: string) => {\n  const hmac = createHmac('sha256', signingKey);\n  hmac.update(rawBody);\n  const signature = hmac.digest('hex');\n  return signature === expectedSignature;\n};\n"})})]})}function l(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},17843:(e,o,s)=>{s.d(o,{Z:()=>i});const t="availability_kRMk";var r=s(11527);const n=e=>"comingSoon"===e?"coming soon-blue":"boolean"==typeof e?e?"\u2713 available-4EA254":"not applicable-78767F":`since v${e.major}.${e.minor}-4EA254`,i=e=>{let{cloud:o,oss:s}=e;return(0,r.jsxs)("div",{className:t,children:[(0,r.jsx)("img",{alt:"Cloud availability",src:`https://img.shields.io/badge/Cloud-${n(o)}`}),(0,r.jsx)("img",{alt:"OSS availability",src:`https://img.shields.io/badge/OSS-${n(s)}`})]})}},17279:(e,o,s)=>{s.d(o,{Z:()=>a,a:()=>i});var t=s(50959);const r={},n=t.createContext(r);function i(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);