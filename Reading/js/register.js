//选择国家
$(function(){
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
	$(".ui-select-datalist-li ").click(function(){
		var country = $(this).html();
		$(".ui-select-text").html(country);
		$(this).addClass("selected").siblings().removeClass("selected");		
		$(".ui-select-datalist").hide();
		index=1;
	})
})

//验证
$(function(){
	var h=$(".btnyz").css("background");
	if(h=="url(../img/zm-img/btnyz.png) no-repeat"){
		$(".btnyz").hover(function(){
			$(this).css("background","url(img/zm-img/btnyz-hv.png) no-repeat");
		},function(){
			$(this).css("background","url(img/zm-img/btnyz.png) no-repeat");
		})
	}
	
})
window.callback = function(res){
    console.log(res)
    res ={ret: 1, ticket: "验证失败！"}
    res = {ret: 0, ticket: "验证成功！", randstr: "String"}
    if(res.ret === 0){
        alert(res.ticket)   // 票据
        $(".btnyz").css("background","url(img/zm-img/btnyzsuucc.png) no-repeat");
        $(".btnyz").css("cursor","default");
    }
}

$(function(){
	$(".btnreg").hover(function(){
		$(this).css("background-color","#ED4259");
	},function(){
		$(this).css("background-color","#BF2C24");
	})
})
//同意协议
$(function(){
	var index=1;
	$(".login-check").click(function(){	
		if(index==1){
			index=0;			
			$(this).addClass("login-check-act");
			$(".btnreg").removeClass("disabled");
		}else{
			index=1;
			$(this).removeClass("login-check-act");
			$(".btnreg").addClass("disabled");
		}
	})
	$(".login-check").hover(function(){
		$(this).addClass("login-check-hover");
	},function(){
		$(this).removeClass("login-check-hover");
	})
})

//显示错误信息
$(function(){
	$("#txtphonenumber,#txtphonecode").focus(function(){
		$(this).parent().find(".icon-error, .error-tip").hide();
		$(this).css("border-color","#E6E6E6");
		$(this).addClass("input-focus");
	})
	$("#txtphonenumber").blur(function(){
		var phonenumber= $(this).val();
		var pattenPhonenumber=/^1(3|4|5|7|8)\d{9}$/;
		if(phonenumber==""){
			$(this).parent().find(".icon-error, .error-tip").show();
			$(this).parent().find(".error-tip").html("请输入手机号码");
			$(this).css("border-color","#ED4259");
		}else if(pattenPhonenumber.test(phonenumber)== false){
			$(this).parent().find(".icon-error, .error-tip").show();
			$(this).parent().find(".error-tip").html("请输入有效的手机号码");
			$(this).css("border-color","#ED4259");
		}else{
			$(this).parent().find(".icon-error").show();
			$(this).parent().find(".icon-error").css("background","url(img/zm-img/tipsucc.png) no-repeat");
		}
	})
	$("#txtphonecode").blur(function(){
		var phonecode= $(this).val();
		if(phonecode==""){
			$(this).parent().find(".icon-error, .error-tip").show();
			$(this).parent().find(".error-tip").html("手机验证码不正确");
			$(this).css("border-color","#ED4259");
		}else{
			$(this).parent().find(".icon-error").show();
			$(this).parent().find(".icon-error").css("background","url(img/zm-img/tipsucc.png) no-repeat");
		}
	})
	$("#txtphonepwd").focus(function(){
		$(this).css("border-color","#E6E6E6");
		$(this).addClass("input-focus");
		$(this).parent().find(".psd-tip").show();
	})
	$("#txtphonepwd").blur(function(){
		var phonepwd =$(this).val();
		var pattenpwd =/^[a-zA-Z0-9]{6,18}$/;
		if(phonepwd =="" || pattenpwd.test(phonepwd)== false){
			$(this).css("border-color","#ED4259");
		}else{
			$(this).css("border-color","#E6E6E6");
			$(this).parent().find(".psd-tip").hide();
		}
	})
	$("#txtphonepwd2").blur(function(){
		var pwd1 =$("#txtphonepwd").val();
		var pwd2 =$(this).val();
		if(pwd1!=pwd2){
			$(this).parent().find(".icon-error, .error-tip").show();
			$(this).parent().find(".error-tip").html("您两次输入的密码不一致");
			$(this).css("border-color","#ED4259");
		}else if(pwd1!="" && pwd1!="" && pwd1==pwd2){
			$(this).parent().find(".error-tip").hide();
			$(this).parent().find(".icon-error").show();
			$(this).css("border-color","#E6E6E6");
			$(this).parent().find(".icon-error").css("background","url(img/zm-img/tipsucc.png) no-repeat");
		}
	})
})
$(function(){
	$(".btnreg").click(function(){
		var errortip=$(".error-tip").css("display");
		var psdtip= $(".psd-tip").css("display");
		var picyz= $(".btnyzsucc").css("display");
		if(errortip=="none" && psdtip=="none"){
			$("form").hide();
			$(".reg-success").show();
			$(".reg-step span:last-child").addClass("act");
			$(".reg-step em").css("background","url(img/zm-img/zhuce1.png) no-repeat");
			var phonum=$("#txtphonenumber").val();
			$(".red").html(phonum);
			jumpTime();
		}
	})
})

//注册成功后倒计时
var i=5;
function jumpTime(){
    setTimeout(function(){
        window.location.href="index.html";
    },5000);//5秒后返回首页
    after();
};
//自动刷新页面上的时间
function after(){
    $("#jumpTime").empty().append(i);
    i=i-1;
    setTimeout(function(){
        after();
    },1000);
}
