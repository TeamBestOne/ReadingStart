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
	$(".worksmain_aside_selectlist_per>ul li").click(function(){
		$(this).siblings("li").removeClass("selectlist_per_li_selected");
		$(this).parent("ul").siblings("ul").find("li").removeClass("selectlist_per_li_selected");
		$(this).addClass("selectlist_per_li_selected");
		
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
		var typeno = 0;
		if(typeno=0){
			
		}else{
			var title = $(this).find("a").text();
			var addselect = "<a class='select_type'>"+title+"<i class='close-icon iconfont'>&#xe642;</i></a>";
			$(".worksmain_aside_selected_item").append(addselect);
			$(".worksmain_aside_selected_item .all_type").hide();
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
	})
	
})
