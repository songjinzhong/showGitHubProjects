# showGitHubProjects
A JavaScript lib to show your GitHub projects on HTML page.

## How to use

**依赖于 JQuery**，然后把 `showProject.js` 文件引入到项目中，设置参数如下：

```javascript
//html
<div class="projects">
	<h3>加载中...</h3> // set waiting here
</div>
<script src="https://cdn.bootcss.com/jquery/3.1.1/jquery.min.js"></script>
<script src="showProjects.js"></script>

//js
$('.projects').showProjects({
	name : 'songjinzhong' //your github url name
});
```