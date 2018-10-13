$(function(){
	$(".worksmain_aside_title ul li").click(function(){
		$(this).addClass("worksmain_aside_title_select");
		$(this).siblings("li").removeClass("worksmain_aside_title_select");
		var index = $(".worksmain_aside_title ul li").index(this);
		$(".worksmain_aside .worksmain_aside_selectlist").eq(index).siblings(".worksmain_aside_selectlist").hide();
		$(".worksmain_aside .worksmain_aside_selectlist").eq(index).show();
	})
})
