/**
 * Created by Administrator on 2016/12/20 0020.
 */
$(".c4-li:lt(2)").on("tap",function(){
	var self=$(this)
	if(!self.find(".li-box" ).hasClass("active")){
		$(".li-box").addClass("unac").removeClass("active")
		$(this ).find(".li-box" ).addClass("active" ).removeClass("unac")
	}
	else{
		self.find(".li-box" ).addClass("unac").removeClass("active")
	}
})
$(".c4-li:eq(2)").on("tap",function(){
	if(!$(this ).find(".li-box" ).hasClass("active")){
		console.log(1)
	    $(".li-box").addClass("unac").removeClass("active")
	     $(this ).find(".li-box" ).addClass("active" ).removeClass("unac")
        $(".expl" ).show()
	}
	else{

		$(".expl" ).hide()
		$(this ).find(".li-box" ).addClass("unac" ).removeClass("active")
	}

})

$(".b").on("tap",function(){
	console.log(0)
	$(".bgcan" ).show()
	$(".ensurecan" ).show()
})