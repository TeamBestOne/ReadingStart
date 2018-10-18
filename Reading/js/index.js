/*中间CSS3样式轮播图*/
$(function(){
	var $btnslide =  $("#swithable-slides a.lbf-button");
	var $swislide =  $("#swithable-slides");
	var tigger = null;
	var prvtig = null;
	var ImgNow = 1;
	var ImgNum = 5;
	var setTime = 3000;
	
	function slideImg(){
		var ImgNext = parseInt(ImgNow) + 1;
		$("#item"+ImgNow+"").css({
			display: 'block',
		 	transition: 'transform 300ms linear',
		 	backfaceVisibility: 'hidden',
		 	transform: 'translateX(-100%)'
		});
		if(ImgNext > ImgNum){
			$btnslide.removeClass('active')
            		.eq(0)
	        		.addClass('active');
			$("#item1").css({
				display: 'block',
			 	transition: 'transform 300ms linear',
			 	backfaceVisibility: 'hidden',
			 	transform: 'translateX(0%)'
			});
			ImgNow = 0;
		}else{
			$btnslide.removeClass('active')
            		.eq(ImgNow)
            		.addClass('active');
			$("#item"+ImgNext+"").css({
				display: 'block',
			 	transition: 'transform 300ms linear',
			 	backfaceVisibility: 'hidden',
			 	transform: 'translateX(0%)'
			});		
		};	
		ImgNow++;
	}
	
	function Prvslide(){
		var ImgNext = parseInt(ImgNow) + 1;
		if( ImgNext > ImgNum){
			$("#item1").css({
				display: 'block',
			 	transition: 'none',
			 	backfaceVisibility: 'hidden',
			 	transform: 'translateX(100%)'
			});	
		}else{
			$("#item"+ImgNext+"").css({
				display: 'block',
			 	transition: 'none',
			 	backfaceVisibility: 'hidden',
			 	transform: 'translateX(100%)'
			});
		}					
	}
	
	$swislide.hover(function(){
		clearInterval(tigger);
		clearInterval(prvtig);
	},function(){
		prvtig = setInterval(Prvslide,setTime-2);
		tigger = setInterval(slideImg,setTime);
	})
	
	$btnslide.click(function(){
		var nowindex = $(this).index();
		var Imgindex = ImgNow;
		console.log(Imgindex);		
		if(ImgNow < nowindex+1){
			setTimeout(function(){
				$("#item"+Imgindex+"").css({
					display: 'block',
				 	transition: 'transform 300ms linear',
				 	backfaceVisibility: 'hidden',
				 	transform: 'translateX(-100%)'
				});
			},1);
			ImgNow = nowindex;
			Prvslide();
			setTimeout(slideImg,1);
		}else{
			setTimeout(function(){
				$("#item"+Imgindex+"").css({
					display: 'block',
				 	transition: 'transform 300ms linear',
				 	backfaceVisibility: 'hidden',
				 	transform: 'translateX(100%)'
				});
				ImgNow = nowindex;
				setTimeout(slideImg,1);
			},1);
		}
	})
	
	prvtig = setInterval(Prvslide,setTime-2);
	tigger = setInterval(slideImg,setTime);
})

/*...的显示特效*/
$(function(){
	$(".focus-wrap .notice-wrap .notice").hover(function(){
		$(".notice .more i").stop(true,false).animate({
			top:"18px",
			right:"18px"
		},400)
	},function(){
		$(".notice .more i").stop(true,false).animate({
			top:"-18px",
			right:"-18px"
		},400)
	})
})

/*移动导航*/
$(function(){
	var nav=$("#pin-nav");
	var win =$(window);
	var sc=$(document);
	win.scroll(function(){
		if(sc.scrollTop()>=384){
			nav.addClass("show"); 
  		}else{
			nav.removeClass("show");
		}
  	})
	
	$("#pin-nav .site-nav li").hover(function(){
		$(this).addClass("act");
	},function(){
		$(this).removeClass("act");
	})
})

/*上下轮播CSS3特效*/
$(function(){
	var $wordSlide = $("#wordSlide > li");
	var wordNow = 1;
	var tigger = null;
	var prvtig = null;
	var wordNum = $wordSlide.length;
	var setTime = 3000;
	
	function slideWord(){
		var wordNext = parseInt(wordNow) + 1;
		$("#wordList"+wordNow+"").css({
			display: 'block',
		 	transition: 'transform 250ms linear',
		 	backfaceVisibility: 'hidden',
		 	transform: 'translateY(-100%)'
		});
		if(wordNext > wordNum){
			$("#wordList1").css({
				display: 'block',
			 	transition: 'transform 250ms linear',
			 	backfaceVisibility: 'hidden',
			 	transform: 'translateY(0%)'
			});
			wordNow = 0;
		}else{
			$("#wordList"+wordNext+"").css({
				display: 'block',
			 	transition: 'transform 250ms linear',
			 	backfaceVisibility: 'hidden',
			 	transform: 'translateY(0%)'
			});		
		};	
		wordNow++;
	}
	
	function PrvWord(){
		var wordNext = parseInt(wordNow) + 1;
		if( wordNext > wordNum){
			$("#wordList1").css({
				display: 'block',
			 	transition: 'none',
			 	backfaceVisibility: 'hidden',
			 	transform: 'translateY(100%)'
			});	
		}else{
			$("#wordList"+wordNext+"").css({
				display: 'block',
			 	transition: 'none',
			 	backfaceVisibility: 'hidden',
			 	transform: 'translateY(100%)'
			});
		}
	}
	
	$wordSlide.hover(function(){
		clearInterval(tigger);
		clearInterval(prvtig);
	},function(){
		prvtig = setInterval(PrvWord,setTime-2);
		tigger = setInterval(slideWord,setTime);
	})
	
	prvtig = setInterval(PrvWord,setTime-2);
	tigger = setInterval(slideWord,setTime);
})

