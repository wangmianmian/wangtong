//var index=0;
//	$(".banner .next").eq(0).click(function(){
//		index++;
//		if(index>2){
//			index=0;
//		}
//		$(".banner .pic li").eq(index).fadeIn(2000).siblings().fadeOut(2000);
//		$(".banner .btn li").eq(index).addClass("current").siblings().removeClass("current");
//	})
//	
//	$(".banner .prev").eq(0).click(function(){
//		index--;
//		if(index<0){
//			index=2;
//		}
//		$(".banner .pic li").eq(index).fadeIn(2000).siblings().fadeOut(2000);
//		$(".banner .btn li").eq(index).addClass("current").siblings().removeClass("current");
//	})
//	var timer;
//	run();
//	
//	$(".banner").eq(0).hover(function(){
//		clearInterval(timer);
//	},function(){
//		run();
//	})
//	function run(){
//		clearInterval(timer)
//		timer=setInterval(function(){
//			index++;
//			if(index>2){
//				index=0;
//			}
//			$(".banner .pic li").eq(index).fadeIn(2000).siblings().fadeOut(2000);
//			$(".banner .btn li").eq(index).addClass("current").siblings().removeClass("current");
//		},3000)
//	}
//
//	$(".banner .btn li").mouseenter(function(){
//		$(this).addClass("current").siblings().removeClass("current");
//		$(".banner .pic li").eq($(this).index()).fadeIn(0).siblings().fadeOut(0);
//		index=$(this).index();
//	})


var index=0;
var s=0;
var bol=true;
$(".banner .next").click(function(){
	if(bol){
		bol=false;
		s++;
		if(s>2){
			s=0;
		}
		$(".banner .btn li").eq(s).addClass("current").siblings().removeClass("current");
		index++;
		if(index>3){
			index=1;
			$(".banner .pic").css("left","0px");
		}
		$(".banner .pic").animate({
			"left":-index*1920+"px"
		},2000)
		setTimeout(function(){
			bol=true;
		},2500)
	
	}
	
})

$(".banner .prev").click(function(){
	if(bol){
		s--;
		if(s<0){
			s=2;
		} 
		$(".banner .btn li").eq(s).addClass("current").siblings().removeClass("current");
		index--;
		if(index<0){
			index=2;
			$(".banner .pic").css("left",-3*1920+"px");
		}
		
		$(".banner .pic").animate({
			"left":-index*1920+"px"
		},2000)
		bol=false;
		setTimeout(function(){
			bol=true;
		},2500)
	}
})

run();
var timer;
$(".banner").hover(function(){
	clearInterval(timer)
},function(){
	run();
})

function run(){
	clearInterval(timer)
	timer=setInterval(function(){
		s++;
		if(s>2){
			s=0;
		}
		$(".banner .btn li").eq(s).addClass("current").siblings().removeClass("current");
		index++;
		if(index>3){
			index=1;
			$(".banner .pic").css("left","0px");
		}
		$(".banner .pic").animate({
		"left":-index*1920+"px"
		},2000)
	},2500)
}

$(".banner .btn li").mouseenter(function(){
	$(this).addClass("current").siblings().removeClass("current");
	index=$(this).index();
	s=$(this).index();
	$(".banner .pic").css("left",-index*1920+"px");
})










	var ind=0;
	var tim;
	run2();
	$(".content .pic").eq(0).hover(function(){
		clearInterval(tim);
	},function(){
		run2();
	})
	$(".content .btn").eq(0).hover(function(){
		clearInterval(tim);
	},function(){
		run2();
	})
	function run2(){
		clearInterval(tim)
		tim=setInterval(function(){
			ind++;
			if(ind>2){
				ind=0;
			}
			$(".content .pic li").eq(ind).fadeIn(2000).siblings().fadeOut(2000);
			$(".content .btn li").eq(ind).addClass("current").siblings().removeClass("current");
		},3000)
	}
	$(".content .btn li").mouseenter(function(){
		$(this).addClass("current").siblings().removeClass("current");
		$(".content .pic li").eq($(this).index()).fadeIn(0).siblings().fadeOut(0);
		ind=$(this).index();
	})
