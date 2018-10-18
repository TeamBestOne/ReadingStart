$(function(){
	//男生、女生、出版切换
	$(".worksmain_aside_title ul li").click(function(){
		$(this).addClass("worksmain_aside_title_select");
		$(this).siblings("li").removeClass("worksmain_aside_title_select");
		var index = $(".worksmain_aside_title ul li").index(this);
		$(".worksmain_aside .worksmain_aside_selectlist").eq(index).siblings(".worksmain_aside_selectlist").hide();
		$(".worksmain_aside .worksmain_aside_selectlist").eq(index).show();
	})
	
	//点击选中状态
	$(".worksmain_aside_selectlist_per>ul>li").click(function(){
		$(this).siblings("li").removeClass("selectlist_per_li_selected");
		$(this).parent("ul").siblings("ul").find("li").removeClass("selectlist_per_li_selected");
		$(this).addClass("selectlist_per_li_selected");
		$(".li_down_list ul li").removeClass("selectlist_per_li_selected");
		
	})
	$(".li_down_list_per>ul>li").click(function(){
		$(this).addClass("selectlist_per_li_selected");
		$(this).siblings("li").removeClass("selectlist_per_li_selected");
		$(this).parent().siblings().find("li").removeClass("selectlist_per_li_selected");
		$(this).parents(".li_down_list").siblings("li").removeClass("selectlist_per_li_selected");
	})
	
	//点击“分类”选中后出现下拉详细分类
	$(".per_type>ul>.li_moretype").click(function(){
		var $thisul = $(this).parent("ul");
		var indexno = $thisul.find(".li_moretype").index(this);
		$(this).parent().parent().find(".li_down").hide();
		$(this).find(".li_down").show();
		$(this).siblings(".li_down_list").show();
		$(this).parent("ul").siblings("ul").find(".li_down_list").hide();
		$(this).siblings(".li_down_list").find(".li_down_list_per").eq(indexno).siblings(".li_down_list_per").hide();
		$(this).siblings(".li_down_list").find(".li_down_list_per").eq(indexno).show();	
	})
	//点击“分类”中的全部其他选中取消
	$(".per_type>ul>.li_all").click(function(){
		$(".li_down_list").hide();
	})
	
	//点击在"已选"中显示
	
	$(".worksmain_aside_selectlist_per ul li").click(function(){
//		var typeno = 0;
//		if(typeno=0){
//			
//		}else{
//			var title = $(this).find("a").text();
//			
//			var addselect = "<a class='select_type'>"+title+"<i class='close-icon iconfont'>&#xe642;</i></a>";
//			$(".worksmain_aside_selected_item").append(addselect);
//			$(".worksmain_aside_selected_item .all_type").hide();
//		}
		var typename = $(this).parents(".worksmain_aside_selectlist_per").find("p").text();
		var title = $(this).find("a").text();
		$(".worksmain_aside_selected_item .all_type").hide();
		switch (typename){
			case "分类":
				$(".worksmain_aside_selected_item .se_tpye").css("display","inline-block");
				$(".worksmain_aside_selected_item .se_tpye").html(title+"<i class='close-icon iconfont'>&#xe642;</i>");
				break;
			case "状态":
				$(".worksmain_aside_selected_item .se_status").css("display","inline-block");
				$(".worksmain_aside_selected_item .se_status").html(title+"<i class='close-icon iconfont'>&#xe642;</i>");
				break;
			case "属性":
				$(".worksmain_aside_selected_item .se_property").css("display","inline-block");
				$(".worksmain_aside_selected_item .se_property").html(title+"<i class='close-icon iconfont'>&#xe642;</i>");
				break;
			case "字数":
				$(".worksmain_aside_selected_item .se_charnum").css("display","inline-block");
				$(".worksmain_aside_selected_item .se_charnum").html(title+"<i class='close-icon iconfont'>&#xe642;</i>");
				break;
			case "品质":
				$(".worksmain_aside_selected_item .se_quality").css("display","inline-block");
				$(".worksmain_aside_selected_item .se_quality").html(title+"<i class='close-icon iconfont'>&#xe642;</i>");
				break;
			case "更新时间":
				$(".worksmain_aside_selected_item .se_uptime").css("display","inline-block");
				$(".worksmain_aside_selected_item .se_uptime").html(title+"<i class='close-icon iconfont'>&#xe642;</i>");
				break;
			case "标签":
				$(".worksmain_aside_selected_item .se_tip").css("display","inline-block");
				$(".worksmain_aside_selected_item .se_tip").html(title+"<i class='close-icon iconfont'>&#xe642;</i>");
				break;
			default:
				break;
		}


		
	})
	
	//点击在"×"删除所选
	$(".worksmain_aside_selected_item").on("click",".select_type",function(){
		var selectNo = $(this).parent().find(".select_type").length;
		$(this).remove();
		if(selectNo == 1){
			$(".worksmain_aside_selected_item .all_type").show();
		}
	})
	
	
	
	//作品导航效果
	//前四个
	$(".worksmain_main_head>ul>.sort1_type>a").click(function(){
		$(this).parent("li").addClass("head_select");
		$(this).parent("li").siblings("li").removeClass("head_select");
		$(this).parent().siblings("li").find(".s_down").hide();
		$(this).find(".s_down").show();
		var text1 = "会员点击";
		var text2 = "推荐票";
		$(".worksmain_main_head ul .sort2_type").eq(0).find(".text_replace").text(text1);
		$(".worksmain_main_head ul .sort2_type").eq(1).find(".text_replace").text(text2);
	})
	//后两个
	$(".worksmain_main_head>ul>.sort2_type>a").click(function(e){
		$(this).parent().addClass("dr_head");
		$(this).parent().siblings(".sort2_type").removeClass("dr_head");
		$(this).siblings(".dr_detail").show();
		$(this).parent().siblings(".sort2_type").find(".dr_detail").hide();
		
		$(document).one("click",function(){
			$(".dr_detail").hide();
			$(".sort2_type").removeClass("dr_head");
		})
		e.stopPropagation();
	})
	$(".dr_detail").on("click",function(){
		e.stopPropagation();
	})
	//下拉的点击替换
	$(".dr_detail li").click(function(){
		var replaceText = $(this).find("a").text();
		$(this).parent().siblings("a").find(".text_replace").text(replaceText);
		$(this).parent().siblings("a").find(".s_down").show();
		$(this).parent().parent().addClass("head_select");
		$(this).parent().parent().siblings("li").removeClass("head_select");
		$(this).parent().hide();
		$(this).parent().parent().removeClass("dr_head");
		$(this).parent().parent().siblings("li").find(".s_down").hide();
		
		//根据获取的id判定将旁边的文字恢复初始
		var text1 = "会员点击";
		var text2 = "推荐票";
		var test = $(this).parent().parent().attr("id");
		if(test == "vip_click"){
			 $("#text_replace").find(".text_replace").text(text2);
			 var t1 =  $("#ticket_click").find(".text_replace").text(text2);
		}else{
			$("#vip_click").find(".text_replace").text(text1);
		}
	})
	
	//列表模式和图文显示的切换
	$(".head_right_view .tobooks_multi").click(function(){ //图文显示
		$(".worksmain_main_books .main_books_multi").show();
		$(".worksmain_main_books .main_books_list").hide();
		$(this).addClass("head_right_view_selected");
		$(this).siblings("a").removeClass("head_right_view_selected");
	})
	$(".head_right_view .tobooks_list").click(function(){
		$(".worksmain_main_books .main_books_list").show();
		$(".worksmain_main_books .main_books_multi").hide();
		$(this).addClass("head_right_view_selected");
		$(this).siblings("a").removeClass("head_right_view_selected");
	})
	
	
	//底部页标的点击事件
	$(".worksmain_main_page_list .bottom_page").click(function(){
		$(this).addClass("page_list_thispage");
		$(this).parent().siblings("li").find(".bottom_page").removeClass("page_list_thispage");
		var pagenum = $(this).text();
		if(pagenum == 1){
			$(".page_left").addClass("a_disabled");
			$(".page_right").removeClass("a_disabled");
		}else if(pagenum == 2399){
			$(".page_right").addClass("a_disabled");
			$(".page_left").removeClass("a_disabled");
		}
		else{
			$(".page_left").removeClass("a_disabled");
			$(".page_right").removeClass("a_disabled");
		}
	})
	
})

