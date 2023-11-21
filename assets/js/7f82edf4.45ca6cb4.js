"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[29774],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},53822:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var r=t(665),o=t(40151),a=(t(59496),t(49613)),i=["components"],s={sidebar_label:"Management API",sidebar_position:2},c="Manage webhooks using Management API",p={unversionedId:"docs/recipes/webhooks/management-api",id:"version-1.x/docs/recipes/webhooks/management-api",title:"Manage webhooks using Management API",description:"Added in v1.5.0",source:"@site/versioned_docs/version-1.x/docs/recipes/webhooks/management-api.md",sourceDirName:"docs/recipes/webhooks",slug:"/docs/recipes/webhooks/management-api",permalink:"/docs/recipes/webhooks/management-api",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/webhooks/management-api.md",tags:[],version:"1.x",sidebarPosition:2,frontMatter:{sidebar_label:"Management API",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Configure Webhooks in Console",permalink:"/docs/recipes/webhooks/configure-webhooks-in-console"},next:{title:"Webhook Request",permalink:"/docs/recipes/webhooks/webhook-request"}},u={},l=[],m={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"manage-webhooks-using-management-api"},"Manage webhooks using Management API"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Added in v1.5.0")),(0,a.kt)("p",null,"Logto supports managing web hooks via Management API. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/interact-with-management-api/"},"\ud83d\ude9d Interact with Management API")," for detailed instructions."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/docs/references/core/#authentication"},(0,a.kt)("strong",{parentName:"a"},"Authentication"))," is REQUIRED when you're calling Management API.")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://openapi.logto.io/group/endpoint-hooks"},"API references")," for all the available APIs."))}d.isMDXComponent=!0}}]);