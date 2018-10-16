$(function(){
	$("#app a").hover(function(){
		$("#appqd").show();
	},function(){
		$("#appqd").hide();
	})
})

$(function(){
	var trigger = null;
	$("#nav-hover .nav-li-first,.classify-list").hover(function(){
		trigger =setTimeout(function(){
			$("#nav-hover .classify-list").show();
		},250);	
	},function(){
		clearTimeout(trigger);
		$("#nav-hover .classify-list").hide();
	})
})