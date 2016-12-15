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


