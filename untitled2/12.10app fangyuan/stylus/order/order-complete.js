/**
 * Created by Administrator on 2016/12/20 0020.
 */
$(".nav-r" ).on("tap",function(){
	console.log(456);
	var myfile=$(".vv" )[0 ].files[0];
	var formDate=new FormData();
    formDate.append("imgDate",myfile);
	$.ajax({
		url:"/api/img/upload/",
		type:"post",
		dataType:"json",
		data:formDate,
		cache:false,
		contentType:false,
		processData:false,
		success:function(res){
			console.log(res)
		}

	})

	/*$(".bgcom" ).show()
	$(".ensurecom" ).show()*/
})
$(".nav-l" ).on("tap",function(){
	$(".bgcom" ).show()
	$(".send" ).show()
})
$(".en-bot" ).on("tap",function(){
	window.location.href="./order-temp.html"
})

$(".b-l" ).on("tap",function(){
	$(".bgcom" ).hide()
	$(".send" ).hide()
})

$(".b-r" ).on("tap",function(){

	window.location.href="./order-form.html"
})

