$(function(){
	$(".sidebar .nav li a").hover(function(){
		$(this).css("background-color","#2B333E");
		$(this).css("color","#fff");
		$(this).find("i").css("color","#00AAFF");
	},function(){
		$(this).css("color","#AEB7C2");
		$(this).find("i").css("color","#AEB7C2");
	})
	$(".sidebar .nav li a").click(function(){
		$(this).addClass("active");
		$(this).parent().siblings().find("a").removeClass("active");
	})
})
//隐藏或显示侧边导航s
$(function(){
	var index=1;
	$("#btn-sidebar").click(function(){
		if(index==1){
			index=0;
			$(".sidebar").animate({left:'-260px'},500);
			$(this).find("i").addClass("lnr-arrow-right-circle").removeClass("lnr-arrow-left-circle");
			$(this).find("i").css("color","#00AAFF");
//			$(".main").animate({left:'-260px'},500);
			$(".main").css("width","100%");
		}else{
			index=1;
			$(".sidebar").animate({left:'0px'},500);
			$(this).find("i").removeClass("lnr-arrow-right-circle").addClass("lnr-arrow-left-circle");
			$(this).find("i").css("color","");
			$(".main").css("width","calc(100% - 260px)");
		}
	})
})
//隐藏和显示滚动条
$(function(){
	$(".sidebar").hover(function(){
		$(".sidebar-scroll::-webkit-scrollbar").css("display","block");
	},function(){
		$(".sidebar-scroll::-webkit-scrollbar").css("display","none");
	})
})
