/**
 * Created by Administrator on 2016/12/17 0017.
 */
$(".select").children().on("tap",function(){
	console.log(6)
	var self=$(this)
    var t=self.index()
	self.toggleClass("active" ).siblings().removeClass("active")
	$(".l" ).css("display","none")
    $(".l" ).eq(t).css("display","block")

})
