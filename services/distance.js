const request = require("request")

const apiKey = "9PDait3AonMmGkH8RnrS2aPH9SYUJenG7eOrRDL0rvclOQ9gVgg2osDmVrRcwJAp";
const zipCodeURL = 'https://www.zipcodeapi.com/rest/';

const distance = {
	find: (req, res, next) => {
		request(zipCodeURL + apiKey + '/distance.json/' + req.params.zipcode1 + '/' + req.params.zipcode2 + '/mile',
	        function (error, response, body) {
	           if (!error && response.statusCode == 200) {
	               response = JSON.parse(body);
	               res.send(response);
	           } else {
	               console.log(response.statusCode + response.body);
	               res.send({distance: -1});
	           }
	        }
	    );
	}
}

module.exports = distance