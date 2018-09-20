$("#search").focus(function(){
	if($(this).val()=="请输入要搜索的关键字"){
		$(this).val("");
	}
})
$("#search").blur(function(){
	if($(this).val()==""){
		$(this).val("请输入要搜索的关键字");
	}
})

$("#collect").focus(function(){
	if($(this).val()=="输入商品标题或者订单号进行搜索"){
		$(this).val("");
	}
})
$("#collect").blur(function(){
	if($(this).val()==""){
		$(this).val("输入商品标题或者订单号进行搜索")
	}
})

$("#words").focus(function(){
	if($(this).val()=="选填：对本次交易的说明（建议填写已和卖家协商一致的内容）"){
		$(this).val('');
	}
})
$("#words").blur(function(){
	if($(this).val()==""){
		$(this).val("选填：对本次交易的说明（建议填写已和卖家协商一致的内容）")
	}
})

$("textarea").focus(function(){
	if($(this).val("请描述一下对商品的评价~")){
		$(this).val("")
	}
})
$("textarea").blur(function(){
	if($(this).val("")){
		$(this).val("请描述一下对商品的评价~")
	}
})









//登录
var user=document.querySelectorAll(".top_main>div>a")[0];
var logout=document.querySelectorAll(".top_main>div>a")[1];
var p=document.querySelector(".top p");
var span=document.querySelector(".top span");
var islogin=false;
var data=getUserData();
data.forEach(function(v,i) {
    if (v.login == true) {
        islogin = true;
        user.innerHTML =v.name;
       
    }
    logout.innerHTML = "退出";
    logout.setAttribute("class","");
    $(".top_main>div>a").css("margin-right","20px")
    user.href="user.html";
    p.style.display="none";
    span.style.display="none";
});
if(islogin==false){
    user.innerHTML="请登录";
    logout.setAttribute("class","current");
    logout.innerHTML="免费注册";
    user.href="login.html";
    $(".top_main>div>a").css("margin-right","0px")
    span.style.display="inline-block";
    p.style.display="block";
}
logout.onclick=function() {
    if(this.innerHTML=="免费注册"){
        location.href="register.html";
    };
    if (this.innerHTML == "退出") {
        if (confirm("请确认是否要退出登录")) {
            data.forEach(function (v, i) {
                if (v.login == true) {
                    data[i].login = false;
                    renewUserData(data);
                }
            });
            user.innerHTML = "请登录";
            user.setAttribute("class", "current");
            logout.innerHTML = "免费注册";
            user.href="login.html";
            logout.href="javascript:void(0)";
            $(".top_main>div>a").css("margin-right","0px")
            span.style.display="block";
            p.style.display="block";
        }
    }
};
function getUserData(){
    var arr=[];
    if(!localStorage.reg){
        arr=[];
    }
    else{
        arr=JSON.parse(localStorage.reg)
    }
    return arr;
}
function renewUserData(data){
    localStorage.user=JSON.stringify(data);
}
