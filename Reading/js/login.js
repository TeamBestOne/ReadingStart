//自动登录
$(function(){
	var index=1;
	$(".login-check").click(function(){	
		if(index==1){
			index=0;
			$(this).addClass("login-check-act");
		}else{
			index=1;
			$(this).removeClass("login-check-act");
		}
	})
	$(".login-check").hover(function(){
		$(this).addClass("login-check-hover");
	},function(){
		$(this).removeClass("login-check-hover");
	})
})
$(function(){
	$(".btnlogin").hover(function(){
		$(this).css("background-color","#ED4259");
	},function(){
		$(this).css("background-color","#BF2C24");
	})
})


//选择国家
$(function(){
	//下拉列表
	var index=1;
	$(".ui-select-button").click(function(){
		if(index==1){
			index=0;
			$(".ui-select-datalist").show();
		}else{
			index=1;
			$(".ui-select-datalist").hide();
		}
	})
	//
	$(".ui-select-datalist-li").hover(function(){
		$(this).css("background-color","#f7f6f2");
	},function(){
		$(this).css("background-color","#fff");
	})
	//更改国家
	$(".ui-select-datalist-li").click(function(){
		var str_num=$(this).html();
		var num= parseInt(str_num.replace(/[^0-9]/ig,""));
		$(".ui-select-text").html("+"+num);
		$(this).addClass("selected").siblings().removeClass("selected");
		$(".ui-select-datalist").hide();
		index=1;
	})
})

//转换账号登录和手机号登录
$(function(){
	$("#chg_zh_phone").click(function(){
		var zh_isshow = $(".zh-login").css("display");
		if(zh_isshow == "block"){
			$(".zh-login").hide();
			$(".phone-login").show();
			$(this).html("账号密码登录");
		}else{
			$(".zh-login").show();
			$(".phone-login").hide();
			$(this).html("手机验证码登录");
		}
	})
})

//更多登录方式
$(function(){
	$(".lg-zfb").hover(function(){
		$(this).attr("src","img/zm-img/zfb-hv.png");
	},function(){
		$(this).attr("src","img/zm-img/zfb.png");
	})
	$(".more-btn").hover(function(){
		$(".other-way p").fadeIn("slow");
	})
	$(".other-way p").mouseleave(function(){
		$(this).fadeOut("slow");
	})
})
//更换为扫码登录或账号登录
$(function(){
	$(".login-mode-switch").click(function(){
		var lg_web = $(".web-login").css("display");
		if(lg_web == "block"){
			$(".web-login").hide();
			$(".scan-mode").show();
			$(this).removeClass("scan").addClass("scan2");
		}else{
			$(".web-login").show();
			$(".scan-mode").hide();
			$(this).removeClass("scan2").addClass("scan");
		}
	})
})
