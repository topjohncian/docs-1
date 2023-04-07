"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[20249],{49613:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(59496);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),c=p(n),m=o,g=c["".concat(s,".").concat(m)]||c[m]||k[m]||a;return n?r.createElement(g,l(l({ref:e},d),{},{components:n})):r.createElement(g,l({ref:e},d))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75450:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return k}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),l=["components"],i={},s="CodeTokenResponse",p={unversionedId:"sdk/Kotlin/kotlin/io.logto.sdk.core.type/-code-token-response/index",id:"version-1.x/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-code-token-response/index",title:"CodeTokenResponse",description:"data class CodeTokenResponse(val accessToken String, val idToken String, val expiresIn: Long)",source:"@site/versioned_docs/version-1.x/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-code-token-response/index.md",sourceDirName:"sdk/Kotlin/kotlin/io.logto.sdk.core.type/-code-token-response",slug:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-code-token-response/",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-code-token-response/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-code-token-response/index.md",tags:[],version:"1.x",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"io.logto.sdk.core.type",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/"},next:{title:"IdTokenClaims",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-id-token-claims/"}},d={},k=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2}],c={toc:k};function m(t){var e=t.components,n=(0,o.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"codetokenresponse"},"CodeTokenResponse"),(0,a.kt)("p",null,"data class CodeTokenResponse(val accessToken: ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val refreshToken: ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val idToken: ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val scope: ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val expiresIn: ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"),")"),(0,a.kt)("h2",{id:"constructors"},"Constructors"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CodeTokenResponse"),(0,a.kt)("td",{parentName:"tr",align:null},"fun CodeTokenResponse(accessToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", refreshToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", idToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", scope: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", expiresIn: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"),")")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"accessToken"),(0,a.kt)("td",{parentName:"tr",align:null},"val accessToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expiresIn"),(0,a.kt)("td",{parentName:"tr",align:null},"val expiresIn: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-long/index.html"},"Long"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"idToken"),(0,a.kt)("td",{parentName:"tr",align:null},"val idToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"refreshToken"),(0,a.kt)("td",{parentName:"tr",align:null},"val refreshToken: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"scope"),(0,a.kt)("td",{parentName:"tr",align:null},"val scope: ",(0,a.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))))))}m.isMDXComponent=!0}}]);