var express = require('express');
var router = express.Router();
var Product = require('../models/products');
/* GET home page. */
router.get('/', function(req, res, next) {
	var products = Product.find(function(err, docs){
		var productchunks = [];
		var chunksize = 4;
		for(var i=0;i<docs.length; i += chunksize){
			productchunks.push(docs.slice(i, i+chunksize))
		}
		res.render('shop/index', { title: 'Express' ,products: productchunks});
	});

  
});

module.exports = router;
