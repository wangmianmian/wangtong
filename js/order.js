function getToOrder() {
    var dataToOrder=[];
    if(localStorage.toOrder==undefined){
        dataToOrder=[];
    }else{
        dataToOrder=JSON.parse(localStorage.toOrder)
    }
    return dataToOrder;
}
function saveToOrder(orderData) {
    localStorage.toOrder=JSON.stringify(orderData);
}
window.addEventListener("storage", function (e) {
    reWrite();
});
function reWrite() {
    var orderData=getToOrder();
    $.each(orderData,function(index,v) {
        $("<li></li>").attr('index',index).html(
        		'<div class="order">'+
	                '<a href="por_details.html?'+v.id+'">'+
	                   ' <img src="'+v.imgSrc+'" height="104" width="124"/>'+
	                '</a>'+
	                '<a href="por_details.html?'+v.id+'">'+
	                   '<p>'+v.title+'</p>'+
	                '</a>'+
              		'<p>订单号：72654852</p>'+
              		'<p>时间：2018-3-7    09∶02  </p>'+
                '</div>'+
                '<span class="price">￥'+v.sum+'.00</span>'+
                '<span class="number">1</span>'+
                '<div class="state">'+
                	'<a href="###">待发货</a>'+
                	'<a href="###">订单详情</a>'+
                '</div>'+
                '<div class="operation">'+
                	'<a class="current" href="###">待发货</a>'+
                	'<a href="###" class="del">申请退款</a>'+
                '</div>'
        ).appendTo(".list")
    });
    // 取消订单
    $(".del").on("click",function () {
        //  $(this).parents("li").remove();
        var orderData=getToOrder();
        var index=$(this).parent().parent().attr('index');
        $(this).parent().parent().remove();
        console.log(index);
        orderData.splice(index,1);
        saveToOrder(orderData);
    });
    saveToOrder(orderData)
}
reWrite();
