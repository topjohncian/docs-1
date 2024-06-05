"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[58772],{7195:(e,n,o)=>{o.d(n,{ZP:()=>c,d$:()=>s});var t=o(11527),i=o(17279);const s=[{value:"Register a Facebook developer account",id:"register-a-facebook-developer-account",level:3},{value:"Set up a Facebook app",id:"set-up-a-facebook-app",level:3},{value:"Test sign-in with Facebook&#39;s test users",id:"test-sign-in-with-facebooks-test-users",level:3},{value:"Publish Facebook sign-in settings",id:"publish-facebook-sign-in-settings",level:3},{value:"References",id:"references",level:3},{value:"Config types",id:"config-types",level:4},{value:"Facebook developer docs",id:"facebook-developer-docs",level:4}];function r(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"register-a-facebook-developer-account",children:"Register a Facebook developer account"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/register/",children:"Register as a Facebook Developer"})," if you don't have one."]}),"\n",(0,t.jsx)(n.h3,{id:"set-up-a-facebook-app",children:"Set up a Facebook app"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Visit the ",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/apps",children:"Apps"})," page."]}),"\n",(0,t.jsxs)(n.li,{children:["Click your existing app or ",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/create-an-app",children:"create a new one"})," if needed.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The selected ",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/create-an-app/app-dashboard/app-types",children:"app type"})," is up to you, but it should have the product ",(0,t.jsx)(n.em,{children:"Facebook Login"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:'On the app dashboard page, scroll to the "Add a product" section and click the "Set up" button on the "Facebook Login" card.'}),"\n",(0,t.jsx)(n.li,{children:'Skip the Facebook Login Quickstart page, and click the sidebar -> "Products" -> "Facebook Login" -> "Settings".'}),"\n",(0,t.jsxs)(n.li,{children:["In the Facebook Login Settings page, fill ",(0,t.jsx)(n.code,{children:"${your_logto_origin}/callback/${connector_id}"}),' in the "Valid OAuth Redirect URIs" field. The ',(0,t.jsx)(n.code,{children:"connector_id"})," can be found on the top bar of the Logto Admin Console connector details page. E.g.:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"https://your-logto-domain.com/callback/${connector_id}"})," for production"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"https://localhost:3001/callback/${connector_id}"})," for testing in the local environment"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:'Click the "Save changes" button at the bottom right corner.'}),"\n",(0,t.jsxs)(n.li,{children:['In the Facebook app dashboard page, click the sidebar -> "Settings" -> "Basic" and then you will get the ',(0,t.jsx)(n.strong,{children:"App ID"})," and ",(0,t.jsx)(n.strong,{children:"App secret"}),". The ",(0,t.jsx)(n.em,{children:"App ID"})," is the ",(0,t.jsx)(n.code,{children:"clientId"})," in your Logto connector conifg and the ",(0,t.jsx)(n.em,{children:"App secret"})," is the ",(0,t.jsx)(n.code,{children:"clientSecret"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"test-sign-in-with-facebooks-test-users",children:"Test sign-in with Facebook's test users"}),"\n",(0,t.jsxs)(n.p,{children:["You can use the accounts of the test, developer, and admin users to test sign-in with the related app under both development and live ",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes",children:"app modes"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:['You can also set the app to "live mode" by ',(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#switching-modes",children:"switching modes"})," so that any Facebook user can sign in with the app."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'In the app dashboard page, click the sidebar -> "Roles" -> "Test Users".'}),"\n",(0,t.jsx)(n.li,{children:'Click the "Create test users" button to create a testing user.'}),"\n",(0,t.jsx)(n.li,{children:'Click the "Options" button of the existing test user, and you will see more operations, e.g., "Change name and password".'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"publish-facebook-sign-in-settings",children:"Publish Facebook sign-in settings"}),"\n",(0,t.jsxs)(n.p,{children:["Usually, only the test, admin, and developer users can sign in with the related app under ",(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#development-mode",children:"development mode"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To enable normal Facebook users sign-in with the app in the production environment, you may need to switch your Facebook app to ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/development/build-and-test/app-modes#live-mode",children:"live mode"})}),", depending on the app type.\nE.g., the pure ",(0,t.jsx)(n.em,{children:"business type"})," app doesn't have the \"live\" switch button, but it won't block you from using it."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:'In the Facebook app dashboard page, click the sidebar -> "Settings" -> "Basic".'}),"\n",(0,t.jsx)(n.li,{children:'Fill out the "Privacy Policy URL" and "User data deletion" fields on the panel if required.'}),"\n",(0,t.jsx)(n.li,{children:'Click the "Save changes" button at the bottom right corner.'}),"\n",(0,t.jsx)(n.li,{children:'Click the "Live" switch button on the app top bar.'}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"references",children:"References"}),"\n",(0,t.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clientId"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"clientSecret"}),(0,t.jsx)(n.td,{children:"string"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"facebook-developer-docs",children:"Facebook developer docs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/",children:"Facebook Login - Documentation - Facebook for Developers"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/guides/advanced/manual-flow/",children:"Manually Build a Login Flow"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://developers.facebook.com/docs/facebook-login/guides/permissions",children:"Permissions Guide"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},86269:(e,n,o)=>{o.d(n,{ZP:()=>p,d$:()=>d});var t=o(11527),i=o(17279),s=o(20492),r=o(81301),c=o(72226),a=o(55257),l=o(94842);const d=[...s.d$,{value:"Installation",id:"installation",level:3},...r.d$,...c.d$,{value:"Update Razor pages",id:"update-razor-pages",level:3},...a.d$,...l.d$];function h(e){const n={h3:"h3",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.ZP,{}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(r.ZP,{}),"\n",(0,t.jsx)(c.ZP,{}),"\n",(0,t.jsx)(n.h3,{id:"update-razor-pages",children:"Update Razor pages"}),"\n",(0,t.jsx)(a.ZP,{}),"\n",(0,t.jsx)(l.ZP,{sdk:".NET Core (Blazor Server)"})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},12665:(e,n,o)=>{o.d(n,{ZP:()=>c,d$:()=>s});var t=o(11527),i=o(17279);const s=[];function r(e){const n={img:"img",p:"p",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Connector tab",src:o(88065).Z+"",width:"3352",height:"1226"})}),"\n",(0,t.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,t.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,t.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},80710:(e,n,o)=>{o.d(n,{ZP:()=>a,d$:()=>r});var t=o(11527),i=o(17279);const s=o.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",r=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function c(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Get Started",src:o(57794).Z+"",width:"2354",height:"588"})}),"\n",(0,t.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,t.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,t.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Framework List",src:o(43477).Z+"",width:"3626",height:"2804"})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,t.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,t.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,t.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},31877:(e,n,o)=>{o.d(n,{ZP:()=>c,d$:()=>s});var t=o(11527),i=o(17279);const s=[];function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sign-in Experience tab",src:o(68150).Z+"",width:"3502",height:"1794"})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Save changes",src:o(75877).Z+"",width:"2474",height:"188"})}),"\n",(0,t.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},87593:(e,n,o)=>{o.d(n,{ZP:()=>c,d$:()=>s});var t=o(11527),i=o(17279);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:["\n","\n",(0,t.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,t.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,t.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,t.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,t.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,t.jsx)(n.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)("span",{children:["Basic knowledge of ",(0,t.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},80386:(e,n,o)=>{o.d(n,{ZP:()=>c,d$:()=>s});var t=o(11527),i=o(17279);const s=[];function r(e){const n={p:"p",...(0,i.a)(),...e.components};return(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',e.connector," connector should be available now."]})})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},94842:(e,n,o)=>{o.d(n,{ZP:()=>c,d$:()=>s});var t=o(11527),i=o(17279);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,t.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,t.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},23095:(e,n,o)=>{o.d(n,{ZP:()=>c,d$:()=>s});var t=o(11527),i=o(17279);const s=[];function r(e){const n={p:"p",...(0,i.a)(),...e.components};return(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},24810:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,connector:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=o(11527),i=o(17279);o(87593),o(80710),o(12665),o(80386),o(31877),o(23095),o(86269),o(7195);const s={slug:"how-to-build-facebook-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","facebook","dotnet-core-blazor-webassembly","c#","social-sign-in","sign-in","login"],title:"How to build Facebook sign-in with .NET Core (Blazor WebAssembly) and Logto"},r=void 0,c={permalink:"/tutorial/how-to-build-facebook-sign-in-with-dotnet-core-blazor-webassembly-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-blazor-webassembly-facebook.mdx",title:"How to build Facebook sign-in with .NET Core (Blazor WebAssembly) and Logto",description:"\x3c!--",date:"2024-06-05T09:30:43.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"facebook",permalink:"/tutorial/tags/facebook"},{inline:!0,label:"dotnet-core-blazor-webassembly",permalink:"/tutorial/tags/dotnet-core-blazor-webassembly"},{inline:!0,label:"c#",permalink:"/tutorial/tags/c"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.33,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-facebook-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","facebook","dotnet-core-blazor-webassembly","c#","social-sign-in","sign-in","login"],title:"How to build Facebook sign-in with .NET Core (Blazor WebAssembly) and Logto"},unlisted:!1,prevItem:{title:"How to build Discord sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-discord-sign-in-with-dotnet-core-blazor-webassembly-and-logto"},nextItem:{title:"How to build GitHub sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-github-sign-in-with-dotnet-core-blazor-webassembly-and-logto"}},a={authorsImageUrls:[void 0]},l="Facebook",d=[];function h(e){return(0,t.jsx)(t.Fragment,{})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h()}},20492:(e,n,o)=>{o.d(n,{ZP:()=>c,d$:()=>s});var t=o(11527),i=o(17279);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The following demonstration is built on .NET Core 8.0 and ",(0,t.jsx)(n.a,{href:"https://github.com/WildGums/Blorc.OpenIdConnect",children:"Blorc.OpenIdConnect"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},81301:(e,n,o)=>{o.d(n,{ZP:()=>c,d$:()=>s});var t=o(11527),i=o(17279);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dotnet add package Blorc.OpenIdConnect\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},72226:(e,n,o)=>{o.d(n,{ZP:()=>c,d$:()=>s});var t=o(11527),i=o(17279);const s=[{value:"Add script references",id:"add-script-references",level:3},{value:"Register services",id:"register-services",level:3},{value:"Configure application",id:"configure-application",level:3}];function r(e){const n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"add-script-references",children:"Add script references"}),"\n",(0,t.jsxs)(n.p,{children:["Include ",(0,t.jsx)(n.code,{children:"Blorc.Core/injector.js"})," the ",(0,t.jsx)(n.code,{children:"index.html"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<head>\n  \x3c!-- ... --\x3e\n  <script src="_content/Blorc.Core/injector.js"><\/script>\n  \x3c!-- ... --\x3e\n</head>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"register-services",children:"Register services"}),"\n",(0,t.jsxs)(n.p,{children:["Add the following code to the ",(0,t.jsx)(n.code,{children:"Program.cs"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'using Blorc.OpenIdConnect;\nusing Blorc.Services;\n\nbuilder.Services.AddBlorcCore();\nbuilder.Services.AddAuthorizationCore();\nbuilder.Services.AddBlorcOpenIdConnect(\n    options =>\n    {\n        builder.Configuration.Bind("IdentityServer", options);\n    });\n\nvar webAssemblyHost = builder.Build();\n\nawait webAssemblyHost\n    .ConfigureDocumentAsync(async documentService =>\n    {\n        await documentService.InjectBlorcCoreJsAsync();\n        await documentService.InjectOpenIdConnectAsync();\n    });\n\nawait webAssemblyHost.RunAsync();\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["There's no need to use the ",(0,t.jsx)(n.code,{children:"Microsoft.AspNetCore.Components.WebAssembly.Authentication"})," package. The ",(0,t.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package will take care of the authentication process."]})}),"\n",(0,t.jsx)(n.h3,{id:"configure-application",children:"Configure application"}),"\n",(0,t.jsxs)(n.p,{children:["Add the following code to the ",(0,t.jsx)(n.code,{children:"appsettings.json"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json5",children:"{\n  // ...\n  IdentityServer: {\n    Authority: 'https://<your-logto-endpoint>/oidc',\n    ClientId: '<your-logto-app-id>',\n    PostLogoutRedirectUri: '<your-app-url>',\n    RedirectUri: '<your-app-url>',\n    ResponseType: 'code',\n    Scope: 'openid profile', // Add more scopes if needed\n  },\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Remember to add the ",(0,t.jsx)(n.code,{children:"RedirectUri"})," and ",(0,t.jsx)(n.code,{children:"PostLogoutRedirectUri"})," to the list of allowed redirect URIs in the Logto application settings. They are both the URL of your WASM application."]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},55257:(e,n,o)=>{o.d(n,{ZP:()=>c,d$:()=>s});var t=o(11527),i=o(17279);const s=[{value:"Add <code>AuthorizeView</code> component",id:"add-authorizeview-component",level:3},{value:"Set up authentication",id:"set-up-authentication",level:3},{value:"Display user information",id:"display-user-information",level:3}];function r(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h3,{id:"add-authorizeview-component",children:["Add ",(0,t.jsx)(n.code,{children:"AuthorizeView"})," component"]}),"\n",(0,t.jsxs)(n.p,{children:["In the Razor pages that require authentication, add the ",(0,t.jsx)(n.code,{children:"AuthorizeView"})," component. Let's assume it's the ",(0,t.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cshtml",children:'@using Microsoft.AspNetCore.Components.Authorization\n@page "/"\n\n<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        <button @onclick="OnLogoutButtonClickAsync">\n            Sign out\n        </button>\n    </Authorized>\n    <NotAuthorized>\n        @* Unauthenticated view *@\n        <button @onclick="OnLoginButtonClickAsync">\n            Sign in\n        </button>\n    </NotAuthorized>\n</AuthorizeView>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"set-up-authentication",children:"Set up authentication"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Home.razor.cs"})," file (create it if it doesn't exist), add the following code:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"using Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Components;\nusing Microsoft.AspNetCore.Components.Web;\nusing Blorc.OpenIdConnect;\nusing Microsoft.AspNetCore.Components.Authorization;\n\n[Authorize]\npublic partial class Home : ComponentBase\n{\n    [Inject]\n    public required IUserManager UserManager { get; set; }\n\n    public User<Profile>? User { get; set; }\n\n    [CascadingParameter]\n    protected Task<AuthenticationState>? AuthenticationStateTask { get; set; }\n\n    protected override async Task OnInitializedAsync()\n    {\n        User = await UserManager.GetUserAsync<User<Profile>>(AuthenticationStateTask!);\n    }\n\n    private async Task OnLoginButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignInRedirectAsync();\n    }\n\n    private async Task OnLogoutButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignOutRedirectAsync();\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Once the user is authenticated, the ",(0,t.jsx)(n.code,{children:"User"})," property will be populated with the user information."]}),"\n",(0,t.jsx)(n.h3,{id:"display-user-information",children:"Display user information"}),"\n",(0,t.jsxs)(n.p,{children:["Here are some examples of how to display user information in the ",(0,t.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cshtml",children:'<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        @* ... *@\n        <p>You are signed in as @(@User?.Profile?.Name ?? "(unknown name)").</p>\n    </Authorized>\n    @* ... *@\n</AuthorizeView>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For more properties and claims, check the ",(0,t.jsx)(n.code,{children:"User"})," and ",(0,t.jsx)(n.code,{children:"Profile"})," classes in the ",(0,t.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package."]})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},88065:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},43477:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},57794:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},75877:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},68150:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},17279:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>r});var t=o(50959);const i={},s=t.createContext(i);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);