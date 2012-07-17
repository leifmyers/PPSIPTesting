var assert = require('assert')
var request = require('request'),
callback = function(error, response, body) {
	assert.notEqual(response.statusCode, 404);
	assert.notEqual(response.statusCode, 400);
	assert(!error);
	assert.notEqual(body, null);
};


describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})

describe('appointment', function(){
	describe('GET appointment/GetAppointmentIndex', function() {
		it('should return with json data', function(done){
				request.get('http://localhost:1983/appointment/GetAppointmentIndex?siteId=549&userHasHistoryAtSite=false', function(error, response, body) {
					callback(error, response, body);
					done();
			});
		})
	})
})

describe('appointment', function(){
	describe('GET appointment/GetAppointmentLocations', function() {
		it('should return with json data', function(done){
				request.get('http://localhost:1983/appointment/GetAppointmentLocations', function(error, response, body) {
					callback(error, response, body);
					done();
			});
		})
	})
})

describe('appointment', function(){
	describe('GET appointment/GetAppointmentLocationsBySite', function() {
		it('should return with json data', function(done){
				request.get('http://localhost:1983/appointment/GetAppointmentLocationsBySite?siteId=549', function(error, response, body) {
					callback(error, response, body);
					done();
			});
		})
	})
})