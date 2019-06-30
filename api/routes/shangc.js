var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();


let user_scheam   = mongoose.Schema({
	naem1: String,
	img1: String,
	naem2: String,
	img2: String,
	naem3: String,
	img3: String,
	naem4: String,
	img4: String,
	naem5: String,
	img5: String,
	naem6: String,
	img6: String,
	naem7: String,
	img7: String,
});
const Shangc = mongoose.model('shangc',user_scheam,'shangc');
router.get('/',function(req,res,next){	
	Shangc.find({},function(err,lala){ 
	    if(err) {
	        console.log(err.message)
	    }else{
			res.json(lala);
	    }})
})		
/* GET home page. */

module.exports = router;