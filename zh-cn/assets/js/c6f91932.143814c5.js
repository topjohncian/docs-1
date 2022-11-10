"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[8892],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84546:function(e,t,n){n.d(t,{Z:function(){return l}});n(59496);var r=n(45924),o="tabItem_wG3F",a=n(4637);function l(e){var t=e.children,n=e.hidden,l=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n,children:t})}},84568:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(59496),o=n(45924),a=n(19991),l=n(97829),i=n(80721),s=n(46739),u="tabList_gma_",c="tabItem_KB2d",p=n(4637);function d(e){var t,n,a=e.lazy,d=e.block,m=e.defaultValue,f=e.values,g=e.groupId,b=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,l.l)(h,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:v[0].props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),O=w.tabGroupChoices,T=w.setTabGroupChoices,x=(0,r.useState)(k),N=x[0],j=x[1],I=[],C=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var E=O[g];null!=E&&E!==N&&h.some((function(e){return e.value===E}))&&j(E)}var L=function(e){var t=e.currentTarget,n=I.indexOf(t),r=h[n].value;r!==N&&(C(t),j(r),null!=g&&T(g,String(r)))},P=function(e){var t,n=null;switch(e.key){case"Enter":L(e);break;case"ArrowRight":var r,o=I.indexOf(e.currentTarget)+1;n=null!=(r=I[o])?r:I[0];break;case"ArrowLeft":var a,l=I.indexOf(e.currentTarget)-1;n=null!=(a=I[l])?a:I[I.length-1]}null==(t=n)||t.focus()};return(0,p.jsxs)("div",{className:(0,o.Z)("tabs-container",u),children:[(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b),children:h.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,p.jsx)("li",Object.assign({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,ref:function(e){return I.push(e)},onKeyDown:P,onClick:L},r,{className:(0,o.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":N===t}),children:null!=n?n:t}),t)}))}),a?(0,r.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-top--md"}):(0,p.jsx)("div",{className:"margin-top--md",children:v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))})]})}function m(e){var t=(0,a.Z)();return(0,p.jsx)(d,Object.assign({},e),String(t))}},16070:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),l=n(84546),i=n(84568),s=["components"],u={sidebar_position:1},c="Install Logto",p={unversionedId:"docs/tutorials/using-cli/install-logto",id:"docs/tutorials/using-cli/install-logto",title:"Install Logto",description:"Interactive",source:"@site/docs/docs/tutorials/using-cli/install-logto.mdx",sourceDirName:"docs/tutorials/using-cli",slug:"/docs/tutorials/using-cli/install-logto",permalink:"/zh-cn/docs/tutorials/using-cli/install-logto",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/using-cli/install-logto.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83d\udda5 Using Logto CLI",permalink:"/zh-cn/docs/tutorials/using-cli/"},next:{title:"Manage connectors",permalink:"/zh-cn/docs/tutorials/using-cli/manage-connectors"}},d={},m=[{value:"Interactive",id:"interactive",level:2},{value:"Options and silent installation",id:"options-and-silent-installation",level:2}],f={toc:m};function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-logto"},"Install Logto"),(0,a.kt)("h2",{id:"interactive"},"Interactive"),(0,a.kt)("p",null,"Run the command below to proceed an interactive installation in your terminal:"),(0,a.kt)(i.Z,{groupId:"cmd",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"logto init\n"))),(0,a.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm init @logto\n")))),(0,a.kt)("h2",{id:"options-and-silent-installation"},"Options and silent installation"),(0,a.kt)("p",null,"Alternatively, you can add the options below to skip some questions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# All these options are optional\n--db-url      The Postgres URL to Logto database\n-p, --path    Path to your Logto instance, must be a non-existing path\n--ss          Skip Logto database seeding\n--oc          Add official connectors after installation\n")),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"logto init --help")," for full help info."),(0,a.kt)("p",null,"Here's an example for performing a silent installation (e.g., in CI):"),(0,a.kt)(i.Z,{groupId:"cmd",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"logto init -p ./logto --db-url postgresql://your-postgres-dsn:5432/logto --oc\n"))),(0,a.kt)(l.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli init -p ./logto --db-url postgresql://your-postgres-dsn:5432/logto --oc\n")))),(0,a.kt)("p",null,"It will do the following things in order:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download and extract Logto into ",(0,a.kt)("inlineCode",{parentName:"li"},"./logto")),(0,a.kt)("li",{parentName:"ol"},"Try to init and seed database with URL ",(0,a.kt)("inlineCode",{parentName:"li"},"postgresql://your-postgres-dsn:5432/logto")),(0,a.kt)("li",{parentName:"ol"},"Add Logto official connectors to ",(0,a.kt)("inlineCode",{parentName:"li"},"./logto/packages/core/connectors"))))}g.isMDXComponent=!0}}]);