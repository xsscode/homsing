$(".sec").on("swipeLeft",function(){console.log(t);var t=$(this).width();$(this).width(t),$(this).animate({"margin-left":-50},300)}),$(".sec").on("swipeRight",function(){console.log(t);var t=$(this).width();$(this).width(t),$(this).animate({"margin-left":0},300)}),$(".delete").on("tap",function(){console.log(6666),$(this).parent().remove()});