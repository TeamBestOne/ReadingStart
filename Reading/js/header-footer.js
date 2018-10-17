$(function(){
	$("#app a").hover(function(){
		$("#appqd").show();
	},function(){
		$("#appqd").hide();
	})
})

$(function(){
	var trigger = null;
<<<<<<< HEAD
	var hidertig = null;
	$("#nav-hover .nav-li-first").hover(function(){
=======
	$("#nav-hover .nav-li-first,.classify-list").hover(function(){
>>>>>>> branch 'master' of https://github.com/TeamBestOne/ReadingStart.git
		trigger =setTimeout(function(){
			$("#nav-hover .classify-list").show();
		},250);	
	},function(){
		clearTimeout(trigger);
		$("#nav-hover .classify-list").hover(function(){
			$("#nav-hover .classify-list").show();
			clearTimeout(hidertig);
		},function(){
			$("#nav-hover .classify-list").hide();
		})
		hidertig = setTimeout(function(){
			$("#nav-hover .classify-list").hide();
		},100);
	})
})
