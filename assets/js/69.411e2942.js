(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{563:function(t,a,e){"use strict";e.r(a);var v=e(6),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("几种常用的认证机制")]),t._v(" "),e("h3",{attrs:{id:"http-basic-auth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-basic-auth"}},[t._v("#")]),t._v(" HTTP Basic Auth")]),t._v(" "),e("p",[t._v("HTTP Basic Auth简单点说明就是每次请求API时都提供用户的 username 和 password，简言之，Basic Auth是配合RESTful API 使用的最简单的认证方式，只需提供用户名密码即可，\n但由于有把用户名密码暴露给第三方客户端的风险，在生产环境下被使用的越来越少。因此，在开发对外开放的 RESTful API 时，尽量避免采用 HTTP Basic Auth")]),t._v(" "),e("h3",{attrs:{id:"oauth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#oauth"}},[t._v("#")]),t._v(" OAuth")]),t._v(" "),e("p",[t._v("OAuth（开放授权）是一个开放的授权标准，允许用户让第三方应用访问该用户在某一web服务上存储的私密的资源（如照片，视频，联系人列表），而无需将用户名和密码提供给第三方应用。")]),t._v(" "),e("p",[t._v("OAuth 允许用户提供一个令牌，而不是用户名和密码来访问他们存放在特定服务提供者的数据。每一个令牌授权一个特定的第三方系统。例如，视频编辑网站)在特定的时段（例如，接下来的2小时内）内访问特定的资源（例如仅仅是某一相册中的视频）。这样，OAuth让用户可以授权第三方网站访问他们存储在另外服务提供者的某些特定信息，而非所有内容。")]),t._v(" "),e("p",[t._v("下面是OAuth2.0的流程：\n"),e("img",{attrs:{src:"http://cdn.gqsu.top/jwt01.png",alt:""}})]),t._v(" "),e("p",[t._v("这种基于OAuth的认证机制适用于个人消费者类的互联网产品，如社交类APP等应用，但是不太适合拥有自有认证权限管理的企业应用；")]),t._v(" "),e("h3",{attrs:{id:"cookie-auth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cookie-auth"}},[t._v("#")]),t._v(" Cookie Auth")]),t._v(" "),e("p",[t._v("Cookie认证机制就是为一次请求认证在服务端创建一个Session对象，同时在客户端的浏览器端创建了一个Cookie对象；\n通过客户端带上来 Cookie 对象来与服务器端的 session 对象匹配来实现状态管理的。\n默认的，当我们关闭浏览器的时候，cookie会被删除。但可以通过修改 cookie 的 expire time 使 cookie 在一定时间内有效；")]),t._v(" "),e("h3",{attrs:{id:"token-auth"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#token-auth"}},[t._v("#")]),t._v(" Token Auth")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://cdn.gqsu.top/jwt02.png",alt:""}})]),t._v(" "),e("p",[t._v("Token Auth的优点:")]),t._v(" "),e("p",[t._v("Token机制相对于Cookie机制又有什么好处呢？")]),t._v(" "),e("ul",[e("li",[t._v("支持跨域访问: Cookie是不允许垮域访问的，这一点对Token机制是不存在的，前提是传输的用户认证信息通过HTTP头传输.")]),t._v(" "),e("li",[t._v("无状态(也称：服务端可扩展行):Token机制在服务端不需要存储session信息，因为Token 自身包含了所有登录用户的信息，只需要在客户端的cookie或本地介质存储状态信息.")]),t._v(" "),e("li",[t._v("更适用CDN: 可以通过内容分发网络请求你服务端的所有资料（如：javascript，HTML,图片等），而你的服务端只要提供API即可.")]),t._v(" "),e("li",[t._v("去耦: 不需要绑定到一个特定的身份验证方案。Token可以在任何地方生成，只要在你的API被调用的时候，你可以进行Token生成调用即可.")]),t._v(" "),e("li",[t._v("更适用于移动应用: 当你的客户端是一个原生平台（iOS, Android，Windows 8等）时，Cookie是不被支持的（你需要通过Cookie容器进行处理），这时采用Token认证机制就会简单得多。")]),t._v(" "),e("li",[t._v("CSRF:因为不再依赖于Cookie，所以你就不需要考虑对CSRF（跨站请求伪造）的防范。")]),t._v(" "),e("li",[t._v("性能: 一次网络往返时间（通过数据库查询session信息）总比做一次HMACSHA256计算 的Token验证和解析要费时得多.")]),t._v(" "),e("li",[t._v("不需要为登录页面做特殊处理: 如果你使用Protractor 做功能测试的时候，不再需要为登录页面做特殊处理.")]),t._v(" "),e("li",[t._v("基于标准化:你的API可以采用标准化的 JSON Web Token (JWT). 这个标准已经存在多个后端库（.NET, Ruby, Java,Python, PHP）和多家公司的支持（如：Firebase,Google, Microsoft）.")])]),t._v(" "),e("h3",{attrs:{id:"基于jwt的token认证机制实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基于jwt的token认证机制实现"}},[t._v("#")]),t._v(" 基于JWT的Token认证机制实现")]),t._v(" "),e("p",[t._v("JSON Web Token(JWT)是一种开放标准(RFC 7519)，它定义了一种紧凑独立的基于JSON对象在各方之间安全地传输信息的方式。这些信息可以被验证和信任，因为它是数字签名的。JWTs可以使用一个密钥(HMAC算法)，或使用RSA的公钥/私钥密钥对对信息进行签名。")]),t._v(" "),e("p",[t._v("让我们进一步解释这个定义的一些概念。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("紧凑")])])]),t._v(" "),e("p",[t._v("由于其较小的体积，JWTs可以通过URL、POST参数或HTTP头部参数进行传递，体积小也意味着其传输速度会相当快。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("独立")])])]),t._v(" "),e("p",[t._v("有效负载包含了所需要的关于用户的所有信息，避免了多次查询数据库的需要。")]),t._v(" "),e("h4",{attrs:{id:"jwt的应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jwt的应用场景"}},[t._v("#")]),t._v(" JWT的应用场景")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("认证")])])]),t._v(" "),e("p",[t._v("这是使用JWT最常见的场景，一旦用户登录后，每个后续的请求都会包含JWT token，允许用户访问该token所允许的路由、服务、资源等。如单点登录是目前广泛使用JWT的一项功能，因为它的开销很小，而且在不同的域名中很容易使用。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("信息交换")])])]),t._v(" "),e("p",[t._v("JWT是一种在多方之间传递数据比较好的方式，因为JWT能使用签名，能确保发送者是谁，也可以验证传递过来的的信息是否被篡改。")]),t._v(" "),e("h4",{attrs:{id:"jwt的结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jwt的结构"}},[t._v("#")]),t._v(" JWT的结构")]),t._v(" "),e("p",[t._v("JWT由以下三部分组成：")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("Header（头部）")])]),t._v(" "),e("li",[e("strong",[t._v("Payload（载荷）")])]),t._v(" "),e("li",[e("strong",[t._v("Signature（签名）")])])]),t._v(" "),e("p",[t._v("因此，JWT通常看起来如下。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("xxxxx.yyyyy.zzzzz\n")])])]),e("p",[e("strong",[t._v("1、Header")])]),t._v(" "),e("p",[t._v("header通常由两个部分组成：token类型（即JWT)和正在使用的散列算法，如HMAC SHA256或RSA。")]),t._v(" "),e("p",[t._v("如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{  "alg": "HS256",  "typ": "JWT"}\n')])])]),e("p",[t._v("这个JSON经过Base64编码后形成JWT的第一部分。")]),t._v(" "),e("p",[e("strong",[t._v("2、Payload")])]),t._v(" "),e("p",[t._v("载荷包含了对实体的申明，用户和一些其他元信息。申明以下三种。")]),t._v(" "),e("ol",[e("li",[t._v("注册的申明")]),t._v(" "),e("li",[t._v("公开的申明")]),t._v(" "),e("li",[t._v("私有的申明")])]),t._v(" "),e("p",[t._v("如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{  "sub": "1234567890",  "name": "John Doe",  "admin": true}\n')])])]),e("p",[t._v("这个JSON经过Base64编码后形成JWT的第二部分。")]),t._v(" "),e("p",[e("strong",[t._v("3、Signature")])]),t._v(" "),e("p",[t._v("签名用于验证JWT的发送者是谁，并确保消息在过程中不会被篡改。")]),t._v(" "),e("p",[t._v("创建签名部分，你需要用到编码后的header、编码后的payload、密钥、在header中指定的算法。")]),t._v(" "),e("p",[t._v("如下使用HMAC SHA256算法创建签名的方式：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('HMACSHA256(  base64UrlEncode(header) + "." +  base64UrlEncode(payload),  secret)\n')])])]),e("p",[t._v("讲完了上面3个部门，最后就是由这3部分组成了。每个部分经过base64编码后，以.分隔。它能很容易的在HTML和HTTP环境中传递，也比像类似xml标准格式这样的更紧凑。")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://cdn.gqsu.top/jwt01-1.png",alt:"img"}})]),t._v(" "),e("p",[t._v("如果想使用JWT并将这些概念应用到实践中，您可以使用官网首页下面的调试器来解码、验证和生成JWTs。")]),t._v(" "),e("h3",{attrs:{id:"认证过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#认证过程"}},[t._v("#")]),t._v(" 认证过程")]),t._v(" "),e("p",[t._v("下面我们从一个实例来看如何运用JWT机制实现认证：")]),t._v(" "),e("p",[t._v("1）第一次认证\n第一次登录，用户从浏览器输入用户名/密码，提交后到服务器，完成账号密码认证，如果认证通过，调用用户信息服务获取用户信息（包括完整的用户信息及对应权限信息），然后在配置文件中获取Token签名生成的秘钥信息，调用第三方的JWT Lib生成签名后的JWT数据。完成JWT数据签名后，将其设置到COOKIE对象或者直接将token返回给前端，完成登录过程；")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://cdn.gqsu.top/jwt03.png",alt:""}})]),t._v(" "),e("p",[t._v("2）请求认证")]),t._v(" "),e("p",[t._v("基于Token的认证机制会在每一次请求中都带上完成签名的Token信息，这个Token信息可能在COOKIE\n中，也可能在HTTP的Authorization头中，形如：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Authorization: Bearer <token>\n")])])]),e("p",[t._v("认证服务作为一个Middleware HOOK 对请求进行拦截，首先在cookie中查找Token信息，如果没有找到，则在HTTP Authorization Head中查找；一般推荐使用HTTP Head这种方式。")]),t._v(" "),e("p",[t._v("这是一个无状态的身份验证机制，因为用户状态永远不会保存在服务器内存中。服务器的受保护路由将在授权头中检查有效的JWT，如果它存在，用户将被允许访问受保护的资源。由于JWTs是独立的，所以所有必要的信息都在那里，减少了多次查询数据库的需求。")]),t._v(" "),e("p",[t._v("这使得完全可以依赖无状态的数据api，甚至向下游服务发出请求。哪个域名api服务并不重要，因为CORS攻击不会成为一个问题，因为它不使用cookie。")]),t._v(" "),e("h4",{attrs:{id:"jwt的优点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jwt的优点"}},[t._v("#")]),t._v(" JWT的优点")]),t._v(" "),e("ul",[e("li",[t._v("因为JSON数据格式的通用性，所以JWT是可以跨语言的，主流语言都可以支持。")]),t._v(" "),e("li",[t._v("payload部分可以存储其他业务逻辑所必要的非敏感信息。")]),t._v(" "),e("li",[t._v("JWT构成简单，字节占用很小，所以非常便于传输的。")]),t._v(" "),e("li",[t._v("不需要在服务端保存会话信息，易于应用的扩展和安全等。")])]),t._v(" "),e("h4",{attrs:{id:"jwt的使用注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jwt的使用注意"}},[t._v("#")]),t._v(" JWT的使用注意")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("不要在payload存放敏感信息，因为该部分是可解密的，但是仍可存放很多不敏感数据。")])]),t._v(" "),e("li",[e("p",[t._v("保存好secret私钥十分重要。")])]),t._v(" "),e("li",[e("p",[t._v("尽量使用https协议")])])]),t._v(" "),e("p",[t._v("参考：http://www.cnblogs.com/xiekeli/p/5607107.html")]),t._v(" "),e("p",[t._v("https://blog.csdn.net/qq_28098067/article/details/52036493")])])}),[],!1,null,null,null);a.default=_.exports}}]);