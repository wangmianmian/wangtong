	var savebol=true;
	if(!localStorage.getItem("index")){
		localStorage.setItem("index",1);
	}
	
	function getData(){
		var arr=[];
		if(!localStorage.address){
			arr=[];
		}else{
			arr=JSON.parse(localStorage.address)
		}
		return arr;
	}
	function getSave(data){
		localStorage.address=JSON.stringify(data)
	}
	
	var bol=true;
	$(".bottom>a").click(function(){
		$("form").show();
			
	})
	
//遍历数据 数据的插入
	function adds(){
		$(".content .middle>ul li:not(.content .middle>ul li:first .content .middle>ul li:last)").remove();
		var data=getData()
		
		$.each(data,function(i,v){
				$(".content .middle>ul").append(`<li>
				<span>`+v.name+`</span>
				<span class="area">`+v.pro+`&nbsp`+v.city+ `</span>
				<span class="detailed">`+v.pro+`&nbsp`+v.city+`&nbsp`+v.area+`&nbsp;`+v.address+`</span>
				<span class="contact">`+v.tel+`</span>
				<input type="button" name="edit" class="edit" value="编辑 " />|
				<input type="button" name="delete" class="delete" value="  删除" />
				<input type="hidden" num="`+v.index+`" />
			</li>`);
			
		})
				//编辑
				
			$(".edit").click(function(){
				savebol=false;
				$(".content form").show();
		        console.log($(this).parents("li").find("input[type=hidden]").attr("num"))
		        var s=$(this).parents("li").find("input[type=hidden]").attr("num");
		        console.log(s)
		        var arr=getData();
		        arr.forEach(function(el){
		        	if(el.index==s){
		        		$("#geetr").val(el.name)
		        		$("#province").val(el.pro)
		        		$("#city").html("<option selected>"+el.city+"<option>")
		        		$("#area").html("<option selected>"+el.area+"<option>")
		        		$("#add").val(el.address)
		        		$("#tel").val(el.tel)
		        		$("#hi").attr("num",el.index)
		        	}
		        })
			})
			//删除
				$(".middle .delete").click(function(){
				var ind = $(this).parent().index();
				console.log(ind);
				var data=getData()
				data.forEach(function(index,v){
					if(ind == v){
						data.splice(v,1);
						$(this).parent().remove();
					getSave(data);
					adds();
					}
				})
			})
	}
	adds();
	//点击保存
	var index=0;
	$("#save").click(function(){
		if(savebol){
			var s1=localStorage.getItem("index");
			s1++;
			localStorage.setItem("index",s1);
			var data=getData();
			var geetr=$("#geetr").val();
			var pro=$("#province").val();
			var city=$("#city").val();
			var area=$("#area").val();
			var ad=$("#add").val();
			var tel=$("#tel").val();
			if(bol){
				if(geetr!=""&&pro!=""&&city!=""&&area!=""&&ad!=""&&tel!=""&&tel.length==11){
				var address={
					name:geetr,
					pro:pro,
					city:city,
					area:area,
					address:ad,
					tel:tel,
					index:s1
				}
				data.push(address)
				getSave(data);
				adds();
				}else{
					alert("请完善信息")
				}
			}
			
		}else{
			console.log($("#hi").attr("num"))
			var data=getData();
			var geetr=$("#geetr").val();
			var pro=$("#province").val();
			var city=$("#city").val();
			var area=$("#area").val();
			var ad=$("#add").val();
			var tel=$("#tel").val();
			var index=$(this).find("input[type=hidden]").attr("num");
			$(".middle>ul li").each(function(index,el){
//				
				if($(this).find("input[type=hidden]").attr("num")==$("#hi").attr("num")){
					$(el).find("span:first").html($("#geetr").val())
					$(el).find(".area").html($("#province").val()+$('#city').val())
					$(el).find(".detailed").html($("#province").val()+$('#city').val()+$('#area').val()+$("#add").val())
					$(el).find(".contact").html($("#tel").val())
					
					var address={
					name:geetr,
					pro:pro,
					city:city,
					area:area,
					address:ad,
					tel:tel,
					index:index
				}
				data.forEach(function(el,index){
					if(el.index==$("#hi").attr("num")){
						data.splice(index,1,address);
					}
				})

				getSave(data);
				}
			})
		}
		$(".content form").hide();
			var geetr=$("#geetr").val("");
			var pro=$("#province").val("");
			var city=$("#city").val("");
			var area=$("#area").val("");
			var ad=$("#add").val("");
			var tel=$("#tel").val("");
		savebol=true;
			
	})
							


	$(".content form").on("blur","input,select",function(e){ 
		if($(e.target).val()){
			bol=true;
		}else{
			bol=false;
		}
	})
	
	//取消按钮
	$("#cancel").click(function(){
		var geetr=$("#geetr").val("");
		var pro=$("#province").val("");
		var city=$("#city").val("");
		var area=$("#area").val("");
		var ad=$("#add").val("");
		var tel=$("#tel").val("");
		$(".content form").hide()
	})




$("#tel").blur(function(){
	var reg=/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
	var tel=$("#tel").val()
	if(!reg.test(tel)){
		alert("手机号格式错误")
	}

})
