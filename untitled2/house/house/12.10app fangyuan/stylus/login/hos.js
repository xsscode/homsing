/**
 * Created by Administrator on 2016/12/10 0010.
 */

$('.btn').attr('disabled',"true");

var x= 0,y= 0,tu
tu=$(".m6")
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
		$('.btn').css("cursor","pointer")
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
		$('.btn').css("cursor","pointer");
	}
});
$(".s1").off().click(function(){
 $(".log" ).fadeIn()
	$(".bg1" ).css("display","none")
	tu.remove()
})
$(".btn1" ).click(gg);
function gg(){

	$(".btn1" ).text(60).attr("disabled","true");
	var tt=setInterval(function(){
		var t1=parseInt($(".btn1" ).text());
		$(".btn1" ).text(t1-1);
		if(t1<3){clearInterval(tt);
			$(".btn1" ).text("重新发送")
			}
		if($(".btn1" ).text()=="重新发送"){
			$(".btn1" ).removeAttr("disabled")}
	},1000)

}
$(".btn2").click(function (){
	$(".bg1" ).fadeIn();
	$(".log" ).css("display","none");
})

$(".s2").click(function (){
	$(".log" ).fadeIn();
	$(".bg1" ).css("display","none")
	$(".m5").after(tu)
});
$(".m6 input" ).click(function(){
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

	},1000)
})

$(document ).click(function(e){
	e.stopPropagation()
	console.log(e.target.tagName)
	if(e.target.tagName!="LI"&&e.target.tagName!="INPUT"){
		$(".asp" ).slideUp()
	}

});

