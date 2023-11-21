"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[96289],{49613:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var o=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=o.createContext({}),u=function(e){var n=o.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return o.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(t),f=r,d=m["".concat(a,".").concat(f)]||m[f]||p[f]||c;return t?o.createElement(d,i(i({ref:n},l),{},{components:t})):o.createElement(d,i({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,i=new Array(c);i[0]=m;var s={};for(var a in n)hasOwnProperty.call(n,a)&&(s[a]=n[a]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<c;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},37218:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var o=t(665),r=t(40151),c=(t(59496),t(49613)),i=["components"],s={sidebar_label:"SMS connector",sidebar_position:2},a="Configure SMS Connector",u={unversionedId:"docs/recipes/configure-connectors/sms-connector/README",id:"docs/recipes/configure-connectors/sms-connector/README",title:"Configure SMS Connector",description:"Configuring an SMS connector allows you to send a one-time password (OTP) to the user's phone number. This passwordless authentication mechanism can be utilized in various scenarios, including sign-up, sign-in, forgot password, and link-account processes, to validate the user's identity. It streamlines user authentication and enhances security by minimizing the risk of password-related breaches.",source:"@site/docs/docs/recipes/configure-connectors/sms-connector/README.md",sourceDirName:"docs/recipes/configure-connectors/sms-connector",slug:"/docs/recipes/configure-connectors/sms-connector/",permalink:"/next/docs/recipes/configure-connectors/sms-connector/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/configure-connectors/sms-connector/README.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"SMS connector",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Enable email sign-in",permalink:"/next/docs/recipes/configure-connectors/email-connector/enable-email-sign-in"},next:{title:"Configure SMS service",permalink:"/next/docs/recipes/configure-connectors/sms-connector/configure-sms-connector"}},l={},p=[],m={toc:p};function f(e){var n=e.components,t=(0,r.Z)(e,i);return(0,c.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"configure-sms-connector"},"Configure SMS Connector"),(0,c.kt)("p",null,"Configuring an SMS connector allows you to send a one-time password (OTP) to the user's phone number. This passwordless authentication mechanism can be utilized in various scenarios, including sign-up, sign-in, forgot password, and link-account processes, to validate the user's identity. It streamlines user authentication and enhances security by minimizing the risk of password-related breaches."),(0,c.kt)("p",null,"Logto has some built-in SMS connectors which allow out-of-box usage:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-twilio-sms"},"Twilio SMS")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-aliyun-sms"},"Aliyun SMS")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-tencent-sms"},"Tencent SMS")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-smsaero"},"SMS Aero service"))),(0,c.kt)("admonition",{type:"tip"},(0,c.kt)("p",{parentName:"admonition"},"We're still working on more connectors! But If you don't see the connector you want, just let us know your needs in Discord or file a Feature Request on GitHub.\nFor those using the Logto Open-Source Version, we offer the flexibility to ",(0,c.kt)("a",{parentName:"p",href:"/next/docs/recipes/configure-connectors/create-your-connector/"},"create your own connector")," to extend.")))}f.isMDXComponent=!0}}]);