/**
 * Created by Administrator on 2016/12/17 0017.
 */
$(".select").children().on("click",function(){
	console.log(6)
var self=$(this)
var t=self.index()
self.toggleClass("active" ).siblings().removeClass("active")
$(".l" ).css("display","none")
$(".l" ).eq(t).css("display","block")

})
$(".himg").on("tap",function(){
	console.log(6)
	location.href="./a-self.html"
})
$(".col-back").on("tap",function(){
	console.log(6)
	location.href="./a-self.html"
})
$(".ban-top" ).on("tap",function(){
	location.href='./my pre-housing.html'
})