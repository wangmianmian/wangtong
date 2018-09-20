//获取json文件中的值
$(function () {
    $.ajax({
        type: "GET",//请求方式
        url: "js/ind.json",//地址，就是json文件的请求路径
        dataType: "json",//数据类型可以为 text xml json  script  jsonp 
       success: function(result){//返回的参数就是 action里面所有的有get和set方法的参数
            addBox(result);
        }
    });
    function addBox(result) {
    	//0-4
        function creatnewLi(i,u) {
            var newLi = "<li>" +
                "<a href='por_details.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<div>"+
                "<a href='por_details.html?"+result[i]['id']+"'>" +
                "<h3>"+result[i].title+"<h3>\n" + 
                "</a>\n " +
                "<span>"+'￥'+ result[i].price + ".00"+"</span>\n" +
                "<p>"+result[i].ys+"</p>"+
                "</div>"+
                "</li>"
            $(u).append(newLi);
        }
        //5-8
        function addLi(i,v){
            var newsLi="<li>" +
                "<a href='por_details.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<div>"+
                "<h3>\n"+
                "<a href='por_details.html?"+result[i]['id']+"'>" + result[i]['title'] + "</a> " +
                "</h3>\n" + 
                "<p>"+result[i].tj+"</p>\n"+
                "<h4>￥<span>" + result[i].price +".00"+"</span></h4>" +
                "</div>"+
                "</li>"
            $(v).append(newsLi);
        }
        function addLi2(i,value){
            var div= "<div>"+
               "<a href='por_details.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<div>"+
                "<h3>"+ result[i].cla +"</h3>\n" +
                "<h4>" + result[i].title + "</h4>\n" +
                "<h2>￥<span>" + result[i].price + "</span>.00</h2>" +
                "</div>"+
            	"</div>"
            $(value).append(div);
        }
          function addLi3(i,val){
            var div= "<div>"+
               "<a href='por_details.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<div>"+
                "<h3>"+ result[i].cla +"</h3>\n" +
                "<h4>" + result[i].title + "</h4>\n" +
                "<h2>￥<span>" + result[i].price + "</span>.00</h2>" +
                "</div>"+
            	"</div>"
            $(val).append(div);
        }
            function addLi4(i,a){
            var li= "<li>"+
            	"<h4>" + result[i].title + "</h4>\n"+
               "<a href='por_details.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<div>"+
                "<h5>￥<span>"+ result[i].price +"</span>.00</h5>\n" +
                "<a>"+ result[i].qg +"</a>"
                "</div>"+
            	"</li>"
            $(a).append(li);
        }
            function addLi5(i,b){
            var li= '<li>'+
                "<a href='por_details.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<div>"+
                "<a href='por_details.html?"+result[i]['id']+"'>" +
                "<h3>"+ result[i].title +"</h3>\n" +
                "</a>"+
                "<span>"+ result[i].tj +"</span>"+
               "<h4>￥<span>"+ result[i].price +"</span>.00</h4>"+
                "</div>"+
            	"</li>"
            $(b).append(li);
        }
        function listLi(i,c){
            var li= '<li>'+
                "<a href='por_details.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
                "<div>"+
               	"<h2>￥<span>" + result[i].price + "</span>.00</h2>\n"+
                "<p><a href='por_details.html?"+result[i]['id']+"'>" + result[i]['title'] + "</a></p>\n" +
                "<a>"+ result[i].gz +"</a>"+
               "<a href='por_details.html?"+result[i]['id']+"'>" + result[i]['cart'] + "</a>" 
                "</div>"+
            	"</li>"
            $(c).append(li);
        }
         function listLi2(i,d){
            var li= '<li>'+
                "<a href='por_details.html?"+result[i]['id']+"'>" +
                "<img src='" + result[i].src + "'/>\n" +
                "</a>\n" +
               	"<span>￥" + result[i].price +".00"+"</span>\n"+
                 "<a href='por_details.html?"+result[i]['id']+"'>" +
                 "<p>"+ result[i].title +"</p>"
                "</a>\n" +
            	"</li>"
            $(d).append(li);
        }
        function listLi3(i,e){
            var li= '<li>'+
                "<h2>"+ result[i].title +"</h2>"
            	"</li>"
            $(e).append(li);
        }
        for (var i = 0; i < result.length; i++) {
            if(i<=4){
                creatnewLi(i,".hot ul");
            }else if(i<=8&&i>4){
                addLi(i,".new>ul");
            }else if(i==9){
                addLi2(i,".mans");
            }else if(i==10){
                addLi3(i,".mans");
            }else if(i<=14&&i>10){
                addLi4(i,".recommend ul");
            }else if(i<=20&&i>14){
                addLi5(i,".brand ul");
            }else if(i<=36&&i>20){
                listLi(i,".main>ul");
            }else if(i<=39&&i>36){
            	listLi2(i,".sidebar>ul");
            }else if(i==40){
            	listLi3(i,".sidebar>ul");
            }else if(i<=43&&i>40){
            	listLi2(i,".sidebar>ul");
            }
        }
    }
});