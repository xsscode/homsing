/**
 * Created by Administrator on 2016/12/17 0017.
 */
$(".sec").on("swipeLeft",function(){
console.log(w)
	var w=$(this ).width()
	$(this ).width(w)
	$(this ).animate({"margin-left":-50},300)
})
$(".sec").on("swipeRight",function(){
	console.log(w)
	var w=$(this ).width()
	$(this ).width(w)
	$(this ).animate({"margin-left":0},300)
})
$(".delete" ).on("tap",function(){
	console.log(6666)
	$(this ).parent().remove()
})
