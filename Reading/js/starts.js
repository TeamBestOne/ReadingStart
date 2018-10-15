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
	//粉丝互动切换
	$("#mon-ticket").click(function(){
		$("#sty1").show();
		$("#sty2").hide();
	})
	$("#invite-ticket").click(function(){
		$("#sty2").show();
		$("#sty1").hide();
	})
	$(".ticket>h4>a").click(function(){
		$(this).css("color","#ed4259");
		$("#mon-ticket").removeClass("color1")
	})
	$(".sty").hover(function(){
		$(".icon-box>span").css("top","0px");
	},function(){
		$(".icon-box>span").css("top","12px");
	})
	
	
	
})