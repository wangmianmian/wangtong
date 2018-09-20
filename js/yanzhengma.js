	var can=document.getElementById("can");
	var aa=can.getContext("2d")
	
	var pic=new Image();
	pic.src="img/codes.png"
	document.getElementsByClassName("codes")[0].appendChild(pic)
	var arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",0,1,2,3,4,5,6,7,8,9]	
	var sz=""
	
	for (var i = 0; i < 4; i++) {
			x=Math.floor(Math.random()*15)
			var r=Math.floor(Math.random()*35)
			aa.font="20px 宋体"
			x=x+Math.floor(Math.random()*2)+i*15
			y=Math.floor(Math.random()*25+12)
			aa.fillText(arr[r],x,y)
			sz+=arr[r];
		}
	$(".ck").click(function(){
		sz=""
		aa.clearRect(0,0,82,36)
		for (var i = 0; i < 4; i++) {
			x=Math.floor(Math.random()*15)
			var r=Math.floor(Math.random()*35)
			aa.font="20px 宋体"
			x=x+Math.floor(Math.random()*2)+i*15
			y=Math.floor(Math.random()*25+12)
			aa.fillText(arr[r],x,y)
			sz+=arr[r];
		}
	})
$("#can").click(function(){
		sz=""
		aa.clearRect(0,0,82,36)
		for (var i = 0; i < 4; i++) {
			x=Math.floor(Math.random()*15)
			var r=Math.floor(Math.random()*35)
			aa.font="20px 宋体"
			x=x+Math.floor(Math.random()*2)+i*15
			y=Math.floor(Math.random()*25+12)
			aa.fillText(arr[r],x,y)
			sz+=arr[r];
		}
	})