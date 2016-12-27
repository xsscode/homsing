<<<<<<< HEAD
$(".nav-r").on("tap",function(){console.log(456);var o=$(".vv")[0].files[0],n=new FormData;n.append("imgDate",o),$.ajax({url:"/api/img/upload/",type:"post",dataType:"json",data:n,cache:!1,contentType:!1,processData:!1,success:function(o){console.log(o)}})}),$(".nav-l").on("tap",function(){$(".bgcom").show(),$(".send").show()}),$(".en-bot").on("tap",function(){window.location.href="./order-temp.html"}),$(".b-l").on("tap",function(){$(".bgcom").hide(),$(".send").hide()}),$(".b-r").on("tap",function(){window.location.href="./order-form.html"});
=======
$(".nav-r").on("tap",function(){$(".bgcom").show(),$(".ensurecom").show()}),$(".nav-l").on("tap",function(){$(".bgcom").show(),$(".send").show()}),$(".en-bot").on("tap",function(){window.location.href="./order-temp.html"}),$(".b-l").on("tap",function(){$(".bgcom").hide(),$(".send").hide()}),$(".b-r").on("tap",function(){window.location.href="./order-form.html"});
>>>>>>> 6039854cda9ab3a2b2c846e8b1703521c310e444
