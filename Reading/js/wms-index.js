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
//所有图书
$(function(){
	var books = new Vue({
	el:'#allbook',
	data:{
		list:[
		{name:'圣墟',autor:'辰东',type:'玄幻',state:'连载',property:'VIP',qualit:'签约小说'},
		{name:'飞剑问道',autor:'我吃西红柿',type:'仙侠',state:'连载',property:'VIP',qualit:'签约小说'},
		{name:'奶爸的文艺人生',autor:'寒门',type:'都市',state:'完本',property:'VIP',qualit:'签约小说'},
		{name:'圣墟',autor:'辰东',type:'玄幻',state:'连载',property:'VIP',qualit:'签约小说'},
		{name:'飞剑问道',autor:'我吃西红柿',type:'仙侠',state:'连载',property:'VIP',qualit:'签约小说'},
		{name:'奶爸的文艺人生',autor:'寒门',type:'都市',state:'完本',property:'VIP',qualit:'签约小说'},
		{name:'圣墟',autor:'辰东',type:'玄幻',state:'连载',property:'VIP',qualit:'签约小说'},
		{name:'飞剑问道',autor:'我吃西红柿',type:'仙侠',state:'连载',property:'VIP',qualit:'签约小说'},
		{name:'奶爸的文艺人生',autor:'寒门',type:'都市',state:'完本',property:'VIP',qualit:'签约小说'},
		{name:'圣墟',autor:'辰东',type:'玄幻',state:'连载',property:'VIP',qualit:'签约小说'},
		{name:'飞剑问道',autor:'我吃西红柿',type:'仙侠',state:'连载',property:'VIP',qualit:'签约小说'},
		{name:'奶爸的文艺人生',autor:'寒门',type:'都市',state:'完本',property:'VIP',qualit:'签约小说'}
		]
	}
})
})
//所有作家
$(function(){
	var autor =new Vue({
		el:'#allautor',
		data:{
			list:[
			{name:'辰东',level:'10',phone:'18023990769',email:'chendong@163.com',wooks:'《圣墟》',psd:'hahaha',account:'200'},
			{name:'我吃西红柿',level:'6',phone:'18023990769',email:'chendong@163.com',wooks:'《飞剑问道》',psd:'hahaha',account:'40'},
			{name:'寒门',level:'28',phone:'18023990769',email:'chendong@163.com',wooks:'《奶爸的文艺人生》',psd:'hahaha',account:'450'},
			{name:'辰东',level:'10',phone:'18023990769',email:'chendong@163.com',wooks:'《圣墟》',psd:'hahaha',account:'200'},
			{name:'我吃西红柿',level:'6',phone:'18023990769',email:'chendong@163.com',wooks:'《飞剑问道》',psd:'hahaha',account:'40'},
			{name:'寒门',level:'28',phone:'18023990769',email:'chendong@163.com',wooks:'《奶爸的文艺人生》',psd:'hahaha',account:'450'},
			]
		}
	})
})
//所有用户
$(function(){
	var user =new Vue({
		el:'#alluser',
		data:{
			list:[
			{name:'小明',phone:'13567689210',email:'sdjo99@163.com',psd:'467hg4',account:'10'},
			{name:'小红',phone:'15567684560',email:'3939029@163.com',psd:'skid445',account:'0'},
			{name:'粉红豹',phone:'13567689210',email:'sdjo@163.com',psd:'467hg4',account:'60'},
			{name:'今晚的月亮真漂亮',phone:'15567684560',email:'3939029@163.com',psd:'skid445',account:'137'},
			{name:'如果我是DJ',phone:'13567689210',email:'sdjo99@163.com',psd:'467hg4',account:'210'},
			{name:'爸，我一定行',phone:'15567684560',email:'3939029@163.com',psd:'skid445',account:'34'},
			]
		}
	})
})

//上传封面
function imgChange(){
	var fileInput = document.getElementById("btnimg"),
    previewImg = document.getElementById("image");
 	fileInput.addEventListener('change', function () {
      var file = this.files[0];
      var reader = new FileReader();
      // 监听reader对象的的onload事件，当图片加载完成时，把base64编码賦值给预览图片
      reader.addEventListener("load", function () {
         previewImg.src = reader.result;
      }, false);
      // 调用reader.readAsDataURL()方法，把图片转成base64
      reader.readAsDataURL(file);
  	}, false);

}
function imgChange2(){
	var fileInput = document.getElementById("btnimg2"),
    previewImg = document.getElementById("image2");
 	fileInput.addEventListener('change', function () {
      var file = this.files[0];
      var reader = new FileReader();
      // 监听reader对象的的onload事件，当图片加载完成时，把base64编码賦值给预览图片
      reader.addEventListener("load", function () {
         previewImg.src = reader.result;
      }, false);
      // 调用reader.readAsDataURL()方法，把图片转成base64
      reader.readAsDataURL(file);
  	}, false);

}
//选项
$(function(){
	$(".dropdown-menu li a").click(function(){
		var newchoose = $(this).html();	
		$(this).parent().parent().parent().find("button").html(newchoose+" <span class='caret'></span>");		
	})
})

function editbook(){
	
}


//改页数
$(function(){
	$(".pagination li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
})
$(function(){
	$("#btn_add").click(function () {
    	$("#myModalLabel").text("新增");
    	$('#myModal').modal();
	});
})
