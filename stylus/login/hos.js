/**
 * Created by Administrator on 2016/12/10 0010.
 */

$(".btn" ).on("click",jj)
function jj(){

	x1=$("input").eq(0).val();
	x2=$("input").eq(1).val();
	console.log(x1,x2)
	$.ajax({
		url:'/api/user/login',
		type:"POST",
		dataType:"json",
<<<<<<< HEAD
		data:{username:x1,passwd:x2},
		success:function(res){
			if(res.code==1){
				alert("登录成功")
				sessionStorage.User="logdone"
				console.log("登录成功",res);
=======
		data:{username:"x1",passwd:"x2"},
		success:function(res){
			if(res.code==1){
				alert("登录成功")
				console.log("登录成功",res)
>>>>>>> 6039854cda9ab3a2b2c846e8b1703521c310e444
				location.href = "../self/dengluhou.html"
			}else{
				alert(res.msg)
			}
		}
	})
}

var x= 0,y= 0,tu
tu=$(".m6")
/*
$(".d2").find("input").keyup(function(){
	if(/^1[3-9]\d{9}$/.test($(this ).val())){
		x=1
	}
	else{
		x=0
	}
	console.log(x==1&&y==1);
	if(x==1&&y==1){
		$(".btn" ).removeAttr('disabled');
		}
})
$(".d3").find("input").keyup(function(){
	if(/^\d{7}$/.test($(this ).val())){
		y=1
	}
	else{
		y=0
	}
	console.log(x==1&&y==1)
	if(x==1&&y==1){
		$(".btn" ).removeAttr('disabled');
	}
});
*/


$(".s1").off().click(function(){
 $(".log" ).fadeIn()
	$(".bg1" ).css("display","none")
	tu.remove()
})
$(".btn1" ).on("tap",gg)
function gg(){
<<<<<<< HEAD
	$(".btn1" ).text(60+"s后重新发送").animate({"width":100},100 ).css("background","#c7c7c7" ).off();
=======
	$(".btn1" ).text(60+"s后重新发送").animate({"width":100},300 ).css("background","#c7c7c7" ).off();
>>>>>>> 6039854cda9ab3a2b2c846e8b1703521c310e444
	var tt=setInterval(function(){
		var t1=parseInt($(".btn1" ).text());
		$(".btn1" ).text(t1-1+"s后重新发送");
		if(t1<3){clearInterval(tt);
			$(".btn1" ).text("重新发送")
			}
		if($(".btn1" ).text()=="重新发送"){
<<<<<<< HEAD
			$(".btn1" ).on("tap",gg).animate({"width":68},100 ).css("background","#ea5404" )}
=======
			$(".btn1" ).on("tap",gg).animate({"width":68},300 ).css("background","#ea5404" )}
>>>>>>> 6039854cda9ab3a2b2c846e8b1703521c310e444
	},1000)

}
$(".btn2").on("tap",function (){
	location.href = "./logfirst.html"
})
$(".log-link .s1").click(function (){
	location.href = './logzhuce.html'
});

$(".s2").click(function (){
	location.href = './logpassward.html'
});
$(".m6 " ).click(function(){
	console.log(0)
	$(".after" ).css("transform","rotate(-45deg)")
	$(".before" ).css("transform","rotate(45deg)")
	$(".asp" ).slideDown()
});
$("#iii" ).click(function(){
	setTimeout(function(){
		window.location.href = "agent.html"

	},1000)

})

$(".botbtn" ).click(function(){
	setTimeout(function(){
		window.location.href = "logdone.html"
	},300)
})


$(".pass-back" ).on("tap",function(){
	history.back()
});



$(document ).click(function(e){
	e.stopPropagation()
	console.log(e.target.tagName)
	if(e.target.tagName!="LI"&&e.target.tagName!="INPUT"){
		$(".asp" ).slideUp()
		$(".after" ).css("transform","rotate(45deg)")
		$(".before" ).css("transform","rotate(-45deg)")
	}

});
$(".icon").on("tap",function(){
	location.href="../self/a-self.html"
})
<<<<<<< HEAD

$(".d2 input").on("keyup",function(){
	//console.log(!!$(".d2 input" ).val())
if(!!$(".d2 input" ).val()&&!!$(".d3 input" ).val()){
  $(".btn-box .btn" ).css("background","#ea5404").val(1)
}
	else{
	$(".btn-box .btn" ).css("background","#c7c7c7").val(0)
}
})
$(".d3 input").on("keyup",function(){
	//console.log(44)
	if(!!$(".d2 input" ).val()&&!!$(".d3 input" ).val()){
		$(".btn-box .btn" ).css("background","#ea5404" ).val(1)
	}
	else{
		$(".btn-box .btn" ).css("background","#c7c7c7").val(0)
	}
})


=======

$(".d2 input").on("keyup",function(){
	//console.log(!!$(".d2 input" ).val())
if(!!$(".d2 input" ).val()&&!!$(".d3 input" ).val()){
  $(".btn-box .btn" ).css("background","#ea5404").val(1)
}
	else{
	$(".btn-box .btn" ).css("background","#c7c7c7").val(0)
}
})
$(".d3 input").on("keyup",function(){
	//console.log(44)
	if(!!$(".d2 input" ).val()&&!!$(".d3 input" ).val()){
		$(".btn-box .btn" ).css("background","#ea5404" ).val(1)
	}
	else{
		$(".btn-box .btn" ).css("background","#c7c7c7").val(0)
	}
})


>>>>>>> 6039854cda9ab3a2b2c846e8b1703521c310e444
$('.logdone .a2').on('tap',function(){
	location.href = "./logfirst.html"
})
$(".asp li").on("tap",function(){
	location.href="./agent.html"
})
$(".himg").on("tap",function(){
	history.back()
})
$(".zhuce-log").on("tap",function(){
	location.href="./logfirst.html"
})
<<<<<<< HEAD

$(".log11" ).on("click",function(){
	location.href="./logfirst.html"
})
$(".log22" ).on("click",function(){
	location.href="../home/home.html"
})
=======
>>>>>>> 6039854cda9ab3a2b2c846e8b1703521c310e444
