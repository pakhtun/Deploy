var chai = require('chai');
var chaiHTTP = require('chai-http');
//var app = require('/home/ktuser/Deploy/index.js');
//var should = chai.should();
var expect = require('chai').expect;

chai.use(chaiHTTP);

describe('Server', function() {
	it('should reply to a GET request', function(done) {
		chai.request('/home/ktuser/Deploy/index.js')
		.get('/')
		.end(function(err, res){
			//not working, trying 'expect'			
			//res.should.have.status(200);
			
			expect(res).to.have.status(200);
			//alternative asser			
			//expect(res).to.equal('Your GET Request has been 				recieved.');
			
			
		});
	done();	
	});
	   
});

