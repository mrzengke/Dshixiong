var express = require('express');
var router = express.Router();
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
router.post('/', function (req, res){
    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
	    if (err) throw err;
	    var dbo = db.db("dashix");
		console.log(req.body.usrename)
	    var whereStr = {"name":req.body.usrename};  // 查询条件
	    dbo.collection("user").find(whereStr).toArray(function(err, result) {
			if (err){
				res.send('账号密码错误')
			};
	       res.json(result)
	    });
	});
})
module.exports = router;
