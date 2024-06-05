"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6376],{43809:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(11527),i=n(17279);const r={slug:"ciam-102-authz-and-rbac",authors:"gao",tags:["ciam","auth","authorization"]},t="CIAM 102: Authorization & Role-based Access Control",l={permalink:"/blog/ciam-102-authz-and-rbac",source:"@site/blog/2023-02-05-ciam-102-authz-and-rbac/index.md",title:"CIAM 102: Authorization & Role-based Access Control",description:"Background",date:"2023-02-05T00:00:00.000Z",tags:[{inline:!0,label:"ciam",permalink:"/blog/tags/ciam"},{inline:!0,label:"auth",permalink:"/blog/tags/auth"},{inline:!0,label:"authorization",permalink:"/blog/tags/authorization"}],readingTime:5.925,hasTruncateMarker:!0,authors:[{name:"Gao",title:"Founder of Silverhand",url:"https://github.com/gao-sun",imageURL:"https://github.com/gao-sun.png",key:"gao"}],frontMatter:{slug:"ciam-102-authz-and-rbac",authors:"gao",tags:["ciam","auth","authorization"]},unlisted:!1,prevItem:{title:"Do you need to build your own auth for apps?",permalink:"/blog/do-you-need-to-build-auth"},nextItem:{title:"Logto 2023 February Update",permalink:"/blog/releases/2023-feb"}},a={authorsImageUrls:[void 0]},c=[{value:"Background",id:"background",level:2},{value:"Why do we need authorization?",id:"why-do-we-need-authorization",level:3},{value:"The basic authorization model",id:"the-basic-authorization-model",level:2},{value:"Role-based Access Control",id:"role-based-access-control",level:2},{value:"Define resources",id:"define-resources",level:3},{value:"Define permissions",id:"define-permissions",level:3},{value:"Define roles",id:"define-roles",level:3},{value:"Assign roles to users",id:"assign-roles-to-users",level:3},{value:"Connect to dots",id:"connect-to-dots",level:3},{value:"Other RBAC levels",id:"other-rbac-levels",level:3},{value:"In practice",id:"in-practice",level:2},{value:"Closing notes",id:"closing-notes",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h2,{id:"background",children:"Background"}),"\n",(0,o.jsxs)(s.p,{children:["In the ",(0,o.jsx)(s.a,{href:"/blog/ciam-101-intro-authn-sso",children:"previous article"}),", we introduced the concept of authentication (AuthN) and authorization (AuthZ), along with some headachy terms: Identity, Organization, Tenant, etc."]}),"\n",(0,o.jsx)(s.p,{children:"Organization and Tenant are great for grouping Identities, but they lead to an absolute democracy: everyone can do anything in this system. While utopia is still a mystery, let\u2019s take a look at the governance of access: Authorization (AuthZ)."}),"\n",(0,o.jsx)(s.h3,{id:"why-do-we-need-authorization",children:"Why do we need authorization?"}),"\n",(0,o.jsx)(s.admonition,{title:"Recall",type:"info",children:(0,o.jsx)(s.p,{children:"Authorization (AuthZ) answers the question \u201cWhat can you do?\u201d"})}),"\n",(0,o.jsx)(s.p,{children:"Notion is a great example. For each page you own, you can choose to keep it private, accessible only to you, or share it with friends, or even the public."}),"\n",(0,o.jsx)(s.p,{children:"Or, for an online bookstore, you want everyone to be able to view all books, but customers to only view their own orders, and sellers to manage only the books in their stores."}),"\n",(0,o.jsx)(s.p,{children:"AuthZ and AuthN are essential components of a complex business model. They often go hand-in-hand; AuthZ verifies a user's access, while AuthN authenticates identities. Both are necessary for a secure system."}),"\n",(0,o.jsx)(s.h2,{id:"the-basic-authorization-model",children:"The basic authorization model"}),"\n",(0,o.jsxs)(s.p,{children:["Here\u2019s one of the most common AuthZ models: If ",(0,o.jsx)(s.strong,{children:"IDENTITY"})," performs ",(0,o.jsx)(s.strong,{children:"ACTION"})," on ",(0,o.jsx)(s.strong,{children:"RESOURCE"}),", then ",(0,o.jsx)(s.strong,{children:"ACCEPT"})," or ",(0,o.jsx)(s.strong,{children:"DENY"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["In the Notion example, the model is ",(0,o.jsx)(s.strong,{children:"PERSON"})," performs ",(0,o.jsx)(s.strong,{children:"VIEW"})," on ",(0,o.jsx)(s.strong,{children:"PAGE."})]}),"\n",(0,o.jsx)(s.p,{children:"If the page is private:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["You\u2019ll receive ",(0,o.jsx)(s.strong,{children:"ACCEPT"})," when performing ",(0,o.jsx)(s.strong,{children:"VIEW"})," on your ",(0,o.jsx)(s.strong,{children:"PAGE"}),"."]}),"\n",(0,o.jsxs)(s.li,{children:["Everyone else should receive ",(0,o.jsx)(s.strong,{children:"DENY"})," when performing ",(0,o.jsx)(s.strong,{children:"VIEW"})," on your ",(0,o.jsx)(s.strong,{children:"PAGE"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Based on consensus, the industry developed various authorization technologies, such as Role-based Access Control (RBAC), Attribute-based Access Control (ABAC). Today, we will focus on the ",(0,o.jsx)(s.a,{href:"https://csrc.nist.gov/CSRC/media/Publications/conference-paper/2000/07/26/the-nist-model-for-role-based-access-control-towards-a-unified-/documents/sandhu-ferraiolo-kuhn-00.pdf",children:"NIST RBAC model"})," Level 1: Flat RBAC."]}),"\n",(0,o.jsx)(s.h2,{id:"role-based-access-control",children:"Role-based Access Control"}),"\n",(0,o.jsx)(s.admonition,{type:"info",children:(0,o.jsx)(s.p,{children:'The NIST RBAC model left many things open to provide flexibility and adaptability for various scenarios. Logto now adopts the Level 1 definition with an additional concept "Resource" (i.e. API Resource).'})}),"\n",(0,o.jsx)(s.p,{children:"Let's extend the bookstore example. Say we have many customers, but only one seller:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Customers can view and order books, as well as view their own orders."}),"\n",(0,o.jsx)(s.li,{children:"The seller can view, create, and delete books, and manage customer orders."}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"define-resources",children:"Define resources"}),"\n",(0,o.jsx)(s.p,{children:"In Logto, a resource (i.e. API Resource) usually represents a set of entities or items, since it\u2019s required to use a valid URL as the indicator. Hence we define two resources:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Books: ",(0,o.jsx)(s.code,{children:"https://api.bookstore.io/books"})]}),"\n",(0,o.jsxs)(s.li,{children:["Orders: ",(0,o.jsx)(s.code,{children:"https://api.bookstore.io/orders"})]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"One of the advantages of enforcing the URL format is it can map to a real address of your API service, which improves the readability and recognizability when integrating with other components in the system."}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsx)(s.p,{children:"\ud83e\udd14 Resources should be divided according to the needs of the business. There is no one-size-fits-all approach; the decision should be made on a case-by-case basis. The example in this article that divides Books and Orders may be suitable for microservices, but not for a monolithic architecture."})}),"\n",(0,o.jsx)(s.h3,{id:"define-permissions",children:"Define permissions"}),"\n",(0,o.jsx)(s.p,{children:"Since we introduced the concept of resource, in Logto, we also enforce that permissions must belong to a resource, in reverse, resources can have permissions."}),"\n",(0,o.jsx)(s.p,{children:"Let\u2019s add some permissions the the resources:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Books: ",(0,o.jsx)(s.code,{children:"read"}),", ",(0,o.jsx)(s.code,{children:"create"}),", ",(0,o.jsx)(s.code,{children:"delete"})]}),"\n",(0,o.jsxs)(s.li,{children:["Orders: ",(0,o.jsx)(s.code,{children:"read"}),", ",(0,o.jsx)(s.code,{children:"read:self"}),", ",(0,o.jsx)(s.code,{children:"create:self"}),", ",(0,o.jsx)(s.code,{children:"delete"})]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Although there\u2019s no requirement of the name of a permission, we have the convention as below:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{children:"<action>[:<target>]\n"})}),"\n",(0,o.jsxs)(s.p,{children:["While ",(0,o.jsx)(s.code,{children:"<action>"})," is required to describe a permission, ",(0,o.jsx)(s.code,{children:":<target>"})," can be ignored to describe a general target, i.e. to all entities or items in the resource. For example:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Permission ",(0,o.jsx)(s.code,{children:"read"})," in resource Books means the action to read arbitrary books."]}),"\n",(0,o.jsxs)(s.li,{children:["Permission ",(0,o.jsx)(s.code,{children:"create:self"})," in resource Orders means the action to create orders that belong to the current user."]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"define-roles",children:"Define roles"}),"\n",(0,o.jsxs)(s.p,{children:["In short, a role is a group of permissions. Let\u2019s create two roles ",(0,o.jsx)(s.code,{children:"customer"})," and ",(0,o.jsx)(s.code,{children:"seller"})," and assign permissions to them as below:"]}),"\n",(0,o.jsx)(s.mermaid,{value:'erDiagram\n\t"Role: customer" {\n\t\tpermission Books "read"\n\t\tpermission Orders "read:self"\n\t\tpermission Orders "create:self"\n\t}\n\n\t"Role: seller" {\n\t\tpermission Books "read"\n\t\tpermission Books "create"\n\t\tpermission Books "delete"\n\t\tpermission Orders "read"\n\t\tpermission Orders "delete"\n\t}\n'}),"\n",(0,o.jsx)(s.p,{children:"You may notice the permission-role assignment is many-to-many relations."}),"\n",(0,o.jsx)(s.h3,{id:"assign-roles-to-users",children:"Assign roles to users"}),"\n",(0,o.jsx)(s.p,{children:"Just like role-permission assignment, user-role assignment is also a many-to-many relationship. Therefore, you can assign multiple roles to a single user, and a single role can be assigned to multiple users."}),"\n",(0,o.jsx)(s.h3,{id:"connect-to-dots",children:"Connect to dots"}),"\n",(0,o.jsx)(s.p,{children:"Here\u2019s a complete relationship diagram for the Level 1 RBAC model in Logto:"}),"\n",(0,o.jsx)(s.mermaid,{value:'erDiagram\n\tUser }|--|{ Role : maps\n\tRole }|--|{ Permission : maps\n\t"API Resource" ||--|{ Permission : contains'}),"\n",(0,o.jsx)(s.p,{children:'In the RBAC model, permissions are always "positive", meaning the authorization judgement is simple: if a user has the permission, then accept; otherwise, reject.'}),"\n",(0,o.jsxs)(s.p,{children:["Let's say Alice has the role ",(0,o.jsx)(s.code,{children:"seller"}),", Bob and Carol have the role ",(0,o.jsx)(s.code,{children:"customer"}),". We'll describe actions in natural language first, and transpile them to the standard authorization format: ",(0,o.jsx)(s.strong,{children:"IDENTITY"})," performs ",(0,o.jsx)(s.strong,{children:"ACTION"})," on ",(0,o.jsx)(s.strong,{children:"RESOURCE"}),", finally giving the conclusion."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Alice wants to add a new book for sale:","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["User Alice performs ",(0,o.jsx)(s.code,{children:"create"})," on resource Books (",(0,o.jsx)(s.code,{children:"https://api.bookstore.io/books"}),")."]}),"\n",(0,o.jsxs)(s.li,{children:["Since Alice has been assigned the permission ",(0,o.jsx)(s.code,{children:"create"})," of Books according to their role ",(0,o.jsx)(s.code,{children:"seller"}),", the result is \u2705 ",(0,o.jsx)(s.strong,{children:"ACCEPT"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["Alice wants to view all orders to see if the sale meets their expectation:","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["User Alice performs ",(0,o.jsx)(s.code,{children:"read"})," on resource Orders (",(0,o.jsx)(s.code,{children:"https://api.bookstore.io/orders"}),")."]}),"\n",(0,o.jsxs)(s.li,{children:["Since Alice has been assigned the permission ",(0,o.jsx)(s.code,{children:"read"})," of Orders according to their role ",(0,o.jsx)(s.code,{children:"seller"}),", the result is \u2705 ",(0,o.jsx)(s.strong,{children:"ACCEPT"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["Bob wants to browse the book list to see if there\u2019s any books they want to purchase.","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["User Bob performs ",(0,o.jsx)(s.code,{children:"read"})," on resource Books (",(0,o.jsx)(s.code,{children:"https://api.bookstore.io/books"}),")."]}),"\n",(0,o.jsxs)(s.li,{children:["Since Bob has been assigned the permission ",(0,o.jsx)(s.code,{children:"read"})," of Books according to their role ",(0,o.jsx)(s.code,{children:"cusomter"}),", the result is \u2705 ",(0,o.jsx)(s.strong,{children:"ACCEPT"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.li,{children:["Bob wants to view Carol\u2019s order.","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Since it\u2019s someone else\u2019s order, the permission ",(0,o.jsx)(s.code,{children:"read:self"})," of ",(0,o.jsx)(s.code,{children:"Orders"})," does not work here."]}),"\n",(0,o.jsxs)(s.li,{children:["User Bob performs ",(0,o.jsx)(s.code,{children:"read"})," on resource Orders (",(0,o.jsx)(s.code,{children:"https://api.bookstore.io/order"}),")."]}),"\n",(0,o.jsxs)(s.li,{children:["Since Bob has no permission ",(0,o.jsx)(s.code,{children:"read"})," of Orders, the result is \u274c ",(0,o.jsx)(s.strong,{children:"DENY"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(s.h3,{id:"other-rbac-levels",children:"Other RBAC levels"}),"\n",(0,o.jsx)(s.p,{children:"There are four levels in the NIST RBAC model:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Flat RBAC"}),"\n",(0,o.jsx)(s.li,{children:"Hierarchical RBAC"}),"\n",(0,o.jsx)(s.li,{children:"Constrained RBAC"}),"\n",(0,o.jsx)(s.li,{children:"Symmetric RBAC"}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["See the ",(0,o.jsx)(s.a,{href:"https://csrc.nist.gov/CSRC/media/Publications/conference-paper/2000/07/26/the-nist-model-for-role-based-access-control-towards-a-unified-/documents/sandhu-ferraiolo-kuhn-00.pdf",children:"paper"})," for details if you are interested."]}),"\n",(0,o.jsx)(s.p,{children:"Logto now has the Level 1 implementation and will progress to higher levels based on community feedback. Don\u2019t hesitate to let us know if a higher level fits your need!"}),"\n",(0,o.jsx)(s.h2,{id:"in-practice",children:"In practice"}),"\n",(0,o.jsx)(s.p,{children:"Beside the theory, we still have heavy technical works to complete in order to make the model work as expected:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Client and auth server development"}),"\n",(0,o.jsx)(s.li,{children:"Database design for RBAC"}),"\n",(0,o.jsx)(s.li,{children:"Validation across different services"}),"\n",(0,o.jsx)(s.li,{children:"Security and open-standard compliance"}),"\n",(0,o.jsx)(s.li,{children:"Role, permission, resource management and assignment"}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Don\u2019t panic. We've taken this into account and added out-of-the-box support to cover all of the above. Check out the ",(0,o.jsx)(s.a,{href:"/docs/recipes/rbac/",children:"\ud83d\udd10 RBAC recipe"})," to learn how to use RBAC in Logto."]}),"\n",(0,o.jsx)(s.h2,{id:"closing-notes",children:"Closing notes"}),"\n",(0,o.jsx)(s.p,{children:"RBAC is a powerful access management model for most cases, but there\u2019s no silver bullet. We still have some questions:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"Do I need high levels of RBAC?"}),"\n",(0,o.jsx)(s.li,{children:"How does RBAC compare to other authorization models?"}),"\n",(0,o.jsx)(s.li,{children:"How to define authorization model between different Organizations?"}),"\n"]}),"\n",(0,o.jsx)(s.admonition,{type:"note",children:(0,o.jsx)(s.p,{children:"\ud83d\udd25 Stay tuned. We\u2019ll see you in CIAM 103!"})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},17279:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>t});var o=n(50959);const i={},r=o.createContext(i);function t(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);