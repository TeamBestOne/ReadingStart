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
			]
		}
	})
})

//上传封面
function imgChange(){
	//获取上传的文本框对象
	var myfile = document.getElementById("btnimg");
	//创建一个新的对象URL, 该对象代表某一个指定的File对象,生成的对象URL可以获取指定文件的完整内容
	var imgURL = window.URL.createObjectURL(myfile.files[0]); //获取上传图片的绝对路径
	var img = document.getElementById("image");
	img.setAttribute("src",imgURL);
}