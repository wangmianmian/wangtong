function getDatas(){
	var arr=[];
	if(!localStorage.reg){
		arr=[]
	}else{
		arr=JSON.parse(localStorage.reg)
	}
	return arr;
}
function getSave(data){
	localStorage.reg=JSON.stringify(data)
}

$(".phone").focus(function(){
	if($(this).val()=="邮箱/账号/手机号"){
		$(this).val("")
	}
})

$(".phone").blur(function(){
		var data=getDatas();
		var bol=false;
		if($(this).val!=""){
			data.forEach(function(v,i){
				if(v.name==$(".phone").val()){
					bol=true;
					return;
			}
			})
		}
		if($(this).val()==""){
		$(this).val("邮箱/账号/手机号")
	}else if(bol==false){
		alert("用户未注册")
		$(this).val("邮箱/账号/手机号")
	}
})

$(".password").focus(function(){
	if($(this).val()=="请输入密码"){
		$(this).val("")
		$(this).attr("type","password")
	}
})
$(".password").blur(function(){
	var data=getDatas();
	var bols=false
	if($(".password").val!=""){
		data.forEach(function(v,i){
			if(v.pass==$(".password").val()&&v.name==$(".phone").val()){
					bols=true;
					return;
			}
		})
	}
	if($(this).val()==""){
		$(this).val("请输入密码")
		$(this).attr("type","text")
	}else if(bols==false){
		alert("密码输入错误")
		$(this).val("请输入密码")
		$(this).attr("type","text")
	}
	
	
	
})

$(".code").focus(function(){
	if($(this).val()=="请输入验证码"){
		$(this).val('')
	}
})
$(".code").blur(function(){
	if($(this).val()==""){
		$(this).val("请输入验证码")
	}
})


$(".login").click(function(){
    	if($(".phone").val()==""||$(".phone").val()=="邮箱/账号/手机号"){
			alert("请输入用户名")
		}else if($(".password").val()==""||$(".password").val()=="请输入密码"){
			alert("请输入密码")
		}else if($(".code").val()!=sz){
			alert("验证码错误")
		}else {
			var data=getDatas();
    		var isloginsuccess=false;
			data.forEach(function(v,i){
				if((v.name==$(".phone").val()||v.mail==$(".phone").val()||v.tel==$(".phone").val())&&v.pass==$(".password").val()){					
					data.forEach(function(v,i){
                        v.login=false;
                    });
				
		            isloginsuccess=true;
			        data[i].login=true;
			        getSave(data);
					alert ("登录成功")
					$(".phone").val("邮箱/账号/手机号")
					$(".password").val("请输入密码")
					$(".code").val("请输入验证码")
					location.href = "index.html";
					return;
				}
	        });
	         if(isloginsuccess==false){
                 alert("密码错误");
                 $(".password").type="text";
                 $(this).val("请输入密码")
             }
		}
//  })

})

