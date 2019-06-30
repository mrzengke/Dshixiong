var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();

//链接mongoose
mongoose.connect('mongodb://localhost:27017/dashix',{useNewUrlParser:true},function(err){
	if(err){
		console.log('连接失败');
	}else{
		console.log('连接dashix成功')
	}
});
let user_scheam   = mongoose.Schema({
	diyinaem: String,
	diyiimg: String,
	diernaem: String,
	dierimg: String,
	disannaem: String,
	disanimg: String,
	disinaem: String,
	disiimg: String,
	diwunaem: String,
	diwuimg: String,
	diliunaem: String,
	diliuimg: String,
	diqinaem: String,
	diqiimg: String,
});
const Shouy = mongoose.model('shouy',user_scheam,'shouy');
router.get('/',function(req,res,next){	
	Shouy.find({},function(err,lala){ 
	    if(err) {
	        console.log(err.message)
	    }else{
			res.json(lala);
	    }})
})		
/* GET home page. */

module.exports = router;