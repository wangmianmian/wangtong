var minw=$(".small").width()-$(".slide").width();
var minh=$(".small").height()-$(".slide").height();

var maxw=$(".big>img").width()-$(".big").width();
var maxh=$(".big>img").height()-$(".big").height();

var scalew=maxw/minw;
var scaleh=maxh/minh;

$(".big").hide()
$(".small").mouseenter(function(e){
	var e=e||window.event;
	var x=e.clientX-e.offsetX;
	var y=e.clientY-e.offsetY;
	var x1=e.clientX-x-$(".slide").width()/2;
	var y1=e.clientY-y-$(".slide").height()/2;
	$(".slide").show();
	$(".big").show();
	if(x1<=0){
		x1=0
	}
	if(x1>=minw){
		x1=minw
	}
	if(y1<=0){
		y1=0
	}
	if(y1>=minh){
		y1=minh
	}
	$(".slide").css({
		left:x1+"px",
		top:y1+"px"
	})
	
	$(".small").mousemove(function(e){
		var e=e||window.event;
		x1=e.clientX-x-$(".slide").width()/2;
		y1=e.clientY-y-$(".slide").height()/2;
		if(x1<=0){
		x1=0
	}
	if(x1>=minw){
		x1=minw
	}
	if(y1<=0){
		y1=0
	}
	if(y1>=minh){
		y1=minh
	}
		$(".slide").css({
			left:x1+"px",
			top:y1+"px"
		})
		$(".big img").css({
			left:-scalew*x1+"px",
			top:-scaleh*y1+"px"
		})
	})
	
	
})

$(".small").mouseleave(function(){
		$(".slide").hide();
		$(".big").hide();
	})
$(".middle .goods li").mouseenter(function(){
	$(this).addClass("current").siblings().removeClass("current")
	$(".small img").attr("src",$(this).find("img").attr("src"))
	$(".big img").attr("src",$(this).find("img").attr("src"))
	s=$(this).index();
})



$(".evaluate .estimate li,.evaluate .consult li").mousemove(function(){
	$(this).addClass("current").siblings().removeClass("current")
})





var newlis=$(".goods ul li").clone().removeClass("current");
$(".goods ul").append(newlis)

index=0;
var s=0;
var bol=true;
$(".next").click(function(){
	if(bol){
		s++;
		if(s>5){
			s=0;
		}
		index++;
		if(index>5){
			index=1;
			$(".goods ul").css("left","0px");
		}
		$(".goods ul").animate({
			"left":-index*68+"px"
		},500)
		bol=false;
		setTimeout(function(){
			bol=true;
		},500)
	}
})

$(".prev").click(function(){
	if(bol){
		s--;
		if(s<0){
			s=5;
		}
		index--;
		if(index<0){
			index=4;
			$(".goods ul").css("left",-5*68+"px");
		}
		$(".goods ul").animate({
			"left":-index*68+"px"
		},500)
		bol=false;
		setTimeout(function(){
			bol=true;
		},500)
	}
})
