
var form=document.querySelector(".content form");
var user=form.user;		//用户名	
var pwd=form.password;		//密码
var pwds=form.again;		//确认密码
var mail=form.mail;		//电子邮箱	
var tel=form.tel;		//手机号
var inputcode=form.inputcode;		//验证码
var li=document.querySelectorAll(".list li");
var p=document.createElement("P");
p.style.cssText="position: absolute;color:red;margin-top:-11px"
$("#account").focus(function(){
	if($(this).val()=="您的账户名和登录名"){
		$(this).val("");
		li[0].appendChild(p)		
		p.innerHTML="账户名/登录名为4-16位中英文组合"
	}
})
$("#account").blur(function(){
	var userreg=/^[a-zA-Z0-9_-]{4,16}$/g;
	var vals=$("#account").val();
	if(!userreg.test(vals)){
		li[0].appendChild(p)		
		p.innerHTML="账户名/登录名格式错误"
		$(this).val("您的账户名和登录名");
	}else if($(this).val().length>4||$(this).val().length<16){
		$(".list li p").remove()
		var data=getDatas()
		data.forEach(function(v){
			if($("#account").val()===v.name){
				alert("用户名已存在")
				$("#account").val("您的账户名和登录名")
			}
		})
	}
})

$("#proposal").focus(function(){
	if($(this).val()=="建议密码混合使用大小写"){
		$(this).val("");
		li[1].appendChild(p)		
		p.innerHTML="密码为8-16位数字和字母组合"
		$(this).attr("type","password")
	}
})

$("#proposal").blur(function(){
	var pwdReg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
	var value=$('#proposal').val();
	if(!pwdReg.test(value)){
		li[1].appendChild(p)		
		p.innerHTML="密码格式不正确"
		$(this).val("建议密码混合使用大小写")
		$(this).attr("type","text")
	}else if($(this).val().length>8||$(this).val().length<16)
	$(".list li p").remove()
})
	


$("#again").focus(function(){
	if($(this).val()=="请再次输入密码"){
		$(this).val("");
		$(this).attr("type","password")
	}
})
$("#again").blur(function(){
	if($(this).val()==""){
		li[2].appendChild(p)		
		p.innerHTML="密码输入不一致"
		$(this).val("请再次输入密码")
		$(this).attr("type","text")
	}else if($(this).val()!=$("#proposal").val()){
				li[2].appendChild(p)		
				p.innerHTML="密码输入不一致"
				$(this).val("请再次输入密码")
				$(this).attr("type","text")
	}
})

$("#mailbox").focus(function(){
	if($(this).val()=="建议使用常用邮箱"){
		$(this).val("");
	}
})
$("#mailbox").blur(function(){
	var regs=new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
	var tels=$("#mailbox").val();
	if(!regs.test(tels)){
		li[3].appendChild(p)		
		p.innerHTML="请输入正确邮箱"
		$(this).val("建议使用常用邮箱")
	}
})

$("#phone").focus(function(){
	if($(this).val()=="建议使用常用手机"){
		$(this).val("");
	}
})

$("#phone").blur(function(){
	var reg=/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
	var tel=$("#phone").val();
	if(!reg.test(tel)){
		li[4].appendChild(p)		
		p.innerHTML="手机号格式错误"
		$(this).val("建议使用常用手机")
	}else if($(this).val().length=11){
		$(".list li p").remove()
		var wait=60;
$("#house").click(function(){
	time(this);
	$(".code").focus(function(){
	if($(this).val()=="请输入手机验证码"){
		$(this).val("");
	}
}) 
$(".code").blur(function(){
	var cod=/[\d]{4}$/g;
	var co=$(this).val();
	if(!cod.test(co)){
		li[5].appendChild(p)		
		p.innerHTML="验证码错误"
		$(this).val("请输入手机验证码")
	}else if($(this).val().length==4)
	$(".list li p").remove()
})
})
function time(o){
	if(wait==0){
		o.removeAttribute("disabled");
		o.innerHTML="获取验证码";
		wait=60;
	}else{
		o.setAttribute("disabled",true);
		o.innerHTML="重新发送("+wait+")";
		wait--;
		setTimeout(function(){
			time(o)
		}, 1000)
	}
}
		
	}
})


bol=false;
function ck(){
	if(bol){
		$("#ck").attr("checked",false);
		bol=false;
	}else{
		$("#ck").attr("checked",true)
		bol=true;
	}
}
$("#ck").click(function(){
	ck();
})



$("#enroll").click(function(){
//	var datas=getDatas()
//	var account=$("#account").val()
//	var proposal=$("#proposal").val()
//	var mailbox=$("#mailbox").val()
//	var phone=$("#phone").val()
	if($("#account").val()=="您的账户名和登录名"||$("#account").val()==""){
		alert("用户名不能为空")
	}else
	if($("#proposal").val()=="建议密码混合使用大小写"||$("#proposal").val()==""&&$("#account").val()!=""){
		alert("密码不能为空")
	}else
	if($("#again").val()=="请再次输入密码"||$("#again").val()==""&&$("#again").val()!=""){
		alert("密码输入不一致")
	}else
	if($("#mailbox").val()=="建议使用常用邮箱"||$("#mailbox").val()==""&&$("#proposal").val()!=""){
		alert("邮箱不能为空")
	}else
	if($("#phone").val()=="建议使用常用手机"||$("#phone").val()==""&&$("#mailbox").val()!=""){
		alert("手机号不能为空")
	}else
	if($(".code").val()=="请输入手机验证码"||$(".code").val()==""&&$(".code").val()!=""){
		alert("请输入验证码")
	}else
	if(bol==false){
		alert("请阅读并同意条款")
	}else{
//		var reg={
//			name:user.value,
//			pwd:pwd.value,
//			mail:mail.value,
//			phone:tel.value
//		}
//		datas.push(reg);
//		getSave(datas)
		getSave()
		alert("注册成功，即将跳转到登录页面")
		location.href = "login.html";
	}
	
	
	
})

function getSave(){
	var nameval=user.value;
    var passval=pwd.value;
    var mailval=mail.value;
    var telval=tel.value;
    var data=getDatas();
    data.push({"name":nameval,"pass":passval,"mail":mailval,"tel":telval,"login":false});
    localStorage.reg=JSON.stringify(data);
}

function getDatas(){
	var arr=[];
	if(!localStorage.reg){
		arr=[]
	}else{
		arr=JSON.parse(localStorage.reg)
	}
	return arr;
}



//删除所有缓存
//localStorage.reg=""
