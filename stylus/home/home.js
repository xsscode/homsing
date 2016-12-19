/**
 * Created by Administrator on 2016/12/14 0014.
 */
var sliderbox=$(".slider-box")
var slider=$(".slider")
var n=$(".slider-img" ).length
var cur=0
var pointerli=$(".pointer div")
var timer;
sliderbox.on("swipeLeft",function(){
		clearInterval(timer)
		if(cur<3){
			cur+=1
			slider.animate({"margin-left":-375},500,function(){
				slider.append(slider.children().first());
				slider.css("margin-left",0);
				timer=setTimeout(tt,1000)
			});
			pointerli.removeClass('p-li1').addClass("p-li")
			pointerli.eq(cur ).removeClass('p-li' ).addClass("p-li1")
			console.log("hhh")}
	}
);
sliderbox.on("swipeRight",function(){
		clearInterval(timer);
		cur-=1
		if(cur<0){cur=n-1}
		slider.css("margin-left",-375);
		slider.prepend(slider.children().last())
		slider.animate({"margin-left":0},500,function(){
			timer=setTimeout(tt,1000)
		});
		pointerli.removeClass('p-li1').addClass("p-li")
		pointerli.eq(cur).removeClass('p-li' ).addClass("p-li1")
		console.log("jj")
	}
)
function tim(){
	timer=setInterval(tt,1000)
}
tim();
function tt(){
	if(cur>=3){cur=-1}
	cur+=1;
	slider.animate({"margin-left":-375},500,function(){
	})
	slider.animate({"margin-left":-375},500,function(){
		slider.append(slider.children().first());
		slider.css("margin-left",0);
	});

	pointerli.removeClass('p-li1').addClass("p-li")
	pointerli.eq(cur ).removeClass('p-li' ).addClass("p-li1")
}

var t2=$(".t2" )
var t3=$(".t3" )
$(document).scroll(function(){
	if($(document).scrollTop()>=100 && $(document).scrollTop()<=900){
		up()
	}
	else{
		down()
	}
		if($(document).scrollTop()>=235 && $(document).scrollTop()<=900){
		$(".meu" ).addClass("meu1")
	}
	else{
		$(".meu" ).removeClass("meu1")
	}
})
function up(){
	$(".t2" ).remove()
	$(".t3" ).remove()

	$(".title" ).addClass("title1")
	$(".t-txt").addClass("t11" ).removeClass("t-txt" ).css("margin-top",40)
	$(".t-search").addClass("ts1" ).css("margin-top",40)
}
function down(){
	$(".t11" ).addClass("t-txt" ).removeClass("t11" )
	$(".t-txt").removeClass("t11" ).addClass("t-txt").css("margin-top",0)
	$(".t-search").removeClass("ts1").css("margin-top",0)
	$(".title" ).removeClass("title1")
	$(".t-txt" ).append(t2)
	$(".t-txt" ).append(t3);
}


var c= 0
$(".m-li").off().on("click",function(){
	console.log($(window ).scrollTop())
	var self=$(this)
	var ci=self.index()
	if(c==0){
		c=1
	     up()
		$(".meu" ).addClass("meu1" )
	    $(".slider" ).css('display',"none");
		$(".pointer" ).css('display',"none")
		//$(".m-li").removeClass("m-li-bg2" )
        self.removeClass("m-li-bg1" ).addClass("m-li-bg2")
		$(".c-i").eq(ci).slideDown(300).siblings().css("display","none")
		$(".bg" ).fadeIn()
	}
	else{
		if(!self.hasClass("m-li-bg2")){
			$(".m-li").removeClass("m-li-bg2" ).addClass("m-li-bg1" )
			self.addClass("m-li-bg2" )
			console.log(self.index())
			$(".bg" ).fadeIn()
			$(".c-i").eq(ci).slideDown(300).siblings().css("display","none")
		}
		else{
		c=0
		down()

		$(".bg" ).fadeOut()
		$(".meu" ).removeClass("meu1")
		$(".slider" ).css('display',"block")
		$(".pointer" ).css('display',"block")
		$(".m-li" ).removeClass("m-li-bg2" ).addClass("m-li-bg1")
		$(".c-i").eq(ci).css("display","none")
		if($(document).scrollTop()>=100 && $(document).scrollTop()<=900){
		 up()
		 }
		if($(document).scrollTop()>=235 && $(document).scrollTop()<=900){
			$(".meu" ).addClass("meu1")
		}
		}
	}
});

$(".c1-left li").on("click",function(){
	var self=$(this)
	self.css("background","#fff" ).siblings().css("background","")
	$(".c1-right" ).fadeOut(300,function(){
		$(".c1-right" ).fadeIn()
	})
});

$(".c2 .c2-ul li").on("click",function(){
	var self=$(this)
	self.css("background","#fff" ).siblings().css("background","")
	var x=parseInt(self.text().substr(0,4));
	var y=parseInt(self.text().substr(4,4));
	console.log(x,y)
	if(!isNaN(y)){
		$(".l-box" ).text(x)
		$(".r-1" ).text(y)
	}
	else if(x==100){
		$(".l-box" ).text(0)
		$(".r-1" ).text(100)
	}
	else if(x==1000){
		$(".l-box" ).text(1000)
		$(".r-1" ).text("以上")
	}
})

$(".c3 .c2-ul li").on("click",function(){
	var self=$(this)
	self.css("background","#fff" ).siblings().css("background","")
	var x=parseInt(self.text().substr(0,2));
	var y=parseInt(self.text().substr(2,2));
	console.log(x,y)
	if(!isNaN(y)){
		$(".l-box" ).text(x)
		$(".r-1" ).text(y)
	}
	else if(x==3){
		$(".l-box" ).text(0)
		$(".r-1" ).text(3)
	}
	else if(x==12){
			$(".l-box" ).text(12)
			$(".r-1" ).text("以上")
		}
})

$(".r-2").on("tap",function(){
	console.log("555")
	$(this ).parent().parent().parent().css("display","none")
	$(".bg" ).fadeOut()
})

$(".h1").on("tap",function(){
	var self=$(this)
	if(self.hasClass("h11")){
		self.removeClass("h11" ).addClass("h12")
	}
	else{
		self.removeClass("h12" ).addClass("h11")
	}
})

$(".m-li1").on("tap",function(){
	var self=$(this)

	if(self.hasClass("m-li12")){
	self.removeClass("m-li11").removeClass("m-li12").addClass("m-li13")

	}
	else{
		self.removeClass("m-li11").removeClass("m-li13").addClass("m-li12")
	}
})