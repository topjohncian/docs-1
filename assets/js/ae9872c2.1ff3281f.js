"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[21607],{49613:function(e,n,o){o.d(n,{Zo:function(){return u},kt:function(){return d}});var t=o(59496);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function c(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?c(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)o=c[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)o=c[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=t.createContext({}),l=function(e){var n=t.useContext(s),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},u=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(o),d=r,g=f["".concat(s,".").concat(d)]||f[d]||p[d]||c;return o?t.createElement(g,i(i({ref:n},u),{},{components:o})):t.createElement(g,i({ref:n},u))}));function d(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=o.length,i=new Array(c);i[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<c;l++)i[l]=o[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}f.displayName="MDXCreateElement"},56883:function(e,n,o){o.r(n),o.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var t=o(665),r=o(40151),c=(o(59496),o(49613)),i=["components"],a={sidebar_label:"Social connector",sidebar_position:3},s="Configure Social Connector",l={unversionedId:"docs/recipes/configure-connectors/social-connector/README",id:"docs/recipes/configure-connectors/social-connector/README",title:"Configure Social Connector",description:"Configuring social connectors allows users to easily sign in using their existing social media accounts, without entering a password or basic profile information. This can help increase the registration conversion rate for your website or app. At Logto, we're constantly improving our social connector's capabilities to support new platforms and enhance the user experience.",source:"@site/docs/docs/recipes/configure-connectors/social-connector/README.md",sourceDirName:"docs/recipes/configure-connectors/social-connector",slug:"/docs/recipes/configure-connectors/social-connector/",permalink:"/next/docs/recipes/configure-connectors/social-connector/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/configure-connectors/social-connector/README.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Social connector",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Enable SMS sign-in",permalink:"/next/docs/recipes/configure-connectors/sms-connector/enable-SMS-sign-in"},next:{title:"Configure popular social connector",permalink:"/next/docs/recipes/configure-connectors/social-connector/configure-popular-social-connector"}},u={},p=[{value:"<strong>Related Readings</strong>",id:"related-readings",level:2}],f={toc:p};function d(e){var n=e.components,o=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,t.Z)({},f,o,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"configure-social-connector"},"Configure Social Connector"),(0,c.kt)("p",null,"Configuring social connectors allows users to easily sign in using their existing social media accounts, without entering a password or basic profile information. This can help increase the registration conversion rate for your website or app. At Logto, we're constantly improving our social connector's capabilities to support new platforms and enhance the user experience."),(0,c.kt)("p",null,"Logto offers two types of social connectors:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"Common Social Connectors"),": Google, Apple, Facebook, GitHub, Discord, Wechat, Alipay, Kakao, Naver, Azure Active Directory."),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("strong",{parentName:"li"},"Standard Connectors"),": OIDC, OAuth 2.0, SAML.")),(0,c.kt)("admonition",{type:"tip"},(0,c.kt)("p",{parentName:"admonition"},"If the social connector you need isn't among our Common Social Connectors, you can create your own using the Standard Connector protocol. Check out our \u201c",(0,c.kt)("a",{parentName:"p",href:"/next/docs/recipes/configure-connectors/social-connector/custom-social-connector-with-standard-protocols"},"Custom Social Connector with Standard Protocol"),"\u201d guide to learn more.\nIf the Standard Connector still doesn't meet your needs, don't hesitate to contact us. For those using the Logto Open-Source Version, you can even ",(0,c.kt)("a",{parentName:"p",href:"/next/docs/recipes/configure-connectors/create-your-connector/"},"Write your connector (OSS)"),".")),(0,c.kt)("h2",{id:"related-readings"},(0,c.kt)("strong",{parentName:"h2"},"Related Readings")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"See ",(0,c.kt)("a",{parentName:"li",href:"/next/docs/recipes/customize-sie/configure-sign-in-methods"},"Configure sign-in method")," by adding connectors to bring your social connector into use.")))}d.isMDXComponent=!0}}]);