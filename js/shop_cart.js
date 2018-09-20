//总价
function totals() {
    var sele_price = 0;
    var totals = 0;
    $(".total").html(sele_price);
    $(".goods input").each(function (i, v) {
        if ($(v).prop("checked")) {
            var price = parseInt($(v).parent("div").siblings(".subtotal").children().html());
            totals += price;
        }
        $(".total").html(totals);
    })
}


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






//商品数量
function shop_info() {
    var date= gets();
    $.each(date, function (index, value) {
        $(".colour>a>p").html(value.shop_title);
        //价格
        $(".price").html(value.price);
        // 数量
        var cart_pr = value.price;
        $(".number").val(value.number);
        var num = $(".number").val();
        var sum = + num * cart_pr;
        $(".subtotal span").html(sum);
    });
    totals();
    saves(date);
}
shop_info();
function reWrite() {
    var date = gets();
    $(".content .list").empty();
    $.each(date, function (index, value) {
        $("<li></li>").attr('index', index).html(
           		"<div class='goods'>"+
                    "<input type='checkbox' class='btns' value='' />" +
                    "<a href='shop_list.html?"+value.id+"'>"+
                    "<img src='"+value.imgSrc+"' width='144px' height='104px'/>"+
                    "</a>"+
                "</div>"+
                "<div class='colour'>"+
                    "<a href='pro_details.html?"+value.id+"'>"+
                    "<p>"+value.shop_title+"</p>"+
                    "</a>"+
                    "<p>"+value.type+"</p>"+
                "</div>"+
                "<span>￥<span class='price'>"+value.price+"</span>.00</span>"+
                "<input type='button' class='reduce' value='-' />"+
                "<input type='text' class='number' value='"+value.number+"' />"+
                "<input type='button' class='plus' value='+' />"+
                "<span class='subtotal'>￥<span>"+value.price * value.number+"</span>.00</span>"+     
                "<div class='edit'>" +
                "<a class='add'>添加到收藏夹</a></br>"+
				"<a class='delete' href='###'>删除</a>"+
                "</div>"
        ).appendTo(".content .list")

    });
    //删除
    $(".delete").click(function () {
    	var bResult = window.confirm("确定删除？");
    	if(bResult){
    		var index=$(this).parent().parent().attr('index');
	        date.splice(index,1);
	        $(this).parent().parent().remove();
    	}
    	 saves(date);
	        totals();
    });
    saves(date);
}








$(function () {
	var date= gets();
    reWrite();
    var num = "";
    var len=$(".btns").length;
    $(".shopp").html(len);
    //	全选
	bol=false
	$(".btn").click(function(){
		var le=$(".goods input[type='checkbox']:checked").length;
		if(bol){
			$(".btn").prop("checked",false)
			$(".btns").prop("checked",false)
			$(".on").html(0)
			$(".total").text(0)
		}
		if(le<len){
			$(".btn").prop("checked",true)
			$(".btns").prop("checked",true);
			total=0
			bol=true;
			$(".on").html(len)
			totals()
		}
	})
//	单选
	var total = 0;
	var bo=false;
	$(".btns").click(function(){
		var le=$(".goods input[type='checkbox']:checked").length;
		if(len==le){
			$(".btn").prop("checked",true)
		}else{
			$(".btn").prop("checked",false)
		}
		if($("this").prop("checked",true)){
			bo=true
			if(bo){
				totals()
				$(".on").html(le)
			}else{
				$("this").prop("checked",false)
				bo=false
				totals()
			}
		}
	})
    
   	//数字验证
   	$(".number").keyup(function(){
   		$(this).val($(this).val().replace(/[^0-9.]/g, ''));
   	});
$(".number").change(function(){
		var s=/[\d]$/g;
		var qq=$(this).siblings("span").children(".price").html()
		if(!s.test($(this).val())||$(this).val()<=1){
			$(this).val(1)
			$(this).siblings(".subtotal").children("span").html(qq*$(this).val())
			totals()
		}else{
			$(this).siblings(".subtotal").children("span").html(qq*$(this).val())
			totals()
		}
	})
	
//	加
	$(".plus").click(function(){
			num=$(this).siblings(".number").val();
			num++;
			$(this).siblings(".number").val(num);
			var sub= num*$(this).siblings("span").children(".price").html();
			$(this).siblings(".subtotal").children("span").html(sub);
			totals()
	}) 
	
    //减
    $(".reduce").click(function(){
		var num=$(this).siblings(".number").val();
		num--;
			if(num<=1){
			num=1;	
			$(this).siblings(".number").val(num);
			var sub= num*$(this).siblings("span").find(".price").text();
			$(this).siblings(".subtotal").children("span").html(sub);
			totals()
		}else{
			$(this).siblings(".number").val(num);
			var sub= num*$(this).siblings("span").find(".price").text();
			$(this).siblings(".subtotal").children("span").html(sub);
			totals()
		}
	})
}); 

//批量删除
$(".del").on("click",function () {
    var date=gets();
    var bResult = window.confirm("确定删除？");
    	if(bResult){
	        $(".btns").each(function () {
	            if($(this).prop("checked")){
	                var index=$(this).parents(".cart-list li").index();
	                $(this).parents(".list li").remove();
	                if($(this).prop("checked")==1){
	                    date.splice(index,1);
	                }else{
	                    date.splice(index);
	                }
	                if(date==0){
	                	$(".btn").prop("checked",false)
	                	$(".shopp").html(0)
	                	$(".on").html(0)
	                }
	                saves(date);
	                totals();
	            }
	        });
        }
});
// 结算
function get() {
    var arr=[];
    if(localStorage.orlist==undefined){
        arr=[];
    }else{
        arr=JSON.parse(localStorage.orlist)
    }
    return arr;
}

function save(order) {
    localStorage.orlist=JSON.stringify(order);
};
$(".ri a").on("click",function () {
    var flag = false;
    var date = gets();
    $(".btns").each(function (i,v) {
        if($(v).prop("checked")){
            flag=true;
            var order=get();
            var href=$(this).siblings().attr("href");
            var hrefs=$(this).parent().siblings(".colour").children("a").attr("href");
            var arr=href.split("");
            var a=arr.splice(0,15);
            var id=arr.join("");
            var comOrder={
                id:id,
                imgSrc:$(this).siblings().children().attr("src"),
                order_title:$(this).parent().siblings(".colour").children().children().html(),
                order_price:$(this).parent().siblings().children(".price").html(),
                order_number:$(this).parent().siblings(".number").val(),
                order_sum:$(this).parent().siblings(".subtotal").children().html(),
                order_sx:$(this).parent().siblings(".colour").children("p").html()
            };
            console.log(comOrder)
            order.push(comOrder);
            save(order)
        }
})
    if (flag == false) {
        alert("请先选择要结算的商品！");
    } else {
        location.href = "confirm.html";
    }
    saves(date);
    reWrite();
});