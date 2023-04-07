"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[80436],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),p=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(u,".").concat(m)]||c[m]||s[m]||r;return n?o.createElement(g,i(i({ref:t},d),{},{components:n})):o.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64988:function(e,t,n){n.d(t,{Z:function(){return i}});n(59496);var o=n(45924),a="tabItem_H_V3",r=n(4637);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n,children:t})}},88442:function(e,t,n){n.d(t,{Z:function(){return C}});var o=n(59496),a=n(45924),r=n(43226),i=n(26777),l=n(36537),u=n(50419);function p(e){return function(e){var t,n;return null!=(t=null==(n=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function s(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function c(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,r.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:a});return[(0,i._X)(u),(0,o.useCallback)((function(e){if(u){var t=new URLSearchParams(l.location.search);t.set(u,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[u,l])]}function m(e){var t,n,a,r,i=e.defaultValue,l=e.queryString,p=void 0!==l&&l,m=e.groupId,g=d(e),k=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!s({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:g})})),f=k[0],y=k[1],h=c({queryString:p,groupId:m}),v=h[0],b=h[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),n=(0,u.Nk)(t),a=n[0],r=n[1],[a,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),C=N[0],T=N[1],x=function(){var e=null!=v?v:C;return s({value:e,tabValues:g})?e:null}();return(0,o.useLayoutEffect)((function(){x&&y(x)}),[x]),{selectedValue:f,selectValue:(0,o.useCallback)((function(e){if(!s({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);y(e),b(e),T(e)}),[b,T,g]),tabValues:g}}var g=n(13175),k=n(944),f="tabList_c3R8",y="tabItem_V_Qz",h=n(4637);function v(e){var t=e.className,n=e.block,o=e.selectedValue,r=e.selectValue,i=e.tabValues,l=[],u=(0,g.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==o&&(u(t),r(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var o,a=l.indexOf(e.currentTarget)+1;n=null!=(o=l[a])?o:l[0];break;case"ArrowLeft":var r,i=l.indexOf(e.currentTarget)-1;n=null!=(r=l[i])?r:l[l.length-1]}null==(t=n)||t.focus()};return(0,h.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,h.jsx)("li",Object.assign({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:p},r,{className:(0,a.Z)("tabs__item",y,null==r?void 0:r.className,{"tabs__item--active":o===t}),children:null!=n?n:t}),t)}))})}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=r.find((function(e){return e.props.value===a}));return i?(0,o.cloneElement)(i,{className:"margin-top--md"}):null}return(0,h.jsx)("div",{className:"margin-top--md",children:r.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function N(e){var t=m(e);return(0,h.jsxs)("div",{className:(0,a.Z)("tabs-container",f),children:[(0,h.jsx)(v,Object.assign({},e,t)),(0,h.jsx)(b,Object.assign({},e,t))]})}function C(e){var t=(0,k.Z)();return(0,h.jsx)(N,Object.assign({},e),String(t))}},85511:function(e,t,n){n.r(t),n.d(t,{assets:function(){return Z},contentTitle:function(){return x},default:function(){return L},frontMatter:function(){return T},metadata:function(){return w},toc:function(){return I}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(64988),l=n(88442),u=n(55414),p=n(8704),d=n(41974),s=n(2790),c=n(67820),m=n(11934),g=n(90218),k=n(33607),f=n(50020),y=n(97807),h=["components"],v={toc:[]};function b(e){var t=e.components,n=(0,a.Z)(e,h);return(0,r.kt)("wrapper",(0,o.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Calling ",(0,r.kt)("inlineCode",{parentName:"p"},".signOut(completion)")," will always clear local credentials even if errors occurred."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"logtoClient.signOut { logtoException: LogtoException? ->\n    // Local credentials are cleared regardless of whether `logtoException` is null.\n}\n"))),(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"logtoClient.signOut(logtoException -> {\n    // Local credentials are cleared regardless of whether `logtoException` is null.\n});\n")))))}b.isMDXComponent=!0;var N=n(27202),C=["components"],T={sidebar_label:"Android"},x="Android: Integrate Logto Android SDK",w={unversionedId:"docs/recipes/integrate-logto/android/README",id:"docs/recipes/integrate-logto/android/README",title:"Android: Integrate Logto Android SDK",description:"Add Logto SDK as a dependency",source:"@site/docs/docs/recipes/integrate-logto/android/README.mdx",sourceDirName:"docs/recipes/integrate-logto/android",slug:"/docs/recipes/integrate-logto/android/",permalink:"/next/docs/recipes/integrate-logto/android/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/integrate-logto/android/README.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Android"},sidebar:"docsSidebar",previous:{title:"\ud83d\udd17 Integrate Logto in your application",permalink:"/next/docs/recipes/integrate-logto/"},next:{title:"Express",permalink:"/next/docs/recipes/integrate-logto/express"}},Z={},I=[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:2},{value:"Init LogtoClient",id:"init-logtoclient",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},{value:"Sign in",id:"sign-in-1",level:3},{value:"Sign out",id:"sign-out",level:2},{value:"Fetch user information",id:"fetch-user-information",level:2},{value:"Backend API authorization",id:"backend-api-authorization",level:2},{value:"Further readings",id:"further-readings",level:2}],A={toc:I};function L(e){var t=e.components,n=(0,a.Z)(e,C);return(0,r.kt)("wrapper",(0,o.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"android-integrate-logto-android-sdk"},"Android: Integrate Logto Android SDK"),(0,r.kt)(p.ZP,{type:"Native App",mdxType:"AppNote"}),(0,r.kt)("h2",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,r.kt)(k.ZP,{mdxType:"AddSdk"}),(0,r.kt)("h2",{id:"init-logtoclient"},"Init LogtoClient"),(0,r.kt)(N.ZP,{mdxType:"InitClient"}),(0,r.kt)("h2",{id:"sign-in"},"Sign in"),(0,r.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,r.kt)(f.ZP,{mdxType:"ConfigAndroidRedirectUri"}),(0,r.kt)(s.ZP,{figureSrc:u.Z,redirectUri:"io.logto.android://io.logto.sample/callback",mdxType:"ConfigureRedirectUri"}),(0,r.kt)("h3",{id:"sign-in-1"},"Sign in"),(0,r.kt)(y.ZP,{mdxType:"ImplementSignIn"}),(0,r.kt)("h2",{id:"sign-out"},"Sign out"),(0,r.kt)(b,{mdxType:"ImplementSignOut"}),(0,r.kt)("h2",{id:"fetch-user-information"},"Fetch user information"),(0,r.kt)(c.ZP,{apiCodeFragment:"logtoClient.fetchUserInfo()",mdxType:"FetchUserInformation"}),(0,r.kt)("h2",{id:"backend-api-authorization"},"Backend API authorization"),(0,r.kt)(g.ZP,{mdxType:"GetAuthorizationToken"}),(0,r.kt)("p",null,"Add your API resource indicators to the Logto SDK configs."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// with all the required LogtoConfig listed above\n\noverride fun onCreate(savedInstanceState: Bundle?) {\n  val logtoConfig = LogtoConfig(\n    endpoint = "<your-logto-endpoint>",\n    appId = "<your-app-id>",\n    scopes = null,\n     // List all your API resources willing to access\n    resources = listOf("<your-resource-indicators>"),\n    usingPersistStorage = true,\n    prompt = PromptValue.CONSENT,\n  )\n\n  logtoClient = LogtoClient(logtoConfig, application)\n}\n\n'))),(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// with all the required LogtoConfig listed above\n\n@Override\nprotected void onCreate(Bundle savedInstanceState) {\n    // List all your API resources willing to access\n    ArrayList<String> resources = new ArrayList<String>(Arrays.asList("<your-resource-indicators>"));\n\n    LogtoConfig logtoConfig = new LogtoConfig(\n        "<your-logto-endpoint>",  // E.g. http://localhost:3001\n        "<your-app-id>",\n        null,\n        resources,\n        true,\n        PromptValue.CONSENT\n    );\n\n    logtoClient = new LogtoClient(logtoConfig, getApplication());\n}\n')))),(0,r.kt)("p",null,"Claim an authorization token from Logto before making your API request."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'logtoClient.getAccessToken("<resource-indicator>", { logtoException, accessToken ->\n    // custom logic\n})\n'))),(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'logtoClient.getAccessToken("<resource-indicator>", (logtoException, accessToken) -> {\n    // custom logic\n});\n')))),(0,r.kt)(d.ZP,{mdxType:"ApplyAuthorizationToken"}),(0,r.kt)("h2",{id:"further-readings"},"Further readings"),(0,r.kt)(m.ZP,{mdxType:"FurtherReadings"}))}L.isMDXComponent=!0},33607:function(e,t,n){n.d(t,{ZP:function(){return d}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(64988),l=n(88442),u=["components"],p={toc:[]};function d(e){var t=e.components,n=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The minimum supported Android API level of Logto Andorid SDK is level 24.")),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"mavenCentral()")," repository to your Gradle project build file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"repositories {\n    mavenCentral()\n}\n")),(0,r.kt)("p",null,"Add Logto Android SDK to your dependencies:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation("io.logto.sdk:android:1.0.0-alpha.0")\n}\n'))),(0,r.kt)(i.Z,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0-alpha.0'\n}\n")))))}d.isMDXComponent=!0},50020:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Android, the Redirect URI follows the pattern: ",(0,r.kt)("inlineCode",{parentName:"p"},"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME")," should be a custom scheme in the reverse domain format.",(0,r.kt)("br",{parentName:"p"}),"\n","The ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_APP_PACKAGE")," is your app package name.")),(0,r.kt)("p",null,"Assuming you treat ",(0,r.kt)("inlineCode",{parentName:"p"},"io.logto.android")," as the custom ",(0,r.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"io.logto.sample")," is your app package name, the Redirect URI should be ",(0,r.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback"),"."),(0,r.kt)("p",null,"Now you can configure the Redirect URI in the admin console (Take ",(0,r.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback")," as an example)."))}u.isMDXComponent=!0},97807:function(e,t,n){n.d(t,{ZP:function(){return y}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(64988),l=n(88442),u=n(58658),p=["components"],d={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'logtoClient.signIn(this, "<your-redirect-uri>", logtoException -> {\n    // User signed in successfully if `logtoException` is null.\n});\n')))}s.isMDXComponent=!0;var c=["components"],m={toc:[]};function g(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'logtoClient.signIn(this, "<your-redirect-uri>") { logtoException: LogtoException? ->\n    // User signed in successfully if `logtoException` is null.\n}\n')))}g.isMDXComponent=!0;var k=["components"],f={toc:[]};function y(e){var t=e.components,n=(0,a.Z)(e,k);return(0,r.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(u.ZP,{calling:".signIn(context, redirectUri, completion)",mdxType:"SignInNote"}),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)(g,{mdxType:"KotlinSignInCode"})),(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(s,{mdxType:"JavaSignInCode"}))),(0,r.kt)("p",null,"After signing in successfully, ",(0,r.kt)("inlineCode",{parentName:"p"},"logtoClient.isAuthenticated")," will be ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."))}y.isMDXComponent=!0},27202:function(e,t,n){n.d(t,{ZP:function(){return f}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(64988),l=n(88442),u=["components"],p={toc:[]};function d(e){var t=e.components,n=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\nimport io.logto.sdk.core.constant.PromptValue;\n\npublic class MainActivity extends AppCompatActivity {\n\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        // ...\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            "<your-app-id>",\n            null,\n            null,\n            true,\n            PromptValue.CONSENT\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n')))}d.isMDXComponent=!0;var s=["components"],c={toc:[]};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\nimport io.logto.sdk.core.constant.PromptValue\n\nclass MainActivity : AppCompatActivity() {\n\n    private lateinit var logtoClient: LogtoClient\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        val logtoConfig = LogtoConfig(\n            endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            appId = "<your-app-id>",\n            scopes = null,\n            resources = null,\n            usingPersistStorage = true,\n            prompt = PromptValue.CONSENT,\n        )\n\n        logtoClient = LogtoClient(logtoConfig, application)\n    }\n}\n')))}m.isMDXComponent=!0;var g=["components"],k={toc:[]};function f(e){var t=e.components,n=(0,a.Z)(e,g);return(0,r.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Ensure the Application object has been initialized before creating a LogtoClient.")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)(m,{mdxType:"KotlinSetupCode"})),(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(d,{mdxType:"JavaSetupCode"}))))}f.isMDXComponent=!0},8704:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",null,'This tutorial assumes you have created an Application of type "',n.type,'" in Admin Console. If you are not ready,'," ",(0,r.kt)("a",{href:"/docs/tutorials/get-started/create-and-integrate-the-first-app"},"read this")," before continuing.")))}u.isMDXComponent=!0},41974:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With the user's authorization status, a ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519"},"JWT")," format ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token")," will be granted and issued by Logto, specifically for the requested API resource. Encrypted and audience-restricted with an expiration time. The token carries all the necessary info to represent the authority of this request."),(0,r.kt)("p",null,"Put the token in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," field of HTTP headers with the Bearer format (",(0,r.kt)("inlineCode",{parentName:"p"},"Bearer YOUR_TOKEN"),"), and you are good to go."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The Bearer Token's integration flow may vary based on the framework or requester you are using. Choose your own way to apply the request ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," header.")))}u.isMDXComponent=!0},2790:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,r.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,r.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}u.isMDXComponent=!0},67820:function(e,t,n){n.d(t,{ZP:function(){return p}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(12685),l=["components"],u={toc:[]};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Logto SDK helps you fetch the user information from the OIDC ",(0,r.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo"},"UserInfo Endpoint"),"."),(0,r.kt)("p",null,"You can get the user information by calling ",(0,r.kt)("code",null,n.apiCodeFragment)," after signing in."),(0,r.kt)(i.ZP,{mdxType:"UserInformationClaims"}))}p.isMDXComponent=!0},11934:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/recipes/customize-sie/"},"Customize sign-in experience")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/passwordless-sign-in-by-adding-connectors/"},"Enable SMS, email, or social passwordless sign-in"))))}u.isMDXComponent=!0},90218:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Logto also helps you apply authorization to your backend APIs . Please check our ",(0,r.kt)("a",{parentName:"p",href:"/next/docs/recipes/protect-your-api/"},"Protect your API")," see how to integrate Logto with your backend applications."),(0,r.kt)("p",null,"You can claim an authorization token for a protected API Resource request easily through Logto SDK."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In order to grant an audience restricted authorization token for your request, make sure the requested API Resource is ",(0,r.kt)("a",{parentName:"p",href:"/next/docs/recipes/protect-your-api/#register-the-api-resources-using-logto-admin-console"},"registered in the Logto Admin Console"),".")))}u.isMDXComponent=!0},58658:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",null,"Before calling ",(0,r.kt)("code",null,n.calling),", make sure you have correctly configured Redirect URI in Admin Console.")))}u.isMDXComponent=!0},12685:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The user information response will vary based on the scopes used in the ",(0,r.kt)("inlineCode",{parentName:"p"},"LogtoConfig")," while initializing the ",(0,r.kt)("inlineCode",{parentName:"p"},"LogtoClient"),"; and the following table lists the relations between user information and scopes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required Scope"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sub"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"openid")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"openid")," scope is added by default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profile")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"profile")," scope is added by default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profile")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"profile")," scope is added by default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"picture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profile")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"profile")," scope is added by default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"email")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email_verified"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"email")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phone_number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"phone")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phone_number_verified"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"phone")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"custom_data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"custom_data")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"identities"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"identities")),(0,r.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0},55414:function(e,t,n){t.Z=n.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png"}}]);