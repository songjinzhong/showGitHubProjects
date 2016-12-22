# showGitHubProjects
A JavaScript lib to show your GitHub projects on HTML page.

[demo](https://songjinzhong.github.io/showGitHubProjects/demo/).

## 如何使用

**依赖于 JQuery**，然后把 `showProject.js` 文件引入到项目中，设置参数如下：

```javascript
//html
<div class="projects"></div>
<script src="https://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
<script src="showProjects.js"></script>

//js
$('.projects').showProjects({
	name : 'songjinzhong', //your github url name
	maxNum : 12, // max Num you want show your projects
	loading : '<h3>加载中...</h3>', //loading informtion
	filter : { // filter for your projects, can be id or name
		id : [66267751],
		name : ['7studying.com']
	},
  per_page: 100, // 取决于你项目数，必须大于你的项目数
  fork: false // 是否显示 fork 项目，false 表示不显示
});
```

## 注意

这个 Demo 的布局用到了 flex 布局，所以如果在一些比较旧的浏览器上面，可能显示回出现问题。

## 更新

2016-12-22：发现 github 对于 https://api.github.com/users/songjinzhong/repos 的数据有限制，每页默认显示 30，默认获取第一页，所以如果想要获得所有项目，必须把 `per_page` 设置大于你的项目数，该参数表示每页显示的项目数量。

2016-12-22：添加是否显示 fork 项目配置

## 应用

基于此，我写了[一篇文章](http://yuren.space/blog/2016/12/04/show-you-projects/)进行介绍，并把此项目用到了我博客中[项目页面](http://yuren.space/projects)。