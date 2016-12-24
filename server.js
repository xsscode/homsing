/**
 * Created by Administrator on 2016/12/10 0010.
 */
var express=require("express")
var path=require("path")
var b=express()
var x=path.join(__dirname,'view')
var y=path.join(__dirname,"public")
b.use("/",express.static(x))
b.use("/public",express.static(y))
b.listen(8888,console.log(
	"sever"
))
var proxy=require('http-proxy-middleware');


b.use("/api",proxy({
	target:"http://guanjp.com:9805",
	changeOrigin:true,
	ws:true,
	cookieRewrite:true,
	pathRewrite:{
	"^/api":"/"
}
}))