(function($){
	var showProjects = function(){
		var projects = this;
		var template = '<div class="p-item">'+
				'<div class="p-header"><a href="[repo.html_url]"><h3>[repo.name]</h3></a></div>'+
				'<div class="p-body"><p>[repo.description]</p></div>'+
				'<div class="p-footer"><span>L：[repo.language]</span><span>S：[repo.stargazers_count]</span><span>F：[repo.forks_count]</span></div>'+
			'</div>';
		projects.length > 0 && $.get("https://api.github.com/users/songjinzhong/repos?type=owner", function(data){
			if(data){
				projects.html("");
				data = data.filter(function(a){
					return null != a.description && a.fork == false;
				});
				data = data.sort(function(a, b){
					return b.stargazers_count - a.stargazers_count|| b.forks_count - a.forks_count;
				})
				var item = "";
				data.forEach(function(repo){
					repo.language = repo.language || 'null';
					item = template.replace(/\[(.*?)\]/g, function(){
						return eval(arguments[1]);
					});
					projects.append(item);
				});
			}else{
				projects.html('<div><h3>加载失败</h3><p>请刷新或稍后再试...</p></div>');
			}
		})
	}
	$.prototype.showProjects = showProjects;
})($)