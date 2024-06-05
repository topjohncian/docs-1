"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[64230],{65990:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=o(11527),s=o(17279);const r={sidebar_label:"Guide to implement connectors",sidebar_position:2},c="Guide to implementing connectors",i={id:"docs/recipes/configure-connectors/create-your-connector/connector-implementation-guide",title:"Guide to implementing connectors",description:"After looking at the connector's file structure, let's discuss the implementation and main idea of developing a connector.",source:"@site/docs/docs/recipes/configure-connectors/create-your-connector/connector-implementation-guide.mdx",sourceDirName:"docs/recipes/configure-connectors/create-your-connector",slug:"/docs/recipes/configure-connectors/create-your-connector/connector-implementation-guide",permalink:"/docs/recipes/configure-connectors/create-your-connector/connector-implementation-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/configure-connectors/create-your-connector/connector-implementation-guide.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Guide to implement connectors",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Connector file structure",permalink:"/docs/recipes/configure-connectors/create-your-connector/connector-file-structure"},next:{title:"\ud83d\ude9d Interact with Management API",permalink:"/docs/recipes/interact-with-management-api/"}},a={},d=[{value:"Build a social connector",id:"build-a-social-connector",level:2},{value:"getAuthorizationUri",id:"getauthorizationuri",level:3},{value:"getAccessToken",id:"getaccesstoken",level:3},{value:"getUserInfo",id:"getuserinfo",level:3},{value:"Build a passwordless connector",id:"build-a-passwordless-connector",level:2},{value:"sendMessage",id:"sendmessage",level:3},{value:"What&#39;s more?",id:"whats-more",level:2},{value:"Install your own connectors",id:"install-your-own-connectors",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"guide-to-implementing-connectors",children:"Guide to implementing connectors"}),"\n",(0,t.jsx)(n.p,{children:"After looking at the connector's file structure, let's discuss the implementation and main idea of developing a connector."}),"\n",(0,t.jsx)(n.p,{children:"We will go through a straightforward example for social and passwordless connectors so that you can build your connector with almost the same idea."}),"\n",(0,t.jsxs)(n.p,{children:["In this part, we are not diving deep into details of specific parameters (such as ",(0,t.jsx)(n.code,{children:"config"}),") since it is not the point of this guide. Developers who implement new connectors should read documents provided by third-party service vendors, and those documents should elaborate on parameters' in details."]}),"\n",(0,t.jsx)(n.h2,{id:"build-a-social-connector",children:"Build a social connector"}),"\n",(0,t.jsx)(n.p,{children:"Let's take GitHub connector as an example."}),"\n",(0,t.jsxs)(n.p,{children:["Most social connectors' authorization flow obeys ",(0,t.jsx)(n.a,{href:"https://openid.net/specs/openid-connect-basic-1_0.html",children:"OAuth Authorization Code Flow"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["Majority of the ",(0,t.jsx)(n.em,{children:"social connectors"}),", obtaining a user profile with end-users' authentication follows a two-step scheme (assume that all steps succeeds):"]}),(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Start an authentication request and obtain user's authentication."}),"\n",(0,t.jsxs)(n.li,{children:["Fetch ",(0,t.jsx)(n.code,{children:"accessToken"})," by using a connector vendor granted ",(0,t.jsx)(n.code,{children:"authCode"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Request for a publicly accessible user profile using ",(0,t.jsx)(n.code,{children:"accessToken"}),"."]}),"\n"]})]}),"\n",(0,t.jsx)(n.p,{children:"In order to accomplish the flow, we need to have following three methods:"}),"\n",(0,t.jsx)(n.h3,{id:"getauthorizationuri",children:"getAuthorizationUri"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"getAuthorizationUri"})," generates a redirect URL that can direct end-users to the page need users' authentication."]}),"\n",(0,t.jsxs)(n.p,{children:["The interface is defined as ",(0,t.jsx)(n.code,{children:"GetAuthorizationUri"})," in ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/blob/master/packages/toolkit/connector-kit/src/types.ts",children:(0,t.jsx)(n.code,{children:"@logto/connector-kit"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You are allowed to store sign-in-related essential information using ",(0,t.jsx)(n.code,{children:"setSession"})," (the second input parameter of ",(0,t.jsx)(n.code,{children:"GetAuthorizationUri"}),") for the sake of ",(0,t.jsx)(n.code,{children:"getUserInfo"})," method."]}),"\n",(0,t.jsx)(n.p,{children:"Listed parameters are required:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"authorizationEndpoint"})," can be found in GitHub OAuth doc site, which is the page where end-user should go for authentication"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"config"}),", which includes ",(0,t.jsx)(n.code,{children:"clientId"})," and ",(0,t.jsx)(n.code,{children:"clientSecret"})," in GitHub scenario"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"state"}),", a random string to proof CSRF"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"redirectUri"})," of landing page after end-user's successful authentication"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const getAuthorizationUri = async ({ state, redirectUri }) => {\n  const queryParameters = new URLSearchParams({\n    client_id: config.clientId, // `config` contains your GitHub application credential\n    redirect_uri: redirectUri,\n    state,\n  });\n\n  return `${authorizationEndpoint}?${queryParameters.toString()}`;\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"getaccesstoken",children:"getAccessToken"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"getAccessToken"})," gets access token with authorization code issued after end-users successful authentication."]}),"\n",(0,t.jsxs)(n.p,{children:["Besides ",(0,t.jsx)(n.code,{children:"config"})," we mentioned in previous ",(0,t.jsx)(n.code,{children:"getAuthorizationUri"})," method, we also want to get:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["authorization ",(0,t.jsx)(n.code,{children:"code"})," from parameters brought to redirect landing page"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"accessTokenEndpoint"}),", which is the endpoint to get access token with authorization code"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const getAccessToken = async (config: GithubConfig, code: string) => {\n  const { clientId: client_id, clientSecret: client_secret } = config;\n\n  const httpResponse = await got.post({\n    url: accessTokenEndpoint,\n    json: {\n      client_id,\n      client_secret,\n      code,\n    },\n    timeout: defaultTimeout,\n  });\n\n  const result = accessTokenResponseGuard.safeParse(qs.parse(httpResponse.body));\n\n  if (!result.success) {\n    throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);\n  }\n\n  const { access_token: accessToken } = result.data;\n\n  assert(accessToken, new ConnectorError(ConnectorErrorCodes.SocialAuthCodeInvalid));\n\n  return { accessToken };\n};\n"})}),"\n",(0,t.jsx)(n.h3,{id:"getuserinfo",children:"getUserInfo"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"getUserInfo"})," fetches user information with access token got in previous step."]}),"\n",(0,t.jsxs)(n.p,{children:["The interface is defined as ",(0,t.jsx)(n.code,{children:"GetUserInfo"})," in ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/blob/master/packages/toolkit/connector-kit/src/types.ts",children:(0,t.jsx)(n.code,{children:"@logto/connector-kit"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For sign-in purposes, you can retrieve necessary information using the ",(0,t.jsx)(n.code,{children:"getSession"})," function."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"userInfoEndpoint"})," is the endpoint which is used to get user information."]}),"\n",(0,t.jsx)(n.p,{children:"You may check official documents to find specific user information that can be accessed at user info endpoint and corresponding scope."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"id"})," assigned by the connector's identity provider (in this case, GitHub) is required; other information is optional. If you can get ",(0,t.jsx)(n.code,{children:"email"})," or ",(0,t.jsx)(n.code,{children:"phone"}),' from the user profile, MAKE SURE that they are "verified". You also need to align the returning keys with the fields name in ',(0,t.jsx)(n.a,{href:"/docs/references/users/#basic-data",children:"Logto user profile"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const getUserInfo = async (\n  data: { code: string; config: GithubConfig },\n  getSession: GetSession,\n  { set: SetStorageValue, get: GetStorageValue }\n) => {\n  const { code, config } = data;\n  const { accessToken } = await getAccessToken(config, code);\n\n  try {\n    const httpResponse = await got.get(userInfoEndpoint, {\n      headers: {\n        authorization: `token ${accessToken}`,\n      },\n      timeout: defaultTimeout,\n    });\n\n    const result = userInfoResponseGuard.safeParse(parseJson(httpResponse.body));\n\n    if (!result.success) {\n      throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);\n    }\n\n    const { id, avatar_url: avatar, email, name } = result.data;\n\n    return {\n      id: String(id),\n      avatar: conditional(avatar),\n      email: conditional(email),\n      name: conditional(name),\n    };\n  } catch (error: unknown) {\n    if (error instanceof HTTPError) {\n      const { statusCode, body: rawBody } = error.response;\n\n      if (statusCode === 401) {\n        throw new ConnectorError(ConnectorErrorCodes.SocialAccessTokenInvalid);\n      }\n\n      throw new ConnectorError(ConnectorErrorCodes.General, JSON.stringify(rawBody));\n    }\n\n    throw error;\n  }\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can find complete implementation ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/connectors/blob/master/packages/connector-github/src/index.ts",children:"here"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For more details on configurable parameters, see GitHub connector README or GitHub official documents."}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"The example we've been discussing is based on the OAuth protocol's Authorization Code grant type, which is used in Logto's GitHub connector. However, it's worth highlighting that another grant type, the Implicit grant type, can also be used to retrieve a user's profile, and in fact, provides an access_token directly in the authentication response. Despite this convenience, the Authorization Code grant type is generally recommended over the Implicit type due to its stronger security."}),(0,t.jsx)(n.p,{children:"You can also build a connector based on OIDC or some other open protocols, it depends on your use case as well as the compatibility of the social vendor you want to connect to."})]}),"\n",(0,t.jsx)(n.h2,{id:"build-a-passwordless-connector",children:"Build a passwordless connector"}),"\n",(0,t.jsx)(n.p,{children:"Let's go through the implementation of Aliyun direct mail connector to get the process of building a passwordless connector."}),"\n",(0,t.jsxs)(n.p,{children:["Passwordless connectors are used to send a random code to end-users' email or phone. As a result, a ",(0,t.jsx)(n.code,{children:"sendMessage"})," method is required."]}),"\n",(0,t.jsx)(n.h3,{id:"sendmessage",children:"sendMessage"}),"\n",(0,t.jsxs)(n.p,{children:["In order to send message, we need ",(0,t.jsx)(n.code,{children:"config"})," and ",(0,t.jsx)(n.code,{children:"endpoint"})," to be correctly set up."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"endpoint"})," is the endpoint your API calls connect to"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"config"})," contains ",(0,t.jsx)(n.code,{children:"templates"})," (contents templates for sending passcode in different user flows), ",(0,t.jsx)(n.code,{children:"clientId"})," and ",(0,t.jsx)(n.code,{children:"clientSecret"})," (to access to API requests)"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"const sendMessage = async (data, inputConfig) => {\n  const { to, type, payload } = data;\n  const config = inputConfig ?? (await getConfig(defaultMetadata.id));\n  validateConfig<AliyunDmConfig>(config, aliyunDmConfigGuard);\n  const { accessKeyId, accessKeySecret, accountName, fromAlias, templates } = config;\n  const template = templates.find((template) => template.usageType === type);\n\n  assert(\n    template,\n    new ConnectorError(\n      ConnectorErrorCodes.TemplateNotFound,\n      `Cannot find template for type: ${type}`\n    )\n  );\n\n  const parameters = {\n    AccessKeyId: accessKeyId,\n    AccountName: accountName,\n    ReplyToAddress: 'false',\n    AddressType: '1',\n    ToAddress: to,\n    FromAlias: fromAlias,\n    Subject: template.subject,\n    HtmlBody:\n      typeof payload.code === 'string'\n        ? template.content.replace(/{{code}}/g, payload.code)\n        : template.content,\n  };\n\n  try {\n    const httpResponse = await request(\n      endpoint,\n      { Action: 'SingleSendMail', ...staticConfigs, ...parameters },\n      accessKeySecret\n    );\n\n    const result = sendEmailResponseGuard.safeParse(parseJson(httpResponse.body));\n\n    if (!result.success) {\n      throw new ConnectorError(ConnectorErrorCodes.InvalidResponse, result.error);\n    }\n\n    return result.data;\n  } catch (error: unknown) {\n    if (error instanceof HTTPError) {\n      const {\n        response: { body: rawBody },\n      } = error;\n\n      assert(typeof rawBody === 'string', new ConnectorError(ConnectorErrorCodes.InvalidResponse));\n\n      errorHandler(rawBody);\n    }\n\n    throw error;\n  }\n};\n\nconst request = async (\n  url: string,\n  parameters: PublicParameters & Record<string, string>,\n  accessKeySecret: string\n) => {\n  const finalParameters: Record<string, string> = {\n    ...parameters,\n    SignatureNonce: String(Math.random()),\n    Timestamp: new Date().toISOString(),\n  };\n  const signature = getSignature(finalParameters, accessKeySecret, 'POST');\n\n  const payload = new URLSearchParams();\n\n  for (const [key, value] of Object.entries(finalParameters)) {\n    payload.append(key, value);\n  }\n  payload.append('Signature', signature);\n\n  return got.post({\n    url,\n    headers: {\n      'Content-Type': 'application/x-www-form-urlencoded',\n    },\n    form: payload,\n  });\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can find complete implementation ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/connectors/blob/master/packages/connector-aliyun-dm/src/index.ts",children:"here"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"For more details on configurable parameters, see Aliyun direct mail connector README or Aliyun direct mail official documents."}),"\n",(0,t.jsx)(n.h2,{id:"whats-more",children:"What's more?"}),"\n",(0,t.jsxs)(n.p,{children:["To see connector methods' definition and build a picture of connector interface design, see ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/toolkit/connector-kit",children:(0,t.jsx)(n.code,{children:"@logto/connector-kit"})}),". You can also find ",(0,t.jsx)(n.em,{children:"ConnectorMetadata"}),' reference at "',(0,t.jsx)(n.a,{href:"/docs/references/connectors/#connectors-local-storage-connectormetadata",children:"Connectors - ConnectorMetadata"}),'" and "',(0,t.jsx)(n.a,{href:"/docs/recipes/configure-connectors/create-your-connector/connector-file-structure",children:"Connector file structure"}),'" can help you figure out how to organize your implementation.']}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A connector's config ",(0,t.jsx)(n.a,{href:"https://github.com/colinhacks/zod",children:(0,t.jsx)(n.em,{children:"Zod"})})," schema is obligatory for all connectors. This is quite important since we do type check before saving ",(0,t.jsx)(n.code,{children:"config"})," to DB and calling APIs which requires ",(0,t.jsx)(n.code,{children:"config"})," information."]}),"\n",(0,t.jsxs)(n.li,{children:["All ",(0,t.jsx)(n.em,{children:"SMS connectors"})," and ",(0,t.jsx)(n.em,{children:"email connectors"})," require a ",(0,t.jsx)(n.code,{children:"sendMessage"})," method to call service providers message sending APIs using configs from the database. Developers can also reuse this method to send a testing message with unsaved config while setting connectors up in Admin Console."]}),"\n",(0,t.jsxs)(n.li,{children:["Authorization URL generator ",(0,t.jsx)(n.code,{children:"getAuthorizationUri"})," and user profile retriever ",(0,t.jsx)(n.code,{children:"getUserInfo"})," are required for all ",(0,t.jsx)(n.em,{children:"social connectors"})," (",(0,t.jsx)(n.code,{children:"getAccessToken"})," is regarded as an optional step in ",(0,t.jsx)(n.code,{children:"getUserInfo"}),")."]}),"\n",(0,t.jsx)(n.li,{children:"All connectors' methods work through API calls, as a result, connector developers need to check documents and handle possible unsuccessful API call responses."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"install-your-own-connectors",children:"Install your own connectors"}),"\n",(0,t.jsx)(n.p,{children:"We assume that you have already finished building your own connector. Go through following steps to manually install it:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Copy the connector folder you implemented to directory ",(0,t.jsx)(n.code,{children:"/packages/connectors"})," of ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/logto",children:(0,t.jsx)(n.code,{children:"logto-io/logto"})}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Install connector repository's dependencies by typing ",(0,t.jsx)(n.code,{children:"pnpm pnpm:devPreinstall && pnpm i"})," at root path of logto folder."]}),"\n",(0,t.jsxs)(n.li,{children:["Build connector with ",(0,t.jsx)(n.code,{children:"pnpm connectors:build"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Link local connectors using ",(0,t.jsx)(n.code,{children:"pnpm cli connector link"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Restart Logto instance with ",(0,t.jsx)(n.code,{children:"pnpm dev"})," at root directory of ",(0,t.jsx)(n.code,{children:"logto-io/logto"}),", and you can find connectors successfully installed."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You can now test and try out your connector to see whether it works as expected."}),"\n",(0,t.jsxs)(n.p,{children:["If you want to add connectors that have already been published to NPM or Logto official connectors, you may check out ",(0,t.jsx)(n.a,{href:"/docs/references/using-cli/manage-connectors#add-connectors",children:"Using Logto CLI - Manage connectors"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},17279:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>c});var t=o(50959);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);