"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[89478],{81378:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var i=t(11527),o=t(17279);const s=[{value:"Configure a mail service in the AWS service console",id:"configure-a-mail-service-in-the-aws-service-console",level:3},{value:"Register AWS account",id:"register-aws-account",level:4},{value:"Create a identity",id:"create-a-identity",level:4},{value:"Configuration of the connector",id:"configuration-of-the-connector",level:4},{value:"Test the Amazon SES connector",id:"test-the-amazon-ses-connector",level:4},{value:"Configure types",id:"configure-types",level:4}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"configure-a-mail-service-in-the-aws-service-console",children:"Configure a mail service in the AWS service console"}),"\n",(0,i.jsx)(n.p,{children:"Amazon SES is a cloud email service provider that can integrate into any application for bulk email sending."}),"\n",(0,i.jsx)(n.p,{children:"Logto core calls the Amazon Simple Email Service APIs via this connector, with the help of which Logto end-users can register and sign in to their Logto account via email verification code."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\ud83d\udca1 ",(0,i.jsx)(n.strong,{children:"Tip"})]}),"\n",(0,i.jsx)(n.p,{children:"You can skip some sections if you have already finished."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"register-aws-account",children:"Register AWS account"}),"\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.a,{href:"https://aws.amazon.com/",children:"AWS"})," and register an account."]}),"\n",(0,i.jsx)(n.h4,{id:"create-a-identity",children:"Create a identity"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to ",(0,i.jsx)(n.code,{children:"Amazon Simple Email Service"})," Console"]}),"\n",(0,i.jsxs)(n.li,{children:["Create an identity, choose one of the following options","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Create a domain"}),"\n",(0,i.jsx)(n.li,{children:"Create an email address"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"configuration-of-the-connector",children:"Configuration of the connector"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Click your username in the upper right corner of the Amazon console to enter ",(0,i.jsx)(n.code,{children:"Security Credentials"}),". If you don't have one, create an ",(0,i.jsx)(n.code,{children:"AccessKey"})," and save it carefully."]}),"\n",(0,i.jsxs)(n.li,{children:["Complete the settings of the ",(0,i.jsx)(n.code,{children:"Amazon Simple Email Service"})," connector:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use the ",(0,i.jsx)(n.code,{children:"AccessKey ID"})," and ",(0,i.jsx)(n.code,{children:"AccessKey Secret"})," obtained in step 1 to fill in ",(0,i.jsx)(n.code,{children:"accessKeyId"})," and ",(0,i.jsx)(n.code,{children:"accessKeySecret"})," respectively."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"region"}),": Fill in the ",(0,i.jsx)(n.code,{children:"region"})," field with the region of the identity you use to send mail."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"emailAddress"}),": The email address you use to send mail, in the format of ",(0,i.jsx)(n.code,{children:"Logto<noreply@logto.io>"})," or ",(0,i.jsx)(n.code,{children:"<noreply@logto.io>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["the following parameters are optional; parameters description can be found in the ",(0,i.jsx)(n.a,{href:"https://docs.aws.amazon.com/ses/latest/APIReference-V2/API_SendEmail.html",children:"AWS SES API documentation"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"feedbackForwardingEmailAddress"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"feedbackForwardingEmailAddressIdentityArn"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"configurationSetName"})}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"test-the-amazon-ses-connector",children:"Test the Amazon SES connector"}),"\n",(0,i.jsx)(n.p,{children:'You can type in an email address and click on "Send" to see whether the settings work before "Save and Done".'}),"\n",(0,i.jsx)(n.p,{children:"That's it. Don't forget to enable connector in sign-in experience."}),"\n",(0,i.jsx)(n.h4,{id:"configure-types",children:"Configure types"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accessKeyId"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"accessKeySecret"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"region"}),(0,i.jsx)(n.td,{children:"string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"emailAddress"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"emailAddressIdentityArn"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"feedbackForwardingEmailAddress"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"feedbackForwardingEmailAddressIdentityArn"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"configurationSetName"}),(0,i.jsx)(n.td,{children:"string (OPTIONAL)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"templates"}),(0,i.jsx)(n.td,{children:"Template[]"})]})]})]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Template Properties"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Enum values"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"subject"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"content"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"N/A"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"usageType"}),(0,i.jsx)(n.td,{children:"enum string"}),(0,i.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},86269:(e,n,t)=>{t.d(n,{ZP:()=>p,d$:()=>d});var i=t(11527),o=t(17279),s=t(20492),r=t(81301),a=t(72226),c=t(55257),l=t(94842);const d=[...s.d$,{value:"Installation",id:"installation",level:3},...r.d$,...a.d$,{value:"Update Razor pages",id:"update-razor-pages",level:3},...c.d$,...l.d$];function h(e){const n={h3:"h3",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(r.ZP,{}),"\n",(0,i.jsx)(a.ZP,{}),"\n",(0,i.jsx)(n.h3,{id:"update-razor-pages",children:"Update Razor pages"}),"\n",(0,i.jsx)(c.ZP,{}),"\n",(0,i.jsx)(l.ZP,{sdk:".NET Core (Blazor Server)"})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},53136:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var i=t(11527),o=t(17279);const s=[];function r(e){const n={img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["To add or change ",e.connectorType,' connector, go to the "Connector" tab in the Admin Console,\nthen click on "Email and SMS connectors". From there, click "Set up" or go to detail page and\nclick "Change ',e.connectorType,' connector".']})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Connector tab",src:t(64897).Z+"",width:"4164",height:"1290"})}),"\n",(0,i.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,i.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,i.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},80710:(e,n,t)=>{t.d(n,{ZP:()=>c,d$:()=>r});var i=t(11527),o=t(17279);const s=t.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",r=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function a(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Get Started",src:t(57794).Z+"",width:"2354",height:"588"})}),"\n",(0,i.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,i.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,i.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Framework List",src:t(43477).Z+"",width:"3626",height:"2804"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,i.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,i.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,i.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},59885:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var i=t(11527),o=t(17279);const s=[];function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Sign-in Experience tab",src:t(68150).Z+"",width:"3502",height:"1794"})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Select "',e.passwordlessSignUpIdentifier,'" or "Email address or phone number" for the "Sign-up\nidentifier" to provide sign-up for ',e.connectorType," passwordless sign-in, which may increase\nyour conversion rate."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Save changes",src:t(75877).Z+"",width:"2474",height:"188"})}),"\n",(0,i.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},87593:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var i=t(11527),o=t(17279);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,i.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,i.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,i.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,i.jsx)(n.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["Basic knowledge of ",(0,i.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},80386:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var i=t(11527),o=t(17279);const s=[];function r(e){const n={p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',e.connector," connector should be available now."]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},94842:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var i=t(11527),o=t(17279);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,i.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},23095:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var i=t(11527),o=t(17279);const s=[];function r(e){const n={p:"p",...(0,o.a)(),...e.components};return(0,i.jsx)("p",{children:(0,i.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},9253:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>j,connector:()=>m,contentTitle:()=>g,default:()=>w,frontMatter:()=>u,metadata:()=>x,toc:()=>f});var i=t(11527),o=t(17279),s=t(87593),r=t(80710),a=t(53136),c=t(80386),l=t(59885),d=t(23095),h=t(86269),p=t(81378);const u={slug:"how-to-build-aws-ses-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","aws-ses","dotnet-core-blazor-webassembly","c#","passwordless-sign-in","sign-in","login"],title:"How to build AWS SES Email passwordless sign-in with .NET Core (Blazor WebAssembly) and Logto"},g=void 0,x={permalink:"/tutorial/how-to-build-aws-ses-sign-in-with-dotnet-core-blazor-webassembly-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-blazor-webassembly-aws-ses.mdx",title:"How to build AWS SES Email passwordless sign-in with .NET Core (Blazor WebAssembly) and Logto",description:"\x3c!--",date:"2024-06-05T09:30:43.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"aws-ses",permalink:"/tutorial/tags/aws-ses"},{inline:!0,label:"dotnet-core-blazor-webassembly",permalink:"/tutorial/tags/dotnet-core-blazor-webassembly"},{inline:!0,label:"c#",permalink:"/tutorial/tags/c"},{inline:!0,label:"passwordless-sign-in",permalink:"/tutorial/tags/passwordless-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.37,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-aws-ses-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","aws-ses","dotnet-core-blazor-webassembly","c#","passwordless-sign-in","sign-in","login"],title:"How to build AWS SES Email passwordless sign-in with .NET Core (Blazor WebAssembly) and Logto"},unlisted:!1,prevItem:{title:"How to build Apple sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-apple-sign-in-with-dotnet-core-blazor-webassembly-and-logto"},nextItem:{title:"How to build Azure AD sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-azure-ad-sign-in-with-dotnet-core-blazor-webassembly-and-logto"}},j={authorsImageUrls:[void 0]},m="AWS SES",f=[...s.d$,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...r.d$,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...h.d$,{value:"Add AWS SES connector",id:"add-aws-ses-connector",level:2},...a.d$,{value:"Set up AWS SES email connector",id:"set-up-aws-ses-email-connector",level:2},...p.d$,{value:"Save your configuration",id:"save-your-configuration",level:2},...c.d$,{value:"Enable AWS SES connector in Sign-in Experience",id:"enable-aws-ses-connector-in-sign-in-experience",level:2},...l.d$,{value:"Testing and Validation",id:"testing-and-validation",level:2},...d.d$,{value:"Further readings",id:"further-readings",level:2}];function b(e){const n={a:"a",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.ZP,{connector:m,sdk:".NET Core (Blazor WebAssembly)",link:"https://learn.microsoft.com/en-us/aspnet/core/blazor/hosting-models#blazor-webassembly"}),"\n",(0,i.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,i.jsx)(r.ZP,{type:"Single page app",framework:".NET Core (Blazor WebAssembly)"}),"\n",(0,i.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,i.jsx)(h.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"add-aws-ses-connector",children:"Add AWS SES connector"}),"\n",(0,i.jsx)(a.ZP,{connector:m,connectorType:"Email"}),"\n",(0,i.jsx)(n.h2,{id:"set-up-aws-ses-email-connector",children:"Set up AWS SES email connector"}),"\n",(0,i.jsx)(p.ZP,{}),"\n",(0,i.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,i.jsx)(c.ZP,{connector:m}),"\n",(0,i.jsx)(n.h2,{id:"enable-aws-ses-connector-in-sign-in-experience",children:"Enable AWS SES connector in Sign-in Experience"}),"\n",(0,i.jsx)(l.ZP,{connectorType:"Email",passwordlessSignUpIdentifier:"Email address"}),"\n",(0,i.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,i.jsx)(d.ZP,{connector:m,sdk:".NET Core (Blazor WebAssembly)"}),"\n",(0,i.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,i.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,i.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,i.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function w(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}},20492:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var i=t(11527),o=t(17279);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The following demonstration is built on .NET Core 8.0 and ",(0,i.jsx)(n.a,{href:"https://github.com/WildGums/Blorc.OpenIdConnect",children:"Blorc.OpenIdConnect"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,i.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},81301:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var i=t(11527),o=t(17279);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dotnet add package Blorc.OpenIdConnect\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},72226:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var i=t(11527),o=t(17279);const s=[{value:"Add script references",id:"add-script-references",level:3},{value:"Register services",id:"register-services",level:3},{value:"Configure application",id:"configure-application",level:3}];function r(e){const n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"add-script-references",children:"Add script references"}),"\n",(0,i.jsxs)(n.p,{children:["Include ",(0,i.jsx)(n.code,{children:"Blorc.Core/injector.js"})," the ",(0,i.jsx)(n.code,{children:"index.html"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<head>\n  \x3c!-- ... --\x3e\n  <script src="_content/Blorc.Core/injector.js"><\/script>\n  \x3c!-- ... --\x3e\n</head>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"register-services",children:"Register services"}),"\n",(0,i.jsxs)(n.p,{children:["Add the following code to the ",(0,i.jsx)(n.code,{children:"Program.cs"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'using Blorc.OpenIdConnect;\nusing Blorc.Services;\n\nbuilder.Services.AddBlorcCore();\nbuilder.Services.AddAuthorizationCore();\nbuilder.Services.AddBlorcOpenIdConnect(\n    options =>\n    {\n        builder.Configuration.Bind("IdentityServer", options);\n    });\n\nvar webAssemblyHost = builder.Build();\n\nawait webAssemblyHost\n    .ConfigureDocumentAsync(async documentService =>\n    {\n        await documentService.InjectBlorcCoreJsAsync();\n        await documentService.InjectOpenIdConnectAsync();\n    });\n\nawait webAssemblyHost.RunAsync();\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["There's no need to use the ",(0,i.jsx)(n.code,{children:"Microsoft.AspNetCore.Components.WebAssembly.Authentication"})," package. The ",(0,i.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package will take care of the authentication process."]})}),"\n",(0,i.jsx)(n.h3,{id:"configure-application",children:"Configure application"}),"\n",(0,i.jsxs)(n.p,{children:["Add the following code to the ",(0,i.jsx)(n.code,{children:"appsettings.json"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json5",children:"{\n  // ...\n  IdentityServer: {\n    Authority: 'https://<your-logto-endpoint>/oidc',\n    ClientId: '<your-logto-app-id>',\n    PostLogoutRedirectUri: '<your-app-url>',\n    RedirectUri: '<your-app-url>',\n    ResponseType: 'code',\n    Scope: 'openid profile', // Add more scopes if needed\n  },\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Remember to add the ",(0,i.jsx)(n.code,{children:"RedirectUri"})," and ",(0,i.jsx)(n.code,{children:"PostLogoutRedirectUri"})," to the list of allowed redirect URIs in the Logto application settings. They are both the URL of your WASM application."]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},55257:(e,n,t)=>{t.d(n,{ZP:()=>a,d$:()=>s});var i=t(11527),o=t(17279);const s=[{value:"Add <code>AuthorizeView</code> component",id:"add-authorizeview-component",level:3},{value:"Set up authentication",id:"set-up-authentication",level:3},{value:"Display user information",id:"display-user-information",level:3}];function r(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h3,{id:"add-authorizeview-component",children:["Add ",(0,i.jsx)(n.code,{children:"AuthorizeView"})," component"]}),"\n",(0,i.jsxs)(n.p,{children:["In the Razor pages that require authentication, add the ",(0,i.jsx)(n.code,{children:"AuthorizeView"})," component. Let's assume it's the ",(0,i.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cshtml",children:'@using Microsoft.AspNetCore.Components.Authorization\n@page "/"\n\n<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        <button @onclick="OnLogoutButtonClickAsync">\n            Sign out\n        </button>\n    </Authorized>\n    <NotAuthorized>\n        @* Unauthenticated view *@\n        <button @onclick="OnLoginButtonClickAsync">\n            Sign in\n        </button>\n    </NotAuthorized>\n</AuthorizeView>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"set-up-authentication",children:"Set up authentication"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"Home.razor.cs"})," file (create it if it doesn't exist), add the following code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:"using Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Components;\nusing Microsoft.AspNetCore.Components.Web;\nusing Blorc.OpenIdConnect;\nusing Microsoft.AspNetCore.Components.Authorization;\n\n[Authorize]\npublic partial class Home : ComponentBase\n{\n    [Inject]\n    public required IUserManager UserManager { get; set; }\n\n    public User<Profile>? User { get; set; }\n\n    [CascadingParameter]\n    protected Task<AuthenticationState>? AuthenticationStateTask { get; set; }\n\n    protected override async Task OnInitializedAsync()\n    {\n        User = await UserManager.GetUserAsync<User<Profile>>(AuthenticationStateTask!);\n    }\n\n    private async Task OnLoginButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignInRedirectAsync();\n    }\n\n    private async Task OnLogoutButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignOutRedirectAsync();\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once the user is authenticated, the ",(0,i.jsx)(n.code,{children:"User"})," property will be populated with the user information."]}),"\n",(0,i.jsx)(n.h3,{id:"display-user-information",children:"Display user information"}),"\n",(0,i.jsxs)(n.p,{children:["Here are some examples of how to display user information in the ",(0,i.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cshtml",children:'<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        @* ... *@\n        <p>You are signed in as @(@User?.Profile?.Name ?? "(unknown name)").</p>\n    </Authorized>\n    @* ... *@\n</AuthorizeView>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["For more properties and claims, check the ",(0,i.jsx)(n.code,{children:"User"})," and ",(0,i.jsx)(n.code,{children:"Profile"})," classes in the ",(0,i.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package."]})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},64897:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/connector-tab-passwordless-9939bc0a0a5bbf8821d700cf9a25b825.png"},43477:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},57794:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},75877:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},68150:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},17279:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(50959);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);