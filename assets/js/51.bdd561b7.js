(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{546:function(s,t,a){"use strict";a.r(t);var e=a(6),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("服务器系统：centOs 7")]),s._v(" "),a("h3",{attrs:{id:"防火墙相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防火墙相关"}},[s._v("#")]),s._v(" 防火墙相关")]),s._v(" "),a("p",[s._v("注意：Centos 7使用firewalld代替了原来的iptables。所以7以前版本的iptables是不能用的。")]),s._v(" "),a("h4",{attrs:{id:"开启防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启防火墙"}},[s._v("#")]),s._v(" 开启防火墙")]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("$ systemctl "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("start")]),s._v(" firewalld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service      \n")])])]),a("blockquote",[a("p",[s._v("一般链接到服务器正常，但是无法访问服务，首先想到的就是防火墙是否正常开启。")])]),s._v(" "),a("h4",{attrs:{id:"关闭防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭防火墙"}},[s._v("#")]),s._v(" 关闭防火墙")]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("$ systemctl stop firewalld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止firewall")]),s._v("\n$ systemctl disable firewalld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁止firewall开机启动")]),s._v("\n$ systemctl enable firewalld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#firewall开机启动")]),s._v("\n")])])]),a("h4",{attrs:{id:"开放端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开放端口"}},[s._v("#")]),s._v(" 开放端口")]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("$ firewall"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add-port")]),s._v("=80"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tcp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("permanent   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#永久添加80端口")]),s._v("\n$ firewall"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("reload                          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重新载入配置")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## zone -- 作用域")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## add-port=80/tcp -- 添加端口，格式为：端口/通讯协议")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## permanent -- 永久生效，没有此参数重启后失效")]),s._v("\n$ firewall"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("zone=public "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add-port")]),s._v("=3306"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tcp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("permanent\n")])])]),a("h4",{attrs:{id:"查看端口占用情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看端口占用情况"}},[s._v("#")]),s._v(" 查看端口占用情况")]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("$ lsof "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("i:80\n")])])]),s._v(" "),a("h4",{attrs:{id:"常用命令介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用命令介绍"}},[s._v("#")]),s._v(" 常用命令介绍")]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("$ firewall"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("state                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##查看防火墙状态，是否是running")]),s._v("\n$ firewall"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get-zones")]),s._v("                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##列出支持的zone")]),s._v("\n$ firewall"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get-services")]),s._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##列出支持的服务，在列表中的服务是放行的")]),s._v("\n$ firewall"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("query"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("service ftp               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##查看ftp服务是否支持，返回yes或者no")]),s._v("\n$ firewall"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add-service")]),s._v("=ftp                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##临时开放ftp服务")]),s._v("\n$ firewall"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add-service")]),s._v("=ftp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("permanent     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##永久开放ftp服务")]),s._v("\n$ firewall"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("remove-service")]),s._v("=ftp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("permanent  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##永久移除ftp服务")]),s._v("\n$ iptables "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("L "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("n                                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##查看规则，这个命令是和iptables的相同的")]),s._v("\n$ firewall"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("help                            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##查看帮助文件")]),s._v("\n")])])]),a("h3",{attrs:{id:"上传-下载指令相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传-下载指令相关"}},[s._v("#")]),s._v(" 上传/下载指令相关")]),s._v(" "),a("h4",{attrs:{id:"安装-rz-sz"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-rz-sz"}},[s._v("#")]),s._v(" 安装 rz/sz")]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("$ cd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tmp                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入保存下载文件的路径，可自定义")]),s._v("\n$ wget http:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ohse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("de"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("uwe"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("releases"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lrzsz"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("20"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#下载文件")]),s._v("\n$ tar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("zxvf lrzsz"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("20"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gz                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#解压")]),s._v("\n$ cd lrzsz"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("20\n$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("configure && make && make install                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装")]),s._v("\n")])])]),a("p",[s._v("安装过程默认把lsz和lrz安装到了/usr/local/bin/目录下，\n现在我们并不能直接使用，下面创建软链接，并命名为rz/sz")]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("$ cd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin\n$ sudo ln "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lrz rz\n$ sudo ln "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lsz sz\n")])])]),a("p",[s._v("安装yum：")]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("$ yum install "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("y lrzsz\n")])])]),a("h3",{attrs:{id:"网络设置与域名绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络设置与域名绑定"}},[s._v("#")]),s._v(" 网络设置与域名绑定")]),s._v(" "),a("h4",{attrs:{id:"静态ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态ip"}},[s._v("#")]),s._v(" 静态Ip")]),s._v(" "),a("p",[s._v("说明：CentOS 7.0默认安装好之后是没有自动开启网络连接的！")]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("$ cd  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sysconfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("scripts"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入网络配置文件目录")]),s._v("\n$ vi  ifcfg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("eth0  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#编辑配置文件，添加修改以下内容(可能是ifcfg-ensxx)")]),s._v("\n")])])]),a("p",[s._v("参考如下示例，进行修改：")]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v(" DEVICE=eth0    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设备名称")]),s._v("\n HWADDR=00:0C:29:8D:24:73   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#mac地址")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("TYPE")]),s._v("=Ethernet    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#网络类型")]),s._v("\n BOOTPROTO=static  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启用静态IP地址")]),s._v("\n DEFROUTE=yes\n PEERDNS=yes\n PEERROUTES=yes\n IPV4_FAILURE_FATAL=no\n IPV6INIT=yes\n IPV6_AUTOCONF=yes\n IPV6_DEFROUTE=yes\n IPV6_PEERDNS=yes\n IPV6_PEERROUTES=yes\n IPV6_FAILURE_FATAL=no\n NAME=eno16777736\n UUID=ae0965e7"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("22b9"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("45aa"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("8ec9"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("3f0a20a85d11\n ONBOOT=yes     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开机自启动(就是这里)")]),s._v("\n IPADDR0=210"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("28"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("188"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("98     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置静态IP地址")]),s._v("\n PREFIXO0=24    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置子网掩码")]),s._v("\n GATEWAY0=210"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("28"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("188"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("1    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置网关")]),s._v("\n DNS1=8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("8    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置主DNS")]),s._v("\n DNS2=8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("4    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置备DNS")]),s._v("\n")])])]),a("p",[s._v("编辑完成后,"),a("code",[s._v(":wq!")]),s._v("保存，然后退出")]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("$ service network restart   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启网络（或者/etc/init.d/network restart）")]),s._v("\n$ ping www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("baidu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#测试网络是否正常")]),s._v("\n")])])]),a("h4",{attrs:{id:"设置主机域名www"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置主机域名www"}},[s._v("#")]),s._v(" 设置主机域名www")]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("$ vi "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hostname "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#编辑配置文件")]),s._v("\n")])])]),a("p",[s._v("修改 localhost.localdomain 为 www")]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("$ vi "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hosts "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#编辑配置文件")]),s._v("\n")])])]),a("p",[s._v("修改 localhost.localdomain 为 www。最后一步,")]),s._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("$ shutdown "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("r now  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启系统")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);