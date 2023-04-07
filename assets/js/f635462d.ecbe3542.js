"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6209],{49613:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return g}});var r=o(59496);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(o),g=n,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||i;return o?r.createElement(f,a(a({ref:t},u),{},{components:o})):r.createElement(f,a({ref:t},u))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},78353:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=o(665),n=o(40151),i=(o(59496),o(49613)),a=["components"],s={sidebar_position:10},c="\ud83d\udcbe Configure storage providers",l={unversionedId:"docs/recipes/configure-storage-providers/README",id:"docs/recipes/configure-storage-providers/README",title:"\ud83d\udcbe Configure storage providers",description:"To store user uploaded files, Logto uses a storage provider. Logto supports multiple storage providers, including AWS S3, Azure Storage. This recipe will show you how to configure a storage provider for Logto.",source:"@site/docs/docs/recipes/configure-storage-providers/README.md",sourceDirName:"docs/recipes/configure-storage-providers",slug:"/docs/recipes/configure-storage-providers/",permalink:"/next/docs/recipes/configure-storage-providers/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/configure-storage-providers/README.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"\ud83d\ude80 Deployment",permalink:"/next/docs/recipes/deployment/"},next:{title:"\ud83d\udcf1 Applications",permalink:"/next/docs/references/applications/"}},u={},p=[{value:"Azure Storage",id:"azure-storage",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Config using CLI",id:"config-using-cli",level:3},{value:"<code>connectionString</code>",id:"connectionstring",level:4},{value:"<code>container</code>",id:"container",level:4},{value:"<code>publicUrl</code>",id:"publicurl",level:4},{value:"S3 Storage",id:"s3-storage",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Config using CLI",id:"config-using-cli-1",level:3},{value:"<code>accessKeyId</code>",id:"accesskeyid",level:4},{value:"<code>secretAccessKey</code>",id:"secretaccesskey",level:4},{value:"<code>bucket</code>",id:"bucket",level:4},{value:"<code>endpoint</code>",id:"endpoint",level:4},{value:"<code>publicUrl</code>",id:"publicurl-1",level:4}],d={toc:p};function g(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-configure-storage-providers"},"\ud83d\udcbe Configure storage providers"),(0,i.kt)("p",null,"To store user uploaded files, Logto uses a storage provider. Logto supports multiple storage providers, including AWS S3, Azure Storage. This recipe will show you how to configure a storage provider for Logto."),(0,i.kt)("p",null,"The configuration is stored in DB's ",(0,i.kt)("inlineCode",{parentName:"p"},"systems"),' table, but it is recommended to use the CLI to configure the storage provider. For more information, try the "help" command:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm logto db system --help\n")),(0,i.kt)("h2",{id:"azure-storage"},"Azure Storage"),(0,i.kt)("p",null,"Azure Storage is a powerful and scalable cloud storage solution that allows you to store and manage your data in the cloud. The following recipe will show you how to configure Azure Storage as a storage provider for Logto."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview"},"Azure Storage account"))),(0,i.kt)("h3",{id:"config-using-cli"},"Config using CLI"),(0,i.kt)("p",null,"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'pnpm logto db system set storageProvider \'{"provider":"AzureStorage","connectionString":"DefaultEndpointsProtocol=https;AccountName=logto;AccountKey=oRhfTBHOHiBxxxxxxxxxxxxxxxxZ0se6XROftl/Xrow==;EndpointSuffix=core.windows.net","container":"logto"}\'\n')),(0,i.kt)("h4",{id:"connectionstring"},(0,i.kt)("inlineCode",{parentName:"h4"},"connectionString")),(0,i.kt)("p",null,"To access Azure Storage, you need to use a connection string, which is a string of characters that contains the necessary information for establishing a connection to your storage account."),(0,i.kt)("p",null,"To get the connection string, follow the official ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string"},"Azure Storage connection string documentation"),"."),(0,i.kt)("h4",{id:"container"},(0,i.kt)("inlineCode",{parentName:"h4"},"container")),(0,i.kt)("p",null,"The container is a storage resource that stores blobs. You can use the container to organize your blobs and to control access to your data."),(0,i.kt)("p",null,"To create a container, follow the official ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction#containers"},"Azure Storage container documentation"),"."),(0,i.kt)("h4",{id:"publicurl"},(0,i.kt)("inlineCode",{parentName:"h4"},"publicUrl")),(0,i.kt)("p",null,"Optional."),(0,i.kt)("p",null,'The public URL is the URL that can be used to access the storage resource publicly. If you are not using CDN, you can leave it blank to use the Azure Storage\'s default "Primary endpoint" as the public URL. Logto will get this value from "connectionString" with the help of Azure SDK. To learn more about your storage account\'s primary endpoint, follow the official ',(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview#primary-endpoints"},"Azure Storage primary endpoint documentation"),"."),(0,i.kt)("h2",{id:"s3-storage"},"S3 Storage"),(0,i.kt)("p",null,"S3 Storage is a cloud storage service that offers object storage through a web service interface. The following recipe will show you how to configure S3 Storage as a storage provider for Logto."),(0,i.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets.html"},"S3 Storage account")," or other S3 compatible storage service, such as ",(0,i.kt)("a",{parentName:"li",href:"https://min.io/"},"MinIO"))),(0,i.kt)("h3",{id:"config-using-cli-1"},"Config using CLI"),(0,i.kt)("p",null,"Example usage:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'pnpm logto db system set storageProvider \'{"provider":"S3Storage","accessKeyId":"my-access-key-id","secretAccessKey": "my-secret-access-key","bucket":"logto","endpoint":"https://s3.us-east-2.amazonaws.com"}\'\n')),(0,i.kt)("h4",{id:"accesskeyid"},(0,i.kt)("inlineCode",{parentName:"h4"},"accessKeyId")),(0,i.kt)("p",null,"The access key ID is an identifier for your AWS account. To find your access Key ID for your AWS account, follow the official ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"},"AWS access key ID documentation"),"."),(0,i.kt)("h4",{id:"secretaccesskey"},(0,i.kt)("inlineCode",{parentName:"h4"},"secretAccessKey")),(0,i.kt)("p",null,"The secret access key is used in conjunction with the access key ID to sign programmatic requests. To find your access key secret for your AWS account, follow the official ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"},"AWS access key secret documentation"),"."),(0,i.kt)("h4",{id:"bucket"},(0,i.kt)("inlineCode",{parentName:"h4"},"bucket")),(0,i.kt)("p",null,"The bucket is a container for objects stored in Amazon S3. To create a bucket, follow the official ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets.html"},"AWS S3 bucket documentation"),"."),(0,i.kt)("h4",{id:"endpoint"},(0,i.kt)("inlineCode",{parentName:"h4"},"endpoint")),(0,i.kt)("p",null,"Endpoint is the URL that is used to access the AWS S3 service. To find your AWS S3 endpoint, follow the official ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/s3.html"},"AWS S3 endpoint documentation"),"."),(0,i.kt)("h4",{id:"publicurl-1"},(0,i.kt)("inlineCode",{parentName:"h4"},"publicUrl")),(0,i.kt)("p",null,"Optional."),(0,i.kt)("p",null,"The public URL is the URL that can be used to access the storage resource publicly. If you are not using CDN, you can leave it blank to use the S3 Storage's default URL."))}g.isMDXComponent=!0}}]);