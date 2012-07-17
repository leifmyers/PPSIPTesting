var request = require('request'),
callback = function(error, response, body) {
	if(response.statusCode === 404)
		console.log('404 on URL ');
	if(!error && response.statusCode == 200) {
		console.log(body)
		console.log(body.length);
	}
};


console.log('***begin prescription***');



console.log('***begin prescription***');
console.log('GET getpatientid');
request.get('http://localhost:1983/prescription/getpatientid?storeNumber=12&prescriptionid=15', callback);

console.log('POST FillPrescriptions');
//request.post({}, callback);


request.get({url: 'http://localhost:1983/appointment/GetAppoixxntmentIndex?siteId=549&userHasHistoryAtSite=false'}, callback);
//request.get({url: 'http://localhost:1983/appointment/GetAppointmentLocations'}, callback);