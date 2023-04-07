"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[52062],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),h=o,k=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return r?n.createElement(k,i(i({ref:t},l),{},{components:r})):n.createElement(k,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},14580:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return k}});var n=r(665),o=r(40151),a=(r(59496),r(49613)),i=["components"],s={toc:[]};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("strong",null,"Property Name")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Property Description")),(0,a.kt)("td",null,(0,a.kt)("strong",null,"Required")))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API Name"),(0,a.kt)("td",null,"A user friendly name that can help you to identify the API resource."),(0,a.kt)("td",null,"true")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"API Identifier"),(0,a.kt)("td",null,"The unique ",(0,a.kt)("a",{href:"https://www.rfc-editor.org/rfc/rfc8707.html"},"API Resource Indicator")," ","value, with restrictions listed above.",(0,a.kt)("br",null),"Logto will use it to identify the requested API resource and grant the authorization tokens accordingly."),(0,a.kt)("td",null,"true")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Token expiration time ",(0,a.kt)("i",null,"(in seconds)")),(0,a.kt)("td",null,"The expiration time set for ",(0,a.kt)("strong",null,"access_token"),". The default expiration value is"," ",(0,a.kt)("strong",null,"3600"),"."),(0,a.kt)("td",null,"false")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Requests with a expired ",(0,a.kt)("strong",null,"access_token")," should be restricted.\nThis is implemented to protect your API from a abused token.\nThe larger value is set, the longer will a issued ",(0,a.kt)("strong",null,"access_token")," survive, and the more vulnerable your API will be.")))}c.isMDXComponent=!0;var u=["components"],l={},d="\ud83d\udcc1 API Resource",p={unversionedId:"docs/references/resources/README",id:"version-1.x/docs/references/resources/README",title:"\ud83d\udcc1 API Resource",description:"Introduction",source:"@site/versioned_docs/version-1.x/docs/references/resources/README.md",sourceDirName:"docs/references/resources",slug:"/docs/references/resources/",permalink:"/docs/references/resources/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/references/resources/README.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Configuration",permalink:"/docs/references/core/configuration"},next:{title:"\ud83d\udcc3 SDK Convention",permalink:"/docs/references/sdk-convention/"}},h={},k=[{value:"Introduction",id:"introduction",level:2},{value:"What is an API resource?",id:"what-is-an-api-resource",level:3},{value:"Why is API resource needed?",id:"why-is-api-resource-needed",level:3},{value:"Definitions",id:"definitions",level:2},{value:"Resource Indicator",id:"resource-indicator",level:3},{value:"Logto API Resource Schema",id:"logto-api-resource-schema",level:3},{value:"Permissions and RBAC",id:"permissions-and-rbac",level:3},{value:"How does it work",id:"how-does-it-work",level:2},{value:"1. Authorization request",id:"1-authorization-request",level:3},{value:"2. Access Token request",id:"2-access-token-request",level:3},{value:"3. API Resource request",id:"3-api-resource-request",level:3}],m={toc:k};function f(e){var t=e.components,r=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-api-resource"},"\ud83d\udcc1 API Resource"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("h3",{id:"what-is-an-api-resource"},"What is an API resource?"),(0,a.kt)("p",null,"API resources, a.k.a. ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc8707.html"},"Resource Indicators"),", indicate the target services or resources to be requested, usually, a URI format variable representing the resource's identity."),(0,a.kt)("h3",{id:"why-is-api-resource-needed"},"Why is API resource needed?"),(0,a.kt)("p",null,"Logto, as an authorization server, is designed to serve a large number of services and APIs. By indicating which API resource an end-user intends to access, Logto can issue a private encrypted authorization token and apply audience restrictions accordingly."),(0,a.kt)("p",null,"A guarded request with an authorization token provided will help you protect your private resources from being accessed and attacked by anonymous identities."),(0,a.kt)("h2",{id:"definitions"},"Definitions"),(0,a.kt)("h3",{id:"resource-indicator"},"Resource Indicator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A resource value indicates the target service or resource to which access is being requested."),(0,a.kt)("li",{parentName:"ul"},"Its value ",(0,a.kt)("strong",{parentName:"li"},"MUST")," be an absolute URI."),(0,a.kt)("li",{parentName:"ul"},"The URI ",(0,a.kt)("strong",{parentName:"li"},"MUST NOT")," include a fragment component."),(0,a.kt)("li",{parentName:"ul"},"It ",(0,a.kt)("strong",{parentName:"li"},"SHOULD NOT")," include a query component."),(0,a.kt)("li",{parentName:"ul"},"You ",(0,a.kt)("strong",{parentName:"li"},"SHOULD")," provide the most specific URI it can for the complete API or set of resources it intends to access.")),(0,a.kt)("p",null,"In practice, a client may know a base URI or the application or resource to interact with. It would be appropriate to use it as the value of the resource parameter."),(0,a.kt)("p",null,"E.g., Logto management API base URI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://tenantId.logto.app/api\n")),(0,a.kt)("p",null,"By default, this API resource is pre-registered to your Logto service. All the management APIs under this URI are protected by Logto."),(0,a.kt)("h3",{id:"logto-api-resource-schema"},"Logto API Resource Schema"),(0,a.kt)(c,{mdxType:"APIResourceSchema"}),(0,a.kt)("h3",{id:"permissions-and-rbac"},"Permissions and RBAC"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/rbac"},"\ud83d\udd10 RBAC")," for details."),(0,a.kt)("h2",{id:"how-does-it-work"},"How does it work"),(0,a.kt)("h3",{id:"1-authorization-request"},"1. Authorization request"),(0,a.kt)("p",null,"Provide a list of resource indicator parameters in an authorization request. It will indicate all the protected resource(s) that the user may request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"GET http://localhost:3001/oidc/auth?response_type=code\n    &client_id=s6BhdRkqt3\n    &state=tNwzQ87pC6llebpmac_IDeeq-mCR2wLDYljHUZUAWuI\n    &redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb\n    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fapplications\n    &resource=https%3A%2F%2Flogto.dev%2Fapi%2Fusers\n")),(0,a.kt)("p",null,"Logto will validate and store these resource indicators. An ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization_code")," will be granted and returned with scopes restricted to these specified resources."),(0,a.kt)("h3",{id:"2-access-token-request"},"2. Access Token request"),(0,a.kt)("p",null,"When the resource parameter is present on an access token request along with the ",(0,a.kt)("inlineCode",{parentName:"p"},"authorization_code")," granted above, it will specify the target API resource audience of the access token is requested."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"POST http://localhost:3001/oidc/token HTTP/1.1\n\n    grant_type=authorization_code\n    redirect_uri=https%3A%2F%2Fclient.example.org%2Fcb\n    code=10esc29BWC2qZB0acc9v8zAv9ltc2pko105tQauZ\n    resource=https%3A%2F%2Flogto.test.dev%2Fusers\n")),(0,a.kt)("p",null,"An encrypted access token with the audience restricted to this requested resource will be granted by Logto. The token carries all the data you will need to represent the authorization status of the request. E.g., the request user's identity and role, the token's audience and expiration time."),(0,a.kt)("h3",{id:"3-api-resource-request"},"3. API Resource request"),(0,a.kt)("p",null,"The client user sent a request to the API resource by presenting the given ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," in the Authorization header."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"GET http://localhost:3001/api/users\n\nAuthorization: Bearer eyJhbGciOiJIUz...\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Please follow our ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/"},"\u2694\ufe0f Protect Your API")," guide to implement the token validation on your server-side APIs and make your resources well protected.")),(0,a.kt)("p",null,"Logto follows the standard token-based authorization protocol to protect your API resources. To learn more about OAuth 2.0, please refer to OAuth 2.0's ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1"},"official document"),"."))}f.isMDXComponent=!0}}]);