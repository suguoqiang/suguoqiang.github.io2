(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{663:function(e,a,s){"use strict";s.r(a);var t=s(6),c=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h3",{attrs:{id:"top命令查看系统使用情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#top命令查看系统使用情况"}},[e._v("#")]),e._v(" top命令查看系统使用情况")]),e._v(" "),s("p",[e._v("使用系统命令top即可看到如下类似信息：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("top - 15:14:11 up 17 days,  1:31,  4 users,  load average: 3.89, 12.82, 12.27\nTasks: 213 total,   1 running, 207 sleeping,   0 stopped,   5 zombie\n%Cpu(s):  2.2 us,  1.5 sy,  0.0 ni, 96.2 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st\nKiB Mem :  3788432 total,   138816 free,  3479284 used,   170332 buff/cache\nKiB Swap:  2097148 total,   476760 free,  1620388 used.    62780 avail Mem \n")])])]),s("p",[e._v("第三行Cpu参数详解：")]),e._v(" "),s("blockquote",[s("p",[e._v("us 用户空间占用CPU百分比；sy 内核空间占用CPU百分比；ni 用户进程空间内改变过优先级的进程占用CPU百分比；\nid 空闲CPU百分比；wa 等待输入输出的CPU时间百分比；hi 硬件中断；si 软件中断；st: 实时；")])]),e._v(" "),s("h3",{attrs:{id:"free查看内存使用情况"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#free查看内存使用情况"}},[e._v("#")]),e._v(" free查看内存使用情况")]),e._v(" "),s("p",[s("code",[e._v("free -m")]),e._v("查看的是（MB）的内存状态")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("              total        used        free      shared  buff/cache   available\nMem:           3699        2648         856          31         195         797\nSwap:          2047        1706         341\n")])])]),s("blockquote",[s("p",[e._v("total：内存总数；used：已经使用的内存数；free：空闲的内存数；shared：当前已经废弃不用；buffers Buffer：缓存内存数；cached Page：缓存内存数。")])]),e._v(" "),s("p",[e._v("free总的可用内存数: (指的第一部分Mem行中的free + buffers + cached)。正在使用的内存数：其值=used-buffers-cached。")]),e._v(" "),s("p",[e._v("Swap：硬盘上交换分区的使用大小。设计的目的就是当上面提到的+buffers/cache表示的可用内存都已使用完，新的读写请求过来后，会把内存中的部分数据写入磁盘，从而把磁盘的部分空间当做虚拟内存来使用。")]),e._v(" "),s("p",[e._v("Cache（缓存），为了调高CPU和内存之间数据交换而设计，Buffer（缓冲）为了提高内存和硬盘（或其他I/O设备的数据交换而设计）。")]),e._v(" "),s("blockquote",[s("p",[e._v("症状一：在Linux中频繁存取文件，物理内存很快用光，而cached一直在增长。")]),e._v(" "),s("blockquote",[s("p",[e._v("解释：Linux会对每次请求过的数据缓存在cache里，好处就是CPU的处理速度远远高于内存，所以在CPU和内存通讯的时候可以快速从cache中命中结果返回。")])])]),e._v(" "),s("blockquote",[s("p",[e._v("症状二：Swap被占用。")]),e._v(" "),s("blockquote",[s("p",[e._v("解释：内存可能不够了，才会占Swap，所以Swap可以作为服务器监控的一项指标，引起注意。")])])]),e._v(" "),s("p",[e._v("手动清理Swap和buffers/cache")]),e._v(" "),s("p",[e._v("(1) 清理Swap\n"),s("code",[e._v("swapoff -a && swapon -a")]),e._v("\n操作说明：如果已经使用了Swap，且当前清空下+buffers/cache还有空间，在执行  swapoff -a操作时，会触发把Swap中的内容交换到内存中，数据不会丢失。")]),e._v(" "),s("p",[e._v("(2) 清理buffers/cache:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sync; sync; sync;&& echo 3 >/proc/sys/vm/drop_caches\nsleep 2\necho 0 > /proc/sys/vm/drop_caches\n")])])]),s("p",[e._v("操作说明：\nsync--\x3e将缓存的内从写回到硬盘中；\necho 3 >/proc/sys/vm/drop_caches--\x3e修改drop_caches的值为3，默认为0，改为3系统")]),e._v(" "),s("p",[e._v("会清理缓存的内容；\nsleep 2 --\x3e 等一下，防止上一步没执行完；\necho 0 >/proc/sys/vm/drop_caches --\x3e 改回默认值")]),e._v(" "),s("h3",{attrs:{id:"jps查看java相关进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jps查看java相关进程"}},[e._v("#")]),e._v(" JpS查看java相关进程")]),e._v(" "),s("h3",{attrs:{id:"tail查看实时日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tail查看实时日志"}},[e._v("#")]),e._v(" tail查看实时日志")])])}),[],!1,null,null,null);a.default=c.exports}}]);