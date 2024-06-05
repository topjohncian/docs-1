"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3874],{14108:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var t=n(11527),r=n(17279),s=n(75696),i=n(78407);const a=n.p+"assets/images/gitpod-running-9ccf680a2482a3146703b6097d62f0a5.png",l={},c="\u26a1 Get started",d={id:"docs/tutorials/get-started/README",title:"\u26a1 Get started",description:"There are some nuanced differences in accessing Logto Console between the Logto OSS (open-source software) and Logto Cloud.",source:"@site/docs/docs/tutorials/get-started/README.mdx",sourceDirName:"docs/tutorials/get-started",slug:"/docs/tutorials/get-started/",permalink:"/docs/tutorials/get-started/",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/get-started/README.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udc81 Introduction",permalink:"/"},next:{title:"Welcome to Logto",permalink:"/docs/tutorials/get-started/introduction"}},u={},h=[{value:"Logto Cloud",id:"logto-cloud",level:2},{value:"Logto OSS (self-hosted)",id:"logto-oss-self-hosted",level:2},{value:"GitPod",id:"gitpod",level:3},{value:"Local",id:"local",level:3},{value:"Quick troubleshooting",id:"quick-troubleshooting",level:3},{value:"Create an account",id:"create-an-account",level:3}];function p(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:l}=o;return l||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h1,{id:"-get-started",children:"\u26a1 Get started"}),"\n",(0,t.jsx)(o.p,{children:"There are some nuanced differences in accessing Logto Console between the Logto OSS (open-source software) and Logto Cloud."}),"\n",(0,t.jsx)(o.h2,{id:"logto-cloud",children:"Logto Cloud"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"https://cloud.logto.io/",children:"Logto Cloud"})," is a Software-as-a-Service (SaaS) version of Logto. It offers users more options for account creation and basic cloud operations than the open-source version."]}),"\n",(0,t.jsx)(o.p,{children:"Users can sign up and sign in using Google, GitHub, email with a password, or a verification code. Once you've entered the cloud, you can manage your resources and profile information within the platform."}),"\n",(0,t.jsx)(o.p,{children:"During sign-up, you'll go through an onboarding flow that helps Logto understand your needs and preferences to personalize your experience. Although it only takes a few steps, the onboarding flow can be incredibly helpful in quickly getting started and successfully building authentication and authorization."}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Get started",src:n(44467).Z+"",width:"2900",height:"1558"})}),"\n",(0,t.jsx)(o.h2,{id:"logto-oss-self-hosted",children:"Logto OSS (self-hosted)"}),"\n",(0,t.jsx)(o.h3,{id:"gitpod",children:"GitPod"}),"\n",(0,t.jsxs)(o.p,{children:["To start an online GitPod workspace for Logto, ",(0,t.jsx)("a",{href:"https://gitpod.io/#https://github.com/logto-io/demo",target:"_blank",rel:"noopener",children:"click here"}),". Wait a few moment, you'll see the message like:"]}),"\n",(0,t.jsx)("p",{children:(0,t.jsx)("img",{src:a,alt:"Gitpod is running",width:"720px"})}),"\n",(0,t.jsxs)(o.p,{children:["Logto uses port ",(0,t.jsx)(o.code,{children:"3001"})," for its core service and port ",(0,t.jsx)(o.code,{children:"3002"})," for the interactive Admin Console by default."]}),"\n",(0,t.jsxs)(o.p,{children:["To continue your Logto journey, press Ctrl (or Cmd) and click the link that starts with ",(0,t.jsx)(o.code,{children:"https://3002-..."}),". Enjoy!"]}),"\n",(0,t.jsx)(o.h3,{id:"local",children:"Local"}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(s.Z,{value:"docker-compose",label:"Docker Compose",children:[(0,t.jsxs)(o.p,{children:["Docker Compose CLI usually comes with ",(0,t.jsx)(o.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"}),"."]}),(0,t.jsx)(o.admonition,{type:"caution",children:(0,t.jsxs)(o.p,{children:["Do not use our docker compose command for production! Since we currently have a built-in Postgres database bundled together with the Logto app in ",(0,t.jsx)(o.code,{children:"docker-compose.yml"}),",\nevery time you re-execute the command a new database instance will be created, and any data persisted previously will be lost."]})}),(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"curl -fsSL https://raw.githubusercontent.com/logto-io/logto/HEAD/docker-compose.yml | docker compose -p logto -f - up\n"})}),(0,t.jsx)(o.p,{children:"After a successful composition, you will see the message like:"})]}),(0,t.jsxs)(s.Z,{value:"docker",label:"Docker",children:[(0,t.jsx)("h3",{children:"Step 1"}),(0,t.jsxs)(o.p,{children:["Prepare a ",(0,t.jsx)(o.a,{href:"https://www.postgresql.org/",children:"PostgreSQL"}),"@^14.0 instance, and using ",(0,t.jsx)(o.a,{href:"/docs/references/using-cli/",children:"Logto CLI"})," to seed a database for Logto:"]}),(0,t.jsxs)(i.Z,{groupId:"cmd",children:[(0,t.jsx)(s.Z,{value:"cli",label:"CLI",children:(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"logto db seed\n"})})}),(0,t.jsx)(s.Z,{value:"npx",label:"npx",children:(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npx @logto/cli db seed\n"})})})]}),(0,t.jsx)("h3",{children:"Step 2"}),(0,t.jsx)(o.p,{children:"Pull the image:"}),(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"# ghcr\ndocker pull ghcr.io/logto-io/logto:latest\n# DockerHub\ndocker pull svhd/logto:latest\n"})}),(0,t.jsx)("h3",{children:"Step 3"}),(0,t.jsxs)(o.p,{children:["Map the container ports to Logto core and admin app, e.g., ",(0,t.jsx)(o.code,{children:"3001:3001"})," and ",(0,t.jsx)(o.code,{children:"3002:3002"}),"; and set the following environment variables to the container:"]}),(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-yml",children:"TRUST_PROXY_HEADER: 1 # Set to 1 if you have an HTTPS proxy (e.g. Nginx) in front of Logto\nENDPOINT: https://<your-logto-domain> # (Optional) Replace with your Logto endpoint URL if you are using a custom domain\nADMIN_ENDPOINT: https://<your-logto-admin-domain> # (Optional) Replace with your Logto admin URL if you are using a custom domain\nDB_URL: postgres://username:password@your_postgres_url:port/db_name # Replace with your Postgres DSN\n"})}),(0,t.jsx)(o.p,{children:"Run the container with all the environment variables above:"}),(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"docker run \\\n  --name logto \\\n  -p 3001:3001 \\\n  -p 3002:3002 \\\n  -e TRUST_PROXY_HEADER=1 \\\n  -e ENDPOINT=https://<your-logto-domain> \\\n  -e ADMIN_ENDPOINT=https://<your-logto-admin-domain> \\\n  -e DB_URL=postgres://username:password@your_postgres_url:port/db_name \\\n  ghcr.io/logto-io/logto:latest\n"})}),(0,t.jsx)(o.admonition,{type:"tip",children:(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["If you are using Docker Hub, use ",(0,t.jsx)(o.code,{children:"svhd/logto:latest"})," instead of ",(0,t.jsx)(o.code,{children:"ghcr.io/logto-io/logto:latest"}),"."]}),"\n",(0,t.jsxs)(o.li,{children:["Use ",(0,t.jsx)(o.code,{children:"host.docker.internal"})," or ",(0,t.jsx)(o.code,{children:"172.17.0.1"})," in ",(0,t.jsx)(o.code,{children:"DB_URL"})," to refer to the host IP."]}),"\n"]})}),(0,t.jsx)(o.p,{children:"Finally, you will see the message like:"})]}),(0,t.jsxs)(s.Z,{value:"npm",label:"npm-init",children:[(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Prerequisites"})}),(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"https://nodejs.org/",children:"Node.js"})," ",(0,t.jsx)(o.code,{children:"^18.12.0"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.a,{href:"https://postgresql.org/",children:"PostgreSQL"})," ",(0,t.jsx)(o.code,{children:"^14.0"})]}),"\n"]}),(0,t.jsx)(o.p,{children:"Higher versions usually work but are not guaranteed."}),(0,t.jsx)(o.p,{children:"We recommend using a new empty database which is dedicated for Logto, while it's not a hard requirement."}),(0,t.jsx)(o.p,{children:(0,t.jsx)(o.strong,{children:"Download and start"})}),(0,t.jsx)(o.p,{children:"In your terminal:"}),(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npm init @logto@latest\n"})}),(0,t.jsx)(o.p,{children:"Once you complete the init process and start Logto, you will see the message like:"})]})]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-text",children:"Core app is running at http://localhost:3001\nCore app is running at https://your-domain-url\nAdmin app is running at http://localhost:3002\nAdmin app is running at https://your-admin-domain-url\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Heading to ",(0,t.jsx)("a",{target:"_blank",href:"http://localhost:3002/",rel:"noopener",children:(0,t.jsx)(o.a,{href:"http://localhost:3002/",children:"http://localhost:3002/"})})," to continue your Logto journey. Enjoy!"]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)("summary",{children:"Using an alternative URL for downloading"}),(0,t.jsxs)(o.p,{children:["If you want to specify a URL for the Logto zip file, use the ",(0,t.jsx)(o.code,{children:"--download-url"})," option. For example:"]}),(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"npm init @logto@latest -- --download-url=https://github.com/logto-io/logto/releases/download/v1.2.2/logto.tar.gz\n"})}),(0,t.jsxs)(o.p,{children:["Note the extra ",(0,t.jsx)(o.code,{children:"--"})," is needed for NPM to pass the arguments."]})]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)("summary",{children:"Configuration (optional)"}),(0,t.jsxs)(o.p,{children:["Logto uses environment variables for configuration, along with ",(0,t.jsx)(o.code,{children:".env"})," file support. See ",(0,t.jsx)(o.a,{href:"/docs/references/core/configuration",children:"Configuration"})," for detailed usage and full variable list."]})]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsxs)(o.em,{children:["Check out ",(0,t.jsx)(o.a,{href:"/docs/references/core/",children:"Core Service"})," if you want more advanced controls or programmatic access to Logto."]})}),"\n",(0,t.jsx)(o.h3,{id:"quick-troubleshooting",children:"Quick troubleshooting"}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)("summary",{children:(0,t.jsxs)(o.p,{children:["My browser cannot load Admin Console (showing error ",(0,t.jsx)("code",{children:"Crypto.subtle is unavailable..."}),")"]})}),(0,t.jsxs)(o.p,{children:["Admin Console uses ",(0,t.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API",children:"Web Crypto API"}),", which requires ",(0,t.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts",children:"secure contexts"}),", i.e. HTTPS or HTTP with ",(0,t.jsx)(o.code,{children:"localhost"}),"."]}),(0,t.jsx)(o.p,{children:"If you use HTTP with an IP address or custom domain, then the browser cannot load Admin Console."})]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)("summary",{children:(0,t.jsxs)(o.p,{children:["I'm using a custom domain, but my browser cannot load Admin Console (showing error"," ","\n",(0,t.jsx)("code",{children:'"code": "oidc.invalid_redirect_uri"'}),")"]})}),(0,t.jsxs)(o.p,{children:["If you are using a custom domain rather than ",(0,t.jsx)(o.code,{children:"localhost"}),", you need to set the environment variable ",(0,t.jsx)(o.code,{children:"ENDPOINT"})," to the Logto URL. It is because of the strict requirement of Redirect URI in OIDC. See ",(0,t.jsx)(o.a,{href:"/docs/references/core/configuration",children:"Configuration"})," for details."]})]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)("summary",{children:(0,t.jsxs)(o.p,{children:["I'm using an HTTPS proxy (e.g., Nginx) in front of Logto, but I failed on sign-in (showing error"," ","\n",(0,t.jsx)("code",{children:"TypeError: Failed to fetch"}),")"]})}),(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["First, make sure you have set the node environment variable ",(0,t.jsx)(o.code,{children:"TRUST_PROXY_HEADER"})," to ",(0,t.jsx)(o.code,{children:"true"}),". See ",(0,t.jsx)(o.a,{href:"/docs/references/core/configuration#using-a-https-proxy",children:"Configuration"})," for details."]}),"\n",(0,t.jsxs)(o.li,{children:["Also, you need to set ",(0,t.jsx)(o.code,{children:"X-Forwarded-Proto"})," header to ",(0,t.jsx)(o.code,{children:"https"})," in your proxy config. See ",(0,t.jsx)(o.a,{href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies",children:"Trusting TLS offloading proxies"})," for details."]}),"\n"]})]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)("summary",{children:"I'm facing CORS issues."}),(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["If ",(0,t.jsx)(o.code,{children:"ADMIN_ENDPOINT"})," is not specified, ",(0,t.jsx)(o.code,{children:"localhost:[admin-port]"})," will be allowed to perform Cross-Origin Resource Sharing (CORS) in Logto."]}),"\n",(0,t.jsxs)(o.li,{children:["If ",(0,t.jsx)(o.code,{children:"ADMIN_ENDPOINT"})," is specified, only requests from the origin of ",(0,t.jsx)(o.code,{children:"ADMIN_ENDPOINT"})," will be allowed."]}),"\n"]})]}),"\n",(0,t.jsxs)(l,{children:[(0,t.jsx)("summary",{children:(0,t.jsxs)(o.p,{children:["What is this again? ",(0,t.jsx)("code",{children:"Error: Invalid id token"})]})}),(0,t.jsx)(o.p,{children:"If you are not messing up with your tokens, then in most cases this is caused by a mismatch of your server time and client time. Sync the time on both your server and client and try again."})]}),"\n",(0,t.jsx)(o.h3,{id:"create-an-account",children:"Create an account"}),"\n",(0,t.jsx)(o.p,{children:'Once you have successfully hosted Logto on your server, click on "Create Account" on the welcome page. Keep in mind that the open-source version of Logto only allows for one account creation during the initial launch and does not support multiple accounts. The account creation process is limited to username and password combinations.'})]})}function g(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},75696:(e,o,n)=>{n.d(o,{Z:()=>i});n(50959);var t=n(5341);const r={tabItem:"tabItem_YHvg"};var s=n(11527);function i(e){let{children:o,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,i),hidden:n,children:o})}},78407:(e,o,n)=>{n.d(o,{Z:()=>w});var t=n(50959),r=n(5341),s=n(18387),i=n(28903),a=n(15885),l=n(35927),c=n(38894),d=n(70148);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:o}=e;return!!o&&"object"==typeof o&&"value"in o}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:o,children:n}=e;return(0,t.useMemo)((()=>{const e=o??function(e){return u(e).map((e=>{let{props:{value:o,label:n,attributes:t,default:r}}=e;return{value:o,label:n,attributes:t,default:r}}))}(n);return function(e){const o=(0,c.l)(e,((e,o)=>e.value===o.value));if(o.length>0)throw new Error(`Docusaurus error: Duplicate values "${o.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[o,n])}function p(e){let{value:o,tabValues:n}=e;return n.some((e=>e.value===o))}function g(e){let{queryString:o=!1,groupId:n}=e;const r=(0,i.k6)(),s=function(e){let{queryString:o=!1,groupId:n}=e;if("string"==typeof o)return o;if(!1===o)return null;if(!0===o&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:o,groupId:n});return[(0,l._X)(s),(0,t.useCallback)((e=>{if(!s)return;const o=new URLSearchParams(r.location.search);o.set(s,e),r.replace({...r.location,search:o.toString()})}),[s,r])]}function m(e){const{defaultValue:o,queryString:n=!1,groupId:r}=e,s=h(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:o,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(o){if(!p({value:o,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${o}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return o}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:o,tabValues:s}))),[c,u]=g({queryString:n,groupId:r}),[m,x]=function(e){let{groupId:o}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(o),[r,s]=(0,d.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),f=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=n(20619);const f={tabList:"tabList_bI1r",tabItem:"tabItem_PIQj"};var j=n(11527);function b(e){let{className:o,block:n,selectedValue:t,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const o=e.currentTarget,n=l.indexOf(o),r=a[n].value;r!==t&&(c(o),i(r))},u=e=>{let o=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;o=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;o=l[n]??l[l.length-1];break}}o?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},o),children:a.map((e=>{let{value:o,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:t===o?0:-1,"aria-selected":t===o,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":t===o}),children:n??o},o)}))})}function y(e){let{lazy:o,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(o){const e=s.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,o)=>(0,t.cloneElement)(e,{key:o,hidden:e.props.value!==r})))})}function v(e){const o=m(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...o,...e}),(0,j.jsx)(y,{...o,...e})]})}function w(e){const o=(0,x.Z)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(o))}},44467:(e,o,n)=>{n.d(o,{Z:()=>t});const t=n.p+"assets/images/create-account-2bbdfbf0a27b87e35e899044447d610e.png"},17279:(e,o,n)=>{n.d(o,{Z:()=>a,a:()=>i});var t=n(50959);const r={},s=t.createContext(r);function i(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);