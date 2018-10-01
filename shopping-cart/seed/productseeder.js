var Product = require('../models/products');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products = [
	new Product({
		imagepath: 'http://www.scooterengineering.com/wp-content/uploads/2012/06/ss_scooter_px200_restoration-42-300x300.jpg',
		title: 'new products',
		desc: 'new pro desc',
		price: 10
	}),
	new Product({
		imagepath: 'http://www.scooterengineering.com/wp-content/uploads/2012/06/ss_scooter_px200_restoration-42-300x300.jpg',
		title: 'new products',
		desc: 'new pro desc',
		price: 10
	}),
	new Product({
		imagepath: 'http://www.scooterengineering.com/wp-content/uploads/2012/06/ss_scooter_px200_restoration-42-300x300.jpg',
		title: 'new products',
		desc: 'new pro desc',
		price: 10
	}),
	new Product({
		imagepath: 'http://www.scooterengineering.com/wp-content/uploads/2012/06/ss_scooter_px200_restoration-42-300x300.jpg',
		title: 'new products',
		desc: 'new pro desc',
		price: 10
	})
	];
var done = 0;
	for(var i = 0; i<products.length; i++){
		products[i].save(function(err,result){
			done++;
			if(done == products.length){
				console.log('fine');
				mongoose.disconnect();
			}

		});
		
	}