var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();


let user_scheam   = mongoose.Schema({
	image:String,
});
const Gouwu = mongoose.model('gouwuca',user_scheam,'gouwuca');
router.post('/',function(req,res,next){
	var shuju = req.body.image
	var del = {'image':shuju}
	Gouwu.remove(del,function(err,res){
		console.log(1)
		if(err){
			console.error(image);
		} else {
			console.log(res);
		}

	})
})




/* GET home page. */

module.exports = router;