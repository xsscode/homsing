/**
 * Created by Administrator on 2016/12/21 0021.
 */
$(".set-btn").on("swipeRight",function(){
	console.log(55)
	$(".inner-btn" ).animate({"margin-left":20},300)
})
$(".set-btn").on("swipeLeft",function(){
	$(".inner-btn" ).animate({"margin-left":1},300)
})

$(".imgmore").on("tap",function(){
	location.href="./a-self.html"
})