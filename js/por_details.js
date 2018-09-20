$.ajax({
    type: "GET",//请求方式
    url: "js/ind.json",//地址，就是json文件的请求路径
    dataType: "json",//数据类型可以为 text xml json  script  jsonp
    success: function(result){//返回的参数就是 action里面所有的有get和set方法的参数
    	console.log(result)
        result.forEach(function (v) {
            if(v.id==location.search.slice(1)) {
                $(".small>img").attr("src", v.src);
                $(".big img").attr("src", v.src);
                $(".info>h2").html(v.title);
                $(".info h3>span").html(v.oldprice);
                $(".shopp").html(v.price);
            }
       });
    }
});

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



//$(".details li").mousemove(function(){
//	$(this).addClass("current").siblings().removeClass("current")
//})





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





//切换
$(".aa").click(function(){
	$(".detas").hide()
	$(".page").hide()
	$(".deta").show()
	$(".bb").parent().removeClass()
	$(".aa").parent().addClass("current")
})
$(".bb").click(function(){
	$(".detas").show()
	$(".page").show()
	$(".deta").hide()
	$(".aa").parent().removeClass()
	$(".bb").parent().addClass("current")
	
})


$(".btn").click(function(){
	$(".btn").siblings().css("background","none")
	$(this).css("background","url(img/co-mi-sp-bg.png) 0px 0px no-repeat")
})














//商品添加和减少
var t=$("#number");
function total() {
    var num=$("#number").val();
    var pr = $(".shopp").html();
    var sum=num*pr;
    $(".shopp").html(sum);
}
//数量增加操作
$(".plus").click(function(){
    t.val(Math.abs(parseInt(t.val()))+1);
//  total();
});
//数量减少操作
$(".reduce").click(function(){
    if (parseInt(t.val())==1){
        t.val();
    }else{
        t.val(Math.abs(parseInt(t.val()))-1);
//      total();
    }
});

//数量的验证
$("#number").keyup(function(){
	$(this).val($(this).val().replace(/[^0-9.]/g, ''));
})
$("#number").blur(function(){
	if($(this).val()==""){
		$(this).val("1")
	}
//	total();
});

   function addShopcart(){
	var login=document.querySelector(".top>div>a")
	  if(login.innerHTML=="请登录"){
		    alert("请先登录");
		    location.href="login.html";
		    return false;
		}else{
			return true;
		}
}
   
// 立即购买
$(function () {
    function get() {
        var arr = [];
        if (localStorage.orlist == undefined) {
            arr = [];
        } else {
            arr = JSON.parse(localStorage.orlist)
        }
        return arr;
    }
    function save(order) {
        localStorage.orlist = JSON.stringify(order);
    };
// 跳转|立即购买
    $(".buy").click(function () {
	        var order = get();
	        var num = $("#number").val();
	        var name = $('.info>h2').html();
	        var picSrc = $('.small>img').attr('src');
	        var pr = $(".shopp").html();
	         var btn=$(".btn").html();
	        var id=location.search.slice(1);
	        var comBuy = {
	            id:id,
	            imgSrc:picSrc,
	            order_title:name,
	            order_price:pr,
	            order_number:num,
	            order_sum:pr * num,
	            type:btn
	        };
	        order.push(comBuy);
	        save(order);
	        if(addShopcart()){
	        	location.href = "confirm.html";
    	}
	        
    	
    });
    
})
// 购物车数据
$(function () {
    function gets() {
        var cart=[];
        if(localStorage.tdlist==undefined){
            cart=[];
        }else{
            cart=JSON.parse(localStorage.tdlist)
        }
        return cart;
    }
    function saves(date){
        localStorage.tdlist=JSON.stringify(date);
    };
// 添加商品至购物车
    $(".car").click(function () {
    	var bols=false
    	if(addShopcart()){
	        var date=gets();
	        var num=$("#number").val();
	        var pr=$(".shopp").html();
	        var name=$(".info>h2").html();
	        var imgSrc = $('.small>img').attr('src');
	        var btn=$(".btn").html();
	        var id=location.search.slice(1);
	        var nub=$(".nub").html();
	        var shop={
	            id:id,
	            imgSrc:imgSrc,
	            shop_title:name,
	            number:num,
	            price:pr,
	            type:btn,
	            lg:date.length+1,
	            nub:nub
	        };
	        date.push(shop);
	        saves(date);
	        alert("已成功加入购物车");
	        bols=true
	        if(bols){
	        	var nub=$(".nub").html();
	        	nub++
	        	$(".nub").html(nub)
	        }
     	}
    });
});