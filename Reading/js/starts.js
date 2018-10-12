$(function(){
	$(".fl li:last-child").hover(function(){
		$("#menu1").slideDown(200);
	},function(){
		$("#menu1").hide();
	})
	$(".bor1").hover(function(){
		$(this).css("border","solid 1px #ed4259");
	},function(){
		$(this).css("border","solid 1px #ffb0b4");
	})
	
	
	
	
	
	
})