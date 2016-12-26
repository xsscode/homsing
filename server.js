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
<<<<<<< HEAD:server.js
b.listen(16933,console.log(
=======
b.listen(8888,console.log(
>>>>>>> 6039854cda9ab3a2b2c846e8b1703521c310e444:app.js
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
<<<<<<< HEAD:server.js
}))
=======
}))
>>>>>>> 6039854cda9ab3a2b2c846e8b1703521c310e444:app.js
