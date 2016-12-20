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
bbt.on("tap",function(){
	$(".btn-art").css("display","none")
	$(".btn-bg").css("display","none")
})

$(".boot-btn").on("tap",function(){
	$(".btn-bg").fadeIn(300)
	$(".btn-art").fadeIn(300)
})

$(".log-more").on("tap",function(){
	console.log("gggggggg")
	$(this ).find(".jj" ).toggleClass("log-img")
})