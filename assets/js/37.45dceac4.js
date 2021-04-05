(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{532:function(a,e,r){"use strict";r.r(e);var o=r(6),_=Object(o.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h4",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),r("p",[a._v("Hadoop框架遵循分布式计算模型，其将对大数据集的计算分配到一组节点上，每个节点针对数据集的一部分进行计算。")]),a._v(" "),r("p",[a._v("分布式计算的核心需求：")]),a._v(" "),r("ul",[r("li",[a._v("（1）扩展性：机器数量的增长应该带来计算和存储能力的线性增长。")]),a._v(" "),r("li",[a._v("（2）容错性：如果分布式集群中的一个节点失败，主要的计算进程本身不能失败或受到不利影响。")]),a._v(" "),r("li",[a._v("（3）可恢复性：如果作业或其一部分失败，不应该有数据丢失。")])]),a._v(" "),r("p",[a._v("Hadoop针对分布式计算需求的给出的解决方案：")]),a._v(" "),r("ul",[r("li",[a._v("（1）数据存储在所有或大部分集群节点上，将计算流向数据，而非数据流向计算，这样使得Hadoop能够有效处理海量数据；")]),a._v(" "),r("li",[a._v("（2）开发人员专注于数据和算法，分布式的底层细节由Hadoop负责。")]),a._v(" "),r("li",[a._v("（3）作业容错性高，当集群中的一个或多个节点失败以及作业自身的组件(被称为任务)失败时，并不影响作业本身的完成。")])]),a._v(" "),r("p",[a._v("组件包括：HDFS（存储组件），MapReduce，Yarn（处理组件）\nHDFS：有高度容错能力，提供高吞吐量的访问\nMapReduce：是一个计算引擎，并行处理集群上的大量数据\nYarn：调度系统，将资源分配给各种正在运行的应用程序")]),a._v(" "),r("h4",{attrs:{id:"hadoop架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hadoop架构"}},[a._v("#")]),a._v(" Hadoop架构")]),a._v(" "),r("p",[a._v("Hadoop的两个组件:Hdfs(存储组件)和Yarn(处理组件)。")]),a._v(" "),r("h5",{attrs:{id:"_1、hadoop集群"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、hadoop集群"}},[a._v("#")]),a._v(" 1、Hadoop集群")]),a._v(" "),r("p",[a._v("Hadoop集群是一个使用以分布式文件系统（HDFS）和集群资源管理器(Yarn)为基础的Hadoop软件的计算机集合。这个集合可以仅包含少数几个节点，也可以包含超过10000个节点，无论规模大小，在Hadoop集群中的所有节点都是同等运行的。\n在实际情况下，Hadoop通过后台运行的一组守护进程来实现存储和处理。用户不必关心这些进程，因为它们在网络间执行输入/输出，无须用户干预。在Linux系统中，每一个守护进程都在单独的Java虚拟机（JVM）上运行。")]),a._v(" "),r("h5",{attrs:{id:"_2、主节点和工作节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、主节点和工作节点"}},[a._v("#")]),a._v(" 2、主节点和工作节点")]),a._v(" "),r("p",[a._v("主节点:这些节点运行协调集群工作的服务。客户端联系主节点以执行计算任务。在每个集群中，可能有几个主节点，从3~6个不等，具体取决于集群的大小。")]),a._v(" "),r("p",[a._v("工作节点： 这些节点在主节点上运行的进程之下运行。集群的大多数节点都是工作节点。工作节点是存储数据与执行具体计算的节点。")]),a._v(" "),r("h5",{attrs:{id:"_3、hadoop服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、hadoop服务"}},[a._v("#")]),a._v(" 3、Hadoop服务")]),a._v(" "),r("h6",{attrs:{id:"_1-hdfs服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-hdfs服务"}},[a._v("#")]),a._v(" 1.HDFS服务:")]),a._v(" "),r("p",[a._v("HDFS服务负责管理HDFS存储。")]),a._v(" "),r("ul",[r("li",[a._v("NameNode: NameNode服务运行于主节点，负责管理与HDFS存储有关的元数据，如文件系统目录树和文件位置。当客户端需要在HDFS中读取或写入数据时，会首先与NameNode进行联系，NameNode会提供HDFS中的相应文件的位置信息。")]),a._v(" "),r("li",[a._v("Secondary NameNode 和 Standby NameNode: 在每个集群中，需要运行这其中的一个服务。这些服务通过执行如checkpointing(更新)元数据文件的任务，减轻关键服务NameNode的负担。")]),a._v(" "),r("li",[a._v("DataNode: 这些是在Linux文件系统之上存储HDFS数据块的工作节点。DataNodes 与NameNode保持联系，并以文件系统的变更来对数据进行更新。")])]),a._v(" "),r("h6",{attrs:{id:"_2-yarn服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-yarn服务"}},[a._v("#")]),a._v(" 2. Yarn服务:")]),a._v(" "),r("p",[a._v("与HDFS类似，Yarn也有一些服务运行在主节点和工作节点上。")]),a._v(" "),r("ul",[r("li",[a._v("ResourceManager : ResourceManager是在集群中的一个主节点上工作的单一服务进程，负责集群资源分配与运行任务的调度。")]),a._v(" "),r("li",[a._v("ApplicationMaster:这是一个主服务，在集群中运行的每个应用都有这个服务。ApplicationMaster协调应用在集群中的运行，并与ResourceManager协商以获取应用所需的资源。")]),a._v(" "),r("li",[a._v("NodeManager:这些服务运行在每一个工作节点。NodeManager服务在工作节点上运行和管理任务（应用程序或作业的组件）。它们与ResourceManager保持联系，并根据其健康状况以及运行任务的情况对ResourceManager进行更新。")])]),a._v(" "),r("h4",{attrs:{id:"数据存储-hadoop分布式文件系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据存储-hadoop分布式文件系统"}},[a._v("#")]),a._v(" 数据存储—Hadoop分布式文件系统")]),a._v(" "),r("p",[a._v("HDFS是位于底层服务器存储之上的分布式文件系统，其与基础存储系统有许多相似之处。分布式文件系统通过由网络连接的许多计算机来存储海量数据，并利用内置冗余特性保障数据安全。HDFS是为快速、容错处理而设计的，因此它可以使用廉价的硬件来进行存储。基于这样的设计，HDFS能够对大数据实现流式访问。")]),a._v(" "),r("p",[a._v("最初，MapReduce是Hadoop中，可以使用的唯一编程引擎，其现在在Hadoop环境中也是非常受欢迎的。MapReduce能够处理大数据。它避免了使用NFS等存储系统时，由于网络和存储I/O而造成的速度减慢。大数据被分布在集群节点上，但MapReduce将其视为单一文件系统。因此，每个磁盘从本地磁盘（HDFS，而不是本地文件系统）读取其所有数据，这避免了网络传输数据。")]),a._v(" "),r("p",[a._v("在一个小型Hadoop集群中，可能只有少量的服务器。更大的集群中会有数以百计的服务器。无论集群大小如何，Hadoop将数据存储在所有的集群文件系统上，集群中的每个节点都存储部分数据。")]),a._v(" "),r("h5",{attrs:{id:"hdfs特性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hdfs特性"}},[a._v("#")]),a._v(" HDFS特性")]),a._v(" "),r("p",[a._v("HDFS具有一些特性，这些特性使其成为大规模分布式处理的理想选择下面介绍HDFS如何支持大数据集的高效处理。")]),a._v(" "),r("h6",{attrs:{id:"_1-处理大数据集"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-处理大数据集"}},[a._v("#")]),a._v(" 1.处理大数据集:")]),a._v(" "),r("p",[a._v("通常非Hadoop的数据库是比较小的，处理的数据及往往只有数TB或只能处理少量的数据文件。Hadoop可以处理PB级别的数据以及数千个数据文件。")]),a._v(" "),r("h6",{attrs:{id:"_2-容错性"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-容错性"}},[a._v("#")]),a._v(" 2.容错性:")]),a._v(" "),r("p",[a._v("Hadoop依赖于大量服务器，可以在这些服务器之间并行工作。集群中的服务器和存储故障是可以预料的，系统不会被非功能存储单元（甚至故障服务器）影响。默认情况下，数据在Hadoop中被复制三次，这意味着HDFS中的每个数据块都存储在三个不同的节点上。可以减少或增加默认的“复制因子”。还可以对不同的数据集使用不同的复制级别。例如文件级复制。")]),a._v(" "),r("h6",{attrs:{id:"_3-数据流式访问"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据流式访问"}},[a._v("#")]),a._v(" 3.数据流式访问：")]),a._v(" "),r("p",[a._v("传统数据库主要用于对数据进行快速访问，而不是进行批处。Hadoop设计的初衷就是为了批处理（尽管较新的产品已经使用了其他处理范例，如交互式SQL、迭代处理、搜索处理和流处理），并提供对数据集的流式访问。")]),a._v(" "),r("h6",{attrs:{id:"_4-简单数据一致性模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-简单数据一致性模型"}},[a._v("#")]),a._v(" 4.简单数据一致性模型：")]),a._v(" "),r("p",[a._v("与传统数据库不同，Hadoop数据文件采用了一次写入多次读取的访问模型。可更新数据库中可能出现的数据一致性问题在Hadoop文件系统中却不存在，因为只有单个写入程序可以随时写入文件。")]),a._v(" "),r("h5",{attrs:{id:"hdfs架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hdfs架构"}},[a._v("#")]),a._v(" HDFS架构")]),a._v(" "),r("p",[a._v("HDFS使用户能够将数据存储在文件中，这些文件被分割成多个块。由于Hadoop旨在处理大数据，因此HDFS块的大小远大于典型关系型数据库的块大小。默认块大小为128MB,还可以配置为高达512MB。")]),a._v(" "),r("h6",{attrs:{id:"_1-主节点和数据节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-主节点和数据节点"}},[a._v("#")]),a._v(" 1.主节点和数据节点")]),a._v(" "),r("p",[a._v("在由多个节点组成的Hadoop集群中，一个或多个节点充当主节点。主节点运行Hadoop的关键服务，例如NameNode和ResourceManager。Hadoop集群中的其余服务器是工作节点，通常称为DataNodes。这些节点实际负责数据块的存储。工作节点还运行NodeManagers(Yarn)。不需要在每个节点上都运行NodeManager, 但大多数都会运行。")]),a._v(" "),r("p",[a._v("工作节点是HDFS文件系统中实际存储集群数据的节点。HDFS数据分布在集群的节点之间，但它们作为单个统一的文件系统向外界提供服务，可以从集群中的任一节点对HDFS文件系统进行访问。可以运行一个只有一个NameNode的集群，NameNode的工作是维护和存储与HDFS文件系统有关的元数。在生产集群中，通常使用两个NameNode,一个用作活动的NameNode,另一个作为备用主机。当活动的NameNode由于各种原因而失败时，备用NameNode会作为活动的NameNode使用。NameNode和DataNode一起协同工作来处理HDFS数据的写入和读取。")]),a._v(" "),r("p",[a._v("(1)NameNode的功能:\n NameNode通过执行以下任务来管理文件命名空间。")]),a._v(" "),r("ul",[r("li",[a._v("维护与文件系统相关的元数据，如文件层次结构和每个文件的块位置。")]),a._v(" "),r("li",[a._v("管理用户对数据文件的访问。")]),a._v(" "),r("li",[a._v("数据块和集群中存储节点发映射关系。")]),a._v(" "),r("li",[a._v("执行对文件系统的操作，如打开或关闭文件以及目录。")]),a._v(" "),r("li",[a._v("为集群中的DataNode成员提供注册服务并处理来自DataNodes的周期性心跳。")]),a._v(" "),r("li",[a._v("确定哪些节点上的数据应该被复制，并删除超出的数据块。")]),a._v(" "),r("li",[a._v("处理DataNode发送的块报告并维护数据块的存放位置。")])]),a._v(" "),r("blockquote",[r("p",[a._v("虽然NameNode知道HDFS文件块所对应的DataNode节点信息，但它不会直接存储块对应的位置，它只是根据在启动集群时DataNode发送的信息来重构。之后，它将信息保存在内存中，用于快速访问。")])]),a._v(" "),r("p",[a._v("(2)DataNode的功能:\nDataNode根据NameNode所发送的指令执行以下功能。")]),a._v(" "),r("ul",[r("li",[a._v("通过在本地文件系统上存储数据块提供存储功能。")]),a._v(" "),r("li",[a._v("完成客户端对DataNodes上存储的数据的读/写请求。")]),a._v(" "),r("li",[a._v("创建和删除数据块。")]),a._v(" "),r("li",[a._v("在集群中复制数据。")]),a._v(" "),r("li",[a._v("通过定期发送块报告和心跳来保持与NameNode的联系。心跳确认DataNode是活的和健康的，块报告显示由DataNode管理的块信息。")])]),a._v(" "),r("h6",{attrs:{id:"hdfs文件系统"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hdfs文件系统"}},[a._v("#")]),a._v(" HDFS文件系统")]),a._v(" "),r("p",[a._v("HDFS文件系统组织结构与基础文件系统（例如Linux ex3 或 ex4文件系统）不同。HDFS采用基于块的文件系统，其中的文件被分解成块。")]),a._v(" "),r("p",[a._v("集群中的文件和服务器之间不是一对一的关系。这意味着文件文件可以由多个块组成，所有这些块很可能没有存储在同一台机器上。")]),a._v(" "),r("p",[a._v("一个文件的块随机分布在整个集群中。这使Hadoop能够支持大于单个磁盘大小的文件。如果文件块存储在多个服务器上，文件的每个块将被复制三次，即使一台机器失效，也不会有任何影响。\n      \nHDFS使用户能够将数据存储在文件中，这些文件被分割成多个块。由于Hadoop旨在处理大数据，因此HDFS块大小远大于关系型数据库使用的块大小。")]),a._v(" "),r("p",[a._v("不同于常规关系型数据库的中的块（通常为4-16M）,Hadoop使用的最小块大小为64MB，通常使用128MB或256MB的块大小。大块尺寸可以提供以下优点:")]),a._v(" "),r("ul",[r("li",[a._v("使用非常大的块，文件系统元数据较小。")]),a._v(" "),r("li",[a._v("由于可以顺序读取大数据的块，因此比较容易执行大数据的流式读取。")])]),a._v(" "),r("h6",{attrs:{id:"文件系统组织"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文件系统组织"}},[a._v("#")]),a._v(" 文件系统组织：")]),a._v(" "),r("p",[a._v("HDFS中的文件以类似于Linux或Unix系统中的文件组织方式组织，其中有一个基于树的目录和文件层次结构。可以在HDFS中使用类似于Linux或UNIX文件系统中的操作命令。")]),a._v(" "),r("p",[a._v("由于HDFS采用一次写入多次读取的模式，一旦将文件写入HDFS，就无法修改其内容。也不能使用现有名覆盖文件。可以执行以下操作，因为它们仅仅是元数据操作，并不触及文件本身的内容：")]),a._v(" "),r("ul",[r("li",[a._v("移动文件")]),a._v(" "),r("li",[a._v("删除文件")]),a._v(" "),r("li",[a._v("重命名文件")])]),a._v(" "),r("h6",{attrs:{id:"hdfs数据格式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hdfs数据格式"}},[a._v("#")]),a._v(" HDFS数据格式:")]),a._v(" "),r("p",[a._v("HDFS需要处理存储在非常大的文件中的大量数据。在处理大型HDFS文件时，MapReduce以记录边界将文件分割成多个片段，从而可以通过启动Mapper程序同时从大文件中读取数据。可拆分数据格式允许文件在记录边界被正确分割成多个片段。")]),a._v(" "),r("p",[a._v("在对HDFS进行处理时，Hadoop更喜欢使用二进制格式而不是文本格式，因为二进制格式会阻止不完整的记录被写入文件，方法是捕获并忽略由于数据损坏而可能创建的错误记录或不完整记录。一个好的HDFS文件格式离不开数据压缩功能。")]),a._v(" "),r("p",[a._v("一种使用较多的流行二进制格式是Avro容器文件格式，它支持可拆分，也支持压缩。另一种常见的HDFS数据格式是SequenceFile,它是一种可拆分的文件格式，以键/值列表的形式来表示。用户也可以通过使用序列化来自定义数据格式，这样可以以任意格式写入数据。")]),a._v(" "),r("h6",{attrs:{id:"写入一个hdfs文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#写入一个hdfs文件"}},[a._v("#")]),a._v(" 写入一个HDFS文件:")]),a._v(" "),r("p",[a._v("当客户端应用程序需要将数据写入HDFS时，将在客户端本地的临时文件中进行初始写入。当客户端完成写入并关闭文件，或当临时文件的大小越过块边界时，Hadoop将创建一个文件并为其分配数据块。临时文件的内容随后被写入新的HDFS文件。写入第一个块之后，将两个副本（基于默认复制因子3）分别写入集群中的另外两个DataNode。只有当Hadoop成功将所有数据块副本都放置在目标节点中时，写操作才算成功。")]),a._v(" "),r("h6",{attrs:{id:"数据复制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据复制"}},[a._v("#")]),a._v(" 数据复制：")]),a._v(" "),r("p",[a._v("数据复制是Hadoop的关键功能之一，因为Hadoop基于此提供了集群的容错能力。由于Hadoop维护了多个数据副本，因此存储在集群中的数据很难丢失。（HDFS会自动复制未经复制的数据块）。")]),a._v(" "),r("h6",{attrs:{id:"namenode操作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#namenode操作"}},[a._v("#")]),a._v(" NameNode操作")]),a._v(" "),r("p",[a._v("每个Hadoop集群都有一个NameNode(高可用性环境中可能有两个一个是Active NameNode，一个是Standby NameNode)。NameNode上保存着内存中的所有元数据，以便快速访问，但它也会将相同的信息保留在磁盘上。以下信息由NameNode保存在磁盘上的fsimage文件中:")]),a._v(" "),r("ul",[r("li",[a._v("HDFS所有文件的名称")]),a._v(" "),r("li",[a._v("HDFS目录结构")]),a._v(" "),r("li",[a._v("HDFS中所有文件的权限")])]),a._v(" "),r("blockquote",[r("p",[a._v("命名空间包含以分层形式排列的目录和文件。每个命名空间都具有存储在所有集群节点上的唯一命名空间ID,以防止具有不同命名空间ID的DataNode意外加入错误的集群。\n由于诸如文件创建或删除等操作使元数据发生变化时，不会立即修改fsimage文件。而是将更改信息记录在磁盘上的编辑文件中。默认情况下，Secondary NameNode每个小时都会合并一次fsimage和edits文件，并将合并信息写入新的fsimage中。NameNode在此时截断旧的edits文件，并开始写入新的内容。")])]),a._v(" "),r("h6",{attrs:{id:"secondary-namenode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#secondary-namenode"}},[a._v("#")]),a._v(" Secondary NameNode:")]),a._v(" "),r("p",[a._v("Secondary NameNode定期执行对fsimage文件的检查。检查意味着Secondary NameNode会合并fsimage和edits文件。Secondary NameNode也被称为检查节点，因为它为NameNode执行检查服务。由于NameNode还将文件系统名称空间存储在内存中，并将其同步到NameNode的命名空间，因此也称其为备份NameNode。但是，它不为NameNode提供任何真正的备份功能。")]),a._v(" "),r("h6",{attrs:{id:"hdfs高可用性和standby-namenode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hdfs高可用性和standby-namenode"}},[a._v("#")]),a._v(" HDFS高可用性和Standby NameNode:")]),a._v(" "),r("p",[a._v("由于NameNode负责维护文件系统命名空间和元数据，所以是集群中不可缺少的部分。Hadoop 2通过提供NameNode High Availability(HA)来克服Hadoop 1中NameNode单点的缺点。在Hadoop 2中，可以创建一个Standby NameNode来提供高可用性服务。使用Standby NameNode获取高可用性，不需要运行Secondary NameNode。")]),a._v(" "),r("h6",{attrs:{id:"潜在不平衡数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#潜在不平衡数据"}},[a._v("#")]),a._v(" 潜在不平衡数据:")]),a._v(" "),r("p",[a._v("虽然HDFS在集群的一部分节点之间传递数据，但数据传递并不是自动的。当你首次创建集群并加载数据，或向其中添加新数据时，传入的数据会自动通过集群分发，以便所有的DataNodes都具有大致相同数量的数据。\n然而，随着时间的推移，节点上的数据还是很有可能出现不平衡。一些节点的空间占用百分比会比其他节点高。此外，向集群中添加新节点时，HDFS不会自动将某些数据移动到新节点的存储磁盘上。这些磁盘可以被写入数据，但只能写入HDFS的新数据。如果不执行任何操作，新磁盘将始终保持较低的使用百分比。\n 当出现这种情况时，可以使用Hadoop提供的balancer工具来平衡数据。")]),a._v(" "),r("h4",{attrs:{id:"利用yarn-hadoop操作系统-进行数据处理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#利用yarn-hadoop操作系统-进行数据处理"}},[a._v("#")]),a._v(" 利用YARN(Hadoop操作系统)进行数据处理")]),a._v(" "),r("p",[a._v("YARN是一个用于管理在网络中的多台计算机上执行的分布式应用程序的框架。YARN管理Hadoop集群上的所有资源。除了MapReduce v2外，YARN还支持其他分布式处理框架，如Impala、Spark和Giraph。在Hadoop环境中运行的所有应用程序，包括MapReduce、Spark、Tez以及其他应用程序，都使用YARN执行它们的工作。\nYARN是Hadoop的处理层，它包含资源管理器和作业调度程序。YARN使得多个处理框架可以在相同的Hadoop集群上运行，例如:")]),a._v(" "),r("ul",[r("li",[a._v("批处理程序（如Spark和MapReduce）")]),a._v(" "),r("li",[a._v("交互式SQL(如Impala)")]),a._v(" "),r("li",[a._v("先进分析（如Spark SQL、Spark ML和Impala）")]),a._v(" "),r("li",[a._v("流式处理(如Spark Streaming)")])]),a._v(" "),r("blockquote",[r("p",[a._v("在研究YARN之前，先解释一下术语。下面几个名称都是指相同的东西：\nMapReduce 2.0\nMRv2\nYARN\nApache Hadoop NextGen MapReduce")])]),a._v(" "),r("h5",{attrs:{id:"yarn的架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yarn的架构"}},[a._v("#")]),a._v(" Yarn的架构")]),a._v(" "),r("p",[a._v("YARN依赖于一个集群范围的ResourceManager，它是Hadoop集群中运行的所有应用程序进行资源申请时的权威仲裁器。ResourceManager与在集群中的每个工作节点（DataNode）上运行的NodeManager（NM）协同工作。单个ResourceManager和节点上的NodeManager组成数据计算框架。")]),a._v(" "),r("p",[a._v("每个在YARN上运行的应用程序都有一个与之关联的ApplicationMaster(AM)。ApplicationMaster主要用来与ResourceManager协商资源，并与NodeManagers一起执行作为每个应用程序一部分的任务，相关主要术语：")]),a._v(" "),r("ul",[r("li",[a._v("客户端是将YARN作业提交到集群的应用程序。有时一个客户端也特指客户机程序运行在其上的网关机器。")]),a._v(" "),r("li",[a._v("一个作业，也称应用程序（例如MapReduce程序作业包括mappers、可选的reducer和他们处理的输入列表），包含一个或多个任务。")]),a._v(" "),r("li",[a._v("当运行MapReduce作业时，任务可以是一个mapper或reducer。有些应用程序同时使用mapper和reducer,还有一些应用程序只使用mapper而不使用reducer。")]),a._v(" "),r("li",[a._v("每个mapper和reducer任务都在自己的容器内运行。管理员配置容器大小。作业决定了mapper和reducer的数量。")])]),a._v(" "),r("blockquote",[r("p",[a._v("ResourceManager、ApplicationMaster和NodeManager是执行计算工作的关键参与者。YARN客户端创建应用并启动它们。RM负责资源调度和管理。运行在每个DataNode上的NodeManager守护进程负责启动和管理容器。每个作业都有一个AM。AM由RM创建，它完成作业所需的容器的所有请求。容器是对特定资源的抽象。")])]),a._v(" "),r("h6",{attrs:{id:"yarn容器-yarn如何分配资源"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#yarn容器-yarn如何分配资源"}},[a._v("#")]),a._v(" YARN容器–YARN如何分配资源")]),a._v(" "),r("p",[a._v("YARN使用容器，容器是用于应用处理的表示特定数量的内存和其他资源（如CPU）的逻辑结构。所有的YARN应用程序任务都运行在容器中。每个Hadoop作业包含多个任务，每个任务都运行在各自的容器中。当任务启动时，容器生效。当任务完成时，容器被杀死，其资源被分配给其他任务。")]),a._v(" "),r("p",[a._v("可以配置容器以满足资源和处理需求。同样,Hadoop也具有关于容器配置的默认值（例如，每个容器为8GB RAM）。")]),a._v(" "),r("p",[a._v("ResourceManager为每个应用程序分配容器。NodeManager管理容器的生命周期，ResourceManager负责调度容器。")]),a._v(" "),r("p",[a._v("每个YARN应用程序都运行在一个或多个容器中。默认情况下每个容器都有一定量的内存，也可以自定义内存大小。map和reduce容器通常使用的内存范围为1～4GB，但如果需要，也可以配置更多的内存。作为管理员，实际上无法指定甚至预测作业的单个容器在哪里运行，其完全由应用层进行管理。")]),a._v(" "),r("p",[a._v("任务数量以及可以在任何时候运行的YARN应用程序的数量受到集群能够分配的容器数量的限制。容器总数受分配给YARN的总内存量以及分配给YARN的处理器总数的限制。")]),a._v(" "),r("h5",{attrs:{id:"resourcemanager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#resourcemanager"}},[a._v("#")]),a._v(" ResourceManager")]),a._v(" "),r("p",[a._v("每个集群中有一个ResourceManager,且执行如下工作：")]),a._v(" "),r("ul",[r("li",[a._v("启动所有YARN应用。")]),a._v(" "),r("li",[a._v("管理作业的调度与执行。")]),a._v(" "),r("li",[a._v("基于全部DataNode之上分配资源。")])]),a._v(" "),r("blockquote",[r("p",[a._v("ResourceManager由两个关键组件Scheduler和ApplicationManager组成(不要与之前专用于每个应用的ApplicationMaster混淆)。Schedular在容量和队列限制范围内为运行的应用程序分配资源。调度程序使用资源容器分配资源。ApplicationManager 接受客户端提交的作业请求并启动第一个容器执行新的ApplicationMaster。它也会在其失败时重新启动ApplicationMaster容器。")])]),a._v(" "),r("p",[a._v("以下是ResourceManager的关键功能：")]),a._v(" "),r("ul",[r("li",[a._v("创建应用的第一个Container容器，该容器负责运行应用的ApplicationMaster。")]),a._v(" "),r("li",[a._v("根据NodeManager发送的心跳信息管理DataNodes。")]),a._v(" "),r("li",[a._v("运行调度器来决定集群间的资源分配。")]),a._v(" "),r("li",[a._v("管理集群级的安全性。")]),a._v(" "),r("li",[a._v("管理来自ApplicationMasters的资源请求。")]),a._v(" "),r("li",[a._v("监控ApplicationMaster的状态，并在其发生故障时重新启动容器。")]),a._v(" "),r("li",[a._v("在应用结束或过期后，解除分配的容器。")])]),a._v(" "),r("p",[a._v("调度算法是ResourceManager的Scheduler组件的一部分，其执行以下功能：")]),a._v(" "),r("ul",[r("li",[a._v("让用户在预设策略的指导下以可预测的方式共享集群。")]),a._v(" "),r("li",[a._v("实现多个用户负责的SLA协议。")]),a._v(" "),r("li",[a._v("即使资源密集，长时间的作业启动后，仍可以在短时间内运行小型作业。")]),a._v(" "),r("li",[a._v("减少不同大小的作业一起运行时的延迟。")])]),a._v(" "),r("blockquote",[r("p",[a._v("ResourceManager为在集群中运行的应用程序分配集群资源，并在此过程中优化集群使用情况。ResourceManager在遵循由容量保障和SLA强加约束的同时，使用包含容量保证和公平调度功能的可插拔调度程序优化集群资源的利用。")])]),a._v(" "),r("blockquote",[r("p",[a._v("ResourceManager仅仅是一个纯调度器，它不关心应用程序或框架的类型。它不会去了解MapReduce或Spark的任何内容，它只需将资源分配给发出请求的应用程序，无论应用程序或框架的类型是什么。")])]),a._v(" "),r("h5",{attrs:{id:"nodemanager"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nodemanager"}},[a._v("#")]),a._v(" NodeManager")]),a._v(" "),r("p",[a._v("Hadoop2集群中的每个DataNode运行NodeManager守护进程来执行YARN的功能(DataNode还运行一个DataNode守护进程来执行HDFS的功能）。每个节点上的NodeManager代理执行以下功能：")]),a._v(" "),r("ul",[r("li",[a._v("通过健康心跳和容器的状态通知与全局ResourceManager进行通信。")]),a._v(" "),r("li",[a._v("注册并启动应用程序。")]),a._v(" "),r("li",[a._v("向ApplicationManager请求启动ApplicationMaster和剩下的应用程序资源容器（也就是容器中运行的map和reduce任务）。")]),a._v(" "),r("li",[a._v("监督应用程序的生命周期。")]),a._v(" "),r("li",[a._v("监控、管理和提供容器消耗有关资源的信息（CPU/内存）。")]),a._v(" "),r("li",[a._v("跟踪DataNodes的健康状况。")]),a._v(" "),r("li",[a._v("监控容器资源的使用情况，并杀死失去控制的程序。")]),a._v(" "),r("li",[a._v("通过聚合作业日志并将其保存到HDFS进行日志管理。")]),a._v(" "),r("li",[a._v("提供针对YARN应用程序的辅助服务。辅助服务是为应用程序提供服务并由MapReduce框架用来进行其shuffle和排序操作的应用程序。")]),a._v(" "),r("li",[a._v("维护节点级别的安全性。")])]),a._v(" "),r("blockquote",[r("p",[a._v("NodeManager进程协调它运行的DataNode的资源使用，并将资源使用信息报告给ResourceManager。它启动并管理应用程序容器。ResourceManager管理作业在工作节点上的调度和执行。")])]),a._v(" "),r("h5",{attrs:{id:"applicationmaster"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#applicationmaster"}},[a._v("#")]),a._v(" ApplicationMaster")]),a._v(" "),r("p",[a._v("每个YARN应用程序都有一个专用的ApplicationMaster(与作业相同)。ApplicationMaster的主要功能有：")]),a._v(" "),r("ul",[r("li",[a._v("管理任务的调度与执行。")]),a._v(" "),r("li",[a._v("为应用的任务分配本地资源。")])]),a._v(" "),r("blockquote",[r("p",[a._v("与ResourceManager和NodeManager不同，ApplicationMaster对应于一个应用程序，并为该应用程序的运行申请资源。尽管ResourceManager和NodeManagers一直运行，ApplicationMaster也仅与运行的应用程序相关联，如果当前没有运行的应用程序，则不会有ApplicationMaster进程存在。记住，ApplicationMaster跟踪特定应用程序的作业进度，每次启动新的应用程序时，ResourceManager会在集群中的一个节点上部署一个容器来运行ApplicationMaster。")])]),a._v(" "),r("h5",{attrs:{id:"applicationmaster如何与resourcemanager协作进行资源分配"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#applicationmaster如何与resourcemanager协作进行资源分配"}},[a._v("#")]),a._v(" ApplicationMaster如何与ResourceManager协作进行资源分配")]),a._v(" "),r("p",[a._v("与所有YARN进程一样，ApplicationMaster在YARN容器内运行。实际上它运行在应用程序启动时的第一个容器内。一旦ApplicationMaster在应用程序的第一个容器内开始运行，它将与ResourceManager协商获取容器来执行应用中的mappers和reducers。之后会将ResourceManager分配的容器资源呈现给运行在每个DataNode上的NodeManager。")]),a._v(" "),r("p",[a._v("ApplicationMaster负责以容器资源容器的形式向ResourceManager请求资源以支持应用程序。它与运行在每个DataNode上的NodeManager服务协调工作以运行资源容器并监视如何使用分配给它们的资源。")]),a._v(" "),r("p",[a._v("ApplicationMaster的主要职责之一是提供资源容错。")]),a._v(" "),r("blockquote",[r("p",[a._v("当ApplicationMaster向ResourceManager发出资源请求以运行其map和reduce任务时，请求是具体的。每个资源请求指定以下内容：")])]),a._v(" "),r("ul",[r("li",[a._v("处理作业所需的文件块。")]),a._v(" "),r("li",[a._v("为应用程序创建的以容器为单位的资源量。")]),a._v(" "),r("li",[a._v("容器的大小（例如，1GB内存和1个虚拟核心）。")]),a._v(" "),r("li",[a._v("资源在何处分配，是依据从NameNode获取的块存储位置信息而进行的（如机架1的节点10上分配4个容器，机架2的节点20上分配8个容器）。")]),a._v(" "),r("li",[a._v("资源请求的优先级。")])]),a._v(" "),r("blockquote",[r("p",[a._v("如果ApplicationMaster请求的资源可用，则ResourceManager满足ApplicationMaster的资源请求。然后ApplicationMaster给运行在DataNode上的NodeManager分配map和reduce任务容器。")])]),a._v(" "),r("h5",{attrs:{id:"jobhistoryserver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#jobhistoryserver"}},[a._v("#")]),a._v(" JobHistoryServer")]),a._v(" "),r("p",[a._v("完整集群中都有一个JobHistoryServer服务。JobHistoryServer归档YARN所有的作业指标及元数据，并通过JobHistoryServer Web UI公开。没有JobHistoryServer,集群也能良好运行，但我们将无法轻松访问作业日志和作业历史记录。")]),a._v(" "),r("h4",{attrs:{id:"其他简版"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他简版"}},[a._v("#")]),a._v(" 其他简版")]),a._v(" "),r("h5",{attrs:{id:"_1、yarn组件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1、yarn组件"}},[a._v("#")]),a._v(" 1、YARN组件：")]),a._v(" "),r("ul",[r("li",[a._v("ResourceManager：全局资源管理器，负责和ApplicationMaster交互和资源调度，资源分配")]),a._v(" "),r("li",[a._v("ApplicationManager：ResourceManager组件，负责接收作业提交，协商启动Container")]),a._v(" "),r("li",[a._v("Scheduler：ResourceManager组件，负责作业调度（公平调度或容器调度）")]),a._v(" "),r("li",[a._v("NodeManager：一台机器上的管理者，负责和ResourceManager与ApplicationMaster交互")]),a._v(" "),r("li",[a._v("ApplicationMaster：与ResourceManager进行协商，与NodeManager一起监视和执行任务")])]),a._v(" "),r("h5",{attrs:{id:"_2、hadoop进程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2、hadoop进程"}},[a._v("#")]),a._v(" 2、Hadoop进程")]),a._v(" "),r("p",[a._v("1、"),r("code",[a._v("NameNode")]),a._v("：管理元数据和DataNode，处理读写请求\n2、"),r("code",[a._v("DadaNode")]),a._v("：负责管理和存储数据\n3、"),r("code",[a._v("ResourceManager")]),a._v("：负责资源调度\n4、"),r("code",[a._v("NodeManager")]),a._v("：负责和ApplicationMaster和ResourceManager通信和启动监听Container\n5、"),r("code",[a._v("JournalNode")]),a._v("：负责管理日志信息\n6、"),r("code",[a._v("ZKFS")]),a._v("：负责监听NameNode")]),a._v(" "),r("h5",{attrs:{id:"_3、hadoop三种部署方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3、hadoop三种部署方式"}},[a._v("#")]),a._v(" 3、hadoop三种部署方式")]),a._v(" "),r("ul",[r("li",[a._v("Local (Standalone) Mode  本地模式")]),a._v(" "),r("li",[a._v("Pseudo-Distributed Mode  伪分布式模式")]),a._v(" "),r("li",[a._v("Fully-Distributed Mode   分布式模式集群")])])])}),[],!1,null,null,null);e.default=_.exports}}]);