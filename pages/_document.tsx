import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
            <Main />
            <NextScript />
            {/* Using dangerouslySetInnerHTML to ensure noscript renders before script */}
            <noscript
                dangerouslySetInnerHTML={{
                    __html: `
              <a href="https://www.livechat.com/chat-with/18426246/" rel="nofollow">Chat with us</a>, powered by
              <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a>
            `,
                }}
            />
            <Script id="livechat-script" strategy="afterInteractive">
                {`
          window._lc = window._lc || {};
          window.__lc.license = 18426246;
          window.__lc.integration_name = "manual_channels";
          window.__lc.product_name = "livechat";
          ;(function(n,t,c){
            function i(n){return e.h?e._h.apply(null,n):e._q.push(n)}
            var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},
            once:function(){i(["once",c.call(arguments)])},
            off:function(){i(["off",c.call(arguments)])},
            get:function(){
              if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");
              return i(["get",c.call(arguments)])
            },
            call:function(){i(["call",c.call(arguments)])},
            init:function(){
              var n=t.createElement("script");
              n.async=!0,n.type="text/javascript",
              n.src="https://cdn.livechatinc.com/tracking.js",
              t.head.appendChild(n)
            }};
            !n._lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e
          }(window,document,[].slice))
        `}
            </Script>
            </body>
        </Html>
    )
}
