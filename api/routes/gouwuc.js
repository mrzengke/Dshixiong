var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();


let user_scheam   = mongoose.Schema({
	id: String,
	image: String,
	name: String,
	price: String,
	num: String,
});
const Gouwuc = mongoose.model('gouwuc',user_scheam,'gouwuc');
router.post('/',function(req,res,next){
	console.log(req.body)
	var gouwuc = new Gouwuc({
        name : req.body.name,                
        image: req.body.image,                           
        price: req.body.price,
		num:req.body.num,                   
    });
	gouwuc.save(function (err, res) {
        if (err) {
            res.save('添加失败')
        }
        else {
            res.save('添加成功')
        }
	})	
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