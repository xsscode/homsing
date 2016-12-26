/**
 * Created by Administrator on 2016/12/10 0010.
 */
var express=require("express");
var path=require("path");
var b=express();
var sha1=require('sha1');
var proxy=require('http-proxy-middleware');
var x=path.join(__dirname,'view');
var y=path.join(__dirname,"public");
b.use("/",express.static(x));
b.use("/public",express.static(y));

b.listen(16933,function(){
	console.log('server run at port 16933')
});


b.use("/api",proxy({
	target: "http://guanjp.com:9805",
	changeOrigin: true,
	ws: true,
	cookieRewrite: true,
	pathRewrite: {
		"^/api": "/"
	}
}));
module.exports=b;

