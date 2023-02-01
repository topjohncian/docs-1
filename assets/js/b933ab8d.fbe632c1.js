"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[2566],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?o.createElement(f,i(i({ref:t},c),{},{components:n})):o.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96673:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={sidebar_position:9},s="\ud83d\ude80 Deployment",p={unversionedId:"docs/recipes/deployment/README",id:"docs/recipes/deployment/README",title:"\ud83d\ude80 Deployment",description:"Environment Variables",source:"@site/docs/docs/recipes/deployment/README.md",sourceDirName:"docs/recipes/deployment",slug:"/docs/recipes/deployment/",permalink:"/docs/recipes/deployment/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/deployment/README.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docsSidebar",previous:{title:"\ud83c\udf10 Localization",permalink:"/docs/recipes/localization/"},next:{title:"\ud83d\udcf1 Applications",permalink:"/docs/references/applications/"}},c={},d=[{value:"Environment Variables",id:"environment-variables",level:2},{value:"Essentials",id:"essentials",level:3},{value:"HTTPS",id:"https",level:3},{value:"Reverse proxy",id:"reverse-proxy",level:3},{value:"How can I upgrade Logto safely?",id:"how-can-i-upgrade-logto-safely",level:2},{value:"Database alteration",id:"database-alteration",level:3},{value:"Containerization",id:"containerization",level:2},{value:"Shared connectors folder",id:"shared-connectors-folder",level:3},{value:"Database alteration",id:"database-alteration-1",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-deployment"},"\ud83d\ude80 Deployment"),(0,r.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("p",null,"We use a generated preset of environment variables in our demo (",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"), which you should replace with your own and maintain consistency across multiple Logto instances."),(0,r.kt)("p",null,"You can set env directly or put a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file inside the Logto project root. If you are testing with Docker, check out the image's generated ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/logto"),"."),(0,r.kt)("h3",{id:"essentials"},"Essentials"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DB_URL")," The ",(0,r.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6"},"Postgres DSN")," for Logto database."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PORT")," The port that Logto listens to. Default ",(0,r.kt)("inlineCode",{parentName:"li"},"3001"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ENDPOINT")," You may specify a URL with your custom domain for production (E.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"ENDPOINT=https://logto.domain.com"),"). This will affect the value of the ",(0,r.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier"},"OIDC issuer identifier")," and Admin Console Redirect URIs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OIDC_COOKIE_KEYS")," The comma-separated string list of the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys"},"signing cookie keys"),". Rotate regularly to keep safety. If you'd like to set multi keys, separate them with comma."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OIDC_PRIVATE_KEYS")," The comma-separated string list of the private key content for ",(0,r.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-core-1_0.html#Signing"},"OIDC JWT signing"),". If you'd like to set this in ",(0,r.kt)("inlineCode",{parentName:"li"},".env"),", you can leverage ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/motdotla/dotenv#multiline-values"},"multiline values")," support. If you'd like to set multi keys, separate them with comma.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How to set up ",(0,r.kt)("inlineCode",{parentName:"strong"},"OIDC_PRIVATE_KEYS")," correctly?")),(0,r.kt)("p",null,"The value format for ",(0,r.kt)("inlineCode",{parentName:"p"},"OIDC_PRIVATE_KEYS")," is as follows (You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n")," to replace newline characters):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'OIDC_PRIVATE_KEYS="-----BEGIN RSA PRIVATE KEY-----\n...\nKh9NV...\n...\n-----END DSA PRIVATE KEY-----,\n-----BEGIN RSA PRIVATE KEY-----\n...\nnOlQ1nS...\n...\n-----END DSA PRIVATE KEY-----"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"I prefer using ",(0,r.kt)("inlineCode",{parentName:"strong"},".pem")," files for my OIDC private keys. What should I do?")),(0,r.kt)("p",null,"Just leave ",(0,r.kt)("inlineCode",{parentName:"p"},"OIDC_PRIVATE_KEYS")," empty, and set the path of your ",(0,r.kt)("inlineCode",{parentName:"p"},".pem")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"OIDC_PRIVATE_KEY_PATHS")," list. It has a default value of ",(0,r.kt)("inlineCode",{parentName:"p"},"'./oidc-private-key.pem'"),"."),(0,r.kt)("p",null,"You can set multi paths by separating them with comma. E.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"oidc-private-key1.pem, oidc-private-key-2.pem"),"."),(0,r.kt)("p",null,"For more details about environment variables, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/core/configuration"},"Configuration"),"."),(0,r.kt)("h3",{id:"https"},"HTTPS"),(0,r.kt)("p",null,"You may use Node.js to serve HTTPS directly or set up an HTTPS proxy / balancer in front of Node.js. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/core/configuration#enabling-https"},"Enabling HTTPS")," for details."),(0,r.kt)("h3",{id:"reverse-proxy"},"Reverse proxy"),(0,r.kt)("p",null,"If you want to use reverse proxy on your server, for example Nginx, usually we need to define Logto as an upstream.\nAssuming you are using Nginx and your Logto instance is running on port 3001, put the following config in nginx.conf:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"upstream logto_upstream {\n  server 127.0.0.1:3001;\n}\n")),(0,r.kt)("p",null,"Also, make sure you have properly configured the following request headers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"server {\n  listen 80;\n  server_name your_domain_url;\n  ...\n\n  location / {\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto https;\n\n    proxy_pass http://logto_upstream;\n    proxy_redirect off;\n  }\n}\n")),(0,r.kt)("p",null,"Reload Nginx config to pick up the latest changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nginx -s reload\n")),(0,r.kt)("p",null,"You are all set. Open the browser and visit your domain URL, you should be able to see Logto welcome page."),(0,r.kt)("h2",{id:"how-can-i-upgrade-logto-safely"},"How can I upgrade Logto safely?"),(0,r.kt)("p",null,"If we don't mention it in the changelog, you can feel free to upgrade Logto without changing your code or database schema. Our API follows ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/"},"semver"),"."),(0,r.kt)("h3",{id:"database-alteration"},"Database alteration"),(0,r.kt)("p",null,"If a schema change is inevitable, we will provide an alteration script. Simply run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run alteration deploy")," in the Logto project root with ease to upgrade your database schema."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/using-cli/database-alteration"},"Database alteration")," for details about the alteration command."),(0,r.kt)("h2",{id:"containerization"},"Containerization"),(0,r.kt)("p",null,"For production, you may use Docker to containerize Logto. You can find the Dockerfile in the root directory of the project. If you want to run multiple instances of Logto, for instance, deploy Logto in a Kubernetes cluster, There are some additional steps you need to take."),(0,r.kt)("h3",{id:"shared-connectors-folder"},"Shared connectors folder"),(0,r.kt)("p",null,"By default, Logto will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"connectors")," folder in the root directory of the ",(0,r.kt)("inlineCode",{parentName:"p"},"core")," folder. We recommend sharing the folder between multiple instances of Logto, you need to mount the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/core/connectors")," folder to the container and run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run cli connector add -- --official")," to deploy the connectors."),(0,r.kt)("p",null,"There is a minimum example ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment")," for Kubernetes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: extensions/v1beta1\nkind: Deployment\nmetadata:\n  name: logto\n  namespace: default\nspec:\n  template:\n    spec:\n      volumes:\n        - name: connectors\n          emptyDir: {}\n      initContainers:\n        - image: ghcr.io/logto-io/logto\n          command:\n            - /bin/sh\n          args:\n            - '-c'\n            - 'npm run cli connector add -- --official'\n          name: init\n          volumeMounts:\n            - name: connectors\n              mountPath: /etc/logto/packages/core/connectors\n      containers:\n        - image: ghcr.io/logto-io/logto\n          name: logto\n          volumeMounts:\n            - name: connectors\n              mountPath: /etc/logto/packages/core/connectors\n")),(0,r.kt)("p",null,"In this example, we create an empty directory as a volume and mount it to containers. Then we run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run cli connector add -- --official")," in the init container to download the connectors. Finally, every container will share the same connectors folder with our official connectors already inside."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This is an example yaml, in order to run Logto, you need to set envs properly.")),(0,r.kt)("p",null,'For production, you can replace the "empty dir" volume with a persistent volume, and do the "init" job by your own way, you know what you are doing!'),(0,r.kt)("h3",{id:"database-alteration-1"},"Database alteration"),(0,r.kt)("p",null,"Similar to connectors, the database alteration need to run in a single instance. You can use a job to run the alteration script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: batch/v1\nkind: Job\nmetadata:\n  name: alteration\nspec:\n  template:\n    spec:\n      containers:\n        - name: alteration\n          image: ghcr.io/logto-io/logto\n          imagePullPolicy: always\n          env:\n            - name: DB_URL\n              value: postgresql://user:password@localhost:5432/logto\n            command:\n              - /bin/sh\n            args:\n              - '-c'\n              - 'npm run alteration deploy latest'\n      restartPolicy: Never\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/using-cli/database-alteration"},"Database alteration")," for details about the alteration command."))}m.isMDXComponent=!0}}]);