//free页面
$(function(){
	//	fremainhead的选择
	$(".fremainhead ul li").click(function(){
		$(this).addClass("fremainhead_selected");
		$(this).siblings("li").removeClass("fremainhead_selected");
		var indexS = $(".fremainhead ul li").index(this);
		if(indexS == 0){
			$(this).parents(".fremainhead").siblings(".worksmain").hide();
			$(this).parents(".fremainhead").siblings(".fremaintime").show();
		}else if(indexS == 1){
			$(this).parents(".fremainhead").siblings(".fremaintime").hide();
			$(this).parents(".fremainhead").siblings(".worksmain").show();
		}
	})
	
	//限时免费倒计时
	var day = parseInt($(".fremaintime_banner_cd .cd_day").text());
	var hour = parseInt($(".fremaintime_banner_cd .cd_hour").text());
	var min = parseInt($(".fremaintime_banner_cd .cd_min").text());
	var sec = parseInt($(".fremaintime_banner_cd .cd_sec").text());
	var startTime = day*24*60*60+hour*60*60+min*60+sec;
	var day1 = 0;
	var hour1 = 0;
	var min1 = 0;
	setInterval(cdTime,1000);
	function cdTime(){
		if(startTime > 0){
			startTime--;
			day = Math.floor(startTime/(60*60*24));
			hour = Math.floor((startTime/(60*60)))-(day*24);
			min = Math.floor(startTime/(60)) - (day*24*60) - (hour*60);
			sec = Math.floor(startTime)-(day*24*60*60) - (hour*60*60) - (min*60);
			$(".fremaintime_banner_cd .cd_day").text(day);
			$(".fremaintime_banner_cd .cd_hour").text(hour);
			$(".fremaintime_banner_cd .cd_min").text(min);
			$(".fremaintime_banner_cd .cd_sec").text(sec);
			console.log(startTime +"-"+day +"-"+ hour +"-"+ min +"-"+ sec);
		}
	}
})


//阅读页面置顶
$(function(){
	$(".float_control i").click(function(){
		$("html,body").animate({
			scrollTop:0
		}, 500);
	})
})
