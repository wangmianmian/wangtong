//切换
$(".list a").click(function(){
	for (var i = 0; i < $(".list a").length; i++) {
		$(".list a").removeClass()
	}
	$(this).attr("class","current")
})


var inp_l = 0;
$("#pass").keyup(function () {
    var inp_v = $(this).val();
    if ((/\d/g.test(inp_v.slice(-1)) || inp_v == '')) {
        inp_l = inp_v.length;
    } else {
        $(this).val(inp_v.slice(0, -1));
    }
});


//支付
function getData() {
    var cart_data = [];
    if (localStorage.tdlist == undefined) {
        cart_data = [];
    } else {
        cart_data = JSON.parse(localStorage.tdlist)
    }
    return cart_data;
}
function saveData(data) {
    localStorage.tdlist = JSON.stringify(data);
};
$(".affirm").on("click", function () {
    var data = getData();
    var passWord = $("#pass").val();
    var cod=/[\d]{6}$/g;
    if (passWord.length === 6 && cod.test(passWord)) {
        location.href = "pay_success.html"
    }
    else {
        location.href = "pay_failure.html"
    }
    saveData(data);
});

//获取数据
var arr = localStorage.money;
var add=localStorage.site;
var name=localStorage.names;
var phone=localStorage.phone;
var title=localStorage.title;
$(".should p").find("span").html(arr);
$(".pay_shortcut").find("span").html(arr);
$(".add").html(add);
$(".name").html(name);
$(".phone").html(phone);
var ass=title;
var ass2=new Array();
ass2=ass.split(","),
console.log(ass2)
function info(){
	var order=ass2
	function infos(i,v){
		var newp="<p>"+order[i]+"</p>"
		$(v).append(newp)
	}
	for (var i = 0; i < order.length; i++) {
		infos(i,".details div")
	}
}
info()
