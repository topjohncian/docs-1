"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[32805],{52393:(e,n,i)=>{i.d(n,{ZP:()=>d,d$:()=>r});var t=i(11527),s=i(17279);const r=[{value:"Create social IdP&#39;s account and register SAML application (IdP)",id:"create-social-idps-account-and-register-saml-application-idp",level:3},{value:"Configure SAML connector (SP)",id:"configure-saml-connector-sp",level:3},{value:"entityID <code>Required</code>",id:"entityid-required",level:4},{value:"signInEndpoint <code>Required</code>",id:"signinendpoint-required",level:4},{value:"x509Certificate <code>Required</code>",id:"x509certificate-required",level:4},{value:"idpMetadataXml <code>Required</code>",id:"idpmetadataxml-required",level:4},{value:"assertionConsumerServiceUrl <code>Required</code>",id:"assertionconsumerserviceurl-required",level:4},{value:"signAuthnRequest",id:"signauthnrequest",level:4},{value:"encryptAssertion",id:"encryptassertion",level:4},{value:"requestSignatureAlgorithm",id:"requestsignaturealgorithm",level:4},{value:"messageSigningOrder",id:"messagesigningorder",level:4},{value:"privateKey and privateKeyPass",id:"privatekey-and-privatekeypass",level:4},{value:"encPrivateKey and encPrivateKeyPass",id:"encprivatekey-and-encprivatekeypass",level:4},{value:"nameIDFormat",id:"nameidformat",level:4},{value:"timeout",id:"timeout",level:4},{value:"profileMap",id:"profilemap",level:4},{value:"Config types",id:"config-types",level:4},{value:"Reference",id:"reference",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"create-social-idps-account-and-register-saml-application-idp",children:"Create social IdP's account and register SAML application (IdP)"}),"\n",(0,t.jsx)(n.p,{children:"Let's go through configurations of SAML connector."}),"\n",(0,t.jsx)(n.p,{children:"Before we kicking off, you can go to a social identity provider which supports SAML protocol and create your own account. Okta, OneLogin, Salesforce and some other platforms support authentication based on SAML protocol."}),"\n",(0,t.jsx)(n.p,{children:"If your IdP mandate the encryption of SAML assertion and receiving of signed authentication requests, you should generate your private key and corresponding certificate using RSA algorithm. Keep the private key for your SP use and upload the certificate to IdP."}),"\n",(0,t.jsxs)(n.p,{children:["You also need to configure the ACS (Assertion Consumer Service) URL as ",(0,t.jsx)(n.code,{children:"${your_logto_origin}/api/authn/saml/${connector_id}"})," to handle IdP's SAML assertion. Where you can find your ",(0,t.jsx)(n.code,{children:"connectorId"})," at SAML connector's details page in Logto's Admin Console."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,t.jsx)(n.strong,{children:"Note"})]}),"\n",(0,t.jsx)(n.p,{children:"Per current Logto's design, we only support Redirect-binding for sending authentication request and POST-binding for receiving SAML assertion. Although this sounds not cool, but we believe that the current design can handle most of your use cases. If you have any problems, feel free to reach out!"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"configure-saml-connector-sp",children:"Configure SAML connector (SP)"}),"\n",(0,t.jsx)(n.p,{children:"In this section, we will introduce each attribute in detail."}),"\n",(0,t.jsxs)(n.h4,{id:"entityid-required",children:["entityID ",(0,t.jsx)(n.code,{children:"Required"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"entityID"})," (i.e. ",(0,t.jsx)(n.code,{children:"issuer"}),") is Entity identifier. It is used to identify your entity (SAML SP entity), and match the equivalence in each SAML request/response."]}),"\n",(0,t.jsxs)(n.h4,{id:"signinendpoint-required",children:["signInEndpoint ",(0,t.jsx)(n.code,{children:"Required"})]}),"\n",(0,t.jsxs)(n.p,{children:["The IdP's endpoint that you send SAML authentication requests to. Usually, you can find this value in IdP details page (i.e. IdP's ",(0,t.jsx)(n.code,{children:"SSO URL"})," or ",(0,t.jsx)(n.code,{children:"Login URL"}),")."]}),"\n",(0,t.jsxs)(n.h4,{id:"x509certificate-required",children:["x509Certificate ",(0,t.jsx)(n.code,{children:"Required"})]}),"\n",(0,t.jsx)(n.p,{children:"The x509 certificate generated from IdPs private key, IdP is expected to have this value available."}),"\n",(0,t.jsxs)(n.p,{children:["The content of the certificate comes with ",(0,t.jsx)(n.code,{children:"-----BEGIN CERTIFICATE-----"})," header and ",(0,t.jsx)(n.code,{children:"-----END CERTIFICATE-----"})," tail."]}),"\n",(0,t.jsxs)(n.h4,{id:"idpmetadataxml-required",children:["idpMetadataXml ",(0,t.jsx)(n.code,{children:"Required"})]}),"\n",(0,t.jsx)(n.p,{children:"The field is used to place contents from your IdP metadata XML file."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,t.jsx)(n.strong,{children:"Note"})]}),"\n",(0,t.jsxs)(n.p,{children:["The XML parser we are using does not support customized namespace.\nIf the IdP metadata comes with namespace, you should manually remove them.\nFor namespace of XML file, see ",(0,t.jsx)(n.a,{href:"http://www.xmlmaster.org/en/article/d01/c10/",children:"reference"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.h4,{id:"assertionconsumerserviceurl-required",children:["assertionConsumerServiceUrl ",(0,t.jsx)(n.code,{children:"Required"})]}),"\n",(0,t.jsxs)(n.p,{children:["The assertion consumer service (ACS) URL is the SP's endpoint to receive IdP's SAML Assertion POST requests. As we mentioned in previous part, it is usually configured at IdP settings but some IdP get this value from SAML authentication requests, we hence also add this value as a REQUIRED field. It's value should look like ",(0,t.jsx)(n.code,{children:"${your_logto_origin}/api/authn/saml/${connector_id}"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"signauthnrequest",children:"signAuthnRequest"}),"\n",(0,t.jsxs)(n.p,{children:["The boolean value that controls whether SAML authentication request should be signed, whose default value is ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"encryptassertion",children:"encryptAssertion"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"encryptAssertion"})," is a boolean value that indicates if IdP will encrypt SAML assertion, with default value ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,t.jsx)(n.strong,{children:"Note"})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"signAuthnRequest"})," and ",(0,t.jsx)(n.code,{children:"encryptAssertion"})," attributes should align with corresponding parameters of IdP setting, otherwise error will be thrown to show that configuration does not match.\nAll SAML responses need to be signed."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"requestsignaturealgorithm",children:"requestSignatureAlgorithm"}),"\n",(0,t.jsxs)(n.p,{children:["This should be aligned with the signature algorithms of IdP so that Logto can verify the signature of the SAML assertion. Its value should be either ",(0,t.jsx)(n.code,{children:"http://www.w3.org/2000/09/xmldsig#rsa-sha1"}),", ",(0,t.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"})," or ",(0,t.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha512"})," and the default value is ",(0,t.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"messagesigningorder",children:"messageSigningOrder"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"messageSigningOrder"})," indicates the signing and encrypting order of IdP, it's value should be either ",(0,t.jsx)(n.code,{children:"sign-then-encrypt"})," or ",(0,t.jsx)(n.code,{children:"encrypt-then-sign"})," and the default value is ",(0,t.jsx)(n.code,{children:"sign-then-encrypt"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"privatekey-and-privatekeypass",children:"privateKey and privateKeyPass"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"privateKey"})," is an OPTIONAL value and is required when ",(0,t.jsx)(n.code,{children:"signAuthnRequest"})," is ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"privateKeyPass"})," is the password you've set when creating ",(0,t.jsx)(n.code,{children:"privateKey"}),", required when necessary."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"signAuthnRequest"})," is ",(0,t.jsx)(n.code,{children:"true"}),", the corresponding certificate generated from ",(0,t.jsx)(n.code,{children:"privateKey"})," is required by IdP for checking the signature."]}),"\n",(0,t.jsx)(n.h4,{id:"encprivatekey-and-encprivatekeypass",children:"encPrivateKey and encPrivateKeyPass"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"encPrivateKey"})," is an OPTIONAL value and is required when ",(0,t.jsx)(n.code,{children:"encryptAssertion"})," is ",(0,t.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"encPrivateKeyPass"})," is the password you've set when creating ",(0,t.jsx)(n.code,{children:"encPrivateKey"}),", required when necessary."]}),"\n",(0,t.jsxs)(n.p,{children:["If ",(0,t.jsx)(n.code,{children:"encryptAssertion"})," is ",(0,t.jsx)(n.code,{children:"true"}),", the corresponding certificate generated from ",(0,t.jsx)(n.code,{children:"encPrivateKey"})," is required by IdP for encrypting SAML assertion."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u2139\ufe0f ",(0,t.jsx)(n.strong,{children:"Note"})]}),"\n",(0,t.jsxs)(n.p,{children:["For keys and certificates generation, ",(0,t.jsx)(n.code,{children:"openssl"})," is a wonderful tool. Here is sample command line that might be helpful:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"openssl genrsa -passout pass:${privateKeyPassword} -out ${encryptPrivateKeyFilename}.pem 4096\nopenssl req -new -x509 -key ${encryptPrivateKeyFilename}.pem -out ${encryptionCertificateFilename}.cer -days 3650\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"privateKey"})," and ",(0,t.jsx)(n.code,{children:"encPrivateKey"})," files are enforced to be encoded in ",(0,t.jsx)(n.code,{children:"pkcs1"})," scheme as pem string, which means the private key files should start with ",(0,t.jsx)(n.code,{children:"-----BEGIN RSA PRIVATE KEY-----"})," and end with ",(0,t.jsx)(n.code,{children:"-----END RSA PRIVATE KEY-----"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"nameidformat",children:"nameIDFormat"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"nameIDFormat"})," is an OPTIONAL attribute that declares the name id format that would respond. The value can be among ",(0,t.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"}),", ",(0,t.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"}),", ",(0,t.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName"}),", ",(0,t.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"})," and ",(0,t.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:transient"}),", and the default value is ",(0,t.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:unspecified"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"timeout",children:"timeout"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"timeout"})," is the time tolerance for time validation, since the time between your SP entity and IdP entity could be different and network connection may also bring some delay. The unit is in millisecond, and the default value is 5000 (i.e. 5s)."]}),"\n",(0,t.jsx)(n.h4,{id:"profilemap",children:"profileMap"}),"\n",(0,t.jsxs)(n.p,{children:["Logto also provide a ",(0,t.jsx)(n.code,{children:"profileMap"})," field that users can customize the mapping from the social vendors' profiles which are usually not standard. Each ",(0,t.jsx)(n.code,{children:"profileMap"})," keys is Logto's standard user profile field name and corresponding value should be social profiles field name. In current stage, Logto only concern 'id', 'name', 'avatar', 'email' and 'phone' from social profile, only 'id' is REQUIRED and others are optional fields."]}),"\n",(0,t.jsx)(n.h4,{id:"config-types",children:"Config types"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Default Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"signInEndpoint"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"x509certificate"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"idpMetadataXml"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"entityID"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"assertionConsumerServiceUrl"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"messageSigningOrder"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"encrypt-then-sign"})," | ",(0,t.jsx)(n.code,{children:"sign-then-encrypt"})]}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sign-then-encrypt"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"requestSignatureAlgorithm"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"http://www.w3.org/2000/09/xmldsig#rsa-sha1"})," | ",(0,t.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"})," | ",(0,t.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha512"})]}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"signAuthnRequest"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"false"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"encryptAssertion"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"false"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"privateKey"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"privateKeyPass"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nameIDFormat"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"})," | ",(0,t.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"})," | ",(0,t.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:X509SubjectName"})," | ",(0,t.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:persistent"})," | ",(0,t.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:2.0:nameid-format:transient"})]}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timeout"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"5000"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"profileMap"}),(0,t.jsx)(n.td,{children:"ProfileMap"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"ProfileMap fields"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Default value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"id"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"id"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"name"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"avatar"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"avatar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"email"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"email"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"phone"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"phone"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"http://docs.oasis-open.org/security/saml/v2.0/saml-profiles-2.0-os.pdf",children:"Profiles for the OASIS Security Assertion Markup Language (SAML) V2.0"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/tngan/samlify",children:"samlify - Highly configuarable Node.js SAML 2.0 library for Single Sign On"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},86269:(e,n,i)=>{i.d(n,{ZP:()=>p,d$:()=>l});var t=i(11527),s=i(17279),r=i(20492),o=i(81301),d=i(72226),c=i(55257),a=i(94842);const l=[...r.d$,{value:"Installation",id:"installation",level:3},...o.d$,...d.d$,{value:"Update Razor pages",id:"update-razor-pages",level:3},...c.d$,...a.d$];function h(e){const n={h3:"h3",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.ZP,{}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(o.ZP,{}),"\n",(0,t.jsx)(d.ZP,{}),"\n",(0,t.jsx)(n.h3,{id:"update-razor-pages",children:"Update Razor pages"}),"\n",(0,t.jsx)(c.ZP,{}),"\n",(0,t.jsx)(a.ZP,{sdk:".NET Core (Blazor Server)"})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},12665:(e,n,i)=>{i.d(n,{ZP:()=>d,d$:()=>r});var t=i(11527),s=i(17279);const r=[];function o(e){const n={img:"img",p:"p",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Connector tab",src:i(88065).Z+"",width:"3352",height:"1226"})}),"\n",(0,t.jsxs)("p",{children:['In the openning modal, select "',e.connector,'" and click "Next".']}),"\n",(0,t.jsx)(n.p,{children:"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."}),"\n",(0,t.jsx)(n.p,{children:"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},80710:(e,n,i)=>{i.d(n,{ZP:()=>c,d$:()=>o});var t=i(11527),s=i(17279);const r=i.p+"assets/images/create-application-modal-136b6119e66a20d765a416417aeeefda.png",o=[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}];function d(e){const n={code:"code",h3:"h3",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In you browser, open a new tab and enter the link of Logto Admin Console."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Get Started",src:i(57794).Z+"",width:"2354",height:"588"})}),"\n",(0,t.jsxs)(n.p,{children:['Once the page is loaded, in the "Get Started" section click the ',(0,t.jsx)(n.code,{children:"View all"})," link to open the application framework list page."]}),"\n",(0,t.jsx)(n.h3,{id:"choose-your-application-type",children:"Choose your application type"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Framework List",src:i(43477).Z+"",width:"3626",height:"2804"})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['In the opening modal, scroll to the "',e.type,'" section or filter all the available "\n',e.type,'" frameworks using the quick filter checkboxes on the left.']})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Click the"," ","\n",e.framework.split("/").map((e=>`"${e.trim()}"`)).join(" / ")," ","\nframework card to start creating your application."]})}),"\n",(0,t.jsx)(n.h3,{id:"enter-application-name",children:"Enter application name"}),"\n",(0,t.jsx)("center",{children:(0,t.jsx)("img",{src:r,alt:"Create Application modal",width:"700"})}),"\n",(0,t.jsx)(n.p,{children:'Enter the application name, e.g., "Bookstore," and click "Create Application."'}),"\n",(0,t.jsx)(n.p,{children:"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."})]})}function c(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},31877:(e,n,i)=>{i.d(n,{ZP:()=>d,d$:()=>r});var t=i(11527),s=i(17279);const r=[];function o(e){const n={admonition:"admonition",img:"img",p:"p",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration."})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Sign-in Experience tab",src:i(68150).Z+"",width:"3502",height:"1794"})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',e.connector," ","\nsign-in, which may increase your conversion rate."]})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['In the "Social sign-in" section, add "Add Social Connector" and choose "',e.connector,'". Then\nyou should be able to see a button with text "Continue with ',e.connector,'" in the preview\nsection.']})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Save changes",src:i(75877).Z+"",width:"2474",height:"188"})}),"\n",(0,t.jsx)(n.p,{children:'Finally, click "Save Changes" on the bottom right corner.'})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},87593:(e,n,i)=>{i.d(n,{ZP:()=>d,d$:()=>r});var t=i(11527),s=i(17279);const r=[];function o(e){const n={a:"a",admonition:"admonition",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:["\n","\n",(0,t.jsx)(n.admonition,{title:"For our new friends",type:"info",children:(0,t.jsxs)(n.p,{children:["Every app needs authentication and authorization. ",(0,t.jsx)(n.a,{href:"https://logto.io",children:"Logto"})," is an Auth0 alternative designed for modern apps and SaaS products."]})}),"\n",(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["In this article, we will go through the steps to quickly build the ",e.connector," sign-in\nexperience (user authentication) with ",(0,t.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk})," and\xa0\n",(0,t.jsx)("a",{href:"https://logto.io",target:"_blank",rel:"noopener",children:"Logto"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Prerequisites"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A running Logto instance. Check out the ",(0,t.jsx)(n.a,{href:"/docs/tutorials/get-started/",children:"get started page"})," if you don't have one."]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)("span",{children:["Basic knowledge of ",(0,t.jsx)("a",{href:e.link,target:"_blank",rel:"noopener",children:e.sdk}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)("span",{children:["A usable ",e.connector," account."]}),"\n"]}),"\n"]}),"\n"]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},80386:(e,n,i)=>{i.d(n,{ZP:()=>d,d$:()=>r});var t=i(11527),s=i(17279);const r=[];function o(e){const n={p:"p",...(0,s.a)(),...e.components};return(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:['Double check you have filled out necessary values in the Logto connector configuration area. Click\n"Save and Done" (or "Save Changes") and the ',e.connector," connector should be available now."]})})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},94842:(e,n,i)=>{i.d(n,{ZP:()=>d,d$:()=>r});var t=i(11527),s=i(17279);const r=[];function o(e){const n={admonition:"admonition",p:"p",...(0,s.a)(),...e.components};return(0,t.jsx)(n.admonition,{title:"Test your integration",type:"info",children:(0,t.jsxs)(n.p,{children:["Open your ",e.sdk,' app to test if the integration works. When you click the "Sign In" button,\nthe page should be redirected to a Logto sign-in page, and you should be able to create a new\naccount by entering username and password and complete the sign-in process.']})})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},23095:(e,n,i)=>{i.d(n,{ZP:()=>d,d$:()=>r});var t=i(11527),s=i(17279);const r=[];function o(e){const n={p:"p",...(0,s.a)(),...e.components};return(0,t.jsx)("p",{children:(0,t.jsxs)(n.p,{children:["Return to your ",e.sdk," app. You should now be able to sign in with ",e.connector,". Enjoy!"]})})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1044:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,connector:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var t=i(11527),s=i(17279);i(87593),i(80710),i(12665),i(80386),i(31877),i(23095),i(86269),i(52393);const r={slug:"how-to-build-saml-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","saml","dotnet-core-blazor-webassembly","c#","social-sign-in","sign-in","login"],title:"How to build SAML sign-in with .NET Core (Blazor WebAssembly) and Logto"},o=void 0,d={permalink:"/tutorial/how-to-build-saml-sign-in-with-dotnet-core-blazor-webassembly-and-logto",source:"@site/tutorial/build-with-logto/generated-dotnet-core-blazor-webassembly-saml.mdx",title:"How to build SAML sign-in with .NET Core (Blazor WebAssembly) and Logto",description:"\x3c!--",date:"2024-06-05T09:30:43.000Z",tags:[{inline:!0,label:"authentication",permalink:"/tutorial/tags/authentication"},{inline:!0,label:"saml",permalink:"/tutorial/tags/saml"},{inline:!0,label:"dotnet-core-blazor-webassembly",permalink:"/tutorial/tags/dotnet-core-blazor-webassembly"},{inline:!0,label:"c#",permalink:"/tutorial/tags/c"},{inline:!0,label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{inline:!0,label:"sign-in",permalink:"/tutorial/tags/sign-in"},{inline:!0,label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.335,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"The better identity infrastructure for developers",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-saml-sign-in-with-dotnet-core-blazor-webassembly-and-logto",authors:"logto",tags:["authentication","saml","dotnet-core-blazor-webassembly","c#","social-sign-in","sign-in","login"],title:"How to build SAML sign-in with .NET Core (Blazor WebAssembly) and Logto"},unlisted:!1,prevItem:{title:"How to build OIDC sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-oidc-sign-in-with-dotnet-core-blazor-webassembly-and-logto"},nextItem:{title:"How to build SendGrid Email passwordless sign-in with .NET Core (Blazor WebAssembly) and Logto",permalink:"/tutorial/how-to-build-sendgrid-sign-in-with-dotnet-core-blazor-webassembly-and-logto"}},c={authorsImageUrls:[void 0]},a="SAML",l=[];function h(e){return(0,t.jsx)(t.Fragment,{})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h()}},20492:(e,n,i)=>{i.d(n,{ZP:()=>d,d$:()=>r});var t=i(11527),s=i(17279);const r=[];function o(e){const n={a:"a",admonition:"admonition",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The following demonstration is built on .NET Core 8.0 and ",(0,t.jsx)(n.a,{href:"https://github.com/WildGums/Blorc.OpenIdConnect",children:"Blorc.OpenIdConnect"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The .NET Core sample projects are available in the ",(0,t.jsx)(n.a,{href:"https://github.com/logto-io/csharp",children:"GitHub repository"}),"."]}),"\n"]})})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},81301:(e,n,i)=>{i.d(n,{ZP:()=>d,d$:()=>r});var t=i(11527),s=i(17279);const r=[];function o(e){const n={code:"code",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Add the NuGet package to your project:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"dotnet add package Blorc.OpenIdConnect\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},72226:(e,n,i)=>{i.d(n,{ZP:()=>d,d$:()=>r});var t=i(11527),s=i(17279);const r=[{value:"Add script references",id:"add-script-references",level:3},{value:"Register services",id:"register-services",level:3},{value:"Configure application",id:"configure-application",level:3}];function o(e){const n={admonition:"admonition",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"add-script-references",children:"Add script references"}),"\n",(0,t.jsxs)(n.p,{children:["Include ",(0,t.jsx)(n.code,{children:"Blorc.Core/injector.js"})," the ",(0,t.jsx)(n.code,{children:"index.html"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'<head>\n  \x3c!-- ... --\x3e\n  <script src="_content/Blorc.Core/injector.js"><\/script>\n  \x3c!-- ... --\x3e\n</head>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"register-services",children:"Register services"}),"\n",(0,t.jsxs)(n.p,{children:["Add the following code to the ",(0,t.jsx)(n.code,{children:"Program.cs"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'using Blorc.OpenIdConnect;\nusing Blorc.Services;\n\nbuilder.Services.AddBlorcCore();\nbuilder.Services.AddAuthorizationCore();\nbuilder.Services.AddBlorcOpenIdConnect(\n    options =>\n    {\n        builder.Configuration.Bind("IdentityServer", options);\n    });\n\nvar webAssemblyHost = builder.Build();\n\nawait webAssemblyHost\n    .ConfigureDocumentAsync(async documentService =>\n    {\n        await documentService.InjectBlorcCoreJsAsync();\n        await documentService.InjectOpenIdConnectAsync();\n    });\n\nawait webAssemblyHost.RunAsync();\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["There's no need to use the ",(0,t.jsx)(n.code,{children:"Microsoft.AspNetCore.Components.WebAssembly.Authentication"})," package. The ",(0,t.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package will take care of the authentication process."]})}),"\n",(0,t.jsx)(n.h3,{id:"configure-application",children:"Configure application"}),"\n",(0,t.jsxs)(n.p,{children:["Add the following code to the ",(0,t.jsx)(n.code,{children:"appsettings.json"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json5",children:"{\n  // ...\n  IdentityServer: {\n    Authority: 'https://<your-logto-endpoint>/oidc',\n    ClientId: '<your-logto-app-id>',\n    PostLogoutRedirectUri: '<your-app-url>',\n    RedirectUri: '<your-app-url>',\n    ResponseType: 'code',\n    Scope: 'openid profile', // Add more scopes if needed\n  },\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Remember to add the ",(0,t.jsx)(n.code,{children:"RedirectUri"})," and ",(0,t.jsx)(n.code,{children:"PostLogoutRedirectUri"})," to the list of allowed redirect URIs in the Logto application settings. They are both the URL of your WASM application."]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},55257:(e,n,i)=>{i.d(n,{ZP:()=>d,d$:()=>r});var t=i(11527),s=i(17279);const r=[{value:"Add <code>AuthorizeView</code> component",id:"add-authorizeview-component",level:3},{value:"Set up authentication",id:"set-up-authentication",level:3},{value:"Display user information",id:"display-user-information",level:3}];function o(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.h3,{id:"add-authorizeview-component",children:["Add ",(0,t.jsx)(n.code,{children:"AuthorizeView"})," component"]}),"\n",(0,t.jsxs)(n.p,{children:["In the Razor pages that require authentication, add the ",(0,t.jsx)(n.code,{children:"AuthorizeView"})," component. Let's assume it's the ",(0,t.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cshtml",children:'@using Microsoft.AspNetCore.Components.Authorization\n@page "/"\n\n<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        <button @onclick="OnLogoutButtonClickAsync">\n            Sign out\n        </button>\n    </Authorized>\n    <NotAuthorized>\n        @* Unauthenticated view *@\n        <button @onclick="OnLoginButtonClickAsync">\n            Sign in\n        </button>\n    </NotAuthorized>\n</AuthorizeView>\n'})}),"\n",(0,t.jsx)(n.h3,{id:"set-up-authentication",children:"Set up authentication"}),"\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.code,{children:"Home.razor.cs"})," file (create it if it doesn't exist), add the following code:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:"using Microsoft.AspNetCore.Authorization;\nusing Microsoft.AspNetCore.Components;\nusing Microsoft.AspNetCore.Components.Web;\nusing Blorc.OpenIdConnect;\nusing Microsoft.AspNetCore.Components.Authorization;\n\n[Authorize]\npublic partial class Home : ComponentBase\n{\n    [Inject]\n    public required IUserManager UserManager { get; set; }\n\n    public User<Profile>? User { get; set; }\n\n    [CascadingParameter]\n    protected Task<AuthenticationState>? AuthenticationStateTask { get; set; }\n\n    protected override async Task OnInitializedAsync()\n    {\n        User = await UserManager.GetUserAsync<User<Profile>>(AuthenticationStateTask!);\n    }\n\n    private async Task OnLoginButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignInRedirectAsync();\n    }\n\n    private async Task OnLogoutButtonClickAsync(MouseEventArgs obj)\n    {\n        await UserManager.SignOutRedirectAsync();\n    }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Once the user is authenticated, the ",(0,t.jsx)(n.code,{children:"User"})," property will be populated with the user information."]}),"\n",(0,t.jsx)(n.h3,{id:"display-user-information",children:"Display user information"}),"\n",(0,t.jsxs)(n.p,{children:["Here are some examples of how to display user information in the ",(0,t.jsx)(n.code,{children:"Home.razor"})," page:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cshtml",children:'<AuthorizeView>\n    <Authorized>\n        @* Signed in view *@\n        @* ... *@\n        <p>You are signed in as @(@User?.Profile?.Name ?? "(unknown name)").</p>\n    </Authorized>\n    @* ... *@\n</AuthorizeView>\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For more properties and claims, check the ",(0,t.jsx)(n.code,{children:"User"})," and ",(0,t.jsx)(n.code,{children:"Profile"})," classes in the ",(0,t.jsx)(n.code,{children:"Blorc.OpenIdConnect"})," package."]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},88065:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},43477:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/framework-list-fa8640804a64dea54236744f3287635b.png"},57794:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/get-started-82fd0b8e277e116b01ce1ccaa1b04c8d.png"},75877:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},68150:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/sie-tab-12b63a01ce248b8eb8edd1cfd796cb1b.png"},17279:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>o});var t=i(50959);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);