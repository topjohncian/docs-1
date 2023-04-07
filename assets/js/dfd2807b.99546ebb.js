"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[14510],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=o.createContext({}),l=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,k=d["".concat(a,".").concat(f)]||d[f]||u[f]||i;return n?o.createElement(k,s(s({ref:t},p),{},{components:n})):o.createElement(k,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59247:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var o=n(665),r=n(40151),i=(n(59496),n(49613)),s=["components"],c={},a=void 0,l={unversionedId:"sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse",id:"version-1.x/sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse",title:"LogtoCore.CodeTokenResponse",description:"STRUCT",source:"@site/versioned_docs/version-1.x/sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse.md",sourceDirName:"sdk/Swift/Logto/Structs",slug:"/sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse",permalink:"/sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse.md",tags:[],version:"1.x",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"JwtHeader",permalink:"/sdk/Swift/Logto/Structs/JwtHeader"},next:{title:"LogtoCore.OidcConfigResponse",permalink:"/sdk/Swift/Logto/Structs/LogtoCore.OidcConfigResponse"}},p={},u=[{value:"Properties",id:"properties",level:2},{value:"<code>accessToken</code>",id:"accesstoken",level:3},{value:"<code>refreshToken</code>",id:"refreshtoken",level:3},{value:"<code>idToken</code>",id:"idtoken",level:3},{value:"<code>scope</code>",id:"scope",level:3},{value:"<code>expiresIn</code>",id:"expiresin",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"STRUCT")),(0,i.kt)("h1",{id:"logtocorecodetokenresponse"},(0,i.kt)("inlineCode",{parentName:"h1"},"LogtoCore.CodeTokenResponse")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"struct CodeTokenResponse: Codable, Equatable {\n    public let accessToken: String\n    public let refreshToken: String?\n    public let idToken: String\n    public let scope: String\n    public let expiresIn: Int64\n}\n")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"accesstoken"},(0,i.kt)("inlineCode",{parentName:"h3"},"accessToken")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let accessToken: String\n")),(0,i.kt)("h3",{id:"refreshtoken"},(0,i.kt)("inlineCode",{parentName:"h3"},"refreshToken")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let refreshToken: String\n")),(0,i.kt)("h3",{id:"idtoken"},(0,i.kt)("inlineCode",{parentName:"h3"},"idToken")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let idToken: String\n")),(0,i.kt)("h3",{id:"scope"},(0,i.kt)("inlineCode",{parentName:"h3"},"scope")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let scope: String\n")),(0,i.kt)("h3",{id:"expiresin"},(0,i.kt)("inlineCode",{parentName:"h3"},"expiresIn")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public let expiresIn: Int64\n")))}f.isMDXComponent=!0}}]);