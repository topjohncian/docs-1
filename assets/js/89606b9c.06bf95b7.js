"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[52307],{85419:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[{value:"Register Twilio account",id:"register-twilio-account",level:3},{value:"Set up senders&#39; phone numbers",id:"set-up-senders-phone-numbers",level:3},{value:"Get account credentials",id:"get-account-credentials",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3},{value:"Test Twilio SMS connector",id:"test-twilio-sms-connector",level:4},{value:"Config types",id:"config-types",level:4},{value:"Reference",id:"reference",level:4}];function r(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"register-twilio-account",children:"Register Twilio account"}),"\n",(0,t.jsxs)(n.p,{children:["Create a new account on ",(0,t.jsx)(n.a,{href:"https://www.twilio.com",children:"Twilio"}),". (Jump to the next step if you already have one.)"]}),"\n",(0,t.jsx)(n.h3,{id:"set-up-senders-phone-numbers",children:"Set up senders' phone numbers"}),"\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.a,{href:"https://console.twilio.com/",children:"Twilio console page"})," and sign in with your Twilio account."]}),"\n",(0,t.jsx)(n.p,{children:'Purchase a phone number under "Phone Numbers" -> "Manage" -> "Buy a number".'}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,t.jsx)(n.strong,{children:"Tip"})]}),"\n",(0,t.jsx)(n.p,{children:"Sometimes you may encounter the situation that SMS service is not supported in specific countries or areas. Pick a number from other regions to bypass."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'Once we have a valid number claimed, navigate to the "Messaging" -> "Services". Create a new Message Service by clicking on the button.'}),"\n",(0,t.jsxs)(n.p,{children:["Give a friendly service name and choose ",(0,t.jsx)(n.em,{children:"Notify my users"})," as our service purpose.\nFollowing the next step, choose ",(0,t.jsx)(n.code,{children:"Phone Number"})," as ",(0,t.jsx)(n.em,{children:"Sender Type"}),", and add the phone number we just claimed to this service as a sender."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,t.jsx)(n.strong,{children:"Note"})]}),"\n",(0,t.jsx)(n.p,{children:"Each phone number can only be linked with one messaging service."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"get-account-credentials",children:"Get account credentials"}),"\n",(0,t.jsxs)(n.p,{children:["We will need the API credentials to make the connector work. Let's begin with the ",(0,t.jsx)(n.a,{href:"https://console.twilio.com/",children:"Twilio console page"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:['Click on the "Account" menu in the top-right corner, then go to the "API keys & tokens" page to get your ',(0,t.jsx)(n.code,{children:"Account SID"})," and ",(0,t.jsx)(n.code,{children:"Auth token"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:['Back to "Messaging" -> "Services" settings page starting from the sidebar, and find the ',(0,t.jsx)(n.code,{children:"Sid"})," of your service."]}),"\n",(0,t.jsx)(n.h3,{id:"compose-the-connector-json",children:"Compose the connector JSON"}),"\n",(0,t.jsxs)(n.p,{children:["Fill out the ",(0,t.jsx)(n.em,{children:"accountSID"}),", ",(0,t.jsx)(n.em,{children:"authToken"})," and ",(0,t.jsx)(n.em,{children:"fromMessagingServiceSID"})," fields with ",(0,t.jsx)(n.code,{children:"Account SID"}),", ",(0,t.jsx)(n.code,{children:"Auth token"})," and ",(0,t.jsx)(n.code,{children:"Sid"})," of the corresponding messaging service."]}),"\n",(0,t.jsx)(n.p,{children:"You can add multiple SMS connector templates for different cases. Here is an example of adding a single template:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Fill out the ",(0,t.jsx)(n.code,{children:"content"})," field with arbitrary string-typed contents. Do not forget to leave ",(0,t.jsx)(n.code,{children:"{{code}}"})," placeholder for random verification code."]}),"\n",(0,t.jsxs)(n.li,{children:["Fill out the ",(0,t.jsx)(n.code,{children:"usageType"})," field with either ",(0,t.jsx)(n.code,{children:"Register"}),", ",(0,t.jsx)(n.code,{children:"SignIn"}),", ",(0,t.jsx)(n.code,{children:"ForgotPassword"}),", ",(0,t.jsx)(n.code,{children:"Generic"})," for different use cases. In order to enable full user flows, templates with usageType ",(0,t.jsx)(n.code,{children:"Register"}),", ",(0,t.jsx)(n.code,{children:"SignIn"}),", ",(0,t.jsx)(n.code,{children:"ForgotPassword"})," and ",(0,t.jsx)(n.code,{children:"Generic"})," are required."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"test-twilio-sms-connector",children:"Test Twilio SMS connector"}),"\n",(0,t.jsx)(n.p,{children:'You can enter a phone number and click on "Send" to see whether the settings can work before "Save and Done".'}),"\n",(0,t.jsx)(n.p,{children:"That's it. Don't forget to enable connector in sign-in experience."}),"\n",(0,t.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"accountSID"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"authToken"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fromMessagingServiceSID"}),(0,t.jsx)(n.td,{children:"string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"templates"}),(0,t.jsx)(n.td,{children:"Templates[]"})]})]})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Template Properties"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Enum values"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"content"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"N/A"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"usageType"}),(0,t.jsx)(n.td,{children:"enum string"}),(0,t.jsx)(n.td,{children:"'Register' | 'SignIn' | 'ForgotPassword' | 'Generic'"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.twilio.com/docs/api/errors",children:"Twilio - Error and Warning Dictionary"})}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},32726:(e,n,i)=>{i.d(n,{ZP:()=>h,d$:()=>l});var t=i(11527),o=i(17279),s=i(91837),r=i(31568),c=i(92179),a=i(94842);const l=[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:3},...s.d$,{value:"Init LogtoClient",id:"init-logtoclient",level:3},...c.d$,{value:"Sign in",id:"sign-in",level:3},...r.d$,...a.d$];function d(e){const n={h3:"h3",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"add-logto-sdk-as-a-dependency",children:"Add Logto SDK as a dependency"}),"\n",(0,t.jsx)(s.ZP,{}),"\n",(0,t.jsx)(n.h3,{id:"init-logtoclient",children:"Init LogtoClient"}),"\n",(0,t.jsx)(c.ZP,{}),"\n",(0,t.jsx)(n.h3,{id:"sign-in",children:"Sign in"}),"\n",(0,t.jsx)(r.ZP,{}),"\n",(0,t.jsx)(a.ZP,{sdk:"iOS"})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},53136:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[];function r(e){const n={img:"img",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["To add or change ",e.connectorType,' connector, go to the "Connector" tab in the Admin Console,\nthen click on "Email and SMS connectors". From there, click "Set up" or go to detail page and\nclick "Change ',e.connectorType,' connector".']})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Connector tab",src:i(64897).Z+"",width:"4164",height:"1290"})}),"\n",(0,t.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,t.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,t.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},80710:(e,n,i)=>{i.d(n,{ZP:()=>a,d$:()=>r});var t=i(11527),o=i(17279);const s=i.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",r=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function c(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Get Started",src:i(57794).Z+"",width:"2354",height:"588"})}),"\n",(0,t.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,t.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,t.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Framework List",src:i(43477).Z+"",width:"3626",height:"2804"})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,t.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:s,alt:"Create Application modal",width:"700"})}),"\n",(0,t.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,t.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function a(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},59885:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[];function r(e){const n={admonition:"admonition",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sign-in Experience tab",src:i(68150).Z+"",width:"3502",height:"1794"})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['Select "',e.passwordlessSignUpIdentifier,'" or "Email address or phone number" for the "Sign-up\nidentifier" to provide sign-up for ',e.connectorType," passwordless sign-in, which may increase\nyour conversion rate."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Save changes",src:i(75877).Z+"",width:"2474",height:"188"})}),"\n",(0,t.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},87593:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[];function r(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:["\n","\n",(0,t.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,t.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,t.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,t.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,t.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,t.jsx)(n.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)("span",{children:["Basic knowledge of ",(0,t.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},80386:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[];function r(e){const n={p:"p",...(0,o.a)(),...e.components};return(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',e.connector," connector should be available now."]})})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},94842:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,t.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,t.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},23095:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[];function r(e){const n={p:"p",...(0,o.a)(),...e.components};return(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},41492:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>x,connector:()=>m,contentTitle:()=>g,default:()=>A,frontMatter:()=>u,metadata:()=>j,toc:()=>f});var t=i(11527),o=i(17279),s=i(87593),r=i(80710),c=i(53136),a=i(80386),l=i(59885),d=i(23095),h=i(32726),p=i(85419);const u={slug:"how-to-build-twilio-sign-in-with-ios-swift-and-logto",authors:"logto",tags:["authentication","twilio","ios-swift","swift","passwordless-sign-in","sign-in","login"],title:"How to build Twilio SMS passwordless sign-in with iOS Swift and Logto"},g=void 0,j={permalink:"/tutorial/how-to-build-twilio-sign-in-with-ios-swift-and-logto",source:"@site/tutorial/build-with-logto/generated-ios-swift-twilio.mdx",title:"How to build Twilio SMS passwordless sign-in with iOS Swift and Logto",description:"\x3c!--",date:"2024-06-05T09:30:43.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"twilio",permalink:"/tutorial/tags/twilio"},{inline:!0,label:"ios-swift",permalink:"/tutorial/tags/ios-swift"},{inline:!0,label:"swift",permalink:"/tutorial/tags/swift"},{inline:!0,label:"passwordless-sign-in",permalink:"/tutorial/tags/passwordless-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.315,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-twilio-sign-in-with-ios-swift-and-logto",authors:"logto",tags:["authentication","twilio","ios-swift","swift","passwordless-sign-in","sign-in","login"],title:"How to build Twilio SMS passwordless sign-in with iOS Swift and Logto"},unlisted:!1,prevItem:{title:"How to build SendGrid Email passwordless sign-in with iOS Swift and Logto",permalink:"/tutorial/how-to-build-sendgrid-sign-in-with-ios-swift-and-logto"},nextItem:{title:"How to build Apple sign-in with Next and Logto",permalink:"/tutorial/how-to-build-apple-sign-in-with-next-and-logto"}},x={authorsImageUrls:[void 0]},m="Twilio",f=[...s.d$,{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},...r.d$,{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},...h.d$,{value:"Add Twilio connector",id:"add-twilio-connector",level:2},...c.d$,{value:"Set up Twilio SMS connector",id:"set-up-twilio-sms-connector",level:2},...p.d$,{value:"Save your configuration",id:"save-your-configuration",level:2},...a.d$,{value:"Enable Twilio connector in Sign-in Experience",id:"enable-twilio-connector-in-sign-in-experience",level:2},...l.d$,{value:"Testing and Validation",id:"testing-and-validation",level:2},...d.d$,{value:"Further readings",id:"further-readings",level:2}];function w(e){const n={a:"a",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.ZP,{connector:m,sdk:"iOS Swift",link:"https://developer.apple.com/ios/ "}),"\n",(0,t.jsx)(n.h2,{id:"create-an-application-in-logto",children:"Create an application in Logto"}),"\n",(0,t.jsx)(r.ZP,{type:"Native app",framework:"iOS(Swift)"}),"\n",(0,t.jsx)(n.h2,{id:"integrate-logto-sdk",children:"Integrate Logto SDK"}),"\n",(0,t.jsx)(h.ZP,{}),"\n",(0,t.jsx)(n.h2,{id:"add-twilio-connector",children:"Add Twilio connector"}),"\n",(0,t.jsx)(c.ZP,{connector:m,connectorType:"SMS"}),"\n",(0,t.jsx)(n.h2,{id:"set-up-twilio-sms-connector",children:"Set up Twilio SMS connector"}),"\n",(0,t.jsx)(p.ZP,{}),"\n",(0,t.jsx)(n.h2,{id:"save-your-configuration",children:"Save your configuration"}),"\n",(0,t.jsx)(a.ZP,{connector:m}),"\n",(0,t.jsx)(n.h2,{id:"enable-twilio-connector-in-sign-in-experience",children:"Enable Twilio connector in Sign-in Experience"}),"\n",(0,t.jsx)(l.ZP,{connectorType:"SMS",passwordlessSignUpIdentifier:"Phone number"}),"\n",(0,t.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,t.jsx)(d.ZP,{connector:m,sdk:"iOS Swift"}),"\n",(0,t.jsx)(n.h2,{id:"further-readings",children:"Further readings"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/recipes/protect-your-api/",children:"\u2694\ufe0f Protect your API"})," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,t.jsx)("br",{}),"\nLearn more about identifying who's who and keeping your API secure."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/recipes/manage-users/",children:"\ud83e\uddd1\u200d\ud83d\ude80 Manage users"})," We know you care about user management and activities, as we also do.",(0,t.jsx)("br",{}),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/recipes/customize-sie/localized-language",children:"\ud83c\udf10 Localization"})," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,t.jsx)("br",{}),"\nYou can change current language phrases or add a new language without friction."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/blog/tags/ciam",children:"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series"})," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."]})]})}function A(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(w,{...e})}):w(e)}},75848:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[];function r(e){const n={a:"a",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Let's switch to the Application details page of Logto Console. Add a Redirect URI"," ","\n",(0,t.jsx)("code",{children:e.redirectUri}),' and click "Save Changes".']})}),"\n",(0,t.jsx)("img",{alt:"Redirect URI in Logto Console",src:e.figureSrc,width:"600px"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.oauth.com/oauth2-servers/redirect-uris/",children:"Redirect URI"})," is an OAuth 2.0 concept which implies the location should redirect after authentication."]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},7709:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[];function r(e){const n={admonition:"admonition",p:"p",...(0,o.a)(),...e.components};return(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Before calling ",(0,t.jsx)("code",{children:e.calling}),", make sure you have correctly configured Redirect URI\nin Admin Console."]})})})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},91837:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[];function r(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Use the following URL to add Logto SDK as a dependency in Swift Package Manager."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"https://github.com/logto-io/swift.git\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Since Xcode 11, you can ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/swift_packages/adding_package_dependencies_to_your_app",children:"directly import a Swift package"})," w/o any additional tool."]}),"\n",(0,t.jsxs)(n.p,{children:["We do not support ",(0,t.jsx)(n.strong,{children:"Carthage"})," and ",(0,t.jsx)(n.strong,{children:"CocoaPods"})," at the time due to some technical issues."]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"Carthage"}),(0,t.jsxs)(n.p,{children:["Carthage ",(0,t.jsxs)(n.a,{href:"https://github.com/Carthage/Carthage/issues/1226#issuecomment-290931385",children:["needs a ",(0,t.jsx)(n.code,{children:"xcodeproj"})," file to build"]}),", but ",(0,t.jsx)(n.code,{children:"swift package generate-xcodeproj"})," will report a failure since we are using binary targets\nfor native social plugins. We will try to find a workaround later."]})]}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsx)("summary",{children:"CocoaPods"}),(0,t.jsxs)(n.p,{children:["CocoaPods ",(0,t.jsx)(n.a,{href:"https://github.com/CocoaPods/CocoaPods/issues/3276",children:"does not support local dependency"})," and monorepo, thus it's hard to create a ",(0,t.jsx)(n.code,{children:".podspec"})," for this repo."]})]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},31568:(e,n,i)=>{i.d(n,{ZP:()=>d,d$:()=>a});var t=i(11527),o=i(17279),s=i(34193),r=i(75848),c=i(7709);const a=[{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},...r.d$,{value:"Sign in with browser",id:"sign-in-with-browser",level:3},...c.d$];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"configure-redirect-uri",children:"Configure Redirect URI"}),"\n",(0,t.jsx)(r.ZP,{figureSrc:s.Z,redirectUri:"io.logto://callback"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The Redirect URI in iOS SDK is only for internal use. There's ",(0,t.jsx)(n.em,{children:"NO NEED"})," to add a ",(0,t.jsx)(n.a,{href:"https://developer.apple.com/documentation/xcode/defining-a-custom-url-scheme-for-your-app",children:"Custom URL Scheme"})," until a connector asks."]})}),"\n",(0,t.jsx)(n.h3,{id:"sign-in-with-browser",children:"Sign in with browser"}),"\n",(0,t.jsx)(c.ZP,{calling:".signInWithBrowser(redirectUri:)"}),"\n",(0,t.jsx)(n.p,{children:"Go back to Xcode, use the following code to implement sign-in:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'do {\n  try await client.signInWithBrowser(redirectUri: "io.logto://callback")\n  print(client.isAuthenticated) // true\n} catch let error as LogtoClientErrors.SignIn {\n  // error occured during sign in\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},92179:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>s});var t=i(11527),o=i(17279);const s=[];function r(e){const n={code:"code",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:'import Logto\nimport LogtoClient\n\nlet config = try? LogtoConfig(\n  endpoint: "<your-logto-endpoint>", // E.g. http://localhost:3001\n  appId: "<your-app-id>"\n)\nlet client = LogtoClient(useConfig: config)\n'})}),"\n",(0,t.jsx)(n.p,{children:"By default, we store credentials like ID Token and Refresh Token in the Keychain. Thus the user doesn't need to sign in again when he returns."}),"\n",(0,t.jsxs)(n.p,{children:["To turn off this behavior, set ",(0,t.jsx)(n.code,{children:"usingPersistStorage"})," to ",(0,t.jsx)(n.code,{children:"false"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-swift",children:"let config = try? LogtoConfig(\n  // ...\n  usingPersistStorage: false\n)\n"})})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},34193:(e,n,i)=>{i.d(n,{Z:()=>t});const t="data:image/png;base64,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"},64897:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/connector-tab-passwordless-9939bc0a0a5bbf8821d700cf9a25b825.png"},43477:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},57794:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},75877:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},68150:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},17279:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var t=i(50959);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);