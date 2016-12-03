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
	}
});
```

## 注意

这个 Demo 的布局用到了 flex 布局，所以如果在一些比较旧的浏览器上面，可能显示回出现问题。