/**
 * Created by Administrator on 2016/12/13 0013.
 */
var iaro=$(".i-aro")
var lilist=$(".i-list")

iaro.on("click",function(){
   var self=$(this);
   lilist.toggle()
	});
$(".i-li").on("click",function(){
	var self=$(this)
	var tt=self.text()
	$(".i-txt1").text(tt)
	$(".i-txt1" ).css("color","#000")
	})
$(".type-li").on("click",function(){
	var self=$(this)
	$(".l" ).removeClass("img-p")
	self.find(".l" ).addClass("img-p")
})
var bbt=$(".btn-bottom");
bbt.on("click",function(){
	$(".btn-art").css("display","none")
	$(".btn-bg").css("display","none")
})

$(".boot-btn").on("click",function(){
	$(".btn-bg").fadeIn(300)
	$(".btn-art").fadeIn(300)
})

$(".log-more").on("click",function(){
	console.log("gggggggg")
	$(this ).find(".jj" ).toggleClass("log-img")
})

$(".nav-l").on("click",function(){
	$(".btn-bg").fadeIn(300)
	$(".rele-out").fadeIn(300)
})

$(".pre-resours").on("click",function(){
	console.log(66)
	location.href = "./release.html"
})

$(".b-l").on("click",function(){
	$(".rele-out" ).fadeOut(300)
	$(".btn-bg" ).fadeOut(300)
	$(".dem-bg").fadeOut(300)
	$(".dem-out").fadeOut(300)
})
$(".b-r").on("click",function(){
	console.log(668)
	location.href = "./release-1.html"
});
$(".re-box-l").on("click",function(){
	console.log(66)
	location.href = "./release.html"
})
$(".re-box-r").on("click",function(){
	console.log(66)
	location.href = "./dem-relse.html"
})
$(".can").on("click",function(){
	console.log(66)
	$(".re-bg" ).hide()
	$(".re-box" ).hide()
	location.href = "../home/home.html"
})

$(".h-left").on("click",function(){
	$(".dem-bg").fadeIn(300)
	$(".dem-out").fadeIn(300)

})
$(".h-right").on("click",function(){
	location.href = "./dem-com.html"
})
$(".en-bot").on("click",function(){
	location.href = "./release.html"
})
$(".en-bot1").on("click",function(){
	location.href = "./release-1.html"
})
$(".head-add").on("click",function(){
	location.href = "./new-resours.html"
})
$(".sec-submit").on("click",function(){
	location.href = "./submit-com.html"
})
$(".head-search").on("click",function(){
	location.href = "./release-search.html"
})
$(".nav-text").on("click",function(){
	location.href = "./release.html"
})
