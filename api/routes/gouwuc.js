var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();


let user_scheam   = mongoose.Schema({
	id: String,
	image: String,
	name: String,
	price: String,
	num: String,
	abc:String,
	yonghu:String,
});
const Gouwuc = mongoose.model('gouwuc',user_scheam,'gouwuc');
router.post('/',function(req,res,next){
	var haha = req.body._id
	var dy = req.body.abc
	var yonghua = req.body.yonghu
	// console.log(yonghu)
	if(haha){
		var shuju = req.body._id
		Gouwuc.remove({'_id':shuju},function(err,res){
			if(err){
				console.error(_id);
			} else {
				console.log(res);
			}
		})
	}
	if(dy){
		var gouwuc = new Gouwuc({
			name : req.body.name,
			image: req.body.image,
			price: req.body.price,
			num:req.body.num,
			yonghu:req.body.yonghu,
		});
		gouwuc.save(function (err, res) {
			if (err) {
				res.save('添加失败')
			}
			else {
				res.save('添加成功')
			}
		});
	}	
})
router.get('/',function(req,res,next){
	Gouwuc.find({},function(err,lala){ 
		if(err) {
			console.log(err.message)
		}else{
			res.json(lala);
	}})
})



/* GET home page. */

module.exports = router;