(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{509:function(a,s,t){"use strict";t.r(s);var e=t(6),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[a._v("软件开发最大的麻烦事之一，就是环境配置。操作系统的设置，各种库和组件的安装,其实都是环境变量。")])]),t("details",{staticClass:"custom-block details"},[t("summary",[a._v("See More")]),a._v(" "),t("p",[a._v("解决办法")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("虚拟机、Linux容器\n")])])])]),a._v(" "),t("h4",{attrs:{id:"linux容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux容器"}},[a._v("#")]),a._v(" linux容器")]),a._v(" "),t("h3",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[a._v("#")]),a._v(" 基本概念")]),a._v(" "),t("p",[a._v("Docker 属于 Linux 容器的一种封装，提供简单易用的容器使用接口。它是目前最流行的 Linux 容器解决方案。\nDocker 将应用程序与该程序的依赖，打包在一个文件里面。运行这个文件，就会生成一个虚拟容器。程序在这个虚拟容器里运行，就好像在真实的物理机上运行一样。有了 Docker，就不用担心环境问题。")]),a._v(" "),t("p",[a._v("总体来说，Docker 的接口相当简单，用户可以方便地创建和使用容器，把自己的应用放入容器。容器还可以进行版本管理、复制、分享、修改，就像管理普通的代码一样。")]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("docker最大的优点就是：能将应用于计算环境分离，允许开发者在同一服务上运行Python、Ruby、PHP、Node JS或任何其他语言，并将每个应用程序安装在具有独立数据库引擎的单独容器中。")])])]),a._v(" "),t("h4",{attrs:{id:"用途"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用途"}},[a._v("#")]),a._v(" 用途")]),a._v(" "),t("p",[a._v("Docker 的主要用途，目前有三大类。")]),a._v(" "),t("ul",[t("li",[a._v("（1）提供一次性的环境。比如，本地测试他人的软件、持续集成的时候提供单元测试和构建的环境。")]),a._v(" "),t("li",[a._v("（2）提供弹性的云服务。因为 Docker 容器可以随开随关，很适合动态扩容和缩容。")]),a._v(" "),t("li",[a._v("（3）组建微服务架构。通过多个容器，一台机器可以跑多个服务，因此在本机就可以模拟出微服务架构。")])]),a._v(" "),t("h4",{attrs:{id:"docker的组成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker的组成"}},[a._v("#")]),a._v(" docker的组成")]),a._v(" "),t("p",[a._v("Docker是CS架构，基本组成：")]),a._v(" "),t("ul",[t("li",[a._v("Docker daemon:")])]),a._v(" "),t("p",[a._v("运行在宿主机上，Docker守护进程，用户通过 Docker client (Docker命令)与 Docker daemon 交互")]),a._v(" "),t("ul",[t("li",[a._v("Docker client:")])]),a._v(" "),t("p",[a._v("Docker 命令行工具，是用户使用 Docker 的主要方式，Docker client 与 Docker daemon 通信并将结果返回给用户，\nDocker client 也可以通过 socket 或者 RESTful api 访问远程的 Docker daemon")]),a._v(" "),t("h4",{attrs:{id:"重要概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重要概念"}},[a._v("#")]),a._v(" 重要概念")]),a._v(" "),t("ul",[t("li",[a._v("Docker image：")])]),a._v(" "),t("p",[a._v("镜像是只读的，镜像中包含有需要运行的文件。镜像用来创建 container，一个镜像可以运行多个container；镜像可以通过 Dockerfile 创建，也可以从Docker hub/registry上下载。")]),a._v(" "),t("ul",[t("li",[a._v("Docker container：")])]),a._v(" "),t("p",[a._v("容器是 Docker 的运行组件，启动一个镜像就是一个容器，容器是一个隔离环境，多个容器之间不会相互影响，保证容器中的程序运行在一个相对安全的环境中。")]),a._v(" "),t("ul",[t("li",[a._v("Docker hub/registry:")])]),a._v(" "),t("p",[a._v("共享和管理 Docker 镜像，用户可以上传或者下载上面的镜像，官方地址为https://registry.hub.docker.com/，也可以搭建自己私有的Docker registry。")]),a._v(" "),t("h3",{attrs:{id:"深入理解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深入理解"}},[a._v("#")]),a._v(" 深入理解")]),a._v(" "),t("p",[a._v("镜像、容器、DockerFile三者之间的关系如下图所示："),t("img",{attrs:{src:"http://cdn.gqsu.top/DockerFile.png",alt:""}})]),a._v(" "),t("blockquote",[t("p",[a._v("通过上图可以看出使用 Dockerfile 定义镜像，运行镜像启动容器。")])]),a._v(" "),t("h4",{attrs:{id:"dockerfile-概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile-概念"}},[a._v("#")]),a._v(" Dockerfile 概念")]),a._v(" "),t("p",[a._v("Docker 镜像是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。镜像不包含任何动态数据，其内容在构建之后也不会被改变。")]),a._v(" "),t("p",[a._v("镜像的定制实际上就是定制每一层所添加的配置、文件。如果我们可以把每一层修改、安装、构建、操作的命令都写入一个脚本，用这个脚本来构建、定制镜像，那么之前提及的无法重复的问题、镜像构建透明性的问题、体积的问题就都会解决。这个脚本就是 Dockerfile。")]),a._v(" "),t("p",[a._v("Dockerfile 是一个文本文件，其内包含了一条条的指令(Instruction)，每一条指令构建一层，因此每一条指令的内容，就是描述该层应当如何构建。有了 Dockerfile，当我们需要定制自己额外的需求时，只需在 Dockerfile 上添加或者修改指令，重新生成 image 即可，省去了敲命令的麻烦。")]),a._v(" "),t("h4",{attrs:{id:"构建镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像"}},[a._v("#")]),a._v(" 构建镜像")]),a._v(" "),t("p",[a._v("docker build 命令会根据 Dockerfile 文件及上下文构建新 Docker 镜像。构建上下文是指 Dockerfile 所在的本地路径或一个URL（Git仓库地址）。构建上下文环境会被递归处理，所以构建所指定的路径还包括了子目录，而URL还包括了其中指定的子模块。")]),a._v(" "),t("p",[a._v("将当前目录做为构建上下文时，可以像下面这样使用docker build命令构建镜像：")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker build "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n$ Sending build context to Docker daemon  6"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("51 MB\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])])]),t("blockquote",[t("p",[a._v("说明：构建会在 Docker 后台守护进程（daemon）中执行，而不是CLI中。构建前，构建进程会将全部内容（递归）发送到守护进程。大多情况下，应该将一个空目录作为构建上下文环境，并将 Dockerfile 文件放在该目录下。")])]),a._v(" "),t("p",[a._v("在构建上下文中使用的 Dockerfile 文件，是一个构建指令文件。为了提高构建性能，可以通过.dockerignore文件排除上下文目录下不需要的文件和目录。")]),a._v(" "),t("p",[a._v("在 Docker 构建镜像的第一步，docker CLI 会先在上下文目录中寻找.dockerignore文件，根据.dockerignore 文件排除上下文目录中的部分文件和目录，然后把剩下的文件和目录传递给 Docker 服务。")]),a._v(" "),t("p",[a._v("Dockerfile 一般位于构建上下文的根目录下，也可以通过-f指定该文件的位置：")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker build "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("f "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("path"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("to"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("Dockerfile "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])])]),t("blockquote",[t("p",[a._v("还可以通过 -t 参数指定构建成镜像的仓库、标签。")])]),a._v(" "),t("h4",{attrs:{id:"镜像标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像标签"}},[a._v("#")]),a._v(" 镜像标签")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker build "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("t nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("v3 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])])]),t("p",[a._v("如果存在多个仓库下，或使用多个镜像标签，就可以使用多个 -t 参数：")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker build "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("t nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("v3:1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("t nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("v3:latest "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n")])])]),t("p",[a._v("注意，在 Docker 守护进程执行 Dockerfile 中的指令前，首先会对 Dockerfile 进行语法检查，有语法错误时会返回：")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker build "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("t nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("v3 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\nSending build context to Docker daemon 2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("048 kB\nError response "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" daemon: Unknown instruction: RUNCMD\n")])])]),t("h4",{attrs:{id:"缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[a._v("#")]),a._v(" 缓存")]),a._v(" "),t("p",[a._v("Docker 守护进程会一条一条的执行 Dockerfile 中的指令，而且会在每一步提交并生成一个新镜像，最后会输出最终镜像的ID。\n生成完成后，Docker 守护进程会自动清理你发送的上下文。 Dockerfile文件中的每条指令会被独立执行，并会创建一个新镜像，RUN cd /tmp 等命令不会对下条指令产生影响。 Docker 会重用已生成的中间镜像，以加速 docker build 的构建速度。以下是一个使用了缓存镜像的执行过程：")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker build "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("t svendowideit"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("ambassador "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\nSending build context to Docker daemon 15"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("36 kB\nStep 1"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("4 : "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" alpine:3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("2\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("> 31f630c65071\nStep 2"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("4 : MAINTAINER SvenDowideit@home"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("org"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("au\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("> "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Using")]),a._v(" cache\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("> 2a1c91448f5f\nStep 3"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("4 : RUN apk update &&      apk add socat &&        "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("r "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("cache"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("> "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Using")]),a._v(" cache\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("> 21ed6e7fbb73\nStep 4"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("4 : CMD env "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),a._v(" grep _TCP= "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("sed "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s/.*_PORT_\\([0-9]*\\)_TCP=tcp:\\/\\/\\(.*\\):\\(.*\\)/socat -t 100000000 TCP4-LISTEN:\\1,fork,reuseaddr TCP4:\\2:\\3 \\&/'")]),a._v(" && "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("echo")]),a._v(" wait"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),a._v(" sh\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("> "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Using")]),a._v(" cache\n "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("> 7ea8aef582cc\nSuccessfully built 7ea8aef582cc\n")])])]),t("p",[a._v("构建缓存仅会使用本地父生成链上的镜像，如果不想使用本地缓存的镜像，也可以通过--cache-from指定缓存。指定后将不再使用本地生成的镜像链，而是从镜像仓库中下载。")]),a._v(" "),t("h4",{attrs:{id:"寻找缓存的逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#寻找缓存的逻辑"}},[a._v("#")]),a._v(" 寻找缓存的逻辑")]),a._v(" "),t("p",[a._v("Docker 寻找缓存的逻辑其实就是树型结构根据 Dockerfile 指令遍历子节点的过程。下图可以说明这个逻辑。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("  FROM base_image:version           Dockerfile:\n           +----------+                FROM base_image:version\n           |base image|                RUN cmd1  --\x3e use cache because we found base image\n           +-----X----+                RUN cmd11 --\x3e use cache because we found cmd1\n                / \\\n               /   \\\n       RUN cmd1     RUN cmd2           Dockerfile:\n       +------+     +------+           FROM base_image:version\n       |image1|     |image2|           RUN cmd2  --\x3e use cache because we found base image\n       +---X--+     +------+           RUN cmd21 --\x3e not use cache because there's no child node\n          / \\                                        running cmd21, so we build a new image here\n         /   \\\nRUN cmd11     RUN cmd12\n+-------+     +-------+\n|image11|     |image12|\n+-------+     +-------+\n")])])]),t("p",[a._v("大部分指令可以根据上述逻辑去寻找缓存，除了 ADD 和 COPY 。这两个指令会复制文件内容到镜像内，除了指令相同以外，Docker 还会检查每个文件内容校验(不包括最后修改时间和最后访问时间)，如果校验不一致，则不会使用缓存。")]),a._v(" "),t("p",[a._v("除了这两个命令，Docker 并不会去检查容器内的文件内容，比如 "),t("code",[a._v("RUN apt-get -y update")]),a._v("，每次执行时文件可能都不一样，但是 Docker 认为命令一致，会继续使用缓存。这样一来，以后构建时都不会再重新运行"),t("code",[a._v("apt-get -y update")]),a._v("。")]),a._v(" "),t("p",[a._v("如果 Docker 没有找到当前指令的缓存，则会构建一个新的镜像，并且之后的所有指令都不会再去寻找缓存。")]),a._v(" "),t("p",[a._v("摘自：http://www.ityouknow.com/docker/2018/03/12/docker-use-dockerfile.html")]),a._v(" "),t("h3",{attrs:{id:"基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[a._v("#")]),a._v(" 基本操作")]),a._v(" "),t("blockquote",[t("p",[a._v("参考：https://blog.csdn.net/lanmei618/article/details/80109222")])]),a._v(" "),t("blockquote",[t("p",[a._v("centos 7以上系统安装")])]),a._v(" "),t("h4",{attrs:{id:"安装、启动、测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装、启动、测试"}},[a._v("#")]),a._v(" 安装、启动、测试")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ yum install docker\n")])])]),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ systemctl "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),a._v(" docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("service\n$ systemctl enable docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("service\n")])])]),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker version\n")])])]),t("h4",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),t("p",[a._v("Docker 中国官方镜像加速可通过 registry.docker-cn.com 访问。该镜像库只包含流行的公有镜像，私有镜像仍需要从美国镜像库中拉取。")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("vi  /etc/docker/daemon.json\n#添加后\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"registry-mirrors"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://registry.docker-cn.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"live-restore"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("可以采用阿里云的镜像配置。容器镜像服务：https://cr.console.aliyun.com/cn-shanghai/instances/mirrors")]),a._v(" "),t("blockquote",[t("p",[a._v("配置镜像加速器")])]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"registry-mirrors"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://xqidamyw.mirror.aliyuncs.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h4",{attrs:{id:"拉取docker镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉取docker镜像"}},[a._v("#")]),a._v(" 拉取docker镜像")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker pull image_name\n")])])]),t("h4",{attrs:{id:"查看宿主机上的镜像-docker镜像保存在-var-lib-docker目录下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看宿主机上的镜像-docker镜像保存在-var-lib-docker目录下"}},[a._v("#")]),a._v(" 查看宿主机上的镜像，Docker镜像保存在/var/lib/docker目录下")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker images\n")])])]),t("h4",{attrs:{id:"删除镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除镜像"}},[a._v("#")]),a._v(" 删除镜像")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker rmi  docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("io"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("tomcat:7"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("77"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("jre7   或者  docker rmi b39c68b7af30\n")])])]),t("h4",{attrs:{id:"查看当前有哪些容器正在运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看当前有哪些容器正在运行"}},[a._v("#")]),a._v(" 查看当前有哪些容器正在运行")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v("\n")])])]),t("h4",{attrs:{id:"查看所有容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看所有容器"}},[a._v("#")]),a._v(" 查看所有容器")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("a\n")])])]),t("h4",{attrs:{id:"启动、停止、重启容器命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动、停止、重启容器命令"}},[a._v("#")]),a._v(" 启动、停止、重启容器命令")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("start")]),a._v(" container_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("container_id\n$ docker stop container_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("container_id\n$ docker restart container_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("container_id\n")])])]),t("h4",{attrs:{id:"后台启动一个容器后-如果想进入到这个容器-可以使用attach命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后台启动一个容器后-如果想进入到这个容器-可以使用attach命令"}},[a._v("#")]),a._v(" 后台启动一个容器后，如果想进入到这个容器，可以使用attach命令")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker attach container_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("container_id\n")])])]),t("h4",{attrs:{id:"删除容器的命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除容器的命令"}},[a._v("#")]),a._v(" 删除容器的命令")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" container_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("container_id\n")])])]),t("h4",{attrs:{id:"删除所有停止的容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除所有停止的容器"}},[a._v("#")]),a._v(" 删除所有停止的容器")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("q"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h4",{attrs:{id:"查看当前系统docker信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看当前系统docker信息"}},[a._v("#")]),a._v(" 查看当前系统Docker信息")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker info\n")])])]),t("h4",{attrs:{id:"从docker-hub上下载某个镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从docker-hub上下载某个镜像"}},[a._v("#")]),a._v(" 从Docker hub上下载某个镜像")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker pull centos:latest\n")])])]),t("blockquote",[t("p",[a._v("执行docker pull centos会将Centos这个仓库下面的所有镜像下载到本地repository。")])]),a._v(" "),t("h4",{attrs:{id:"查找docker-hub上的nginx镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找docker-hub上的nginx镜像"}},[a._v("#")]),a._v(" 查找Docker Hub上的nginx镜像")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker search nginx\n")])])]),t("p",[a._v("以上操作仅做简单了解，后文有详细说明。这里以一个简单示例，作为展示：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("启动测试镜像"),t("code",[a._v("docker run -d -p 91:80 kitematic/hello-world-nginx")])])]),a._v(" "),t("li",[t("p",[a._v("访问：http://localhost:91 测试，这里的localhost指的是宿主机的主机名\n"),t("img",{attrs:{src:"http://cdn.gqsu.top/docker02-1.png",alt:""}})])])]),a._v(" "),t("h4",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[a._v("#")]),a._v(" 其他")]),a._v(" "),t("p",[a._v("1、删除所有镜像：")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker rmi $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("docker images "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("q"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("2、杀死所有正在运行的容器：")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("q"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("3、删除所有已停止的容器：")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("q"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("4、删除所有未打标签的镜像：")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker rmi $"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("docker images "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("q "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("f dangling=true"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("5、 容器和宿主机文件的拷贝")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#拷贝容器中文件到宿主机")]),a._v("\n$ docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" mycontainer："),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("testnew"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("txt "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("test"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#拷贝宿主机中文件到容器")]),a._v("\n$ docker "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("test"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("txt mycontainer："),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("opt"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("testnew"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("\n")])])]),t("blockquote",[t("p",[a._v("友情提醒，不管宿主机是否启动，拷贝命令都是生效的。")])]),a._v(" "),t("p",[a._v("6、启动某一个镜像服务报错，重启docker服务\n"),t("img",{attrs:{src:"http://cdn.gqsu.top/docker02-01.png",alt:""}})]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ systmctl restart docker \n")])])]),t("h4",{attrs:{id:"docker私服"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker私服"}},[a._v("#")]),a._v(" docker私服")]),a._v(" "),t("p",[a._v("1、构建docker-compose")]),a._v(" "),t("div",{staticClass:"language-yaml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'3.1'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("dd-registry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("privileged")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#解决权限问题")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("REGISTRY_STORAGE_DELETE_ENABLED")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" registry\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" always\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("container_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" registry\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 5000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5000")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" ./data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/var/lib/registry\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("web")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" konradkleine/docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("registry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("frontend"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("v2\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" always\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("links")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" dd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("registry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("122.51.137.246\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" 9000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" ENV_DOCKER_REGISTRY_HOST=122.51.137.246\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" ENV_DOCKER_REGISTRY_PORT=5000\n")])])]),t("p",[a._v("2、启动后，输入9000端口地址查看页面是否正常启动")]),a._v(" "),t("p",[a._v("3、给已经存在的镜像包打上标签")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 标记tag")]),a._v("\n$ docker tag redis:alpine 122"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("51"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("137"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("246:5000"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("redis:aaa\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 推送到私服")]),a._v("\n$ docker push 122"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("51"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("137"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("246:5000"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("redis:aaa\n")])])]),t("p",[a._v("4、修改推送的仓库地址")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查找地址")]),a._v("\n$ find "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("name docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("service \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 修改，我的如下：")]),a._v("\n$ vim "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("usr"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("lib"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("systemd"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("system"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("docker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("service\n")])])]),t("p",[a._v("在划横线出，添加"),t("code",[a._v("–-insecure-registry=ip(自己的)")]),a._v(" "),t("img",{attrs:{src:"http://cdn.gqsu.top/docker01-06.png",alt:""}}),a._v("\n重启：")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ systemctl daemon"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("reload\n$ systemctl restart docker\n")])])]),t("p",[a._v("查看服务已经包含了你的IP")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" aux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("|")]),a._v(" grep docker\n")])])]),t("p",[a._v("登录后，然后push")]),a._v(" "),t("div",{staticClass:"language-powershell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[a._v("$ docker login XXX\n$ docker push XX\n")])])]),t("p",[a._v("效果图：\n"),t("img",{attrs:{src:"http://cdn.gqsu.top/docker01-07.png",alt:""}})]),a._v(" "),t("p",[a._v("下载镜像：\n"),t("code",[a._v("docker pull 122.51.137.246:5000/redis:aaa")])])])}),[],!1,null,null,null);s.default=r.exports}}]);