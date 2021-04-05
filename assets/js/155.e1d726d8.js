(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{652:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[s._v("#")]),s._v(" 基本操作")]),s._v(" "),a("p",[s._v("1、获取所有可用的数据库："),a("code",[s._v("SHOW DATABASES")]),s._v("；")]),s._v(" "),a("p",[s._v("2、选择数据库(customers)："),a("code",[s._v("USE customers")]),s._v("；")]),s._v(" "),a("p",[s._v("3、用于显示数据库服务器的状态信息："),a("code",[s._v("SHOW STATUS")]),s._v("；")]),s._v(" "),a("p",[s._v("4、用来显示授权用户的安全权限："),a("code",[s._v("SHOW GRANTS")]),s._v("；")]),s._v(" "),a("p",[s._v("5、用来显示数据库服务器或警告信息："),a("code",[s._v("SHOW ERRORS")]),s._v(" 或者 "),a("code",[s._v("SHOW WARNINGS")]),s._v("；")]),s._v(" "),a("p",[s._v("6、用于显示创建数据库时的创建语句："),a("code",[s._v("SHOW CREATE DATABASE customers")]),s._v("；")]),s._v(" "),a("p",[s._v("7、用于显示创建表时的创建语句："),a("code",[s._v("SHOW CREATE TABLE customers")]),s._v("；")]),s._v(" "),a("p",[s._v("8、获取当前所选的数据库中所有可用的表："),a("code",[s._v("SHOW TABLES")]),s._v("；")]),s._v(" "),a("p",[s._v("9、获取表中所有列的信息："),a("code",[s._v("SHOW COLUMNS FROM tableName")]),s._v("；同时DESCRIBE语句有相同的效果："),a("code",[s._v("DESCRIBE tableName")]),s._v("；")]),s._v(" "),a("p",[s._v("更多基本操作参考：https://juejin.im/post/5ae55861f265da0ba062ec71")]),s._v(" "),a("h3",{attrs:{id:"语法详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法详解"}},[s._v("#")]),s._v(" 语法详解")]),s._v(" "),a("p",[s._v("1、MySQL 和 Oracle 中的限制返回大小")]),s._v(" "),a("p",[s._v("MySQL语法：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" column_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("Oracle语法：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" column_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" ROWNUM "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("2、Sql中的连接：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("INNER JOIN")]),s._v("：如果表中有至少一个匹配，则返回行")]),s._v(" "),a("li",[a("code",[s._v("LEFT JOIN")]),s._v("：即使右表中没有匹配，也从左表返回所有的行")]),s._v(" "),a("li",[a("code",[s._v("RIGHT JOIN")]),s._v("：即使左表中没有匹配，也从右表返回所有的行")]),s._v(" "),a("li",[a("code",[s._v("FULL JOIN")]),s._v("：只要其中一个表中存在匹配，则返回行")])]),s._v(" "),a("p",[s._v("3、"),a("code",[s._v("UNION")]),s._v(" 操作符用于合并两个或多个 "),a("code",[s._v("SELECT")]),s._v(" 语句的结果集（无重复的值）。"),a("code",[s._v("UNION ALL")]),s._v("也是（所有值，不包含重复的）")]),s._v(" "),a("p",[s._v("4、"),a("code",[s._v("INSERT INTO SELECT")]),s._v(" 语句从一个表复制数据，然后把数据插入到一个已存在的表中。目标表中任何已存在的行都不会受影响。")]),s._v(" "),a("p",[s._v("5、Sql约束：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("NOT NULL")]),s._v(" - 指示某列不能存储 NULL 值。")]),s._v(" "),a("li",[a("code",[s._v("UNIQUE")]),s._v(" - 保证某列的每行必须有唯一的值。")]),s._v(" "),a("li",[a("code",[s._v("PRIMARY KEY")]),s._v(" - NOT NULL 和 UNIQUE 的结合。确保某列（或两个列多个列的结合）有唯一标识，有助于更容易更快速地找到表中的一个特定的记录。")]),s._v(" "),a("li",[a("code",[s._v("FOREIGN KEY")]),s._v(" - 保证一个表中的数据匹配另一个表中的值的参照完整性。")]),s._v(" "),a("li",[a("code",[s._v("CHECK")]),s._v(" - 保证列中的值符合指定的条件。")]),s._v(" "),a("li",[a("code",[s._v("DEFAULT")]),s._v(" - 规定没有给列赋值时的默认值。")])]),s._v(" "),a("p",[s._v("6、"),a("code",[s._v("Auto-increment")]),s._v(" 会在新记录插入表中时生成一个唯一的数字，通常用于主键约束。")]),s._v(" "),a("p",[s._v("7、Sql函数：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AVG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 返回平均值\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 返回行数\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("FIRST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 返回第一个记录的值\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("LAST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 返回最后一个记录的值\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("MAX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 返回最大值\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("MIN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 返回最小值\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 返回总和\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("UCASE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 将某个字段转换为大写\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("LCASE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 将某个字段转换为小写\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("MID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 从某个文本字段提取字符   "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("MID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("pos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("字符串，开始位置，返回长度\nLENGTH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 返回某个文本字段的长度\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ROUND")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 对某个数值字段进行指定小数位数的四舍五入\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("NOW")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 返回当前的系统日期和时间\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("FORMAT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" 格式化某个字段的显示方式      "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("FORMAT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("column_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])])]),a("p",[s._v("8、"),a("code",[s._v("update set case when")])]),s._v(" "),a("p",[s._v("例子：(如果条件不符，则不更改字段，直接在set=原字段就行)")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" goods_agent a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'02'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("goods_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5996")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" a \n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("left")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" order_goods b "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("agent_goods_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("goods_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("goods_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("goods_id\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("left")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" order_info c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("order_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'04'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'15'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close_at "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close_at "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close_at "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),s._v("\n")])])]),a("h3",{attrs:{id:"mysql主从复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql主从复制"}},[s._v("#")]),s._v(" MYSQL主从复制")]),s._v(" "),a("blockquote",[a("p",[s._v("准备工作：- 1.版本一致  - 2.初始化表，并在后台启动mysql - 3.修改root的密码")])]),s._v(" "),a("p",[s._v("1、修改主服务器master：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#vi /etc/my.cnf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nlog-bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql-bin   //"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("必须"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("启用二进制日志\nserver-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("232")]),s._v("      //"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("必须"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("服务器唯一ID，默认是1，一般取IP最后一段\n")])])]),a("p",[s._v("2、修改从服务salve:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#vi /etc/my.cnf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nlog-bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql-bin   //"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("不是必须"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("启用二进制日志\nserver-id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("222")]),s._v("      //"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("必须"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("服务器唯一ID，默认是1，一般取IP最后一段\n")])])]),a("p",[s._v("3、重启两台服务器的mysql:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysqld restart\n\n//若启动不成功,查看日志，一般是my.cnf配置问题\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/log/mysqld.log\n")])])]),a("p",[s._v("4、在主服务器上建立帐户并授权slave:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("GRANT REPLICATION SLAVE ON *.* to "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hs'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" identified by "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a123.+-'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n//一般不用root帐号，@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("表示所有客户端都可能连，只要帐号"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，密码正确"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a123.+-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，此处可用具体客户端IP代替，如192.168.0.1，加强安全。\n")])])]),a("p",[s._v("5、登录主服务器的mysql，查询master的状态")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("  mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("show master status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   +------------------+----------+--------------+------------------+\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" File             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Position "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Binlog_Do_DB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Binlog_Ignore_DB "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n   +------------------+----------+--------------+------------------+\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mysql-bin.000003 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("712")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n   +------------------+----------+--------------+------------------+\n   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" row "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  // 注：执行完此步骤后不要再操作主服务器MYSQL，防止主服务器状态值变化\n")])])]),a("p",[s._v("6、配置从服务器Slave：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("change master to "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("master_host")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.168.0.232'")]),s._v(",master_user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hs'")]),s._v(",master_password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a123.+-'")]),s._v(",master_log_file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql-bin.000003'")]),s._v(",master_log_pos"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("712")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   \nMysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("start slave"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    //启动从服务器复制功能,注意上面的用户名，密码，端口等\n")])])]),a("p",[s._v("7、检查从服务器复制功能状态：")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show slave status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("G\n  Slave_IO_State: Waiting "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" master to send event\n  Master_Host: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".0.232  //主服务器地址\n  Master_User: hs   //授权帐户名，尽量避免使用root\n  Master_Port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("    //数据库端口，部分版本没有此行\n  Connect_Retry: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n  Master_Log_File: mysql-bin.000003\n  Read_Master_Log_Pos: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v("     //"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#同步读取二进制日志的位置，大于等于Exec_Master_Log_Pos")]),s._v("\n  Relay_Log_File: ddte-relay-bin.000003\n  Relay_Log_Pos: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("251")]),s._v("\n  Relay_Master_Log_File: mysql-bin.000004\n  Slave_IO_Running: Yes    //此状态必须YES\n  Slave_SQL_Running: Yes     //此状态必须YES\n                    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n\n//注：Slave_IO及Slave_SQL进程必须正常运行，即YES状态，否则都是错误的状态"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("如：其中一个NO均属错误"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("。\n")])])]),a("p",[s._v("主从服务器配置完成后，建立一个库，插入数据进行测试是否正常。")])])}),[],!1,null,null,null);t.default=e.exports}}]);