/*展开更多*/
$(function(){
	var funnum = 1;	
	$("#load-more").click(function(){
		    var $rlr = $("#rank-list-row");
		    var $tip = $("#load-more em"); 
		    var $btnmore = $("#btn-more");
		    var showTime = 300;
		    if(funnum == 1){
		    	$rlr.animate({
		    		height:"583px"
		    	},showTime)
		    	$tip.text("收起更多");
		    	$btnmore.addClass("up");
		    	funnum = 2;
		    }else{
		    	$rlr.animate({
		    		height:"423px"
		    	},showTime)
		    	$tip.text("展开更多");
		    	$btnmore.removeClass("up");
		    	funnum = 1;
		    }
	})
})

/*全部,免费 ,VIP */
$(function(){
	var $updateTab = $("#update-tab");
	var $updateList = $("#update-list");
	$("#update-tab > a").click(function(){
		var $num = $(this).index();
		$(this).addClass("act").siblings().removeClass("act");
		if($num == 0){
			$updateList.children(".update-table.all").show().siblings().hide();			
		}else if($num == 2){
			$updateList.children(".update-table.free").show().siblings().hide();
		}else if($num == 4){
			$updateList.children(".update-table.vip").show().siblings().hide();
		}
	})
})

//限时免费倒计时
$(function(){
	var day = parseInt($("#time-box .day").text());
	var hour = parseInt($("#time-box .hour").text());
	var min = parseInt($("#time-box .minute").text());
	var sec = parseInt($("#time-box .second").text());
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
			$("#time-box .day").text(day);
			$("#time-box .hour").text(hour);
			$("#time-box .minute").text(min);
			$("#time-box .second").text(sec);		
		}
	}
})

/*Jq旋转木马式轮播*/
$(function(){
	var arr = [
		{	/*1*/
			top: "-13px",
		    left: "18px",
		    width: "84px",
		    height: "112px",
		    opacity: "1",
		    zIndex: "280",
		    fontSize: "0.16rem"
		},
		{	/*2*/
			top: "-1px",
		    left: "75px",
		    width: "65.1px",
		    height: "86.8px",
		    opacity: "0.85",
		    zIndex: "145",
		    fontSize: "0.124rem"
		},
		{	/*3*/
			top: "-1px",
		    left: "-20px",
		    width: "65.1px",
		    height: "86.8px",
		    opacity: "0.85",
		    zIndex: "145",
		    fontSize: "0.124rem"
		}
	]
	
	var leftTime = null;
	var leftmoveTime = 2500;
	var $Imgtab = $("#left-slide-01 li");
	var $Imgnum = $("#left-slide-01 li").length;
	var Imgnow = 1;
	var $infoTxt = $("#left-slide-01").parent().next(".info-text").find("dd");
	
	function leftSlide(){
		arr.unshift(arr.pop());
		Imgnow++;
		for(var i =0;i<$Imgnum;i++){
			$Imgtab.eq(i).animate(
				arr[i],500
			);		
		}
		if(Imgnow > 3){
			Imgnow = 1;
		}
		$infoTxt.eq(Imgnow-1).show().siblings().hide();
		console.log(Imgnow);
	}
	
	leftTime = setInterval(leftSlide,leftmoveTime);
	
/*	$("#left-slide-01 li").on("click",function(){
		console.log($(this).index())
		return false;
	})*/
})

$(function(){
	var arr3 = [
		{	/*1*/
			top: "-13px",
		    left: "18px",
		    width: "84px",
		    height: "112px",
		    opacity: "1",
		    zIndex: "280",
		    fontSize: "0.16rem"
		},
		{	/*2*/
			top: "-1px",
		    left: "75px",
		    width: "65.1px",
		    height: "86.8px",
		    opacity: "0.85",
		    zIndex: "145",
		    fontSize: "0.124rem"
		},
		{	/*3*/
			top: "-1px",
		    left: "-20px",
		    width: "65.1px",
		    height: "86.8px",
		    opacity: "0.85",
		    zIndex: "145",
		    fontSize: "0.124rem"
		}
	]
	
	var leftTime3 = null;
	var leftmoveTime3 = 2500;
	var $Imgtab3 = $("#left-side-03 li");
	var $Imgnum3 = $("#left-side-03 li").length;
	var Imgnow3 = 1;
	var $infoTxt3 = $("#left-side-03").parent().next(".info-text").find("dd");
	
	function leftSlide3(){
		arr3.unshift(arr3.pop());
		Imgnow3++;
		for(var i =0;i<$Imgnum3;i++){
			$Imgtab3.eq(i).animate(
				arr3[i],500
			);		
		}
		if(Imgnow3 > 3){
			Imgnow3 = 1;
		}
		$infoTxt3.eq(Imgnow3-1).show().siblings().hide();
		console.log(Imgnow3);
	}
	
	leftTime3 = setInterval(leftSlide3,leftmoveTime3);
	
/*	$("#left-slide-01 li").on("click",function(){
		console.log($(this).index())
		return false;
	})*/
})
