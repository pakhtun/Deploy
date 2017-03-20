var chai = require('chai');
var chaiHTTP = require('chai-http');
var expect = require('chai').expect;
var api = require('/home/ktuser/Deploy/API.js');

//var app = require('/home/ktuser/Deploy/index.js');
//var should = chai.should();
//chai.use(chaiHTTP);


describe('Correct Multiplication:', function() {

	it('The API must correctly double the number it was given', function (done) {
	
	var bar = api.double(200);
	expect(bar).to.equal(400);
	
	done();
	});


});

