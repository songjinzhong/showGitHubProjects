(function($){
	var showProjects = function(option){
		var projects = this;

		// no github name
		if(!option.name){
			projects.html('<div><h3>参数错误</h3><p>请设置 GitHub 用户名</p></div>');
			return;
		}

		// defaultSetting

		option.maxNum = option.maxNum || 0;

		var template = '<div class="p-item">'+
				'<div class="p-header"><a href="[repo.html_url]"><h3>[repo.name]</h3></a></div>'+
				'<div class="p-body"><p>[repo.description]</p></div>'+
				'<div class="p-footer"><span>L：[repo.language]</span><span>S：[repo.stargazers_count]</span><span>F：[repo.forks_count]</span></div>'+
			'</div>';
		projects.length > 0 && $.get("https://api.github.com/users/"+ option.name +"/repos?type=owner", function(data){
			if(data){
				projects.html("");
				data = data.filter(function(a){
					return null != a.description && a.fork == false;
				});
				data = data.sort(function(a, b){
					return b.stargazers_count - a.stargazers_count|| b.forks_count - a.forks_count;
				})
				var item = "";
				if(option.maxNum > 0 && option.maxNum < data.length){
					data = data.slice(0,option.maxNum);
				}
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