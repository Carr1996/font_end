###  一：html初识

1. HTML：hyper text markup language 超 文本 标记 语言
   1. 文本文件只能记录内容 没办法存储样式
   2. 通过给没有样式的内容添加标签的形式 让内容在原网页中显示响应的语义

### 二 ：浏览器市场份额

![1532916110570](C:\Users\LTH1005\AppData\Local\Temp\1532916110570.png)

### 三：浏览器内核

1. 渲染引擎
2. JS引擎

### 四：前端开发工具

1. DreamWeaver
2. 记事本
3. sublime
4. hbulider
5. webstorm

### 五：HTML基本骨架

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
~~~



### 六：HTML基本标签

1. 标签作用？
   给没有样式的网页内容添加相应的语义

2. 标题标签<h1>-<h6> headline

3. 段落标签 <p>  paragraph

4. 图片标签 <img> image

   ~~~html
   <img src="" alt="">
   ~~~

   src:source 资源
   alt：alternate 替代代替

5. 锚标签 <a> anchor
   跳转方式

   ~~~
   <a href="demo2"></a>
   <a href="www.baidu.com"></a>
   <a href="#">返回顶部</a>
   #代表占位符
   
   <a href="#here">去here</a>
   <a id="here">我是here</a>
   ~~~

6. 路径
   相对路径
   同级直接写
   从内向外 href="h1/h2/h3/demo2.html"
   从外向内  href="../../../demo1.html"
   href="../../../h1/h2/h3/demo3.html"
   绝对路径
   href="www.baidu.com"

7. video audio

   ~~~html
       <!-- controls添加控制器 让媒体文件在页面中显示-->
       <!-- autoplay 自动播放-->
       <!-- loop 循环播放 --> 	
   	<audio src="../audio/2.mp3" controls autoplay>您的浏览器版本过低</audio>
       <p></p>
       <video src="../video/1.mp4" controls autoplay></video>
   ~~~

   

8. 列表标签（组标签）

   - 无序列表

     ```html
      	<ul>
             <li>
                 <a href="">南京</a>
             </li>
             <li>
                 <a href="">启东</a>
             </li>
             <li>
                 <a href="">苏州</a>
             </li>
             <li>
                 <a href="">扬州</a>
             </li>
             <li>
                 <a href="">无锡</a>
             </li>
             <li>
                 <a href="">无锡</a>
             </li>
         </ul>
     ```

     

   - 有序列表

     ```html
      	<ol>
             <li>
                 <a href="">南京</a>
             </li>
             <li>
                 <a href="">启东</a>
             </li>
             <li>
                 <a href="">苏州</a>
             </li>
             <li>
                 <a href="">扬州</a>
             </li>
             <li>
                 <a href="">无锡</a>
             </li>
         </ol>
     ```

     

   - 自定义列表
     Dl:   definition list 自定义列表
     Dt:   definition title 自定义标题
     Dd:  definition description 定义描述词

     ```html
       	<dl>
             <dt>常州</dt>
             <dd>恐龙 饼</dd>
             <dd>恐龙 </dd>
             <dt>常熟</dt>
             <dd>饼 面饼</dd>
             <dt>启东</dt>
             <dd>老太婆炒面 蛋饼</dd>
         </dl>
     ```

     

9. div span div:   division  分割
   span：区域
   区别：1. 两者都表示区域的分割，根据语义 没有任何样式

   ​           2.在HTML里分类不同

   ​                    容器级：里面可以嵌套任何标签包括自己ul ol li dt dd dl div   

   ​                    文本级 图片 文字 表单元素 a img p span

   ​            3.在CSS里分类不同

   ​		   span是行内元素   div是块级元素

   ​             4.div表示大范围分割      span表示小范围的区域

10. 废弃标签

  ~~~html
      <font>被废弃掉的标签</font>
      <b>加粗</b>
      <i>倾斜</i>
      <br/>       换行
      <u>下划线</u>
      <hr/>     水平线
      <del>删除线</del>
      <strong>加粗强调</strong>
      <em>倾斜强调</em>
      <br/>
      
  ~~~

11. 表单元素
    表单就是用来收集用户信息让用户填写或者选择的

    ~~~html
    <form action="#">
            <p>
                <label for="username">用户名</label>
                <!-- input：代表的是创建输入的小部件 -->
                <!-- type：表示输入部件的类型 -->
                <!-- text： 表示部件的类型是文本框 -->
                <!-- tel： 表示部件的类型是电话号码 -->
                <!-- password： 表示部件的类型是密码 -->
                <!-- autofocus：自动对焦到第一个文本框 -->
                <!-- autocomplete：自动记忆功能 -->
                <input type="text" placeholder="请输入用户名" 
                autofocus id="username" maxlength="4" minlength="2" autocomplete="off">
            </p>
            <p>手机号：
                <input type="tel" placeholder="请输入手机号">
            </p>
            <p>密码：
                <input type="password" placeholder="请输入密码">
            </p>
            <p>邮箱：
                <input type="email" placeholder="请输入邮箱">
            </p>
        	<p>时间：
                <input type="date">
        	</p>
            <p>性别：
                <!-- name：增加元素的互斥性 -->
                <input type="radio" name="sex" id="nan">
                <label for="nan">男</label>
                <input type="radio" name="sex" id="nv">
                <label for="nv">女</label>
            </p>
            <p>兴趣
                <input type="checkbox">吃
                <input type="checkbox">喝
                <input type="checkbox">睡
                <input type="checkbox">玩
            </p>
            <p>所在地：
                <select name="" id="">
                    <option value="">丽江</option>
                    <option value="">三亚</option>
                    <option value="">土耳其</option>
                    <option value="">西藏</option>
                    <option value="">桂林</option>
                </select>
            </p>
            <p>备注：
                <!-- cols:columns  列 -->
                <!-- rows:         行 -->
                <textarea name="" id="" cols="30" rows="10" placeholder="备注"></textarea>
            </p>
    
            <input type="button" value="我是普通按钮">
    
            <input type="submit" value="提交按钮">
    
            <input type="reset" value="重置按钮">
        </form>
    ~~~

    

    

12. 表格

    ~~~html
        <!-- colspan列合并  rowspan行合并 align水平对其方式 valign垂直对齐方式 -->
        <!-- cellpadding:控制的是内容到内边框的距离 -->
        <!-- cellspacing:控制的是内边框到外边框的距离 -->
        <!-- bgcolor：设置背景颜色 -->
        <!-- background：设置背景图片 -->
        <table border="1" width="60%" align="center" cellpadding="10" cellspacing="0" background="../imgs/1.jpg">
            <caption>课程表</caption>
            <tr>
                <th>时间</th>
                <th bgcolor="blue">科目</th>
                <th>教师</th>
                <th>人数</th>
                <td rowspan="4" valign="top">备注</td>
            </tr>
            <tr align="center" bgcolor="yellow">
                <td>9:00</td>
                <td>音乐</td>
                <td>陈奕迅</td>
                <td>30</td>
            </tr>
            <tr align="center">
                <td>10:00</td>
                <td>美术</td>
                <td>陈奕迅</td>
                <td>10</td>
            </tr>
            <tr align="center">
                <td>11:00</td>
                <td>体育</td>
                <td>刘翔</td>
                <td>80</td>
            </tr>
            <tr>
                <td colspan="5" class="d1">总人数：</td>
            </tr>
        </table>
    ~~~

    

