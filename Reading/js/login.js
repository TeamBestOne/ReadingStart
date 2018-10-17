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
			$("#username,#password").val("");
			$(".phone-login").show();
			$(this).html("账号密码登录");
		}else{
			$(".zh-login").show();
			$(".phone-login").hide();
			$(".txtphone,#txtcode").val("");
			$(this).html("手机验证码登录");
		}
	})
})

//更多登录方式
$(function(){
	//支付宝
	$("#lg-zfb").hover(function(){
		$(this).attr("src","img/zm-img/zfb-hv.png");
	},function(){
		$(this).attr("src","img/zm-img/zfb.png");
	})
	//微博
	$("#lg-wb").hover(function(){
		$(this).attr("src","img/zm-img/wb-hv.png");
	},function(){
		$(this).attr("src","img/zm-img/wb.png");
	})
	//百度
	$("#lg-bd").hover(function(){
		$(this).attr("src","img/zm-img/bd-hv.png");
	},function(){
		$(this).attr("src","img/zm-img/bd.png");
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
//更换登录方法
$(function(){
	$(".font1").click(function(){
		$("#username,#password").val("");
		$(".txtphone,#txtcode").val("");
		$(this).addClass("li-act").siblings().removeClass("li-act");
		var index =$(this).index()+1;
		$(".login-box").hide();
		$(".login-box"+index).show();
	})
})

//验证手机号登陆
$(function(){
	$(".txtphone").blur(function(){
		var phone =$(".txtphone").val();
		if(phone!=""){
			$(".phone-login .error-tip").hide();
			$(".phone-login dd:first-child").css("border-color","#E6E6E6");
		}
	})
	$("#txtcode").blur(function(){
		var phonecode =$("#txtcode").val();
		if(phonecode!=""){
			$("#txtcode").removeClass("txtcode-null").addClass("txtcode");
		}
	})
	$(".phone-login .btnlogin").click(function(){
		var phone =$(".txtphone").val();
		var phonecode =$("#txtcode").val();
		var pattenPhone=/^1(3|4|5|7|8)\d{9}$/;
		if(phone==""){
			$(".phone-login dd:first-child").css("border-color","#ED4259");
			$(".phone-login .error-tip").hide();
		}else if(pattenPhone.test(phone) ==false){
			$(".phone-login .error-tip").show();
			$(".phone-login .error-tip").html("验证不正确，请重新验证");
		}else if(phonecode ==""){
			$(".phone-login .error-tip").hide();
			$("#txtcode").removeClass("txtcode").addClass("txtcode-null");
		}else{
			
		}
	})
})
//验证账号登陆
$(function(){
	$(".zh-login .btnlogin").click(function(){
		var username=$("#username").val();
		var psd=$("#password").val();
		if(username==""){
			$(".zh-login dd:first-child").css("border-color","#ED4259");
		}else if(psd==""){
			$(".zh-login dd:last-child").css("border-color","#ED4259");
		}
	})
	$("#username").blur(function(){
		var username=$("#username").val();
		if(username!=""){
			$(".zh-login dd:first-child").css("border-color","#E6E6E6");
		}
	})
	$("#password").blur(function(){
		var psd=$("#password").val();
		if(username!=""){
			$(".zh-login dd:last-child").css("border-color","#E6E6E6");
		}
	})
})
//登陆管理界面
$(function(){
	$(".btnlogin").click(function(){
		var username=$("#username").val();
		var psd=$("#password").val();
		if(username=="admin" && psd =="123"){
			window.location.replace("wms-index.html");
		}
	})
	
})
