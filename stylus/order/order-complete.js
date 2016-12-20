/**
 * Created by Administrator on 2016/12/20 0020.
 */
$(".nav-r" ).on("tap",function(){
	$(".bgcom" ).show()
	$(".ensurecom" ).show()
})
$(".nav-l" ).on("tap",function(){
	$(".bgcom" ).show()
	$(".send" ).show()
})
$(".c-b" ).on("tap",function(){
	$(".bgcom" ).hide()
	$(".send" ).hide()
})
$(".en-bot" ).on("tap",function(){
	window.location.href="./order-form.html"
})
