"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[60740],{20630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=t(11527),o=t(17279);const r={sidebar_label:"Configure popular email service",sidebar_position:2},c="Configure popular email service",l={id:"docs/recipes/configure-connectors/email-connector/configure-popular-email-service",title:"Configure popular email service",description:"Logto provides a low-code configuration for the most popular email delivery service providers. They are using similar configuration steps so you can get started quickly.",source:"@site/docs/docs/recipes/configure-connectors/email-connector/configure-popular-email-service.md",sourceDirName:"docs/recipes/configure-connectors/email-connector",slug:"/docs/recipes/configure-connectors/email-connector/configure-popular-email-service",permalink:"/docs/recipes/configure-connectors/email-connector/configure-popular-email-service",draft:!1,unlisted:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/configure-connectors/email-connector/configure-popular-email-service.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Configure popular email service",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Configure Logto email service",permalink:"/docs/recipes/configure-connectors/email-connector/configure-logto-email-service"},next:{title:"Enable email sign-in",permalink:"/docs/recipes/configure-connectors/email-connector/enable-email-sign-in"}},s={},a=[{value:"Configuration steps",id:"configuration-steps",level:2},{value:"Email template",id:"email-template",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configure-popular-email-service",children:"Configure popular email service"}),"\n",(0,i.jsx)(n.p,{children:"Logto provides a low-code configuration for the most popular email delivery service providers. They are using similar configuration steps so you can get started quickly."}),"\n",(0,i.jsx)(n.p,{children:"You can refer to the specific doc for detailed instructions on registering each email service provider. Supported email service providers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-aws-ses",children:"AWS direct mail connector"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-mailgun",children:"Mailgun mail connector"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-sendgrid-email",children:"SendGrid mail connector"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-smtp",children:"SMTP connector"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-aliyun-dm",children:"Aliyun direct mail connector"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuration-steps",children:"Configuration steps"}),"\n",(0,i.jsx)(n.p,{children:"Follow these steps to configure your email connector:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Go to \u201cConnector > Email and SMS connectors\u201d in Logto Console."}),"\n",(0,i.jsx)(n.li,{children:'To add a new one, click the "Set up" button and select the desired Email connector.'}),"\n",(0,i.jsx)(n.li,{children:"In the configuration process, follow the steps below:"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Go through the README doc for each type connector on the left, then follow the instructions."}),"\n",(0,i.jsx)(n.li,{children:"Fill out any required forms in the Parameter Configuration section on the right."}),"\n",(0,i.jsx)(n.li,{children:"Customize the Email template to fit your needs by editing the JSON code."}),"\n",(0,i.jsx)(n.li,{children:"Test the configuration by sending an Email verification code to your email address using the \u201cGeneric\u201d template."}),"\n",(0,i.jsx)(n.li,{children:'Click "Save and Done" to finish.'}),"\n"]}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"After making the necessary changes, remember to send a test email to your email address."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Configure email connector guideline",src:t(69972).Z+"",width:"2512",height:"2666"})}),"\n",(0,i.jsx)(n.p,{children:"If you wish to change the current Email connector, simply access the connector details page and click the \u201cChange connector\u201d button of the \u201cMore\u201d menu in the top-right corner. Or you can delete the old connector first, then add a new Email connector."}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.p,{children:["You can bring ONLY ONE ",(0,i.jsx)(n.em,{children:"email connector"})," alive."]}),(0,i.jsxs)(n.p,{children:["If you change the active email connector and save changes, the previous Email connector will be disabled automatically. Also, the ",(0,i.jsx)(n.em,{children:"config"})," of past connectors will lose track. You may keep the old connectors' ",(0,i.jsx)(n.em,{children:"config"})," properly if you want to switch back to those connectors in the future."]})]}),"\n",(0,i.jsx)(n.h2,{id:"email-template",children:"Email template"}),"\n",(0,i.jsx)(n.p,{children:"Notice that:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Logto provides four different templates for customizing Email content, which are categorized based on their usage type: Register, SignIn, ForgotPassword, and Generic. It is highly recommended that you use different templates for various use cases, or it could trigger flow control, leading to a temporary outage of your service."}),"\n",(0,i.jsx)(n.li,{children:"The verification code is valid for 10 minutes by default."}),"\n",(0,i.jsxs)(n.li,{children:["The verification code number sent to users uses the variate of ",(0,i.jsx)(n.code,{children:"{{code}}"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Usage"}),(0,i.jsx)(n.th,{children:"Scenario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Register"}),(0,i.jsx)(n.td,{children:"Users create an account using their email and verify by entering the verification code."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"SignIn"}),(0,i.jsx)(n.td,{children:"Users sign in using their email and verify by entering verification code instead of entering a password."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ForgotPassword"}),(0,i.jsx)(n.td,{children:"If users forget their password during sign-in, they can choose to verify their identity using their email."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Generic"}),(0,i.jsx)(n.td,{children:"This template can be used as a generic backup option for various scenarios, including linking an email to an existing account or testing connector configuration\u2026"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"There is a template example just for reference:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Email template of Logto for reference",src:t(57378).Z+"",width:"1876",height:"1364"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'<table cellpadding="0" cellspacing="0" border="0" width="100%"\n  style="font-family: -apple-system, system-ui, \'BlinkMacSystemFont\', \'Segoe UI\', \'Roboto\', \'Arial\', sans-serif;">\n  <tr>\n    <td align="center" valign="center">\n      <table cellpadding="0" cellspacing="0" border="0" width="100%"\n        style="max-width: 680px; border-radius: 16px; border: 1px solid #E0E3E3; padding: 32px; background-color: #FFFFFF;">\n        <tr>\n          <td align="center" valign="center">\n            <img\n              src="https://logtodev.blob.core.windows.net/public-blobs/default/r2a6qctI3lmG/2023/03/16/7Sf0Kx1N/logto_light.png"\n              width="164" height="60" style="margin-bottom: 16px;" alt="logto" />\n          </td>\n        </tr>\n        <tr>\n          <td align="center" valign="center" style="padding-bottom: 16px;">\n            <table cellpadding="0" cellspacing="0" border="0" width="100%" style="padding: 16px 32px;">\n              <tr>\n                <td align="center" valign="center" style="padding-bottom: 20px;">\n                  <h1 style=" font-size: 24px; font-weight: 600; color: #191C1D; line-height: 32px;">\n                    <a href="https://www.{{domain}}/account/verify?token={{token}}"\n                      style="color: #191C1D; text-decoration: none;">Verify your email to sign up for Logto</a>\n                  </h1>\n                </td>\n              </tr>\n              <tr>\n                <td align="center" valign="center" style="padding-bottom: 20px;">\n                  <div style="font-size: 14px; font-weight: 400; color: #191C1D;  line-height: 20px;">\n                    We have received a sign-up attempt with the following code. Please enter it in the browser window\n                    where\n                    you started signing up for Logto.\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td align="center" valign="center" style="background: #EFF1F1; padding: 35px; border-radius: 12px;">\n                  <div style="font-size: 32px; font-weight: 600; color: #191C1D;  line-height: 40px;">\n                    {{code}}\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td align="center" valign="center" style="padding-top: 20px;">\n                  <div style="font-size: 14px; font-weight: 400; color: #747778; line-height: 20px;">\n                    If you did not attempt to sign up but received this email, please disregard it. The code will remain\n                    active for 10 minutes.\n                  </div>\n                </td>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td align="center" valign="center" style="padding-top: 32px;">\n            <table cellpadding="0" cellspacing="0" border="0" width="100%">\n              <tr>\n                <td align="center" valign="center" width="100%" style="padding-bottom: 16px;">\n                  <div style="border-top: 1px solid #E0E3E3; width: 65%;"></div>\n                </td>\n              </tr>\n              <tr>\n                <td align="center" valign="center" style="padding-bottom: 16px;">\n                  <div style="font-size: 14px; font-weight: 400; color: #747778;  line-height: 20px;">\n                    Logto, an effortless identity solution with all the features you need.\n                  </div>\n                </td>\n              </tr>\n              <tr>\n                <td align="center" valign="center" style="padding-bottom: 16px;">\n                  <table cellpadding="0" cellspacing="0" border="0" width="200px">\n                    <tr>\n                      <td align="center" valign="center">\n                        <a href="https://discord.gg/UEPaF3j5e6" target="_blank" rel="noopener">\n                          <img\n                            src="https://logtodev.blob.core.windows.net/public-blobs/default/r2a6qctI3lmG/2023/03/16/oPAkDBTF/discord.png"\n                            width="20px" height="20px" alt="discord" style="object-fit: contain;" />\n                        </a>\n                      </td>\n                      <td align="center" valign="center">\n                        <a href="https://github.com/logto-io/logto" target="_blank" rel="noopener">\n                          <img\n                            src="https://logtodev.blob.core.windows.net/public-blobs/default/r2a6qctI3lmG/2023/03/16/ZwpzN1WU/github.png"\n                            width="20px" height="20px" alt="github" style="object-fit: contain;" />\n                        </a>\n                      </td>\n                      <td align="center" valign="center">\n                        <a href="https://twitter.com/silverhand_io" target="_blank" rel="noopener">\n                          <img\n                            src="https://logtodev.blob.core.windows.net/public-blobs/default/r2a6qctI3lmG/2023/03/16/yoscEXbx/twitter.png"\n                            width="20px" height="20px" alt="twitter" style="object-fit: contain;" />\n                        </a>\n                      </td>\n                      <td align="center" valign="center">\n                        <a href="https://logto.io/subscribe" target="_blank" rel="noopener">\n                          <img\n                            src="https://logtodev.blob.core.windows.net/public-blobs/default/r2a6qctI3lmG/2023/03/16/Us1blUfD/subscribe.png"\n                            width="20px" height="20px" alt="subscribe" style="object-fit: contain;" />\n                        </a>\n                      </td>\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n              <tr>\n                <td align="center" valign="center">\n                  <div style="font-size: 12px; font-weight: 400; color: #747778; line-height: 16px;">\n                    \xa9 2023 Logto. All rights reserved.\n                  </div>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </table>\n    </td>\n  </tr>\n</table>\n'})}),"\n",(0,i.jsx)(n.p,{children:'You can then escape the HTML code above and add it to the connector "Template" field in configs as follows (assuming using SendGrid connector):'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "subject": "<sign-in-template-subject>",\n  "content": "<table cellpadding=\\"0\\" cellspacing=\\"0\\" ...",\n  "usageType": "SignIn",\n  "type": "text/html"\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},69972:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/configure-email-connector-guideline-823e9b86b9f1ddafb112aee1bf86cd10.png"},57378:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/email-template-of-Logto-for-reference-badb2c225b4ddd402b755c212fe26ba5.webp"},17279:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var i=t(50959);const o={},r=i.createContext(o);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);