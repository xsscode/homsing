/**
 * Created by Administrator on 2016/12/19 0019.
 */
$(".sec-box").on("swipeLeft",function(){
	$(this).find(".sec").animate({"margin-left":-66},300)
	$(this).find(".delete" ).animate({"right":0},300)
})
$(".sec-box").on("swipeRight",function(){
	$(this ).find(".sec").animate({"margin-left":0},300)
	$(this).find(".delete" ).animate({"right":-66},300)
})
$(".sec-box .delete").on("tap",function(){
	$(this ).parent().remove()
})


$(".h3-box").on("click",function(){
      console.log(6)
    $(this ).addClass("h3-box-click" ).removeClass("h3-box" ).text("已接单,待反馈")
})
$(".b").on("tap",function(){
	location.href="./order-form.html"
	console.log(56)

/*	$(".r1" ).text("订单成功")
	$(".r2" ).text("已接单,待看房")
	$(".r3" ).text("等待对方接单")*/
})

$(".call").find(".c-b" ).on("tap",function(){
	$(".call" ).hide();
	$(".bg" ).hide()
});

$(".ban-c1").find(".c-r").on("tap",function(){
	$(".call" ).show()
	$(".bg" ).show()
});
$(".sec-right" ).on("tap",function(e){
	if(e.target.className!="h3-box"){
		if($(this ).find(".h3-box-click").length){

			location.href="./order-moredone.html"
		}
else{location.href="./order-more.html"}
	}
})



$(".nav-r").on("tap",function(){
	//console.log(55)
$(".bg" ).show()
	$(".change" ).show()
})

$(".change").find(".b-r").on("tap",function(){
	var yy=$(".ban-c44" ).val()
	console.log(yy,/^\d{4}\/([0-9]|1[012]|0[0-9])\/([0-9]|0[0-9]|[12][0-9]|3[0-1])$/g.test(yy) )
	if(!/^\d｛4｝\/\d{2}\/\d{2}$/g.test(yy)){}
	else{
		sessionStorage.setItem("change-date",yy)
		$(".change" ).hide()
		$(".ensure" ).show()
	}
	console.log(4)

})

/*$(".h3-box").on("tap",function(){
location.href="./order-form.html"
})*/

$(".bot-li" ).eq(0).on("tap",function(){
	location.href="./order-datechange.html"
})

$(".en-bot").on("tap",function(){
	location.href="./order-form.html"
	$(".bot-li" ).eq(0).off("tap")
});

$(".pre" ).on("tap",function(){
	location.href="./order.html"
})

$(".pre1" ).on("tap",function(){
	location.href="./order.html"
})

$(".nav-l" ).on("tap",function(){
	location.href="./order-form.html"
})

$(".bot-li").eq(1).on("tap",function(){
	location.href="./order-complete.html"
})

$(".temp .c-b .b-r").on("tap",function(){

	location.href="./order-moredone.html"
})
$(".temp .c-b .b-l").on("tap",function(){

	location.href="./order.html"
})

$(".bot-li").eq(2).on("tap",function(){
	location.href="./order-cancel.html"
})
$(".change .c-b .b-l").on("tap",function(){
	$(".bg" ).hide()
	$(".change" ).hide()

})