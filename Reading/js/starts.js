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
	//星星评价
	$.fn.raty.defaults.path = 'img/image1';
	$("#star").raty();
	$("#star>img").click(function(){
    	 location.href = "login.html";
    })
//  $("#star>img").click(function(){
//  	 $("#modal-mys").show();
//  })
//  $(".modal-my>div").click(function(){
//  	$("#modal-mys").hide();
//  })

	//粉丝互动切换
	$("#mon-ticket").click(function(){
		$("#sty1").show();
		$("#sty2").hide();
	})
	$("#invite-ticket").click(function(){
		$("#sty2").show();
		$("#sty1").hide();
		$(".b").css("color","#ED4259");
		$(".a").css("color","black");
	})
//	$(".a").click(function(){
//		$(".b").css("color","#ED4259");
//		$(".b").css("color","black");
//	})
//	$(".b").click(function(){
//		$(".a").css("color","black");
//	})
	$(".ticket>h4>a").click(function(){
		$(this).css("color","#ed4259");
		$("#mon-ticket").removeClass("color1")
	})
	//上下浮动
	$("#sty1").hover(function(){
		$(".icon-box>span").css("top","0px");
	},function(){
		$(".icon-box>span").css("top","12px");
	})
	$("#week").hover(function(){
		$(".week>span").css("top","0px");
	},function(){
		$(".week>span").css("top","18px");
	})
	
	//选项卡切换
	$("#content li:eq(0)").click(function(){
		$("#msg-tab1").show();
		$("#msg-tab2").hide();
	})
	$("#content li:eq(1)").click(function(){
		$("#msg-tab2").show();
		$("#msg-tab1").hide();
	})
     $("#content li").each(function(){
		$(this).click(function(){
			$(this).css("border-bottom","solid 2px #ed4259").siblings().css("border-bottom","solid 2px white");
		})
	})
     
	
})
//文字上下滚动
function scrollDiv(){
 	$("#fans-line").animate({marginTop:"-27px"},500,function(){
 		$(this).css("margin-top","0").find("li:eq(0)").appendTo($(this));		
 	})
}
$(function(){  
	setInterval('scrollDiv()',3000);		  
})
