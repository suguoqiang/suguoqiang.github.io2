(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{636:function(t,s,a){"use strict";a.r(s);var n=a(6),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"微服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微服务"}},[t._v("#")]),t._v(" 微服务")]),t._v(" "),a("h4",{attrs:{id:"基本特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本特点"}},[t._v("#")]),t._v(" 基本特点")]),t._v(" "),a("ul",[a("li",[t._v("1、通过服务实现组件化。开发者不再需要协调其它服务部署对本服务的影响。")]),t._v(" "),a("li",[t._v("2、按业务能力来划分服务和开发团队。开发者可以自由选择开发技术，提供 API 服务。")]),t._v(" "),a("li",[t._v("3、去中心化。")])]),t._v(" "),a("p",[t._v("每个微服务有自己私有的数据库持久化业务数据。\n每个微服务只能访问自己的数据库，而不能访问其它服务的数据库。\n某些业务场景下，需要在一个事务中更新多个数据库。这种情况也不能直接访问其它微服务的数据库，而是通过对于微服务进行操作。\n数据的去中心化，进一步降低了微服务之间的耦合度，不同服务可以采用不同的数据库技术（SQL、NoSQL等）。在复杂的业务场景下，如果包含多个微服务，通常在客户端或者中间层（网关）处理。")]),t._v(" "),a("ul",[a("li",[t._v("4、基础设施自动化（devops、自动化部署）。")])]),t._v(" "),a("p",[t._v("将应用拆分成为一个一个的单个服务，应用Docker技术，不依赖任何服务器和数据模型，是一个全栈应用，可以通过自动化方式独立部署，每个服务运行在自己的进程中，通过轻量的通讯机制联系，经常是基于HTTP资源API（RestFul API），这些服务基于业务能力构建，能实现集中化管理）。")]),t._v(" "),a("blockquote",[a("p",[t._v("注意，严格意义上讲，dubbo并不属于微服务架构，而是SOA架构。SOA架构特点:1)系统集成;2)系统的服务化;3)业务的服务化。比如：ESB（企业服务总线）。")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("功能")]),t._v(" "),a("th",[t._v("SOA")]),t._v(" "),a("th",[t._v("微服务")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("组件大小")]),t._v(" "),a("td",[t._v("大块业务逻辑")]),t._v(" "),a("td",[t._v("单独任务或小块业务逻辑")])]),t._v(" "),a("tr",[a("td",[t._v("耦合")]),t._v(" "),a("td",[t._v("通常松耦合")]),t._v(" "),a("td",[t._v("总是松耦合")])]),t._v(" "),a("tr",[a("td",[t._v("公司架构")]),t._v(" "),a("td",[t._v("任何类型 小型、")]),t._v(" "),a("td",[t._v("专注于功能交叉团队")])]),t._v(" "),a("tr",[a("td",[t._v("管理")]),t._v(" "),a("td",[t._v("着重中央管理")]),t._v(" "),a("td",[t._v("着重分散管理")])]),t._v(" "),a("tr",[a("td",[t._v("目标")]),t._v(" "),a("td",[t._v("确保应用能够交互操作")]),t._v(" "),a("td",[t._v("执行新功能、快速拓展开发团队")])])])]),t._v(" "),a("h4",{attrs:{id:"核心问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心问题"}},[t._v("#")]),t._v(" 核心问题")]),t._v(" "),a("p",[t._v("微服务架构的两个核心问题：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("一、服务发现：服务的消费方(Consumer)如何发现服务的提供方(Provider)？")])]),t._v(" "),a("li",[a("p",[t._v("二、负载均衡：服务的消费方如何以某种负载均衡策略访问集群中的服务提供方实例？")])])]),t._v(" "),a("p",[t._v("三种服务发现模式：")]),t._v(" "),a("ul",[a("li",[t._v("模式一：传统集中式代理：通过 F5(4层负载)+Nginx(7层负载) 这种软硬结合两层代理来完成。如：ebay和携程。")]),t._v(" "),a("li",[t._v("模式二：客户端嵌入式代理：需要独立的服务注册中心组件配合，服务启动时自动注册到注册中心并定期报心跳，客户端代理则发现服务并做负载均衡。如：eureka，ribbon以及dubbo。")]),t._v(" "),a("li",[t._v("模式三：主机独立进程代理：代理既不是独立集中部署，也不嵌入在客户应用程序中，而是作为独立进程部署在每一个主机上。如：SmartStack。")])]),t._v(" "),a("h3",{attrs:{id:"新一代微服务架构-服务网格servicemesh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新一代微服务架构-服务网格servicemesh"}},[t._v("#")]),t._v(" 新一代微服务架构  服务网格ServiceMesh")]),t._v(" "),a("h3",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),a("ul",[a("li",[t._v("具有高可伸缩性需求的应用")]),t._v(" "),a("li",[t._v("对交付速度要求较高的项目")]),t._v(" "),a("li",[t._v("具有丰富域或多个子域的业务用例")]),t._v(" "),a("li",[t._v("小型、跨功能的开发团队协作开发大型产品的敏捷环境")])]),t._v(" "),a("p",[t._v("总是，就是适用于在较多用户量，高峰每秒高达上万并发请求的互联网公司的系统。")]),t._v(" "),a("h3",{attrs:{id:"一定要注意的地方"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一定要注意的地方"}},[t._v("#")]),t._v(" 一定要注意的地方")]),t._v(" "),a("p",[t._v("拿IDEA中的父子项目说明，需要在父pom文件中申明：")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencyManagement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-dependencies"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${spring-boot.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pom"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("import"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("io.spring.platform"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("platform-bom"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${spring-platform.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pom"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("import"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.cloud"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-cloud-dependencies"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${spring-cloud.version}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pom"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("import"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("scope")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencies")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependencyManagement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("另外，同样重要的是依赖包的问题，一定要分清是springBoot还是springCLoud。很常见的spring-boot-starter-amqp和spring-cloud-starter-bus-amqp两个包。")])])}),[],!1,null,null,null);s.default=p.exports}}]);