"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[9514,1464],{38861:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ze}});var a=t(59496),i=t(45924),r=t(71666),o=t(86238),s=t(87055),l=t(80474),c=t(15138),d=t(88656),u=t(67384),m=t(1043),h=t(75831),b=t(29967);var p="backToTopButton_dibI",v="backToTopButtonShow_x3Np",x=t(4637);function f(){var e=function(e){var n=e.threshold,t=(0,a.useState)(!1),i=t[0],r=t[1],o=(0,a.useRef)(!1),s=(0,h.Ct)(),l=s.startScroll,c=s.cancelScroll;return(0,h.RF)((function(e,t){var a=e.scrollY,i=null==t?void 0:t.scrollY;i&&(o.current?o.current=!1:a>=i?(c(),r(!1)):a<n?r(!1):a+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,b.S)((function(e){e.location.hash&&(o.current=!0,r(!1))})),{shown:i,scrollToTop:function(){return l(0)}}}({threshold:300}),n=e.shown,t=e.scrollToTop;return(0,x.jsx)("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",o.k.common.backToTopButton,p,n&&v),type:"button",onClick:t})}var j=t(43226),g=t(35600),_=t(33586),C=t(23796);function k(e){return(0,x.jsx)("svg",Object.assign({width:"20",height:"20","aria-hidden":"true"},e,{children:(0,x.jsxs)("g",{fill:"#7a7a7a",children:[(0,x.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,x.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))}var I="collapseSidebarButton_Z5zE",S="collapseSidebarButtonIcon_Ltra";function N(e){var n=e.onClick;return(0,x.jsx)("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",I),onClick:n,children:(0,x.jsx)(k,{className:S})})}var Z=t(5826),T=t(40151),y=t(2640),w=Symbol("EmptyContext"),L=a.createContext(w);function A(e){var n=e.children,t=(0,a.useState)(null),i=t[0],r=t[1],o=(0,a.useMemo)((function(){return{expandedItem:i,setExpandedItem:r}}),[i]);return(0,x.jsx)(L.Provider,{value:o,children:n})}var E=t(32831),F=t(56279),M=t(60955),B=t(75836),P=["item","onItemClick","activePath","level","index"];function H(e){var n=e.categoryLabel,t=e.onClick;return(0,x.jsx)("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:t})}function O(e){var n=e.item,t=e.onItemClick,r=e.activePath,s=e.level,c=e.index,d=(0,T.Z)(e,P),u=n.items,m=n.label,h=n.collapsible,b=n.className,p=n.href,v=(0,_.L)().docs.sidebar.autoCollapseCategories,f=function(e){var n=(0,B.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!n&&e.collapsible?(0,l.Wl)(e):void 0}),[e,n])}(n),j=(0,l._F)(n,r),g=(0,F.Mg)(p,r),C=(0,E.u)({initialState:function(){return!!h&&(!j&&n.collapsed)}}),k=C.collapsed,I=C.setCollapsed,S=function(){var e=(0,a.useContext)(L);if(e===w)throw new y.i6("DocSidebarItemsExpandedStateProvider");return e}(),N=S.expandedItem,Z=S.setExpandedItem,A=function(e){void 0===e&&(e=!k),Z(e?null:c),I(e)};return function(e){var n=e.isActive,t=e.collapsed,i=e.updateCollapsed,r=(0,y.D9)(n);(0,a.useEffect)((function(){n&&!r&&t&&i(!1)}),[n,r,t,i])}({isActive:j,collapsed:k,updateCollapsed:A}),(0,a.useEffect)((function(){h&&null!=N&&N!==c&&v&&I(!0)}),[h,N,c,I,v]),(0,x.jsxs)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(s),"menu__list-item",{"menu__list-item--collapsed":k},b),children:[(0,x.jsxs)("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g}),children:[(0,x.jsx)(M.Z,Object.assign({className:(0,i.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!p&&h,"menu__link--active":j}),onClick:h?function(e){null==t||t(n),p?A(!1):(e.preventDefault(),A())}:function(){null==t||t(n)},"aria-current":g?"page":void 0,"aria-expanded":h?!k:void 0,href:h?null!=f?f:"#":f},d,{children:m})),p&&h&&(0,x.jsx)(H,{categoryLabel:m,onClick:function(e){e.preventDefault(),A()}})]}),(0,x.jsx)(E.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k,children:(0,x.jsx)(Q,{items:u,tabIndex:k?-1:0,onItemClick:t,activePath:r,level:s+1})})]})}var W=t(83485),D=t(87141),R="menuExternalLink_WVuy",V=["item","onItemClick","activePath","level","index"];function z(e){var n=e.item,t=e.onItemClick,a=e.activePath,r=e.level,s=(e.index,(0,T.Z)(e,V)),c=n.href,d=n.label,u=n.className,m=n.autoAddBaseUrl,h=(0,l._F)(n,a),b=(0,W.Z)(c);return(0,x.jsx)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(r),"menu__list-item",u),children:(0,x.jsxs)(M.Z,Object.assign({className:(0,i.Z)("menu__link",!b&&R,{"menu__link--active":h}),autoAddBaseUrl:m,"aria-current":h?"page":void 0,to:c},b&&{onClick:t?function(){return t(n)}:void 0},s,{children:[d,!b&&(0,x.jsx)(D.Z,{})]}))},d)}var U="menuHtmlItem_gh3k";function K(e){var n=e.item,t=e.level,a=e.index,r=n.value,s=n.defaultStyle,l=n.className;return(0,x.jsx)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(t),s&&[U,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:r}},a)}var Y=["item"];function q(e){var n=e.item,t=(0,T.Z)(e,Y);switch(n.type){case"category":return(0,x.jsx)(O,Object.assign({item:n},t));case"html":return(0,x.jsx)(K,Object.assign({item:n},t));default:return(0,x.jsx)(z,Object.assign({item:n},t))}}var J=["items"];function G(e){var n=e.items,t=(0,T.Z)(e,J);return(0,x.jsx)(A,{children:n.map((function(e,n){return(0,x.jsx)(q,Object.assign({item:e,index:n},t),n)}))})}var Q=(0,a.memo)(G),X="menu_vuXf",$="menuWithAnnouncementBar_JjCg";function ee(e){var n=e.path,t=e.sidebar,r=e.className,s=function(){var e=(0,Z.nT)().isActive,n=(0,a.useState)(e),t=n[0],i=n[1];return(0,h.RF)((function(n){var t=n.scrollY;e&&i(0===t)}),[e]),e&&t}();return(0,x.jsx)("nav",{"aria-label":(0,m.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.Z)("menu thin-scrollbar",X,s&&$,r),children:(0,x.jsx)("ul",{className:(0,i.Z)(o.k.docs.docSidebarMenu,"menu__list"),children:(0,x.jsx)(Q,{items:t,activePath:n,level:1})})})}var ne="sidebar_Jyb8",te="sidebarWithHideableNavbar__p5K",ae="sidebarHidden_tk8n",ie="sidebarLogo_am5x";function re(e){var n=e.path,t=e.sidebar,a=e.onCollapse,r=e.isHidden,o=(0,_.L)(),s=o.navbar.hideOnScroll,l=o.docs.sidebar.hideable;return(0,x.jsxs)("div",{className:(0,i.Z)(ne,s&&te,r&&ae),children:[s&&(0,x.jsx)(C.Z,{tabIndex:-1,className:ie}),(0,x.jsx)(ee,{path:n,sidebar:t}),l&&(0,x.jsx)(N,{onClick:a})]})}var oe=a.memo(re),se=t(63752),le=t(49590),ce=function(e){var n=e.sidebar,t=e.path,a=(0,le.e)();return(0,x.jsx)("ul",{className:(0,i.Z)(o.k.docs.docSidebarMenu,"menu__list"),children:(0,x.jsx)(Q,{items:n,activePath:t,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function de(e){return(0,x.jsx)(se.Zo,{component:ce,props:e})}var ue=a.memo(de);function me(e){var n=(0,g.i)(),t="desktop"===n||"ssr"===n,a="mobile"===n;return(0,x.jsxs)(x.Fragment,{children:[t&&(0,x.jsx)(oe,Object.assign({},e)),a&&(0,x.jsx)(ue,Object.assign({},e))]})}var he="expandButton_FM7m",be="expandButtonIcon_znMu";function pe(e){var n=e.toggleSidebar;return(0,x.jsx)("div",{className:he,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:n,onClick:n,children:(0,x.jsx)(k,{className:be})})}var ve={docSidebarContainer:"docSidebarContainer_Kz1U",docSidebarContainerHidden:"docSidebarContainerHidden_Fe6Z",sidebarViewport:"sidebarViewport_Tyml"};function xe(e){var n,t=e.children,i=(0,d.V)();return(0,x.jsx)(a.Fragment,{children:t},null!=(n=null==i?void 0:i.name)?n:"noSidebar")}function fe(e){var n=e.sidebar,t=e.hiddenSidebarContainer,r=e.setHiddenSidebarContainer,s=(0,j.TH)().pathname,l=(0,a.useState)(!1),c=l[0],d=l[1],u=(0,a.useCallback)((function(){c&&d(!1),r((function(e){return!e}))}),[r,c]);return(0,x.jsx)("aside",{className:(0,i.Z)(o.k.docs.docSidebarContainer,ve.docSidebarContainer,t&&ve.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(ve.docSidebarContainer)&&t&&d(!0)},children:(0,x.jsx)(xe,{children:(0,x.jsxs)("div",{className:(0,i.Z)(ve.sidebarViewport,c&&ve.sidebarViewportHidden),children:[(0,x.jsx)(me,{sidebar:n,path:s,onCollapse:u,isHidden:c}),c&&(0,x.jsx)(pe,{toggleSidebar:u})]})})})}var je={docMainContainer:"docMainContainer_ZfTo",docMainContainerEnhanced:"docMainContainerEnhanced_C9WQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_xBFD"};function ge(e){var n=e.hiddenSidebarContainer,t=e.children,a=(0,d.V)();return(0,x.jsx)("main",{className:(0,i.Z)(je.docMainContainer,(n||!a)&&je.docMainContainerEnhanced),children:(0,x.jsx)("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",je.docItemWrapper,n&&je.docItemWrapperEnhanced),children:t})})}var _e="docPage_8CL6",Ce="docsWrapper_sO05";function ke(e){var n=e.children,t=(0,d.V)(),i=(0,a.useState)(!1),r=i[0],o=i[1];return(0,x.jsxs)(u.Z,{wrapperClassName:Ce,children:[(0,x.jsx)(f,{}),(0,x.jsxs)("div",{className:_e,children:[t&&(0,x.jsx)(fe,{sidebar:t.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:o}),(0,x.jsx)(ge,{hiddenSidebarContainer:r,children:n})]})]})}var Ie=t(11464),Se=t(91229);function Ne(e){var n=e.versionMetadata;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Se.Z,{version:n.version,tag:(0,s.os)(n.pluginId,n.version)}),(0,x.jsx)(r.d,{children:n.noIndex&&(0,x.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})]})}function Ze(e){var n=e.versionMetadata,t=(0,l.hI)(e);if(!t)return(0,x.jsx)(Ie.default,{});var a=t.docElement,s=t.sidebarName,u=t.sidebarItems;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Ne,Object.assign({},e)),(0,x.jsx)(r.FG,{className:(0,i.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className),children:(0,x.jsx)(c.q,{version:n,children:(0,x.jsx)(d.b,{name:s,items:u,children:(0,x.jsx)(ke,{children:a})})})})]})}},11464:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});t(59496);var a=t(1043),i=t(71666),r=t(67384),o=t(4637);function s(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.d,{title:(0,a.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),(0,o.jsx)(r.Z,{children:(0,o.jsx)("main",{className:"container margin-vert--xl",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,o.jsx)("h1",{className:"hero__title",children:(0,o.jsx)(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,o.jsx)("p",{children:(0,o.jsx)(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,o.jsx)("p",{children:(0,o.jsx)(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})})]})}},15138:function(e,n,t){t.d(n,{E:function(){return l},q:function(){return s}});var a=t(59496),i=t(2640),r=t(4637),o=a.createContext(null);function s(e){var n=e.children,t=e.version;return(0,r.jsx)(o.Provider,{value:t,children:n})}function l(){var e=(0,a.useContext)(o);if(null===e)throw new i.i6("DocsVersionProvider");return e}}}]);