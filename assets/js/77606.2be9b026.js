"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[77606],{97031:(e,t,s)=>{s.d(t,{Z:()=>n});s(50959);var a=s(20619),r=s(11527);function n(e){let{children:t,fallback:s}=e;return(0,a.Z)()?(0,r.jsx)(r.Fragment,{children:t?.()}):s??null}},66074:(e,t,s)=>{s.d(t,{Z:()=>p});var a=s(50959),r=s(5341),n=s(52526),l=s(13213),i=s(45142),o=s(77803),c=s(28903),m=s(32919);function d(e){const{pathname:t}=(0,c.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Mg)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_k9Yb",sidebarItemTitle:"sidebarItemTitle_BKIc",sidebarItemList:"sidebarItemList_ld5A",sidebarItem:"sidebarItem__cwm",sidebarItemLink:"sidebarItemLink_uo0p",sidebarItemLinkActive:"sidebarItemLinkActive_waif"};var h=s(11527);function g(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,r.Z)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,r.Z)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,r.Z)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(i.Z,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var x=s(12894);function f(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function b(e){return(0,h.jsx)(x.Zo,{component:f,props:e})}function j(e){let{sidebar:t}=e;const s=(0,l.i)();return t?.items.length?"mobile"===s?(0,h.jsx)(b,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function p(e){const{sidebar:t,toc:s,children:a,...l}=e,i=t&&t.items.length>0;return(0,h.jsx)(n.Z,{...l,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(j,{sidebar:t}),(0,h.jsx)("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),children:a}),s&&(0,h.jsx)("div",{className:"col col--2",children:s})]})})})}},45465:(e,t,s)=>{s.d(t,{Z:()=>L});s(50959);var a=s(5341),r=s(72399),n=s(11527);function l(e){let{children:t,className:s}=e;return(0,n.jsx)("article",{className:s,children:t})}var i=s(75580),o=s(77803),c=s(97056),m=s(24592);const d={container:"container_lx2K"};function u(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,c.c)();return t=>{const s=Math.ceil(t);return e(s,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,n.jsx)(n.Fragment,{children:s(t)})}function h(e){let{date:t,formattedDate:s}=e;return(0,n.jsx)("time",{dateTime:t,children:s})}function g(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function x(e){let{className:t}=e;const{metadata:s}=(0,r.C)(),{date:l,readingTime:i}=s,o=(0,m.P)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,n.jsxs)("div",{className:(0,a.Z)(d.container,"margin-vert--md",t),children:[(0,n.jsx)(h,{date:l,formattedDate:(c=l,o.format(new Date(c)))}),void 0!==i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g,{}),(0,n.jsx)(u,{readingTime:i})]})]});var c}var f=s(45142);function b(e){return e.href?(0,n.jsx)(f.Z,{...e}):(0,n.jsx)(n.Fragment,{children:e.children})}function j(e){let{author:t,className:s}=e;const{name:r,title:l,url:i,imageURL:o,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return(0,n.jsxs)("div",{className:(0,a.Z)("avatar margin-bottom--sm",s),children:[o&&(0,n.jsx)(b,{href:m,className:"avatar__photo-link",children:(0,n.jsx)("img",{className:"avatar__photo",src:o,alt:r})}),r&&(0,n.jsxs)("div",{className:"avatar__intro",children:[(0,n.jsx)("div",{className:"avatar__name",children:(0,n.jsx)(b,{href:m,children:(0,n.jsx)("span",{children:r})})}),l&&(0,n.jsx)("small",{className:"avatar__subtitle",children:l})]})]})}const p={authorCol:"authorCol_SRtk",imageOnlyAuthorRow:"imageOnlyAuthorRow_IHb4",imageOnlyAuthorCol:"imageOnlyAuthorCol_ocfA"};function v(e){let{className:t}=e;const{metadata:{authors:s},assets:l}=(0,r.C)();if(0===s.length)return null;const i=s.every((e=>{let{name:t}=e;return!t}));return(0,n.jsx)("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",i?p.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>(0,n.jsx)("div",{className:(0,a.Z)(!i&&"col col--6",i?p.imageOnlyAuthorCol:p.authorCol),children:(0,n.jsx)(j,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)(x,{}),(0,n.jsx)(v,{})]})}var _=s(13456),Z=s(93867);function k(e){let{children:t,className:s}=e;const{isBlogPostPage:l}=(0,r.C)();return(0,n.jsx)("div",{id:l?_.blogPostContainerID:void 0,className:(0,a.Z)("markdown",s),children:(0,n.jsx)(Z.Z,{children:t})})}var I=s(479),w=s(16281),P=s(21461);function C(){return(0,n.jsx)("b",{children:(0,n.jsx)(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function T(e){const{blogPostTitle:t,...s}=e;return(0,n.jsx)(f.Z,{"aria-label":(0,o.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,n.jsx)(C,{})})}function A(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:s,title:l,editUrl:i,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:m}=e,d=!t&&o,u=s.length>0;if(!(u||d||i))return null;if(t){const e=!!(i||m||c);return(0,n.jsxs)("footer",{className:"docusaurus-mt-lg",children:[u&&(0,n.jsx)("div",{className:(0,a.Z)("row","margin-top--sm",I.k.blog.blogFooterEditMetaRow),children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)(P.Z,{tags:s})})}),e&&(0,n.jsx)(w.Z,{className:(0,a.Z)("margin-top--sm",I.k.blog.blogFooterEditMetaRow),editUrl:i,lastUpdatedAt:m,lastUpdatedBy:c})]})}return(0,n.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[u&&(0,n.jsx)("div",{className:(0,a.Z)("col",{"col--9":d}),children:(0,n.jsx)(P.Z,{tags:s})}),d&&(0,n.jsx)("div",{className:(0,a.Z)("col text--right",{"col--3":u}),children:(0,n.jsx)(T,{blogPostTitle:l,to:e.permalink})})]})}function L(e){let{children:t,className:s}=e;const i=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsxs)(l,{className:(0,a.Z)(i,s),children:[(0,n.jsx)(N,{}),(0,n.jsx)(k,{children:t}),(0,n.jsx)(A,{})]})}},72399:(e,t,s)=>{s.d(t,{C:()=>o,n:()=>i});var a=s(50959),r=s(30765),n=s(11527);const l=a.createContext(null);function i(e){let{children:t,content:s,isBlogPostPage:r=!1}=e;const i=function(e){let{content:t,isBlogPostPage:s}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:r});return(0,n.jsx)(l.Provider,{value:i,children:t})}function o(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("BlogPostProvider");return e}},97056:(e,t,s)=>{s.d(t,{c:()=>c});var a=s(50959),r=s(68104);const n=["zero","one","two","few","many","other"];function l(e){return n.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const a=e.split("|");if(1===a.length)return a[0];a.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const r=s.select(t),n=s.pluralForms.indexOf(r);return a[Math.min(n,a.length-1)]}(s,t,e)}}}}]);