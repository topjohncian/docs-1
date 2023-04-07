"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[40706],{49613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||c;return n?o.createElement(m,i(i({ref:t},l),{},{components:n})):o.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59332:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var o=n(665),r=n(40151),c=(n(59496),n(49613)),i=["components"],a={sidebar_position:4},s="\ud83e\ude9b Configure connectors",u={unversionedId:"docs/recipes/configure-connectors/README",id:"docs/recipes/configure-connectors/README",title:"\ud83e\ude9b Configure connectors",description:"Connectors are the bridge between Logto and other third-party vendors who provide short message service (SMS), email service, or user information on wildly accepted social media.",source:"@site/docs/docs/recipes/configure-connectors/README.md",sourceDirName:"docs/recipes/configure-connectors",slug:"/docs/recipes/configure-connectors/",permalink:"/next/docs/recipes/configure-connectors/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/configure-connectors/README.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Localized language",permalink:"/next/docs/recipes/customize-sie/localized-language"},next:{title:"Configure SMS connector",permalink:"/next/docs/recipes/configure-connectors/configure-sms-connector"}},l={},p=[{value:"\u231a Kick-off \u26a1",id:"-kick-off-",level:2}],d={toc:p};function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"-configure-connectors"},"\ud83e\ude9b Configure connectors"),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"Connectors")," are the bridge between Logto and other third-party vendors who provide short message service (SMS), email service, or user information on wildly accepted social media."),(0,c.kt)("p",null,"Logto provides you with many connectors to give end-users access to third-party providers. Such as Google, GitHub, Facebook, SendGrid mail, etc."),(0,c.kt)("p",null,"You may feel lost when using connectors as this is a brand new concept. \ud83d\ude2d"),(0,c.kt)("p",null,"Don't worry. This doc will show you an easy way to have things done!"),(0,c.kt)("h2",{id:"-kick-off-"},"\u231a Kick-off \u26a1"),(0,c.kt)("p",null,'Let\'s start from Console. Click the "Connectors" button in the left navigation bar. If you use the Open-source Version, sign in with your Logto account ("admin" role needed), and you may ',(0,c.kt)("a",{parentName:"p",href:"/next/docs/tutorials/get-started/#create-an-admin-account"},"create an admin account")," if you don't have one."),(0,c.kt)("p",null,'Click the "Connectors" button on the sidebar \ud83d\ude10'),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"Configure connectors - Kick-off",src:n(17539).Z,width:"4296",height:"1606"})),(0,c.kt)("p",null,"\ud83d\udc7b ",(0,c.kt)("strong",{parentName:"p"},"Welcome to the world of ",(0,c.kt)("em",{parentName:"strong"},"connectors"))," \ud83d\udc7b"),(0,c.kt)("p",null,"This is where you can add, delete or update connectors' configurations as you wish!"),(0,c.kt)("p",null,"Before we dive in, let's make sure you have all the necessary connectors installed. Don't worry if you're not sure what to do - we're here to help! Just refer to the ",(0,c.kt)("a",{parentName:"p",href:"../create-your-connector/connector-implementation-guide#install-your-own-connectors"},"guide")," for instructions, and you'll be ready to get started in no time."),(0,c.kt)("p",null,(0,c.kt)("em",{parentName:"p"},"Connectors")," can be classified into three types: ",(0,c.kt)("em",{parentName:"p"},"SMS Connector"),", ",(0,c.kt)("em",{parentName:"p"},"Email Connector")," and ",(0,c.kt)("em",{parentName:"p"},"Social Connector"),". See ",(0,c.kt)("a",{parentName:"p",href:"/next/docs/references/connectors/"},"connector reference")," for more details about connector type."),(0,c.kt)("p",null,"You can continue setting up ",(0,c.kt)("em",{parentName:"p"},"Email connector")," or ",(0,c.kt)("em",{parentName:"p"},"SMS connector"),', and you need to go to "Social connectors" tab before adding ',(0,c.kt)("em",{parentName:"p"},"Social connector"),"."),(0,c.kt)("p",null,"Move on to detailed connector setup tips for different connector types' configuration."))}f.isMDXComponent=!0},17539:function(e,t,n){t.Z=n.p+"assets/images/configure-connectors-kick-off-1d6ebc6d4a5207492d3f2ea5a2afa16f.png"}}]);